import { LessonItem, QuizQuestion } from '../types';

export const level33Phrases: LessonItem[] = [
  { id: '1', title: 'Das Leben', translation: 'الحياة', emoji: '🌱', audioWord: 'Das Leben ist schön' },
  { id: '2', title: 'Die Liebe', translation: 'الحب', emoji: '❤️', audioWord: 'Liebe ist wichtig' },
  { id: '3', title: 'Die Freiheit', translation: 'الحرية', emoji: '🕊️', audioWord: 'Freiheit für alle' },
  { id: '4', title: 'Der Frieden', translation: 'السلام', emoji: '✌️', audioWord: 'Frieden auf der Welt' },
  { id: '5', title: 'Die Wahrheit', translation: 'الحقيقة', emoji: '⚖️', audioWord: 'Sag die Wahrheit' },
  { id: '6', title: 'Die Zeit', translation: 'الزمن / الوقت', emoji: '⏳', audioWord: 'Zeit ist Geld' },
  { id: '7', title: 'Die Welt', translation: 'العالم', emoji: '🌍', audioWord: 'Die Welt ist groß' },
  { id: '8', title: 'Die Hilfe', translation: 'المساعدة', emoji: '🤝', audioWord: 'Ich brauche Hilfe' },
  { id: '9', title: 'Die Hoffnung', translation: 'الأمل', emoji: '⭐', audioWord: 'Hoffnung stirbt zuletzt' },
  { id: '10', title: 'Die Träume', translation: 'الأحلام', emoji: '💭', audioWord: 'Folge deinen Träumen' },
  { id: '11', title: 'Die Zukunft', translation: 'المستقبل', emoji: '🚀', audioWord: 'Die Zukunft ist heute' },
  { id: '12', title: 'Gemeinsam', translation: 'معاً / سوياً', emoji: '👫', audioWord: 'Wir schaffen das gemeinsam' },
];

export const level33Quiz: QuizQuestion[] = [
  { id: 1, type: 'multiple_choice', question: 'ما معنى "Die Freiheit"؟', options: ['الحرية', 'الحياة', 'الحب', 'السلام'], answer: 'الحرية' },
  { id: 2, type: 'multiple_choice', question: 'كيف تقول "المستقبل"؟', options: ['Die Zukunft', 'Die Welt', 'Die Zeit', 'Die Hilfe'], answer: 'Die Zukunft' },
  { id: 3, type: 'flashcard', question: 'Gemeinsam', frontText: 'Gemeinsam', backText: 'معاً', answer: 'معاً' },
  { id: 4, type: 'memory_game', question: 'طابق المفاهيم العامة', answer: '', memoryPairs: [
    { id: '1a', text: 'Liebe', matchId: '1' }, { id: '1b', text: 'حب', matchId: '1' },
    { id: '2a', text: 'Frieden', matchId: '2' }, { id: '2b', text: 'سلام', matchId: '2' },
    { id: '3a', text: 'Hilfe', matchId: '3' }, { id: '3b', text: 'مساعدة', matchId: '3' }
  ]},
  { id: 5, type: 'multiple_choice', question: 'Translate to Arabic: "Das Leben ist schön."', options: ['الحياة جميلة', 'الوقت من ذهب', 'العالم كبير', 'السلام مهم'], answer: 'الحياة جميلة' },
  { id: 6, type: 'multiple_choice', question: 'ترجم للألمانية: "أحتاج إلى مساعدة"', options: ['Ich brauche Hilfe', 'Ich brauche Zeit', 'Ich brauche Geld', 'Ich brauche Ruhe'], answer: 'Ich brauche Hilfe' }
];
