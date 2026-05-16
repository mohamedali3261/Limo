import { LessonItem, QuizQuestion } from '../types';

export const level14Weather: LessonItem[] = [
  { id: '1', title: 'Die Sonne', translation: 'الشمس', emoji: '☀️', audioWord: 'Die Sonne scheint' },
  { id: '2', title: 'Der Regen', translation: 'المطر', emoji: '🌧️', audioWord: 'Es regnet heute' },
  { id: '3', title: 'Der Schnee', translation: 'الثلج', emoji: '❄️', audioWord: 'Im Winter schneit es' },
  { id: '4', title: 'Der Wind', translation: 'الرياح', emoji: '💨', audioWord: 'Der Wind ist stark' },
  { id: '5', title: 'Die Wolke', translation: 'السحابة', emoji: '☁️', audioWord: 'Viele weiße Wolken' },
  { id: '6', title: 'Es ist heiß', translation: 'الجو حار', emoji: '🔥', audioWord: 'Im Sommer ist es heiß' },
  { id: '7', title: 'Es ist kalt', translation: 'الجو بارد', emoji: '🥶', audioWord: 'Heute ist es sehr kalt' },
  { id: '8', title: 'Das Wetter', translation: 'الطقس', emoji: '🌈', audioWord: 'Wie ist das Wetter?' },
  { id: '9', title: 'Der Nebel', translation: 'الضباب', emoji: '🌫️', audioWord: 'Vorsicht beim Fahren, es gibt Nebel' },
  { id: '10', title: 'Das Gewitter', translation: 'العاصفة الرعدية', emoji: '⛈️', audioWord: 'Morgen kommt ein Gewitter' },
  { id: '11', title: 'Der Regenbogen', translation: 'قوس قزح', emoji: '🌈', audioWord: 'Schau mal, ein Regenbogen!' },
  { id: '12', title: 'Es ist bewölkt', translation: 'الجو غائم', emoji: '☁️', audioWord: 'Heute ist es bewölkt' },
  { id: '13', title: 'Die Temperatur', translation: 'درجة الحرارة', emoji: '🌡️', audioWord: 'Wie hoch ist die Temperatur?' },
];

export const level14Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى "Der Regen"؟',
    options: ['المطر', 'الشمس', 'الثلج', 'الرياح'],
    answer: 'المطر'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'عندما تكون درجة الحرارة مرتفعة جداً نقول:',
    options: ['Es ist heiß', 'Es ist kalt', 'Es regnet', 'Es schneit'],
    answer: 'Es ist heiß'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Der Schnee',
    frontText: 'Der Schnee',
    backText: 'الثلج',
    answer: 'الثلج'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'ما معنى "Der Nebel"؟',
    options: ['الضباب', 'المطر', 'الرعد', 'البرق'],
    answer: 'الضباب'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'ماذا نسمي قوس قزح؟',
    options: ['Der Regenbogen', 'Das Wasser', 'Die Sonne', 'Der Wind'],
    answer: 'Der Regenbogen'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "غائم":',
    wordWithBlank: 'bew_lkt',
    translation: 'غائم',
    options: ['ö', 'u', 'i', 'e'],
    answer: 'ö'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق كلمات الطقس',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Gewitter', matchId: '1m' },
      { id: '1m', text: 'رعد وبرق', matchId: '1' },
      { id: '2', text: 'Kalt', matchId: '2m' },
      { id: '2m', text: 'بارد', matchId: '2' },
      { id: '3', text: 'Wind', matchId: '3m' },
      { id: '3m', text: 'رياح', matchId: '3' }
    ]
  }
];
