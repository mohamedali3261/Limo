import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface LessonProgressProps {
  progress: number; // 0 to 1
  onClose: () => void;
  isFinished: boolean;
}

export function LessonProgress({ progress, onClose, isFinished }: LessonProgressProps) {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:px-12 flex items-center justify-between gap-6">
      <button onClick={onClose} className="p-2 text-[#afafaf] hover:text-[#9e9e9e] rounded-full hover:bg-stone-100 transition-colors">
        <X size={28} strokeWidth={3} />
      </button>
      <div className="flex-1 bg-[#e5e5e5] h-5 rounded-full overflow-hidden shrink-0 relative">
        <motion.div 
          className="absolute top-0 bottom-0 left-0 bg-[#58cc02] rounded-full"
          animate={{ width: isFinished ? '100%' : `${progress * 100}%` }}
          transition={{ duration: 0.4, type: 'spring', bounce: 0.2 }}
        >
          <div className="absolute top-1 left-2 right-2 h-1.5 bg-white/30 rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
}
