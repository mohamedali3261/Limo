export interface LessonDetail {
  spanish: string; // The target word or sentence
  arabic: string;  // Translation
  type?: 'flashcard' | 'multiple_choice' | 'match' | 'listening' | 'arabic_to_spanish' | 'arrange' | 'arrange_ar' | 'true_false' | 'fill_blank';
  options?: { text: string; correct: boolean }[]; // For multiple choice
  matchPairs?: { spanish: string; arabic: string }[]; // For match game
  arrangeWords?: string[]; // Scattered words for sentence arrangement
  isTrue?: boolean; // For true_false
  correctArabic?: string; // Optional real meaning if isTrue is false
  sentence?: string; // For fill_blank - the sentence with blank
  answer?: string; // For fill_blank - the correct answer
  fillBlankOptions?: string[]; // For fill_blank - 4 options to choose from
}

export interface Lesson {
  id: string;
  title: string;
  details: LessonDetail[];
}

export interface Unit {
  id: string;
  title: string;
  description: string;
  theme: {
    bg: string;
    text: string;
    border: string;
    lightBg: string;
    shadow: string;
  };
  lessons: Lesson[];
}

export interface CultureCard {
  id: string;
  title: string;
  content: string;
  image?: string;
  emoji: string;
}

export interface ScenarioStep {
  text: string;
  speaker: 'user' | 'bot';
  options?: { text: string; correct: boolean; translation: string }[];
  translation?: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  emoji: string;
  steps: ScenarioStep[];
}
