import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Lock } from 'lucide-react';
import { apiFetch } from '../lib/api';
import { LoadingPage } from '../components/common/LoadingPage';
import { toast } from 'sonner';

export default function GameTypeSelector() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [levels, setLevels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const data = await apiFetch('/api/learning/game-levels');
        // Filter levels by type
        const filteredLevels = data.levels.filter((level: any) => level.level_type === type);
        setLevels(filteredLevels);

        // Load completed levels from localStorage
        const saved = localStorage.getItem(`limohero_completed_${type}`);
        if (saved) {
          setCompletedLevels(JSON.parse(saved));
        }
      } catch (err) {
        console.error('Failed to load game levels:', err);
        toast.error('فشل تحميل المستويات');
        navigate('/game');
      } finally {
        setLoading(false);
      }
    };

    fetchLevels();
  }, [type, navigate]);

  const getGameInfo = (gameType: string) => {
    const gameInfoMap: Record<string, any> = {
      'scrambled_word': {
        name: 'ترتيب الحروف',
        description: 'رتب الحروف المبعثرة لتكوين كلمات صحيحة',
        emoji: '🔤'
      },
      'sentence_arrangement': {
        name: 'بناء الجملة',
        description: 'رتب الكلمات لتكوين جمل مفيدة',
        emoji: '📝'
      },
      'translation': {
        name: 'التحدي الاحترافي',
        description: 'حسّن من مستوى الترجمة والصياغة',
        emoji: '🌍'
      },
      'word_matching': {
        name: 'توصيل الكلمات',
        description: 'وصّل الكلمات الإنجليزية بمعانيها العربية',
        emoji: '🎯'
      }
    };
    return gameInfoMap[gameType] || { name: gameType, description: 'لعبة تفاعلية', emoji: '🎮' };
  };

  if (loading) return null;

  const gameInfo = getGameInfo(type || '');
  const totalXP = levels.reduce((sum, level) => sum + (level.xp_reward || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-6 lg:p-8" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigate('/game')}
              className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-bold"
            >
              <ArrowLeft size={20} className="rotate-180" />
            </button>
            <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold flex items-center gap-2">
              <span>⭐</span>
              <span>{totalXP} نقطة</span>
            </div>
          </div>

          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              مستويات {gameInfo.name}
            </h1>
          </div>
        </div>

        {/* Levels Grid */}
        {levels.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {levels.map((level, index) => {
              const isCompleted = completedLevels.includes(level.id);
              const isLocked = index > 0 && !completedLevels.includes(levels[index - 1].id);

              return (
                <motion.button
                  key={level.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={!isLocked ? { scale: 1.05, y: -4 } : {}}
                  whileTap={!isLocked ? { scale: 0.95 } : {}}
                  onClick={() => !isLocked && navigate(`/game/level/${level.id}`)}
                  disabled={isLocked}
                  className={`relative rounded-3xl p-6 md:p-8 transition-all duration-300 flex flex-col items-center justify-center text-center group ${
                    isCompleted
                      ? 'bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-blue-300 shadow-lg'
                      : isLocked
                      ? 'bg-gray-100 border-2 border-gray-200 opacity-60 cursor-not-allowed'
                      : 'bg-white border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-blue-300'
                  }`}
                >
                  {/* Content */}
                  <div className="relative z-10 space-y-2 w-full">
                    {/* Lock Icon - Top */}
                    {isLocked && (
                      <div className="flex justify-center mb-2">
                        <Lock size={28} className="text-gray-400" />
                      </div>
                    )}

                    {/* Completed Badge */}
                    {isCompleted && (
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        ✓
                      </div>
                    )}

                    <div className={`text-4xl md:text-5xl font-black ${
                      isCompleted ? 'text-blue-600' : isLocked ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className={`text-xs md:text-sm font-bold ${
                      isCompleted ? 'text-blue-600' : isLocked ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {level.title}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-6">لا توجد مستويات متاحة حالياً</p>
            <button
              onClick={() => navigate('/game')}
              className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors"
            >
              العودة إلى مركز الألعاب
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
