import { motion } from 'motion/react';
import { Target, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Lightning SVG Icon
const LightningIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
    <path d="M36 8L20 32H32L28 56L44 32H32L36 8Z" fill="currentColor" opacity="0.3"/>
    <path d="M36 8L20 32H32L28 56L44 32H32L36 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
  </svg>
);

export function WordCatcherCard() {
  const navigate = useNavigate();
  
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.99 }}
      className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-between text-right relative overflow-hidden group w-full"
      onClick={() => navigate(`/game/word-catcher`)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center gap-4 md:gap-6 flex-1">
        <div className="text-white opacity-90 flex-shrink-0">
          <LightningIcon />
        </div>
        
        <div className="flex-1 space-y-1">
          <h2 className="text-xl md:text-2xl font-black leading-tight">صائد الكلمات</h2>
          <p className="text-white/90 text-sm font-medium leading-relaxed">
            اصطد الكلمات الصحيحة قبل نفاد الوقت في تحدي السرعة
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative z-10 flex items-center gap-3 flex-shrink-0">
        <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="font-bold text-sm whitespace-nowrap">لعبة خاصة</span>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl group-hover:bg-white/30 transition-colors">
          <Target size={24} className="opacity-90" />
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full group-hover:translate-x-1 transition-transform">
          <ArrowLeft size={20} className="rotate-180" />
        </div>
      </div>
    </motion.button>
  );
}
