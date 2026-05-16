import { motion } from 'motion/react';
import { Star, Check, Lock } from 'lucide-react';

interface LessonNodeProps {
  lessonId: string;
  lessonTitle: string;
  unitBg: string;
  isCompleted: boolean;
  isActive: boolean;
  isLocked: boolean;
  offsetClass: string;
  onOpen: () => void;
  key?: string | number;
}

export function LessonNode({ lessonId, lessonTitle, unitBg, isCompleted, isActive, isLocked, offsetClass, onOpen }: LessonNodeProps) {
  return (
    <div className={`relative z-0 ${offsetClass}`}>
      <div className="relative group flex flex-col items-center">
        
        {isActive && (
          <motion.div 
            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className={`absolute -inset-4 rounded-full blur-2xl opacity-60 pointer-events-none ${unitBg}`}
          />
        )}

        <motion.button
            whileHover={!isLocked ? { scale: 1.05 } : {}}
            onClick={() => !isLocked && onOpen()}
            className={`
              w-[76px] h-[76px] rounded-full flex flex-col items-center justify-center relative z-10 transition-all duration-300
              ${isCompleted || isActive ? unitBg : 'bg-[#e5e5e5] hover:bg-[#d4d4d4]'}
              ${isCompleted || isActive ? 'text-white' : 'text-[#a3a3a3]'}
              ${isLocked ? 'cursor-not-allowed' : 'active:border-b-0 active:translate-y-[6px] hover:brightness-110'}
              ${!isLocked ? 'border-b-[6px] border-black/15' : 'border-b-[6px] border-[#d4d4d4]'}
            `}
        >
            {isCompleted && <Check size={36} strokeWidth={4} />}
            {isActive && <Star size={36} strokeWidth={3} fill="currentColor" />}
            {isLocked && <Lock size={28} strokeWidth={3} />}

            {(isCompleted || isActive) && (
              <div className="absolute inset-2 border-[3px] border-white/20 rounded-full pointer-events-none"></div>
            )}
        </motion.button>
        
        <div className={`
          absolute top-1/2 -translate-y-1/2 right-full mr-4 w-max max-w-[150px] text-center text-sm font-bold transition-all shadow-lg
          bg-white text-stone-700 border border-stone-200 px-4 py-2 rounded-2xl z-20 pointer-events-none
          ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}
        `}>
            {lessonTitle}
            <div className="absolute top-1/2 -translate-y-1/2 -right-[5px] w-2 h-2 bg-white border-t border-r border-stone-200 rotate-45"></div>
        </div>
      </div>
    </div>
  );
}
