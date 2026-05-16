import { LessonItem, QuizQuestion } from '../types';

export const level16Transport: LessonItem[] = [
  { id: '1', title: 'Das Fahrrad', translation: 'الدراجة الهوائية', emoji: '🚲', audioWord: 'Ich fahre Fahrrad' },
  { id: '2', title: 'Der Bus', translation: 'الحافلة', emoji: '🚌', audioWord: 'Der Bus kommt spät' },
  { id: '3', title: 'Der Zug', translation: 'القطار', emoji: '🚆', audioWord: 'Der Zug fährt ab' },
  { id: '4', title: 'Das Flugzeug', translation: 'الطائرة', emoji: '✈️', audioWord: 'Das Flugzeug fliegt' },
  { id: '5', title: 'Das Ticket', translation: 'التذكرة', emoji: '🎫', audioWord: 'Ein Ticket kaufen' },
  { id: '6', title: 'Die Haltestelle', translation: 'الموقف / المحطة', emoji: '🚏', audioWord: 'An der Haltestelle warten' },
  { id: '7', title: 'Fahren', translation: 'يقود / يسافر (بمركبة)', emoji: '🚗', audioWord: 'Wir fahren nach Berlin' },
  { id: '8', title: 'Fliegen', translation: 'يطير', emoji: '🦅', audioWord: 'Vögel können fliegen' },
  { id: '9', title: 'Das Auto', translation: 'السيارة', emoji: '🚗', audioWord: 'Das Auto ist neu' },
  { id: '10', title: 'Das Schiff', translation: 'السفينة', emoji: '🚢', audioWord: 'Das Schiff ist im Hafen' },
  { id: '11', title: 'Die U-Bahn', translation: 'مترو الأنفاق', emoji: '🚇', audioWord: 'Wir nehmen die U-Bahn' },
  { id: '12', title: 'Der Bahnhof', translation: 'المحطة', emoji: '🚉', audioWord: 'Der Zug hält am Bahnhof' },
  { id: '13', title: 'Reisen', translation: 'السفر', emoji: '🧳', audioWord: 'Ich liebe es zu reisen' },
  { id: '14', title: 'Zu Fuß gehen', translation: 'المشي على الأقدام', emoji: '🚶', audioWord: 'Ich gehe zu Fuß zur Schule' },
];

export const level16Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى "Das Flugzeug"؟',
    options: ['الطائرة', 'القطار', 'الحافلة', 'الدراجة'],
    answer: 'الطائرة'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'نحتاج للسفر بالقطار إلى:',
    options: ['Das Ticket', 'Der Park', 'Die Sonne', 'Der Kopf'],
    answer: 'Das Ticket'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Der Bus',
    frontText: 'Der Bus',
    backText: 'الحافلة',
    answer: 'الحافلة'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'ماذا نسمي مترو الأنفاق؟',
    options: ['Die U-Bahn', 'Der Bus', 'Das Schiff', 'Das Flugzeug'],
    answer: 'Die U-Bahn'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'ما معنى "Das Schiff"؟',
    options: ['السفينة', 'السيارة', 'القطار', 'الطائرة'],
    answer: 'السفينة'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "تذكرة":',
    wordWithBlank: 'Tick_t',
    translation: 'تذكرة',
    options: ['e', 'i', 'a', 'o'],
    answer: 'e'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق وسائل المواصلات',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Zug', matchId: '1m' },
      { id: '1m', text: 'قطار', matchId: '1' },
      { id: '2', text: 'Auto', matchId: '2m' },
      { id: '2m', text: 'سيارة', matchId: '2' },
      { id: '3', text: 'Bahnhof', matchId: '3m' },
      { id: '3m', text: 'محطة', matchId: '3' }
    ]
  }
];
