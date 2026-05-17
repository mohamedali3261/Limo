import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, RotateCcw, Volume2 } from 'lucide-react';

interface MatchingGameProps {
  pairs: Record<string, string>;
  onComplete: () => void;
}

import { playSuccessSound } from '../../lib/audio';

export function MatchingGame({ pairs, onComplete }: MatchingGameProps) {
  const [leftItems, setLeftItems] = useState<string[]>([]);
  const [rightItems, setRightItems] = useState<string[]>([]);
  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [selectedRight, setSelectedRight] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [errorPair, setErrorPair] = useState<[string, string] | null>(null);

  useEffect(() => {
    const left = Object.keys(pairs).sort(() => Math.random() - 0.5);
    const right = Object.values(pairs).sort(() => Math.random() - 0.5);
    setLeftItems(left);
    setRightItems(right);
  }, [pairs]);

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      if (pairs[selectedLeft] === selectedRight) {
        playSuccessSound();
        setMatchedPairs(prev => [...prev, selectedLeft]);
        setSelectedLeft(null);
        setSelectedRight(null);
        if (matchedPairs.length + 1 === leftItems.length) {
          setTimeout(onComplete, 1000);
        }
      } else {
        setErrorPair([selectedLeft, selectedRight]);
        setTimeout(() => {
          setErrorPair(null);
          setSelectedLeft(null);
          setSelectedRight(null);
        }, 1000);
      }
    }
  }, [selectedLeft, selectedRight, pairs, matchedPairs.length, leftItems.length, onComplete]);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* English Column */}
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-center font-black text-gray-400 uppercase tracking-widest text-xs md:text-sm">English</h3>
          <div className="space-y-2 md:space-y-4">
            {leftItems.map((item) => {
              const isMatched = matchedPairs.includes(item);
              const isSelected = selectedLeft === item;
              const isError = errorPair?.[0] === item;

              return (
                <motion.button
                  key={item}
                  disabled={isMatched}
                  onClick={() => {
                    setSelectedLeft(item);
                    speak(item);
                  }}
                  className={`w-full p-3 md:p-4 rounded-lg md:rounded-xl border-2 font-bold text-sm md:text-lg transition-all flex items-center justify-between group relative ${
                    isMatched 
                      ? 'bg-green-100 border-green-200 text-green-600 opacity-50' 
                      : isError
                        ? 'bg-red-50 border-red-500 text-red-700 animate-shake'
                        : isSelected 
                          ? 'bg-primary/10 border-primary text-primary shadow-lg shadow-primary/10' 
                          : 'bg-white border-gray-100 hover:border-gray-300 text-gray-700'
                  }`}
                  whileTap={{ scale: 0.98 }}
                  dir="ltr"
                >
                  <div className="flex items-center gap-2">
                    <Volume2 size={16} className="opacity-40 flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                  {isMatched && <CheckCircle2 size={18} className="flex-shrink-0" />}
                  
                  {/* Visual Hint for word */}
                  {!isMatched && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                      انقر للاستماع
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Arabic Column */}
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-center font-black text-gray-400 uppercase tracking-widest text-xs md:text-sm">العربية</h3>
          <div className="space-y-2 md:space-y-4">
            {rightItems.map((item) => {
              const isMatched = matchedPairs.some(left => pairs[left] === item);
              const isSelected = selectedRight === item;
              const isError = errorPair?.[1] === item;

              return (
                <motion.button
                  key={item}
                  disabled={isMatched}
                  onClick={() => setSelectedRight(item)}
                  className={`w-full p-3 md:p-4 rounded-lg md:rounded-xl border-2 font-bold text-sm md:text-lg transition-all flex items-center justify-between text-right ${
                    isMatched 
                      ? 'bg-green-100 border-green-200 text-green-600 opacity-50' 
                      : isError
                        ? 'bg-red-50 border-red-500 text-red-700 animate-shake'
                        : isSelected 
                          ? 'bg-primary/10 border-primary text-primary shadow-lg shadow-primary/10' 
                          : 'bg-white border-gray-100 hover:border-gray-300 text-gray-700'
                  }`}
                  whileTap={{ scale: 0.98 }}
                  dir="rtl"
                >
                  <span className="truncate">{item}</span>
                  {isMatched && <CheckCircle2 size={18} className="ml-2 flex-shrink-0" />}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-4">
         <button 
           onClick={() => {
             setMatchedPairs([]);
             setSelectedLeft(null);
             setSelectedRight(null);
           }}
           className="flex items-center gap-2 text-gray-400 font-bold hover:text-gray-900 transition-colors text-sm md:text-base"
         >
           <RotateCcw size={18} /> إعادة المحاولة
         </button>
      </div>
    </div>
  );
}
