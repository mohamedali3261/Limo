import { useState, useEffect } from 'react';
import { Trophy, BookOpen, Target, Gamepad2, Sparkles } from 'lucide-react';
import { apiFetch } from '../lib/api';
import { LoadingPage } from '../components/common/LoadingPage';
import { WordCatcherCard } from '../components/gamehub/WordCatcherCard';
import { GameCategoryCard } from '../components/gamehub/GameCategoryCard';

export default function GameHub() {
  const [levels, setLevels] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiFetch('/api/learning/game-levels')
      .then(data => setLevels(data.levels))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const getGameInfo = (type: string) => {
    switch (type) {
        case 'scrambled_word': 
          return { 
            icon: Target, 
            color: 'bg-gradient-to-br from-blue-500 to-blue-600',
            name: 'ترتيب الحروف',
            description: 'رتب الحروف المبعثرة لتكوين كلمات صحيحة',
            emoji: '🔤'
          };
        case 'sentence_arrangement': 
          return { 
            icon: BookOpen, 
            color: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
            name: 'بناء الجمل',
            description: 'رتب الكلمات لتكوين جمل مفيدة',
            emoji: '📝'
          };
        case 'translation': 
          return { 
            icon: Trophy, 
            color: 'bg-gradient-to-br from-amber-500 to-amber-600',
            name: 'التحدي الاحترافي',
            description: 'حسّن من مستوى الترجمة والصياغة',
            emoji: '🏆'
          };
        case 'word_matching': 
          return { 
            icon: Gamepad2, 
            color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
            name: 'توصيل الكلمات',
            description: 'وصّل الكلمات الإنجليزية بمعانيها العربية',
            emoji: '🎯'
          };
        case 'word_catcher': 
          return { 
            icon: Target, 
            color: 'bg-gradient-to-br from-primary to-primary-dark',
            name: 'صياد الكلمات',
            description: 'اصطد الكلمات الصحيحة قبل نفاد الوقت',
            emoji: '⚡'
          };
        default: 
          return { 
            icon: Gamepad2, 
            color: 'bg-gradient-to-br from-gray-500 to-gray-600',
            name: type,
            description: 'لعبة تفاعلية',
            emoji: '🎮'
          };
    }
  };

  const groupedLevels = levels.reduce((acc, level) => {
    if (!acc[level.level_type]) acc[level.level_type] = [];
    acc[level.level_type].push(level);
    return acc;
  }, {} as Record<string, any[]>);

  if (loading) return <LoadingPage />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 md:mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
            <Sparkles className="text-primary w-5 h-5" />
            <span className="text-sm font-bold text-gray-600">مركز الألعاب التعليمية</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-3 flex items-center justify-center gap-3">
            اختر لعبتك المفضلة
            <Gamepad2 className="text-purple-600" size={56} />
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            تعلم الإنجليزية بطريقة ممتعة من خلال ألعاب تفاعلية مصممة خصيصاً لك
          </p>
        </header>

        <div className="space-y-4 md:space-y-6">
          {/* Special Word Catcher Game */}
          <WordCatcherCard />
          
          {Object.entries(groupedLevels).map(([type, levelsOfType]: [string, any[]]) => {
            const gameInfo = getGameInfo(type);
            return (
              <GameCategoryCard 
                key={type} 
                type={type} 
                levelsCount={levelsOfType.length} 
                icon={gameInfo.icon} 
                colorClass={gameInfo.color}
                name={gameInfo.name}
                description={gameInfo.description}
                emoji={gameInfo.emoji}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
