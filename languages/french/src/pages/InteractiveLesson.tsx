import { FC, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Check, Volume2 } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useProgress } from '../context/ProgressContext';
import { lessonsDataMap, LessonItem } from '../data/lessonContent';
import { MatchGame } from '../components/interactive/MatchGame';

export const InteractiveLesson: FC = () => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [hearts, setHearts] = useState(5);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();
  const { completeLesson } = useProgress();

  const lessonData = id ? (lessonsDataMap[id] || []) : [];
  const currentItem = lessonData[currentIndex];

  const playSound = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    if (currentItem?.type === 'listen' && currentItem.sound) {
      playSound(currentItem.sound);
    }
  }, [currentIndex, currentItem]);

  const handleCheck = () => {
    if (selected === null) return;
    
    setIsChecked(true);
    
    if (selected === currentItem.correct) {
      setProgress(((currentIndex + 1) / lessonData.length) * 100);
      new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3').play().catch(() => {});
    } else {
      setHearts(h => Math.max(0, h - 1));
      new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3').play().catch(() => {});
    }
  };

  const handleMatchComplete = () => {
    setIsChecked(true);
    setProgress(((currentIndex + 1) / lessonData.length) * 100);
    // Already played sound in MatchGame
  };

  const handleNext = () => {
    if (currentIndex < lessonData.length - 1) {
      setCurrentIndex(i => i + 1);
      setSelected(null);
      setIsChecked(false);
    } else {
      setIsFinished(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0d9488', '#2563eb', '#f59e0b', '#ec4899']
      });
    }
  };

  const handleContinue = () => {
    if (id) {
      completeLesson(id);
    }
    navigate('/');
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4" dir="rtl">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-sm">
          <div className="w-32 h-32 mx-auto bg-amber-400 rounded-full flex items-center justify-center mb-8 shadow-[0_8px_0_#d97706] border-4 border-white">
             <Check className="w-16 h-16 text-white" strokeWidth={4} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 mb-4">اكتمل الدرس بنجاح!</h2>
          <p className="text-slate-500 mb-8 font-medium">لقد أضفت +10 نقاط خبرة إلى رصيدك اليومي في تعلم الفرنسية.</p>
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

  if (hearts === 0) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4" dir="rtl">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-sm">
          <div className="w-32 h-32 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-sm">
             <Heart className="w-16 h-16 text-slate-300" strokeWidth={4} />
          </div>
          <h2 className="text-3xl font-black text-slate-800 mb-4">نفدت المحاولات!</h2>
          <p className="text-slate-500 mb-8 font-medium">لا تقلق القليل من الأخطاء تساعدنا على التعلم.</p>
          <button 
            onClick={() => navigate('/')}
            className="w-full py-4 rounded-2xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-lg transition-all active:translate-y-1 active:shadow-none mb-4"
          >
            إنهاء الدرس
          </button>
        </motion.div>
      </div>
    );
  }

  if (!currentItem) return <div className="min-h-screen bg-slate-50 p-8 text-center text-slate-500 font-bold" dir="rtl">لا يوجد محتوى في هذا الدرس حاليا. <button className="block mx-auto mt-4 underline text-blue-500" onClick={() => navigate('/')}>العودة الرئيسية</button></div>;

  const isCorrect = currentItem.type === 'match' ? isChecked : (isChecked && selected === currentItem.correct);
  const isWrong = currentItem.type === 'match' ? false : (isChecked && selected !== currentItem.correct);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans" dir="rtl">
      {/* Header */}
      <div className="max-w-4xl mx-auto w-full px-4 pt-6 pb-2 flex items-center gap-4">
        <Link to="/" className="text-slate-400 hover:text-slate-600 transition-colors">
          <X size={28} />
        </Link>
        <div className="flex-1 bg-slate-200 h-4 rounded-full overflow-hidden relative">
          <div 
             className="absolute top-0 right-0 h-full bg-green-500 rounded-full transition-all duration-500"
             style={{ width: `${progress}%` }}
          />
          <div 
             className="absolute top-1 right-2 h-1.5 bg-white/30 rounded-full transition-all duration-500"
             style={{ width: `${Math.max(0, progress - 5)}%` }}
          />
        </div>
        <div className="flex items-center gap-1.5 text-rose-500 font-bold">
          <Heart fill="currentColor" strokeWidth={0} size={24} className={hearts <= 2 ? 'animate-pulse' : ''} />
          <span>{hearts}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-2xl mx-auto w-full px-4 flex flex-col justify-center pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            className="w-full flex-1 flex flex-col pt-4"
          >
            <h1 className="text-2xl font-bold text-slate-800 mb-8">{currentItem.question}</h1>
            
            {currentItem.type === 'listen' && currentItem.sound && (
               <div className="flex justify-center mb-8">
                 <button 
                  onClick={() => playSound(currentItem.sound!)}
                  className="w-24 h-24 bg-blue-500 rounded-3xl text-white shadow-[0_8px_0_#1d4ed8] hover:-translate-y-1 flex items-center justify-center transition-all active:translate-y-2 active:shadow-none"
                 >
                    <Volume2 size={48} />
                 </button>
               </div>
            )}

            {currentItem.type === 'missing_letter' && currentItem.text && (
               <div className="w-full flex justify-center mb-8">
                  <div className="font-mono text-3xl sm:text-4xl font-bold text-center tracking-[0.2em] sm:tracking-[0.3em] text-slate-700 bg-slate-100 py-6 px-8 rounded-3xl border-2 border-slate-200 w-full md:w-auto shadow-inner uppercase min-h-[100px] flex items-center justify-center">
                     {currentItem.text.split('').map((char, i) => (
                       char === '_' ? (
                         <span key={i} className={`inline-block w-8 sm:w-12 h-10 sm:h-14 mx-1 border-b-4 ${selected !== null ? 'text-sky-600 border-sky-400' : 'text-slate-300 border-slate-300'}`}>
                           {selected !== null && currentItem.options ? currentItem.options[selected] : ''}
                         </span>
                       ) : (
                         <span key={i} className="mx-1">{char}</span>
                       )
                     ))}
                  </div>
               </div>
            )}

            {currentItem.type === 'match' ? (
              <div className="mt-4 mb-20 w-full max-w-lg mx-auto">
                 <MatchGame 
                   pairs={currentItem.pairs || []} 
                   onAllMatched={handleMatchComplete} 
                   onWrongMatch={() => setHearts(h => Math.max(0, h - 1))}
                 />
              </div>
            ) : (
              <div className={`grid mt-auto mb-10 w-full max-w-lg mx-auto gap-3 ${currentItem.type === 'listen' ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {currentItem.options?.map((option, idx) => {
                  let borderClass = 'border-slate-200 border-2 border-b-4';
                  let bgClass = 'bg-white';
                  let textClass = 'text-slate-700';
                  
                  if (isChecked) {
                    if (idx === currentItem.correct) {
                      borderClass = 'border-green-500 border-2 border-b-4';
                      bgClass = 'bg-green-50';
                      textClass = 'text-green-600';
                    } else if (idx === selected) {
                      borderClass = 'border-rose-500 border-2 border-b-4';
                      bgClass = 'bg-rose-50';
                      textClass = 'text-rose-600';
                    } else {
                      borderClass = 'border-slate-200 border-2 border-b-4';
                      bgClass = 'bg-white opacity-50';
                    }
                  } else if (selected === idx) {
                    borderClass = 'border-sky-400 border-2 border-b-4';
                    bgClass = 'bg-sky-50';
                    textClass = 'text-sky-700';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isChecked}
                      onClick={() => setSelected(idx)}
                      className={`p-4 rounded-2xl w-full text-center font-bold text-xl lg:text-2xl transition-all ${borderClass} ${bgClass} ${textClass} hover:bg-slate-50 active:scale-[0.98] disabled:active:scale-100 flex items-center justify-center min-h-[4rem]`}
                    >
                      {option}
                    </button>
                  )
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer Banner */}
      <div className={`fixed bottom-0 left-0 right-0 border-t-2 z-50 transition-colors ${
        !isChecked 
          ? 'bg-transparent border-transparent' 
          : isCorrect 
            ? 'bg-green-100 border-green-200' 
            : 'bg-rose-100 border-rose-200'
      }`}>
        <div className="max-w-4xl mx-auto px-4 py-8 flex items-center justify-between">
          <div>
            {isChecked && (
              <div className="flex items-center gap-3">
                <div className={`hidden sm:flex w-12 h-12 rounded-full items-center justify-center ${isCorrect ? 'bg-white text-green-500' : 'bg-white text-rose-500'}`}>
                   {isCorrect ? <Check strokeWidth={4} /> : <X strokeWidth={4} />}
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isCorrect ? 'text-green-600' : 'text-rose-600'}`}>
                    {isCorrect ? 'عمل رائع!' : 'إجابة خاطئة'}
                  </h3>
                  {isWrong && currentItem.type !== 'match' && currentItem.options && currentItem.correct !== undefined && (
                    <p className="text-rose-500 font-medium mt-1 text-sm sm:text-base">الجواب الصحيح: {currentItem.options[currentItem.correct]}</p>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <button
            disabled={currentItem.type === 'match' ? !isChecked : (selected === null && !isChecked)}
            onClick={isChecked ? handleNext : handleCheck}
            className={`px-10 py-3.5 rounded-2xl font-bold text-lg transition-all uppercase tracking-wider min-w-[140px]
              ${(currentItem.type === 'match' ? !isChecked : (selected === null && !isChecked))
                 ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                 : isCorrect
                    ? 'bg-green-500 text-white hover:bg-green-400 shadow-[0_4px_0_#16a34a] active:translate-y-1 active:shadow-none'
                    : isWrong
                      ? 'bg-rose-500 text-white hover:bg-rose-400 shadow-[0_4px_0_#e11d48] active:translate-y-1 active:shadow-none'
                      : 'bg-teal-500 text-white hover:bg-teal-400 shadow-[0_4px_0_#0d9488] active:translate-y-1 active:shadow-none'
              }
            `}
          >
            {isChecked ? 'متابعة' : 'تحقق'}
          </button>
        </div>
      </div>
    </div>
  );
};
