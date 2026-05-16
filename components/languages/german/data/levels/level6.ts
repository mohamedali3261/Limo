import { LessonItem, QuizQuestion } from '../types';

export const level6Food: LessonItem[] = [
  { id: 'f1', title: 'Brot', translation: 'خبز', emoji: '🍞', audioWord: 'Brot' },
  { id: 'f2', title: 'Käse', translation: 'جبن', emoji: '🧀', audioWord: 'Käse' },
  { id: 'f3', title: 'Wasser', translation: 'ماء', emoji: '💧', audioWord: 'Wasser' },
  { id: 'f4', title: 'Apfel', translation: 'تفاح', emoji: '🍎', audioWord: 'Apfel' },
  { id: 'f5', title: 'Milch', translation: 'حليب', emoji: '🥛', audioWord: 'Milch' },
  { id: 'f6', title: 'Ei', translation: 'بيضة', emoji: '🥚', audioWord: 'Ei' },
  { id: 'f7', title: 'Fleisch', translation: 'لحم', emoji: '🥩', audioWord: 'Fleisch' },
  { id: 'f8', title: 'Gemüse', translation: 'خضروات', emoji: '🥦', audioWord: 'Gemüse' },
  { id: 'f9', title: 'Obst', translation: 'فاكهة', emoji: '🍓', audioWord: 'Obst' },
  { id: 'f10', title: 'Kaffee', translation: 'قهوة', emoji: '☕', audioWord: 'Kaffee' },
  { id: 'f11', title: 'Tee', translation: 'شاي', emoji: '🍵', audioWord: 'Tee' },
  { id: 'f12', title: 'Saft', translation: 'عصير', emoji: '🧃', audioWord: 'Saft' },
];

export const level6Quiz: QuizQuestion[] = [
  { id: 601, type: 'multiple_choice', question: 'ما هو معنى "Brot"؟', options: ['خبز', 'جبن', 'ماء', 'تفاح'], answer: 'خبز', audioText: 'Brot' },
  { id: 602, type: 'multiple_choice', question: 'ما هي الكلمة المرادفة لـ "حليب"؟', options: ['Milch', 'Wasser', 'Käse', 'Apfel'], answer: 'Milch', audioText: 'Milch' },
  { id: 603, type: 'flashcard', question: 'تذكر المعنى!', frontText: 'جبن', backText: 'Käse', answer: 'Käse', audioText: 'Käse' },
  { id: 604, type: 'multiple_choice', question: 'ما هو "Apfel"؟', options: ['تفاح', 'خبز', 'حليب', 'ماء'], answer: 'تفاح', audioText: 'Apfel' },
  { id: 606, type: 'multiple_choice', question: 'ما معنى "Fleisch"؟', options: ['لحم', 'خضروات', 'خبز', 'عصير'], answer: 'لحم' },
  { id: 607, type: 'multiple_choice', question: 'كيف تطلب "عصير"؟', options: ['Saft', 'Wasser', 'Tee', 'Kaffee'], answer: 'Saft' },
  { id: 608, type: 'fill_in_blank', question: 'أكمل كلمة "قهوة":', wordWithBlank: 'Kaff_e', translation: 'قهوة', options: ['e', 'a', 'i', 'o'], answer: 'e' },
  { 
    id: 605, 
    type: 'memory_game', 
    question: 'طابق الطعام بمعناه', 
    answer: '', 
    memoryPairs: [
      { id: 'mf1', text: 'Wasser', matchId: 'mf1_match' }, { id: 'mf1_match', text: 'ماء', matchId: 'mf1' },
      { id: 'mf2', text: 'Ei', matchId: 'mf2_match' }, { id: 'mf2_match', text: 'بيضة', matchId: 'mf2' },
      { id: 'mf3', text: 'Gemüse', matchId: 'mf3_match' }, { id: 'mf3_match', text: 'خضروات', matchId: 'mf3' }
    ]
  },
  {
    id: 609,
    type: 'multiple_choice',
    question: 'Translate to Arabic: "Ich trinke Wasser."',
    options: ['أنا أشرب الماء', 'أنا آكل الخبز', 'أنا أحب التفاح', 'أنا أريد قهوة'],
    answer: 'أنا أشرب الماء'
  },
  {
    id: 610,
    type: 'multiple_choice',
    question: 'ترجم للألمانية: "التفاحة لذيذة"',
    options: ['Der Apfel ist lecker', 'Das Brot ist frisch', 'Die Milch ist kalt', 'Der Kaffee ist heiß'],
    answer: 'Der Apfel ist lecker'
  }
];
