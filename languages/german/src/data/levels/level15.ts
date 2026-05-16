import { LessonItem, QuizQuestion } from '../types';

export const level15Health: LessonItem[] = [
  { id: '1', title: 'Der Kopf', translation: 'الرأس', emoji: '👤', audioWord: 'Mein Kopf tut weh' },
  { id: '2', title: 'Die Hand', translation: 'اليد', emoji: '🤚', audioWord: 'Gib mir deine Hand' },
  { id: '3', title: 'Der Fuß', translation: 'القدم', emoji: '🦶', audioWord: 'Ich gehe zu Fuß' },
  { id: '4', title: 'Der Arzt', translation: 'الطبيب', emoji: '👨‍⚕️', audioWord: 'Ich muss zum Arzt' },
  { id: '5', title: 'Die Apotheke', translation: 'الصيدلية', emoji: '💊', audioWord: 'Wo ist eine Apotheke?' },
  { id: '6', title: 'Das Medikament', translation: 'الدواء', emoji: '🧪', audioWord: 'Nimm das Medikament' },
  { id: '7', title: 'Ich bin krank', translation: 'أنا مريض', emoji: '🤒', audioWord: 'Gute Besserung!' },
  { id: '8', title: 'Gesund', translation: 'صحي / معافى', emoji: '🍎', audioWord: 'Bleiben Sie gesund!' },
  { id: '9', title: 'Das Krankenhaus', translation: 'المستشفى', emoji: '🏥', audioWord: 'Er liegt im Krankenhaus' },
  { id: '10', title: 'Das Rezept', translation: 'الوصفة الطبية', emoji: '📄', audioWord: 'Hier ist Ihr Rezept' },
  { id: '11', title: 'Die Schmerzen', translation: 'الآلام', emoji: '🤕', audioWord: 'Haben Sie Schmerzen?' },
  { id: '12', title: 'Der Bauch', translation: 'البطن', emoji: '🤰', audioWord: 'Mein Bauch tut weh' },
  { id: '13', title: 'Der Rücken', translation: 'الظهر', emoji: '🧘', audioWord: 'Mein Rücken schmerzt' },
  { id: '14', title: 'Gute Besserung', translation: 'أتمنى لك الشفاء', emoji: '🍀', audioWord: 'Gute Besserung, mein Freund!' },
];

export const level15Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى "Der Arzt"؟',
    options: ['الطبيب', 'المريض', 'المستشفى', 'الدواء'],
    answer: 'الطبيب'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'نشتري الدواء من:',
    options: ['Die Apotheke', 'Die Schule', 'Der Park', 'Der Bahnhof'],
    answer: 'Die Apotheke'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Der Kopf',
    frontText: 'Der Kopf',
    backText: 'الرأس',
    answer: 'الرأس'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'ما معنى "Das Rezept"؟',
    options: ['الوصفة الطبية', 'المستشفى', 'الدواء', 'الألم'],
    answer: 'الوصفة الطبية'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'ماذا تقول لشخص مريض؟',
    options: ['Gute Besserung', 'Guten Appetit', 'Herzlichen Glückwunsch', 'Viel Glück'],
    answer: 'Gute Besserung'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "بطن":',
    wordWithBlank: 'Ba_ch',
    translation: 'بطن',
    options: ['u', 'a', 'o', 'e'],
    answer: 'u'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق أعضاء الجسم والصحة',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Krankenhaus', matchId: '1m' },
      { id: '1m', text: 'مستشفى', matchId: '1' },
      { id: '2', text: 'Rücken', matchId: '2m' },
      { id: '2m', text: 'ظهر', matchId: '2' },
      { id: '3', text: 'Krank', matchId: '3m' },
      { id: '3m', text: 'مريض', matchId: '3' }
    ]
  }
];
