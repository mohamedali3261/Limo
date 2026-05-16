import { motion } from 'motion/react';
import { Flame, Star, Trophy, Target, Award, CheckCircle2, BookOpen } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useAuthStore } from '../../../../../lib/store/auth';
import { useProgress } from '../../context/ProgressContext';

const AchievementIcon = ({ name, unlocked }: { name: string, unlocked: boolean }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <Star className="w-8 h-8 text-amber-500" />;
  return <Icon className={`w-8 h-8 ${unlocked ? 'text-amber-500' : 'text-slate-400'}`} />;
};

export default function ProfileView() {
  const { user } = useAuthStore();
  const { completedLessons } = useProgress();

  // French-specific progress from localStorage
  const frenchXP = parseInt(localStorage.getItem('french_xp') || '0', 10);
  const frenchStreak = parseInt(localStorage.getItem('french_streak') || '0', 10);
  
  // Calculate level using progressive system
  const calculateLevel = (xp: number): number => {
    let level = 1;
    let totalXPNeeded = 0;
    
    while (totalXPNeeded <= xp) {
      totalXPNeeded += level * 50;
      if (totalXPNeeded <= xp) {
        level++;
      }
    }
    
    return level;
  };
  
  const frenchLevel = calculateLevel(frenchXP);

  const stats = {
    xp: frenchXP,
    streak: frenchStreak,
    level: frenchLevel,
    completedLessons: completedLessons.length,
    completedQuizzes: parseInt(localStorage.getItem('french_completed_quizzes') || '0', 10),
  };

  const achievements = [
    { id: 1, title: 'البداية الفرنسية', description: 'أكمل أول درس فرنسي', icon: 'Sparkles', unlocked: completedLessons.length > 0 },
    { id: 2, title: 'المثابر الفرنسي', description: 'حافظ على سلسلة 7 أيام', icon: 'Flame', unlocked: frenchStreak >= 7 },
    { id: 3, title: 'خبير الفرنسية', description: 'اكمل 10 دروس', icon: 'Brain', unlocked: completedLessons.length >= 10 },
    { id: 4, title: 'متحدث الفرنسية', description: 'اكمل 5 محادثات', icon: 'MessageCircle', unlocked: false },
    { id: 5, title: 'نجم الفرنسية', description: 'اجمع 1000 نقطة خبرة', icon: 'Star', unlocked: frenchXP >= 1000 },
    { id: 6, title: 'ماستر الفرنسية', description: 'اكمل 20 درس', icon: 'Trophy', unlocked: completedLessons.length >= 20 },
  ];

  const quests = [
    { id: 1, title: 'أكمل درس فرنسي واحد', progress: Math.min(completedLessons.length, 1), target: 1, completed: completedLessons.length >= 1, xpReward: 50 },
    { id: 2, title: 'أكمل 3 دروس', progress: Math.min(completedLessons.length, 3), target: 3, completed: completedLessons.length >= 3, xpReward: 150 },
    { id: 3, title: 'اجمع 50 نقطة', progress: Math.min(frenchXP, 50), target: 50, completed: frenchXP >= 50, xpReward: 50 },
    { id: 4, title: 'حافظ على سلسلة 3 أيام', progress: Math.min(frenchStreak, 3), target: 3, completed: frenchStreak >= 3, xpReward: 50 },
    { id: 5, title: 'أكمل 5 دروس', progress: Math.min(completedLessons.length, 5), target: 5, completed: completedLessons.length >= 5, xpReward: 100 },
    { id: 6, title: 'اجمع 100 نقطة', progress: Math.min(frenchXP, 100), target: 100, completed: frenchXP >= 100, xpReward: 100 },
    { id: 7, title: 'حافظ على سلسلة 7 أيام', progress: Math.min(frenchStreak, 7), target: 7, completed: frenchStreak >= 7, xpReward: 100 },
    { id: 8, title: 'أكمل 10 دروس', progress: Math.min(completedLessons.length, 10), target: 10, completed: completedLessons.length >= 10, xpReward: 150 },
    { id: 9, title: 'اجمع 200 نقطة', progress: Math.min(frenchXP, 200), target: 200, completed: frenchXP >= 200, xpReward: 150 },
    { id: 10, title: 'أكمل 15 درس', progress: Math.min(completedLessons.length, 15), target: 15, completed: completedLessons.length >= 15, xpReward: 200 },
    { id: 11, title: 'حافظ على سلسلة 14 يوم', progress: Math.min(frenchStreak, 14), target: 14, completed: frenchStreak >= 14, xpReward: 200 },
    { id: 12, title: 'اجمع 300 نقطة', progress: Math.min(frenchXP, 300), target: 300, completed: frenchXP >= 300, xpReward: 200 },
    { id: 13, title: 'أكمل 20 درس', progress: Math.min(completedLessons.length, 20), target: 20, completed: completedLessons.length >= 20, xpReward: 250 },
    { id: 14, title: 'حافظ على سلسلة 21 يوم', progress: Math.min(frenchStreak, 21), target: 21, completed: frenchStreak >= 21, xpReward: 250 },
    { id: 15, title: 'اجمع 500 نقطة', progress: Math.min(frenchXP, 500), target: 500, completed: frenchXP >= 500, xpReward: 300 },
    { id: 16, title: 'أكمل 25 درس', progress: Math.min(completedLessons.length, 25), target: 25, completed: completedLessons.length >= 25, xpReward: 300 },
    { id: 17, title: 'حافظ على سلسلة 30 يوم', progress: Math.min(frenchStreak, 30), target: 30, completed: frenchStreak >= 30, xpReward: 350 },
    { id: 18, title: 'اجمع 750 نقطة', progress: Math.min(frenchXP, 750), target: 750, completed: frenchXP >= 750, xpReward: 400 },
    { id: 19, title: 'أكمل 30 درس', progress: Math.min(completedLessons.length, 30), target: 30, completed: completedLessons.length >= 30, xpReward: 450 },
    { id: 20, title: 'اجمع 1000 نقطة', progress: Math.min(frenchXP, 1000), target: 1000, completed: frenchXP >= 1000, xpReward: 500 },
    { id: 21, title: 'حافظ على سلسلة 45 يوم', progress: Math.min(frenchStreak, 45), target: 45, completed: frenchStreak >= 45, xpReward: 500 },
    { id: 22, title: 'أكمل 35 درس', progress: Math.min(completedLessons.length, 35), target: 35, completed: completedLessons.length >= 35, xpReward: 550 },
    { id: 23, title: 'اجمع 1500 نقطة', progress: Math.min(frenchXP, 1500), target: 1500, completed: frenchXP >= 1500, xpReward: 600 },
    { id: 24, title: 'حافظ على سلسلة 60 يوم', progress: Math.min(frenchStreak, 60), target: 60, completed: frenchStreak >= 60, xpReward: 650 },
    { id: 25, title: 'أكمل 40 درس', progress: Math.min(completedLessons.length, 40), target: 40, completed: completedLessons.length >= 40, xpReward: 700 },
    { id: 26, title: 'اجمع 2000 نقطة', progress: Math.min(frenchXP, 2000), target: 2000, completed: frenchXP >= 2000, xpReward: 750 },
    { id: 27, title: 'حافظ على سلسلة 90 يوم', progress: Math.min(frenchStreak, 90), target: 90, completed: frenchStreak >= 90, xpReward: 800 },
    { id: 28, title: 'أكمل 50 درس', progress: Math.min(completedLessons.length, 50), target: 50, completed: completedLessons.length >= 50, xpReward: 850 },
    { id: 29, title: 'اجمع 3000 نقطة', progress: Math.min(frenchXP, 3000), target: 3000, completed: frenchXP >= 3000, xpReward: 900 },
    { id: 30, title: 'أصبح بطل الفرنسية!', progress: Math.min(frenchXP, 5000), target: 5000, completed: frenchXP >= 5000, xpReward: 1000 },
  ];

  const completedQuestsCount = quests.filter(q => q.completed).length;
  const unlockedAchievements = achievements.filter(a => a.unlocked).length;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-5xl mx-auto flex flex-col items-center justify-start min-h-screen relative"
    >
      {/* Header */}
      <div className="w-full mb-12 mt-8">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-6 mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl flex items-center justify-center shadow-lg shadow-blue-600/30">
            <span className="text-5xl font-black text-white">{user?.username?.charAt(0).toUpperCase()}</span>
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">{user?.username}</h1>
            <p className="text-gray-500 font-bold text-lg">المستوى {stats.level} - الفرنسية</p>
          </div>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-bl-full -mr-8 -mt-8" />
          <Star className="w-12 h-12 text-amber-400 fill-amber-400 mb-2 relative z-10" />
          <h3 className="text-3xl font-black text-gray-800 relative z-10">{stats.xp}</h3>
          <p className="text-gray-400 font-bold mt-1 relative z-10">نقطة خبرة</p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/5 rounded-br-full -ml-8 -mt-8" />
          <Flame className={`w-12 h-12 mb-2 relative z-10 ${stats.streak > 0 ? 'text-orange-500 fill-orange-500' : 'text-gray-300'}`} />
          <h3 className="text-3xl font-black text-gray-800 relative z-10">{stats.streak}</h3>
          <p className="text-gray-400 font-bold mt-1 relative z-10">يوم متتالي</p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/5 rounded-bl-full -mr-8 -mt-8" />
          <Trophy className="w-12 h-12 text-blue-500 mb-2 relative z-10" />
          <h3 className="text-3xl font-black text-gray-800 relative z-10">{stats.completedLessons}</h3>
          <p className="text-gray-400 font-bold mt-1 relative z-10">درس مكتمل</p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-green-400/5 rounded-br-full -ml-8 -mt-8" />
          <BookOpen className="w-12 h-12 text-green-500 mb-2 relative z-10" />
          <h3 className="text-3xl font-black text-gray-800 relative z-10">{stats.completedQuizzes}</h3>
          <p className="text-gray-400 font-bold mt-1 relative z-10">اختبار مكتمل</p>
        </motion.div>
      </div>

      {/* Daily Quests */}
      <div className="w-full mb-12">
        <div className="flex items-center gap-3 mb-6 px-2">
          <Target className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-black text-gray-800">المهام اليومية</h2>
          <span className="ml-auto bg-blue-600/10 text-blue-600 px-4 py-2 rounded-xl text-sm font-bold">
            {completedQuestsCount} / {quests.length}
          </span>
        </div>

        <div className="grid gap-3">
          {quests.map((quest, index) => (
            <motion.div 
              key={quest.id}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-2xl border ${quest.completed ? 'bg-green-50 border-green-100' : 'bg-white border-gray-100'} shadow-sm flex items-center justify-between`}
            >
              <div className="flex-1 ml-4">
                <h4 className={`font-bold ${quest.completed ? 'text-green-700' : 'text-gray-700'}`}>{quest.title}</h4>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full ${quest.completed ? 'bg-green-500' : 'bg-blue-600'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(quest.progress / quest.target) * 100}%` }}
                    />
                  </div>
                  <span className={`text-sm font-bold ${quest.completed ? 'text-green-600' : 'text-gray-400'}`}>
                    {quest.progress} / {quest.target}
                  </span>
                </div>
              </div>
              
              <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${quest.completed ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-gray-50 text-gray-400'}`}>
                {quest.completed ? <CheckCircle2 className="w-6 h-6" /> : <div className="flex items-center text-xs font-bold gap-1"><Star className="w-3 h-3 fill-current" />{quest.xpReward}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="w-full">
        <div className="flex items-center gap-3 mb-6 px-2">
          <Trophy className="w-6 h-6 text-amber-500" />
          <h2 className="text-2xl font-black text-gray-800">الإنجازات</h2>
          <span className="ml-auto bg-amber-50 text-amber-600 px-4 py-2 rounded-xl text-sm font-bold">
            {unlockedAchievements} / {achievements.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-2xl border ${achievement.unlocked ? 'bg-white border-amber-200 shadow-sm' : 'bg-gray-50 border-gray-100 opacity-60'} flex gap-4 items-center`}
            >
              <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center ${achievement.unlocked ? 'bg-amber-50 shadow-inner' : 'bg-gray-100 grayscale'}`}>
                <AchievementIcon name={achievement.icon} unlocked={achievement.unlocked} />
              </div>
              <div>
                <h4 className={`font-bold ${achievement.unlocked ? 'text-gray-800' : 'text-gray-500'}`}>{achievement.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{achievement.description}</p>
              </div>
              {achievement.unlocked && (
                <Award className="w-6 h-6 text-amber-400 absolute left-4 opacity-20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
