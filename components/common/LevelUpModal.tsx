import { motion, AnimatePresence } from 'motion/react';
import { Star, Sparkles, Trophy, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import Mascot from '../languages/german/components/UI/Mascot';

interface LevelUpModalProps {
  isOpen: boolean;
  level: number;
  onClose: () => void;
}

// Confetti particle component
const Confetti = ({ delay }: { delay: number }) => {
  const randomX = Math.random() * 100;
  const randomRotation = Math.random() * 360;
  const randomDuration = 2 + Math.random() * 1;

  return (
    <motion.div
      initial={{ 
        opacity: 1, 
        y: -20, 
        x: randomX,
        rotate: randomRotation 
      }}
      animate={{ 
        opacity: 0, 
        y: window.innerHeight + 100,
        rotate: randomRotation + 360
      }}
      transition={{ 
        duration: randomDuration, 
        delay,
        ease: 'easeIn'
      }}
      className="fixed pointer-events-none"
      style={{
        left: `${randomX}%`,
        top: 0,
        width: '10px',
        height: '10px',
      }}
    >
      <div className="w-full h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-full" />
    </motion.div>
  );
};

export default function LevelUpModal({ isOpen, level, onClose }: LevelUpModalProps) {
  const [confetti, setConfetti] = useState<number[]>([]);

  useEffect(() => {
    if (isOpen) {
      // Generate confetti particles
      setConfetti(Array.from({ length: 50 }, (_, i) => i));
      
      // Auto close after 4 seconds
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Confetti */}
          {confetti.map((i) => (
            <Confetti key={i} delay={i * 0.05} />
          ))}

          {/* Modal Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl blur-2xl opacity-50 -z-10" />

              {/* Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 shadow-2xl max-w-md mx-auto border-2 border-yellow-200">
                {/* Mascot */}
                <Mascot state="happy" message="مستوى جديد! 🚀" />
                
                {/* Fireworks animation */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-8 -right-8 text-6xl"
                >
                  ✨
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-8 -left-8 text-6xl"
                >
                  🎉
                </motion.div>

                {/* Content */}
                <div className="text-center relative z-10">
                  {/* Trophy Icon */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="flex justify-center mb-6"
                  >
                    <div className="relative">
                      <Trophy className="w-20 h-20 text-yellow-500 fill-yellow-400" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl"
                      />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-black text-gray-900 mb-2"
                  >
                    مستوى جديد! 🚀
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mb-4"
                  >
                    المستوى {level}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 font-bold text-lg mb-6"
                  >
                    تهانينا! لقد وصلت إلى مستوى جديد! 🎊
                  </motion.p>

                  {/* Stars */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center gap-3 mb-8"
                  >
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                        transition={{ duration: 1, delay: i * 0.1, repeat: Infinity }}
                      >
                        <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white font-black px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    استمر في التعلم! 💪
                  </motion.button>

                  {/* Bonus info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500 font-bold"
                  >
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span>احصل على مكافآت إضافية في كل مستوى!</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
