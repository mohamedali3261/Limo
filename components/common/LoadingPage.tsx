import { motion } from 'motion/react';

interface LoadingPageProps {
  message?: string;
}

export function LoadingPage({ message }: LoadingPageProps) {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center p-6 z-50 animate-none">
      <motion.div
        animate={{ 
          scale: [0.92, 1.03, 0.92],
          opacity: [0.75, 1, 0.75]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative flex flex-col items-center justify-center"
      >
        <img 
          src="/logo.png" 
          alt="LimoHero Logo" 
          className="w-32 h-32 md:w-36 md:h-36 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
        />
      </motion.div>
    </div>
  );
}
