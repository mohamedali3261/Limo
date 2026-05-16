import { useState } from 'react';
import { motion } from 'motion/react';
import { LearningPath } from './LearningPath';
import { LessonModal } from './LessonModal';
import { useProgress } from '../../hooks/useProgress';
import { GraduationCap, Trophy } from 'lucide-react';

export default function Lessons() {
  const { completedLessons, markComplete } = useProgress();
  const [activeLesson, setActiveLesson] = useState<{ lessonId: string, unitId: string } | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      <div className="text-center mb-16">
        <div className="w-24 h-24 bg-teal-100 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 relative">
          <GraduationCap size={48} className="text-teal-600" />
          <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-teal-600 rounded-full blur-2xl" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-4 tracking-tight">ابدأ رحلتك البطولية</h1>
        <p className="text-stone-500 font-medium text-lg max-w-xl mx-auto">كل درس هو خطوة نحو العظمة. أكمل الدروس لفتح مناطق جديدة.</p>
      </div>

      <LearningPath 
        completedLessons={completedLessons} 
        onOpenLesson={(lessonId, unitId) => setActiveLesson({ lessonId, unitId })} 
      />

      {activeLesson && (
        <LessonModal 
          lessonId={activeLesson.lessonId}
          unitId={activeLesson.unitId}
          onClose={() => setActiveLesson(null)}
          onComplete={(id) => markComplete(id)}
        />
      )}

      {/* Epic Finale Marker */}
      <div className="flex flex-col items-center pt-20 relative z-10 mt-12 pb-20">
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="w-32 h-32 bg-gray-900 rounded-[3rem] border-b-8 border-black flex items-center justify-center text-white relative shadow-2xl"
        >
          <Trophy size={64} className="text-yellow-400" />
          <div className="absolute -top-4 bg-red-500 text-white px-4 py-1 rounded-full text-xs font-black uppercase shadow-lg">Grand Finals</div>
        </motion.div>
        <h3 className="mt-6 text-2xl font-black text-gray-900">أنت بطل الغد!</h3>
        <p className="text-gray-500 font-bold">المزيد من الدروس قادمة قريباً</p>
      </div>
    </motion.div>
  );
}
