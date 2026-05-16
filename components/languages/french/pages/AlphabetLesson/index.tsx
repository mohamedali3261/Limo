import { FC, useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Volume2, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useProgress } from '../../context/ProgressContext';

const alphabetData = [
  { letter: "A", word: "Abeille", emoji: "🐝", translation: "نحلة" },
  { letter: "B", word: "Baleine", emoji: "🐋", translation: "حوت" },
  { letter: "C", word: "Chat", emoji: "🐈", translation: "قطة" },
  { letter: "D", word: "Dauphin", emoji: "🐬", translation: "دلفين" },
  { letter: "E", word: "Éléphant", emoji: "🐘", translation: "فيل" },
  { letter: "F", word: "Fourmi", emoji: "🐜", translation: "نملة" },
  { letter: "G", word: "Girafe", emoji: "🦒", translation: "زرافة" },
  { letter: "H", word: "Hibou", emoji: "🦉", translation: "بومة" },
  { letter: "I", word: "Iguane", emoji: "🦎", translation: "إغوانة" },
  { letter: "J", word: "Jaguar", emoji: "🐆", translation: "فهد" },
  { letter: "K", word: "Kangourou", emoji: "🦘", translation: "كنغر" },
  { letter: "L", word: "Lion", emoji: "🦁", translation: "أسد" },
  { letter: "M", word: "Mouton", emoji: "🐑", translation: "خروف" },
  { letter: "N", word: "Narval", emoji: "🐋", translation: "حريش البحر" },
  { letter: "O", word: "Ours", emoji: "🐻", translation: "دب" },
  { letter: "P", word: "Pingouin", emoji: "🐧", translation: "بطريق" },
  { letter: "Q", word: "Quetzal", emoji: "🦜", translation: "طائر الكيتزال" },
  { letter: "R", word: "Renard", emoji: "🦊", translation: "ثعلب" },
  { letter: "S", word: "Singe", emoji: "🐒", translation: "قرد" },
  { letter: "T", word: "Tigre", emoji: "🐅", translation: "نمر" },
  { letter: "U", word: "Unau", emoji: "🦥", translation: "كسلان" },
  { letter: "V", word: "Vache", emoji: "🐄", translation: "بقرة" },
  { letter: "W", word: "Wapiti", emoji: "🦌", translation: "أيل" },
  { letter: "X", word: "Xérus", emoji: "🐿️", translation: "سنجاب أرضي" },
  { letter: "Y", word: "Yak", emoji: "🐂", translation: "ياك" },
  { letter: "Z", word: "Zèbre", emoji: "🦓", translation: "حمار وحشي" }
];

export const AlphabetLesson: FC = () => {
  const [clickedLetters, setClickedLetters] = useState<Set<string>>(new Set());
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();
  const { completeLesson } = useProgress();

  const playSound = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCardClick = (item: typeof alphabetData[0]) => {
    playSound(`${item.letter}, ${item.word}`);
    setClickedLetters(prev => {
      const next = new Set(prev);
      next.add(item.letter);
      return next;
    });
  };

  const handleFinish = () => {
    setIsFinished(true);
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#0d9488', '#2563eb', '#f59e0b', '#ec4899', '#8b5cf6']
    });
  };

  const handleContinue = () => {
    completeLesson('alphabet');
    navigate('..');
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4" dir="rtl">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-sm">
          <div className="w-32 h-32 mx-auto bg-amber-400 rounded-full flex items-center justify-center mb-8 shadow-[0_8px_0_#d97706] border-4 border-white">
             <span className="text-6xl">🎉</span>
          </div>
          <h2 className="text-3xl font-black text-slate-800 mb-4">اكتمل الدرس بنجاح!</h2>
          <p className="text-slate-500 mb-8 font-medium">لقد أضفت +20 نقاط خبرة لأنك تعلمت الحروف كلها!</p>
          <button 
            onClick={handleContinue}
            className="w-full py-4 rounded-2xl bg-teal-500 hover:bg-teal-400 text-white font-bold text-lg shadow-[0_4px_0_#0d9488] transition-all active:translate-y-1 active:shadow-none mb-4"
          >
            متابعة
          </button>
        </motion.div>
      </div>
    );
  }

  const progressPercentage = (clickedLetters.size / alphabetData.length) * 100;
  const isAllDiscovered = clickedLetters.size === alphabetData.length;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans" dir="rtl">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link to=".." className="text-slate-400 hover:text-slate-600 transition-colors shrink-0">
            <X size={28} />
          </Link>
          <div className="flex-1 bg-slate-200 h-4 rounded-full overflow-hidden relative">
            <div 
               className="absolute top-0 right-0 h-full bg-teal-500 rounded-full transition-all duration-500"
               style={{ width: `${progressPercentage}%` }}
            />
            <div 
               className="absolute top-1 right-2 h-1.5 bg-white/30 rounded-full transition-all duration-500"
               style={{ width: `${Math.max(0, progressPercentage - 5)}%` }}
            />
          </div>
          <span className="font-bold text-slate-500 text-sm whitespace-nowrap min-w-[50px]">
            {clickedLetters.size} / {alphabetData.length}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-8 pb-32">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3">الحروف الأبجدية</h1>
          <p className="text-slate-500 text-lg">اضغط على كل بطاقة لتسمع النطق الصحيح للحرف والكلمة</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 border-b pb-12">
          <AnimatePresence>
            {alphabetData.map((item, idx) => {
              const isClicked = clickedLetters.has(item.letter);
              return (
                <motion.button
                  key={item.letter}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: idx * 0.02 }}
                  onClick={() => handleCardClick(item)}
                  className={`relative flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all overflow-hidden ${
                    isClicked 
                      ? 'bg-blue-50 border-blue-200 shadow-sm' 
                      : 'bg-white border-slate-200 shadow-[0_4px_0_#e2e8f0]'
                  }`}
                  style={!isClicked ? { paddingBottom: '2rem' } : undefined}
                >
                  {isClicked && (
                    <div className="absolute top-2 left-2 text-blue-500">
                      <Volume2 size={16} />
                    </div>
                  )}
                  <span className={`text-4xl md:text-5xl font-black mb-3 ${isClicked ? 'text-blue-600' : 'text-slate-700'}`}>
                    {item.translation}
                  </span>
                  
                  <div className={`flex flex-col items-center gap-1 transition-all duration-300 ${isClicked ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute'}`}>
                    <span className="text-4xl mb-2">{item.emoji}</span>
                    <span className="font-bold text-slate-700 text-lg">{item.letter}</span>
                    <span className="text-slate-400 text-sm font-medium">{item.word}</span>
                  </div>

                  {!isClicked && (
                    <span className="absolute bottom-4 text-3xl opacity-50 grayscale blur-[2px]">{item.emoji}</span>
                  )}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer / Continue button */}
      <AnimatePresence>
        {isAllDiscovered && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]"
          >
            <div className="max-w-4xl mx-auto flex items-center justify-between">
               <h3 className="text-xl font-bold text-teal-600 hidden sm:block">لقد تعلمت كل الحروف!</h3>
               <button
                  onClick={handleFinish}
                  className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-lg transition-all uppercase bg-teal-500 text-white hover:bg-teal-400 shadow-[0_4px_0_#0d9488] active:translate-y-1 active:shadow-none flex items-center justify-center gap-2"
               >
                 إنهاء الدرس
                 <ArrowRight size={24} />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
