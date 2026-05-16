import { LessonItem, QuizQuestion } from '../types';

export const level24Sports: LessonItem[] = [
  { id: '1', title: 'Der Sport', translation: 'الرياضة', emoji: '⚽', audioWord: 'Ich treibe viel Sport' },
  { id: '2', title: 'Fußball', translation: 'كرة القدم', emoji: '⚽', audioWord: 'Fußball ist beliebt' },
  { id: '3', title: 'Basketball', translation: 'كرة السلة', emoji: '🏀', audioWord: 'Basketball spielen' },
  { id: '4', title: 'Tennis', translation: 'التنس', emoji: '🎾', audioWord: 'Tennis ist anstrengend' },
  { id: '5', title: 'Schwimmen', translation: 'السباحة', emoji: '🏊', audioWord: 'Schwimmen im See' },
  { id: '6', title: 'Laufen', translation: 'الجري', emoji: '🏃', audioWord: 'Laufen am Morgen' },
  { id: '7', title: 'Radfahren', translation: 'ركوب الدراجات', emoji: '🚲', audioWord: 'Radfahren macht Spaß' },
  { id: '8', title: 'Yoga', translation: 'اليوجا', emoji: '🧘', audioWord: 'Yoga zur Entspannung' },
  { id: '9', title: 'Das Training', translation: 'التدريب', emoji: '💪', audioWord: 'Hartes Training' },
  { id: '10', title: 'Die Mannschaft', translation: 'الفريق', emoji: '👥', audioWord: 'Unsere Mannschaft gewinnt' },
  { id: '11', title: 'Gewinnen', translation: 'يفوز', emoji: '🏆', audioWord: 'Wir werden gewinnen' },
  { id: '12', title: 'Verlieren', translation: 'يخسر', emoji: '🙁', audioWord: 'Niemand will verlieren' },
];

export const level24Quiz: QuizQuestion[] = [
  { id: 1, type: 'multiple_choice', question: 'ما معنى "Die Mannschaft"؟', options: ['الفريق', 'التدريب', 'اللعبة', 'المباراة'], answer: 'الفريق' },
  { id: 2, type: 'multiple_choice', question: 'كيف تقول "يفوز"؟', options: ['Gewinnen', 'Verlieren', 'Spielen', 'Laufen'], answer: 'Gewinnen' },
  { id: 3, type: 'flashcard', question: 'Schwimmen', frontText: 'Schwimmen', backText: 'السباحة', answer: 'السباحة' },
  { id: 4, type: 'memory_game', question: 'طابق الرياضات', answer: '', memoryPairs: [
    { id: '1a', text: 'Fußball', matchId: '1' }, { id: '1b', text: 'كرة قدم', matchId: '1' },
    { id: '2a', text: 'Laufen', matchId: '2' }, { id: '2b', text: 'جري', matchId: '2' },
    { id: '3a', text: 'Radfahren', matchId: '3' }, { id: '3b', text: 'ركوب دراجة', matchId: '3' }
  ]}
];
