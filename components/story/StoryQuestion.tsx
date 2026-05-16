import { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { Question } from './types';
import { TypingQuiz } from '../learning/TypingQuiz';
import { SentenceScramble } from '../learning/SentenceScramble';
import { DictationQuiz } from '../learning/DictationQuiz';

interface StoryQuestionProps {
  question: Question;
  isFinalQuiz: boolean;
  onComplete: (correct: boolean) => void;
  onNext: () => void;
  hasMoreQuestions: boolean;
}

export function StoryQuestion({
  question,
  isFinalQuiz,
  onComplete,
  onNext,
  hasMoreQuestions
}: StoryQuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOptionCorrect, setIsOptionCorrect] = useState<boolean | null>(null);

  const handleMCAnswer = (option: string) => {
    if (isOptionCorrect !== null) return;
    setSelectedOption(option);
    const correct = option.toLowerCase() === question.correct_answer.toLowerCase();
    setIsOptionCorrect(correct);
    onComplete(correct);
  };

  return (
    <motion.div 
      key={`question-${question.id}`}
      initial={{ scale: 0.9, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="w-full max-w-2xl bg-white p-5 md:p-6 rounded-[2rem] border-2 border-gray-100 shadow-sm text-right flex flex-col"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center border-b-3 border-purple-200">
          {isFinalQuiz ? <Sparkles size={20} className="text-purple-600" /> : <MessageCircle size={20} className="text-purple-600" />}
        </div>
        <h3 className="text-lg font-black text-gray-900">
          {isFinalQuiz ? 'التحدي النهائي' : 'سؤال فهم'}
        </h3>
      </div>
      
      {question.type === 'multiple_choice' ? (
        <>
          <p className="text-base font-bold text-gray-600 mb-4 leading-snug font-sans">{question.question_text}</p>
          <div className="grid gap-2 mb-3">
            {question.options?.map((option: string, i: number) => {
              const isSelected = selectedOption === option;
              const showSuccess = isSelected && isOptionCorrect;
              const showError = isSelected && !isOptionCorrect;
              
              return (
                <button
                  key={i}
                  onClick={() => handleMCAnswer(option)}
                  disabled={isOptionCorrect !== null}
                  className={`w-full p-3 text-sm rounded-xl border-b-3 transition-all font-bold flex items-center gap-2 active:translate-y-1 active:border-b-0 ${
                    showSuccess ? 'bg-[#58cc02] border-[#46a302] text-white' : 
                    showError ? 'bg-[#ff4b4b] border-[#ea1515] text-white' :
                    'bg-white border-gray-200 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center text-xs flex-shrink-0 ${
                    showSuccess || showError ? 'border-white text-white' : 'border-gray-300'
                  }`}>
                    {i + 1}
                  </div>
                  <span dir="ltr" className="text-left">{option}</span>
                </button>
              );
            })}
          </div>
        </>
      ) : question.type === 'typing' ? (
        <TypingQuiz 
          question={question.question_text}
          correctAnswer={question.correct_answer}
          onComplete={onComplete}
        />
      ) : question.type === 'sentence_scramble' ? (
        <SentenceScramble
          question={question.question_text}
          correctAnswer={question.correct_answer}
          onComplete={onComplete}
        />
      ) : question.type === 'dictation' ? (
        <DictationQuiz
          correctAnswer={question.correct_answer}
          onComplete={onComplete}
        />
      ) : null}

      {/* Next Button */}
      {isOptionCorrect !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 pt-3 border-t-2 border-gray-100"
        >
          <button 
            onClick={onNext}
            className="btn-primary w-full py-3 text-base"
          >
            {hasMoreQuestions ? 'السؤال التالي' : 'متابعة'}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}
