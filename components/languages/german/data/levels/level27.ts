import { LessonItem, QuizQuestion } from '../types';

export const level27Body2: LessonItem[] = [
  { id: '1', title: 'Das Auge', translation: 'العين', emoji: '👁️', audioWord: 'Zwei Augen' },
  { id: '2', title: 'Das Ohr', translation: 'الأذن', emoji: '👂', audioWord: 'Ich höre mit den Ohren' },
  { id: '3', title: 'Die Nase', translation: 'الأنف', emoji: '👃', audioWord: 'Eine kleine Nase' },
  { id: '4', title: 'Der Mund', translation: 'الفم', emoji: '👄', audioWord: 'Den Mund öffnen' },
  { id: '5', title: 'Der Zahn', translation: 'السن / الضرس', emoji: '🦷', audioWord: 'Die Zähne putzen' },
  { id: '6', title: 'Die Zunge', translation: 'اللسان', emoji: '👅', audioWord: 'Die Zunge zeigen' },
  { id: '7', title: 'Das Haar', translation: 'الشعر', emoji: '💇', audioWord: 'Blonde Haare' },
  { id: '8', title: 'Der Finger', translation: 'الإصبع', emoji: '☝️', audioWord: 'Zehn Finger' },
  { id: '9', title: 'Das Knie', translation: 'الركبة', emoji: '🦵', audioWord: 'Mein Knie tut weh' },
  { id: '10', title: 'Der Arm', translation: 'الذراع', emoji: '💪', audioWord: 'Starke Arme' },
  { id: '11', title: 'Das Bein', translation: 'الساق', emoji: '🦵', audioWord: 'Lange Beine' },
  { id: '12', title: 'Der Körper', translation: 'الجسم', emoji: '🧍', audioWord: 'Ein gesunder Körper' },
];

export const level27Quiz: QuizQuestion[] = [
  { id: 1, type: 'multiple_choice', question: 'ما معنى "Das Auge"؟', options: ['العين', 'الأذن', 'الأنف', 'الفم'], answer: 'العين' },
  { id: 2, type: 'multiple_choice', question: 'كيف تقول "الأسنان"؟', options: ['Die Zähne', 'Die Haare', 'Die Ohren', 'Die Finger'], answer: 'Die Zähne' },
  { id: 3, type: 'flashcard', question: 'Der Mund', frontText: 'Der Mund', backText: 'الفم', answer: 'الفم' },
  { id: 4, type: 'memory_game', question: 'طابق أعضاء الجسم', answer: '', memoryPairs: [
    { id: '1a', text: 'Ohr', matchId: '1' }, { id: '1b', text: 'أذن', matchId: '1' },
    { id: '2a', text: 'Nase', matchId: '2' }, { id: '2b', text: 'أنف', matchId: '2' },
    { id: '3a', text: 'Arm', matchId: '3' }, { id: '3b', text: 'ذراع', matchId: '3' }
  ]}
];
