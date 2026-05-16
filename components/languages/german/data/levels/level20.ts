import { LessonItem, QuizQuestion } from '../types';

export const level20House: LessonItem[] = [
  { id: '1', title: 'Die Wohnung', translation: 'الشقة', emoji: '🏢', audioWord: 'Meine Wohnung ist klein' },
  { id: '2', title: 'Das Zimmer', translation: 'الغرفة', emoji: '🚪', audioWord: 'Ein helles Zimmer' },
  { id: '3', title: 'Die Küche', translation: 'المطبخ', emoji: '🍳', audioWord: 'In der Küche kochen' },
  { id: '4', title: 'Das Bad', translation: 'الحمام', emoji: '🚿', audioWord: 'Das Bad ist sauber' },
  { id: '5', title: 'Das Schlafzimmer', translation: 'غرفة النوم', emoji: '🛏️', audioWord: 'Im Schlafzimmer schlafen' },
  { id: '6', title: 'Der Tisch', translation: 'الطاولة', emoji: '🛋️', audioWord: 'Das Essen steht auf dem Tisch' },
  { id: '7', title: 'Der Stuhl', translation: 'الكرسي', emoji: '🪑', audioWord: 'Setz dich auf den Stuhl' },
  { id: '8', title: 'Das Sofa', translation: 'الأريكة', emoji: '🛋️', audioWord: 'Auf dem Sofa entspannen' },
  { id: '9', title: 'Der Schrank', translation: 'الخزانة', emoji: '👕', audioWord: 'Die Kleidung ist im Schrank' },
  { id: '10', title: 'Das Fenster', translation: 'النافذة', emoji: '🪟', audioWord: 'Mach das Fenster zu' },
  { id: '11', title: 'Die Tür', translation: 'الباب', emoji: '🚪', audioWord: 'Die Tür ist offen' },
  { id: '12', title: 'Der Garten', translation: 'الحديقة', emoji: '🏡', audioWord: 'Kinder spielen im Garten' },
  { id: '13', title: 'Der Keller', translation: 'القبو / السرداب', emoji: '🏚️', audioWord: 'Es ist dunkel im Keller' },
  { id: '14', title: 'Das Dach', translation: 'السطح / القمة', emoji: '🏠', audioWord: 'Das Dach ist rot' },
  { id: '15', title: 'Die Treppe', translation: 'السلم / الدرج', emoji: '🪜', audioWord: 'Geh die Treppe hoch' },
  { id: '16', title: 'Das Licht', translation: 'الضوء / المصباح', emoji: '💡', audioWord: 'Mach das Licht an' },
];

export const level20Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'أين ننام؟',
    options: ['Das Schlafzimmer', 'Die Küche', 'Das Bad', 'Der Garten'],
    answer: 'Das Schlafzimmer'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'ما معنى "Der Schrank"؟',
    options: ['الخزانة', 'الطاولة', 'الكرسي', 'الأريكة'],
    answer: 'الخزانة'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Das Fenster',
    frontText: 'Das Fenster',
    backText: 'النافذة',
    answer: 'النافذة'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'ما هو "Das Licht"؟',
    options: ['الضوء', 'الباب', 'السلم', 'السطح'],
    answer: 'الضوء'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'كيف تصعد للمستويات العليا؟',
    options: ['Die Treppe', 'Der Keller', 'Der Schrank', 'Das Sofa'],
    answer: 'Die Treppe'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "مطبخ":',
    wordWithBlank: 'K_che',
    translation: 'مطبخ',
    options: ['ü', 'u', 'o', 'e'],
    answer: 'ü'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق قطع الأثاث والغرف',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Stuhl', matchId: '1m' },
      { id: '1m', text: 'كرسي', matchId: '1' },
      { id: '2', text: 'Keller', matchId: '2m' },
      { id: '2m', text: 'قبو', matchId: '2' },
      { id: '3', text: 'Garten', matchId: '3m' },
      { id: '3m', text: 'حديقة', matchId: '3' }
    ]
  }
];
