import { LessonItem, QuizQuestion } from '../types';

export const level23Environment: LessonItem[] = [
  { id: '1', title: 'Die Umwelt', translation: 'البيئة', emoji: '🌍', audioWord: 'Wir müssen die Umwelt schützen' },
  { id: '2', title: 'Die Natur', translation: 'الطبيعة', emoji: '🌿', audioWord: 'Ich liebe die Natur' },
  { id: '3', title: 'Die Luft', translation: 'الهواء', emoji: '🌬️', audioWord: 'Die Luft ist sauber' },
  { id: '4', title: 'Das Klima', translation: 'المناخ', emoji: '🌡️', audioWord: 'Der Klimawandel ist ein Problem' },
  { id: '5', title: 'Die Energie', translation: 'الطاقة', emoji: '⚡', audioWord: 'Erneuerbare Energie' },
  { id: '6', title: 'Die Pflanze', translation: 'النبات', emoji: '🌱', audioWord: 'Gießen Sie die Pflanzen' },
  { id: '7', title: 'Das Tier', translation: 'الحيوان', emoji: '🐾', audioWord: 'Tiere sind wichtig für uns' },
  { id: '8', title: 'Der Müll', translation: 'النفايات / القمامة', emoji: '🗑️', audioWord: 'Wir trennen den Müll' },
  { id: '9', title: 'Recyceln', translation: 'إعادة التدوير', emoji: '♻️', audioWord: 'Papier kann man recyceln' },
  { id: '10', title: 'Schützen', translation: 'يحمي', emoji: '🛡️', audioWord: 'Die Umwelt schützen' },
  { id: '11', title: 'Sparen', translation: 'يوفر / يقتصد', emoji: '🔋', audioWord: 'Wasser sparen' },
  { id: '12', title: 'Verschmutzen', translation: 'يلوث', emoji: '🏭', audioWord: 'Die Fabrik verschmutzt die Luft' },
  { id: '13', title: 'Der Ozean', translation: 'المحيط', emoji: '🌊', audioWord: 'Ozeane sind tief' },
  { id: '14', title: 'Plastik vermeiden', translation: 'تجنب البلاستيك', emoji: '🚫', audioWord: 'Wir sollten Plastik vermeiden' },
  { id: '15', title: 'Der Strom', translation: 'الكهرباء', emoji: '🔌', audioWord: 'Strom sparen ist wichtig' },
  { id: '16', title: 'Nachhaltig', translation: 'مستدام', emoji: '🔄', audioWord: 'Nachhaltiges Leben' },
];

export const level23Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى "Die Umwelt"؟',
    options: ['البيئة', 'الطبيعة', 'الهواء', 'المناخ'],
    answer: 'البيئة'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'ماذا نفعل عندما نوفر المياه؟',
    options: ['Sparen', 'Verschmutzen', 'Kaufen', 'Essen'],
    answer: 'Sparen'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Recyceln',
    frontText: 'Recyceln',
    backText: 'إعادة التدوير',
    answer: 'إعادة التدوير'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'ما معنى "Der Strom"؟',
    options: ['الكهرباء', 'الماء', 'الهواء', 'الأرض'],
    answer: 'الكهرباء'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'ما معنى "Nachhaltig"؟',
    options: ['مستدام', 'جديد', 'قديم', 'سريع'],
    answer: 'مستدام'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "تلوث":',
    wordWithBlank: 'Verschm_tzung',
    translation: 'تلوث',
    options: ['u', 'o', 'a', 'e'],
    answer: 'u'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق مصطلحات البيئة',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Ozean', matchId: '1m' },
      { id: '1m', text: 'محيط', matchId: '1' },
      { id: '2', text: 'Müll', matchId: '2m' },
      { id: '2m', text: 'قمامة', matchId: '2' },
      { id: '3', text: 'Sparen', matchId: '3m' },
      { id: '3m', text: 'يوفر', matchId: '3' }
    ]
  }
];
