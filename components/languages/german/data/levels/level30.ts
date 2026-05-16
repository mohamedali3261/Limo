import { LessonItem, QuizQuestion } from '../types';

export const level30Media: LessonItem[] = [
  { id: '1', title: 'Das Radio', translation: 'الراديو', emoji: '📻', audioWord: 'Ich höre Radio' },
  { id: '2', title: 'Die Zeitung', translation: 'الصحيفة / الجريدة', emoji: '📰', audioWord: 'Er liest die Zeitung' },
  { id: '3', title: 'Das Fernsehen', translation: 'التلفزيون', emoji: '📺', audioWord: 'Wir schauen Fernsehen' },
  { id: '4', title: 'Der Film', translation: 'الفيلم', emoji: '🎬', audioWord: 'Ein spannender Film' },
  { id: '5', title: 'Die Nachricht', translation: 'الخبر / الرسالة', emoji: '📩', audioWord: 'Wichtige Nachrichten' },
  { id: '6', title: 'Die Werbung', translation: 'الإعلان', emoji: '📢', audioWord: 'Zuviel Werbung im TV' },
  { id: '7', title: 'Das Buch', translation: 'الكتاب', emoji: '📖', audioWord: 'Ein interessantes Buch' },
  { id: '8', title: 'Die Musik', translation: 'الموسيقى', emoji: '🎶', audioWord: 'Ich liebe Musik' },
  { id: '9', title: 'Das Foto', translation: 'الصورة', emoji: '📷', audioWord: 'Ein schönes Foto' },
  { id: '10', title: 'Die Kamera', translation: 'الكاميرا', emoji: '📸', audioWord: 'Wo ist meine Kamera?' },
  { id: '11', title: 'Das Tablet', translation: 'التابلت', emoji: '📱', audioWord: 'Ich spiele am Tablet' },
  { id: '12', title: 'Der Kopfhörer', translation: 'سماعات الرأس', emoji: '🎧', audioWord: 'Musik mit Kopfhörern hören' },
];

export const level30Quiz: QuizQuestion[] = [
  { id: 1, type: 'multiple_choice', question: 'ما معنى "Die Zeitung"؟', options: ['الصحيفة', 'الراديو', 'الفيلم', 'الكتاب'], answer: 'الصحيفة' },
  { id: 2, type: 'multiple_choice', question: 'كيف تقول "سماعات الرأس"؟', options: ['Der Kopfhörer', 'Das Tablet', 'Die Musik', 'Das Foto'], answer: 'Der Kopfhörer' },
  { id: 3, type: 'flashcard', question: 'Die Werbung', frontText: 'Die Werbung', backText: 'الإعلان', answer: 'الإعلان' },
  { id: 4, type: 'memory_game', question: 'طابق وسائل الإعلام', answer: '', memoryPairs: [
    { id: '1a', text: 'Film', matchId: '1' }, { id: '1b', text: 'فيلم', matchId: '1' },
    { id: '2a', text: 'Radio', matchId: '2' }, { id: '2b', text: 'راديو', matchId: '2' },
    { id: '3a', text: 'Foto', matchId: '3' }, { id: '3b', text: 'صورة', matchId: '3' }
  ]},
  { id: 5, type: 'multiple_choice', question: 'Translate to Arabic: "Er liest ein Buch."', options: ['هو يقرأ كتاباً', 'هي تسمع الموسيقى', 'نحن نشاهد التلفاز', 'أنا أكتب رسالة'], answer: 'هو يقرأ كتاباً' },
  { id: 6, type: 'multiple_choice', question: 'ترجم للألمانية: "الصورة جميلة"', options: ['Das Foto ist schön', 'Das Buch ist alt', 'Der Film ist gut', 'Die Musik ist laut'], answer: 'Das Foto ist schön' }
];
