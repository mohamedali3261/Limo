import { LessonItem, QuizQuestion } from '../types';

export const level7Family: LessonItem[] = [
  { id: 'fm1', title: 'Vater', translation: 'أب', emoji: '👨', audioWord: 'Vater' },
  { id: 'fm2', title: 'Mutter', translation: 'أُم', emoji: '👩', audioWord: 'Mutter' },
  { id: 'fm3', title: 'Bruder', translation: 'أخ', emoji: '👦', audioWord: 'Bruder' },
  { id: 'fm4', title: 'Schwester', translation: 'أخت', emoji: '👧', audioWord: 'Schwester' },
  { id: 'fm5', title: 'Oma', translation: 'جدة', emoji: '👵', audioWord: 'Oma' },
  { id: 'fm6', title: 'Opa', translation: 'جد', emoji: '👴', audioWord: 'Opa' },
  { id: 'fm7', title: 'Sohn', translation: 'ابن', emoji: '👦', audioWord: 'Sohn' },
  { id: 'fm8', title: 'Tochter', translation: 'ابنة', emoji: '👧', audioWord: 'Tochter' },
  { id: 'fm9', title: 'Baby', translation: 'طفل رضيع', emoji: '👶', audioWord: 'Baby' },
  { id: 'fm10', title: 'Onkel', translation: 'خال / عم', emoji: '👨‍💼', audioWord: 'Onkel' },
  { id: 'fm11', title: 'Tante', translation: 'خالة / عمة', emoji: '👩‍💼', audioWord: 'Tante' },
  { id: 'fm12', title: 'Eltern', translation: 'الوالدان', emoji: '👨‍👩‍👧', audioWord: 'Eltern' },
];

export const level7Quiz: QuizQuestion[] = [
  { id: 701, type: 'multiple_choice', question: 'كيف تقول "أب" بالألمانية؟', options: ['Vater', 'Mutter', 'Opa', 'Bruder'], answer: 'Vater', audioText: 'Vater' },
  { id: 702, type: 'multiple_choice', question: 'ما معنى "Mutter"؟', options: ['أُم', 'جدة', 'أخت', 'جد'], answer: 'أُم', audioText: 'Mutter' },
  { id: 703, type: 'flashcard', question: 'تذكر المعنى!', frontText: 'أخ', backText: 'Bruder', answer: 'Bruder', audioText: 'Bruder' },
  { id: 704, type: 'multiple_choice', question: 'ما هو "Oma"؟', options: ['جدة', 'أُم', 'أخت', 'جد'], answer: 'جدة', audioText: 'Oma' },
  { id: 705, type: 'multiple_choice', question: 'ما معنى "Schwester"؟', options: ['أخت', 'أخ', 'جدة', 'أُم'], answer: 'أخت', audioText: 'Schwester' },
  { id: 706, type: 'multiple_choice', question: 'ماذا تعني كلمة "Eltern"؟', options: ['الوالدان', 'الأبناء', 'الأجداد', 'الأعمام'], answer: 'الوالدان' },
  { id: 707, type: 'multiple_choice', question: 'كيف تقول "ابنة"؟', options: ['Tochter', 'Sohn', 'Kind', 'Baby'], answer: 'Tochter' },
  { id: 708, type: 'fill_in_blank', question: 'أكمل كلمة "أخ":', wordWithBlank: 'Br_der', translation: 'أخ', options: ['u', 'a', 'o', 'i'], answer: 'u' },
  { id: 709, type: 'memory_game', question: 'طابق أفراد العائلة', answer: '', memoryPairs: [
    { id: '1a', text: 'Onkel', matchId: '1' }, { id: '1b', text: 'عم/خال', matchId: '1' },
    { id: '2a', text: 'Tante', matchId: '2' }, { id: '2b', text: 'عمة/خالة', matchId: '2' },
    { id: '3a', text: 'Sohn', matchId: '3' }, { id: '3b', text: 'ابن', matchId: '3' }
  ]},
  {
    id: 710,
    type: 'multiple_choice',
    question: 'Translate to Arabic: "Das ist mein Vater."',
    options: ['هذا أبي', 'هذه أمي', 'هذا أخي', 'هذا جدي'],
    answer: 'هذا أبي'
  },
  {
    id: 711,
    type: 'multiple_choice',
    question: 'ترجم للألمانية: "أنا أحب عائلتي"',
    options: ['Ich liebe meine Familie', 'Ich liebe meine Mutter', 'Ich liebe meinen Bruder', 'Ich liebe meine Schwester'],
    answer: 'Ich liebe meine Familie'
  }
];
