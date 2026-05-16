import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { playSuccessSound } from '../../lib/audio';
import confetti from 'canvas-confetti';

interface Props {
  word: string;
  onComplete: (isCorrect: boolean) => void;
}

export function ScrambledWordGame({ word, onComplete }: Props) {
  const [scrambledLetters, setScrambledLetters] = useState<string[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [availableLetters, setAvailableLetters] = useState<string[]>([]);
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // Scramble the word letters
    const letters = word.split('');
    const shuffled = [...letters].sort(() => Math.random() - 0.5);
    setScrambledLetters(shuffled);
    setAvailableLetters(shuffled);
    setSelectedLetters([]);
    setFeedback('');
  }, [word]);

  const handleSelectLetter = (letter: string, index: number) => {
    const newAvailable = availableLetters.filter((_, i) => i !== index);
    setAvailableLetters(newAvailable);
    setSelectedLetters([...selectedLetters, letter]);
    setFeedback('');
  };

  const handleRemoveLetter = (index: number) => {
    const letter = selectedLetters[index];
    const newSelected = selectedLetters.filter((_, i) => i !== index);
    setSelectedLetters(newSelected);
    setAvailableLetters([...availableLetters, letter]);
    setFeedback('');
  };

  const handleCheck = () => {
    const guess = selectedLetters.join('');
    if (guess.toLowerCase() === word.toLowerCase()) {
      playSuccessSound();
      setFeedback('✅ صحيح!');
      
      // Confetti effect
      const duration = 2000;
      const animationEnd = Date.now() + duration;
      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#FF0000', '#FFA500', '#FFFF00']
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#FF0000', '#FFA500', '#FFFF00']
        });
      }, 100);
      
      setTimeout(() => onComplete(true), 1500);
    } else {
      setFeedback('❌ حاول مرة أخرى');
    }
  };

  const handleClear = () => {
    setAvailableLetters(scrambledLetters);
    setSelectedLetters([]);
    setFeedback('');
  };

  return (
    <div className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-2xl max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
          رتب الحروف
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-gray-800">رتب الحروف لتكون كلمة</h2>
      </div>

      {/* Selected word area */}
      <motion.div className="bg-white border-4 border-blue-300 rounded-2xl p-6 shadow-lg min-h-24 flex items-center justify-center">
        <div className="flex gap-2 flex-wrap justify-center" dir="ltr">
          {selectedLetters.length === 0 ? (
            <p className="text-gray-400 text-lg font-bold">اختر الحروف...</p>
          ) : (
            selectedLetters.map((letter, idx) => (
              <motion.button
                key={idx}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                onClick={() => handleRemoveLetter(idx)}
                className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl font-black text-2xl md:text-3xl shadow-lg hover:scale-110 transition-transform cursor-pointer border-4 border-green-400"
              >
                {letter}
              </motion.button>
            ))
          )}
        </div>
      </motion.div>

      {/* Available letters */}
      <div className="bg-white border-4 border-purple-300 rounded-2xl p-6 shadow-lg">
        <p className="text-center text-purple-700 font-bold text-lg mb-4">اختر من هذه الحروف:</p>
        <div className="flex gap-2 flex-wrap justify-center" dir="ltr">
          <AnimatePresence>
            {availableLetters.map((letter, idx) => (
              <motion.button
                key={`${letter}-${idx}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                onClick={() => handleSelectLetter(letter, idx)}
                className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl font-black text-xl md:text-2xl shadow-lg hover:scale-125 hover:shadow-xl transition-all cursor-pointer border-4 border-blue-400 active:scale-95"
              >
                {letter}
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
          disabled={selectedLetters.length === 0}
          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-black text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
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
