import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Star, Lock, ChevronRight } from 'lucide-react';
import { kidsGameLevels } from '../../../data/kids/levels';
import confetti from 'canvas-confetti';

type MatchItem = {
  id: string;
  word: string;
  emoji: string;
  color: string;
};

type Connection = {
  wordId: string;
  emojiId: string;
};

export default function MatchingGame() {
  const [currentLevelId, setCurrentLevelId] = useState<number | null>(null);
  const [unlockedLevels, setUnlockedLevels] = useState(() => parseInt(localStorage.getItem('matching-unlocked-level') || '1', 10));
  
  const [items, setItems] = useState<MatchItem[]>([]);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [points, setPoints] = useState(() => parseInt(localStorage.getItem('kids-points') || '0', 10));
  const [wrongAttempt, setWrongAttempt] = useState(false);

  useEffect(() => {
    localStorage.setItem('kids-points', points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem('matching-unlocked-level', unlockedLevels.toString());
  }, [unlockedLevels]);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = 0.8;
      window.speechSynthesis.speak(u);
    }
  };

  const startNewGame = (levelId?: number) => {
    const targetLevelId = levelId || currentLevelId;
    if (!targetLevelId) return;

    const levelData = kidsGameLevels.find(l => l.id === targetLevelId)?.data || [];
    const shuffled = [...levelData].sort(() => 0.5 - Math.random()).slice(0, 6);
    
    const gameItems: MatchItem[] = shuffled.map(item => ({
      id: item.name,
      word: item.name,
      emoji: item.emoji,
      color: item.color || 'bg-blue-100 text-blue-600 border-blue-200'
    }));

    setItems(gameItems);
    setSelectedWord(null);
    setSelectedEmoji(null);
    setConnections([]);
    setMatchedIds([]);
    setCurrentLevelId(targetLevelId);
    setWrongAttempt(false);
  };

  const handleWordClick = (wordId: string) => {
    if (matchedIds.includes(wordId)) return;
    
    const item = items.find(i => i.id === wordId);
    if (item) {
      speak(item.word);
    }
    
    setSelectedWord(wordId);
    
    if (selectedEmoji) {
      checkMatch(wordId, selectedEmoji);
    }
  };

  const handleEmojiClick = (emojiId: string) => {
    if (matchedIds.includes(emojiId)) return;
    
    setSelectedEmoji(emojiId);
    
    if (selectedWord) {
      checkMatch(selectedWord, emojiId);
    }
  };

  const checkMatch = (wordId: string, emojiId: string) => {
    if (wordId === emojiId) {
      // Correct match!
      setConnections(prev => [...prev, { wordId, emojiId }]);
      setMatchedIds(prev => [...prev, wordId]);
      setPoints(p => p + 10);
      speak('Correct!');
      
      // Celebration animation
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      // Wrong match
      setWrongAttempt(true);
      speak('Try again!');
      setTimeout(() => setWrongAttempt(false), 500);
    }
    
    setSelectedWord(null);
    setSelectedEmoji(null);
  };

  useEffect(() => {
    if (matchedIds.length === items.length && items.length > 0) {
      // Level complete - big celebration
      const duration = 2000;
      const animationEnd = Date.now() + duration;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 100 * (timeLeft / duration);
        
        confetti({
          particleCount,
          startVelocity: 40,
          spread: 360,
          origin: { x: 0.5, y: 0.5 },
          colors: ['#FF6B00', '#FFD700', '#FF1493', '#00CED1', '#32CD32']
        });
      }, 200);

      speak('You won! Great job!');
      if (currentLevelId && currentLevelId >= unlockedLevels) {
        setUnlockedLevels(currentLevelId + 1);
      }
    }
  }, [matchedIds, items, currentLevelId, unlockedLevels]);

  if (currentLevelId === null) {
    return (
      <div className="max-w-5xl mx-auto space-y-8 pb-20 px-4 pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/kids" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <ArrowLeft size={24} className="text-gray-700" />
            </Link>
            <h1 className="text-3xl font-black text-gray-900">مستويات لعبة التوصيل</h1>
          </div>
          <div className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full font-black flex items-center gap-2">
            <Star className="fill-yellow-500 text-yellow-500" size={20} />
            <span>{points} نقطة</span>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 font-medium">اضغط على الكلمة ثم اضغط على الصورة المناسبة لها!</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-8">
           {kidsGameLevels.map((level) => {
             const isUnlocked = level.id <= unlockedLevels;
             return (
               <motion.button
                 key={level.id}
                 whileHover={isUnlocked ? { scale: 1.05 } : {}}
                 whileTap={isUnlocked ? { scale: 0.95 } : {}}
                 onClick={() => isUnlocked && startNewGame(level.id)}
                 className={`relative w-full aspect-square rounded-[2rem] border-4 flex flex-col items-center justify-center p-4 transition-all ${
                   isUnlocked 
                    ? 'bg-purple-50 border-purple-200 text-purple-600 cursor-pointer shadow-sm hover:shadow-md' 
                    : 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                 }`}
               >
                 <div className="text-3xl font-black mb-2">{level.id}</div>
                 <div className="text-sm font-bold text-center opacity-80">{level.name}</div>
                 {!isUnlocked && (
                   <div className="absolute top-3 right-3 text-gray-300">
                     <Lock size={20} />
                   </div>
                 )}
               </motion.button>
             );
           })}
        </div>
      </div>
    );
  }

  // Shuffle emojis for display
  const shuffledEmojis = [...items].sort(() => 0.5 - Math.random());

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-20 px-4 pt-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => setCurrentLevelId(null)} className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
            <ArrowLeft size={24} className="text-gray-700" />
          </button>
          <h1 className="text-3xl font-black text-gray-900">المستوى {currentLevelId}</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full font-black flex items-center gap-2">
            <Star className="fill-yellow-500 text-yellow-500" size={20} />
            <span>{points} نقطة</span>
          </div>
          <button 
            onClick={() => startNewGame()}
            className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full font-bold flex items-center gap-2 hover:bg-purple-200"
          >
            <RefreshCw size={20} />
            <span className="hidden sm:inline">إعادة اللعب</span>
          </button>
        </div>
      </div>

      <div className="text-center mb-4">
        <p className="text-lg text-gray-600 font-medium">اضغط على الكلمة ثم اضغط على الصورة المناسبة!</p>
      </div>

      <motion.div 
        animate={wrongAttempt ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="grid md:grid-cols-2 gap-8 mt-8"
      >
        {/* Words Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-gray-800 text-center mb-6">الكلمات</h2>
          {items.map((item) => {
            const isMatched = matchedIds.includes(item.id);
            const isSelected = selectedWord === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => handleWordClick(item.id)}
                disabled={isMatched}
                whileHover={!isMatched ? { scale: 1.05 } : {}}
                whileTap={!isMatched ? { scale: 0.95 } : {}}
                className={`w-full p-6 rounded-3xl border-4 font-black text-2xl transition-all ${
                  isMatched 
                    ? 'bg-green-100 text-green-600 border-green-400 opacity-50 cursor-not-allowed' 
                    : isSelected
                    ? 'bg-purple-500 text-white border-purple-600 shadow-lg scale-105'
                    : 'bg-white text-gray-800 border-gray-200 hover:border-purple-300 hover:shadow-md cursor-pointer'
                }`}
              >
                <span className="capitalize" dir="ltr">{item.word}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Emojis Column */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-gray-800 text-center mb-6">الصور</h2>
          {shuffledEmojis.map((item) => {
            const isMatched = matchedIds.includes(item.id);
            const isSelected = selectedEmoji === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => handleEmojiClick(item.id)}
                disabled={isMatched}
                whileHover={!isMatched ? { scale: 1.05 } : {}}
                whileTap={!isMatched ? { scale: 0.95 } : {}}
                className={`w-full p-6 rounded-3xl border-4 text-6xl transition-all flex items-center justify-center ${
                  isMatched 
                    ? 'bg-green-100 border-green-400 opacity-50 cursor-not-allowed' 
                    : isSelected
                    ? 'bg-purple-500 border-purple-600 shadow-lg scale-105'
                    : 'bg-white border-gray-200 hover:border-purple-300 hover:shadow-md cursor-pointer'
                }`}
              >
                {item.emoji}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {matchedIds.length === items.length && items.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mt-12"
        >
          <button
             onClick={() => {
               if (currentLevelId && currentLevelId < kidsGameLevels.length) {
                 startNewGame(currentLevelId + 1);
               } else {
                 setCurrentLevelId(null);
               }
             }}
             className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-black text-xl flex items-center gap-3 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
             {currentLevelId === kidsGameLevels.length ? 'انتهت اللعبة! العودة للرئيسية' : 'المستوى التالي'}
             <ChevronRight size={28} />
          </button>
        </motion.div>
      )}
    </div>
  );
}
