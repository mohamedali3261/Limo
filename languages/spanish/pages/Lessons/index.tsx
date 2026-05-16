import { useState } from 'react';
import { motion } from 'motion/react';
import { LearningPath } from './LearningPath';
import { LessonModal } from './LessonModal';
import { useProgress } from '../../hooks/useProgress';

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
        <h1 className="text-4xl md:text-5xl font-extrabold text-stone-800 mb-4 tracking-tight">مسار التعلم</h1>
        <p className="text-stone-500 font-medium text-lg max-w-xl mx-auto">ابدأ من الأساسيات وشق طريقك نحو إتقان الإسبانية. تعلم كلمة بكلمة بطريقة ممتعة وفعالة.</p>
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
    </motion.div>
  );
}
