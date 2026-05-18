import React, { useState, useEffect } from 'react';
import { playSuccessSound } from '../../lib/audio';

interface Props {
  word: string;
  translation?: string;
  onComplete: (isCorrect: boolean) => void;
}

export function ScrambledWordGame({ word, translation, onComplete }: Props) {
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

      {translation && (
        <div 
          className="bg-white border-2 border-amber-200 rounded-2xl p-4 sm:p-5 shadow-md flex items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto relative overflow-hidden"
        >
          {/* Subtle warm glow background */}
          <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-amber-50 rounded-full blur-xl pointer-events-none" />
          
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-amber-500/25 shrink-0">
            <span className="text-xl sm:text-2xl">💡</span>
          </div>
          <div className="text-right flex-1">
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-amber-600 block mb-0.5">معنى الكلمة بالعربية</span>
            <span className="text-xl sm:text-2xl font-black text-gray-900 leading-none">{translation}</span>
          </div>
        </div>
      )}

      {/* Selected word area */}
      <div className="bg-white border-4 border-blue-300 rounded-2xl p-6 shadow-lg min-h-24 flex items-center justify-center">
        <div className="flex gap-2 flex-wrap justify-center" dir="ltr">
          {selectedLetters.length === 0 ? (
            <p className="text-gray-400 text-lg font-bold">اختر الحروف...</p>
          ) : (
            selectedLetters.map((letter, idx) => (
              <button
                key={idx}
                onClick={() => handleRemoveLetter(idx)}
                className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl font-black text-2xl md:text-3xl shadow-lg cursor-pointer border-4 border-green-400"
              >
                {letter}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Available letters */}
      <div className="bg-white border-4 border-purple-300 rounded-2xl p-6 shadow-lg">
        <p className="text-center text-purple-700 font-bold text-lg mb-4">اختر من هذه الحروف:</p>
        <div className="flex gap-2 flex-wrap justify-center" dir="ltr">
          {availableLetters.map((letter, idx) => (
            <button
              key={`${letter}-${idx}`}
              onClick={() => handleSelectLetter(letter, idx)}
              className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl font-black text-xl md:text-2xl shadow-lg cursor-pointer border-4 border-blue-400"
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Feedback */}
      {feedback && (
        <div
          className={`text-center text-xl font-black py-3 rounded-xl ${
            feedback.includes('✅')
              ? 'bg-green-100 text-green-700 border-2 border-green-400'
              : 'bg-red-100 text-red-700 border-2 border-red-400'
          }`}
        >
          {feedback}
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleCheck}
          disabled={selectedLetters.length === 0}
          className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-black text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ✅ تحقق
        </button>
        <button
          onClick={handleClear}
          className="flex-1 bg-gray-300 text-gray-700 py-4 rounded-2xl font-black text-lg hover:bg-gray-400"
        >
          🔄 مسح
        </button>
      </div>
    </div>
  );
}
