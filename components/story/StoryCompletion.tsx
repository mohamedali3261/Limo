import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { CompletionModel } from '../common/CompletionModel';
import { Story } from './types';

interface StoryCompletionProps {
  story: Story;
  onContinue: () => void;
}

export function StoryCompletion({ story, onContinue }: StoryCompletionProps) {
  return (
    <div className="h-screen flex items-center justify-center font-sans p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-50 to-orange-100">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring" }}
        className="max-w-md w-full bg-white rounded-[3rem] text-center p-10 shadow-2xl relative z-10 border-4 border-white"
      >
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }} 
          className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMiIgZmlsbD0iI2ZmYjMwMCIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')] opacity-50 blur-[2px]"
        />
        <div className="relative z-10">
          <CompletionModel />
          
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">أحسنت القراءة!</h2>
          <p className="text-gray-500 mb-8 font-bold">انتهت القصة ولكن مغامرتك مستمرة.</p>
          
          <div className="bg-yellow-50 rounded-[2rem] p-6 mb-8 flex flex-col items-center border-2 border-yellow-200 border-b-8">
            <span className="text-sm font-black text-yellow-600 uppercase tracking-widest mb-1">المكافأة</span>
            <div className="flex items-center gap-2">
              <Sparkles className="text-yellow-500 w-8 h-8" />
              <span className="font-black text-4xl text-yellow-600">+{story.xp_reward} XP</span>
            </div>
          </div>

          <button 
            onClick={onContinue}
            className="btn-primary w-full shadow-primary/30 shadow-lg text-xl"
          >
            متابعة
          </button>
        </div>
      </motion.div>
    </div>
  );
}
