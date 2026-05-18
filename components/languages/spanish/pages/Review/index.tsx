import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from '../../hooks/useProgress';
import { BrainCircuit, Check, X, Volume2, Library } from 'lucide-react';
import { useAudioSettings } from '../../context/AudioSettingsContext';
import { flashcardsData } from '../../data/flashcardsData';

export default function Review() {
  const { audioSpeed } = useAudioSettings();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);
  const [cards, setCards] = useState(() => [...flashcardsData].sort(() => Math.random() - 0.5));

  const currentWord = cards[currentIndex];

  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(currentWord.spanish);
    utterance.lang = 'es-ES';
    utterance.rate = audioSpeed;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  const handleAnswer = () => {
    if (currentIndex < cards.length - 1) {
      setShowAnswer(false);
      setCurrentIndex(i => i + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="flex flex-col items-center justify-center pt-20 px-4 text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center mb-8"
        >
          <Check size={64} className="text-teal-500" />
        </motion.div>
        <h2 className="text-3xl font-extrabold text-stone-800 mb-4">أحسنت!</h2>
        <p className="text-stone-500 text-lg mb-10">لقد انتهيت من مراجعة {cards.length} بطاقة بنجاح.</p>
        <button 
          onClick={() => { setFinished(false); setCurrentIndex(0); setShowAnswer(false); setCards([...cards].sort(() => Math.random() - 0.5)); }}
          className="bg-[#1cb0f6] text-white px-8 py-3 rounded-2xl font-bold text-xl hover:brightness-110 shadow-[0_4px_0_0_#1899d6]"
        >
          ابدأ من جديد
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center pt-10 px-4 max-w-xl mx-auto w-full pb-20">
      <div className="w-full flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Library className="text-[#58cc02]" />
          بطاقات الكلمات
        </h1>
        <div className="text-stone-500 font-bold bg-stone-100 px-3 py-1 rounded-lg">
          {currentIndex + 1} / {cards.length}
        </div>
      </div>

      <div className="w-full bg-[#e5e5e5] h-3 rounded-full mb-10 overflow-hidden relative">
         <motion.div 
           className="absolute top-0 bottom-0 left-0 bg-[#58cc02]"
           animate={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
           transition={{ duration: 0.3 }}
         />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={currentIndex}
           initial={{ opacity: 0, x: 50 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -50 }}
           className="w-full bg-white border-2 border-stone-200 rounded-[2.5rem] p-10 flex flex-col items-center relative shadow-[0_4px_0_0_#e5e5e5]"
        >
           <button 
             onClick={playAudio}
             className="absolute top-6 left-6 p-4 bg-[#1cb0f6] text-white rounded-full hover:brightness-110 active:translate-y-1 transition-all border-b-[4px] border-[#1899d6] cursor-pointer"
           >
             <Volume2 size={24} />
           </button>

           <div className="text-stone-400 font-bold uppercase tracking-wider mb-4 mt-4">كيف تقول بالإسبانية:</div>
           <div className="flex items-center gap-4 mb-10">
             <h2 className="text-5xl font-extrabold text-stone-800 text-center" dir="ltr">{currentWord.spanish}</h2>
             <button
               onClick={playAudio}
               className="p-3 bg-[#1cb0f6] text-white rounded-full hover:brightness-110 active:translate-y-1 transition-all border-b-[4px] border-[#1899d6] cursor-pointer"
             >
               <Volume2 size={24} />
             </button>
           </div>

           {showAnswer ? (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               className="flex flex-col items-center w-full"
             >
               <div className="w-16 h-1 bg-stone-200 rounded-full mb-6"></div>
               <p className="text-3xl font-bold text-[#58cc02] mb-12 text-center">{currentWord.arabic}</p>
               
               <button 
                 onClick={handleAnswer}
                 className="w-full py-4 border-2 border-[#58cc02] bg-[#58cc02] text-white rounded-2xl font-bold text-lg hover:brightness-110 transition-all border-b-[4px] border-[#58a700] active:translate-y-1"
               >
                 التالي
               </button>
             </motion.div>
           ) : (
             <button 
               onClick={() => setShowAnswer(true)}
               className="w-full bg-[#1cb0f6] text-white py-5 rounded-2xl font-extrabold text-2xl hover:brightness-110 active:translate-y-1 transition-all border-b-[6px] border-[#1899d6]"
             >
               إظهار المعنى
             </button>
           )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
