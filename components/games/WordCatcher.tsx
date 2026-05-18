import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, Timer, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
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
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const [words, setWords] = useState<FallingWord[]>([]);
  const [collectedWords, setCollectedWords] = useState<{ id: string; text: string }[]>([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(100);
  const [lives, setLives] = useState(5);
  const [isSentenceValid, setIsSentenceValid] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [showRestartConfirm, setShowRestartConfirm] = useState(false);
  
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
    // إخفاء الـ navbar عند ملء الشاشة
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
      // إخفاء الـ navbar من الموبايل (الأسفل)
      const mobileNavbar = document.querySelector('nav[class*="bottom-0"]');
      if (mobileNavbar) {
        (mobileNavbar as HTMLElement).style.display = 'none';
      }
      // إخفاء الـ sidebar من الديسكتوب (اليسار)
      const desktopSidebar = document.querySelector('nav[class*="md:flex"]');
      if (desktopSidebar) {
        (desktopSidebar as HTMLElement).style.display = 'none';
      }
      // إخفاء الـ top bar من الموبايل
      const topBar = document.querySelector('div[class*="md:hidden"][class*="bg-white"]');
      if (topBar) {
        (topBar as HTMLElement).style.display = 'none';
      }
    } else {
      document.body.style.overflow = 'auto';
      const mobileNavbar = document.querySelector('nav[class*="bottom-0"]');
      if (mobileNavbar) {
        (mobileNavbar as HTMLElement).style.display = 'flex';
      }
      const desktopSidebar = document.querySelector('nav[class*="md:flex"]');
      if (desktopSidebar) {
        (desktopSidebar as HTMLElement).style.display = 'flex';
      }
      const topBar = document.querySelector('div[class*="md:hidden"][class*="bg-white"]');
      if (topBar) {
        (topBar as HTMLElement).style.display = 'flex';
      }
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      const mobileNavbar = document.querySelector('nav[class*="bottom-0"]');
      if (mobileNavbar) {
        (mobileNavbar as HTMLElement).style.display = 'flex';
      }
      const desktopSidebar = document.querySelector('nav[class*="md:flex"]');
      if (desktopSidebar) {
        (desktopSidebar as HTMLElement).style.display = 'flex';
      }
      const topBar = document.querySelector('div[class*="md:hidden"][class*="bg-white"]');
      if (topBar) {
        (topBar as HTMLElement).style.display = 'flex';
      }
    };
  }, [isFullscreen]);

  useEffect(() => {
    if (gameState !== 'playing' || !activeConv) return;

    const timer = setInterval(() => {
      setTimeLeft(t => {
        const newTime = t - 1;
        if (newTime <= 0) {
          setGameState('gameover');
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState, activeConv]);

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
    } else {
      // إذا لم يكمل الجملة بشكل صحيح، أعد اللعبة
      toast.error('رتب الجملة بشكل صحيح!');
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
    <div className={`${isFullscreen ? 'fixed inset-0' : 'min-h-screen'} bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] ${isFullscreen ? 'p-0' : 'p-4 md:p-6'} font-sans select-none overflow-hidden relative`}>
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
              <div className="flex flex-col items-center gap-4">
                {isMobile && (
                  <button 
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="px-8 py-3 rounded-2xl font-black text-lg shadow-lg transition-all flex items-center justify-center gap-2 bg-purple-500 text-white hover:bg-purple-600 active:scale-95"
                    title={isFullscreen ? 'خروج من ملء الشاشة' : 'فتح اللعبة بملء الشاشة'}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {isFullscreen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V5m0 0H5m4 0l-4 4m0 6v4m0 0h4m-4 0l4-4m6-6h4v4m0-4l4-4m-4 10v4m0 0h-4m4 0l-4 4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6v4m12-4h4v4M6 18h4v-4m12 4h-4v-4" />
                      )}
                    </svg>
                    {isFullscreen ? 'خروج من ملء الشاشة' : 'ملء الشاشة'}
                  </button>
                )}
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
              </div>
            </motion.div>
          )}
        </div>
      )}

      {gameState === 'playing' && activeConv && (
        <main className={`${isFullscreen ? 'fixed inset-0 w-full h-screen' : 'max-w-4xl mx-auto relative'} ${isFullscreen ? 'h-screen' : 'h-[780px]'}`}>
          <div className={`h-full bg-white/80 backdrop-blur-md ${isFullscreen ? 'border-0 rounded-none' : 'border-4 border-white/50 rounded-[3rem]'} shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col`}>
            <div className={`flex items-center justify-between ${isFullscreen ? 'mb-4' : 'mb-6'} relative z-50 w-full ${isFullscreen ? 'px-4 pt-4' : 'px-6 pt-6'}`}>
              <button 
                onClick={() => navigate('/game')} 
                className={`bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 shadow-sm transition-all hover:scale-105 active:scale-95 ${isFullscreen && isMobile ? 'p-2' : 'p-3'}`}
                title="العودة"
              >
                <ChevronLeft size={isFullscreen && isMobile ? 20 : 24} />
              </button>
              <div className={`flex items-center gap-2 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow ${isFullscreen && isMobile ? 'px-3 py-2' : 'px-6 py-3'}`}>
                <Zap className={`text-yellow-500 fill-yellow-500 ${isFullscreen && isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} />
                <span className={`font-black text-slate-900 italic tracking-tight uppercase ${isFullscreen && isMobile ? 'text-sm' : 'text-lg'}`}>صائد الكلمات</span>
              </div>
              <div className={`flex items-center ${isFullscreen && isMobile ? 'gap-2' : 'gap-3'}`}>
                {isMobile && (
                  <button 
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className={`bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 shadow-sm transition-all hover:scale-105 active:scale-95 ${isFullscreen && isMobile ? 'p-2' : 'p-3'}`}
                    title={isFullscreen ? 'خروج من ملء الشاشة' : 'ملء الشاشة'}
                  >
                    <svg className={`fill-none stroke-current ${isFullscreen && isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} viewBox="0 0 24 24">
                      {isFullscreen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V5m0 0H5m4 0l-4 4m0 6v4m0 0h4m-4 0l4-4m6-6h4v4m0-4l4-4m-4 10v4m0 0h-4m4 0l-4 4" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6v4m12-4h4v4M6 18h4v-4m12 4h-4v-4" />
                      )}
                    </svg>
                  </button>
                )}
                <button 
                  onClick={() => startGame(activeConv!)}
                  className={`bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 shadow-sm transition-all hover:scale-105 active:scale-95 ${isFullscreen && isMobile ? 'p-2' : 'p-3'}`}
                  title="إعادة تشغيل اللعبة"
                >
                  <svg className={`fill-none stroke-current ${isFullscreen && isMobile ? 'w-5 h-5' : 'w-6 h-6'}`} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={`border-b border-white/40 flex flex-col md:flex-row justify-between items-center z-40 bg-gradient-to-b from-white/80 to-transparent ${isFullscreen && isMobile ? 'p-3 gap-3' : 'p-6 md:p-8 gap-4 md:gap-0'}`}>
               <div className={`flex ${isFullscreen && isMobile ? 'gap-4' : 'gap-12'}`}>
                  <div className="flex flex-col">
                     <span className={`font-black text-slate-400 uppercase tracking-widest mb-1 ${isFullscreen && isMobile ? 'text-[7px]' : 'text-[10px]'}`}>النقاط</span>
                     <span className={`font-black text-indigo-600 tabular-nums drop-shadow-sm ${isFullscreen && isMobile ? 'text-xl' : 'text-3xl'}`}>{score}</span>
                  </div>
                  <div className="flex flex-col">
                     <span className={`font-black text-slate-400 uppercase tracking-widest mb-1 ${isFullscreen && isMobile ? 'text-[7px]' : 'text-[10px]'}`}>المرحلة</span>
                     <span className={`font-black text-slate-800 tabular-nums drop-shadow-sm ${isFullscreen && isMobile ? 'text-xl' : 'text-3xl'}`}>{currentLineIndex + 1}/{activeConv.lines.length}</span>
                  </div>
               </div>
               
               <div className={`flex items-center gap-3 ${isFullscreen && isMobile ? 'gap-2' : ''}`}>
                  {isFullscreen && isMobile && (
                    <button 
                      onClick={() => setIsFullscreen(false)}
                      className="p-2 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-slate-900 shadow-sm transition-all hover:scale-105 active:scale-95"
                      title="خروج من ملء الشاشة"
                    >
                      <ChevronLeft size={20} />
                    </button>
                  )}
                  <div className={`flex items-center gap-3 bg-white/50 rounded-2xl border border-white/60 shadow-sm ${isFullscreen && isMobile ? 'px-3 py-2' : 'px-6 py-3'}`}>
                     <Timer size={isFullscreen && isMobile ? 18 : 28} className={timeLeft < 10 ? 'animate-bounce text-red-500' : 'text-slate-500'} />
                     <span className={`font-black tabular-nums ${timeLeft < 10 ? 'text-red-500' : 'text-slate-800'} ${isFullscreen && isMobile ? 'text-xl' : 'text-3xl'}`}>{timeLeft}</span>
                  </div>
               </div>
            </div>
            <div className="flex-1 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-20">
                 {/* Arabic sentence in background - behind falling words */}
                 <div className="absolute inset-x-0 top-[50%] -translate-y-1/2 text-center pointer-events-none z-0" style={{ paddingLeft: isFullscreen && isMobile ? '8px' : '48px', paddingRight: isFullscreen && isMobile ? '8px' : '48px' }}>
                    <motion.div 
                      key={currentLineIndex} 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-block bg-white/40 backdrop-blur-sm rounded-2xl shadow-lg shadow-slate-200/30 border border-slate-200/50 ${isFullscreen && isMobile ? 'px-3 py-2' : 'px-6 py-4'}`}
                    >
                       <p className={`font-bold text-slate-700 leading-relaxed opacity-70 ${isFullscreen && isMobile ? 'text-sm' : 'text-xl md:text-2xl'}`}>
                          {currentLine?.ar}
                       </p>
                    </motion.div>
                    {collectedWords.length === targetWords.length && !isSentenceValid && (
                       <div className="mt-4">
                         <motion.p 
                           initial={{ opacity: 0 }} 
                           animate={{ opacity: 1 }} 
                           className={`text-red-500 font-black tracking-wider animate-pulse bg-red-50/95 inline-block rounded-full border-2 border-red-200 shadow-lg flex items-center gap-2 ${isFullscreen && isMobile ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm'}`}
                         >
                           رتب الكلمات لتكون جملة صحيحة
                           <svg className={isFullscreen && isMobile ? 'w-4 h-4' : 'w-5 h-5'} fill="currentColor" viewBox="0 0 20 20">
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

              <div className={`relative transition-all duration-700 ease-in-out border-t-2 flex flex-col items-center justify-center ${isFullscreen && isMobile ? 'p-3 gap-3 overflow-y-auto max-h-[20vh]' : 'p-6 md:p-10 gap-8'} ${isSentenceValid ? 'bg-gradient-to-t from-green-100 to-green-50 border-green-200' : 'bg-gradient-to-t from-slate-50 to-white border-slate-100'}`}>
                 <div className={`flex flex-wrap justify-center items-center direction-ltr w-full ${isFullscreen && isMobile ? 'gap-1' : 'gap-2 md:gap-3'}`} dir="ltr">
                    {collectedWords.map((word, idx) => {
                      const isDragging = draggedIndex === idx;
                      const isDragOver = dragOverIndex === idx;
                      
                      return (
                        <div 
                          key={word.id}
                          draggable
                          onDragStart={() => handleDragStart(idx)}
                          onDragOver={handleDragOver}
                          onDragEnter={() => handleDragEnter(idx)}
                          onDragLeave={handleDragLeave}
                          onDrop={() => handleDrop(idx)}
                          style={{ opacity: isDragging ? 0.5 : 1 }}
                          className={`rounded-2xl md:rounded-3xl border-b-4 font-black shadow-lg select-none transition-colors cursor-grab ${
                            isDragOver && !isMobile ? 'ring-2 ring-blue-400' : ''
                          } ${
                            isSentenceValid 
                              ? 'bg-green-500 text-white border-green-700' 
                              : 'bg-white border-slate-300 text-slate-800'
                          } ${isFullscreen && isMobile ? 'px-2 py-1.5 text-xs' : 'px-4 md:px-7 py-2.5 md:py-4 text-lg md:text-2xl'}`}
                        >
                          <div className="flex items-center gap-1">
                            <span className={`font-bold opacity-70 ${isFullscreen && isMobile ? 'text-[10px]' : 'text-xs md:text-sm'}`}>{idx + 1}</span>
                            <span className={isFullscreen && isMobile ? 'truncate max-w-[60px]' : ''}>{word.text}</span>
                          </div>
                        </div>
                      );
                    })}
                    {collectedWords.length === 0 && (
                      <div className="w-full flex items-center justify-center py-8">
                         <p className={`text-slate-300 font-black uppercase tracking-widest animate-pulse ${isFullscreen && isMobile ? 'text-xs' : 'text-lg'}`}>
                           انتظر الكلمات لتتساقط...
                         </p>
                      </div>
                    )}
                 </div>

                 {collectedWords.length === targetWords.length && (
                   <motion.button
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     onClick={handleNextLine}
                     disabled={!isSentenceValid}
                     className={`rounded-[2rem] font-black shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all ${isFullscreen && isMobile ? 'px-6 py-2 text-sm' : 'px-14 py-5 text-2xl'} ${isSentenceValid ? 'bg-indigo-600 text-white hover:scale-105 active:scale-95 shadow-indigo-500/40 hover:bg-indigo-500' : 'bg-slate-100 text-slate-300 cursor-not-allowed border-2 border-slate-200'}`}
                   >
                     {isSentenceValid ? 'أكملت الجملة ➔' : 'رتب الجملة...'}
                   </motion.button>
                 )}
                 {isFullscreen && isMobile && (
                   <button 
                     onClick={() => setShowRestartConfirm(true)}
                     className="px-6 py-3 rounded-2xl font-black text-sm bg-red-500 text-white hover:bg-red-600 shadow-lg transition-all active:scale-95 flex-1 max-w-[120px]"
                     title="إعادة اللعبة"
                   >
                     إعادة اللعبة
                   </button>
                 )}
              </div>

              {/* Restart Confirmation Dialog */}
              <AnimatePresence>
                {showRestartConfirm && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setShowRestartConfirm(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm mx-4"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-black text-slate-800 mb-2">إعادة اللعبة؟</h3>
                        <p className="text-slate-600 font-bold mb-6">هل أنت متأكد من إعادة تشغيل اللعبة؟ سيتم فقدان التقدم الحالي</p>
                        <div className="flex gap-3">
                          <button
                            onClick={() => setShowRestartConfirm(false)}
                            className="flex-1 px-4 py-3 rounded-2xl font-black text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
                          >
                            إلغاء
                          </button>
                          <button
                            onClick={() => {
                              startGame(activeConv!);
                              setShowRestartConfirm(false);
                            }}
                            className="flex-1 px-4 py-3 rounded-2xl font-black text-white bg-red-500 hover:bg-red-600 transition-all"
                          >
                            نعم، أعد اللعبة
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </main>
        )}

      {(gameState === 'gameover' || gameState === 'win') && activeConv && (
        <main className={`${isFullscreen ? 'fixed inset-0 w-full h-screen' : 'max-w-4xl mx-auto relative'} ${isFullscreen ? 'h-screen' : 'h-[780px]'}`}>
          <div className={`h-full bg-white/80 backdrop-blur-md ${isFullscreen ? 'border-0 rounded-none' : 'border-4 border-white/50 rounded-[3rem]'} shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden flex flex-col`}>
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
