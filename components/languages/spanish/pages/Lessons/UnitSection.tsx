import { Unit } from '../../data/types';
import { LessonNode } from './LessonNode';
import { motion } from 'motion/react';

interface UnitSectionProps {
  unit: Unit;
  unitIdx: number;
  completedLessons: string[];
  activeLessonId: string;
  onOpenLesson: (lessonId: string, unitId: string) => void;
  key?: string | number;
}

export function UnitSection({ unit, unitIdx, completedLessons, activeLessonId, onOpenLesson }: UnitSectionProps) {
  // Calculate progress for this unit
  const completedCount = unit.lessons.filter(l => completedLessons.includes(l.id)).length;
  const totalCount = unit.lessons.length;
  const progressPercent = (completedCount / totalCount) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 relative px-4"
    >
      <div className={`rounded-[2.5rem] p-8 text-white mb-8 shadow-xl ${unit.theme.bg} ${unit.theme.shadow} relative overflow-hidden`}>
        {/* Decorative Background */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black opacity-10 rounded-full blur-2xl"></div>

        <div className="relative z-10 flex flex-col gap-2">
            <span className="text-white/80 font-bold uppercase tracking-wider text-sm">الوحدة {unitIdx + 1}</span>
            <h2 className="text-3xl font-extrabold mb-1">{unit.title}</h2>
            <p className="opacity-90 font-medium text-lg">{unit.description}</p>
            
            {/* Progress Bar */}
            <div className="w-full max-w-[200px] mt-4 space-y-1">
              <div className="flex justify-between text-[10px] font-black text-white/80 uppercase">
                <span>التقدم</span>
                <span>{Math.round(progressPercent)}%</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div 
                  style={{ width: `${progressPercent}%` }}
                  className="h-full bg-white"
                />
              </div>
            </div>
        </div>
      </div>
      
      <div className="relative flex flex-col items-center gap-6 py-6">
          <div className="absolute top-0 bottom-0 w-[4px] bg-[#e5e5e5] -z-10 translate-x-[0px]"></div>
          
          {unit.lessons.map((lesson, lessonIdx) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isActive = lesson.id === activeLessonId;
            // Check if lesson is locked (from level filtering)
            const isLocked = lesson.status === 'locked' || (!isCompleted && !isActive);
            
            const offsets = ['translate-x-0', '-translate-x-10', 'translate-x-[45px]', '-translate-x-6'];
            const offsetClass = offsets[lessonIdx % offsets.length];

            return (
              <LessonNode 
                key={lesson.id}
                lessonId={lesson.id}
                lessonTitle={lesson.title}
                unitBg={unit.theme.bg}
                isCompleted={isCompleted}
                isActive={isActive}
                isLocked={isLocked}
                offsetClass={offsetClass}
                onOpen={() => onOpenLesson(lesson.id, unit.id)}
              />
            );
          })}
      </div>
    </motion.div>
  );
}
