import { useAuthStore } from '../lib/store/auth';
import { Flame, Star, Trophy, Target, Award, CheckCircle2, MessageSquare, Globe, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import FrenchFlag from '../components/languages/flags/FrenchFlag';
import EnglishFlag from '../components/languages/flags/EnglishFlag';
import SpanishFlag from '../components/languages/flags/SpanishFlag';
import GermanFlag from '../components/languages/flags/GermanFlag';

const AchievementIcon = ({ name, unlocked }: { name: string, unlocked: boolean }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <Star className="w-8 h-8 text-amber-500" />;
  return <Icon className={`w-8 h-8 ${unlocked ? 'text-amber-500' : 'text-slate-400'}`} />;
};

const LanguageCard = ({ language, code, flag: FlagComponent, onClick, color }: { language: string; code: string; flag: React.ComponentType; onClick: () => void; color: string }) => (
  <motion.button
    whileHover={{ scale: 1.05, y: -5 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`relative p-6 rounded-3xl bg-white border-2 border-gray-100 hover:border-${color} hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-4 overflow-hidden group`}
  >
    {/* Background gradient on hover */}
    <div className={`absolute inset-0 bg-gradient-to-br from-${color}/5 to-${color}/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    
    {/* Flag */}
    <div className="w-24 h-16 rounded-xl overflow-hidden shadow-md border border-gray-200 relative z-10">
      <FlagComponent />
    </div>
    
    {/* Language name */}
    <div className="relative z-10">
      <span className="font-black text-gray-800 text-lg block">{language}</span>
      <span className={`text-xs font-bold uppercase text-${color} mt-1 block`}>{code}</span>
    </div>
    
    {/* Arrow icon on hover */}
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileHover={{ opacity: 1, x: 0 }}
      className={`absolute right-4 bottom-4 text-${color} z-10`}
    >
      <ArrowRight className="w-5 h-5" />
    </motion.div>
  </motion.button>
);

export default function ProfilePage() {
  const { user } = useAuthStore();
  const navigate = useNavigate();

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

  // Mock data for profile
  const stats = {
    xp: user?.xp || 0,
    streak: user?.streak || 0,
    level: calculateLevel(user?.xp || 0),
    completedLessons: 12,
    completedStories: 5,
    achievements: [
      { id: 1, title: 'البداية', description: 'أكمل أول درس', icon: 'Sparkles', unlocked: true },
      { id: 2, title: 'المثابر', description: 'حافظ على سلسلة 7 أيام', icon: 'Flame', unlocked: user?.streak >= 7 },
      { id: 3, title: 'الخبير', description: 'اكمل 10 دروس', icon: 'Brain', unlocked: true },
      { id: 4, title: 'الحكاي', description: 'اكمل 5 قصص', icon: 'BookOpen', unlocked: true },
      { id: 5, title: 'النجم', description: 'اجمع 1000 نقطة خبرة', icon: 'Star', unlocked: user?.xp >= 1000 },
      { id: 6, title: 'الفائز', description: 'اكمل 20 لعبة', icon: 'Trophy', unlocked: false },
    ]
  };

  const quests = [
    { id: 1, title: 'أكمل درس واحد', progress: 1, target: 1, completed: true, xpReward: 50 },
    { id: 2, title: 'اقرأ قصة واحدة', progress: 1, target: 1, completed: true, xpReward: 50 },
    { id: 3, title: 'العب لعبة واحدة', progress: 0, target: 1, completed: false, xpReward: 50 },
    { id: 4, title: 'تحدث مع الذكاء الاصطناعي', progress: 0, target: 1, completed: false, xpReward: 50 },
    { id: 5, title: 'أكمل 3 دروس', progress: 1, target: 3, completed: false, xpReward: 150 },
    { id: 6, title: 'اجمع 50 نقطة خبرة', progress: Math.min(user?.xp || 0, 50), target: 50, completed: (user?.xp || 0) >= 50, xpReward: 50 },
    { id: 7, title: 'حافظ على سلسلة 3 أيام', progress: Math.min(user?.streak || 0, 3), target: 3, completed: (user?.streak || 0) >= 3, xpReward: 50 },
    { id: 8, title: 'أكمل 5 قصص', progress: 1, target: 5, completed: false, xpReward: 100 },
    { id: 9, title: 'اجمع 100 نقطة خبرة', progress: Math.min(user?.xp || 0, 100), target: 100, completed: (user?.xp || 0) >= 100, xpReward: 100 },
    { id: 10, title: 'أكمل 5 لعبات', progress: 0, target: 5, completed: false, xpReward: 100 },
    { id: 11, title: 'حافظ على سلسلة 7 أيام', progress: Math.min(user?.streak || 0, 7), target: 7, completed: (user?.streak || 0) >= 7, xpReward: 100 },
    { id: 12, title: 'اجمع 200 نقطة خبرة', progress: Math.min(user?.xp || 0, 200), target: 200, completed: (user?.xp || 0) >= 200, xpReward: 150 },
    { id: 13, title: 'أكمل 10 دروس', progress: 1, target: 10, completed: false, xpReward: 150 },
    { id: 14, title: 'حافظ على سلسلة 14 يوم', progress: Math.min(user?.streak || 0, 14), target: 14, completed: (user?.streak || 0) >= 14, xpReward: 200 },
    { id: 15, title: 'اجمع 300 نقطة خبرة', progress: Math.min(user?.xp || 0, 300), target: 300, completed: (user?.xp || 0) >= 300, xpReward: 200 },
    { id: 16, title: 'أكمل 10 قصص', progress: 1, target: 10, completed: false, xpReward: 200 },
    { id: 17, title: 'حافظ على سلسلة 21 يوم', progress: Math.min(user?.streak || 0, 21), target: 21, completed: (user?.streak || 0) >= 21, xpReward: 250 },
    { id: 18, title: 'اجمع 500 نقطة خبرة', progress: Math.min(user?.xp || 0, 500), target: 500, completed: (user?.xp || 0) >= 500, xpReward: 300 },
    { id: 19, title: 'أكمل 15 درس', progress: 1, target: 15, completed: false, xpReward: 450 },
    { id: 20, title: 'اجمع 1000 نقطة خبرة', progress: Math.min(user?.xp || 0, 1000), target: 1000, completed: (user?.xp || 0) >= 1000, xpReward: 500 },
    { id: 21, title: 'حافظ على سلسلة 45 يوم', progress: Math.min(user?.streak || 0, 45), target: 45, completed: (user?.streak || 0) >= 45, xpReward: 500 },
    { id: 22, title: 'أكمل 20 درس', progress: 1, target: 20, completed: false, xpReward: 550 },
    { id: 23, title: 'اجمع 1500 نقطة خبرة', progress: Math.min(user?.xp || 0, 1500), target: 1500, completed: (user?.xp || 0) >= 1500, xpReward: 600 },
    { id: 24, title: 'حافظ على سلسلة 60 يوم', progress: Math.min(user?.streak || 0, 60), target: 60, completed: (user?.streak || 0) >= 60, xpReward: 650 },
    { id: 25, title: 'أكمل 25 درس', progress: 1, target: 25, completed: false, xpReward: 700 },
    { id: 26, title: 'اجمع 2000 نقطة خبرة', progress: Math.min(user?.xp || 0, 2000), target: 2000, completed: (user?.xp || 0) >= 2000, xpReward: 750 },
    { id: 27, title: 'حافظ على سلسلة 90 يوم', progress: Math.min(user?.streak || 0, 90), target: 90, completed: (user?.streak || 0) >= 90, xpReward: 800 },
    { id: 28, title: 'أكمل 30 درس', progress: 1, target: 30, completed: false, xpReward: 850 },
    { id: 29, title: 'اجمع 3000 نقطة خبرة', progress: Math.min(user?.xp || 0, 3000), target: 3000, completed: (user?.xp || 0) >= 3000, xpReward: 900 },
    { id: 30, title: 'أصبح بطل التعلم!', progress: Math.min(user?.xp || 0, 5000), target: 5000, completed: (user?.xp || 0) >= 5000, xpReward: 1000 },
  ];

  const completedQuestsCount = quests.filter(q => q.completed).length;
  const unlockedAchievements = stats.achievements.filter(a => a.unlocked).length;

  const languages = [
    { language: 'الفرنسية', code: 'FR', flag: FrenchFlag, path: '/french/profile', color: 'blue-600' },
    { language: 'الألمانية', code: 'DE', flag: GermanFlag, path: '/german/profile', color: 'yellow-600' },
    { language: 'الإسبانية', code: 'ES', flag: SpanishFlag, path: '/spanish/profile', color: 'red-600' },
    { language: 'الإنجليزية', code: 'EN', flag: EnglishFlag, path: '/profile', color: 'indigo-600' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-w-5xl mx-auto flex flex-col items-center justify-start min-h-screen p-4 relative pb-24"
    >
      {/* Header */}
      <div className="w-full mb-12 mt-8">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-6 mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-orange-400 rounded-3xl flex items-center justify-center shadow-lg shadow-primary/30">
            <span className="text-5xl font-black text-white">{user?.username?.charAt(0).toUpperCase()}</span>
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">{user?.username}</h1>
            <p className="text-gray-500 font-bold text-lg">المستوى {stats.level}</p>
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
          <MessageSquare className="w-12 h-12 text-green-500 mb-2 relative z-10" />
          <h3 className="text-3xl font-black text-gray-800 relative z-10">{stats.completedStories}</h3>
          <p className="text-gray-400 font-bold mt-1 relative z-10">قصة مكتملة</p>
        </motion.div>
      </div>

      {/* Daily Quests */}
      <div className="w-full mb-12">
        <div className="flex items-center gap-3 mb-6 px-2">
          <Target className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-black text-gray-800">المهام اليومية</h2>
          <span className="ml-auto bg-primary/10 text-primary px-4 py-2 rounded-xl text-sm font-bold">
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
                      className={`h-full rounded-full ${quest.completed ? 'bg-green-500' : 'bg-primary'}`}
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
            {unlockedAchievements} / {stats.achievements.length}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {stats.achievements.map((achievement, index) => (
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

      {/* Language Selection Section */}
      <div className="w-full mt-16 pt-12 border-t border-gray-200">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-3 mb-12 px-2"
        >
          <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-gray-900">اختر لغتك</h2>
            <p className="text-gray-500 font-semibold mt-1">ابدأ رحلتك في تعلم لغة جديدة</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.code}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <LanguageCard
                language={lang.language}
                code={lang.code}
                flag={lang.flag}
                color={lang.color}
                onClick={() => navigate(lang.path)}
              />
            </motion.div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-blue-900">تعلم بسهولة</h3>
            </div>
            <p className="text-sm text-blue-800">دروس تفاعلية وممتعة مصممة لجميع المستويات</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-amber-500 rounded-lg">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-amber-900">اكسب نقاط</h3>
            </div>
            <p className="text-sm text-amber-800">اجمع نقاط خبرة وارتقِ المستويات مع كل درس</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500 rounded-lg">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-green-900">حافظ على السلسلة</h3>
            </div>
            <p className="text-sm text-green-800">تعلم يومياً واحصل على مكافآت حصرية</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
