import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiFetch } from '../lib/api';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { LoadingPage } from '../components/common/LoadingPage';

import { ScrambledWordGame } from '../components/game/ScrambledWordGame';
import { SentenceArrangementGame } from '../components/game/SentenceArrangementGame';
import { TranslationChallengeGame } from '../components/game/TranslationChallengeGame';
import { WordMatchingGame } from '../components/game/WordMatchingGame';

export default function GameLevel() {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const [levelData, setLevelData] = useState<any>(null);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const [selectedLessonIndex, setSelectedLessonIndex] = useState<number>(0);

  useEffect(() => {
    apiFetch(`/api/learning/game-level/${levelId}`)
      .then(data => {
        console.log('Game level data received:', data);
        setLevelData(data);
      })
      .catch((err) => {
        console.error('Failed to load game level:', err);
        toast.error("Failed to load game level");
      })
      .finally(() => setLoading(false));
  }, [levelId]);

  const handleComplete = async (isCorrect: boolean) => {
    if (!isCorrect) {
      toast.error('حاول مرة أخرى! 💪');
      return;
    }

    toast.success('إجابة رائعة! 🌟');
    
    setTimeout(async () => {
      if (selectedLessonIndex < levelData.challenges.length - 1) {
        // Move to next lesson in the same level
        setSelectedLessonIndex(selectedLessonIndex + 1);
      } else {
        // All lessons in this level completed
        try {
          await apiFetch('/api/learning/complete-game-level', {
            method: 'POST',
            body: JSON.stringify({ levelId })
          });
          
          // Save completed level to localStorage
          const levelType = levelData.level.level_type;
          const saved = localStorage.getItem(`limohero_completed_${levelType}`);
          const completedLevels = saved ? JSON.parse(saved) : [];
          if (!completedLevels.includes(parseInt(levelId!))) {
            completedLevels.push(parseInt(levelId!));
            localStorage.setItem(`limohero_completed_${levelType}`, JSON.stringify(completedLevels));
          }
          
          toast.success(`مبروك! أكملت المستوى وحصلت على ${levelData.level.xp_reward} نقطة! 🏆`);
          setTimeout(() => navigate(`/game/type/${levelType}`), 1500);
        } catch (e) {
          navigate('/game');
        }
      }
    }, 1000);
  };

  if (loading || !levelData || !levelData.level || !levelData.challenges) {
    return <LoadingPage message="جاري تجهيز المستوى..." />;
  }

  if (levelData.challenges.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">لا توجد تحديات في هذا المستوى</h2>
          <button onClick={() => navigate('/game')} className="btn-primary">
            العودة إلى مركز الألعاب
          </button>
        </div>
      </div>
    );
  }

  const currentChallenge = levelData.challenges[selectedLessonIndex];
  
  if (!currentChallenge) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">خطأ في تحميل التحدي</h2>
          <button onClick={() => navigate('/game')} className="btn-primary">
            العودة إلى مركز الألعاب
          </button>
        </div>
      </div>
    );
  }

  // Get background color based on difficulty
  const difficultyBg = 
    levelData.level.difficulty === 'easy' ? 'bg-gradient-to-br from-blue-50 to-cyan-50' :
    levelData.level.difficulty === 'medium' ? 'bg-gradient-to-br from-orange-50 to-amber-50' :
    'bg-gradient-to-br from-red-50 to-pink-50';

  return (
    <div className={`min-h-screen ${difficultyBg} flex flex-col p-4 md:p-8`}>
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
          <header className="flex items-center justify-between mb-8 gap-4">
              <button 
                onClick={() => navigate('/game')}
                className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 text-gray-400 hover:text-primary transition-colors shrink-0"
              >
                  <ChevronLeft />
              </button>
              
              <div className="flex-1">
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                            style={{ width: `${((selectedLessonIndex + 1) / levelData.challenges.length) * 100}%` }}
                            className="h-full bg-primary"
                        />
                    </div>
                    <p className="text-[10px] text-center font-black text-gray-400 uppercase tracking-widest">
                        الدرس {selectedLessonIndex + 1} من {levelData.challenges.length}
                    </p>
                  </div>
              </div>
          </header>
          
          <main className="flex-1 flex flex-col justify-center">
                <div key={selectedLessonIndex}>
                        {levelData.level.level_type === 'scrambled_word' && (
                            <ScrambledWordGame 
                                word={currentChallenge.question_text} 
                                translation={currentChallenge.context_ar}
                                onComplete={handleComplete} 
                            />
                        )}
                        {levelData.level.level_type === 'sentence_arrangement' && (
                            <SentenceArrangementGame 
                                sentence={currentChallenge.question_text} 
                                onComplete={handleComplete} 
                            />
                        )}
                        {levelData.level.level_type === 'translation' && (
                            <TranslationChallengeGame 
                                text={currentChallenge.question_text} 
                                expectedTranslation={currentChallenge.answer_text} 
                                onComplete={handleComplete} 
                            />
                        )}
                        {levelData.level.level_type === 'word_matching' && (
                            <WordMatchingGame 
                                data={currentChallenge.options}
                                title={currentChallenge.context_ar || currentChallenge.question_text}
                                onComplete={handleComplete} 
                            />
                        )}
                </div>
          </main>
      </div>
    </div>
  );
}
