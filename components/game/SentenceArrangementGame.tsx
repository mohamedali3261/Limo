import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { playSuccessSound } from '../../lib/audio';
import confetti from 'canvas-confetti';

interface Props {
  sentence: string;
  onComplete: (isCorrect: boolean) => void;
}

export function SentenceArrangementGame({ sentence, onComplete }: Props) {
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [arrangedWords, setArrangedWords] = useState<string[]>([]);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    const allWords = sentence.split(' ');
    const shuffled = [...allWords].sort(() => Math.random() - 0.5);
    setAvailableWords(shuffled);
    setArrangedWords([]);
    setFeedback('');
  }, [sentence]);

  const handleSelectWord = (word: string, index: number) => {
    const newAvailable = availableWords.filter((_, i) => i !== index);
    setAvailableWords(newAvailable);
    setArrangedWords([...arrangedWords, word]);
    setFeedback('');
  };

  const handleRemoveWord = (index: number) => {
    const word = arrangedWords[index];
    const newArranged = arrangedWords.filter((_, i) => i !== index);
    setArrangedWords(newArranged);
    setAvailableWords([...availableWords, word]);
    setFeedback('');
  };

  const handleCheck = () => {
    const guess = arrangedWords.join(' ');
    if (guess === sentence) {
      playSuccessSound();
      setFeedback('✅ صحيح!');
      
      // Confetti effect
      const duration = 2000;
      const animationEnd = Date.now() + duration;
      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        
        const particleCount = 50 * (timeLeft / duration);
        confetti({
          particleCount,
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          origin: {
            x: Math.random(),
            y: Math.random() * 0.5 + 0.5
          },
          colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42']
        });
      }, 250);
      
      setTimeout(() => onComplete(true), 1500);
    } else {
      setFeedback('❌ حاول مرة أخرى');
    }
  };

  const handleClear = () => {
    const allWords = [...arrangedWords, ...availableWords];
    setAvailableWords(allWords.sort(() => Math.random() - 0.5));
    setArrangedWords([]);
    setFeedback('');
  };

  return (
    <div className="p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl shadow-2xl max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
          رتب الجملة
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-gray-800">رتب كلمات الجملة</h2>
      </div>

      {/* Arranged sentence area */}
      <motion.div className="bg-white border-4 border-emerald-300 rounded-2xl p-6 shadow-lg min-h-24 flex items-center justify-center">
        <div className="flex gap-2 flex-wrap justify-center" dir="ltr">
          {arrangedWords.length === 0 ? (
            <p className="text-gray-400 text-lg font-bold">اختر الكلمات...</p>
          ) : (
            arrangedWords.map((word, idx) => (
              <motion.button
                key={idx}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                onClick={() => handleRemoveWord(idx)}
                className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-lg hover:scale-110 transition-transform cursor-pointer border-4 border-emerald-400 whitespace-nowrap"
              >
                {word}
              </motion.button>
            ))
          )}
        </div>
      </motion.div>

      {/* Available words */}
      <div className="bg-white border-4 border-teal-300 rounded-2xl p-6 shadow-lg">
        <p className="text-center text-teal-700 font-bold text-lg mb-4">اختر من هذه الكلمات:</p>
        <div className="flex gap-2 flex-wrap justify-center" dir="ltr">
          <AnimatePresence>
            {availableWords.map((word, idx) => (
              <motion.button
                key={`${word}-${idx}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => handleSelectWord(word, idx)}
                className="bg-gradient-to-br from-teal-500 to-teal-600 text-white px-4 py-2 rounded-xl font-bold text-base shadow-lg hover:scale-125 hover:shadow-xl transition-all cursor-pointer border-4 border-teal-400 active:scale-95 whitespace-nowrap"
              >
                {word}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-center text-xl font-black py-3 rounded-xl ${
              feedback.includes('✅')
                ? 'bg-green-100 text-green-700 border-2 border-green-400'
                : 'bg-red-100 text-red-700 border-2 border-red-400'
            }`}
          >
            {feedback}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleCheck}
          disabled={arrangedWords.length === 0}
          className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-2xl font-black text-lg hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ✅ تحقق
        </button>
        <button
          onClick={handleClear}
          className="flex-1 bg-gray-300 text-gray-700 py-4 rounded-2xl font-black text-lg hover:bg-gray-400 transform hover:scale-105 active:scale-95 transition-all shadow-lg"
        >
          🔄 مسح
        </button>
      </div>
    </div>
  );
}
