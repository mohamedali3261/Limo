import * as React from 'react';
import { useState, useEffect, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiFetch } from '../lib/api';
import { ArrowLeft, Map } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { useAuthStore } from '../lib/store/auth';
import { LessonContent } from '../components/learning/LessonContent';
import { QuizView } from '../components/learning/QuizView';
import { LessonResults } from '../components/learning/LessonResults';

import { LessonHUD } from '../components/learning/LessonHUD';
import { playSuccessSound } from '../lib/audio';
import { useSettingsStore } from '../lib/store/settings';
import { LoadingPage } from '../components/common/LoadingPage';

export default function LessonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchUser } = useAuthStore();
  const { ttsRate, ttsGender } = useSettingsStore();

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<'lesson' | 'quiz'>('lesson');
  const [pageReady, setPageReady] = useState(false);
  
  // Phase state for Phased Alphabet
  const [isPhased, setIsPhased] = useState(false);
  const [phasedType, setPhasedType] = useState<string | null>(null);
  const [phasedDataList, setPhasedDataList] = useState<any[]>([]);
  const [currentPhase, setCurrentPhase] = useState(0);

  // Quiz states
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [wrongQuestionsPool, setWrongQuestionsPool] = useState<any[]>([]);
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [currentQuestionsList, setCurrentQuestionsList] = useState<any[]>([]);

  // Function to shuffle array
  const shuffleArray = (array: any[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const res = await apiFetch(`/api/learning/lesson/${id}`);
        setData(res);
        
        // Check for Phased data using useMemo-like logic
        if (res.lesson.content?.startsWith('ALPHABET_PHASED_JSON:')) {
           setIsPhased(true);
           setPhasedType('ALPHABET_JSON:');
           try {
             const parsed = JSON.parse(res.lesson.content.replace(/^ALPHABET_PHASED_JSON:\s*/, ''));
             setPhasedDataList(parsed);
             setCurrentQuestionsList(shuffleArray(parsed[0].quizzes));
           } catch (e) {
             console.error('Failed to parse phased alphabet', e);
           }
        } else if (res.lesson.content?.startsWith('VOCAB_PHASED_JSON:')) {
           setIsPhased(true);
           setPhasedType('VOCAB_JSON:');
           try {
             const parsed = JSON.parse(res.lesson.content.replace(/^VOCAB_PHASED_JSON:\s*/, ''));
             setPhasedDataList(parsed);
             setCurrentQuestionsList(shuffleArray(parsed[0].quizzes));
           } catch (e) {
             console.error('Failed to parse phased vocab', e);
           }
        } else {
           setCurrentQuestionsList(shuffleArray(res.quizzes || []));
        }
      } catch (err) {
        toast.error("Failed to load lesson");
        navigate('/learning');
      } finally {
        setLoading(false);
        requestAnimationFrame(() => setPageReady(true));
      }
    };
    fetchLesson();
  }, [id, navigate]);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = ttsRate;
      
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => 
        v.lang.startsWith('en') && 
        v.name.toLowerCase().includes(ttsGender.toLowerCase())
      ) || voices.find(v => v.lang.startsWith('en'));
      
      if (voice) utterance.voice = voice;
      
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleQuestionComplete = (isCorrect: boolean) => {
    if (isCorrect) {
      playSuccessSound();
      setScore(s => s + 1);
    } else {
      if (!isReviewMode) {
        setWrongQuestionsPool(prev => [...prev, currentQuestionsList[currentQuestion]]);
      }
    }
    setIsAnswered(true);
  };

  const handleCheck = () => {
    if (!selectedOption) return;
    const isCorrect = selectedOption === currentQuestionsList[currentQuestion].correct_answer;
    handleQuestionComplete(isCorrect);
  };

  const handleNext = async () => {
    if (currentQuestion < currentQuestionsList.length - 1) {
      setCurrentQuestion(q => q + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // End of current list
      if (!isReviewMode && wrongQuestionsPool.length > 0) {
        toast("وقت المراجعة!", {
          description: "دعنا نصحح الأخطاء التي وقعت فيها.",
          icon: "🔄"
        });
        setIsReviewMode(true);
        setCurrentQuestionsList(shuffleArray([...wrongQuestionsPool]));
        setWrongQuestionsPool([]);
        setCurrentQuestion(0);
        setSelectedOption(null);
        setIsAnswered(false);
      } else {
        // If phased, check if there are more phases
        if (isPhased && currentPhase < phasedDataList.length - 1) {
          const nextPhase = currentPhase + 1;
          setCurrentPhase(nextPhase);
          setCurrentQuestionsList(shuffleArray(phasedDataList[nextPhase].quizzes));
          setCurrentQuestion(0);
          setSelectedOption(null);
          setIsAnswered(false);
          setMode('lesson'); // go back to lesson mode for next chunk
        } else {
          await finishLessonFlow();
        }
      }
    }
  };

  const finishLessonFlow = async () => {
    setShowResults(true);
    try {
      await apiFetch('/api/learning/complete-lesson', {
        method: 'POST',
        body: JSON.stringify({ lessonId: id })
      });
      fetchUser();
      toast.success("أحسنت! تم حفظ تقدمك.");
    } catch (err) {
      console.error(err);
    }
  };

  const handleRetry = () => {
    setShowResults(false);
    setCurrentQuestion(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedOption(null);
    setIsReviewMode(false);
    setWrongQuestionsPool([]);
    if (isPhased) {
      setCurrentPhase(0);
      setCurrentQuestionsList(shuffleArray(phasedDataList[0].quizzes));
      setMode('lesson');
    } else {
      setCurrentQuestionsList(shuffleArray(data.quiz));
    }
  };

  if (loading) return <LoadingPage />;

  if (showResults) {
    const totalQuestions = isPhased ? phasedDataList.reduce((acc, curr) => acc + curr.quizzes.length, 0) : data.quiz.length;
    return (
      <LessonResults 
        score={score} 
        total={totalQuestions} 
        onRetry={handleRetry} 
      />
    );
  }

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full space-y-8 pb-32 font-sans relative px-4 md:px-8">
          <LessonHUD 
            title={data?.lesson.title}
            mode={mode}
            isReviewMode={isReviewMode}
            currentQuestionIndex={currentQuestion}
            totalQuestions={currentQuestionsList.length}
          />

          <div className="pt-24">
            <AnimatePresence mode="wait">
              {mode === 'lesson' ? (
                <motion.div 
                  key="lesson"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <LessonContent 
                    title={data.lesson.title} 
                    content={isPhased ? `${phasedType}\n${JSON.stringify(phasedDataList[currentPhase].items)}` : data.lesson.content} 
                    onStartQuiz={() => {
                      if (currentQuestionsList.length === 0) {
                        finishLessonFlow();
                      } else {
                        setMode('quiz');
                      }
                    }}
                    isCompleted={data.lesson.is_completed}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  key="quiz"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <QuizView 
                    currentQuestion={currentQuestion}
                    totalQuestions={currentQuestionsList.length}
                    questionData={currentQuestionsList[currentQuestion]}
                    selectedOption={selectedOption}
                    onSelect={setSelectedOption}
                    isAnswered={isAnswered}
                    onCheck={handleCheck}
                    onNext={handleNext}
                    onQuestionComplete={handleQuestionComplete}
                    speak={speak}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
