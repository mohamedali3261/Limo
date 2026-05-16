import { LessonItem, QuizQuestion } from '../types';

export const level17Nature: LessonItem[] = [
  { id: '1', title: 'Der Baum', translation: 'الشجرة', emoji: '🌳', audioWord: 'Ein grüner Baum' },
  { id: '2', title: 'Die Blume', translation: 'الزهرة', emoji: '🌻', audioWord: 'Die Blume duftet' },
  { id: '3', title: 'Der Berg', translation: 'الجبل', emoji: '🏔️', audioWord: 'Die Berge sind hoch' },
  { id: '4', title: 'Der Fluss', translation: 'النهر', emoji: '🌊', audioWord: 'Der Fluss fließt' },
  { id: '5', title: 'Das Meer', translation: 'البحر', emoji: '🏖️', audioWord: 'Im Meer schwimmen' },
  { id: '6', title: 'Der Wald', translation: 'الغابة', emoji: '🌲', audioWord: 'Im Wald ist es ruhig' },
  { id: '7', title: 'Die Erde', translation: 'الأرض', emoji: '🌍', audioWord: 'Wir schützen die Erde' },
  { id: '8', title: 'Der Himmel', translation: 'السماء', emoji: '🌌', audioWord: 'Blauer Himmel' },
  { id: '9', title: 'Der See', translation: 'البحيرة', emoji: '💧', audioWord: 'Wir fahren an den See' },
  { id: '10', title: 'Der Stern', translation: 'النجم', emoji: '⭐', audioWord: 'Die Sterne leuchten' },
  { id: '11', title: 'Der Mond', translation: 'القمر', emoji: '🌙', audioWord: 'Der Mond ist voll' },
  { id: '12', title: 'Das Gras', translation: 'العشب', emoji: '🌱', audioWord: 'Das Gras ist grün' },
  { id: '13', title: 'Die Luft', translation: 'الهواء', emoji: '🌬️', audioWord: 'Die Luft ist frisch' },
  { id: '14', title: 'Das Feuer', translation: 'النار', emoji: '🔥', audioWord: 'Das Feuer brennt' },
];

export const level17Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى "Der Wald"؟',
    options: ['الغابة', 'البحر', 'الجبل', 'النهر'],
    answer: 'الغابة'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'أين نجد الكثير من الماء المالح؟',
    options: ['Das Meer', 'Der Berg', 'Der Wald', 'Die Blume'],
    answer: 'Das Meer'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Der Baum',
    frontText: 'Der Baum',
    backText: 'الشجرة',
    answer: 'الشجرة'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'ما معنى "Der Mond"؟',
    options: ['القمر', 'الشمس', 'النجم', 'الأرض'],
    answer: 'القمر'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'ما معنى "Das Gras"؟',
    options: ['العشب', 'الشجرة', 'النهر', 'الجبل'],
    answer: 'العشب'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "بحيرة":',
    wordWithBlank: 'S_e',
    translation: 'بحيرة',
    options: ['e', 'i', 'a', 'o'],
    answer: 'e'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق عناصر الطبيعة',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Sterne', matchId: '1m' },
      { id: '1m', text: 'نجوم', matchId: '1' },
      { id: '2', text: 'Feuer', matchId: '2m' },
      { id: '2m', text: 'نار', matchId: '2' },
      { id: '3', text: 'Himmel', matchId: '3m' },
      { id: '3m', text: 'سماء', matchId: '3' }
    ]
  }
];
