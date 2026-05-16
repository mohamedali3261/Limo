import { motion } from 'motion/react';
import { Trophy, Zap, RotateCcw } from 'lucide-react';
import { CompletionModel } from '../../common/CompletionModel';
import { GameState } from './types';

interface GameOverProps {
  gameState: GameState;
  score: number;
  startGame: () => void;
  setGameState: (state: GameState) => void;
}

export function GameOver({ gameState, score, startGame, setGameState }: GameOverProps) {
  return (
    <div className="absolute inset-0 z-[60] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center">
      {gameState === 'win' && (
        <div className="mb-6">
          <CompletionModel />
        </div>
      )}
      <motion.div 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        transition={{ type: 'spring', bounce: 0.5 }} 
        className={`w-32 h-32 rounded-[3rem] flex items-center justify-center text-white shadow-2xl mb-8 ${
          gameState === 'win' 
            ? 'bg-gradient-to-br from-green-400 to-emerald-500 shadow-green-500/30 hidden' 
            : 'bg-gradient-to-br from-red-400 to-rose-500 shadow-red-500/30'
        }`}
      >
        {gameState === 'win' ? <Trophy size={64} /> : <Zap size={64} />}
      </motion.div>
      <h1 className="text-5xl font-black text-slate-900 mb-4">
        {gameState === 'win' ? 'عمل رائع!' : 'انتهى الوقت!'}
      </h1>
      <p className="text-slate-500 font-bold mb-10 text-xl">
        أتممت المحادثة بمجموع نقاط <span className="text-indigo-600 text-2xl ml-1">{score}</span>
      </p>
      
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button 
          onClick={startGame} 
          className="w-full bg-slate-900 text-white py-5 rounded-3xl font-black text-xl shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 active:scale-95 hover:scale-105 transition-all"
        >
          <RotateCcw size={24} />
          إعادة اللعب
        </button>
        <button 
          onClick={() => setGameState('lobby')} 
          className="w-full bg-slate-100 text-slate-600 py-4 rounded-3xl font-black hover:bg-slate-200 transition-all"
        >
          العودة للرئيسية
        </button>
      </div>
    </div>
  );
}
