import { LessonItem, QuizQuestion } from '../types';

export const level1Alphabet: LessonItem[] = [
 { id: 'a', title: 'A a', subtitle: 'Apfel', translation: 'تفاحة', emoji: '🍎', audioLetter: 'A', audioWord: 'Apfel' },
 { id: 'b', title: 'B b', subtitle: 'Buch', translation: 'كتاب', emoji: '📖', audioLetter: 'B', audioWord: 'Buch' },
 { id: 'c', title: 'C c', subtitle: 'Computer', translation: 'حاسوب', emoji: '💻', audioLetter: 'C', audioWord: 'Computer' },
 { id: 'd', title: 'D d', subtitle: 'Dorf', translation: 'قرية', emoji: '🏘️', audioLetter: 'D', audioWord: 'Dorf' },
 { id: 'e', title: 'E e', subtitle: 'Elefant', translation: 'فيل', emoji: '🐘', audioLetter: 'E', audioWord: 'Elefant' },
 { id: 'f', title: 'F f', subtitle: 'Fisch', translation: 'سمكة', emoji: '🐟', audioLetter: 'F', audioWord: 'Fisch' },
 { id: 'g', title: 'G g', subtitle: 'Garten', translation: 'حديقة', emoji: '🏡', audioLetter: 'G', audioWord: 'Garten' },
 { id: 'h', title: 'H h', subtitle: 'Haus', translation: 'منزل', emoji: '🏠', audioLetter: 'H', audioWord: 'Haus' },
 { id: 'i', title: 'I i', subtitle: 'Igel', translation: 'قنفذ', emoji: '🦔', audioLetter: 'I', audioWord: 'Igel' },
 { id: 'j', title: 'J j', subtitle: 'Jacke', translation: 'سترة', emoji: '🧥', audioLetter: 'Jot', audioWord: 'Jacke' },
 { id: 'k', title: 'K k', subtitle: 'Katze', translation: 'قطة', emoji: '🐈', audioLetter: 'K', audioWord: 'Katze' },
 { id: 'l', title: 'L l', subtitle: 'Lampe', translation: 'مصباح', emoji: '💡', audioLetter: 'L', audioWord: 'Lampe' },
 { id: 'm', title: 'M m', subtitle: 'Maus', translation: 'فأر', emoji: '🐁', audioLetter: 'M', audioWord: 'Maus' },
 { id: 'n', title: 'N n', subtitle: 'Nase', translation: 'أنف', emoji: '👃', audioLetter: 'N', audioWord: 'Nase' },
 { id: 'o', title: 'O o', subtitle: 'Oma', translation: 'جدة', emoji: '👵', audioLetter: 'O', audioWord: 'Oma' },
 { id: 'p', title: 'P p', subtitle: 'Papagei', translation: 'ببغاء', emoji: '🦜', audioLetter: 'P', audioWord: 'Papagei' },
 { id: 'q', title: 'Q q', subtitle: 'Qualle', translation: 'قنديل البحر', emoji: '🪼', audioLetter: 'Q', audioWord: 'Qualle' },
 { id: 'r', title: 'R r', subtitle: 'Radio', translation: 'مذياع', emoji: '📻', audioLetter: 'R', audioWord: 'Radio' },
 { id: 's', title: 'S s', subtitle: 'Sonne', translation: 'شمس', emoji: '☀️', audioLetter: 'S', audioWord: 'Sonne',
 grammarTip: { title: 'نطق حرف S', content: 'عندما يأتي حرف S في بداية الكلمة يليه حرف متحرك، يُنطق كحرف الزاي (Z).' }
 },
 { id: 't', title: 'T t', subtitle: 'Tisch', translation: 'طاولة', emoji: '🪑', audioLetter: 'T', audioWord: 'Tisch' },
 { id: 'u', title: 'U u', subtitle: 'Uhr', translation: 'ساعة', emoji: '⌚', audioLetter: 'U', audioWord: 'Uhr' },
 { id: 'v', title: 'V v', subtitle: 'Vogel', translation: 'طائر', emoji: '🐦', audioLetter: 'Vau', audioWord: 'Vogel' },
 { id: 'w', title: 'W w', subtitle: 'Wasser', translation: 'ماء', emoji: '💧', audioLetter: 'W', audioWord: 'Wasser' },
 { id: 'x', title: 'X x', subtitle: 'Xylofon', translation: 'إكسيليفون', emoji: '🎵', audioLetter: 'X', audioWord: 'Xylofon' },
 { id: 'y', title: 'Y y', subtitle: 'Yoga', translation: 'يوغا', emoji: '🧘', audioLetter: 'Ypsilon', audioWord: 'Yoga' },
 { id: 'z', title: 'Z z', subtitle: 'Zug', translation: 'قطار', emoji: '🚆', audioLetter: 'Zet', audioWord: 'Zug' }
];

