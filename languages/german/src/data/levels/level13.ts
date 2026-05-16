import { LessonItem, QuizQuestion } from '../types';

export const level13Hobbies: LessonItem[] = [
  { id: '1', title: 'Lesen', translation: 'القراءة', emoji: '📖', audioWord: 'Ich lese ein Buch' },
  { id: '2', title: 'Schwimmen', translation: 'السباحة', emoji: '🏊', audioWord: 'Ich gehe schwimmen' },
  { id: '3', title: 'Fußball spielen', translation: 'لعب كرة القدم', emoji: '⚽', audioWord: 'Wir spielen Fußball' },
  { id: '4', title: 'Kochen', translation: 'الطبخ', emoji: '🍳', audioWord: 'Er kocht gerne' },
  { id: '5', title: 'Reisen', translation: 'السفر', emoji: '✈️', audioWord: 'Reisen macht Spaß' },
  { id: '6', title: 'Singen', translation: 'الغناء', emoji: '🎤', audioWord: 'Sie singt schön' },
  { id: '7', title: 'Tanzen', translation: 'الرقص', emoji: '💃', audioWord: 'Wir tanzen zusammen' },
  { id: '8', title: 'Malen', translation: 'الرسم', emoji: '🎨', audioWord: 'Ein Bild malen' },
  { id: '9', title: 'Musik hören', translation: 'الاستماع للموسيقى', emoji: '🎧', audioWord: 'Ich höre gerne Musik' },
  { id: '10', title: 'Wandern', translation: 'التنزه مشياً', emoji: '🥾', audioWord: 'Wandern in den Bergen' },
  { id: '11', title: 'Fotografieren', translation: 'التصوير الفوتوغرافي', emoji: '📸', audioWord: 'Ich fotografiere die Natur' },
  { id: '12', title: 'Radfahren', translation: 'ركوب الدراجة', emoji: '🚲', audioWord: 'Er fährt jeden Tag Rad' },
  { id: '13', title: 'Gärtnern', translation: 'البستنة', emoji: '🌻', audioWord: 'Gärtnern entspannt mich' },
];

export const level13Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى "Lesen"؟',
    options: ['القراءة', 'الطبخ', 'السفر', 'السباحة'],
    answer: 'القراءة'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'أي منها هواية رياضية؟',
    options: ['Schwimmen', 'Malen', 'Lesen', 'Kochen'],
    answer: 'Schwimmen'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Reisen',
    frontText: 'Reisen',
    backText: 'السفر',
    answer: 'السفر'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'ما معنى "Wandern"؟',
    options: ['التنزه مشياً', 'السباحة', 'الرقص', 'الغناء'],
    answer: 'التنزه مشياً'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'ماذا تستخدم للـ "Fotografieren"؟',
    options: ['Kamera', 'Buch', 'Fahrrad', 'Klavier'],
    answer: 'Kamera'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "الرقص":',
    wordWithBlank: 'Tanz_n',
    translation: 'الرقص',
    options: ['e', 'a', 'o', 'i'],
    answer: 'e'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق الهوايات',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Radfahren', matchId: '1m' },
      { id: '1m', text: 'ركوب الدراجة', matchId: '1' },
      { id: '2', text: 'Musik hören', matchId: '2m' },
      { id: '2m', text: 'سماع الموسيقى', matchId: '2' },
      { id: '3', text: 'Malen', matchId: '3m' },
      { id: '3m', text: 'الرسم', matchId: '3' }
    ]
  }
];
