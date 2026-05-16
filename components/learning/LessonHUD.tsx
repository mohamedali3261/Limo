import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

interface LessonHUDProps {
  title?: string;
  mode: 'lesson' | 'quiz';
  isReviewMode: boolean;
  currentQuestionIndex: number;
  totalQuestions: number;
}

export function LessonHUD({
  title,
  mode,
  isReviewMode,
  currentQuestionIndex,
  totalQuestions
}: LessonHUDProps) {
  const navigate = useNavigate();

  const percentage = mode === 'lesson' 
    ? 10 
    : Math.round(((currentQuestionIndex + 1) / totalQuestions) * 100);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] px-2 sm:px-4 py-2 sm:py-3 flex items-center justify-center pointer-events-none">
      <div className="bg-white/95 backdrop-blur-xl border border-gray-100 rounded-xl sm:rounded-2xl px-2 sm:px-4 py-2 sm:py-3 shadow-lg flex items-center gap-2 sm:gap-4 pointer-events-auto w-full max-w-3xl">
        <button 
           onClick={() => navigate('/learning')}
           className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
        >
           <ArrowLeft size={18} className="rtl:rotate-180 sm:w-5 sm:h-5" />
        </button>
        
        <div className="flex-1 min-w-0">
          {/* Progress bar with dots */}
          <div className="relative">
            {/* Progress bar background */}
            <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`h-full rounded-full relative ${
                  isReviewMode 
                    ? 'bg-gradient-to-r from-orange-400 to-orange-600' 
                    : 'bg-gradient-to-r from-primary to-primary-dark'
                }`}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
              </motion.div>
            </div>
            
            {/* Question dots positioned on the bar - Hidden on mobile, shown on desktop */}
            {mode === 'quiz' && totalQuestions > 0 && totalQuestions <= 15 && (
              <div className="hidden sm:flex absolute -top-1 sm:-top-1.5 left-0 right-0 justify-between px-0.5">
                {Array.from({ length: totalQuestions }).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: index === currentQuestionIndex ? 1.3 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative"
                  >
                    <div 
                      className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full transition-all duration-500 border border-2 ${
                        index < currentQuestionIndex 
                          ? isReviewMode
                            ? 'bg-orange-500 border-orange-500 shadow-md sm:shadow-lg shadow-orange-500/50'
                            : 'bg-primary border-primary shadow-md sm:shadow-lg shadow-primary/50'
                          :
                        index === currentQuestionIndex 
                          ? isReviewMode
                            ? 'bg-white border-orange-500 shadow-lg sm:shadow-xl shadow-orange-500/60 ring-2 sm:ring-4 ring-orange-500/20'
                            : 'bg-white border-primary shadow-lg sm:shadow-xl shadow-primary/60 ring-2 sm:ring-4 ring-primary/20'
                          :
                        'bg-white border-gray-300 shadow-sm'
                      }`}
                    >
                      {index < currentQuestionIndex && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
            
            {/* Progress counter */}
            <div className="flex justify-between items-center mt-3 sm:mt-4 md:mt-5">
              <span className={`text-[10px] sm:text-xs font-bold ${isReviewMode ? 'text-orange-600' : 'text-gray-500'}`}>
                {isReviewMode ? 'مراجعة' : mode === 'quiz' ? `س ${currentQuestionIndex + 1}` : 'الدرس'}
              </span>
              <span className={`text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${
                isReviewMode 
                  ? 'text-orange-600 bg-orange-100' 
                  : 'text-primary bg-primary/10'
              }`}>
                {mode === 'quiz' ? `${currentQuestionIndex + 1}/${totalQuestions}` : `${percentage}%`}
              </span>
            </div>
          </div>
        </div>

        {/* Title - Hide on very small screens */}
        <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
           <div className="w-px h-6 sm:h-8 bg-gray-200" />
           <div className="text-gray-900 font-bold text-[10px] sm:text-xs max-w-[80px] md:max-w-[120px] truncate">{title}</div>
        </div>
      </div>
    </div>
  );
}
