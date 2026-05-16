import { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';

export const MatchGame = ({ pairs, onAllMatched, onWrongMatch }: { pairs: any[], onAllMatched: () => void, onWrongMatch: () => void }) => {
  const [leftItems, setLeftItems] = useState(pairs.map((p: any) => ({text: p.left, id: p.id, r: Math.random()})));
  const [rightItems, setRightItems] = useState(pairs.map((p: any) => ({text: p.right, id: p.id, r: Math.random()})));
  
  const playSound = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Extract French word from left item (remove emoji and extra text)
  const extractFrenchWord = (text: string) => {
    return text.split(' ')[0]; // Get first word before emoji
  };
  
  useEffect(() => {
    setLeftItems(prev => [...prev].sort((a, b) => a.r - b.r));
    setRightItems(prev => [...prev].sort((a, b) => a.r - b.r));
  }, [pairs]);

  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [selectedRight, setSelectedRight] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [errorId, setErrorId] = useState<'left'|'right'|null>(null);

  const checkMatch = (lId: number, rId: number) => {
    if (lId === rId) {
      setMatched(prev => {
        const newMatched = [...prev, lId];
        if (newMatched.length === pairs.length) {
          setTimeout(onAllMatched, 500);
        }
        return newMatched;
      });
      setSelectedLeft(null);
      setSelectedRight(null);
      new Audio('https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3').play().catch(() => {});
    } else {
      setSelectedLeft(null);
      setSelectedRight(null);
      setErrorId('left');
      onWrongMatch();
      new Audio('https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3').play().catch(() => {});
    }
  };

  const handleLeft = (id: number) => {
    if (matched.includes(id)) return;
    setErrorId(null);
    setSelectedLeft(id);
    if (selectedRight !== null) checkMatch(id, selectedRight);
  };

  const handleRight = (id: number) => {
    if (matched.includes(id)) return;
    setErrorId(null);
    setSelectedRight(id);
    if (selectedLeft !== null) checkMatch(selectedLeft, id);
  };

  return (
    <div className="flex gap-4 w-full">
      <div className="flex-1 flex flex-col gap-3">
        {leftItems.map(item => {
          const isMatched = matched.includes(item.id);
          const isSel = selectedLeft === item.id;
          const frenchWord = extractFrenchWord(item.text);
          return (
            <button 
              key={item.r} 
              onClick={() => {
                playSound(frenchWord);
                handleLeft(item.id);
              }}
              disabled={isMatched}
              className={`p-4 rounded-xl border-2 font-bold text-lg md:text-xl transition-all ${
                isMatched ? 'bg-green-50 border-green-200 text-green-300 opacity-50 cursor-default' 
                : isSel ? 'bg-sky-50 border-sky-400 text-sky-700' 
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 border-b-4 active:scale-95'
              }`}
            >
              {item.text}
            </button>
          )
        })}
      </div>
      <div className="flex-1 flex flex-col gap-3">
        {rightItems.map(item => {
          const isMatched = matched.includes(item.id);
          const isSel = selectedRight === item.id;
          return (
            <button key={item.r} onClick={() => handleRight(item.id)} disabled={isMatched}
              className={`p-4 rounded-xl border-2 font-bold text-lg md:text-xl transition-all ${
                isMatched ? 'bg-green-50 border-green-200 text-green-300 opacity-50 cursor-default' 
                : isSel ? 'bg-sky-50 border-sky-400 text-sky-700' 
                : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700 border-b-4 active:scale-95'
              }`}>
              {item.text}
            </button>
          )
        })}
      </div>
    </div>
  );
};
