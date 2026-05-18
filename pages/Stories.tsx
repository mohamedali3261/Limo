import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Star, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  Plane, 
  Mail, 
  Coffee, 
  Key, 
  MapPin, 
  Gift, 
  Sun, 
  Utensils, 
  Briefcase,
  Train,
  ShoppingBag,
  History,
  Dribbble,
  Cookie,
  Stethoscope,
  BookOpen,
  Calendar as CalendarIcon,
  Lock,
  Smile,
  User,
  Palette,
  Home,
  Heart
} from 'lucide-react';
import { apiFetch } from '../lib/api';
import { LoadingPage } from '../components/common/LoadingPage';
import { useStoryProgress } from '../components/story/hooks/useStoryProgress';

const iconMap: Record<number, any> = {
  1: Plane,
  2: Mail,
  3: Coffee,
  4: Key,
  5: MapPin,
  6: Gift,
  7: Sun,
  8: Utensils,
  9: Briefcase,
  10: Train,
  11: ShoppingBag,
  12: History,
  13: Dribbble,
  14: Cookie,
  15: Stethoscope,
  16: Smile,      // مرحباً يا صديقي
  17: User,       // ما اسمك؟
  18: Palette,    // الألوان المفضلة
  19: Home,       // أين تسكن؟
  20: Heart       // هواياتي المفضلة
};

export default function Stories() {
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { progress, getCompletedCount, isStoryUnlocked } = useStoryProgress();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const data = await apiFetch('/api/learning/stories');
        // ترتيب القصص حسب المستوى
        const sortedStories = data.stories.sort((a: any, b: any) => (a.level || 0) - (b.level || 0));
        setStories(sortedStories);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStories();
  }, []);

  const completedCount = getCompletedCount();

  if (loading) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-32 text-slate-900 selection:bg-primary/10">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-[0.4] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Hero / Header */}
      <header className="relative pt-20 pb-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-primary text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-sm"
          >
            <CalendarIcon size={14} />
            <span>مسار التعلم اليومي</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter"
          >
            أرشيف <span className="text-secondary italic">المغامرات</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl font-medium max-w-2xl mx-auto leading-relaxed"
          >
            انطلق في رحلة قصصية مصممة خصيصاً لتطوير مهاراتك اللغوية يوماً بعد يوم.
          </motion.p>

          {/* Progress Counter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-3 rounded-2xl border-2 border-green-200"
          >
            <CheckCircle2 className="text-green-500" size={24} />
            <div className="text-right">
              <p className="text-xs font-black text-green-600 uppercase tracking-widest">تقدمك</p>
              <p className="text-2xl font-black text-slate-800">
                {completedCount} <span className="text-slate-400 text-lg">/ {stories.length}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content: Vertical Roadmap / Timeline */}
      <main className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-1 md:w-px bg-gradient-to-b from-primary/30 via-slate-200 to-transparent" />

          <div className="space-y-12 md:space-y-32">
            {stories.map((story, index) => {
              const IconComponent = iconMap[story.id] || BookOpen;
              const isLeft = index % 2 === 0;
              const storyLevel = story.level || index + 1;
              const isUnlocked = isStoryUnlocked(storyLevel);
              const isCompleted = progress[story.id]?.completed;

              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex flex-row md:items-center w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-12 group relative`}
                >
                  {/* Central Node Visual */}
                  <div className="relative z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <div className={`w-16 h-16 md:w-24 md:h-24 rounded-full border-4 shadow-lg flex items-center justify-center transition-all duration-500 ${
                      isCompleted 
                        ? 'bg-green-500 border-green-600 text-white'
                        : isUnlocked
                          ? 'bg-white border-slate-100 text-slate-400 group-hover:border-primary group-hover:text-primary'
                          : 'bg-slate-100 border-slate-200 text-slate-300'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle2 size={24} className="md:w-8 md:h-8" />
                      ) : isUnlocked ? (
                        <IconComponent size={24} className="md:w-8 md:h-8" />
                      ) : (
                        <Lock size={24} className="md:w-8 md:h-8" />
                      )}
                    </div>
                    
                    {/* Level Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-black shadow-lg">
                      {storyLevel}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 w-full ${isLeft ? 'md:mr-auto md:ml-12' : 'md:ml-auto md:mr-12'}`}>
                    <motion.div 
                      whileHover={isUnlocked ? { y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.05)' } : {}}
                      onClick={() => isUnlocked && navigate(`/stories/${story.id}`)}
                      className={`bg-white border rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-8 transition-all relative overflow-hidden shadow-sm ${
                        isUnlocked 
                          ? 'border-slate-200 cursor-pointer hover:border-primary/30' 
                          : 'border-slate-200 opacity-60 cursor-not-allowed'
                      } ${isCompleted ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200' : ''}`}
                    >
                      {/* Lock Overlay */}
                      {!isUnlocked && (
                        <div className="absolute inset-0 bg-slate-50/80 backdrop-blur-[2px] flex items-center justify-center z-10 rounded-[2rem]">
                          <div className="text-center">
                            <Lock size={32} className="text-slate-400 mx-auto mb-2" />
                            <p className="text-slate-500 font-bold text-sm">
                              أكمل القصة السابقة لفتح هذه
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Completion Badge */}
                      {isCompleted && (
                        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-lg">
                          <CheckCircle2 size={14} />
                          <span>مكتملة</span>
                        </div>
                      )}

                      {/* Top Row: Difficulty & Level */}
                      <div className="flex justify-between items-center mb-4 md:mb-6">
                        <div className={`px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest ${
                          story.difficulty === 'easy' ? 'bg-green-100 text-green-700' : 
                          story.difficulty === 'medium' ? 'bg-orange-100 text-orange-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {story.difficulty === 'easy' ? 'مبتدئ' : story.difficulty === 'medium' ? 'متوسط' : 'متقدم'}
                        </div>
                        <span className="text-[9px] md:text-[10px] font-black text-slate-300 tracking-tighter uppercase">
                          LEVEL {String(storyLevel).padStart(2, '0')}
                        </span>
                      </div>

                      <div className="flex flex-col gap-4 items-start">
                        <div className="w-full text-right">
                          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-1 md:mb-2 group-hover:text-primary transition-colors">
                            {story.title}
                          </h3>
                          <p className="text-slate-500 font-bold text-xs md:text-sm leading-relaxed line-clamp-2 italic">
                            {story.description}
                          </p>
                        </div>
                      </div>

                      {/* Footer Stats */}
                      <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-3 md:gap-4">
                           <div className="flex items-center gap-1.5 text-yellow-600 font-black text-[10px] md:text-xs">
                              <Trophy size={14} />
                              <span>+{story.xp_reward || 100} XP</span>
                           </div>
                        </div>
                        <div className={`font-black text-[10px] md:text-xs flex items-center gap-1 ${
                          isUnlocked ? 'text-primary' : 'text-slate-300'
                        }`}>
                           <span>{isUnlocked ? 'ابدأ الحكاية' : 'مقفلة'}</span>
                           {isUnlocked ? <ChevronRight size={14} /> : <Lock size={14} />}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for MD screens */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      {!loading && stories.length === 0 && (
          <div className="text-center py-40">
             <div className="inline-flex w-20 h-20 items-center justify-center rounded-full bg-slate-100 mb-8">
                <BookOpen size={32} className="text-slate-400" />
             </div>
             <p className="text-slate-400 font-black text-2xl tracking-tighter">لا توجد حكايات متاحة اليوم</p>
          </div>
      )}
    </div>
  );
}

