import { LessonItem, QuizQuestion } from '../types';

export const level22Shopping: LessonItem[] = [
  { id: '1', title: 'Einkaufen', translation: 'التسوق', emoji: '🛍️', audioWord: 'Ich gehe einkaufen' },
  { id: '2', title: 'Der Preis', translation: 'السعر', emoji: '🏷️', audioWord: 'Was ist der Preis?' },
  { id: '3', title: 'Teuer', translation: 'غالٍ', emoji: '💰', audioWord: 'Das ist zu teuer' },
  { id: '4', title: 'Billig', translation: 'رخيص', emoji: '🪙', audioWord: 'Ein billiges Angebot' },
  { id: '5', title: 'Die Kasse', translation: 'الصندوق / الكاشير', emoji: '🧾', audioWord: 'Bezahlen Sie an der Kasse' },
  { id: '6', title: 'Die Quittung', translation: 'الإيصال', emoji: '📄', audioWord: 'Brauchen Sie eine Quittung?' },
  { id: '7', title: 'Das Angebot', translation: 'العرض', emoji: '🎉', audioWord: 'Ein tolles Angebot' },
  { id: '8', title: 'Der Rabatt', translation: 'الخصم', emoji: '📉', audioWord: 'Es gibt 20% Rabatt' },
  { id: '9', title: 'Die Tasche', translation: 'الحقيبة', emoji: '👜', audioWord: 'Haben Sie eine Tasche?' },
  { id: '10', title: 'Bezahlen', translation: 'يدفع', emoji: '💳', audioWord: 'Ich möchte bar bezahlen' },
  { id: '11', title: 'Kaufen', translation: 'يشتري', emoji: '🛒', audioWord: 'Ich kaufe einen Apfel' },
  { id: '12', title: 'Verkaufen', translation: 'يبيع', emoji: '📢', audioWord: 'Er verkauft sein Auto' },
  { id: '13', title: 'Der Markt', translation: 'السوق', emoji: '🏪', audioWord: 'Wir kaufen auf dem Markt ein' },
  { id: '14', title: 'Das Geld', translation: 'المال', emoji: '💵', audioWord: 'Ich habe kein Geld dabei' },
  { id: '15', title: 'In bar bezahlen', translation: 'يدفع نقداً', emoji: '🪙', audioWord: 'Kann ich in bar bezahlen?' },
  { id: '16', title: 'Die Kreditkarte', translation: 'بطاقة الائتمان', emoji: '💳', audioWord: 'Bezahlen mit Kreditkarte' },
];

export const level22Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما معنى "Einkaufen"؟',
    options: ['التسوق', 'الطبخ', 'الدفع', 'اللعب'],
    answer: 'التسوق'
  },
  {
    id: 2,
    type: 'multiple_choice',
    question: 'إذا كان السعر منخفضاً جداً نقول:',
    options: ['Billig', 'Teuer', 'Groß', 'Schön'],
    answer: 'Billig'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'Bezahlen',
    frontText: 'Bezahlen',
    backText: 'يدفع',
    answer: 'يدفع'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'ما معنى "Das Geld"؟',
    options: ['المال', 'السعر', 'العرض', 'الحقيبة'],
    answer: 'المال'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'ما هو "Der Markt"؟',
    options: ['السوق', 'البنك', 'المطعم', 'المشفى'],
    answer: 'السوق'
  },
  {
    id: 7,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "ائتمان":',
    wordWithBlank: 'Kreditk_rte',
    translation: 'بطاقة ائتمان',
    options: ['a', 'e', 'o', 'u'],
    answer: 'a'
  },
  {
    id: 4,
    type: 'memory_game',
    question: 'طابق مفردات التسوق',
    answer: '',
    memoryPairs: [
      { id: '1', text: 'Teuer', matchId: '1m' },
      { id: '1m', text: 'غالٍ', matchId: '1' },
      { id: '2', text: 'Billig', matchId: '2m' },
      { id: '2m', text: 'رخيص', matchId: '2' },
      { id: '3', text: 'Tasche', matchId: '3m' },
      { id: '3m', text: 'حقيبة', matchId: '3' }
    ]
  }
];
