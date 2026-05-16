import { motion } from 'motion/react';
import { FallingWord } from './types';
import { wordTranslations } from './constants';

interface FallingWordCardProps {
  word: FallingWord;
  onCatch: (w: FallingWord) => void;
  onMiss: (w: FallingWord) => void;
}

export function FallingWordCard({ word, onCatch, onMiss }: FallingWordCardProps) {
  const trans = wordTranslations[word.text.toLowerCase()] || "";
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: word.initialY, rotate: word.rotation }}
      animate={{ opacity: 1, scale: 1, y: 800, rotate: word.rotation }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ 
        y: { duration: word.duration, ease: "linear" },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
        rotate: { duration: word.duration, ease: "linear" }
      }}
      onAnimationComplete={() => onMiss(word)}
      onClick={() => onCatch(word)}
      whileHover={{ scale: 1.1, rotate: 0 }}
      whileTap={{ scale: 0.9 }}
      style={{ left: `${word.x}%` }}
      className="absolute -translate-x-1/2 p-3 md:p-5 rounded-[2rem] bg-white bg-opacity-90 backdrop-blur-sm border-[3px] border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer text-center min-w-[120px] hover:border-yellow-400 hover:shadow-xl transition-all duration-200 flex flex-col items-center gap-1"
    >
      <span className="font-black text-xl md:text-2xl text-slate-800 pointer-events-none drop-shadow-sm" dir="ltr">{word.text}</span>
      {trans && <span className="text-sm font-bold text-slate-500">{trans}</span>}
    </motion.div>
  );
}
