import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useProgress } from '../../contexts/ProgressContext';
import { Volume2, Trophy, Check, X } from 'lucide-react';
import { getQuizData, courseUnits } from '../../data/courseData';
import Mascot from '../UI/Mascot';
import { playSuccessSound, playErrorSound } from '../../utils/audio';

export default function QuizView({ levelId, dataId, initialQuestions }: { levelId: number; dataId: string; initialQuestions?: any[] }) {
 const [quizQuestions, setQuizQuestions] = useState<any[]>([]);
 const [currentIdx, setCurrentIdx] = useState(0);
 const [originalLength, setOriginalLength] = useState(0);
 const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
 const [arranged, setArranged] = useState<string[]>([]);
 const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
 const [flipped, setFlipped] = useState(false);
 const [selectedCards, setSelectedCards] = useState<string[]>([]);
 const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
 const [showCelebration, setShowCelebration] = useState(false);
 
 const { addXP, unlockLevel, markConversationAsCompleted } = useProgress();
 const navigate = useNavigate();

 useEffect(() => {
  if (initialQuestions && initialQuestions.length > 0) {
    setQuizQuestions(initialQuestions);
    setOriginalLength(initialQuestions.length);
  } else {
    const data = getQuizData(dataId);
    console.log('Quiz Data ID:', dataId);
    console.log('Quiz Data:', data);
    if (data && data.length > 0) {
     setQuizQuestions(data);
     setOriginalLength(data.length);
    } else {
      console.warn('No quiz data found for:', dataId);
    }
  }
 }, [dataId, initialQuestions]);

 if (quizQuestions.length === 0) return (
  <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-3xl mx-auto w-full">
    <div className="text-center">
      <div className="text-6xl mb-4">⏳</div>
      <h2 className="text-2xl font-black text-slate-800 mb-2">جاري تحميل الاختبار...</h2>
      <p className="text-slate-600 font-bold">يرجى الانتظار قليلاً</p>
    </div>
  </div>
 );

 const currentQ = quizQuestions[currentIdx];
 const isLast = currentIdx === quizQuestions.length - 1;

 const playAudio = (text: string) => {
  if ('speechSynthesis' in window) {
   window.speechSynthesis.cancel();
   const utterance = new SpeechSynthesisUtterance(text);
   utterance.lang = 'de-DE';
   window.speechSynthesis.speak(utterance);
  }
 };

 const handleCheck = () => {
  let isCorrect = false;
  if (currentQ.type === 'multiple_choice' || currentQ.type === 'fill_in_blank') {
   isCorrect = selectedOpt === currentQ.answer;
  } else if (currentQ.type === 'sentence_builder') {
   isCorrect = arranged.join(' ') === currentQ.answer;
  } else if (currentQ.type === 'flashcard') {
    isCorrect = selectedOpt === 'easy'; // simplified for now
  }

  if (isCorrect) {
   setStatus('correct');
   playSuccessSound();
   if (currentQ.audioText) playAudio(currentQ.audioText);
   confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#3b82f6', '#fbbf24', '#10b981']
   });
  } else {
   setStatus('wrong');
   playErrorSound();
   // Add the failed question to the end of the quiz for review
   const repeatedQuestion = { ...currentQ, id: Date.now() + Math.random() };
   setQuizQuestions(prev => [...prev, repeatedQuestion]);
  }
 };

 const handleNext = () => {
  if (isLast && status === 'correct') {
    setShowCelebration(true);
  } else {
   setStatus('idle');
   setSelectedOpt(null);
   setArranged([]);
   setFlipped(false);
   setSelectedCards([]);
   setMatchedPairs([]);
   setCurrentIdx(prev => prev + 1);
  }
 };

 const proceedToNextLevel = () => {
    if (dataId.startsWith('conv-')) {
      const convId = dataId.replace('conv-', '');
      markConversationAsCompleted(convId);
      navigate('/conversations');
      return;
    }

    addXP(50);
    unlockLevel(levelId + 1);
    const allLevels = courseUnits.flatMap(u => u.levels);
    const nextLevel = allLevels.find(l => l.id === levelId + 1);
    
    if (nextLevel) {
     if (nextLevel.type === 'quiz') {
      navigate(`quiz/${nextLevel.id}`);
     } else {
      navigate(`lesson/${nextLevel.id}`);
     }
    } else {
     navigate('/');
    }
 };

 const renderMultipleChoice = () => (
  <div className="grid grid-cols-1 gap-4 w-full px-4">
  {currentQ.options?.map((opt: string, idx: number) => (
  <motion.button
  key={opt}
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: idx * 0.1 }}
  onClick={() => {
    if (status === 'idle') {
      setSelectedOpt(opt);
      if (/^[a-zA-ZäöüÄÖÜß\s\.\?\!]+$/.test(opt)) {
        playAudio(opt);
      }
    }
  }}
  disabled={status !== 'idle'}
  className={`p-5 rounded-2xl border-2 text-xl font-black transition-all flex items-center justify-between gap-4 relative group ${
  selectedOpt === opt 
  ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-[0_6px_0_0_#6366f1] -translate-y-1' 
  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 bg-white shadow-[0_6px_0_0_#f1f5f9] active:shadow-none active:translate-y-1'
  } ${status === 'correct' && currentQ.answer === opt ? 'border-emerald-500 bg-emerald-50 text-emerald-700 shadow-[0_6px_0_0_#10b981]' : ''}
  ${status === 'wrong' && selectedOpt === opt ? 'border-rose-500 bg-rose-50 text-rose-700 shadow-[0_6px_0_0_#f43f5e]' : ''}
  `}
  >
  <span className="flex-1 text-right">{opt}</span>
  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center shrink-0 font-bold ${
    selectedOpt === opt ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-200 text-slate-400'
  }`}>
    {idx + 1}
  </div>
  </motion.button>
  ))}
  </div>
 );

 const renderFillInBlank = () => {
  const parts = currentQ.wordWithBlank?.split('_') || ['', ''];
  return (
  <div className="flex flex-col items-center gap-8 w-full">
  <div className="text-2xl font-semibold opacity-70 mb-2">{currentQ.translation}</div>
  <div className="flex items-center text-5xl font-bold tracking-widest bg-white p-8 rounded-3xl shadow-sm border border-slate-100 ">
  <span>{parts[0]}</span>
  <span className={`mx-2 text-primary-600 border-b-4 border-primary-500 pb-1 min-w-[3rem] inline-block text-center ${selectedOpt ? 'opacity-100' : 'opacity-20'}`}>
  {selectedOpt || '?'}
  </span>
  <span>{parts[1]}</span>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mt-6">
  {currentQ.options?.map((opt: string) => (
  <button
  key={opt}
  onClick={() => {
    if (status === 'idle') {
      setSelectedOpt(opt);
      if (/^[a-zA-ZäöüÄÖÜß\s\.\?\!]+$/.test(opt)) {
        playAudio(opt);
      }
    }
  }}
  disabled={status !== 'idle'}
  className={`p-4 rounded-2xl border-4 text-3xl font-bold transition-all flex items-center justify-center gap-2 ${
  selectedOpt === opt 
  ? 'border-primary-500 bg-primary-50 text-primary-700 ' 
  : 'border-slate-200 hover:border-primary-200 hover:bg-slate-50 text-slate-700 bg-white '
  }`}
  >
  {opt}
  {/^[a-zA-ZäöüÄÖÜß\s\.\?\!]+$/.test(opt) && <Volume2 className="w-5 h-5 opacity-40 shrink-0" />}
  </button>
  ))}
  </div>
  </div>
  );
 };

 const handleCardClick = (card: {id: string; text: string; matchId: string}) => {
  if (selectedCards.length === 2 || selectedCards.includes(card.id) || matchedPairs.includes(card.matchId)) return;

  const newSelected = [...selectedCards, card.id];
  setSelectedCards(newSelected);

  if (newSelected.length === 2) {
  const firstCard = currentQ.memoryPairs?.find((c: any) => c.id === newSelected[0]);
  if (firstCard && firstCard.matchId === card.matchId) {
  setMatchedPairs(prev => [...prev, card.matchId]);
  setSelectedCards([]);
  
  if (matchedPairs.length + 1 === (currentQ.memoryPairs?.length || 0) / 2) {
  setTimeout(() => {
  setStatus('correct');
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }});
  }, 500);
  }
  } else {
  setTimeout(() => setSelectedCards([]), 1000);
  }
  }
 };

 const renderMemoryGame = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
  {currentQ.memoryPairs?.map((card: any) => {
  const isSelected = selectedCards.includes(card.id);
  const isMatched = matchedPairs.includes(card.matchId);
  
  return (
  <motion.button
  key={card.id}
  onClick={() => {
    handleCardClick(card);
    if (/^[a-zA-ZäöüÄÖÜß\s\.\?\!]+$/.test(card.text)) {
      playAudio(card.text);
    }
  }}
  animate={isMatched ? { opacity: 0, scale: 0.5 } : {}}
  className={`h-24 md:h-32 rounded-2xl flex items-center justify-center text-xl font-bold border-4 transition-all gap-2 ${
  isSelected 
  ? 'border-primary-500 bg-primary-50 text-slate-800' 
  : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
  }`}
  disabled={isMatched}
  >
  {card.text}
  {/^[a-zA-ZäöüÄÖÜß\s\.\?\!]+$/.test(card.text) && <Volume2 className="w-5 h-5 opacity-40 shrink-0" />}
  </motion.button>
  )
  })}
  </div>
 );

 const renderFlashcard = () => (
  <div className="flex flex-col items-center gap-8 w-full">
  <div 
  className="relative w-full max-w-sm h-64 perspective-1000 cursor-pointer"
  onClick={() => setFlipped(!flipped)}
  >
  <motion.div
  className="w-full h-full relative preserve-3d"
  animate={{ rotateY: flipped ? 180 : 0 }}
  transition={{ duration: 0.6, type: 'spring', damping: 20 }}
  style={{ transformStyle: 'preserve-3d' }}
  >
  {/* Front */}
  <div className="absolute w-full h-full bg-white rounded-3xl shadow-lg border-2 border-slate-100 flex items-center justify-center backface-hidden gap-3" style={{ backfaceVisibility: 'hidden' }}>
  <span className="text-4xl font-black text-slate-800">{currentQ.frontText}</span>
  <Volume2 className="w-8 h-8 text-primary-500 opacity-50" />
  </div>

  {/* Back */}
  <div className="absolute w-full h-full bg-primary-50 rounded-3xl shadow-lg border-2 border-primary-200 flex items-center justify-center backface-hidden" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
  <span className="text-4xl font-black text-primary-700">{currentQ.backText}</span>
  </div>
  </motion.div>
  </div>

  <AnimatePresence>
  {flipped && (
  <motion.div 
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  className="flex gap-4 w-full"
  >
  <button
  onClick={() => {
  setSelectedOpt('easy');
  setStatus('correct');
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }});
  }}
  className="flex-1 py-3 px-4 bg-green-100 text-green-700 font-bold rounded-xl border border-green-200 hover:bg-green-200"
  >
  سهل
  </button>
  <button
  onClick={() => {
  setSelectedOpt('hard');
  setStatus('wrong');
  playErrorSound();
  // Add hard flashcard to end
  const repeatedQuestion = { ...currentQ, id: Date.now() + Math.random() };
  setQuizQuestions(prev => [...prev, repeatedQuestion]);
  }}
  className="flex-1 py-3 px-4 bg-red-100 text-red-700 font-bold rounded-xl border border-red-200 hover:bg-red-200"
  >
  صعب
  </button>
  </motion.div>
  )}
  </AnimatePresence>
  </div>
 );

 const renderSentenceBuilder = () => (
  <div className="flex flex-col items-center gap-8 w-full px-4">
   <div className="flex flex-wrap justify-center gap-2 p-6 rounded-3xl bg-white border-2 border-slate-100 min-h-[120px] w-full shadow-inner content-start">
    {arranged.map((word, i) => (
     <motion.button
      key={`arranged-${i}`}
      layoutId={`word-${word}`}
      onClick={() => setArranged(prev => prev.filter((_, idx) => idx !== i))}
      className="px-4 py-2 rounded-xl bg-indigo-50 border-2 border-indigo-200 text-indigo-700 font-bold text-lg shadow-sm"
     >
      {word}
     </motion.button>
    ))}
   </div>

   <div className="flex flex-wrap justify-center gap-3 w-full">
    {currentQ.options?.map((word: string, i: number) => {
      const isUsed = arranged.includes(word);
      return (
       <motion.button
        key={`opt-${i}`}
        layoutId={`word-${word}`}
        disabled={isUsed}
        onClick={() => {
          setArranged(prev => [...prev, word]);
          if (/^[a-zA-ZäöüÄÖÜß\s\.\?\!]+$/.test(word)) playAudio(word);
        }}
        className={`px-5 py-3 rounded-2xl font-bold text-xl transition-all ${
          isUsed 
          ? 'bg-slate-100 text-slate-100 border-2 border-slate-100 cursor-default opacity-0' 
          : 'bg-white border-2 border-slate-200 text-slate-700 shadow-[0_4px_0_0_#e2e8f0] active:translate-y-1 active:shadow-none hover:border-indigo-200'
        }`}
       >
        {word}
       </motion.button>
      );
    })}
   </div>
  </div>
 );

 return (
  <div className="flex-1 flex flex-col items-center p-4 max-w-3xl mx-auto w-full pt-12 relative">
  <div className="w-full bg-slate-200 rounded-full h-3 mb-10 overflow-hidden shadow-inner">
  <motion.div 
  className="bg-primary-500 h-full rounded-full"
  initial={{ width: `${(currentIdx / Math.max(originalLength, quizQuestions.length)) * 100}%` }}
  animate={{ width: `${(currentIdx / Math.max(originalLength, quizQuestions.length)) * 100}%` }}
  transition={{ duration: 0.5, ease: "easeInOut" }}
  />
  </div>

  <h2 className="text-3xl font-black text-slate-800 mb-8 text-center px-4 flex items-center justify-center gap-3">
  {currentQ.question}
  {/^[a-zA-ZäöüÄÖÜß\s\.\?\!]+$/.test(currentQ.question) && (
    <button onClick={() => playAudio(currentQ.question)} className="p-2 bg-slate-100 rounded-full hover:bg-primary-100 transition-colors">
      <Volume2 className="w-6 h-6 text-primary-500" />
    </button>
  )}
  </h2>

  <AnimatePresence mode="wait">
  <motion.div
  key={currentIdx}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 1.05 }}
  className="w-full flex justify-center"
  >
  {currentQ.type === 'multiple_choice' && renderMultipleChoice()}
  {currentQ.type === 'fill_in_blank' && renderFillInBlank()}
  {currentQ.type === 'sentence_builder' && renderSentenceBuilder()}
  {currentQ.type === 'flashcard' && renderFlashcard()}
  {currentQ.type === 'memory_game' && renderMemoryGame()}
  </motion.div>
  </AnimatePresence>

  <div className="mt-auto mb-8 w-full px-4">
  {status === 'idle' ? (
  (currentQ.type === 'multiple_choice' || currentQ.type === 'fill_in_blank' || currentQ.type === 'sentence_builder') && (
  <button
  onClick={handleCheck}
  disabled={currentQ.type === 'sentence_builder' ? arranged.length === 0 : !selectedOpt}
  className="w-full py-5 rounded-2xl bg-indigo-500 text-white font-black text-2xl hover:bg-indigo-600 disabled:opacity-30 disabled:grayscale transition-all shadow-[0_6px_0_0_#4f46e5] active:shadow-none active:translate-y-1"
  >
  تحقق
  </button>
  )
  ) : (
  <motion.div 
  initial={{ y: 100 }}
  animate={{ y: 0 }}
  className={`w-full p-8 rounded-t-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 fixed bottom-0 left-0 right-0 z-50 border-t-2 ${
  status === 'correct' ? 'bg-emerald-50 border-emerald-200' : 'bg-rose-50 border-rose-200'
  }`}
  >
  <div className="flex items-center gap-4">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${status === 'correct' ? 'bg-emerald-500' : 'bg-rose-500'}`}>
      {status === 'correct' ? <Check className="w-10 h-10 text-white" /> : <X className="w-10 h-10 text-white" />}
    </div>
    <div>
      <h3 className={`font-black text-2xl mb-1 ${status === 'correct' ? 'text-emerald-700' : 'text-rose-700'}`}>
      {status === 'correct' ? 'ممتاز!' : 'إجابة خاطئة'}
      </h3>
      <p className={`font-bold ${status === 'correct' ? 'text-emerald-600' : 'text-rose-600'}`}>
      {status === 'correct' ? 'عمل رائع، استمر!' : 'الجواب الصحيح هو: ' + currentQ.answer}
      </p>
    </div>
  </div>
  <button
  onClick={handleNext}
  className={`w-full md:w-auto py-4 px-12 rounded-2xl font-black text-xl shadow-lg transition-transform hover:scale-105 active:scale-95 whitespace-nowrap ${
  status === 'correct' ? 'bg-emerald-500 text-white shadow-[0_6px_0_0_#059669]' : 'bg-rose-500 text-white shadow-[0_6px_0_0_#e11d48]'
  }`}
  >
  {isLast && status === 'correct' ? 'إنهاء' : 'متابعة'}
  </button>
  </motion.div>
  )}
  </div>

  {/* Mascot */}
  <Mascot 
  state={status === 'correct' ? 'happy' : status === 'wrong' ? 'sad' : 'thinking'} 
  message={status === 'correct' ? 'ممتاز! إجابة ذكية 🌟' : status === 'wrong' ? 'أوه، جرب مرة أخرى يا بطل!' : 'أنا بانتظار إجابتك، ركز جيداً! 🤔'}
  />


  <AnimatePresence>
    {showCelebration && (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
      >
        <motion.div 
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          className="bg-white rounded-[3rem] p-8 md:p-12 max-w-md w-full text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400" />
          
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="bg-amber-100 p-6 rounded-full"
              >
                <Trophy className="w-20 h-20 text-amber-500" />
              </motion.div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute -top-2 -right-2 bg-primary-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl border-4 border-white"
              >
                +50
              </motion.div>
            </div>
          </div>

          <h2 className="text-4xl font-black text-slate-800 mb-4">تهانينا!</h2>
          <p className="text-xl text-slate-600 mb-8 font-medium">
            لقد اجتزت هذا الاختبار بنجاح وحصلت على 50 نقطة خبرة!
          </p>

          <button
            onClick={proceedToNextLevel}
            className="w-full py-5 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-black text-2xl transition-all shadow-lg shadow-primary-500/30 hover:scale-105 active:scale-95"
          >
            المستوى التالي
          </button>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
  </div>
 );
}
