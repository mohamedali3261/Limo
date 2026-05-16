import { LessonItem, QuizQuestion } from '../types';

export const level11Places: LessonItem[] = [
  { id: '1', title: 'Die Stadt', translation: 'المدينة', emoji: '🏙️', audioWord: 'Ich wohne in der Stadt' },
  { id: '2', title: 'Das Haus', translation: 'المنزل', emoji: '🏠', audioWord: 'Mein Haus ist groß' },
  { id: '3', title: 'Die Schule', translation: 'المدرسة', emoji: '🏫', audioWord: 'Ich gehe zur Schule' },
  { id: '4', title: 'Der Park', translation: 'المنتزه', emoji: '🌳', audioWord: 'Wir gehen in den Park' },
  { id: '5', title: 'Das Restaurant', translation: 'المطعم', emoji: '🍴', audioWord: 'Das Restaurant ist gut' },
  { id: '6', title: 'Das Krankenhaus', translation: 'المستشفى', emoji: '🏥', audioWord: 'Er ist im Krankenhaus' },
  { id: '7', title: 'Der Supermarkt', translation: 'السوبر ماركت', emoji: '🛒', audioWord: 'Ich kaufe im Supermarkt ein' },
  { id: '8', title: 'Die Post', translation: 'البريد', emoji: '📯', audioWord: 'Ich gehe zur Post' },
  { id: '9', title: 'Die Bank', translation: 'البنك', emoji: '🏦', audioWord: 'Ich brauche Geld von der Bank' },
  { id: '10', title: 'Das Kino', translation: 'السينما', emoji: '🎬', audioWord: 'Wir gehen ins Kino' },
  { id: '11', title: 'Der Bahnhof', translation: 'محطة القطار', emoji: '🚉', audioWord: 'Der Zug kommt am Bahnhof an' },
  { id: '12', title: 'Der Flughafen', translation: 'المطار', emoji: '✈️', audioWord: 'Das Flugzeug startet am Flughafen' },
  { id: '13', title: 'Die Apotheke', translation: 'الصيدلية', emoji: '💊', audioWord: 'Ich kaufe Medizin in der Apotheke' },
];

export const level11Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى كلمة "Das Haus"؟',
    options: ['المنزل', 'المدرسة', 'المدينة', 'المطعم'],
    answer: 'المنزل'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'أين نذهب للتعلم؟',
    options: ['Die Schule', 'Der Park', 'Die Post', 'Das Restaurant'],
    answer: 'Die Schule'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Der Park',
    frontText: 'Der Park',
    backText: 'المنتزه',
    answer: 'المنتزه'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'أين نجد القطار؟',
    options: ['Der Bahnhof', 'Der Flughafen', 'Die Bank', 'Das Kino'],
    answer: 'Der Bahnhof'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'أين نشتري الدواء؟',
    options: ['Die Apotheke', 'Das Krankenhaus', 'Der Supermarkt', 'Die Post'],
    answer: 'Die Apotheke'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "مطار":',
    wordWithBlank: 'Flugha_en',
    translation: 'مطار',
    options: ['f', 'v', 'p', 'b'],
    answer: 'f'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق الأماكن',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Die Bank', matchId: '1m' },
      { id: '1m', text: 'البنك', matchId: '1' },
      { id: '2', text: 'Das Kino', matchId: '2m' },
      { id: '2m', text: 'السينما', matchId: '2' },
      { id: '3', text: 'Die Stadt', matchId: '3m' },
      { id: '3m', text: 'المدينة', matchId: '3' }
    ]
  },
  {
    id: 8,
    type: 'multiple_choice',
    question: 'Translate to Arabic: "Ich gehe in den Park."',
    options: ['أنا أذهب إلى المنتزه', 'أنا أذهب إلى المدرسة', 'أنا أذهب إلى البيت', 'أنا أذهب إلى العمل'],
    answer: 'أنا أذهب إلى المنتزه'
  },
  {
    id: 9,
    type: 'multiple_choice',
    question: 'ترجم للألمانية: "المطعم جيد جداً"',
    options: ['Das Restaurant ist sehr gut', 'Das Haus ist sehr groß', 'Die Schule ist sehr weit', 'Der Park ist sehr schön'],
    answer: 'Das Restaurant ist sehr gut'
  }
];
