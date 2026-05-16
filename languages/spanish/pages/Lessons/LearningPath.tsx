import { courseData } from '../../data/courseData';
import { UnitSection } from './UnitSection';

interface LearningPathProps {
  onOpenLesson: (lessonId: string, unitId: string) => void;
  completedLessons: string[];
}

export function LearningPath({ onOpenLesson, completedLessons }: LearningPathProps) {
  
  let activeLessonId = '';
  let foundActive = false;
  
  for (const unit of courseData) {
    for (const lesson of unit.lessons) {
      if (!completedLessons.includes(lesson.id) && !foundActive) {
        activeLessonId = lesson.id;
        foundActive = true;
      }
    }
  }

  return (
    <div className="max-w-xl mx-auto pb-20">
      {courseData.map((unit, unitIdx) => (
        <UnitSection 
          key={unit.id}
          unit={unit}
          unitIdx={unitIdx}
          completedLessons={completedLessons}
          activeLessonId={activeLessonId}
          onOpenLesson={onOpenLesson}
        />
      ))}
    </div>
  );
}
