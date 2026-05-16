import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, CheckCircle2, XCircle } from 'lucide-react';

interface StoryComprehensionProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onComplete: (isCorrect: boolean) => void;
}

import { playSuccessSound } from '../../lib/audio';

export function StoryComprehension({ question, options, correctAnswer, onComplete }: StoryComprehensionProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const handleCheck = () => {
    setIsAnswered(true);
    const isCorrect = selectedOption === correctAnswer;
    if (isCorrect) playSuccessSound();
    onComplete(isCorrect);
  };

  return (
    <div className="space-y-8 font-sans max-w-2xl mx-auto">
      <div className="flex items-center gap-3 text-primary bg-primary/5 p-4 rounded-2xl border-2 border-primary/10">
        <BookOpen size={24} />
        <h3 className="font-black text-lg">اختبار الفهم (Reading Comprehension)</h3>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border-2 border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-relaxed" dir="ltr">
          {question}
        </h2>

        <div className="grid gap-4">
          {options.map((option) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === correctAnswer;
            const showSuccess = isAnswered && isCorrect;
            const showError = isAnswered && isSelected && !isCorrect;

            return (
              <motion.button
                key={option}
                whileHover={!isAnswered ? { scale: 1.02 } : {}}
                whileTap={!isAnswered ? { scale: 0.98 } : {}}
                disabled={isAnswered}
                onClick={() => handleSelect(option)}
                className={`w-full p-6 rounded-2xl border-2 font-bold text-lg text-left transition-all flex items-center justify-between ${
                  showSuccess
                    ? 'bg-green-500 border-green-600 text-white shadow-lg shadow-green-200'
                    : showError
                    ? 'bg-red-500 border-red-600 text-white shadow-lg shadow-red-200'
                    : isSelected
                    ? 'bg-gray-900 border-gray-900 text-white shadow-xl'
                    : 'bg-white border-gray-100 text-gray-700 hover:border-gray-200 shadow-sm'
                }`}
                dir="ltr"
              >
                <div className="flex-1">{option}</div>
                {showSuccess && <CheckCircle2 size={24} />}
                {showError && <XCircle size={24} />}
              </motion.button>
            );
          })}
        </div>
      </div>

      {!isAnswered && (
        <button
          disabled={!selectedOption}
          onClick={handleCheck}
          className="w-full bg-primary hover:bg-primary-dark text-white py-5 rounded-[2rem] font-black text-xl transition-all shadow-xl shadow-primary/30 disabled:opacity-50 border-b-8 border-primary-dark"
        >
          Check Answer
        </button>
      )}
    </div>
  );
}
