import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { flashcardsData, Flashcard } from '../../data/flashcardsData';
import { Volume2, ChevronRight, ChevronLeft, Shuffle, RotateCcw, Check, X, Search, Filter, Grid, CreditCard } from 'lucide-react';

type ViewMode = 'card' | 'list';

export default function FlashcardsView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState<Set<number>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('card');
  const [shuffledIndices, setShuffledIndices] = useState<number[] | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [autoPlayTimer, setAutoPlayTimer] = useState<NodeJS.Timeout | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(flashcardsData.map(c => c.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredCards = useMemo(() => {
    return flashcardsData.filter(card => {
      const matchesSearch = card.german.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           card.arabicTranslation.includes(searchQuery);
      const matchesCategory = selectedCategory === 'all' || card.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const cardsToDisplay = useMemo(() => {
    if (!shuffledIndices) return filteredCards;
    return [...filteredCards].sort(() => Math.random() - 0.5);
  }, [filteredCards, shuffledIndices]);

  const currentCard = cardsToDisplay[currentIndex] || null;
  
  // Auto-speech when card changes or flips
  React.useEffect(() => {
    if (currentCard && !isFlipped) {
      if (isAutoPlaying || 'speechSynthesis' in window) {
         // Auto speak German when reaching a new card
         const utterance = new SpeechSynthesisUtterance(currentCard.german);
         utterance.lang = 'de-DE';
         utterance.rate = 0.9;
         window.speechSynthesis.speak(utterance);
      }
    }
  }, [currentIndex, currentCard, isFlipped, isAutoPlaying]);

  // Calculate progress
  const progressPercentage = flashcardsData.length > 0 ? (knownCards.size / flashcardsData.length) * 100 : 0;

  const handleNext = () => {
    if (cardsToDisplay.length === 0) return;
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cardsToDisplay.length);
    }, 150);
  };

  const handlePrev = () => {
    if (cardsToDisplay.length === 0) return;
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cardsToDisplay.length) % cardsToDisplay.length);
    }, 150);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const playAudio = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'de-DE';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const markAsKnown = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCard) return;
    setKnownCards(prev => {
      const next = new Set(prev);
      next.add(currentCard.id);
      return next;
    });
    handleNext();
  };

  const markAsUnknown = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!currentCard) return;
    setKnownCards(prev => {
      const next = new Set(prev);
      next.delete(currentCard.id);
      return next;
    });
    handleNext();
  };

  const shuffleCards = () => {
    setShuffledIndices([]); // Trigger re-shuffle via useMemo
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const resetProgress = () => {
    setKnownCards(new Set());
    setSearchQuery('');
    setSelectedCategory('all');
    setCurrentIndex(0);
    setIsFlipped(false);
    setShuffledIndices(null);
    setIsAutoPlaying(false);
    if (autoPlayTimer) clearTimeout(autoPlayTimer);
  };

  const toggleAutoPlay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      if (autoPlayTimer) clearTimeout(autoPlayTimer);
      setAutoPlayTimer(null);
    } else {
      setIsAutoPlaying(true);
      startAutoPlayCycle();
    }
  };

  const startAutoPlayCycle = () => {
    const timer = setTimeout(() => {
      setIsFlipped(true);
      const timer2 = setTimeout(() => {
        handleNext();
        startAutoPlayCycle();
      }, 3000);
      setAutoPlayTimer(timer2);
    }, 2000);
    setAutoPlayTimer(timer);
  };

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col min-h-[calc(100vh-140px)] p-4 relative pb-24">
      <div className="w-full flex flex-col gap-4 mb-6">
        <div className="flex justify-between items-center text-slate-800">
          <div>
            <h2 className="text-3xl font-black tracking-tight">البطاقات التعليمية</h2>
            <p className="text-sm font-bold text-slate-400">طوّر مخزونك اللغوي بسرعة</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={toggleAutoPlay}
              className={`p-2 rounded-xl border transition-all ${isAutoPlaying ? 'bg-orange-500 text-white border-orange-500 animate-pulse' : 'bg-white text-slate-400 border-slate-100 shadow-sm hover:text-orange-500'}`}
              title="تشغيل تلقائي"
            >
              <RotateCcw className={`w-5 h-5 ${isAutoPlaying ? 'animate-spin-slow' : ''}`} />
            </button>
            <button 
              onClick={() => setViewMode(viewMode === 'card' ? 'list' : 'card')} 
              className={`p-2 rounded-xl border transition-all ${viewMode === 'list' ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-white text-slate-400 border-slate-100 shadow-sm hover:text-indigo-500'}`}
              title={viewMode === 'card' ? 'عرض القائمة' : 'عرض البطاقات'}
            >
              {viewMode === 'card' ? <Grid className="w-5 h-5" /> : <CreditCard className="w-5 h-5" />}
            </button>
            <button onClick={shuffleCards} className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-400 hover:text-indigo-500 transition-colors" title="ترتيب عشوائي">
              <Shuffle className="w-5 h-5" />
            </button>
            <button onClick={resetProgress} className="p-2 bg-white rounded-xl shadow-sm border border-slate-100 text-slate-400 hover:text-red-500 transition-colors" title="إعادة تعيين">
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Learning Insight */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-green-50 p-4 rounded-3xl border border-green-100">
            <div className="text-2xl font-black text-green-600">{knownCards.size}</div>
            <div className="text-xs font-bold text-green-700">كلمة تم حفظها</div>
          </div>
          <div className="bg-indigo-50 p-4 rounded-3xl border border-indigo-100">
            <div className="text-2xl font-black text-indigo-600">{flashcardsData.length - knownCards.size}</div>
            <div className="text-xs font-bold text-indigo-700">كلمة متبقية</div>
          </div>
        </div>


        {/* Search and Categories */}
        <div className="flex flex-col gap-3">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="ابحث عن كلمة..." 
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentIndex(0);
              }}
              className="w-full p-4 pr-12 rounded-2xl bg-white border border-slate-100 shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none font-bold text-slate-700 transition-all"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                className={`px-4 py-2 rounded-xl whitespace-nowrap font-bold text-sm transition-all border ${
                  selectedCategory === cat 
                  ? 'bg-indigo-500 text-white border-indigo-500 shadow-md' 
                  : 'bg-white text-slate-500 border-slate-100 hover:border-indigo-200'
                }`}
              >
                {cat === 'all' ? 'الكل' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {viewMode === 'card' ? (
        <>
          {/* Card View */}
          {!currentCard ? (
            <div className="w-full bg-white rounded-3xl p-12 text-center border-2 border-dashed border-slate-200">
              <Search className="w-16 h-16 text-slate-200 mx-auto mb-4" />
              <p className="text-xl font-bold text-slate-400">لا توجد نتائج مطابقة لبحثك</p>
              <button onClick={resetProgress} className="mt-4 text-indigo-500 font-bold hover:underline">عرض جميع البطاقات</button>
            </div>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="w-full bg-white p-3 rounded-2xl shadow-sm border border-slate-100 mb-6 font-bold flex flex-col gap-2">
                <div className="flex justify-between items-center text-sm text-slate-500 px-1">
                  <span>حفظت: <span className="text-green-500">{knownCards.size}</span></span>
                  <span className="text-slate-400">{currentIndex + 1} / {cardsToDisplay.length}</span>
                  <span>من: <span className="text-indigo-500">{flashcardsData.length}</span></span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-green-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              <div className="relative w-full aspect-[4/3] max-h-[420px] perspective-1000" onClick={flipCard}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCard.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 preserve-3d cursor-pointer"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <motion.div 
                      className="w-full h-full relative preserve-3d"
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Front of card (German) */}
                      <div className="absolute inset-0 backface-hidden bg-white rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-t-2 border-l-2 border-white/80 flex flex-col items-center justify-center p-8 text-center over-hidden" style={{ backfaceVisibility: 'hidden' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-white pointer-events-none" />
                        <div className="absolute top-8 right-8 z-10">
                          <button 
                            onClick={(e) => playAudio(e, currentCard.german)}
                            className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-50 text-indigo-500 hover:bg-indigo-100 hover:scale-110 active:scale-95 transition-all shadow-sm border border-indigo-100"
                          >
                            <Volume2 className="w-7 h-7" />
                          </button>
                        </div>
                        {knownCards.has(currentCard.id) && (
                          <div className="absolute top-8 left-8 w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-500 shadow-sm border border-emerald-200">
                            <Check className="w-7 h-7 stroke-[3]" />
                          </div>
                        )}
                        <div className="relative z-10 flex flex-col items-center">
                          <div className="px-4 py-1.5 bg-indigo-50 rounded-full text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-6 shadow-sm">الألمانية</div>
                          <h3 className="text-4xl md:text-6xl font-black font-mono text-slate-800 leading-tight tracking-tight">
                            {currentCard.german}
                          </h3>
                        </div>
                        <div className="absolute bottom-10 z-10 flex items-center gap-2 text-slate-300 font-black text-xs uppercase tracking-widest">
                          <motion.div animate={{ x: [-5, 5, -5] }} transition={{ repeat: Infinity, duration: 2 }}><ChevronRight className="w-5 h-5 rotate-180 opacity-50" /></motion.div>
                          اضغط للقلب
                          <motion.div animate={{ x: [5, -5, 5] }} transition={{ repeat: Infinity, duration: 2 }}><ChevronRight className="w-5 h-5 opacity-50" /></motion.div>
                        </div>
                      </div>

                      {/* Back of card (Arabic) */}
                      <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center p-8 text-center text-white" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
                          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white rounded-full blur-3xl" />
                          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white rounded-full blur-3xl" />
                        </div>
                        
                        <div className="relative z-10 flex flex-col items-center w-full">
                          <div className="px-4 py-1.5 bg-white/20 rounded-full text-[10px] font-black text-indigo-100 uppercase tracking-[0.2em] mb-8 border border-white/10 shadow-sm">العربية</div>
                          <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight drop-shadow-lg" dir="rtl">
                            {currentCard.arabicTranslation}
                          </h3>
                          <div className="bg-white/10 backdrop-blur-md px-10 py-5 rounded-[2rem] border border-white/20 shadow-inner">
                            <p className="text-xl md:text-2xl font-black text-indigo-50 tracking-wide" dir="ltr">
                              {currentCard.arabicPronunciation}
                            </p>
                          </div>
                        </div>
                      </div >
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {isFlipped && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full flex items-center justify-center gap-4 mt-8 px-4"
                >
                  <button 
                    onClick={(e) => markAsUnknown(e)}
                    className="flex-1 flex flex-col items-center justify-center gap-1 py-4 rounded-[2rem] bg-white text-rose-500 shadow-sm border-2 border-slate-100 hover:border-rose-200 hover:bg-rose-50 transition-all font-bold group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-rose-500/0 group-active:bg-rose-500/10 transition-colors" />
                    <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                      <X className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase tracking-wider">لم أعرفها</span>
                  </button>
                  <button 
                    onClick={(e) => markAsKnown(e)}
                    className="flex-1 flex flex-col items-center justify-center gap-1 py-4 rounded-[2rem] bg-green-500 text-white shadow-lg shadow-green-500/20 hover:bg-green-600 hover:scale-[1.02] transition-all font-bold group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/0 group-active:bg-white/10 transition-colors" />
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                      <Check className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase tracking-wider">حفظتها</span>
                  </button>
                </motion.div>
              )}

              {!isFlipped && (
                <div className="w-full flex items-center justify-between mt-8 px-4">
                  <button 
                    onClick={handlePrev}
                    className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-slate-400 shadow-sm border border-slate-100 hover:text-indigo-500 hover:bg-indigo-50 transition-all group"
                  >
                    <ChevronRight className="w-8 h-8 transform group-hover:scale-110 transition-transform" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white text-slate-400 shadow-sm border border-slate-100 hover:text-indigo-500 hover:bg-indigo-50 transition-all group"
                  >
                    <ChevronLeft className="w-8 h-8 transform group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              )}
            </>
          )}
        </>
      ) : (
        /* List View */
        <div className="w-full flex flex-col gap-3">
          {filteredCards.map((card) => (
            <motion.div 
              key={card.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-indigo-200 transition-all"
            >
              <div className="flex flex-col gap-1 text-right items-end pr-4 border-r-4 border-indigo-100 grow">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={(e) => playAudio(e, card.german)}
                    className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-indigo-500 hover:bg-indigo-50 transition-all"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <h4 className="text-xl font-bold font-mono text-slate-800">{card.german}</h4>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-400 font-bold">{card.arabicPronunciation}</span>
                  <span className="text-indigo-500 font-bold">{card.arabicTranslation}</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  setKnownCards(prev => {
                    const newSet = new Set(prev);
                    if (newSet.has(card.id)) newSet.delete(card.id);
                    else newSet.add(card.id);
                    return newSet;
                  });
                }}
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                  knownCards.has(card.id) 
                  ? 'bg-green-100 text-green-500' 
                  : 'bg-slate-50 text-slate-300 hover:bg-indigo-50 hover:text-indigo-500'
                }`}
              >
                <Check className={`w-6 h-6 ${knownCards.has(card.id) ? 'scale-110' : 'scale-100'}`} />
              </button>
            </motion.div>
          ))}
          {filteredCards.length === 0 && (
            <div className="text-center py-12 text-slate-400 font-bold">لا توجد نتائج</div>
          )}
        </div>
      )}
    </div>
  );
}
