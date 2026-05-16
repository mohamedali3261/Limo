import { LessonItem, QuizQuestion } from '../types';

export const level8Clothes: LessonItem[] = [
  { id: '1', title: 'die Kleidung', subtitle: 'دي كلايدونج', translation: 'الملابس', emoji: '👕', audioWord: 'die Kleidung' },
  { id: '2', title: 'das Hemd', subtitle: 'داس هيمد', translation: 'القميص', emoji: '👔', audioWord: 'das Hemd' },
  { id: '3', title: 'die Hose', subtitle: 'دي هوزة', translation: 'البنطلون', emoji: '👖', audioWord: 'die Hose' },
  { id: '4', title: 'die Jacke', subtitle: 'دي ياكه', translation: 'السترة', emoji: '🧥', audioWord: 'die Jacke' },
  { id: '5', title: 'der Schuh', subtitle: 'دير شووه', translation: 'الحذاء', emoji: '👟', audioWord: 'der Schuh' },
  { id: '6', title: 'das T-Shirt', subtitle: 'داس تي شيرت', translation: 'التي شيرت', emoji: '👕', audioWord: 'das T-Shirt' },
  { id: '7', title: 'der Pullover', subtitle: 'دير بلوفر', translation: 'البلوفر', emoji: '🧶', audioWord: 'der Pullover' },
  { id: '8', title: 'das Kleid', subtitle: 'داس كلايد', translation: 'الفستان', emoji: '👗', audioWord: 'das Kleid' },
  { id: '9', title: 'der Hut', subtitle: 'دير هوت', translation: 'القبعة', emoji: '🎩', audioWord: 'der Hut' },
  { id: '10', title: 'der Rock', subtitle: 'دير روك', translation: 'التنورة', emoji: '👗', audioWord: 'der Rock' },
  { id: '11', title: 'die Socke', subtitle: 'دي زوكه', translation: 'الجورب', emoji: '🧦', audioWord: 'die Socke' },
  { id: '12', title: 'der Mantel', subtitle: 'دير مانتل', translation: 'المعطف', emoji: '🧥', audioWord: 'der Mantel' },
];

export const level8Quiz: QuizQuestion[] = [
  { id: 1, type: 'multiple_choice', question: 'ما معنى "die Hose"؟', audioText: 'die Hose', options: ['القميص', 'البنطلون', 'الحذاء', 'الفستان'], answer: 'البنطلون' },
  { id: 2, type: 'multiple_choice', question: 'كيف تقول "القميص"؟', options: ['das Hemd', 'der Schuh', 'die Jacke', 'das Kleid'], answer: 'das Hemd' },
  { id: 3, type: 'multiple_choice', question: 'ما معنى "der Schuh"؟', options: ['اليد', 'الحذاء', 'القدم', 'الشعر'], answer: 'الحذاء' },
  { id: 4, type: 'multiple_choice', question: 'كيف تقول "السترة"؟', options: ['das Hemd', 'die Jacke', 'das Kleid', 'die Hose'], answer: 'die Jacke' },
  { id: 5, type: 'multiple_choice', question: 'ما معنى "der Hut"؟', options: ['القبعة', 'الحذاء', 'القميص', 'المعطف'], answer: 'القبعة' },
  { id: 6, type: 'multiple_choice', question: 'كيف تقول "التنورة"؟', options: ['der Rock', 'das Kleid', 'die Hose', 'die Jacke'], answer: 'der Rock' },
  { id: 7, type: 'fill_in_blank', question: 'أكمل كلمة "جورب":', wordWithBlank: 'S_cke', translation: 'جورب', options: ['o', 'u', 'i', 'e'], answer: 'o' },
  { id: 8, type: 'memory_game', question: 'طابق الملابس', answer: '', memoryPairs: [
    { id: '1a', text: 'Mantel', matchId: '1' }, { id: '1b', text: 'معطف', matchId: '1' },
    { id: '2a', text: 'Schuh', matchId: '2' }, { id: '2b', text: 'حذاء', matchId: '2' },
    { id: '3a', text: 'T-Shirt', matchId: '3' }, { id: '3b', text: 'تي شيرت', matchId: '3' }
  ]}
];
