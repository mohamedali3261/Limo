import { LessonItem, QuizQuestion } from '../types';

export const level19Education: LessonItem[] = [
  { id: '1', title: 'Der Lehrer', translation: 'المعلم', emoji: '👨‍🏫', audioWord: 'Der Lehrer erklärt die Grammatik' },
  { id: '2', title: 'Die Schülerin', translation: 'التلميذة', emoji: '👩‍🎓', audioWord: 'Die Schülerin lernt fleißig' },
  { id: '3', title: 'Das Klassenzimmer', translation: 'غرفة الصف', emoji: '🏫', audioWord: 'Wir sind im Klassenzimmer' },
  { id: '4', title: 'Die Tafel', translation: 'السبورة', emoji: '📏', audioWord: 'Schreib das an die Tafel' },
  { id: '5', title: 'Das Heft', translation: 'الدفتـر', emoji: '📓', audioWord: 'Öffne dein Heft' },
  { id: '6', title: 'Die Prüfung', translation: 'الامتحان', emoji: '📝', audioWord: 'Ich habe eine Prüfung' },
  { id: '7', title: 'Das Zeugnis', translation: 'الشهادة', emoji: '📜', audioWord: 'Ein gutes Zeugnis' },
  { id: '8', title: 'Die Hausaufgabe', translation: 'الواجب المنزلي', emoji: '🏠', audioWord: 'Mach deine Hausaufgaben' },
  { id: '9', title: 'Studieren', translation: 'يدرس (جامعي)', emoji: '🎓', audioWord: 'Ich studiere Medizin' },
  { id: '10', title: 'Lehren', translation: 'يُدرّس', emoji: '🗣️', audioWord: 'Er lehrt Deutsch' },
  { id: '11', title: 'Verstehen', translation: 'يفهم', emoji: '💡', audioWord: 'Hast du das verstanden?' },
  { id: '12', title: 'Wiederholen', translation: 'يكرر / يراجع', emoji: '🔁', audioWord: 'Kannst du das wiederholen?' },
  { id: '13', title: 'Die Universität', translation: 'الجامعة', emoji: '🏛️', audioWord: 'Ich gehe an die Universität' },
  { id: '14', title: 'Der Stift', translation: 'القلم', emoji: '🖊️', audioWord: 'Hast du einen Stift?' },
  { id: '15', title: 'Lernen', translation: 'يتعلم', emoji: '🧠', audioWord: 'Ich lerne Deutsch' },
  { id: '16', title: 'Schreiben', translation: 'يكتب', emoji: '✍️', audioWord: 'Einen Brief schreiben' },
];

export const level19Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى "Die Tafel"؟',
    options: ['السبورة', 'المعلم', 'الدفتر', 'الامتحان'],
    answer: 'السبورة'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'ماذا نفعل قبل نهاية العام؟',
    options: ['Die Prüfung', 'Die Pause', 'Das Spiel', 'Das Essen'],
    answer: 'Die Prüfung'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Studieren',
    frontText: 'Studieren',
    backText: 'يدرس (جامعي)',
    answer: 'يدرس (جامعي)'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'ما معنى "Lernen"؟',
    options: ['يتعلم', 'يكتب', 'ينام', 'يأكل'],
    answer: 'يتعلم'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'أين يدرس الطلاب الجامعيون؟',
    options: ['Die Universität', 'Der Kindergarten', 'Der Park', 'Die Bank'],
    answer: 'Die Universität'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "قلم":',
    wordWithBlank: 'Sti_t',
    translation: 'قلم',
    options: ['f', 'v', 'p', 'b'],
    answer: 'f'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق مفردات التعليم',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Lehrer', matchId: '1m' },
      { id: '1m', text: 'معلم', matchId: '1' },
      { id: '2', text: 'Heft', matchId: '2m' },
      { id: '2m', text: 'دفتر', matchId: '2' },
      { id: '3', text: 'Schreiben', matchId: '3m' },
      { id: '3m', text: 'يكتب', matchId: '3' }
    ]
  }
];
