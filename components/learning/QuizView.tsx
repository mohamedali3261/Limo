import { motion } from 'motion/react';
import { useState, useMemo, useCallback, useEffect } from 'react';
import { BrainCircuit, Volume2, Puzzle, CheckCircle2, Type, BookOpen, MessageSquare, XCircle, Keyboard as KeyboardIcon } from 'lucide-react';
import { MatchingGame } from './MatchingGame';
import { ListeningSentence } from './ListeningSentence';
import { FillBlankSentence } from './FillBlankSentence';
import { StoryComprehension } from './StoryComprehension';
import { InterviewSimulator } from './InterviewSimulator';
import { TypingQuiz } from './TypingQuiz';
import { SentenceScramble } from './SentenceScramble';
import { DictationQuiz } from './DictationQuiz';
import Mascot from '../languages/german/components/UI/Mascot';

interface QuizViewProps {
  currentQuestion: number;
  totalQuestions: number;
  questionData: any;
  selectedOption: string | null;
  onSelect: (option: string) => void;
  isAnswered: boolean;
  onCheck: () => void;
  onNext: () => void;
  onQuestionComplete: (isCorrect: boolean) => void;
  speak: (text: string) => void;
}

export function QuizView({
  currentQuestion,
  totalQuestions,
  questionData,
  selectedOption,
  onSelect,
  isAnswered,
  onCheck,
  onNext,
  onQuestionComplete,
  speak
}: QuizViewProps) {
  const isLast = currentQuestion === totalQuestions - 1;
  const [mascotState, setMascotState] = useState<'idle' | 'happy' | 'sad' | 'talking' | 'thinking'>('thinking');
  const [mascotMessage, setMascotMessage] = useState<string>('فكر جيداً! 🤔');

  // Shuffle function
  const shuffleArray = useCallback((array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Memoize shuffled options
  const shuffledOptions = useMemo(() => {
    if (questionData.options && Array.isArray(questionData.options)) {
      return shuffleArray(questionData.options);
    }
    return [];
  }, [currentQuestion, questionData.options, shuffleArray]);

  // تحديث حالة Mascot عند تغيير السؤال
  const updateMascotForQuestion = useCallback(() => {
    setMascotState('thinking');
    setMascotMessage('فكر جيداً! 🤔');
  }, []);

  const handleMascotAnswered = useCallback(() => {
    const isCorrect = selectedOption === questionData.correct_answer;
    if (isCorrect) {
      setMascotState('happy');
      setMascotMessage('إجابة صحيحة! 🎉');
    } else {
      setMascotState('sad');
      setMascotMessage('حاول مرة أخرى! 💪');
    }
  }, [isAnswered, selectedOption, questionData.correct_answer]);

  // تحديث حالة Mascot عند الإجابة
  useEffect(() => {
    if (isAnswered) {
      handleMascotAnswered();
    } else {
      updateMascotForQuestion();
    }
  }, [isAnswered, currentQuestion]);

  const handleSelect = useCallback((option: string) => {
    onSelect(option);
    setMascotState('talking');
    setMascotMessage('اختيار جيد! ✨');
  }, [onSelect]);

  const handleCheck = useCallback(() => {
    setMascotState('thinking');
    setMascotMessage('جاري التحقق... ⏳');
    onCheck();
  }, [onCheck]);

  const handleNext = useCallback(() => {
    setMascotState('happy');
    setMascotMessage(isLast ? 'أحسنت! 🏆' : 'هيا للسؤال التالي! 🚀');
    onNext();
  }, [onNext, isLast]);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-4 font-sans"
    >
      {/* Mascot */}
      <Mascot state={mascotState} message={mascotMessage} />

      <div className="bg-white p-6 md:p-8 rounded-[2rem] border-2 border-gray-100 shadow-xl space-y-5">
        <div className="space-y-1 flex items-start justify-between gap-2">
          <div className="space-y-1">
            <span className="text-xs font-bold text-primary flex items-center gap-2">
              {questionData.type === 'matching' ? <Puzzle size={14} /> : 
               questionData.type === 'listening_sentence' ? <Volume2 size={14} /> :
               questionData.type === 'fill_blank_sentence' ? <Type size={14} /> :
               questionData.type === 'typing' ? <KeyboardIcon size={14} /> :
               questionData.type === 'sentence_scramble' ? <Puzzle size={14} /> :
               questionData.type === 'dictation' ? <Volume2 size={14} /> :
               questionData.type === 'dictation_choice' ? <Volume2 size={14} /> :
               questionData.type === 'story_comprehension' ? <BookOpen size={14} /> :
               questionData.type === 'interview_simulation' ? <MessageSquare size={14} /> :
               <BrainCircuit size={14} />} 
              السؤال {currentQuestion + 1} من {totalQuestions}
            </span>
            {questionData.type !== 'fill_blank_sentence' && (
              <h2 className="text-lg font-bold text-gray-900">{questionData.question}</h2>
            )}
          </div>
          {questionData.type !== 'matching' && questionData.type !== 'listening_sentence' && (
            <button 
              onClick={() => speak(questionData.question)}
              className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-primary/20 hover:text-primary transition-all"
            >
              <Volume2 size={16} />
            </button>
          )}
        </div>

        {questionData.type === 'matching' ? (
          <div key={questionData.id}>
            <MatchingGame 
              pairs={questionData.options} 
              onComplete={() => onQuestionComplete(true)} 
            />
          </div>
        ) : questionData.type === 'listening_sentence' ? (
          <div key={questionData.id}>
            <ListeningSentence 
              sentence={questionData.correct_answer} 
              onComplete={onQuestionComplete} 
            />
          </div>
        ) : questionData.type === 'fill_blank_sentence' ? (
          <div key={questionData.id}>
            <FillBlankSentence 
              sentence={questionData.question}
              options={questionData.options}
              correctAnswer={questionData.correct_answer}
              onComplete={onQuestionComplete}
            />
          </div>
        ) : questionData.type === 'story_comprehension' ? (
          <div key={questionData.id}>
            <StoryComprehension
              question={questionData.question}
              options={questionData.options}
              correctAnswer={questionData.correct_answer}
              onComplete={onQuestionComplete}
            />
          </div>
        ) : questionData.type === 'interview_simulation' ? (
          <div key={questionData.id}>
            <InterviewSimulator
              question={questionData.question}
              options={questionData.options}
              correctAnswer={questionData.correct_answer}
              onComplete={onQuestionComplete}
            />
          </div>
        ) : questionData.type === 'typing' ? (
          <div key={questionData.id}>
            <TypingQuiz
              question={questionData.question}
              correctAnswer={questionData.correct_answer}
              onComplete={onQuestionComplete}
            />
          </div>
        ) : questionData.type === 'sentence_scramble' ? (
          <div key={questionData.id}>
            <SentenceScramble
              question={questionData.question}
              correctAnswer={questionData.correct_answer}
              onComplete={onQuestionComplete}
            />
          </div>
        ) : questionData.type === 'dictation' ? (
          <div key={questionData.id}>
            <DictationQuiz
              correctAnswer={questionData.correct_answer}
              onComplete={onQuestionComplete}
            />
          </div>
        ) : questionData.type === 'dictation_choice' ? (
          <div className="space-y-6">
            <div className="text-center">
              <button
                onClick={() => speak(questionData.correct_answer)}
                className="w-24 h-24 bg-primary/10 hover:bg-primary/20 text-primary rounded-full flex items-center justify-center transition-all group mx-auto shadow-lg hover:shadow-xl"
              >
                <Volume2 className="w-10 h-10 group-hover:scale-110 transition-transform" />
              </button>
              <p className="text-sm text-gray-500 mt-3">اضغط للاستماع</p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {shuffledOptions.map((option: string, oIdx: number) => {
                const isSelected = selectedOption === option;
                const isCorrect = option === questionData.correct_answer;
                
                return (
                  <motion.div 
                    key={option} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: oIdx * 0.1 }}
                    className="relative group"
                  >
                    <button
                      disabled={isAnswered}
                      onClick={() => handleSelect(option)}
                      className={`w-full p-4 md:p-5 pr-12 rounded-[1.5rem] border-b-[3px] font-bold text-left transition-all text-sm md:text-base relative h-full ${
                        isAnswered && isCorrect 
                          ? 'bg-[#EBF7E9] border-[#46A302] text-[#46A302]' 
                          : isAnswered && isSelected && !isCorrect 
                            ? 'bg-[#FFEBEE] border-[#EA2B2B] text-[#EA2B2B]' 
                            : isSelected 
                              ? 'bg-primary/5 border-primary text-gray-900 border-b-[4px] -translate-y-0.5 shadow-inner' 
                              : 'bg-white border-gray-100 hover:border-gray-300 text-gray-600 hover:bg-gray-50'
                      } ${isAnswered ? '' : 'active:translate-y-0.5 active:border-b-0'}`}
                    >
                      <div className="flex items-start gap-3" dir="ltr">
                        <div className={`w-7 h-7 rounded-md flex items-center justify-center border-2 transition-all font-display text-sm flex-shrink-0 ${
                          isSelected ? 'bg-primary border-primary text-white scale-105 shadow-lg shadow-primary/20' : 'border-gray-100 text-gray-300'
                        }`}>
                           {String.fromCharCode(65 + oIdx)}
                        </div>
                        <span className="leading-snug text-sm md:text-base break-words">{option}</span>
                      </div>
                      {isAnswered && isCorrect && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-3 top-1/2 -translate-y-1/2">
                           <CheckCircle2 size={20} className="text-[#46A302]" />
                        </motion.div>
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-3 top-1/2 -translate-y-1/2">
                           <XCircle size={20} className="text-[#EA2B2B]" />
                        </motion.div>
                      )}
                    </button>
                    <button 
                      onClick={() => speak(option)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-300 hover:text-primary transition-all hover:scale-110"
                    >
                      <Volume2 size={14} />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : questionData.type === 'image_choice' ? (
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-700 mb-4">{questionData.question}</p>
              <button
                onClick={() => speak(questionData.question)}
                className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all inline-flex items-center gap-2 font-bold"
              >
                <Volume2 size={18} /> استمع للسؤال
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              {shuffledOptions.map((option: string, oIdx: number) => {
                const isSelected = selectedOption === option;
                const isCorrect = option === questionData.correct_answer;
                
                return (
                  <motion.div 
                    key={option} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: oIdx * 0.1 }}
                    className="relative group"
                  >
                    <button
                      disabled={isAnswered}
                      onClick={() => handleSelect(option)}
                      className={`w-full p-6 md:p-8 rounded-[1.5rem] border-b-[3px] font-bold transition-all text-5xl md:text-6xl relative h-full flex items-center justify-center ${
                        isAnswered && isCorrect 
                          ? 'bg-[#EBF7E9] border-[#46A302]' 
                          : isAnswered && isSelected && !isCorrect 
                            ? 'bg-[#FFEBEE] border-[#EA2B2B]' 
                            : isSelected 
                              ? 'bg-primary/5 border-primary border-b-[4px] -translate-y-0.5 shadow-inner' 
                              : 'bg-white border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                      } ${isAnswered ? '' : 'active:translate-y-0.5 active:border-b-0'}`}
                    >
                      {option}
                      {isAnswered && isCorrect && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-2 right-2">
                           <CheckCircle2 size={24} className="text-[#46A302]" />
                        </motion.div>
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-2 right-2">
                           <XCircle size={24} className="text-[#EA2B2B]" />
                        </motion.div>
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : questionData.type === 'multiple_choice' ? (
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {shuffledOptions.map((option: string, oIdx: number) => {
              const isSelected = selectedOption === option;
              const isCorrect = option === questionData.correct_answer;
              
              return (
                <motion.div 
                  key={option} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: oIdx * 0.1 }}
                  className="relative group"
                >
                  <button
                    disabled={isAnswered}
                    onClick={() => handleSelect(option)}
                    className={`w-full p-4 md:p-5 pr-12 rounded-[1.5rem] border-b-[3px] font-bold text-left transition-all text-sm md:text-base relative h-full ${
                      isAnswered && isCorrect 
                        ? 'bg-[#EBF7E9] border-[#46A302] text-[#46A302]' 
                        : isAnswered && isSelected && !isCorrect 
                          ? 'bg-[#FFEBEE] border-[#EA2B2B] text-[#EA2B2B]' 
                          : isSelected 
                            ? 'bg-primary/5 border-primary text-gray-900 border-b-[4px] -translate-y-0.5 shadow-inner' 
                            : 'bg-white border-gray-100 hover:border-gray-300 text-gray-600 hover:bg-gray-50'
                    } ${isAnswered ? '' : 'active:translate-y-0.5 active:border-b-0'}`}
                  >
                    <div className="flex items-start gap-3" dir="ltr">
                      <div className={`w-7 h-7 rounded-md flex items-center justify-center border-2 transition-all font-display text-sm flex-shrink-0 ${
                        isSelected ? 'bg-primary border-primary text-white scale-105 shadow-lg shadow-primary/20' : 'border-gray-100 text-gray-300'
                      }`}>
                         {String.fromCharCode(65 + oIdx)}
                      </div>
                      <span className="leading-snug text-sm md:text-base break-words">{option}</span>
                    </div>
                    {isAnswered && isCorrect && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-3 top-1/2 -translate-y-1/2">
                         <CheckCircle2 size={20} className="text-[#46A302]" />
                      </motion.div>
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute right-3 top-1/2 -translate-y-1/2">
                         <XCircle size={20} className="text-[#EA2B2B]" />
                      </motion.div>
                    )}
                  </button>
                  <button 
                    onClick={() => speak(option)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-300 hover:text-primary transition-all hover:scale-110"
                  >
                    <Volume2 size={14} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="p-8 bg-red-50 text-red-500 rounded-2xl font-bold text-center">
            نوع السؤال غير مدعوم حالياً ({questionData.type})
          </div>
        )}

        <div className="pt-4">
          {questionData.type !== 'matching' && 
           questionData.type !== 'listening_sentence' && 
           questionData.type !== 'fill_blank_sentence' && 
           questionData.type !== 'typing' &&
           questionData.type !== 'sentence_scramble' &&
           questionData.type !== 'dictation' &&
           questionData.type !== 'story_comprehension' &&
           questionData.type !== 'interview_simulation' &&
           !isAnswered ? (
            <button
              disabled={!selectedOption}
              onClick={handleCheck}
              className="w-full bg-gray-900 hover:bg-black text-white py-4 rounded-xl font-bold text-base disabled:opacity-50 transition-all shadow-lg shadow-gray-200"
            >
              تحقق
            </button>
          ) : isAnswered ? (
            <button
              onClick={handleNext}
              className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-primary/20"
            >
              {isLast ? 'إنهاء الدرس' : 'استمرار'}
            </button>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}
