export interface GrammarTip {
 title: string;
 content: string;
}

export interface LessonItem {
  id: string;
  title: string; // letter or word or phrase
  subtitle?: string; // word or translation
  translation: string;
  icon?: string; // Lucide icon name
  emoji?: string; // Legacy support
  audioLetter?: string;
  audioWord: string;
  grammarTip?: GrammarTip;
}

export type QuizType = 'multiple_choice' | 'fill_in_blank' | 'flashcard' | 'memory_game' | 'sentence_builder';

export interface QuizQuestion {
 id: number;
 type: QuizType;
 question: string;
 options?: string[];
 answer: string;
 audioText?: string;
 frontText?: string;
 backText?: string;
 memoryPairs?: { id: string; text: string; matchId: string }[];
 wordWithBlank?: string;
 translation?: string;
}

export interface MapLevel {
  id: number;
  title: string;
  description: string;
  type: 'lesson' | 'quiz' | 'boss';
  color: string;
  dataId: string;
  icon?: string; // Lucide icon name
  emoji?: string; // Legacy support
}

export interface DialogLine {
  id: number;
  speaker: string;
  speakerId: number;
  german: string;
  arabicTranslation: string;
  arabicPronunciation: string;
}

export interface Conversation {
  id: string;
  title: string;
  icon: string;
  description: string;
  dialog: DialogLine[];
  quizQuestions?: QuizQuestion[];
}

export interface CourseUnit {
 id: number;
 title: string;
 description: string;
 color: string;
 levels: MapLevel[];
}
