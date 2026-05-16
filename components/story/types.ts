export interface Story {
  id: number;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  level?: number;
  thumbnail: string;
  xp_reward: number;
  is_completed: boolean;
  language?: string;
}

export interface Scene {
  id: number;
  story_id: number;
  character_name: string;
  content_en: string;
  content_ar: string;
  order_index: number;
  questions?: Question[];
}

export interface Question {
  id: number;
  type: 'multiple_choice' | 'typing' | 'sentence_scramble' | 'dictation';
  question_text: string;
  correct_answer: string;
  options?: string[];
}

export interface StoryProgress {
  [storyId: string]: {
    completed: boolean;
    bestScore?: number;
  };
}
