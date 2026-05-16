import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, RefreshCw, Star, Play, Lock, ChevronRight } from 'lucide-react';
import { kidsGameLevels } from '../../../data/kids/levels';
import confetti from 'canvas-confetti';

type CardItem = {
  id: string;
  matchId: string;
  type: 'emoji' | 'text';
  content: string;
  color: string;
};

export default function MemoryGame() {
  const [currentLevelId, setCurrentLevelId] = useState<number | null>(null);
  const [unlockedLevels, setUnlockedLevels] = useState(() => parseInt(localStorage.getItem('memory-unlocked-level') || '1', 10));
  
  const [cards, setCards] = useState<CardItem[]>([]);
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [points, setPoints] = useState(() => parseInt(localStorage.getItem('kids-points') || '0', 10));

  useEffect(() => {
    localStorage.setItem('kids-points', points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem('memory-unlocked-level', unlockedLevels.toString());
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
    const gameCards: CardItem[] = [];
    
    shuffled.forEach(item => {
      gameCards.push({
        id: item.name + '-emoji',
        matchId: item.name,
        type: 'emoji',
        content: item.emoji,
        color: item.color || 'bg-blue-100 text-blue-600 border-blue-200'
      });
      gameCards.push({
        id: item.name + '-text',
        matchId: item.name,
        type: 'text',
        content: item.name,
        color: item.color || 'bg-blue-100 text-blue-600 border-blue-200'
      });
    });

    setCards(gameCards.sort(() => 0.5 - Math.random()));
    setFlippedIds([]);
    setMatchedIds([]);
    setCurrentLevelId(targetLevelId);
  };

  const handleFlip = (idx: number) => {
    const cardId = cards[idx].id;
    if (flippedIds.includes(cardId) || matchedIds.includes(cards[idx].matchId) || flippedIds.length >= 2) return;

    if (cards[idx].type === 'text') {
       speak(cards[idx].content);
    }

    const newFlipped = [...flippedIds, cardId];
    setFlippedIds(newFlipped);

    if (newFlipped.length === 2) {
      const card1 = cards.find(c => c.id === newFlipped[0])!;
      const card2 = cards.find(c => c.id === newFlipped[1])!;

      if (card1.matchId === card2.matchId) {
        setTimeout(() => {
          setMatchedIds(prev => [...prev, card1.matchId]);
          setFlippedIds([]);
          setPoints(p => p + 5);
          speak('Match!');
        }, 800);
      } else {
        setTimeout(() => {
          setFlippedIds([]);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (matchedIds.length === 6 && cards.length > 0) {
      // Fireworks effect - burst from center
      const duration = 2000;
      const animationEnd = Date.now() + duration;

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 100 * (timeLeft / duration);
        
        // Burst from center
        confetti({
          particleCount,
          startVelocity: 40,
          spread: 360,
          origin: { x: 0.5, y: 0.5 },
          colors: ['#FF6B00', '#FFD700', '#FF1493', '#00CED1', '#32CD32']
        });
      }, 200);

      speak('You won!');
      if (currentLevelId && currentLevelId >= unlockedLevels) {
        setUnlockedLevels(currentLevelId + 1);
      }
    }
  }, [matchedIds, cards, currentLevelId, unlockedLevels]);

  if (currentLevelId === null) {
    return (
      <div className="max-w-5xl mx-auto space-y-8 pb-20 px-4 pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/kids" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <ArrowLeft size={24} className="text-gray-700" />
            </Link>
            <h1 className="text-3xl font-black text-gray-900">مستويات لعبة الذاكرة</h1>
          </div>
          <div className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full font-black flex items-center gap-2">
            <Star className="fill-yellow-500 text-yellow-500" size={20} />
            <span>{points} نقطة</span>
          </div>
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
                    ? 'bg-blue-50 border-blue-200 text-blue-600 cursor-pointer shadow-sm hover:shadow-md' 
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

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20 px-4 pt-8">
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
            className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-bold flex items-center gap-2 hover:bg-blue-200"
          >
            <RefreshCw size={20} />
            <span className="hidden sm:inline">إعادة اللعب</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mt-8">
        {cards.map((card, idx) => {
          const isFlipped = flippedIds.includes(card.id) || matchedIds.includes(card.matchId);
          const isMatchingPair = flippedIds.length === 2 && 
                                 cards.find(c => c.id === flippedIds[0])?.matchId === cards.find(c => c.id === flippedIds[1])?.matchId;
          const isMatched = matchedIds.includes(card.matchId) || (isMatchingPair && flippedIds.includes(card.id));
          
          return (
            <div 
              key={card.id} 
              onClick={() => handleFlip(idx)}
              className="relative w-full aspect-square cursor-pointer"
            >
              <motion.div
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full relative"
              >
                {/* Back of Card (Hidden side initially) */}
                <div 
                  className={`absolute w-full h-full backface-hidden rounded-3xl border-4 ${isMatched ? 'bg-green-100 text-green-600 border-green-500' : card.color} flex items-center justify-center p-4 shadow-sm transition-colors duration-300`}
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  {card.type === 'emoji' ? (
                    <span className="text-5xl md:text-7xl lg:text-8xl">{card.content}</span>
                  ) : (
                    <span className="text-xl md:text-3xl lg:text-4xl font-black text-center capitalize" dir="ltr">{card.content}</span>
                  )}
                </div>

                {/* Front of Card (Visible initially) */}
                <div 
                  className="absolute w-full h-full backface-hidden rounded-3xl bg-blue-500 border-4 border-blue-400 shadow-md flex items-center justify-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <Star className="w-8 h-8 md:w-12 md:h-12 text-blue-300 opacity-50" />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {matchedIds.length === 6 && (
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
