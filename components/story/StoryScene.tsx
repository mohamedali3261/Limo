import { motion, AnimatePresence } from 'motion/react';
import { Volume2 } from 'lucide-react';
import { Scene } from './types';

interface StorySceneProps {
  scene: Scene;
  showTranslation: boolean;
  isPlaying: boolean;
  onSpeak: (text: string) => void;
  onNext: () => void;
  hasQuestions: boolean;
}

export function StoryScene({
  scene,
  showTranslation,
  isPlaying,
  onSpeak,
  onNext,
  hasQuestions
}: StorySceneProps) {
  // تحديد نوع الشخصية والألوان المناسبة
  const getCharacterStyle = (name: string) => {
    const isNarrator = name === 'Narrator';
    const isMemo = name === 'Limo';
    
    if (isNarrator) {
      return {
        avatar: '📖',
        bgColor: 'bg-gradient-to-br from-purple-50 to-indigo-50',
        borderColor: 'border-purple-200',
        badgeColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
        textColor: 'text-purple-900',
        buttonColor: 'bg-purple-50 border-purple-200 text-purple-600 hover:bg-purple-100'
      };
    }
    
    if (isMemo) {
      return {
        avatar: '👦',
        bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
        borderColor: 'border-blue-200',
        badgeColor: 'bg-gradient-to-r from-blue-600 to-cyan-600',
        textColor: 'text-blue-900',
        buttonColor: 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100'
      };
    }
    
    // شخصيات أخرى
    const avatarMap: Record<string, string> = {
      'Officer': '👮',
      'Waiter': '👨‍🍳',
      'Barista': '☕',
      'Assistant': '👔',
      'Sara': '👩',
      'Sarah': '👩',
      'Tom': '👨',
      'Ali': '🧑',
      'Layla': '👧',
      'Emma': '👩‍🎨',
      'Omar': '🧑‍🎨',
      'Jack': '👨‍💼',
      'Fatima': '👩‍💼',
      'Mona': '👩‍🎓',
      'Ahmed': '🧑‍🎓',
      'Librarian': '👩‍🏫',
      'Staff': '👨‍💼',
      'Clerk': '👨‍💻',
      'Manager': '👨‍💼',
      'Guide': '👨‍🏫',
      'Doctor': '👨‍⚕️',
      'Receptionist': '👨‍💼',
      'Agent': '👨‍💼',
      'Owner': '👨‍💼',
      'Voice': '📞',
      'Letter': '✉️'
    };
    
    return {
      avatar: avatarMap[name] || '🗣️',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      badgeColor: 'bg-gradient-to-r from-green-600 to-emerald-600',
      textColor: 'text-green-900',
      buttonColor: 'bg-green-50 border-green-200 text-green-600 hover:bg-green-100'
    };
  };

  const style = getCharacterStyle(scene.character_name);

  return (
    <motion.div 
      key={`scene-${scene.id}`}
      initial={{ x: 100, opacity: 0, scale: 0.95 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: -100, opacity: 0, scale: 0.95 }}
      transition={{ 
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
        opacity: { duration: 0.3 }
      }}
      className="w-full max-w-2xl flex flex-col items-center"
    >
      {/* Character Avatar */}
      <div className="relative mb-4 group">
        <div className={`w-32 h-32 ${style.bgColor} rounded-full shadow-lg ${style.borderColor} border-4 flex items-center justify-center group-hover:scale-110 transition-all duration-500 ease-out z-10 relative`}>
          <span className="text-7xl drop-shadow-md">
            {style.avatar}
          </span>
        </div>
        <div className={`absolute -bottom-3 ${style.badgeColor} text-white px-5 py-2 rounded-full text-sm font-black border-4 border-white shadow-lg z-20 whitespace-nowrap left-1/2 -translate-x-1/2`}>
          {scene.character_name}
        </div>
      </div>

      {/* Dialog Bubble */}
      <div className="w-full relative mt-6">
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 ${style.bgColor} rotate-45 ${style.borderColor} border-t-4 border-l-4`}></div>
        <div className={`w-full ${style.bgColor} px-8 py-10 rounded-[2.5rem] shadow-xl ${style.borderColor} border-3 text-center relative z-10`}>
          
          <p className={`text-2xl md:text-3xl font-extrabold ${style.textColor} mb-6 leading-tight flex flex-col items-center gap-5`} dir="ltr">
            <span className="drop-shadow-sm">{scene.content_en}</span>
            
            <button
              onClick={() => onSpeak(scene.content_en)}
              className={`p-4 rounded-full border-b-4 transition-all shadow-md ${
                isPlaying 
                  ? 'bg-primary border-primary-dark text-white scale-110 translate-y-1 border-b-0 shadow-lg' 
                  : `${style.buttonColor} active:translate-y-1 active:border-b-0`
              }`}
            >
              <Volume2 size={24} className={isPlaying ? "animate-pulse" : ""} />
            </button>
          </p>
          
          <AnimatePresence>
            {showTranslation && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className={`w-16 h-1.5 ${style.borderColor} bg-opacity-50 mx-auto rounded-full mb-5 mt-3`}></div>
                <p className="text-xl text-gray-600 font-bold leading-relaxed">{scene.content_ar}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Action Button */}
      <div className="w-full mt-auto pt-8 pb-3">
        <button 
          onClick={onNext}
          className="btn-primary w-full py-5 text-xl shadow-lg hover:shadow-xl transition-all"
        >
          {hasQuestions ? 'اختبر فهمك' : 'متابعة ➡️'}
        </button>
      </div>
    </motion.div>
  );
}