export const level1Quiz: QuizQuestion[] = [
 {
 id: 1,
 type: 'multiple_choice',
 question: 'أي كلمة تعني "تفاحة"؟',
 options: ['Apfel', 'Buch', 'Haus', 'Fisch'],
 answer: 'Apfel',
 audioText: 'Apfel'
 },
 {
 id: 2,
 type: 'fill_in_blank',
 question: 'أكمل الحرف الناقص:',
 wordWithBlank: '_uch',
 translation: 'كتاب',
 options: ['B', 'P', 'D', 'T'],
 answer: 'B'
 },
 {
 id: 3,
 type: 'multiple_choice',
 question: 'أي كلمة تعني "كتاب"؟',
 options: ['Apfel', 'Buch', 'Haus', 'Fisch'],
 answer: 'Buch',
 audioText: 'Buch'
 },
 {
 id: 4,
 type: 'fill_in_blank',
 question: 'أكمل الحرف الناقص:',
 wordWithBlank: 'A_fel',
 translation: 'تفاحة',
 options: ['p', 'b', 'd', 'q'],
 answer: 'p'
 },
 {
 id: 5,
 type: 'multiple_choice',
 question: 'أي كلمة تعني "قطة"؟',
 options: ['Katze', 'Haus', 'Maus', 'Nase'],
 answer: 'Katze',
 audioText: 'Katze'
 },
 {
 id: 6,
 type: 'multiple_choice',
 question: 'أي كلمة تعني "منزل"؟',
 options: ['Apfel', 'Buch', 'Haus', 'Fisch'],
 answer: 'Haus',
 audioText: 'Haus'
 },
 {
 id: 7,
 type: 'multiple_choice',
 question: 'ماذا يعني الإيموجي 🐘؟',
 options: ['Elefant', 'Fisch', 'Vogel', 'Maus'],
 answer: 'Elefant',
 audioText: 'Elefant'
 },
 {
 id: 8,
 type: 'fill_in_blank',
 question: 'أكمل الكلمة لـ "شمس":',
 wordWithBlank: 'S_nne',
 translation: 'شمس',
 options: ['o', 'u', 'a', 'e'],
 answer: 'o'
 },
 {
 id: 9,
 type: 'multiple_choice',
 question: 'أي كلمة تعني "سمكة"؟',
 options: ['Fisch', 'Vogel', 'Hund', 'Katze'],
 answer: 'Fisch',
 audioText: 'Fisch'
 },
 {
  id: 10,
  type: 'multiple_choice',
  question: 'ما هو معنى "Wasser"؟',
  options: ['ماء', 'حليب', 'قهوة', 'شاي'],
  answer: 'ماء',
  audioText: 'Wasser'
 },
 {
  id: 11,
  type: 'multiple_choice',
  question: 'أي حرف يُنطق "Vau" بالألمانية؟',
  options: ['V', 'W', 'F', 'B'],
  answer: 'V'
 },
 {
  id: 12,
  type: 'multiple_choice',
  question: 'ما هو معنى "Zug"؟',
  options: ['قطار', 'سيارة', 'طائرة', 'دراجة'],
  answer: 'قطار'
 },
 {
  id: 13,
  type: 'fill_in_blank',
  question: 'أكمل الحرف الناقص في كلمة "أنف":',
  wordWithBlank: 'Na_e',
  translation: 'أنف',
  options: ['s', 'z', 'f', 'p'],
  answer: 's'
 },
 {
  id: 14,
  type: 'multiple_choice',
  question: 'أي كلمة تعني "مصباح"؟',
  options: ['Lampe', 'Tisch', 'Stuhl', 'Bett'],
  answer: 'Lampe'
 },
 {
  id: 15,
  type: 'memory_game',
  question: 'طابق الحروف والكلمات',
  answer: '',
  memoryPairs: [
    { id: '1a', text: 'A', matchId: '1' }, { id: '1b', text: 'Apfel', matchId: '1' },
    { id: '2a', text: 'H', matchId: '2' }, { id: '2b', text: 'Haus', matchId: '2' },
    { id: '3a', text: 'S', matchId: '3' }, { id: '3b', text: 'Sonne', matchId: '3' }
  ]
 },
 {
  id: 16,
  type: 'multiple_choice',
  question: 'Translate to Arabic: "Das ist ein Haus."',
  options: ['هذا منزل', 'هذه تفاحة', 'هذا سمك', 'هذا ماء'],
  answer: 'هذا منزل'
 },
 {
  id: 17,
  type: 'multiple_choice',
  question: 'ترجم للألمانية: "هذه شمس"',
  options: ['Das ist eine Sonne', 'Das ist ein Apfel', 'Das ist eine Lampe', 'Das ist ein Haus'],
  answer: 'Das ist eine Sonne'
 }
];
