import { LessonItem, QuizQuestion } from '../types';

export const level21Feelings: LessonItem[] = [
  { id: '1', title: 'Glücklich', translation: 'سعيد', emoji: '😊', audioWord: 'Ich bin heute sehr glücklich' },
  { id: '2', title: 'Traurig', translation: 'حزين', emoji: '😢', audioWord: 'Warum bist du traurig?' },
  { id: '3', title: 'Wütend', translation: 'غاضب', emoji: '😠', audioWord: 'Er ist wütend auf mich' },
  { id: '4', title: 'Müde', translation: 'متعب', emoji: '😴', audioWord: 'Ich bin so müde' },
  { id: '5', title: 'Überrascht', translation: 'متفاجئ', emoji: '😲', audioWord: 'Sie war sehr überrascht' },
  { id: '6', title: 'Ängstlich', translation: 'خائف', emoji: '😨', audioWord: 'Hab keine Angst' },
  { id: '7', title: 'Langweilig', translation: 'ممل', emoji: '😑', audioWord: 'Der Film ist langweilig' },
  { id: '8', title: 'Aufgeregt', translation: 'متحمس', emoji: '🤩', audioWord: 'Die Kinder sind aufgeregt' },
  { id: '9', title: 'Stolz', translation: 'فخور', emoji: '😌', audioWord: 'Ich bin stolz auf dich' },
  { id: '10', title: 'Einsam', translation: 'وحيد', emoji: '👤', audioWord: 'Manchmal fühle ich mich einsam' },
  { id: '11', title: 'Verliebt', translation: 'واقع في الحب', emoji: '😍', audioWord: 'Er ist verliebt' },
  { id: '12', title: 'Zufrieden', translation: 'راضٍ / قنوع', emoji: '😇', audioWord: 'Alles ist gut, ich bin zufrieden' },
  { id: '13', title: 'Erschöpft', translation: 'مرهق', emoji: '😫', audioWord: 'Nach der Arbeit bin ich erschöpft' },
  { id: '14', title: 'Neugierig', translation: 'فضولي', emoji: '🧐', audioWord: 'Kinder sind immer neugierig' },
  { id: '15', title: 'Gelangweilt', translation: 'يشعر بالملل', emoji: '🥱', audioWord: 'Er ist gelangweilt von der Rede' },
  { id: '16', title: 'Hoffnungsvoll', translation: 'متفائل / كلي أمل', emoji: '🌟', audioWord: 'Ich bin hoffnungsvoll für die Zukunft' },
];

export const level21Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى "Glücklich"؟',
    options: ['سعيد', 'حزين', 'غاضب', 'متعب'],
    answer: 'سعيد'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'عكس كلمة "Glücklich" هو:',
    options: ['Traurig', 'Müde', 'Zufrieden', 'Stolz'],
    answer: 'Traurig'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Wütend',
    frontText: 'Wütend',
    backText: 'غاضب',
    answer: 'غاضب'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'ما معنى "Erschöpft"؟',
    options: ['مرهق', 'سعيد', 'فخور', 'راضي'],
    answer: 'مرهق'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'ما معنى "Neugierig"؟',
    options: ['فضولي', 'ممل', 'خائف', 'وحيد'],
    answer: 'فضولي'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "ممل":',
    wordWithBlank: 'langwe_lig',
    translation: 'ممل',
    options: ['i', 'a', 'o', 'e'],
    answer: 'i'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق المشاعر',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Stolz', matchId: '1m' },
      { id: '1m', text: 'فخور', matchId: '1' },
      { id: '2', text: 'Einsam', matchId: '2m' },
      { id: '2m', text: 'وحيد', matchId: '2' },
      { id: '3', text: 'Hoffnung', matchId: '3m' },
      { id: '3m', text: 'أمل', matchId: '3' }
    ]
  }
];
