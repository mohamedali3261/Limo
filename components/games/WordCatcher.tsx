import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Timer, ChevronLeft, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FallingWord, GameState, ConversationProgress, Conversation } from './wordCatcher/types';
import { CONVERSATIONS, LEVELS } from './wordCatcher/constants';
import { FallingWordCard } from './wordCatcher/FallingWordCard';
import { GameOver } from './wordCatcher/GameOver';
import { WordCatcherLevelCard } from '../gamehub/WordCatcherLevelCard';
import { useMediaQuery } from '../../lib/hooks/useMediaQuery';

const STORAGE_KEY = 'wordCatcher_progress';

// دالة لتحميل التقدم من localStorage
const loadProgress = (): ConversationProgress => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
};

// دالة لحفظ التقدم في localStorage
const saveProgress = (progress: ConversationProgress) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Failed to save progress:', error);
  }
};

export default function WordCatcher() {
  const [gameState, setGameState] = useState<GameState>('lobby');
  const [level] = useState(LEVELS[0]);
  const [progress, setProgress] = useState<ConversationProgress>(loadProgress);
  const [activeConv, setActiveConv] = useState<Conversation | null>(null);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const [words, setWords] = useState<FallingWord[]>([]);
  const [collectedWords, setCollectedWords] = useState<{ id: string; text: string }[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(100);
  const [lives, setLives] = useState(5);
  const [isSentenceValid, setIsSentenceValid] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  
  const navigate = useNavigate();
  const collectedWordsCountRef = useRef(0);

  // حساب عدد المستويات المكتملة
  const completedCount = Object.values(progress).filter(p => p.completed).length;
  
  // التحقق من إذا كانت المحادثة مفتوحة
  const isUnlocked = (conv: Conversation) => {
    const convLevel = conv.level || 1;
    return convLevel <= completedCount + 1;
  };

  // الحصول على حالة المحادثة
  const getConvStatus = (conv: Conversation) => {
    return progress[conv.id];
  };

  const currentLine = activeConv ? activeConv.lines[currentLineIndex] : null;
  const targetWords = currentLine ? currentLine.en.split(' ') : [];

  useEffect(() => {
    collectedWordsCountRef.current = collectedWords.length;
  }, [collectedWords]);

  const spawnLine = () => {
    if (!currentLine) return;
    const lineWords = currentLine.en.split(' ');
    const zones = [15, 35, 55, 75]; 
    const newWords: FallingWord[] = lineWords.map((word, idx) => {
      const zoneIndex = Math.floor(Math.random() * zones.length);
      const initialY = -100 - (Math.random() * 150) - (idx * 80);
      const speed = level.speedBase + (Math.random() * 1.0);
      const distance = 800 - initialY;
      const duration = distance / (speed * 60);

      return {
        id: Math.random(),
        text: word,
        index: idx,
        x: zones[zoneIndex] + (Math.random() * 15 - 7.5),
        initialY,
        duration,
        rotation: (Math.random() - 0.5) * 20
      };
    });
    setWords(newWords);
    setCollectedWords([]);
    setIsSentenceValid(false);
  };

  useEffect(() => {
    if (gameState === 'playing' && activeConv && currentLine) {
      spawnLine();
    }
  }, [gameState, currentLineIndex, activeConv]);

  useEffect(() => {
    if (!currentLine) return;
    if (collectedWords.length === targetWords.length) {
      const currentSentence = collectedWords.map(w => w.text).join(' ').trim().toLowerCase();
      const targetSentence = currentLine.en.trim().toLowerCase();
      setIsSentenceValid(currentSentence === targetSentence);
    } else {
      setIsSentenceValid(false);
    }
  }, [collectedWords, currentLine]);

  useEffect(() => {
    if (gameState !== 'playing' || !activeConv) return;

    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          setGameState('gameover');
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, level, activeConv]);

  const handleCatch = (word: FallingWord) => {
    setCollectedWords(prev => {
      if (prev.some(w => w.text === word.text)) return prev;
      return [...prev, { id: `${word.text}-${Date.now()}`, text: word.text }];
    });
    setScore(s => s + 20);
    setWords(prev => prev.filter(w => w.id !== word.id));
  };

  const handleMiss = (word: FallingWord) => {
    setWords(prev => prev.filter(w => w.id !== word.id));
    if (collectedWordsCountRef.current <= word.index) {
       setLives(l => {
         if (l <= 1) setGameState('gameover');
         return l - 1;
       });
    }
  };

  const handleNextLine = () => {
    if (isSentenceValid) {
      if (currentLineIndex < activeConv.lines.length - 1) {
        setScore(s => s + 50);
        setCurrentLineIndex(prev => prev + 1);
      } else {
        // أكمل المحادثة - احفظ التقدم
        const newProgress = {
          ...progress,
          [activeConv.id]: {
            completed: true,
            bestScore: Math.max(score + 50, progress[activeConv.id]?.bestScore || 0),
            stars: 3 // يمكن حسابها بناءً على الأداء
          }
        };
        setProgress(newProgress);
        saveProgress(newProgress);
        setGameState('win');
      }
    }
  };

  const swapWords = (idx1: number, idx2: number) => {
    setCollectedWords(prev => {
      const next = [...prev];
      [next[idx1], next[idx2]] = [next[idx2], next[idx1]];
      return next;
    });
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (index: number) => {
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (targetIndex: number) => {
    if (draggedIndex !== null && draggedIndex !== targetIndex) {
      swapWords(draggedIndex, targetIndex);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const startGame = (conv: Conversation) => {
    setActiveConv(conv);
    setScore(0);
    setLives(level.lives);
    setTimeLeft(level.timeLimit);
    setWords([]);
    setCollectedWords([]);
    setCurrentLineIndex(0);
    setGameState('playing');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] p-4 md:p-6 font-sans select-none overflow-hidden relative">
      <div className="fixed inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0ea5e9 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

      {gameState === 'lobby' && (
        <div className="max-w-6xl mx-auto relative z-50">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button onClick={() => navigate('/game')} className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 shadow-sm transition-all hover:scale-105 active:scale-95">
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <Zap className="text-yellow-500 fill-yellow-500" size={24} />
              <span className="font-black text-slate-900 italic tracking-tight uppercase text-lg">صائد الكلمات</span>
            </div>
            <div className="w-12"></div>
          </div>

          {/* Progress Counter */}
          <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 px-8 py-4 rounded-2xl border-2 border-indigo-200 max-w-md mx-auto">
            <p className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-2 text-center">تقدمك</p>
            <div className="flex items-center justify-center gap-3">
              <Star className="text-green-500 fill-green-500" size={24} />
              <span className="text-3xl font-black text-slate-800">{completedCount}</span>
              <span className="text-slate-500 font-bold">/ {CONVERSATIONS.length}</span>
            </div>
          </div>

          {/* Levels Grid */}
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-right mb-4">المواضيع</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 direction-rtl" dir="rtl">
              {CONVERSATIONS.map(conv => (
                <WordCatcherLevelCard
                  key={conv.id}
                  conversation={conv}
                  isUnlocked={isUnlocked(conv)}
                  isActive={activeConv?.id === conv.id}
                  progress={getConvStatus(conv)}
                  onSelect={setActiveConv}
                  onPlay={startGame}
                />
              ))}
            </div>
          </div>

          {/* Play Button */}
          {activeConv && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
            >
              <button 
                onClick={() => startGame(activeConv)}
                disabled={!isUnlocked(activeConv)}
                className={`px-14 py-5 rounded-[2rem] font-black text-2xl shadow-2xl transition-all flex items-center justify-center gap-3 ${
                  isUnlocked(activeConv)
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-blue-500/30 active:scale-95'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Zap size={28} fill="currentColor" />
                العب الآن
              </button>
            </motion.div>
          )}
        </div>
      )}

      {gameState === 'playing' && activeConv && (
        <main className="max-w-4xl mx-auto relative h-[780px]">
          <div className="h-full bg-white/80 backdrop-blur-md border-4 border-white/50 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col">
            <div className="max-w-6xl mx-auto flex items-center justify-between mb-6 relative z-50 w-full px-6 pt-6">
              <button onClick={() => navigate('/game')} className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 shadow-sm transition-all hover:scale-105 active:scale-95">
                <ChevronLeft size={24} />
              </button>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <Zap className="text-yellow-500 fill-yellow-500" size={24} />
                <span className="font-black text-slate-900 italic tracking-tight uppercase text-lg">صائد الكلمات</span>
              </div>
              <div className="bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-200">
                 <div className="flex gap-1.5">
                    {[...Array(level.lives)].map((_, i) => (
                      <Star key={i} size={20} className={i < lives ? "text-red-500 fill-red-500 drop-shadow-sm animate-pulse" : "text-slate-200 fill-slate-200"} />
                    ))}
                 </div>
              </div>
            </div>

            <div className="p-6 md:p-8 border-b border-white/40 flex justify-between items-center z-40 bg-gradient-to-b from-white/80 to-transparent">
               <div className="flex gap-12">
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">النقاط</span>
                     <span className="text-3xl font-black text-indigo-600 tabular-nums drop-shadow-sm">{score}</span>
                  </div>
                  <div className="flex flex-col">
                     <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">المرحلة</span>
                     <span className="text-3xl font-black text-slate-800 tabular-nums drop-shadow-sm">{currentLineIndex + 1}/{activeConv.lines.length}</span>
                  </div>
               </div>
               
               <div className="flex items-center gap-3 bg-white/50 px-6 py-3 rounded-2xl border border-white/60 shadow-sm">
                  <Timer size={28} className={timeLeft < 10 ? 'animate-bounce text-red-500' : 'text-slate-500'} />
                  <span className={`text-3xl font-black tabular-nums ${timeLeft < 10 ? 'text-red-500' : 'text-slate-800'}`}>{timeLeft}</span>
               </div>
            </div>
            <div className="flex-1 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-20">
                 {/* Arabic sentence in background - behind falling words */}
                 <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center px-12 pointer-events-none z-0">
                    <motion.div 
                      key={currentLineIndex} 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block bg-white/40 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg shadow-slate-200/30 border border-slate-200/50"
                    >
                       <p className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed opacity-70">
                          {currentLine?.ar}
                       </p>
                    </motion.div>
                    {collectedWords.length === targetWords.length && !isSentenceValid && (
                       <div className="mt-4">
                         <motion.p 
                           initial={{ opacity: 0 }} 
                           animate={{ opacity: 1 }} 
                           className="text-red-500 text-sm font-black tracking-wider animate-pulse bg-red-50/95 inline-block px-4 py-2 rounded-full border-2 border-red-200 shadow-lg flex items-center gap-2"
                         >
                           رتب الكلمات لتكون جملة صحيحة
                           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                             <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                           </svg>
                         </motion.p>
                       </div>
                    )}
                 </div>
                 
                 <AnimatePresence>
                    {words.map(word => (
                      <FallingWordCard key={word.id} word={word} onCatch={handleCatch} onMiss={handleMiss} />
                    ))}
                 </AnimatePresence>
              </div>

              <div className={`relative p-6 md:p-10 transition-all duration-700 ease-in-out border-t-2 ${isSentenceValid ? 'bg-gradient-to-t from-green-100 to-green-50 border-green-200' : 'bg-gradient-to-t from-slate-50 to-white border-slate-100'} flex flex-col items-center justify-center gap-8`}>
                 {/* Visual feedback for drag state - only on desktop */}
                 {!isMobile && draggedIndex !== null && (
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                   />
                 )}
                 
                 <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 direction-ltr" dir="ltr">
                    {collectedWords.map((word, idx) => {
                      const isDragging = draggedIndex === idx;
                      const isDragOver = dragOverIndex === idx;
                      
                      return (
                        <motion.div 
                          key={word.id}
                          layout={!isMobile}
                          draggable={!isMobile}
                          onDragStart={() => !isMobile && handleDragStart(idx)}
                          onDragOver={!isMobile ? handleDragOver : undefined}
                          onDragEnter={() => !isMobile && handleDragEnter(idx)}
                          onDragLeave={() => !isMobile && handleDragLeave()}
                          onDrop={() => !isMobile && handleDrop(idx)}
                          whileHover={!isMobile && !isDragging ? { scale: 1.08, y: -8 } : {}}
                          animate={!isMobile ? {
                            scale: isDragging ? 0.9 : isDragOver ? 1.12 : 1,
                            y: isDragOver ? -12 : 0,
                            opacity: isDragging ? 0.6 : 1,
                          } : {}}
                          transition={!isMobile ? { type: 'spring', stiffness: 300, damping: 20 } : {}}
                          className={`px-4 md:px-7 py-2.5 md:py-4 rounded-2xl md:rounded-3xl border-b-4 font-black text-lg md:text-2xl shadow-lg select-none transition-all relative ${
                            isDragging && !isMobile
                              ? 'cursor-grabbing opacity-60 scale-90 border-b-2' 
                              : !isMobile ? 'cursor-grab' : 'cursor-pointer'
                          } ${
                            isDragOver && !isMobile
                              ? 'ring-4 ring-blue-400 ring-offset-2 scale-110 shadow-2xl'
                              : ''
                          } ${
                            isSentenceValid 
                              ? 'bg-green-500 text-white border-green-700 hover:bg-green-400 hover:shadow-xl' 
                              : 'bg-white border-slate-300 text-slate-800 hover:border-blue-400 hover:shadow-xl hover:border-b-4'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-xs md:text-sm font-bold opacity-70">{idx + 1}</span>
                            {word.text}
                          </div>
                          
                          {/* Drag indicator - only on desktop */}
                          {!isDragging && !isMobile && (
                            <motion.div 
                              className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-slate-300 rounded-full opacity-0 group-hover:opacity-100"
                              animate={{ opacity: [0.3, 0.7, 0.3] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          )}
                        </motion.div>
                      );
                    })}
                    {collectedWords.length === 0 && (
                      <div className="w-full flex items-center justify-center py-8">
                         <motion.p 
                           animate={{ opacity: [0.5, 1, 0.5] }}
                           transition={{ duration: 2, repeat: Infinity }}
                           className="text-slate-300 font-black text-lg uppercase tracking-widest"
                         >
                           انتظر الكلمات لتتساقط...
                         </motion.p>
                      </div>
                    )}
                 </div>

                 {collectedWords.length === targetWords.length && (
                   <motion.button
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     onClick={handleNextLine}
                     disabled={!isSentenceValid}
                     className={`px-14 py-5 rounded-[2rem] font-black text-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all ${isSentenceValid ? 'bg-indigo-600 text-white hover:scale-105 active:scale-95 shadow-indigo-500/40 hover:bg-indigo-500' : 'bg-slate-100 text-slate-300 cursor-not-allowed border-2 border-slate-200'}`}
                   >
                     {isSentenceValid ? 'أكملت الجملة ➔' : 'رتب الجملة...'}
                   </motion.button>
                 )}
              </div>
            </div>
          </main>
        )}

      {(gameState === 'gameover' || gameState === 'win') && activeConv && (
        <main className="max-w-4xl mx-auto relative h-[780px]">
          <div className="h-full bg-white/80 backdrop-blur-md border-4 border-white/50 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col">
            <GameOver 
              gameState={gameState}
              score={score}
              startGame={() => startGame(activeConv)}
              setGameState={setGameState}
            />
          </div>
        </main>
      )}
    </div>
  );
}
