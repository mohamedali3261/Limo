import { useState, memo, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, ChevronRight, BookOpen, UserCircle2, GraduationCap, SpellCheck } from 'lucide-react';
import { useMediaQuery } from '../../lib/hooks/useMediaQuery';
import { speak } from '../../lib/audio';

interface LessonContentProps {
  title: string;
  content: string;
  onStartQuiz: () => void;
}

function LessonContentComponent({ title, content, onStartQuiz }: LessonContentProps) {
  const [showTranslations, setShowTranslations] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSpeak = async (text: string) => {
    await speak(text, 'en-US', 'male');
  };

  const isStory = title.includes('(Story)');
  const isInterview = title.includes('(Interview)');
  const isAlphabet = content.startsWith('ALPHABET_JSON:');
  const isVocab = content.startsWith('VOCAB_JSON:');

  // Memoize parsed data to prevent recalculation
  const alphabetData = useMemo(() => {
    if (!isAlphabet) return [];
    try {
      return JSON.parse(content.replace(/^ALPHABET_JSON:\s*/, ''));
    } catch (e) {
      console.error('Failed to parse alphabet data', e);
      return [];
    }
  }, [content, isAlphabet]);

  const vocabData = useMemo(() => {
    if (!isVocab) return [];
    try {
      return JSON.parse(content.replace(/^VOCAB_JSON:\s*/, ''));
    } catch (e) {
      console.error('Failed to parse vocab data', e);
      return [];
    }
  }, [content, isVocab]);

  const items = useMemo(() => {
    if (isAlphabet) return alphabetData;
    if (isVocab) return vocabData;
    return [];
  }, [isAlphabet, isVocab, alphabetData, vocabData]);

  const hasCarousel = isAlphabet || isVocab;

  useEffect(() => {
    if (!hasCarousel || items.length === 0) return;

    const currentItem = items[currentIndex];
    if (currentItem) {
      const textToSpeak = isAlphabet
        ? `${currentItem.letter}, ${currentItem.word}`
        : currentItem.word;
      
      const timer = setTimeout(() => {
        handleSpeak(textToSpeak);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, hasCarousel, items, isAlphabet]);

  return (
    <motion.div 
      initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={isMobile ? { opacity: 1 } : { opacity: 0 }}
      transition={isMobile ? { duration: 0 } : { duration: 0.3 }}
      className={`bg-white rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden font-sans relative ${
        isStory ? 'bg-[url("https://www.transparenttextures.com/patterns/paper-fibers.png")] bg-fixed' : ''
      }`}
      style={{ willChange: isMobile ? 'auto' : 'opacity' }}
    >
      <div className={`p-6 md:p-10 space-y-8 text-right ${isStory ? 'bg-orange-50/30' : ''}`} dir="rtl">
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shadow-inner">
                {isStory && <BookOpen size={28} />}
                {isInterview && <UserCircle2 size={28} />}
                {isAlphabet && <SpellCheck size={28} />}
                {isVocab && <BookOpen size={28} />}
                {!isStory && !isInterview && !isAlphabet && !isVocab && <GraduationCap size={28} />}
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-display font-black text-gray-900 tracking-tight leading-tight">{title}</h1>
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[8px] mt-1 text-right">جلسة تدريب البطل</p>
              </div>
            </div>
            
            {!isStory && !isInterview && !isAlphabet && !isVocab && (
              <button 
                onClick={() => setShowTranslations(!showTranslations)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-2xl text-xs font-black transition-all border-2 ${
                  showTranslations ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-gray-200'
                }`}
              >
                {showTranslations ? 'Translation Enabled' : 'Immersive Mode'}
                <div className={`w-2 h-2 rounded-full ${showTranslations ? 'bg-white' : 'bg-gray-300'} animate-pulse`} />
              </button>
            )}
          </div>
          
          <div className={`space-y-6 ${isStory ? 'max-w-2xl mx-auto text-center' : ''}`}>
            {hasCarousel && items.length > 0 && (
              <div className="w-full py-4 flex flex-col items-center justify-center">
                {/* Progress bar */}
                <div className="w-full max-w-lg space-y-2 mb-8" dir="rtl">
                  <div className="flex justify-between text-xs font-black text-gray-400 uppercase tracking-wider">
                    <span>التقدم في الدرس</span>
                    <span>الكارت {currentIndex + 1} من {items.length}</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentIndex + 1) / items.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>

                {/* Animated Flashcard */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    onClick={() => {
                      const currentItem = items[currentIndex];
                      if (currentItem) {
                        handleSpeak(isAlphabet ? `${currentItem.letter}, ${currentItem.word}` : currentItem.word);
                      }
                    }}
                    className="bg-white border-4 border-gray-100 rounded-[3rem] p-8 md:p-12 w-full max-w-lg mx-auto flex flex-col items-center gap-6 md:gap-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:border-primary/20 transition-all cursor-pointer relative overflow-hidden group select-none active:scale-[0.98] min-h-[320px] justify-center"
                  >
                    {/* Top Accent Gradient Bar */}
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-primary to-orange-400"></div>

                    {/* Speaker Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentItem = items[currentIndex];
                        if (currentItem) {
                          handleSpeak(isAlphabet ? `${currentItem.letter}, ${currentItem.word}` : currentItem.word);
                        }
                      }}
                      className="absolute top-6 left-6 bg-primary/10 text-primary w-12 h-12 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-md group active:scale-95 z-10 animate-pulse"
                    >
                      <Volume2 size={24} />
                    </motion.button>

                    {isAlphabet ? (
                      <div className="flex flex-col items-center text-center mt-4">
                        {/* Large Letter */}
                        <h1 className="text-8xl md:text-9xl font-black text-primary tracking-tight mb-2 drop-shadow-sm select-none">
                          {items[currentIndex].letter}
                        </h1>
                        
                        {/* Emoji */}
                        <div className="text-7xl md:text-8xl my-3 transform group-hover:scale-110 transition-transform select-none">
                          {items[currentIndex].emoji}
                        </div>

                        {/* English Word */}
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 capitalize tracking-wide select-none">
                          {items[currentIndex].word}
                        </h2>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-center mt-6 min-h-[160px]">
                        {/* Vocab Word */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight select-none">
                          {items[currentIndex].word}
                        </h1>
                      </div>
                    )}

                    {/* Divider */}
                    <div className="w-24 h-1 bg-gray-100 rounded-full my-1"></div>

                    {/* Translation Area */}
                    <div className="flex flex-col items-center">
                      <p className="text-2xl md:text-3xl font-black text-teal-600 transition-all duration-300 select-none">
                        {items[currentIndex].translation}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Sleek Navigation Footer */}
                <div className="flex items-center justify-between gap-4 mt-8 w-full max-w-lg mx-auto" dir="rtl">
                  {/* Previous Button */}
                  <motion.button
                    whileHover={currentIndex > 0 ? { scale: 1.03 } : {}}
                    whileTap={currentIndex > 0 ? { scale: 0.98 } : {}}
                    onClick={() => {
                      if (currentIndex > 0) {
                        setCurrentIndex(prev => prev - 1);
                      }
                    }}
                    disabled={currentIndex === 0}
                    className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-black text-sm border-2 transition-all ${
                      currentIndex === 0
                        ? 'border-gray-100 text-gray-300 bg-gray-50 opacity-40 cursor-not-allowed'
                        : 'border-gray-200 text-gray-600 bg-white hover:bg-gray-50 hover:border-gray-300'
                    }`}
                  >
                    <span>السابق</span>
                  </motion.button>

                  {/* Next or Start Quiz Button */}
                  {currentIndex < items.length - 1 ? (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setCurrentIndex(prev => prev + 1);
                      }}
                      className="flex-1 py-4 bg-primary text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all"
                    >
                      <span>التالي</span>
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={onStartQuiz}
                      className="flex-1 py-4 bg-teal-500 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 hover:bg-teal-600 transition-all"
                    >
                      <span>ابدأ الاختبار</span>
                      <ChevronRight size={20} className="rotate-180" />
                    </motion.button>
                  )}
                </div>
              </div>
            )}

            {!hasCarousel && content.split('\n').map((line, idx) => {
              if (!line.trim()) return null;

              if (isStory) {
                return (
                  <p 
                    key={idx} 
                    className="text-3xl font-serif leading-relaxed text-gray-800 italic" 
                    dir="ltr"
                  >
                    {line}
                  </p>
                );
              }

              if (isInterview && line.startsWith('- ')) {
                const text = line.replace(/^- /, '');
                return (
                  <div 
                    key={idx} 
                    className="flex justify-start" 
                    dir="ltr"
                  >
                    <div className={`bg-gray-50 p-6 rounded-[2rem] rounded-tl-none border border-gray-100 relative max-w-[85%] shadow-sm ${
                      !isMobile && 'hover:shadow-md transition-shadow'
                    }`}>
                       <span className="text-xl font-bold text-gray-900 leading-relaxed">{text}</span>
                       <button 
                         onClick={() => handleSpeak(text)}
                         className={`ml-4 p-2 bg-white text-primary rounded-xl shadow-sm ${
                           !isMobile && 'hover:scale-110 transition-transform'
                         }`}
                       >
                         <Volume2 size={18} />
                       </button>
                    </div>
                  </div>
                );
              }

              if (isInterview && line.includes('(')) {
                return (
                  <p key={idx} className="text-sm font-bold text-gray-400 text-left px-4 italic" dir="rtl">
                    {line}
                  </p>
                );
              }

              const isEnglish = line.trim().startsWith('- ') || line.match(/^[a-zA-Z]/);
              if (isEnglish) {
                const cleanText = line.replace(/^- /, '').trim();
                return (
                  <div key={idx} className="flex items-center justify-end gap-3">
                    <span className={`text-xl text-gray-800 font-bold bg-gray-50 px-4 py-2 rounded-xl ${
                      !isMobile && 'hover:bg-primary/5 transition-colors'
                    }`} dir="ltr">
                      {line}
                    </span>
                    <button 
                      onClick={() => handleSpeak(cleanText)}
                      className={`p-2 bg-primary/10 text-primary rounded-lg shadow-sm ${
                        !isMobile && 'hover:bg-primary hover:text-white transition-all'
                      }`}
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>
                );
              }
              return (
                <p 
                  key={idx} 
                  className={`text-xl text-gray-500 font-medium leading-relaxed ${
                    !showTranslations ? 'blur-md select-none opacity-20' : 'blur-0 opacity-100'
                  }`}
                >
                  {line}
                </p>
              );
            })}
          </div>
        </div>

        {isStory && (
          <div className="pt-4 border-t border-orange-100">
             <button 
               onClick={() => handleSpeak(content)}
               className="mx-auto flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-full font-bold shadow-lg hover:bg-primary-dark transition-all text-sm"
             >
               <Volume2 size={16} /> استمع للقصة كاملة
             </button>
          </div>
        )}
        
        {!hasCarousel && (
          <div className="bg-gray-50 p-5 rounded-[1.5rem] border-2 border-gray-100 italic font-bold text-gray-700 text-sm flex items-center justify-center gap-2">
            <span>💡 نصيحة: حاول نطق هذه الجمل بصوت عالٍ لبناء الذاكرة العضلية!</span>
          </div>
        )}

        {!hasCarousel && (
          <button 
            onClick={onStartQuiz}
            className={`w-full py-4 rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-2 shadow-xl bg-primary text-white shadow-primary/20 ${
              !isMobile && 'hover:bg-primary-hover transition-all'
            }`}
          >
            ابدأ الاختبار
            <ChevronRight size={20} className={!isMobile ? 'hover:translate-x-1 transition-transform' : ''} />
          </button>
        )}
      </div>
    </motion.div>
  );
}

export const LessonContent = memo(LessonContentComponent);
