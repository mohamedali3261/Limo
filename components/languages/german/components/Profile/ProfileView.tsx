import { useProgress } from '../../contexts/ProgressContext';
import { Flame, Star, Trophy, Target, Award, CheckCircle2, MessageSquare } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'motion/react';
import { useAuthStore } from '../../../../../lib/store/auth';

const AchievementIcon = ({ name, unlocked }: { name: string, unlocked: boolean }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <Star className="w-8 h-8 text-amber-500" />;
  return <Icon className={`w-8 h-8 ${unlocked ? 'text-amber-500' : 'text-slate-400'}`} />;
};

export default function ProfileView() {
  const { user } = useAuthStore();
  const { xp, streak, quests: originalQuests, achievements, completedConversations } = useProgress();

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

  // Extend quests with more daily tasks
  const quests = [
    ...(originalQuests || []),
    { id: 5, title: 'أكمل 5 محادثات', progress: Math.min(completedConversations.length, 5), target: 5, completed: completedConversations.length >= 5, xpReward: 100 },
    { id: 6, title: 'اجمع 100 نقطة', progress: Math.min(xp, 100), target: 100, completed: xp >= 100, xpReward: 100 },
    { id: 7, title: 'حافظ على سلسلة 7 أيام', progress: Math.min(streak, 7), target: 7, completed: streak >= 7, xpReward: 100 },
    { id: 8, title: 'أكمل 10 محادثات', progress: Math.min(completedConversations.length, 10), target: 10, completed: completedConversations.length >= 10, xpReward: 150 },
    { id: 9, title: 'اجمع 200 نقطة', progress: Math.min(xp, 200), target: 200, completed: xp >= 200, xpReward: 150 },
    { id: 10, title: 'أكمل 15 محادثة', progress: Math.min(completedConversations.length, 15), target: 15, completed: completedConversations.length >= 15, xpReward: 200 },
    { id: 11, title: 'حافظ على سلسلة 14 يوم', progress: Math.min(streak, 14), target: 14, completed: streak >= 14, xpReward: 200 },
    { id: 12, title: 'اجمع 300 نقطة', progress: Math.min(xp, 300), target: 300, completed: xp >= 300, xpReward: 200 },
    { id: 13, title: 'أكمل 20 محادثة', progress: Math.min(completedConversations.length, 20), target: 20, completed: completedConversations.length >= 20, xpReward: 250 },
    { id: 14, title: 'حافظ على سلسلة 21 يوم', progress: Math.min(streak, 21), target: 21, completed: streak >= 21, xpReward: 250 },
    { id: 15, title: 'اجمع 500 نقطة', progress: Math.min(xp, 500), target: 500, completed: xp >= 500, xpReward: 300 },
    { id: 16, title: 'أكمل 25 محادثة', progress: Math.min(completedConversations.length, 25), target: 25, completed: completedConversations.length >= 25, xpReward: 300 },
    { id: 17, title: 'حافظ على سلسلة 30 يوم', progress: Math.min(streak, 30), target: 30, completed: streak >= 30, xpReward: 350 },
    { id: 18, title: 'اجمع 750 نقطة', progress: Math.min(xp, 750), target: 750, completed: xp >= 750, xpReward: 400 },
    { id: 19, title: 'أكمل 30 محادثة', progress: Math.min(completedConversations.length, 30), target: 30, completed: completedConversations.length >= 30, xpReward: 450 },
    { id: 20, title: 'اجمع 1000 نقطة', progress: Math.min(xp, 1000), target: 1000, completed: xp >= 1000, xpReward: 500 },
    { id: 21, title: 'حافظ على سلسلة 45 يوم', progress: Math.min(streak, 45), target: 45, completed: streak >= 45, xpReward: 500 },
    { id: 22, title: 'أكمل 35 محادثة', progress: Math.min(completedConversations.length, 35), target: 35, completed: completedConversations.length >= 35, xpReward: 550 },
    { id: 23, title: 'اجمع 1500 نقطة', progress: Math.min(xp, 1500), target: 1500, completed: xp >= 1500, xpReward: 600 },
    { id: 24, title: 'حافظ على سلسلة 60 يوم', progress: Math.min(streak, 60), target: 60, completed: streak >= 60, xpReward: 650 },
    { id: 25, title: 'أكمل 40 محادثة', progress: Math.min(completedConversations.length, 40), target: 40, completed: completedConversations.length >= 40, xpReward: 700 },
    { id: 26, title: 'اجمع 2000 نقطة', progress: Math.min(xp, 2000), target: 2000, completed: xp >= 2000, xpReward: 750 },
    { id: 27, title: 'حافظ على سلسلة 90 يوم', progress: Math.min(streak, 90), target: 90, completed: streak >= 90, xpReward: 800 },
    { id: 28, title: 'أكمل 50 محادثة', progress: Math.min(completedConversations.length, 50), target: 50, completed: completedConversations.length >= 50, xpReward: 850 },
    { id: 29, title: 'اجمع 3000 نقطة', progress: Math.min(xp, 3000), target: 3000, completed: xp >= 3000, xpReward: 900 },
    { id: 30, title: 'أصبح بطل الألمانية!', progress: Math.min(xp, 5000), target: 5000, completed: xp >= 5000, xpReward: 1000 },
  ];

  const completedQuestsCount = quests.filter(q => q.completed).length;

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-start min-h-[calc(100vh-140px)] p-4 relative pb-24">
      {/* Header */}
      <div className="w-full mb-8 mt-4">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-6 mb-8"
        >
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-3xl flex items-center justify-center shadow-lg shadow-yellow-600/30">
            <span className="text-5xl font-black text-white">{user?.username?.charAt(0).toUpperCase()}</span>
          </div>
          <div>
            <h1 className="text-4xl font-black text-gray-900 mb-2">{user?.username}</h1>
            <p className="text-gray-500 font-bold text-lg">المستوى {calculateLevel(xp)} - الألمانية</p>
          </div>
        </motion.div>
      </div>

      {/* Header Cards */}
      <div className="w-full grid grid-cols-2 gap-4 mb-4 mt-4">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-bl-full -mr-8 -mt-8" />
          <Star className="w-12 h-12 text-amber-400 fill-amber-400 mb-2 relative z-10" />
          <h3 className="text-3xl font-black text-slate-800 relative z-10">{xp}</h3>
          <p className="text-slate-400 font-bold mt-1 relative z-10">نقطة خبرة</p>
        </motion.div>

        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/5 rounded-br-full -ml-8 -mt-8" />
          <Flame className={`w-12 h-12 mb-2 relative z-10 ${streak > 0 ? 'text-orange-500 fill-orange-500' : 'text-slate-300'}`} />
          <h3 className="text-3xl font-black text-slate-800 relative z-10">{streak}</h3>
          <p className="text-slate-400 font-bold mt-1 relative z-10">يوم متتالي</p>
        </motion.div>
      </div>

      {/* Stats Summary */}
      <div className="w-full grid grid-cols-3 gap-3 mb-8">
        <div className="bg-indigo-50/50 p-3 rounded-2xl border border-indigo-100 flex flex-col items-center">
            <MessageSquare className="w-5 h-5 text-indigo-500 mb-1" />
            <span className="text-lg font-black text-indigo-900">{completedConversations.length}</span>
            <span className="text-[10px] font-bold text-indigo-400">محادثة</span>
        </div>
        <div className="bg-emerald-50/50 p-3 rounded-2xl border border-emerald-100 flex flex-col items-center">
            <Trophy className="w-5 h-5 text-emerald-500 mb-1" />
            <span className="text-lg font-black text-emerald-900">{achievements.filter(a => a.unlocked).length}</span>
            <span className="text-[10px] font-bold text-emerald-400">إنجاز</span>
        </div>
        <div className="bg-amber-50/50 p-3 rounded-2xl border border-amber-100 flex flex-col items-center">
            <Target className="w-5 h-5 text-amber-500 mb-1" />
            <span className="text-lg font-black text-amber-900">{completedQuestsCount}</span>
            <span className="text-[10px] font-bold text-amber-400">مهمة</span>
        </div>
      </div>

      {/* Daily Quests */}
      <div className="w-full mb-8">
        <div className="flex items-center gap-3 mb-4 px-2">
          <Target className="w-6 h-6 text-indigo-500" />
          <h2 className="text-2xl font-black text-slate-800">المهام اليومية</h2>
          <span className="mr-auto bg-indigo-50 text-indigo-600 px-3 py-1 rounded-xl text-sm font-bold">
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
              className={`p-4 rounded-2xl border ${quest.completed ? 'bg-green-50 border-green-100' : 'bg-white border-slate-100'} shadow-sm flex items-center justify-between`}
            >
              <div className="flex-1 ml-4">
                <h4 className={`font-bold ${quest.completed ? 'text-green-700' : 'text-slate-700'}`}>{quest.title}</h4>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full ${quest.completed ? 'bg-green-500' : 'bg-indigo-500'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${(quest.progress / quest.target) * 100}%` }}
                    />
                  </div>
                  <span className={`text-sm font-bold ${quest.completed ? 'text-green-600' : 'text-slate-400'}`}>
                    {quest.progress} / {quest.target}
                  </span>
                </div>
              </div>
              
              <div className={`w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center ${quest.completed ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' : 'bg-slate-50 text-slate-400'}`}>
                {quest.completed ? <CheckCircle2 className="w-6 h-6" /> : <div className="flex items-center text-xs font-bold gap-1"><Star className="w-3 h-3 fill-current" />{quest.xpReward}</div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="w-full">
        <div className="flex items-center gap-3 mb-4 px-2">
          <Trophy className="w-6 h-6 text-amber-500" />
          <h2 className="text-2xl font-black text-slate-800">الإنجازات</h2>
          <span className="mr-auto bg-amber-50 text-amber-600 px-3 py-1 rounded-xl text-sm font-bold">
            {achievements.filter(a => a.unlocked).length} / {achievements.length}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-2xl border ${achievement.unlocked ? 'bg-white border-amber-200 shadow-sm' : 'bg-slate-50 border-slate-100 opacity-60'} flex gap-4 items-center`}
            >
              <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center ${achievement.unlocked ? 'bg-amber-50 shadow-inner' : 'bg-slate-100 grayscale'}`}>
                <AchievementIcon name={achievement.icon} unlocked={achievement.unlocked} />
              </div>
              <div>
                <h4 className={`font-bold ${achievement.unlocked ? 'text-slate-800' : 'text-slate-500'}`}>{achievement.title}</h4>
                <p className="text-sm text-slate-400 mt-1">{achievement.description}</p>
              </div>
              {achievement.unlocked && (
                <Award className="w-6 h-6 text-amber-400 absolute left-4 opacity-20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
