import { Unit } from '../../data/types';
import { LessonNode } from './LessonNode';

interface UnitSectionProps {
  unit: Unit;
  unitIdx: number;
  completedLessons: string[];
  activeLessonId: string;
  onOpenLesson: (lessonId: string, unitId: string) => void;
  key?: string | number;
}

export function UnitSection({ unit, unitIdx, completedLessons, activeLessonId, onOpenLesson }: UnitSectionProps) {
  return (
    <div className="mb-12 relative px-4">
      <div className={`rounded-[2.5rem] p-8 text-white mb-8 shadow-xl ${unit.theme.bg} ${unit.theme.shadow} relative overflow-hidden`}>
        <div className="relative z-10 flex flex-col gap-2">
            <span className="text-white/80 font-bold uppercase tracking-wider text-sm">الوحدة {unitIdx + 1}</span>
            <h2 className="text-3xl font-extrabold mb-1">{unit.title}</h2>
            <p className="opacity-90 font-medium text-lg">{unit.description}</p>
        </div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-black opacity-10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative flex flex-col items-center gap-6 py-6">
          <div className="absolute top-0 bottom-0 w-[4px] bg-[#e5e5e5] -z-10 translate-x-[0px]"></div>
          
          {unit.lessons.map((lesson, lessonIdx) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isActive = lesson.id === activeLessonId;
            const isLocked = !isCompleted && !isActive;
            
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
    </div>
  );
}
