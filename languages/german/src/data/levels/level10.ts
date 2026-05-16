import { LessonItem, QuizQuestion } from '../types';

export const level10Adjectives: LessonItem[] = [
  { id: '1', title: 'Groß', translation: 'كبير', emoji: '🐘', audioWord: 'Ein großes Haus' },
  { id: '2', title: 'Klein', translation: 'صغير', emoji: '🐜', audioWord: 'Ein kleiner Hund' },
  { id: '3', title: 'Gut', translation: 'جيد', emoji: '👍', audioWord: 'Alles gut' },
  { id: '4', title: 'Schlecht', translation: 'سيء', emoji: '👎', audioWord: 'Das Wetter ist schlecht' },
  { id: '5', title: 'Schön', translation: 'جميل', emoji: '🌸', audioWord: 'Ein schönes Bild' },
  { id: '6', title: 'Hässlich', translation: 'قبيح', emoji: '👹', audioWord: 'Das ist hässlich' },
  { id: '7', title: 'Schnell', translation: 'سريع', emoji: '🚀', audioWord: 'Ein schnelles Auto' },
  { id: '8', title: 'Langsam', translation: 'بطيء', emoji: '🐌', audioWord: 'Eine langsame Schnecke' },
  { id: '9', title: 'Heiß', translation: 'ساخن', emoji: '🔥', audioWord: 'Der Kaffee ist heiß' },
  { id: '10', title: 'Kalt', translation: 'بارد', emoji: '❄️', audioWord: 'Das Wasser ist kalt' },
  { id: '11', title: 'Alt', translation: 'قديم / عجوز', emoji: '👴', audioWord: 'Ein altes Buch' },
  { id: '12', title: 'Neu', translation: 'جديد', emoji: '🆕', audioWord: 'Ein neues Handy' },
  { id: '13', title: 'Stark', translation: 'قوي', emoji: '💪', audioWord: 'Er ist sehr stark' },
];

export const level10Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى كلمة "Groß"؟',
    options: ['كبير', 'صغير', 'سريع', 'بطيء'],
    answer: 'كبير'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'ما معنى كلمة "Schnell"؟',
    options: ['سريع', 'بطيء', 'جميل', 'جيد'],
    answer: 'سريع'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Schön',
    frontText: 'Schön',
    backText: 'جميل',
    answer: 'جميل'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'عكس كلمة "Heiß" هو:',
    options: ['Kalt', 'Alt', 'Klein', 'Neu'],
    answer: 'Kalt'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'ما معنى "Neu"؟',
    options: ['جديد', 'قديم', 'ساخن', 'قوي'],
    answer: 'جديد'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "ساخن":',
    wordWithBlank: 'He_ß',
    translation: 'ساخن',
    options: ['i', 'a', 'o', 'e'],
    answer: 'i'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق الصفات',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Stark', matchId: '1m' },
      { id: '1m', text: 'قوي', matchId: '1' },
      { id: '2', text: 'Alt', matchId: '2m' },
      { id: '2m', text: 'قديم', matchId: '2' },
      { id: '3', text: 'Schlecht', matchId: '3m' },
      { id: '3m', text: 'سيء', matchId: '3' }
    ]
  }
];
