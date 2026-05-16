import { LessonItem, QuizQuestion } from '../types';

export const level4Colors: LessonItem[] = [
  { id: 'c1', title: 'Rot', translation: 'أحمر', emoji: '🔴', audioWord: 'Rot' },
  { id: 'c2', title: 'Blau', translation: 'أزرق', emoji: '🔵', audioWord: 'Blau' },
  { id: 'c3', title: 'Grün', translation: 'أخضر', emoji: '🟢', audioWord: 'Grün' },
  { id: 'c4', title: 'Gelb', translation: 'أصفر', emoji: '🟡', audioWord: 'Gelb' },
  { id: 'c5', title: 'Schwarz', translation: 'أسود', emoji: '⚫', audioWord: 'Schwarz' },
  { id: 'c6', title: 'Weiß', translation: 'أبيض', emoji: '⚪', audioWord: 'Weiß' },
  { id: 'c7', title: 'Orange', translation: 'برتقالي', emoji: '🟠', audioWord: 'Orange' },
  { id: 'c8', title: 'Violett', translation: 'بنفسجي', emoji: '🟣', audioWord: 'Violett' },
  { id: 'c9', title: 'Rosa', translation: 'وردي', emoji: '🧠', audioWord: 'Rosa' },
  { id: 'c10', title: 'Braun', translation: 'بني', emoji: '🟤', audioWord: 'Braun' },
  { id: 'c11', title: 'Grau', translation: 'رمادي', emoji: '⚪', audioWord: 'Grau' },
  { id: 'c12', title: 'Bunt', translation: 'ملون', emoji: '🌈', audioWord: 'Bunt' },
];

export const level4Quiz: QuizQuestion[] = [
  { id: 401, type: 'multiple_choice', question: 'ما هو اللون "Rot"؟', options: ['أحمر', 'أزرق', 'أخضر', 'أصفر'], answer: 'أحمر', audioText: 'Rot' },
  { id: 402, type: 'multiple_choice', question: 'ما هو اللون "Blau"؟', options: ['أخضر', 'أزرق', 'أسود', 'أبيض'], answer: 'أزرق', audioText: 'Blau' },
  { id: 403, type: 'multiple_choice', question: 'كيف تقول "أخضر" بالألمانية؟', options: ['Rot', 'Blau', 'Grün', 'Gelb'], answer: 'Grün', audioText: 'Grün' },
  { id: 404, type: 'flashcard', question: 'اسحب البطاقة لاختبار ذاكرتك', frontText: 'أصفر', backText: 'Gelb', answer: 'Gelb', audioText: 'Gelb' },
  { id: 405, type: 'multiple_choice', question: 'كيف تقول "أسود" بالألمانية؟', options: ['Weiß', 'Schwarz', 'Rot', 'Blau'], answer: 'Schwarz', audioText: 'Schwarz' },
  { id: 406, type: 'fill_in_blank', question: 'أكمل كلمة اللون "أبيض":', wordWithBlank: 'W_iß', translation: 'أبيض', options: ['e', 'i', 'a', 'o'], answer: 'e' },
  { id: 407, type: 'multiple_choice', question: 'ما هو اللون الأبيض؟', options: ['Schwarz', 'Weiß', 'Gelb', 'Rot'], answer: 'Weiß', audioText: 'Weiß' },
  { id: 408, type: 'fill_in_blank', question: 'أكمل كلمة اللون "أخضر":', wordWithBlank: 'Gr_n', translation: 'أخضر', options: ['ü', 'u', 'i', 'e'], answer: 'ü' },
  { id: 409, type: 'multiple_choice', question: 'أي لون هو المفضل عادة للسماء الصافية؟', options: ['Blau', 'Rot', 'Gelb', 'Schwarz'], answer: 'Blau', audioText: 'Blau' },
  { id: 410, type: 'multiple_choice', question: 'ما معنى "Rosa"؟', options: ['وردي', 'أحمر', 'أرجواني', 'أبيض'], answer: 'وردي' },
  { id: 411, type: 'multiple_choice', question: 'كيف تقول "رمادي"؟', options: ['Grau', 'Braun', 'Gelb', 'Grün'], answer: 'Grau' },
  { id: 412, type: 'memory_game', question: 'طابق الألوان', answer: '', memoryPairs: [
    { id: '1a', text: 'Braun', matchId: '1' }, { id: '1b', text: 'بني', matchId: '1' },
    { id: '2a', text: 'Orange', matchId: '2' }, { id: '2b', text: 'برتقالي', matchId: '2' },
    { id: '3a', text: 'Bunt', matchId: '3' }, { id: '3b', text: 'ملون', matchId: '3' }
  ]},
  {
    id: 413,
    type: 'multiple_choice',
    question: 'Translate to Arabic: "Die Banane ist gelb."',
    options: ['الموزة صفراء', 'التفاحة حمراء', 'العشب أخضر', 'السماء زرقاء'],
    answer: 'الموزة صفراء'
  },
  {
    id: 414,
    type: 'multiple_choice',
    question: 'ترجم للألمانية: "العشب أخضر"',
    options: ['Das Gras ist grün', 'Der Apfel ist rot', 'Die Sonne ist gelb', 'Das Auto ist blau'],
    answer: 'Das Gras ist grün'
  }
];
