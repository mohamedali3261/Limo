import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';

interface ListeningSentenceProps {
  sentence: string;
  onComplete: (isCorrect: boolean) => void;
}

import { playSuccessSound } from '../../lib/audio';

export function ListeningSentence({ sentence, onComplete }: ListeningSentenceProps) {
  const [words, setWords] = useState<{ id: number; text: string }[]>([]);
  const [selectedWords, setSelectedWords] = useState<{ id: number; text: string }[]>([]);
  const [shuffledWords, setShuffledWords] = useState<{ id: number; text: string }[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const rawWords = sentence.split(' ').map((word, index) => ({ id: index, text: word }));
    setWords(rawWords);
    setShuffledWords([...rawWords].sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setIsFinished(false);
    speak();
  }, [sentence]);

  const speak = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(sentence);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleWordClick = (word: { id: number; text: string }) => {
    if (isFinished) return;
    
    setSelectedWords(prev => [...prev, word]);
    setShuffledWords(prev => prev.filter(w => w.id !== word.id));
    
    // Check if finished
    const newSelected = [...selectedWords, word];
    if (newSelected.length === words.length) {
      setIsFinished(true);
      const isCorrect = newSelected.map(w => w.text).join(' ') === sentence;
      if (isCorrect) playSuccessSound();
      onComplete(isCorrect);
    }
  };

  const handleRemoveClick = (word: { id: number; text: string }) => {
    if (isFinished) return;
    setSelectedWords(prev => prev.filter(w => w.id !== word.id));
    setShuffledWords(prev => [...prev, word].sort((a, b) => a.id - b.id));
  };

  const isCorrect = selectedWords.map(w => w.text).join(' ') === sentence;

  return (
    <div className="space-y-12 py-4">
      <div className="flex flex-col items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={speak}
          className="p-8 bg-primary text-white rounded-full shadow-xl shadow-primary/30"
        >
          <Volume2 size={48} />
        </motion.button>
        <p className="text-gray-400 font-bold">اسمع الجملة وجمع كلماتها بالترتيب</p>
      </div>

      <div className="min-h-[120px] p-6 bg-gray-50 rounded-[2rem] border-4 border-dashed border-gray-200 flex flex-wrap gap-3 items-center justify-center relative">
        <AnimatePresence mode="popLayout">
          {selectedWords.map((word) => (
            <motion.button
              key={`selected-${word.id}`}
              layoutId={`word-${word.id}`}
              onClick={() => handleRemoveClick(word)}
              className={`px-6 py-3 rounded-2xl font-bold text-xl shadow-sm border-2 ${
                isFinished 
                  ? (isCorrect ? 'bg-green-500 text-white border-green-600' : 'bg-red-500 text-white border-red-600')
                  : 'bg-white border-gray-100 text-gray-700'
              }`}
              dir="ltr"
            >
              {word.text}
            </motion.button>
          ))}
        </AnimatePresence>
        
        {isFinished && (
           <motion.div 
             initial={{ scale: 0 }} 
             animate={{ scale: 1 }}
             className="absolute -top-6 bg-white rounded-full p-2 shadow-lg"
           >
             {isCorrect ? <CheckCircle2 className="text-green-500" size={32} /> : <XCircle className="text-red-500" size={32} />}
           </motion.div>
        )}
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <AnimatePresence mode="popLayout">
          {shuffledWords.map((word) => (
            <motion.button
              key={`shuffled-${word.id}`}
              layoutId={`word-${word.id}`}
              onClick={() => handleWordClick(word)}
              className="px-6 py-3 bg-white border-2 border-gray-100 rounded-2xl font-bold text-xl text-gray-700 shadow-sm hover:border-primary transition-colors"
              dir="ltr"
            >
              {word.text}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <button 
          onClick={() => {
            setShuffledWords([...words].sort(() => Math.random() - 0.5));
            setSelectedWords([]);
            setIsFinished(false);
          }}
          className="flex items-center gap-2 text-gray-400 font-bold hover:text-gray-900 transition-colors"
        >
          <RotateCcw size={18} /> إعادة المحاولة
        </button>
      </div>
    </div>
  );
}
