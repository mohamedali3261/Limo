export interface FallingWord {
  id: number;
  text: string;
  index: number;
  x: number;
  initialY: number;
  duration: number;
  rotation: number;
}

export interface DialogueLine {
  speaker: 'A' | 'B';
  en: string;
  ar: string;
}

export interface Conversation {
  id: string;
  name: string;
  lines: DialogueLine[];
  level?: number; // المستوى المطلوب لفتح هذا الموضوع
}

export interface GameLevel {
  id: number;
  name: string;
  speedBase: number;
  timeLimit: number;
  lives: number;
}

export interface ConversationProgress {
  [conversationId: string]: {
    completed: boolean;
    bestScore: number;
    stars: number;
  };
}

export type GameState = 'lobby' | 'playing' | 'gameover' | 'win';
