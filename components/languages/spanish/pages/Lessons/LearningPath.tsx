import { courseData } from '../../data/courseData';
import { UnitSection } from './UnitSection';
import { useCurrentLevel } from '../../../../../lib/hooks/useCurrentLevel';
import { filterUnitsByLevel, markLockedLessons } from '../../../../../lib/utils/levelUtils';
import { Award, Flame, GraduationCap } from 'lucide-react';
import { SpanishFlag } from '../../components/ui/SpanishFlag';
import { motion } from 'motion/react';
import { useMediaQuery } from '../../../../../lib/hooks/useMediaQuery';

interface LearningPathProps {
  onOpenLesson: (lessonId: string, unitId: string) => void;
  completedLessons: string[];
}

export function LearningPath({ onOpenLesson, completedLessons }: LearningPathProps) {
  const currentLevel = useCurrentLevel();
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Filter units by current level
  const filteredUnits = filterUnitsByLevel(courseData, currentLevel);
  
  let activeLessonId = '';
  let foundActive = false;
  
  for (const unit of filteredUnits) {
    for (const lesson of unit.lessons) {
      if (!completedLessons.includes(lesson.id) && !foundActive) {
        activeLessonId = lesson.id;
        foundActive = true;
      }
    }
  }

  return (
    <>
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-gray-100 p-4 flex items-center justify-between shadow-sm rounded-b-3xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600">
            <Award size={20} />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">خريطة المغامرة</span>
            <span className="text-sm font-black text-gray-900">تعلم اللغة الإسبانية</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-center">
            <span className="text-sm font-black text-gray-700">أنت الآن تدرس اللغة الإسبانية</span>
            <SpanishFlag className="w-8 h-6 rounded shadow-sm border border-gray-200" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-orange-400 font-bold text-xs">
          <Flame size={14} className="animate-pulse" />
          <span>متابعة مستمرة</span>
        </div>
      </div>

      <div className="max-w-xl mx-auto pb-20">
        {/* Level System Header */}
        <div 
          className="mb-12 text-center py-8"
        >
          <div className="w-24 h-24 bg-teal-100 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 relative">
            <GraduationCap size={48} className="text-teal-600" />
            {!isMobile && (
              <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute inset-0 bg-teal-600 rounded-full blur-2xl" />
            )}
          </div>
          <h2 className="text-4xl font-display font-black text-slate-900 mb-4 tracking-tight">ابدأ رحلتك البطولية</h2>
          <p className="text-slate-400 font-bold max-w-xs mx-auto leading-relaxed">كل درس هو خطوة نحو العظمة. أكمل الدروس لفتح مناطق جديدة.</p>
        </div>

        {filteredUnits.map((unit, unitIdx) => (
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
    </>
  );
}
