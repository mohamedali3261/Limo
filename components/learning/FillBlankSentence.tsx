import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Volume2 } from 'lucide-react';

interface FillBlankSentenceProps {
  sentence: string;
  options: string[];
  correctAnswer: string;
  onComplete: (isCorrect: boolean) => void;
}

import { playSuccessSound } from '../../lib/audio';

export function FillBlankSentence({ sentence, options, correctAnswer, onComplete }: FillBlankSentenceProps) {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // stabilize shuffled options so they don't jump around on render
  const shuffledOptions = useMemo(() => {
    return [...options].sort(() => 0.5 - Math.random());
  }, [options, sentence]);

  const handleSelect = (word: string) => {
    if (isAnswered) return;
    setSelectedWord(word);
  };

  const handleCheck = () => {
    setIsAnswered(true);
    const isCorrect = selectedWord === correctAnswer;
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

  // Replace ___ with a placeholder or the selected word
  const sentenceParts = sentence.split('|||');
  const enSentence = sentenceParts[0] || sentence;
  const arTranslation = sentenceParts[1] || '';

  const parts = enSentence.split('___');

  return (
    <div className="space-y-8 md:space-y-12 py-4 md:py-6 font-sans">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <div 
          className="text-2xl md:text-4xl font-bold text-gray-900 text-center leading-loose md:leading-relaxed flex flex-wrap justify-center gap-x-2 gap-y-3 px-2"
          dir="ltr"
        >
          {parts[0]}
          <motion.span 
            className={`min-w-[100px] md:min-w-[120px] border-b-4 px-2 md:px-4 pb-1 transition-all inline-block ${
              isAnswered 
                ? (selectedWord === correctAnswer ? 'text-green-500 border-green-500' : 'text-red-500 border-red-500')
                : 'text-primary border-primary'
            }`}
          >
            {selectedWord || '...'}
          </motion.span>
          {parts[1]}
        </div>
        
        {arTranslation && (
          <div className="text-xl md:text-2xl text-gray-500 font-medium text-center" dir="rtl">
            {arTranslation}
          </div>
        )}
        
        <button 
          onClick={() => speak(enSentence.replace('___', correctAnswer))}
          className="p-4 bg-gray-100 text-gray-400 rounded-2xl hover:text-primary transition-all"
        >
          <Volume2 size={32} />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {shuffledOptions.map((option) => (
          <motion.button
            key={option}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isAnswered}
            onClick={() => handleSelect(option)}
            className={`p-4 rounded-2xl font-bold text-xl border-2 transition-all ${
              selectedWord === option 
                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                : 'bg-white border-gray-100 text-gray-700 hover:border-gray-300'
            } ${isAnswered ? 'opacity-50 grayscale' : ''}`}
            dir="ltr"
          >
            {option}
          </motion.button>
        ))}
      </div>

      {!isAnswered && (
        <div className="flex justify-center pt-8">
          <button
            disabled={!selectedWord}
            onClick={handleCheck}
            className="px-12 py-4 bg-gray-900 text-white rounded-2xl font-black text-xl disabled:opacity-50 transition-all shadow-xl"
          >
            تحقق من الإجابة
          </button>
        </div>
      )}
    </div>
  );
}
