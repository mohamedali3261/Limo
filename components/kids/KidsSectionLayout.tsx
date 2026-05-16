import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle, StopCircle, CheckCircle, MessageCircle, Star, Timer } from 'lucide-react';
import confetti from 'canvas-confetti';

interface KidsSectionLayoutProps<T> {
  title: string;
  items: T[];
  renderCard: (item: T) => React.ReactNode;
  getAudioText: (item: T) => string;
  getSentenceText?: (item: T) => string;
  getCardColor: (item: T) => string;
  onItemClick?: (item: T) => void;
  getTargetNameInArabic?: (item: T) => string;
}

export function KidsSectionLayout<T>({ 
  title, 
  items, 
  renderCard, 
  getAudioText, 
  getSentenceText,
  getCardColor, 
  onItemClick,
  getTargetNameInArabic
}: KidsSectionLayoutProps<T>) {
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [targetItem, setTargetItem] = useState<T | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [points, setPoints] = useState(() => {
    return parseInt(localStorage.getItem('kids-points') || '0', 10);
  });
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    localStorage.setItem('kids-points', points.toString());
  }, [points]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      stopQuiz();
      speak('Time is up! Good try!');
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 0.8;
      window.speechSynthesis.speak(u);
    }
  };

  const startQuiz = () => {
    setIsQuizMode(true);
    setTimerActive(true);
    setTimeLeft(60);
    pickNewTarget();
  };

  const stopQuiz = () => {
    setIsQuizMode(false);
    setTimerActive(false);
    setTargetItem(null);
    setFeedback(null);
  };

  const pickNewTarget = () => {
    const randomItem = items[Math.floor(Math.random() * items.length)];
    setTargetItem(randomItem);
    setFeedback(null);
    setTimeout(() => {
      speak(`Where is ${getAudioText(randomItem)}?`);
    }, 100);
  };

  const handleCardClick = (item: T) => {
    if (!isQuizMode) {
      if (onItemClick) {
        onItemClick(item);
      } else {
        speak(getAudioText(item));
      }
      return;
    }

    if (item === targetItem) {
      setFeedback('correct');
      setPoints(p => p + 10);
      speak('Excellent! Great job!');
      
      // Stars explosion effect
      const count = 200;
      const defaults = {
        origin: { y: 0.7 },
        shapes: ['star'],
        colors: ['#FFD700', '#FFA500', '#FF69B4', '#00CED1', '#7B68EE']
      };

      function fire(particleRatio: number, opts: any) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
      
      setTimeout(() => {
        pickNewTarget();
      }, 2000);
    } else {
      setFeedback('wrong');
      speak('Try again!');
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link to="/kids" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <ArrowLeft size={24} className="text-gray-700" />
          </Link>
          <h1 className="text-3xl font-black text-gray-900">{title}</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full font-black flex items-center gap-2">
            <Star className="fill-yellow-500 text-yellow-500" size={20} />
            <span>{points} نقطة</span>
          </div>
          <button
            onClick={isQuizMode ? stopQuiz : startQuiz}
            className={`px-6 py-3 rounded-full font-bold flex items-center gap-2 transition-transform active:scale-95 ${
              isQuizMode 
                ? 'bg-red-100 text-red-600 hover:bg-red-200' 
                : 'bg-emerald-100 text-emerald-600 hover:bg-emerald-200'
            }`}
          >
            {isQuizMode ? (
              <>
                <StopCircle size={24} />
                <span>إيقاف الاختبار</span>
              </>
            ) : (
              <>
                <PlayCircle size={24} />
                <span>ابدأ التحدي (دقيقة)</span>
              </>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence mode="popLayout">
        {isQuizMode && targetItem && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-blue-50 border-4 border-blue-200 rounded-3xl p-8 text-center flex flex-col items-center justify-center relative"
          >
            <div className="absolute top-4 left-6 flex items-center gap-2 text-blue-600 font-bold bg-blue-100 px-4 py-2 rounded-full">
               <Timer size={20} />
               <span>{timeLeft} ث</span>
            </div>
            <h2 className="text-3xl font-black text-blue-800 mb-2">أين {getTargetNameInArabic ? getTargetNameInArabic(targetItem) : ''}؟</h2>
            <p className="text-blue-600 text-lg" dir="ltr">Where is {getAudioText(targetItem)}?</p>
            
            <button onClick={() => speak(`Where is ${getAudioText(targetItem)}?`)} className="mt-4 p-3 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
               <PlayCircle size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => {
          const isTarget = isQuizMode && item === targetItem;
          const showCorrect = isTarget && feedback === 'correct';

          const colorClasses = getCardColor(item);
          const baseClasses = isQuizMode 
              ? 'hover:scale-[1.02] active:scale-[0.98]' 
              : 'hover:scale-105 active:scale-95';

          return (
            <motion.button
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => handleCardClick(item)}
              disabled={isQuizMode && feedback === 'correct'}
              className={`relative overflow-hidden rounded-[2rem] border-4 flex flex-col items-center justify-center transition-all min-h-[160px] ${baseClasses} ${
                showCorrect ? '!border-emerald-500 !bg-emerald-50 scale-105 shadow-xl shadow-emerald-200' : colorClasses
              }`}
            >
              {isQuizMode && (
                <div className="absolute top-4 right-4 z-10">
                  {showCorrect && <CheckCircle size={32} className="text-emerald-500 bg-white rounded-full shadow-sm" />}
                </div>
              )}
              {renderCard(item)}
              
              {!isQuizMode && getSentenceText && getSentenceText(item) && (
                <div 
                  onClick={(e) => { e.stopPropagation(); speak(getSentenceText(item) as string); }}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-white/70 hover:bg-white text-gray-700 px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm text-xs font-bold transition-colors cursor-pointer"
                >
                  <MessageCircle size={14} />
                  <span>استمع</span>
                </div>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
