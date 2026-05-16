import { LessonItem, QuizQuestion } from '../types';

export const level12Time: LessonItem[] = [
  { id: '1', title: 'Die Zeit', translation: 'الوقت', emoji: '⏰', audioWord: 'Wie spät ist es?' },
  { id: '2', title: 'Die Stunde', translation: 'الساعة (مدة)', emoji: '⏳', audioWord: 'Eine Stunde' },
  { id: '3', title: 'Der Tag', translation: 'اليوم', emoji: '☀️', audioWord: 'Ein schöner Tag' },
  { id: '4', title: 'Die Woche', translation: 'الأسبوع', emoji: '📅', audioWord: 'Nächste Woche' },
  { id: '5', title: 'Der Monat', translation: 'الشهر', emoji: '🗓️', audioWord: 'Diesen Monat' },
  { id: '6', title: 'Das Jahr', translation: 'السنة', emoji: '🎆', audioWord: 'Ein neues Jahr' },
  { id: '7', title: 'Früh', translation: 'مبكراً', emoji: '🌅', audioWord: 'Ich stehe früh auf' },
  { id: '8', title: 'Spät', translation: 'متأخراً', emoji: '🌙', audioWord: 'Es ist schon spät' },
  { id: '9', title: 'Heute', translation: 'اليوم (الآن)', emoji: '📅', audioWord: 'Heute ist Montag' },
  { id: '10', title: 'Morgen', translation: 'غداً', emoji: '⏭️', audioWord: 'Morgen habe ich Zeit' },
  { id: '11', title: 'Gestern', translation: 'أمس', emoji: '⏮️', audioWord: 'Gestern war ich müde' },
  { id: '12', title: 'Die Minute', translation: 'الدقيقة', emoji: '⏱️', audioWord: 'Warten Sie eine Minute' },
  { id: '13', title: 'Immer', translation: 'دائماً', emoji: '♾️', audioWord: 'Er ist immer glücklich' },
  { id: '14', title: 'Nie', translation: 'أبداً', emoji: '🚫', audioWord: 'Ich rauche nie' },
];

export const level12Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى كلمة "Der Tag"؟',
    options: ['اليوم', 'الساعة', 'الأسبوع', 'الشهر'],
    answer: 'اليوم'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'عكس كلمة "Früh" هو:',
    options: ['Spät', 'Gut', 'Schön', 'Groß'],
    answer: 'Spät'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Die Woche',
    frontText: 'Die Woche',
    backText: 'الأسبوع',
    answer: 'الأسبوع'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'ما معنى "Heute"؟',
    options: ['اليوم', 'غداً', 'أمس', 'دائماً'],
    answer: 'اليوم'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'عكس كلمة "Immer" (دائماً) هو:',
    options: ['Nie', 'Heute', 'Morgen', 'Spät'],
    answer: 'Nie'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "أمس":',
    wordWithBlank: 'Gest_rn',
    translation: 'أمس',
    options: ['e', 'i', 'a', 'u'],
    answer: 'e'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق كلمات الوقت',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Minute', matchId: '1m' },
      { id: '1m', text: 'دقيقة', matchId: '1' },
      { id: '2', text: 'Morgen', matchId: '2m' },
      { id: '2m', text: 'غداً', matchId: '2' },
      { id: '3', text: 'Jahr', matchId: '3m' },
      { id: '3m', text: 'سنة', matchId: '3' }
    ]
  }
];
