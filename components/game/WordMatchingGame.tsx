import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { playSuccessSound } from '../../lib/audio';
import { CheckCircle2, RotateCw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Pair {
  en: string;
  ar: string;
}

interface Props {
  data: Pair[] | string; // JSON string or array of pairs: [{en: 'Apple', ar: 'تفاحة'}, ...]
  title?: string; // Optional title for the game
  onComplete: (isCorrect: boolean) => void;
}

export function WordMatchingGame({ data, title, onComplete }: Props) {
  const [pairs, setPairs] = useState<Pair[]>([]);
  const [shuffledEn, setShuffledEn] = useState<string[]>([]);
  const [shuffledAr, setShuffledAr] = useState<string[]>([]);
  
  const [selectedEn, setSelectedEn] = useState<string | null>(null);
  const [selectedAr, setSelectedAr] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]); // Array of English words that are matched
  const [wrongSelection, setWrongSelection] = useState<boolean>(false);

  // Function to speak English word
  const speakWord = (word: string) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1;
      utterance.volume = 1;
      
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    try {
      const parsed: Pair[] = typeof data === 'string' ? JSON.parse(data) : data;
      
      setPairs(parsed);
      setShuffledEn(parsed.map((p: Pair) => p.en).sort(() => Math.random() - 0.5));
      setShuffledAr(parsed.map((p: Pair) => p.ar).sort(() => Math.random() - 0.5));
    } catch (e) {
      console.error("Failed to parse matching pairs", e);
    }
  }, [data]);

  useEffect(() => {
    if (selectedEn && selectedAr) {
      const pair = pairs.find(p => p.en === selectedEn && p.ar === selectedAr);
      if (pair) {
        setMatched([...matched, selectedEn]);
        setSelectedEn(null);
        setSelectedAr(null);
        if (matched.length + 1 === pairs.length) {
          playSuccessSound();
          
          // Hearts explosion effect
          const duration = 2000;
          const animationEnd = Date.now() + duration;
          const heart = confetti.shapeFromText({ text: '❤️', scalar: 2 });

          const interval: any = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
              return clearInterval(interval);
            }

            confetti({
              particleCount: 3,
              angle: 60,
              spread: 55,
              origin: { x: 0, y: 0.8 },
              shapes: [heart],
              scalar: 2
            });
            confetti({
              particleCount: 3,
              angle: 120,
              spread: 55,
              origin: { x: 1, y: 0.8 },
              shapes: [heart],
              scalar: 2
            });
          }, 100);
          
          setTimeout(() => onComplete(true), 1000);
        }
      } else {
        setWrongSelection(true);
        setTimeout(() => {
          setSelectedEn(null);
          setSelectedAr(null);
          setWrongSelection(false);
        }, 800);
      }
    }
  }, [selectedEn, selectedAr, pairs, matched, onComplete]);

  const isLargeSet = pairs.length > 8;

  return (
    <div className="p-4 md:p-8 bg-gray-50 rounded-[2rem] shadow-inner space-y-6 max-w-5xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-black text-gray-900 mb-2">{title || 'توصيل الكلمات'}</h2>
        <p className="text-sm text-gray-500 font-medium">قم بتوصيل الكلمة بمعناها الصحيح</p>
      </div>
      
      <div className={`grid grid-cols-2 gap-3 md:gap-6 ${isLargeSet ? 'max-h-[60vh] overflow-y-auto px-2 py-4 custom-scrollbar' : ''}`}>
        {/* English Column */}
        <div className="space-y-3" dir="ltr">
          {shuffledEn.map((word) => {
            const isMatched = matched.includes(word);
            const isSelected = selectedEn === word;
            return (
              <motion.button
                key={word}
                disabled={isMatched || wrongSelection}
                onClick={() => {
                  if (!matched.includes(word)) {
                    setSelectedEn(word);
                    speakWord(word);
                  }
                }}
                whileHover={!isMatched ? { y: -2 } : {}}
                whileTap={!isMatched ? { y: 0 } : {}}
                className={`w-full p-4 md:p-6 rounded-2xl font-bold border-2 transition-all text-center ${
                  isMatched ? 'bg-emerald-500 text-white border-emerald-500' :
                  isSelected ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' :
                  wrongSelection && isSelected ? 'bg-red-500 text-white border-red-500' :
                  'bg-white border-white hover:border-primary/30 text-gray-800 shadow-sm'
                }`}
              >
                {word}
              </motion.button>
            );
          })}
        </div>

        {/* Arabic Column */}
        <div className="space-y-3">
          {shuffledAr.map((word) => {
            const isMatched = pairs.find(p => p.ar === word && matched.includes(p.en));
            const isSelected = selectedAr === word;
            return (
              <motion.button
                key={word}
                disabled={!!isMatched || wrongSelection}
                onClick={() => !isMatched && setSelectedAr(word)}
                whileHover={!isMatched ? { y: -2 } : {}}
                whileTap={!isMatched ? { y: 0 } : {}}
                className={`w-full p-4 md:p-6 rounded-2xl font-bold border-2 transition-all text-center ${
                  isMatched ? 'bg-emerald-500 text-white border-emerald-500' :
                  isSelected ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' :
                  wrongSelection && isSelected ? 'bg-red-500 text-white border-red-500' :
                  'bg-white border-white hover:border-primary/30 text-gray-800 shadow-sm'
                }`}
              >
                {word}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="pt-4 flex justify-between items-center text-sm text-gray-400 font-bold bg-white p-4 rounded-full shadow-inner">
        <span>{matched.length} من {pairs.length} مكتملة</span>
        {wrongSelection && <span className="text-red-500 flex items-center gap-1"><RotateCw size={14} className="animate-spin" /> حاول مرة أخرى</span>}
      </div>
    </div>
  );
}
