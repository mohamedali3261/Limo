import { LessonItem, QuizQuestion } from '../types';

export const level28Shapes: LessonItem[] = [
  { id: '1', title: 'Der Kreis', translation: 'الدائرة', emoji: '⭕', audioWord: 'Ein runder Kreis' },
  { id: '2', title: 'Das Quadrat', translation: 'المربع', emoji: '⬛', audioWord: 'Ein Quadrat hat vier Ecken' },
  { id: '3', title: 'Das Dreieck', translation: 'المثلث', emoji: '🔺', audioWord: 'Ein Dreieck' },
  { id: '4', title: 'Das Rechteck', translation: 'المستطيل', emoji: '▮', audioWord: 'Ein Rechteck' },
  { id: '5', title: 'Der Punkt', translation: 'النقطة', emoji: '•', audioWord: 'Ein kleiner Punkt' },
  { id: '6', title: 'Die Linie', translation: 'الخط', emoji: '➖', audioWord: 'Eine gerade Linie' },
  { id: '7', title: 'Die Form', translation: 'الشكل', emoji: '💠', audioWord: 'Welche Form ist das?' },
  { id: '8', title: 'Rund', translation: 'دائري / مستدير', emoji: '🟡', audioWord: 'Die Erde ist rund' },
  { id: '9', title: 'Gerade', translation: 'مستقيم', emoji: '📏', audioWord: 'Ein gerader Strich' },
  { id: '10', title: 'Eckig', translation: 'زاوي / به زوايا', emoji: '⬜', audioWord: 'Ein Tisch ist oft eckig' },
  { id: '11', title: 'Breit', translation: 'عريض', emoji: '↔️', audioWord: 'Eine breite Straße' },
  { id: '12', title: 'Schmal', translation: 'ضيق / نحيف', emoji: '↕️', audioWord: 'Ein schmaler Weg' },
];

export const level28Quiz: QuizQuestion[] = [
  { id: 1, type: 'multiple_choice', question: 'ما معنى "Der Kreis"؟', options: ['الدائرة', 'المربع', 'المثلث', 'المستطيل'], answer: 'الدائرة' },
  { id: 2, type: 'multiple_choice', question: 'كيف تقول "المثلث"؟', options: ['Das Dreieck', 'Das Quadrat', 'Das Rechteck', 'Der Kreis'], answer: 'Das Dreieck' },
  { id: 3, type: 'flashcard', question: 'Rund', frontText: 'Rund', backText: 'مستدير', answer: 'مستدير' },
  { id: 4, type: 'memory_game', question: 'طابق الأشكال', answer: '', memoryPairs: [
    { id: '1a', text: 'Punkt', matchId: '1' }, { id: '1b', text: 'نقطة', matchId: '1' },
    { id: '2a', text: 'Linie', matchId: '2' }, { id: '2b', text: 'خط', matchId: '2' },
    { id: '3a', text: 'Quadrat', matchId: '3' }, { id: '3b', text: 'مربع', matchId: '3' }
  ]},
  {
    id: 5,
    type: 'multiple_choice',
    question: 'Translate to Arabic: "Ein Quadrat hat vier Ecken."',
    options: ['المربع له أربع زوايا', 'الدائرة مستديرة', 'المثلث له ثلاث زوايا', 'الخط مستقيم'],
    answer: 'المربع له أربع زوايا'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'ترجم للألمانية: "الدائرة مستديرة"',
    options: ['Der Kreis ist rund', 'Das Dreieck ist eckig', 'Die Linie ist breit', 'Der Punkt ist klein'],
    answer: 'Der Kreis ist rund'
  }
];
