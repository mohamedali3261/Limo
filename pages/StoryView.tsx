import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { apiFetch } from '../lib/api';
// @ts-ignore
import { toast } from 'sonner';
import { useAuthStore } from '../lib/store/auth';
import { playSuccessSound } from '../lib/audio';
import { useSettingsStore } from '../lib/store/settings';
import { LoadingPage } from '../components/common/LoadingPage';

import { Story, Scene, Question } from '../components/story/types';
import { StoryHeader } from '../components/story/StoryHeader';
import { StoryScene } from '../components/story/StoryScene';
import { StoryQuestion } from '../components/story/StoryQuestion';
import { StoryCompletion } from '../components/story/StoryCompletion';
import { useStoryProgress } from '../components/story/hooks/useStoryProgress';

export default function StoryView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, login, token } = useAuthStore();
  const { ttsRate, ttsGender } = useSettingsStore();
  const { saveProgress } = useStoryProgress();

  const [story, setStory] = useState<Story | null>(null);
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showQuestion, setShowQuestion] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const [showTranslation, setShowTranslation] = useState(true);
  const [autoPlayAudio, setAutoPlayAudio] = useState(false);
  const [isFinalQuizMode, setIsFinalQuizMode] = useState(false);
  const [finalQuestions, setFinalQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const data = await apiFetch(`/api/learning/story/${id}`);
        setStory(data.story);
        setScenes(data.scenes);
        setFinalQuestions(data.finalQuestions || []);
      } catch (err) {
        console.error(err);
        toast.error('فشل تحميل القصة');
        navigate('/stories');
      } finally {
        setLoading(false);
      }
    };
    fetchStory();
  }, [id, navigate]);

  const currentScene = scenes[currentSceneIndex];
  const sceneQuestions = currentScene?.questions || [];
  
  const questions = isFinalQuizMode ? finalQuestions : sceneQuestions;
  const currentQuestion = questions[currentQuestionIndex];

  const speakText = (text: string) => {
    if (!text || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = story?.language === 'french' ? 'fr-FR' : 'en-US';
    utterance.rate = ttsRate;
    
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => 
      v.lang.startsWith(utterance.lang.split('-')[0]) && 
      v.name.toLowerCase().includes(ttsGender.toLowerCase())
    ) || voices.find(v => v.lang.startsWith(utterance.lang.split('-')[0]));
    
    if (voice) utterance.voice = voice;
    utterance.pitch = 1.1;
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (autoPlayAudio && currentScene?.content_en && !showQuestion) {
      setTimeout(() => speakText(currentScene.content_en), 500);
    }
  }, [currentSceneIndex, autoPlayAudio, showQuestion, currentScene]);

  const handleNext = () => {
    if (questions.length > 0 && !showQuestion) {
      setShowQuestion(true);
      setCurrentQuestionIndex(0);
      return;
    }

    if (showQuestion && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      return;
    }

    if (showQuestion) {
      if (isFinalQuizMode) {
        finishStory();
        return;
      }
      
      if (currentSceneIndex < scenes.length - 1) {
        setCurrentSceneIndex(prev => prev + 1);
        setShowQuestion(false);
        setCurrentQuestionIndex(0);
      } else {
        if (finalQuestions.length > 0) {
          setIsFinalQuizMode(true);
          setShowQuestion(true);
          setCurrentQuestionIndex(0);
        } else {
          finishStory();
        }
      }
      return;
    }

    if (currentSceneIndex < scenes.length - 1) {
      setCurrentSceneIndex(prev => prev + 1);
      setShowQuestion(false);
      setCurrentQuestionIndex(0);
    } else {
      if (finalQuestions.length > 0) {
        setIsFinalQuizMode(true);
        setShowQuestion(true);
        setCurrentQuestionIndex(0);
      } else {
        finishStory();
      }
    }
  };

  const handleQuestionComplete = (correct: boolean) => {
    if (correct) {
      playSuccessSound();
      toast.success('إجابة صحيحة! أحسنت');
      setTimeout(() => {
        handleNext();
      }, 1500);
    } else {
      toast.error('إجابة خاطئة، حاول مرة أخرى');
    }
  };

  const finishStory = async () => {
    try {
      await apiFetch('/api/learning/complete-story', {
        method: 'POST',
        body: JSON.stringify({ storyId: id })
      });
      
      // حفظ التقدم محلياً
      if (story) {
        saveProgress(story.id, true);
      }
      
      const updatedUser = { ...user, xp: (user?.xp || 0) + (story?.xp_reward || 0) };
      login(updatedUser, token!);
      playSuccessSound();
      setIsFinished(true);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return null;

  if (isFinished && story) {
    return <StoryCompletion story={story} onContinue={() => navigate('/stories')} />;
  }

  return (
    <div className="h-screen flex flex-col font-sans bg-gray-50">
      <StoryHeader
        scenes={scenes}
        currentSceneIndex={currentSceneIndex}
        showTranslation={showTranslation}
        setShowTranslation={setShowTranslation}
        autoPlayAudio={autoPlayAudio}
        setAutoPlayAudio={setAutoPlayAudio}
        onExit={() => navigate('/stories')}
      />

      <div className="flex-1 flex flex-col items-center justify-center p-4 lg:p-6 overflow-hidden">
        <AnimatePresence mode="wait">
          {!showQuestion ? (
            <StoryScene
              scene={currentScene}
              showTranslation={showTranslation}
              isPlaying={isPlaying}
              onSpeak={speakText}
              onNext={handleNext}
              hasQuestions={questions.length > 0}
            />
          ) : (
            <StoryQuestion
              question={currentQuestion}
              isFinalQuiz={isFinalQuizMode}
              onComplete={handleQuestionComplete}
              onNext={handleNext}
              hasMoreQuestions={currentQuestionIndex < questions.length - 1}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
