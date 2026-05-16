import { GameLevel } from '../types';

// مستويات صعوبة اللعبة
export const GAME_LEVELS: GameLevel[] = [
  { id: 1, name: 'هادئ', speedBase: 0.7, timeLimit: 100, lives: 5 },
  { id: 2, name: 'سريع', speedBase: 1.8, timeLimit: 80, lives: 3 },
  { id: 3, name: 'إعصار', speedBase: 3.2, timeLimit: 60, lives: 1 }
];
