import { useState, useEffect, FormEvent } from 'react';
import { apiFetch } from '../lib/api';
import { BookOpen, RefreshCw, Star, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner';
import { useSettingsStore } from '../lib/store/settings';
import confetti from 'canvas-confetti';

import { LoadingPage } from '../components/common/LoadingPage';

export default function Flashcards() {
  const { ttsRate, ttsGender } = useSettingsStore();
  const [vocabulary, setVocabulary] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);

  useEffect(() => {
    const fetchVocab = async () => {
      try {
        const data = await apiFetch('/api/learning/vocabulary');
        setVocabulary(data.vocabulary);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchVocab();
  }, []);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = ttsRate;
      
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => 
        v.lang.startsWith('en') && 
        v.name.toLowerCase().includes(ttsGender.toLowerCase())
      ) || voices.find(v => v.lang.startsWith('en'));
      
      if (voice) utterance.voice = voice;
      
      window.speechSynthesis.speak(utterance);
    } else {
      toast.error("Audio not supported");
    }
  };

  const handleNext = () => {
    setIsFlipped(false);
    setUserInput('');
    setShowFeedback(null);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % vocabulary.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setUserInput('');
    setShowFeedback(null);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + vocabulary.length) % vocabulary.length);
    }, 150);
  };

  const checkAnswer = (e: FormEvent) => {
    e.preventDefault();
    const currentItem = vocabulary[currentIndex];
    
    // Normalize and check
    const normalizedInput = userInput.trim().toLowerCase();
    const normalizedTarget = currentItem.phrase.trim().toLowerCase();
    
    if (normalizedInput === normalizedTarget) {
      setShowFeedback('correct');
      
      // Multiple confetti bursts for better effect
      const duration = 2000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Fire from left side
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        
        // Fire from right side
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
      }, 250);
      
      toast.success("إجابة صحيحة! أحسنت");
      setTimeout(() => {
        handleNext();
      }, 1500);
    } else {
      setShowFeedback('wrong');
      toast.error("حاول مرة أخرى");
    }
  };

  if (loading) {
    return <LoadingPage />;
  }

  if (vocabulary.length === 0) {
    return (
      <div className="bg-white p-12 rounded-[2rem] border-2 border-gray-100 shadow-sm flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-gray-50 text-gray-400 rounded-3xl flex items-center justify-center mb-4">
          <BookOpen size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">لا يوجد كلمات حالياً</h2>
        <p className="text-gray-500 font-medium">عد لاحقاً لمتابعة الكلمات الجديدة.</p>
      </div>
    );
  }

  const currentItem = vocabulary[currentIndex];

  return (
    <div className="max-w-3xl mx-auto space-y-8 flex flex-col items-center animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-display font-black text-gray-900">بطاقات المذاكرة</h1>
        <p className="text-gray-500 font-medium">بطاقة {currentIndex + 1} من {vocabulary.length}</p>
      </div>

      <div className="relative w-full aspect-[4/3] md:aspect-[3/2]">
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.div
              key="front"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute w-full h-full bg-white rounded-[2rem] border-2 border-gray-100 shadow-md flex flex-col items-center justify-center p-8 text-center group transition-colors cursor-pointer hover:border-primary/50 relative overflow-hidden"
              onClick={() => setIsFlipped(true)}
            >
              {/* Background Icons */}
              <svg className="absolute top-[-50px] right-[-50px] w-48 h-48 text-orange-50 opacity-10 -rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              
              <span className="absolute top-6 left-6 text-sm font-bold bg-orange-50 text-primary px-3 py-1 rounded-full uppercase tracking-wider">
                 {currentItem.level}
              </span>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" dir="ltr">
                  {currentItem.phrase}
                </h2>
                <p className="text-xl md:text-2xl font-bold text-slate-400 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  {currentItem.meaning}
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-8">
                 <button 
                   onClick={(e) => { e.stopPropagation(); speak(currentItem.phrase); }}
                   className="p-4 bg-primary/10 text-primary rounded-2xl hover:bg-primary hover:text-white transition-all shadow-sm"
                 >
                   <Volume2 size={28} />
                 </button>
              </div>
              
              <div className="absolute bottom-6 flex items-center gap-2 text-gray-400 font-bold text-sm">
                <RefreshCw size={18} /> انقر للكتابة والتحقق
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute w-full h-full bg-slate-900 rounded-[2rem] shadow-2xl flex flex-col items-center justify-center p-8 text-center text-white relative overflow-hidden"
            >
               {/* Background Icons */}
               <svg className="absolute bottom-[-50px] left-[-50px] w-48 h-48 text-white opacity-5 rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>

               <button 
                 onClick={() => setIsFlipped(false)}
                 className="absolute top-6 right-6 text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-white"
               >
                 الرجوع للبطاقة
               </button>

               <div className="w-full max-w-sm space-y-8">
                 <div>
                   <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2 text-center">Translation Check</p>
                   <h3 className="text-2xl font-bold text-white mb-6 text-center">{currentItem.meaning}</h3>
                 </div>

                 <form onSubmit={checkAnswer} className="space-y-4">
                   <input 
                     autoFocus
                     onFocus={(e) => {
                       // Ensure caret is at the end of the input
                       const val = e.target.value;
                       e.target.value = '';
                       e.target.value = val;
                     }}
                     type="text" 
                     value={userInput}
                     onChange={(e) => setUserInput(e.target.value)}
                     placeholder="اكتب المعنى بالإنجليزية هنا..."
                     dir="ltr"
                     className={`w-full bg-white/5 border-2 rounded-2xl p-4 text-center text-xl font-bold transition-all focus:outline-none ${
                       showFeedback === 'correct' ? 'border-green-500 bg-green-500/10' : 
                       showFeedback === 'wrong' ? 'border-red-500 bg-red-500/10 animate-shake' : 
                       'border-white/10 focus:border-primary focus:bg-white/10'
                     }`}
                   />
                   <button 
                     type="submit"
                     className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-95"
                   >
                     تأكيد الإجابة
                   </button>
                 </form>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-4 w-full">
        <button 
           onClick={handlePrev}
           className="flex-1 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 font-bold py-4 rounded-xl transition-all shadow-sm"
        >
           السابق
        </button>
        <button 
           onClick={handleNext}
           className="flex-1 bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 font-bold py-4 rounded-xl transition-all shadow-sm"
        >
           التالي
        </button>
      </div>
      <div className="flex gap-4 w-full">
         <button 
           onClick={() => handleNext()}
           className="flex-1 bg-orange-100 hover:bg-orange-200 text-orange-700 font-bold py-4 rounded-xl transition-all shadow-sm"
        >
           ما زلت أتعلم
        </button>
        <button 
           onClick={() => handleNext()}
           className="flex-1 bg-green-100 hover:bg-green-200 text-green-700 font-bold py-4 rounded-xl transition-all shadow-sm flex justify-center items-center gap-2"
        >
           <Star size={20} /> عرفتها!
        </button>
      </div>
    </div>
  );
}
