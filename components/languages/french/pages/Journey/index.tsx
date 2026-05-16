import { FC } from 'react';
import { Unit } from './Unit';
import { motion } from 'motion/react';
import { unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10, unit11, unit12, unit13, unit14 } from '../../data/units';
import { useProgress } from '../../context/ProgressContext';
import { useCurrentLevel } from '../../../../../lib/hooks/useCurrentLevel';
import { filterUnitsByLevel } from '../../../../../lib/utils/levelUtils';
import { Award, Flame, GraduationCap, Trophy, Cloud, Sparkles } from 'lucide-react';
import { FrenchFlag } from '../../components/ui/FrenchFlag';

const unitsData = [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9, unit10, unit11, unit12, unit13, unit14];

export const Journey: FC = () => {
  const { getLessonStatus } = useProgress();
  const currentLevel = useCurrentLevel();

  // Show all units but mark locked lessons
  const unitsWithStatus = filterUnitsByLevel(unitsData, currentLevel);

  return (
    <>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        
        {/* Floating Clouds */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`cloud-${i}`}
              animate={{ x: [0, window.innerWidth || 1000, 0] }}
              transition={{ duration: 30 + Math.random() * 40, repeat: Infinity, ease: "linear", delay: Math.random() * 20 }}
              className="absolute filter opacity-40 text-blue-200"
              style={{ top: `${i * 150 + Math.random() * 100}px`, left: `-${Math.random() * 20}%` }}
            >
              <Cloud size={80 + Math.random() * 60} strokeWidth={0.5} />
            </motion.div>
          ))}
        </div>

        {/* Floating Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`sparkle-${i}`}
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
              className="absolute text-yellow-300"
              style={{ 
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%` 
              }}
            >
              <Sparkles size={20 + Math.random() * 20} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-blue-100 p-4 flex items-center justify-between shadow-lg rounded-b-3xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg"
          >
            <Award size={24} />
          </motion.div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-500 block">خريطة المغامرة</span>
            <span className="text-lg font-black text-gray-900">تعلم الفرنسية</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <div className="hidden md:flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
            <span className="text-sm font-black text-gray-700">تعلم اللغة الفرنسية</span>
            <FrenchFlag className="w-8 h-6 rounded shadow-sm border border-blue-200" />
          </div>
          
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-200"
          >
            <Flame size={16} className="text-orange-500 fill-orange-500" />
            <span className="font-black text-orange-600 text-sm">متابعة مستمرة</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full max-w-3xl mx-auto px-4 py-12 pb-32 relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-28 h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-[3rem] flex items-center justify-center mx-auto mb-8 relative shadow-2xl shadow-blue-400/50"
          >
            <GraduationCap size={56} className="text-white" />
            <motion.div 
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.1, 0.5] }} 
              transition={{ repeat: Infinity, duration: 2 }} 
              className="absolute inset-0 bg-blue-400 rounded-full blur-3xl -z-10" 
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-black text-gray-900 mb-4 tracking-tight"
          >
            ابدأ رحلتك البطولية
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 font-bold max-w-2xl mx-auto leading-relaxed"
          >
            كل درس هو خطوة نحو العظمة. أكمل الدروس لفتح مناطق جديدة واكسب نقاط XP وشارات.
          </motion.p>
        </motion.div>

        {/* Units Grid */}
        <div className="flex flex-col gap-10">
          {unitsWithStatus.map((unit, unitIndex) => {
            // Inject dynamic status
            const unitWithStatus = {
              ...unit,
              lessons: unit.lessons.map((lesson: any) => ({
                ...lesson,
                status: getLessonStatus(lesson.id)
              }))
            };

            return (
              <motion.div 
                key={unit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: unitIndex * 0.1 }}
              >
                <Unit unit={unitWithStatus} />
              </motion.div>
            );
          })}
        </div>

        {/* Epic Finale Marker */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center pt-24 relative z-10 mt-20"
        >
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 3, -3, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="w-40 h-40 bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500 rounded-[3rem] border-b-8 border-orange-600 flex items-center justify-center text-white relative shadow-2xl shadow-orange-500/50"
          >
            <Trophy size={80} className="text-white drop-shadow-lg" />
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 bg-yellow-300 rounded-full blur-3xl opacity-30 -z-10" 
            />
            <div className="absolute -top-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-black uppercase shadow-lg border-2 border-white">
              🎉 النهاية الملحمية
            </div>
          </motion.div>

          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-4xl font-black text-gray-900"
          >
            أنت بطل الغد! 🌟
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 font-bold mt-3"
          >
            المزيد من الدروس والمغامرات قادمة قريباً...
          </motion.p>

          {/* Confetti Effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`confetti-${i}`}
                initial={{ 
                  y: -20, 
                  x: Math.random() * 200 - 100,
                  opacity: 1,
                  rotate: 0
                }}
                animate={{ 
                  y: 300, 
                  x: Math.random() * 400 - 200,
                  opacity: 0,
                  rotate: 360
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2, 
                  repeat: Infinity,
                  delay: Math.random() * 0.5
                }}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'][Math.floor(Math.random() * 5)],
                  left: '50%'
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};
