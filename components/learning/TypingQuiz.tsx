import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Keyboard as KeyboardIcon, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface TypingQuizProps {
  question: string;
  correctAnswer: string;
  onComplete: (isCorrect: boolean) => void;
}

export function TypingQuiz({ question, correctAnswer, onComplete }: TypingQuizProps) {
  const [userInput, setUserInput] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAnswered) return;

    const normalizedUser = userInput.trim().toLowerCase();
    const normalizedCorrect = correctAnswer.trim().toLowerCase();
    const correct = normalizedUser === normalizedCorrect;

    setIsCorrect(correct);
    setIsAnswered(true);
    onComplete(correct);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <p className="text-xl text-gray-500 font-medium">اكتب الكلمة المفقودة بالإنجليزية:</p>
        <div className="space-y-2">
          {question.includes('|||') ? (
            <>
              <h3 className="text-3xl font-black text-gray-900" dir="ltr">
                {question.split('|||')[0].replace('___', ' ( ... ) ')}
              </h3>
              <p className="text-2xl text-primary font-bold">{question.split('|||')[1]}</p>
            </>
          ) : (
            <h3 className="text-4xl font-black text-gray-900">{question}</h3>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={isAnswered}
            dir="ltr"
            placeholder="Write here..."
            className={`w-full p-8 text-3xl font-black text-center rounded-[2rem] border-b-[8px] transition-all outline-none ${
              isAnswered
                ? isCorrect
                  ? 'bg-green-50 border-green-500 text-green-600'
                  : 'bg-red-50 border-red-500 text-red-600'
                : 'bg-white border-gray-100 focus:border-primary text-gray-900 focus:bg-primary/5'
            }`}
          />
          {!isAnswered && (
             <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                <KeyboardIcon size={32} />
             </div>
          )}
        </div>

        {isAnswered && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl flex items-center justify-between ${
              isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}
          >
            <div className="flex items-center gap-4">
              {isCorrect ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
              <div>
                <p className="font-bold text-lg">{isCorrect ? 'إجابة صحيحة!' : 'إجابة خاطئة'}</p>
                {!isCorrect && <p className="opacity-80">الإجابة الصحيحة هي: <span className="font-black" dir="ltr">{correctAnswer}</span></p>}
              </div>
            </div>
          </motion.div>
        )}

        {!isAnswered && (
          <button
            type="submit"
            disabled={!userInput.trim()}
            className="w-full bg-gray-900 hover:bg-black text-white py-6 rounded-2xl font-black text-2xl disabled:opacity-50 transition-all flex items-center justify-center gap-3"
          >
            تحقق
            <ArrowRight size={24} />
          </button>
        )}
      </form>
    </div>
  );
}
