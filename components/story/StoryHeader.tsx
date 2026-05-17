import { motion } from 'motion/react';
import { X, Ear, Eye, EyeOff } from 'lucide-react';
import { Scene } from './types';

interface StoryHeaderProps {
  scenes: Scene[];
  currentSceneIndex: number;
  showTranslation: boolean;
  setShowTranslation: (show: boolean) => void;
  autoPlayAudio: boolean;
  setAutoPlayAudio: (auto: boolean) => void;
  onExit: () => void;
}

export function StoryHeader({
  scenes,
  currentSceneIndex,
  showTranslation,
  setShowTranslation,
  autoPlayAudio,
  setAutoPlayAudio,
  onExit
}: StoryHeaderProps) {
  return (
    <div className="bg-white border-b-2 border-gray-100 px-6 py-4 flex items-center justify-between z-10 shrink-0">
      <button onClick={onExit} className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-2xl transition">
        <X size={24} />
      </button>
      
      <div className="flex-1 max-w-2xl mx-6">
        <div className="relative">
          {/* Progress bar background */}
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden relative">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${((currentSceneIndex + 1) / scenes.length) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </motion.div>
          </div>
          
          {/* Scene dots */}
          <div className="hidden sm:flex absolute -top-1.5 left-0 right-0 justify-between px-0.5">
            {scenes.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: index === currentSceneIndex ? 1.3 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative"
              >
                <div 
                  className={`w-5 h-5 rounded-full transition-all duration-500 border-2 ${
                    index < currentSceneIndex 
                      ? 'bg-primary border-primary shadow-lg shadow-primary/50' :
                    index === currentSceneIndex 
                      ? 'bg-white border-primary shadow-xl shadow-primary/60 ring-4 ring-primary/20' :
                    'bg-white border-gray-300 shadow-sm'
                  }`}
                >
                  {index < currentSceneIndex && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scene counter */}
          <div className="flex justify-between items-center mt-3 sm:mt-6">
            <span className="text-xs font-bold text-gray-500">
              المشهد {currentSceneIndex + 1}
            </span>
            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {currentSceneIndex + 1} / {scenes.length}
            </span>
          </div>
        </div>
      </div>

      {/* Story Settings Toggles */}
      <div className="flex items-center gap-2">
        <button 
          onClick={() => setAutoPlayAudio(!autoPlayAudio)}
          className={`p-3 rounded-2xl transition-colors border-2 ${autoPlayAudio ? 'bg-blue-100 border-blue-400 text-blue-600' : 'bg-gray-50 border-gray-200 text-gray-400'}`}
          title="تشغيل الصوت تلقائياً"
        >
          <Ear size={20} />
        </button>
        <button 
          onClick={() => setShowTranslation(!showTranslation)}
          className={`p-3 rounded-2xl transition-colors border-2 ${showTranslation ? 'bg-primary/20 border-primary text-primary-dark' : 'bg-gray-50 border-gray-200 text-gray-400'}`}
          title="إظهار الترجمة"
        >
          {showTranslation ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      </div>
    </div>
  );
}
