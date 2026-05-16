import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Star, CheckCircle, PlayCircle, Lock, ChevronRight } from 'lucide-react';
import { kidsGameLevels } from '../../../data/kids/levels';
import confetti from 'canvas-confetti';

export default function SpellingGame() {
  const [currentLevelId, setCurrentLevelId] = useState<number | null>(null);
  const [unlockedLevels, setUnlockedLevels] = useState(() => parseInt(localStorage.getItem('spelling-unlocked-level') || '1', 10));

  const [points, setPoints] = useState(() => parseInt(localStorage.getItem('kids-points') || '0', 10));
  const [targetWord, setTargetWord] = useState('');
  const [targetEmoji, setTargetEmoji] = useState('');
  const [letters, setLetters] = useState<{ id: string; char: string }[]>([]);
  const [slots, setSlots] = useState<{ id: string | null; char: string | null }[]>([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('kids-points', points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem('spelling-unlocked-level', unlockedLevels.toString());
  }, [unlockedLevels]);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 0.8;
      window.speechSynthesis.speak(u);
    }
  };

  const startNewGame = (levelId?: number) => {
    const targetLevelId = levelId || currentLevelId;
    if (!targetLevelId) return;

    const levelData = kidsGameLevels.find(l => l.id === targetLevelId)?.data || [];
    const randomObject = levelData[Math.floor(Math.random() * levelData.length)];
    // Filter out spaces or special characters for spelling?
    const rawWord = randomObject.name.toLowerCase();
    const word = rawWord.replace(/[^a-z]/g, ''); // keep only alphabets just to be safe
    
    setTargetWord(word);
    setTargetEmoji(randomObject.emoji);
    
    // Create random shuffled letters
    const charArray = word.split('').map((char, i) => ({ id: `char-${i}-${Date.now()}`, char }));
    charArray.sort(() => 0.5 - Math.random());
    setLetters(charArray);
    
    // Create empty slots
    setSlots(word.split('').map(() => ({ id: null, char: null })));
    setSuccess(false);
    setCurrentLevelId(targetLevelId);
    
    speak(`Spell ${word}`);
  };

  const handleLetterSelect = (letterObj: { id: string; char: string }) => {
    if (success) return;
    
    const nextEmptySlot = slots.findIndex(s => s.char === null);
    if (nextEmptySlot === -1) return;

    // Check if correct letter for this position
    if (targetWord[nextEmptySlot] === letterObj.char) {
      // Correct!
      const newSlots = [...slots];
      newSlots[nextEmptySlot] = letterObj;
      setSlots(newSlots);
      
      setLetters(prev => prev.filter(l => l.id !== letterObj.id));
      speak(letterObj.char);

      if (nextEmptySlot === targetWord.length - 1) {
        // Did we finish?
        setSuccess(true);
        setPoints(p => p + 10);
        speak(`Excellent! ${targetWord}!`);
        
        // Rain effect from top
        const duration = 2000;
        const animationEnd = Date.now() + duration;

        const interval: any = setInterval(function() {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 30;
          
          // Rain from top
          confetti({
            particleCount,
            angle: 90,
            spread: 45,
            origin: { x: Math.random(), y: 0 },
            colors: ['#FFD700', '#FFA500', '#FF6347', '#87CEEB', '#98FB98']
          });
        }, 150);
        
        if (currentLevelId && currentLevelId >= unlockedLevels) {
          setUnlockedLevels(currentLevelId + 1);
        }
      }
    } else {
      // Wrong!
      speak('Oops, try another letter!');
    }
  };

  const handleSlotClick = (index: number) => {
    // If they want to remove a letter, we can allow it (optional)
    // but right now we only let them place correct letters to keep it simple and fun.
  };

  if (currentLevelId === null) {
    return (
      <div className="max-w-5xl mx-auto space-y-8 pb-20 px-4 pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/kids" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <ArrowLeft size={24} className="text-gray-700" />
            </Link>
            <h1 className="text-3xl font-black text-gray-900">مستويات تجميع الحروف</h1>
          </div>
          <div className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full font-black flex items-center gap-2">
            <Star className="fill-yellow-500 text-yellow-500" size={20} />
            <span>{points} نقطة</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
           {kidsGameLevels.map((level) => {
             const isUnlocked = level.id <= unlockedLevels;
             return (
               <motion.button
                 key={level.id}
                 whileHover={isUnlocked ? { scale: 1.05 } : {}}
                 whileTap={isUnlocked ? { scale: 0.95 } : {}}
                 onClick={() => isUnlocked && startNewGame(level.id)}
                 className={`relative w-full aspect-square rounded-[2rem] border-4 flex flex-col items-center justify-center p-4 transition-all ${
                   isUnlocked 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-600 cursor-pointer shadow-sm hover:shadow-md' 
                    : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                 }`}
               >
                 <div className="text-3xl font-black mb-2">{level.id}</div>
                 <div className="text-sm font-bold text-center opacity-80">{level.name}</div>
                 {!isUnlocked && (
                   <div className="absolute top-3 right-3 text-gray-300">
                     <Lock size={20} />
                   </div>
                 )}
               </motion.button>
             );
           })}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20 px-4 pt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => setCurrentLevelId(null)} className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-3xl font-black text-gray-900">المستوى {currentLevelId}</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full font-black flex items-center gap-2">
            <Star className="fill-yellow-500 text-yellow-500" size={20} />
            <span>{points} نقطة</span>
          </div>
          <button 
            onClick={() => startNewGame()}
            className="px-4 py-2 bg-teal-100 text-teal-600 rounded-full font-bold flex items-center gap-2 hover:bg-teal-200"
          >
            <RefreshCw size={20} />
            <span className="hidden sm:inline">كلمة جديدة</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-12 bg-white rounded-[3rem] p-6 sm:p-12 border-4 border-emerald-100 shadow-xl">
        <div className="text-7xl sm:text-9xl mb-8 relative">
           {targetEmoji}
           {success && (
             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute -right-4 -bottom-4 bg-white rounded-full">
               <CheckCircle className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-500" />
             </motion.div>
           )}
        </div>

        <button onClick={() => speak(targetWord)} className="mb-8 p-3 bg-emerald-50 text-emerald-600 rounded-full hover:bg-emerald-100">
           <PlayCircle size={32} />
        </button>

        {/* Slots */}
        <div className="flex gap-2 sm:gap-4 mb-12 flex-wrap justify-center" dir="ltr">
          {slots.map((slot, idx) => (
            <div 
              key={idx} 
              onClick={() => handleSlotClick(idx)}
              className={`w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 rounded-2xl border-4 flex items-center justify-center text-3xl sm:text-4xl font-black uppercase ${
                slot.char 
                  ? 'bg-emerald-500 border-emerald-600 text-white shadow-lg' 
                  : 'bg-gray-50 border-gray-200 text-transparent border-dashed'
              }`}
            >
              {slot.char}
            </div>
          ))}
        </div>

        {/* Available Letters */}
        <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
           <AnimatePresence>
             {letters.map((letter) => (
               <motion.button
                 key={letter.id}
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 exit={{ scale: 0 }}
                 onClick={() => handleLetterSelect(letter)}
                 className="w-12 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 bg-white border-4 border-blue-200 text-blue-600 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl font-black uppercase shadow-sm hover:scale-110 active:scale-95 transition-transform"
                 dir="ltr"
               >
                 {letter.char}
               </motion.button>
             ))}
           </AnimatePresence>
        </div>
      </div>
      
      {success && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mt-8"
        >
          <button
             onClick={() => {
               if (currentLevelId && currentLevelId < kidsGameLevels.length) {
                 startNewGame(currentLevelId + 1);
               } else {
                 setCurrentLevelId(null);
               }
             }}
             className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-black text-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
             {currentLevelId === kidsGameLevels.length ? 'انتهت اللعبة! العودة' : 'المستوى التالي'}
             <ChevronRight size={28} />
          </button>
        </motion.div>
      )}
    </div>
  );
}
