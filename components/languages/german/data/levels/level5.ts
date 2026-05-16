import { LessonItem, QuizQuestion } from '../types';

export const level5Animals: LessonItem[] = [
  { id: 'a1', title: 'Hund', translation: 'كلب', emoji: '🐕', audioWord: 'Hund' },
  { id: 'a2', title: 'Katze', translation: 'قطة', emoji: '🐈', audioWord: 'Katze' },
  { id: 'a3', title: 'Vogel', translation: 'طائر', emoji: '🐦', audioWord: 'Vogel' },
  { id: 'a4', title: 'Fisch', translation: 'سمكة', emoji: '🐟', audioWord: 'Fisch' },
  { id: 'a5', title: 'Pferd', translation: 'حصان', emoji: '🐎', audioWord: 'Pferd' },
  { id: 'a6', title: 'Elefant', translation: 'فيل', emoji: '🐘', audioWord: 'Elefant' },
  { id: 'a7', title: 'Löwe', translation: 'أسد', emoji: '🦁', audioWord: 'Löwe' },
  { id: 'a8', title: 'Tiger', translation: 'نمر', emoji: '🐯', audioWord: 'Tiger' },
  { id: 'a9', title: 'Bär', translation: 'دب', emoji: '🐻', audioWord: 'Bär' },
  { id: 'a10', title: 'Affe', translation: 'قرد', emoji: '🐒', audioWord: 'Affe' },
  { id: 'a11', title: 'Schlange', translation: 'ثعبان', emoji: '🐍', audioWord: 'Schlange' },
  { id: 'a12', title: 'Kuh', translation: 'بقرة', emoji: '🐄', audioWord: 'Kuh' },
  { id: 'a13', title: 'Schaf', translation: 'خروف', emoji: '🐑', audioWord: 'Schaf' },
];

export const level5Quiz: QuizQuestion[] = [
  { id: 501, type: 'multiple_choice', question: 'ما هو معنى "Hund"؟', options: ['كلب', 'قطة', 'سمكة', 'طائر'], answer: 'كلب', audioText: 'Hund' },
  { id: 502, type: 'multiple_choice', question: 'كيف تقول "قطة" بالألمانية؟', options: ['Hund', 'Katze', 'Vogel', 'Fisch'], answer: 'Katze', audioText: 'Katze' },
  { id: 503, type: 'multiple_choice', question: 'ما هو "Vogel"؟', options: ['طائر', 'سمكة', 'حصان', 'كلب'], answer: 'طائر', audioText: 'Vogel' },
  { id: 504, type: 'flashcard', question: 'اسحب البطاقة لاختبار ذاكرتك', frontText: 'سمكة', backText: 'Fisch', answer: 'Fisch', audioText: 'Fisch' },
  { id: 505, type: 'multiple_choice', question: 'كيف تقول "حصان" بالألمانية؟', options: ['Pferd', 'Hund', 'Katze', 'Vogel'], answer: 'Pferd', audioText: 'Pferd' },
  { id: 507, type: 'fill_in_blank', question: 'أكمل كلمة "كلب":', wordWithBlank: 'H_nd', translation: 'كلب', options: ['u', 'a', 'e', 'o'], answer: 'u' },
  { id: 508, type: 'multiple_choice', question: 'أي حيوان يطير؟', options: ['Vogel', 'Fisch', 'Hund', 'Katze'], answer: 'Vogel', audioText: 'Vogel' },
  { id: 511, type: 'multiple_choice', question: 'ما معنى "Löwe"؟', options: ['أسد', 'نمر', 'فيل', 'قرد'], answer: 'أسد' },
  { id: 512, type: 'multiple_choice', question: 'كيف تقول "بقرة"؟', options: ['Kuh', 'Schaf', 'Pferd', 'Hund'], answer: 'Kuh' },
  { id: 513, type: 'multiple_choice', question: 'ما هو "Elefant"؟', options: ['فيل', 'دب', 'ثعبان', 'نمر'], answer: 'فيل' },
  { 
    id: 506, 
    type: 'memory_game', 
    question: 'طابق الحيوانات مع معانيها', 
    answer: '', 
    memoryPairs: [
      { id: 'm1', text: 'Bär', matchId: 'm1_match' }, { id: 'm1_match', text: 'دب', matchId: 'm1' },
      { id: 'm2', text: 'Tiger', matchId: 'm2_match' }, { id: 'm2_match', text: 'نمر', matchId: 'm2' },
      { id: 'm3', text: 'Schlange', matchId: 'm3_match' }, { id: 'm3_match', text: 'ثعبان', matchId: 'm3' }
    ]
  },
  {
    id: 514,
    type: 'multiple_choice',
    question: 'Translate to Arabic: "Die Katze ist klein."',
    options: ['القطة صغيرة', 'الكلب كبير', 'الأسد قوي', 'الفيل ضخم'],
    answer: 'القطة صغيرة'
  },
  {
    id: 515,
    type: 'multiple_choice',
    question: 'ترجم للألمانية: "الأسد قوي جدًا"',
    options: ['Der Löwe ist sehr stark', 'Der Hund ist mein Freund', 'Die Katze ist süß', 'Das Pferd ist schnell'],
    answer: 'Der Löwe ist sehr stark'
  }
];
