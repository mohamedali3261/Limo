import { motion } from 'motion/react';
import { useProgress } from '../../hooks/useProgress';
import { Flame, Trophy, Star, Target, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  const { streak, completedLessons } = useProgress();

  const badges = [
    { id: 'first_lesson', title: 'البداية', description: 'أكملت أول درس لك', icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-100', unlocked: completedLessons.length > 0 },
    { id: 'streak_3', title: 'شعلة النشاط', description: 'حافظت على التعلم لـ 3 أيام', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-100', unlocked: streak >= 3 },
    { id: 'lesson_5', title: 'الطالب المجتهد', description: 'أنهيت 5 دروس كاملة', icon: Target, color: 'text-rose-500', bg: 'bg-rose-100', unlocked: completedLessons.length >= 5 },
    { id: 'master', title: 'خبير الإسبانية', description: 'أنهيت جميع دروس الوحدة الأولى', icon: Trophy, color: 'text-purple-500', bg: 'bg-purple-100', unlocked: completedLessons.length >= 8 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#4b4b4b] mb-4">الإنجازات</h1>
        <p className="text-[#afafaf] font-bold text-lg max-w-lg mx-auto">تابع تقدمك واجمع الأوسمة كلما تقدمت في تعلم الإسبانية.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
         {/* Streak Stat */}
         <div className="bg-white border-2 border-[#e5e5e5] rounded-[2rem] p-6 flex flex-col items-center justify-center min-h-[160px] col-span-1 md:col-span-3 lg:col-span-1 shadow-sm">
            <Flame size={48} className="text-orange-500 mb-2 fill-orange-500" />
            <div className="text-4xl font-black text-[#4b4b4b]">{streak}</div>
            <div className="text-[#afafaf] font-bold">أيام متتالية</div>
         </div>
         
         <div className="bg-white border-2 border-[#e5e5e5] rounded-[2rem] p-6 flex flex-col items-center justify-center min-h-[160px] shadow-sm">
            <CheckCircle2 size={48} className="text-[#58cc02] mb-2" />
            <div className="text-4xl font-black text-[#4b4b4b]">{completedLessons.length}</div>
            <div className="text-[#afafaf] font-bold">لدروس المكتملة</div>
         </div>

         <div className="bg-white border-2 border-[#e5e5e5] rounded-[2rem] p-6 flex flex-col items-center justify-center min-h-[160px] shadow-sm">
            <Trophy size={48} className="text-[#ffc800] mb-2 fill-[#ffc800]" />
            <div className="text-4xl font-black text-[#4b4b4b]">{badges.filter(b => b.unlocked).length}</div>
            <div className="text-[#afafaf] font-bold">الأوسمة المكتسبة</div>
         </div>
      </div>

      <h2 className="text-2xl font-extrabold text-[#4b4b4b] mb-6">الأوسمة الخاصة بك</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {badges.map(badge => {
            const Icon = badge.icon;
            return (
               <div key={badge.id} className={`flex items-center gap-6 p-6 rounded-[2rem] border-2 transition-all ${badge.unlocked ? 'bg-white border-[#e5e5e5] shadow-[0_4px_0_0_#e5e5e5]' : 'bg-[#f7f7f7] border-[#e5e5e5] opacity-60 grayscale'}`}>
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center shrink-0 ${badge.bg}`}>
                     <Icon size={40} className={badge.color} />
                  </div>
                  <div>
                     <h3 className="text-2xl font-bold text-[#4b4b4b] mb-1">{badge.title}</h3>
                     <p className="text-[#afafaf] font-bold">{badge.description}</p>
                  </div>
               </div>
            );
         })}
      </div>
    </div>
  );
}
