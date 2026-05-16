import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';

interface InterviewSimulatorProps {
  question: string;
  options: string[];
  correctAnswer: string;
  onComplete: (isCorrect: boolean) => void;
}

import { playSuccessSound } from '../../lib/audio';

export function InterviewSimulator({ question, options, correctAnswer, onComplete }: InterviewSimulatorProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showRecruiter, setShowRecruiter] = useState(false);

  useEffect(() => {
    // Artificial delay to make it feel like a real person is starting
    const timer = setTimeout(() => setShowRecruiter(true), 500);
    return () => clearTimeout(timer);
  }, []);

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

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-8 font-sans max-w-2xl mx-auto">
      {/* Recruiter Avatar & Message */}
      <div className="flex items-start gap-4" dir="ltr">
        <AnimatePresence>
          {showRecruiter && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center shrink-0 shadow-lg border-2 border-white"
            >
              <User size={32} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-3xl rounded-tl-none border-2 border-gray-100 shadow-sm relative flex-1"
        >
          <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-l-2 border-t-2 border-gray-100 rotate-[-45deg]"></div>
          <p className="text-xl font-bold text-gray-800 leading-relaxed mb-4" dir="ltr">{question}</p>
          <button 
            onClick={() => speak(question)}
            className="flex items-center gap-2 text-primary font-bold text-sm hover:underline"
          >
            <MessageSquare size={16} /> Listen to question
          </button>
        </motion.div>
      </div>

      {/* User Options */}
      <div className="space-y-4 pt-4">
        <h3 className="text-center text-gray-400 font-bold text-sm uppercase tracking-widest">Select your response</h3>
        <div className="grid gap-3">
          {options.map((option) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === correctAnswer;
            
            return (
              <motion.button
                key={option}
                whileHover={!isAnswered ? { x: 5, scale: 1.01 } : {}}
                whileTap={!isAnswered ? { scale: 0.98 } : {}}
                disabled={isAnswered}
                onClick={() => handleSelect(option)}
                className={`w-full p-5 rounded-2xl border-2 font-bold text-left transition-all relative flex items-center gap-4 ${
                   isAnswered && isCorrect
                    ? 'bg-green-50 border-green-500 text-green-700'
                    : isAnswered && isSelected && !isCorrect
                    ? 'bg-red-50 border-red-500 text-red-700'
                    : isSelected
                    ? 'bg-primary/5 border-primary text-primary'
                    : 'bg-white border-gray-100 text-gray-700 hover:border-gray-200'
                }`}
                dir="ltr"
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border-2 shrink-0 ${
                   isSelected ? 'bg-primary border-primary text-white' : 'border-gray-100 text-gray-300'
                }`}>
                  {String.fromCharCode(65 + options.indexOf(option))}
                </div>
                <span className="flex-1">{option}</span>
                {isAnswered && isCorrect && <CheckCircle2 className="text-green-500" size={24} />}
                {isAnswered && isSelected && !isCorrect && <AlertCircle className="text-red-500" size={24} />}
              </motion.button>
            );
          })}
        </div>
      </div>

      {!isAnswered && (
        <div className="pt-4">
          <button
            disabled={!selectedOption}
            onClick={handleCheck}
            className="w-full bg-gray-900 hover:bg-black text-white py-5 rounded-2xl font-black text-xl transition-all shadow-xl disabled:opacity-50"
          >
            Submit Response
          </button>
        </div>
      )}

      {isAnswered && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-6 rounded-2xl border-2 font-bold text-center ${
            selectedOption === correctAnswer ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'
          }`}
        >
          {selectedOption === correctAnswer 
            ? "Excellent response! This shows great professionalism." 
            : `Keep practicing! A more professional answer would be: "${correctAnswer}"`}
        </motion.div>
      )}
    </div>
  );
}
