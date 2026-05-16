import { LessonItem, QuizQuestion } from '../types';

export const level18Tech: LessonItem[] = [
  { id: '1', title: 'Das Internet', translation: 'الإنترنت', emoji: '🌐', audioWord: 'Ich surfe im Internet' },
  { id: '2', title: 'Das Handy', translation: 'الهاتف المحمول', emoji: '📱', audioWord: 'Mein Handy ist neu' },
  { id: '3', title: 'Die E-Mail', translation: 'البريد الإلكتروني', emoji: '📧', audioWord: 'Eine E-Mail schreiben' },
  { id: '4', title: 'Die App', translation: 'التطبيق', emoji: '📲', audioWord: 'Diese App ist gut' },
  { id: '5', title: 'Das Passwort', translation: 'كلمة المرور', emoji: '🔑', audioWord: 'Ein sicheres Passwort' },
  { id: '6', title: 'Suchen', translation: 'يبحث', emoji: '🔍', audioWord: 'Informationen suchen' },
  { id: '7', title: 'Teilen', translation: 'يشارك', emoji: '📤', audioWord: 'Fotos teilen' },
  { id: '8', title: 'Herunterladen', translation: 'تحميل / تنزيل', emoji: '📥', audioWord: 'Gute Musik herunterladen' },
  { id: '9', title: 'Der Computer', translation: 'الحاسوب', emoji: '💻', audioWord: 'Ich arbeite am Computer' },
  { id: '10', title: 'Die Website', translation: 'الموقع الإلكتروني', emoji: '🖥️', audioWord: 'Eine interessante Website' },
  { id: '11', title: 'Das WLAN', translation: 'الواي فاي', emoji: '📶', audioWord: 'Haben Sie WLAN?' },
  { id: '12', title: 'Speichern', translation: 'يحفظ (ملف)', emoji: '💾', audioWord: 'Datei speichern' },
  { id: '13', title: 'Löschen', translation: 'يحذف', emoji: '🗑️', audioWord: 'Nachricht löschen' },
  { id: '14', title: 'Die Nachricht', translation: 'الرسالة', emoji: '✉️', audioWord: 'Eine Nachricht senden' },
];

export const level18Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى "Das Handy"؟',
    options: ['الهاتف المحمول', 'الإنترنت', 'كلمة المرور', 'التطبيق'],
    answer: 'الهاتف المحمول'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'لحماية حسابك تحتاج إلى:',
    options: ['Das Passwort', 'Die E-Mail', 'Das Internet', 'Die App'],
    answer: 'Das Passwort'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Suchen',
    frontText: 'Suchen',
    backText: 'يبحث',
    answer: 'يبحث'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'ما معنى "Speichern"؟',
    options: ['يحفظ', 'يحذف', 'يبحث', 'يحمل'],
    answer: 'يحفظ'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'ما هو "Das WLAN"؟',
    options: ['الواي فاي', 'الحاسوب', 'الشاشة', 'الماوس'],
    answer: 'الواي فاي'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "تزيل":',
    wordWithBlank: 'Herunter_aden',
    translation: 'تحميل',
    options: ['l', 'a', 'o', 'r'],
    answer: 'l'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق مصطلحات التكنولوجيا',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Computer', matchId: '1m' },
      { id: '1m', text: 'حاسوب', matchId: '1' },
      { id: '2', text: 'App', matchId: '2m' },
      { id: '2m', text: 'تطبيق', matchId: '2' },
      { id: '3', text: 'Löschen', matchId: '3m' },
      { id: '3m', text: 'يحذف', matchId: '3' }
    ]
  }
];
