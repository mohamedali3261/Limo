import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface MascotProps {
  state: 'idle' | 'happy' | 'sad' | 'talking' | 'thinking';
  message?: string;
  onClick?: () => void;
}

export default function Mascot({ state, message, onClick }: MascotProps) {
  const [isWiggling, setIsWiggling] = React.useState(false);
  const [visibleMessage, setVisibleMessage] = React.useState(message);

  React.useEffect(() => {
    setVisibleMessage(message);
    if (message) {
      const timer = setTimeout(() => setVisibleMessage(undefined), 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const triggerWiggle = () => {
    setIsWiggling(true);
    setTimeout(() => setIsWiggling(false), 500);
    if (onClick) onClick();
  };

  return (
    <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-50 flex flex-col items-center gap-2 pointer-events-none">
      {/* Mascot Bear */}
      <motion.div
        onClick={triggerWiggle}
        className="w-20 h-20 md:w-24 md:h-24 pointer-events-auto cursor-pointer"
        animate={
          isWiggling ? { rotate: [0, -15, 15, -15, 15, 0] } :
          state === 'happy' ? { y: [0, -20, 0], scale: [1, 1.1, 1], rotate: [0, -10, 10, 0] } :
          state === 'sad' ? { y: [0, 5, 0], scale: [1, 0.95, 1], rotate: [0, 5, -5, 0] } :
          state === 'thinking' ? { y: [0, -5, 0], scale: [1, 1.02, 1] } :
          { y: [0, -5, 0] }
        }
        transition={{
          repeat: !isWiggling && (state === 'idle' || state === 'talking' || state === 'thinking') ? Infinity : 0,
          duration: state === 'idle' ? 3 : 0.5,
          ease: "easeInOut"
        }}
      >
        <motion.img
          key={state}
          src={`/img/${
            state === 'happy' ? 'celebating.png' :
            state === 'sad' ? 'thinking.png' :
            state === 'thinking' ? 'thinking.png' :
            state === 'talking' ? 'smiling.png' :
            'waving.png'
          }`}
          className="w-full h-full object-contain"
          alt="Mascot face"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Message */}
      <AnimatePresence>
        {visibleMessage && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md text-slate-800 font-bold text-xs md:text-sm whitespace-nowrap"
          >
            {visibleMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
