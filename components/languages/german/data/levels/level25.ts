import { LessonItem, QuizQuestion } from '../types';

export const level25Travel: LessonItem[] = [
  { id: '1', title: 'Das Hotel', translation: 'الفندق', emoji: '🏨', audioWord: 'Wir schlafen im Hotel' },
  { id: '2', title: 'Die Reservierung', translation: 'الحجز', emoji: '📅', audioWord: 'Ich habe eine Reservierung' },
  { id: '3', title: 'Der Koffer', translation: 'الحقيبة / الشنطة', emoji: '🧳', audioWord: 'Pack den Koffer ein' },
  { id: '4', title: 'Das Zimmer', translation: 'الغرفة', emoji: '🛌', audioWord: 'Ein schönes Zimmer' },
  { id: '5', title: 'Der Schlüssel', translation: 'المفتاح', emoji: '🔑', audioWord: 'Wo ist der Schlüssel?' },
  { id: '6', title: 'Der Reisepass', translation: 'جواز السفر', emoji: '🛂', audioWord: 'Zeigen Sie den Reisepass' },
  { id: '7', title: 'Die Kamera', translation: 'الكاميرا', emoji: '📸', audioWord: 'Fotos machen' },
  { id: '8', title: 'Der Strand', translation: 'الشاطئ', emoji: '🏖️', audioWord: 'Am Strand entspannen' },
  { id: '9', title: 'Das Meer', translation: 'البحر', emoji: '🌊', audioWord: 'Das Meer ist blau' },
  { id: '10', title: 'Der Ausflug', translation: 'الرحلة / النزهة', emoji: '🎒', audioWord: 'Ein Ausflug in die Natur' },
  { id: '11', title: 'Die Karte', translation: 'الخريطة', emoji: '🗺️', audioWord: 'Die Karte lesen' },
  { id: '12', title: 'Der Tourist', translation: 'السائح', emoji: '📸', audioWord: 'Viele Touristen hier' },
];

export const level25Quiz: QuizQuestion[] = [
  { id: 1, type: 'multiple_choice', question: 'ما معنى "Der Schlüssel"؟', options: ['المفتاح', 'الباب', 'الغرفة', 'الحجز'], answer: 'المفتاح' },
  { id: 2, type: 'multiple_choice', question: 'كيف تقول "جواز سفر"؟', options: ['Der Reisepass', 'Die Karte', 'Der Koffer', 'Das Hotel'], answer: 'Der Reisepass' },
  { id: 3, type: 'flashcard', question: 'Reservierung', frontText: 'Reservierung', backText: 'حجز', answer: 'حجز' },
  { id: 4, type: 'memory_game', question: 'طابق كلمات السفر', answer: '', memoryPairs: [
    { id: '1a', text: 'Koffer', matchId: '1' }, { id: '1b', text: 'شنطة سفر', matchId: '1' },
    { id: '2a', text: 'Zimmer', matchId: '2' }, { id: '2b', text: 'غرفة', matchId: '2' },
    { id: '3a', text: 'Strand', matchId: '3' }, { id: '3b', text: 'شاطئ', matchId: '3' }
  ]}
];
