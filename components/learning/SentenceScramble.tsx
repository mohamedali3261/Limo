import React, { useState, useEffect } from 'react';
import { motion, Reorder } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight } from 'lucide-react';

interface SentenceScrambleProps {
  question: string; // The translation or hint
  correctAnswer: string; // The full correct English sentence
  onComplete: (isCorrect: boolean) => void;
}

export function SentenceScramble({ question, correctAnswer, onComplete }: SentenceScrambleProps) {
  const [words, setWords] = useState<string[]>([]);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    // Split the correct answer and shuffle it
    const originalWords = correctAnswer.split(' ');
    const shuffled = [...originalWords].sort(() => Math.random() - 0.5);
    setWords(shuffled);
  }, [correctAnswer]);

  const handleWordClick = (word: string, index: number) => {
    if (isAnswered) return;
    setSelectedWords([...selectedWords, word]);
    setWords(words.filter((_, i) => i !== index));
  };

  const handleRemoveWord = (word: string, index: number) => {
    if (isAnswered) return;
    setWords([...words, word]);
    setSelectedWords(selectedWords.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    if (isAnswered) return;
    setWords(correctAnswer.split(' ').sort(() => Math.random() - 0.5));
    setSelectedWords([]);
  };

  const handleSubmit = () => {
    if (isAnswered) return;
    const userSentence = selectedWords.join(' ');
    const correct = userSentence.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
    
    setIsCorrect(correct);
    setIsAnswered(true);
    onComplete(correct);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center space-y-4">
        <p className="text-xl text-gray-500 font-medium">رتب الكلمات لتكوين الجملة الصحيحة:</p>
        <h3 className="text-3xl font-bold text-primary">{question}</h3>
      </div>

      {/* Selected Words Area */}
      <div className="min-h-[120px] p-6 bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex flex-wrap gap-2 items-center justify-center transition-all">
        {selectedWords.map((word, idx) => (
          <motion.button
            layoutId={`word-${word}-${idx}`}
            key={`selected-${idx}`}
            onClick={() => handleRemoveWord(word, idx)}
            className="px-5 py-3 bg-white border-2 border-gray-100 rounded-xl font-bold text-xl shadow-sm hover:border-red-200"
          >
            {word}
          </motion.button>
        ))}
        {selectedWords.length === 0 && (
          <p className="text-gray-300 italic">اضغط على الكلمات بالأسفل بالترتيب...</p>
        )}
      </div>

      {/* Available Words Area */}
      <div className="flex flex-wrap gap-3 justify-center">
        {words.map((word, idx) => (
          <motion.button
            layoutId={`word-${word}-${idx}`}
            key={`avail-${idx}`}
            onClick={() => handleWordClick(word, idx)}
            disabled={isAnswered}
            className="px-5 py-3 bg-white border-2 border-b-4 border-gray-200 active:border-b-0 active:translate-y-1 rounded-xl font-bold text-xl hover:border-primary/30 transition-all"
          >
            {word}
          </motion.button>
        ))}
      </div>

      {/* Results and Controls */}
      <div className="space-y-4">
        {isAnswered ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`p-6 rounded-2xl flex items-center gap-4 ${
              isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
            }`}
          >
            {isCorrect ? <CheckCircle2 className="w-8 h-8" /> : <XCircle className="w-8 h-8" />}
            <div>
              <p className="font-bold text-lg">{isCorrect ? 'أحسنت! ترتيب صحيح.' : 'ترتيب خاطئ'}</p>
              {!isCorrect && <p className="opacity-80">التصحيح: <span className="font-black" dir="ltr">{correctAnswer}</span></p>}
            </div>
          </motion.div>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={handleReset}
              className="p-4 bg-gray-100 text-gray-600 rounded-2xl hover:bg-gray-200 transition-colors"
              title="إعادة المحاولة"
            >
              <RotateCcw size={24} />
            </button>
            <button
              onClick={handleSubmit}
              disabled={selectedWords.length !== correctAnswer.split(' ').length}
              className="flex-1 bg-gray-900 hover:bg-black text-white py-5 rounded-2xl font-black text-2xl flex items-center justify-center gap-3 disabled:opacity-50 transition-all"
            >
              تحقق من الترتيب
              <ArrowRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
