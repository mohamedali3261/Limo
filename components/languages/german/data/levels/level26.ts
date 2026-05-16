import { LessonItem, QuizQuestion } from '../types';

export const level26Office: LessonItem[] = [
  { id: '1', title: 'Das Büro', translation: 'المكتب', emoji: '🏢', audioWord: 'Ich arbeite im Büro' },
  { id: '2', title: 'Der Kollege', translation: 'الزميل', emoji: '👥', audioWord: 'Meine Kollegen sind nett' },
  { id: '3', title: 'Der Chef', translation: 'المدير / الرئيس', emoji: '👨‍💼', audioWord: 'Der Chef spricht mit uns' },
  { id: '4', title: 'Die Besprechung', translation: 'الاجتماع / اللقاء', emoji: '🤝', audioWord: 'Eine wichtige Besprechung' },
  { id: '5', title: 'Der Termin', translation: 'الموعد', emoji: '📅', audioWord: 'Ich habe einen Termin' },
  { id: '6', title: 'Die E-Mail', translation: 'البريد الإلكتروني', emoji: '📧', audioWord: 'E-Mails beantworten' },
  { id: '7', title: 'Das Dokument', translation: 'الوثيقة / المستند', emoji: '📄', audioWord: 'Dokumente drucken' },
  { id: '8', title: 'Der Drucker', translation: 'الطابعة', emoji: '🖨️', audioWord: 'Der Drucker ist kaputt' },
  { id: '9', title: 'Das Telefon', translation: 'الهاتف', emoji: '☎️', audioWord: 'Telefonate führen' },
  { id: '10', title: 'Die Pause', translation: 'الاستراحة', emoji: '☕', audioWord: 'Zeit für eine Pause' },
  { id: '11', title: 'Der Computer', translation: 'الحاسوب', emoji: '💻', audioWord: 'Am Computer arbeiten' },
  { id: '12', title: 'Organisieren', translation: 'ينظم', emoji: '📋', audioWord: 'Den Alltag organisieren' },
];

export const level26Quiz: QuizQuestion[] = [
  { id: 1, type: 'multiple_choice', question: 'ما معنى "Der Kollege"؟', options: ['الزميل', 'المدير', 'الطالب', 'المعلم'], answer: 'الزميل' },
  { id: 2, type: 'multiple_choice', question: 'كيف تقول "الموعد" بالألمانية؟', options: ['Der Termin', 'Die Pause', 'Das Büro', 'Der Chef'], answer: 'Der Termin' },
  { id: 3, type: 'flashcard', question: 'Besprechung', frontText: 'Besprechung', backText: 'اجتماع', answer: 'اجتماع' },
  { id: 4, type: 'memory_game', question: 'طابق كلمات المكتب', answer: '', memoryPairs: [
    { id: '1a', text: 'Chef', matchId: '1' }, { id: '1b', text: 'مدير', matchId: '1' },
    { id: '2a', text: 'Pause', matchId: '2' }, { id: '2b', text: 'استراحة', matchId: '2' },
    { id: '3a', text: 'Drucker', matchId: '3' }, { id: '3b', text: 'طابعة', matchId: '3' }
  ]}
];
