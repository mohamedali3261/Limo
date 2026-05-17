import { useState, memo, useMemo } from 'react';
import { motion } from 'motion/react';
import { Volume2, ChevronRight, BookOpen, UserCircle2, GraduationCap, SpellCheck } from 'lucide-react';
import { toast } from 'sonner';
import { useMediaQuery } from '../../lib/hooks/useMediaQuery';
import { speak } from '../../lib/audio';

interface LessonContentProps {
  title: string;
  content: string;
  onStartQuiz: () => void;
  isCompleted?: boolean;
}

function LessonContentComponent({ title, content, onStartQuiz, isCompleted = false }: LessonContentProps) {
  const [showTranslations, setShowTranslations] = useState(true);
  const [clickedLetters, setClickedLetters] = useState<number[]>([]);
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
                <p className="text-gray-400 font-bold uppercase tracking-widest text-[8px] mt-1 text-right">Hero Training Session</p>
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
            {isAlphabet && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" dir="ltr">
                {alphabetData.map((item, idx) => {
                  const isClicked = clickedLetters.includes(idx);
                  
                  return (
                    <div
                      key={idx}
                      className={`rounded-[2rem] p-5 border-2 flex flex-col items-center text-center cursor-pointer relative bg-gray-50 border-gray-100 ${
                        !isMobile && 'hover:border-primary/30 hover:shadow-lg transition-all'
                      }`}
                      onClick={() => {
                        if (!isClicked) {
                          setClickedLetters([...clickedLetters, idx]);
                        }
                        handleSpeak(`${item.letter}, ${item.word}`);
                      }}
                    >
                      <div className={`text-7xl font-black mb-2 text-primary ${
                        !isMobile && 'group-hover:scale-110 transition-transform'
                      }`}>
                        {item.letter}
                      </div>
                      <div className="text-5xl mb-3">
                        {item.emoji}
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-gray-800">{item.word}</div>
                        <div className="text-xs font-medium text-gray-500" dir="rtl">{item.translation}</div>
                      </div>
                      <button 
                        className={`mt-4 p-3 rounded-full bg-primary/10 text-primary ${
                          !isMobile && 'hover:bg-primary hover:text-white transition-colors'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSpeak(`${item.letter}, ${item.word}`);
                        }}
                      >
                        <Volume2 size={20} />
                      </button>
                      {isClicked && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          ✓
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {isVocab && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" dir="ltr">
                {vocabData.map((item, idx) => (
                  <div
                    key={idx}
                    className={`bg-gray-50 rounded-[1.5rem] p-5 border-2 border-gray-100 flex flex-col justify-between items-start cursor-pointer ${
                      !isMobile && 'hover:border-primary/30 hover:shadow-lg transition-all'
                    }`}
                    onClick={() => handleSpeak(item.word)}
                  >
                    <div className="space-y-2 w-full">
                      <div className="text-2xl font-bold text-gray-900">{item.word}</div>
                      <div className="text-sm font-medium text-gray-500" dir="rtl">{item.translation}</div>
                    </div>
                    <button className={`mt-3 p-3 rounded-lg bg-white shadow-sm text-primary ${
                      !isMobile && 'hover:bg-primary hover:text-white transition-colors'
                    }`}>
                      <Volume2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {!isAlphabet && !isVocab && content.split('\n').map((line, idx) => {
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
        
        <div className="bg-gray-50 p-5 rounded-[1.5rem] border-2 border-gray-100 italic font-bold text-gray-700 text-sm flex items-center justify-center gap-2">
          <span>💡 نصيحة: حاول نطق هذه الجمل بصوت عالٍ لبناء الذاكرة العضلية!</span>
        </div>

        <button 
          onClick={onStartQuiz}
          className={`w-full py-4 rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-2 shadow-xl bg-primary text-white shadow-primary/20 ${
            !isMobile && 'hover:bg-primary-hover transition-all'
          }`}
        >
          ابدأ الاختبار
          <ChevronRight size={20} className={!isMobile ? 'hover:translate-x-1 transition-transform' : ''} />
        </button>
      </div>
    </motion.div>
  );
}

export const LessonContent = memo(LessonContentComponent);
