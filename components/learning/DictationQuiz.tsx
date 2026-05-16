import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Volume2, CheckCircle2, XCircle, ArrowRight, Keyboard as KeyboardIcon } from 'lucide-react';

interface DictationQuizProps {
  correctAnswer: string;
  onComplete: (isCorrect: boolean) => void;
}

export function DictationQuiz({ correctAnswer, onComplete }: DictationQuizProps) {
  const [userInput, setUserInput] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(correctAnswer);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // Slightly slower for dictation
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    speak(); // Speak on mount
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isAnswered) return;

    // Remove punctuation and extra spaces for more lenient matching if desired
    const cleanUser = userInput.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    const cleanCorrect = correctAnswer.trim().toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
    
    const correct = cleanUser === cleanCorrect;
    setIsCorrect(correct);
    setIsAnswered(true);
    onComplete(correct);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center space-y-6">
        <p className="text-xl text-gray-500 font-medium">استمع ثم اكتب ما سمعته:</p>
        
        <button
          onClick={speak}
          className="w-32 h-32 bg-primary/10 hover:bg-primary/20 text-primary rounded-full flex items-center justify-center transition-all group mx-auto"
        >
          <Volume2 className="w-12 h-12 group-scale-110" />
        </button>
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
            placeholder="اكتب هنا..."
            className={`w-full p-8 text-2xl font-bold text-center rounded-[2rem] border-b-[8px] transition-all outline-none ${
              isAnswered
                ? isCorrect
                  ? 'bg-green-50 border-green-500 text-green-600'
                  : 'bg-red-50 border-red-500 text-red-600'
                : 'bg-white border-gray-100 focus:border-primary text-gray-900 focus:bg-primary/5'
            }`}
          />
          {!isAnswered && (
             <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                <KeyboardIcon size={24} />
             </div>
          )}
        </div>

        {isAnswered && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 rounded-2xl flex items-center gap-4 ${
              isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}
          >
            {isCorrect ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
            <div>
              <p className="font-bold text-lg">{isCorrect ? 'إجابة دقيقة!' : 'إجابة غير دقيقة'}</p>
              {!isCorrect && <p className="opacity-80">ما قيل: <span className="font-black" dir="ltr">{correctAnswer}</span></p>}
            </div>
          </motion.div>
        )}

        {!isAnswered && (
          <button
            type="submit"
            disabled={!userInput.trim()}
            className="w-full bg-gray-900 hover:bg-black text-white py-6 rounded-2xl font-black text-2xl disabled:opacity-50 transition-all flex items-center justify-center gap-3"
          >
            تحقق من الإملاء
            <ArrowRight size={24} />
          </button>
        )}
      </form>
    </div>
  );
}
