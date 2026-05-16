import { LessonDetail } from '../types';

export interface ConversationLine {
  speaker: 'A' | 'B';
  speakerNameEs: string;
  speakerNameAr: string;
  spanish: string;
  arabicTranslation: string;
  arabicPronunciation: string;
}

export interface ConversationScenario {
  id: string;
  arabicTitle: string;
  description: string;
  lines: ConversationLine[];
  quiz?: LessonDetail[];
}
