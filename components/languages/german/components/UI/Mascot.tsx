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
    <div className="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-[9999] flex flex-col items-center gap-2">
      {/* Floating Shadow */}
      <motion.div
        animate={{ scaleX: [1, 0.8, 1], opacity: [0.3, 0.2, 0.3] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -bottom-6 w-20 h-3 md:w-24 md:h-4 bg-black/20 rounded-full blur-md pointer-events-none"
      />
      
      {/* Mascot Bear */}
      <motion.div
        onClick={triggerWiggle}
        className="w-20 h-20 md:w-24 md:h-24 cursor-pointer relative pointer-events-auto"
        animate={
          isWiggling ? { rotate: [0, -15, 15, -15, 15, 0], y: 0 } :
          state === 'happy' ? { y: [0, -20, 0], scale: [1, 1.1, 1], rotate: [0, -10, 10, 0] } :
          state === 'sad' ? { y: [0, 5, 0], scale: [1, 0.95, 1], rotate: [0, 5, -5, 0] } :
          state === 'thinking' ? { y: [0, -5, 0], scale: [1, 1.02, 1] } :
          { y: [0, -8, 0] }
        }
        transition={{
          repeat: !isWiggling && (state === 'idle' || state === 'talking' || state === 'thinking') ? Infinity : 0,
          duration: state === 'idle' ? 4 : 0.5,
          ease: "easeInOut"
        }}
      >
        {/* Glow Effect */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl -z-10"
        />
        <motion.img
          key={state}
          src={`/languages/german/img/${
            state === 'happy' ? 'celebating.png' :
            state === 'sad' ? 'sleeping.png' :
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
            className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md text-slate-800 font-bold text-xs md:text-sm whitespace-nowrap pointer-events-auto"
          >
            {visibleMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
