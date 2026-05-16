import { useEffect, useState } from 'react';
import { apiFetch } from '../../lib/api';
import { Star, Zap, Trophy, Flame, Award, Lock } from 'lucide-react';
import { motion } from 'motion/react';

const iconMap: any = {
  Star: Star,
  Zap: Zap,
  Trophy: Trophy,
  Flame: Flame,
  Award: Award
};

export function Achievements() {
  const [achievements, setAchievements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const data = await apiFetch('/api/learning/achievements');
        setAchievements(data.achievements);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAchievements();
  }, []);

  if (loading) return <div className="h-40 bg-gray-50 rounded-[2rem] animate-pulse"></div>;

  return (
    <div className="bg-white p-8 rounded-[2rem] border-2 border-gray-100 shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-black text-gray-900">الأوسمة والإنجازات</h2>
        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
          {achievements.filter(a => a.is_earned).length} / {achievements.length}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {achievements.map((achievement) => {
          const Icon = iconMap[achievement.icon] || Award;
          return (
            <motion.div 
              key={achievement.id}
              whileHover={achievement.is_earned ? { scale: 1.05 } : {}}
              className={`flex flex-col items-center text-center p-4 rounded-2xl border-2 transition-all ${
                achievement.is_earned 
                  ? 'bg-orange-50 border-orange-200 text-primary' 
                  : 'bg-gray-50 border-gray-100 text-gray-300 opacity-60'
              }`}
            >
              <div className={`p-3 rounded-xl mb-2 ${achievement.is_earned ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-gray-200'}`}>
                {achievement.is_earned ? <Icon size={24} /> : <Lock size={24} />}
              </div>
              <div className="font-bold text-sm block">{achievement.title}</div>
              <div className="text-[10px] font-medium leading-tight mt-1">{achievement.description}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
