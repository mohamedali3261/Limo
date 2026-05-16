import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { apiFetch } from '../lib/api';
import { motion } from 'motion/react';
import { ChevronLeft, Lock, CheckCircle } from 'lucide-react';
import { LoadingPage } from '../components/common/LoadingPage';
import { useAuthStore } from '../lib/store/auth';

export default function LevelSelection() {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  const [levels, setLevels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [completedLevels, setCompletedLevels] = useState<Set<number>>(new Set());
  const { user } = useAuthStore();

  useEffect(() => {
    // Load completed levels from localStorage
    const saved = localStorage.getItem(`memohero_completed_${type}`);
    if (saved) {
      setCompletedLevels(new Set(JSON.parse(saved)));
    }
  }, [type]);

  useEffect(() => {
    apiFetch('/api/learning/game-levels')
      .then(data => {
        const filtered = data.levels.filter((l: any) => l.level_type === type);
        setLevels(filtered.sort((a: any, b: any) => a.order_index - b.order_index));
      })
      .catch((e) => console.error("DEBUG: Error fetching levels:", e))
      .finally(() => setLoading(false));
  }, [type]);

  const isLevelUnlocked = (index: number) => {
    // First level is always unlocked
    if (index === 0) return true;
    // Check if previous level is completed
    const previousLevel = levels[index - 1];
    return previousLevel && completedLevels.has(previousLevel.id);
  };

  const handleLevelClick = (level: any, index: number) => {
    if (isLevelUnlocked(index)) {
      navigate(`/game/level/${level.id}`);
    }
  };

  if (loading) return <LoadingPage />;

  // Calculate progress
  const totalLevels = levels.length;
  const completedCount = levels.filter(l => completedLevels.has(l.id)).length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate('/game')} className="p-3 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-primary transition-all"><ChevronLeft /></button>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            {type === 'word_matching' ? 'توصيل الكلمات' :
             type === 'scrambled_word' ? 'خلط الحروف' :
             type === 'sentence_arrangement' ? 'بناء الجمل' :
             type === 'translation' ? 'المترجم المحترف' :
             type?.replace('_', ' ')}
          </h1>
          {false && (
            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
            </span>
          )}
        </div>
        
        {/* Progress Bar */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-bold text-gray-600">التقدم</span>
            <span className="text-sm font-bold text-primary">{completedCount} / {totalLevels}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(completedCount / totalLevels) * 100}%` }}
              className="bg-primary h-3 rounded-full"
            />
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-4" dir="rtl">
          {levels.map((level, index) => {
            const isUnlocked = isLevelUnlocked(index);
            const isCompleted = completedLevels.has(level.id);
            
            // Get difficulty color and background
            const difficultyStyles = 
              level.difficulty === 'easy' ? {
                border: 'border-blue-200 hover:border-blue-400',
                bg: 'bg-blue-50',
                bgLight: 'bg-gradient-to-br from-blue-50 to-cyan-50'
              } :
              level.difficulty === 'medium' ? {
                border: 'border-orange-200 hover:border-orange-400',
                bg: 'bg-orange-50',
                bgLight: 'bg-gradient-to-br from-orange-50 to-amber-50'
              } : {
                border: 'border-red-200 hover:border-red-400',
                bg: 'bg-red-50',
                bgLight: 'bg-gradient-to-br from-red-50 to-pink-50'
              };
            
            return (
              <motion.button
                key={level.id}
                whileHover={isUnlocked ? { scale: 1.05 } : {}}
                whileTap={isUnlocked ? { scale: 0.95 } : {}}
                className={`aspect-square p-4 rounded-3xl shadow-sm border-2 transition-all flex flex-col items-center justify-center gap-2 relative ${
                  isUnlocked 
                    ? `${difficultyStyles.bgLight} ${difficultyStyles.border} cursor-pointer` 
                    : 'bg-gray-100 border-gray-200 cursor-not-allowed opacity-60'
                }`}
                onClick={() => handleLevelClick(level, index)}
                disabled={!isUnlocked}
              >
                {isCompleted && (
                  <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
                    <CheckCircle size={16} />
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-black text-xl overflow-hidden shadow-inner ${
                  isUnlocked ? 'bg-primary/10 text-primary' : 'bg-gray-300 text-gray-500'
                }`}>
                  {!isUnlocked ? (
                    <Lock size={24} />
                  ) : level.icon_url ? (
                    <img src={level.icon_url} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <span className="opacity-80">{index + 1}</span>
                  )}
                </div>
                <p className={`font-bold text-xs text-center ${isUnlocked ? 'text-gray-700' : 'text-gray-500'}`}>
                  {level.title}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
