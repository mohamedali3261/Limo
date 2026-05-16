import { LessonItem, QuizQuestion } from '../types';

export const level29Routine: LessonItem[] = [
  { id: '1', title: 'Aufstehen', translation: 'الاستيقاظ', emoji: '🌅', audioWord: 'Ich stehe um sieben Uhr auf' },
  { id: '2', title: 'Frühstücken', translation: 'تناول الإفطار', emoji: '🍳', audioWord: 'Ich frühstücke gerne' },
  { id: '3', title: 'Zähneputzen', translation: 'تنظيف الأسنان', emoji: '🪥', audioWord: 'Ich putze meine Zähne' },
  { id: '4', title: 'Duschen', translation: 'الاستحمام', emoji: '🚿', audioWord: 'Ich dusche jeden Morgen' },
  { id: '5', title: 'Arbeiten', translation: 'العمل', emoji: '💼', audioWord: 'Er arbeitet im Büro' },
  { id: '6', title: 'Lernen', translation: 'الدراسة / التعلم', emoji: '📚', audioWord: 'Ich lerne Deutsch' },
  { id: '7', title: 'Kochen', translation: 'الطبخ', emoji: '👨‍🍳', audioWord: 'Wir kochen das Abendessen' },
  { id: '8', title: 'Essen', translation: 'الأكل', emoji: '🍽️', audioWord: 'Guten Appetit!' },
  { id: '9', title: 'Schlafen', translation: 'النوم', emoji: '😴', audioWord: 'Gute Nacht!' },
  { id: '10', title: 'Fernsehen', translation: 'مشاهدة التلفاز', emoji: '📺', audioWord: 'Ich sehe abends fern' },
  { id: '11', title: 'Aufräumen', translation: 'الترتيب / التنظيف', emoji: '🧹', audioWord: 'Ich räume das Zimmer auf' },
  { id: '12', title: 'Einkaufen', translation: 'التسوق', emoji: '🛍️', audioWord: 'Ich gehe einkaufen' },
];

export const level29Quiz: QuizQuestion[] = [
  { id: 1, type: 'multiple_choice', question: 'ما معنى "Aufstehen"؟', options: ['الاستيقاظ', 'النوم', 'الأكل', 'العمل'], answer: 'الاستيقاظ' },
  { id: 2, type: 'multiple_choice', question: 'كيف تقول "تنظيف الأسنان"؟', options: ['Zähneputzen', 'Duschen', 'Essen', 'Kochen'], answer: 'Zähneputzen' },
  { id: 3, type: 'flashcard', question: 'Schlafen', frontText: 'Schlafen', backText: 'النوم', answer: 'النوم' },
  { id: 4, type: 'memory_game', question: 'طابق الروتين اليومي', answer: '', memoryPairs: [
    { id: '1a', text: 'Duschen', matchId: '1' }, { id: '1b', text: 'استحمام', matchId: '1' },
    { id: '2a', text: 'Einkaufen', matchId: '2' }, { id: '2b', text: 'تسوق', matchId: '2' },
    { id: '3a', text: 'Kochen', matchId: '3' }, { id: '3b', text: 'طبخ', matchId: '3' }
  ]},
  { id: 5, type: 'multiple_choice', question: 'Translate to Arabic: "Ich lerne Deutsch."', options: ['أنا أتعلم الألمانية', 'أنا آكل التفاح', 'أنا أذهب للمدرسة', 'أنا أنام مبكراً'], answer: 'أنا أتعلم الألمانية' },
  { id: 6, type: 'multiple_choice', question: 'ترجم للألمانية: "أنا أنام الآن"', options: ['Ich schlafe jetzt', 'Ich esse jetzt', 'Ich lerne jetzt', 'Ich koche jetzt'], answer: 'Ich schlafe jetzt' }
];
