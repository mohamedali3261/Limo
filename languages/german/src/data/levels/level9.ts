import { LessonItem, QuizQuestion } from '../types';

export const level9Jobs: LessonItem[] = [
  { id: '1', title: 'der Beruf', subtitle: 'دير بيروف', translation: 'المهنة', emoji: '💼', audioWord: 'der Beruf' },
  { id: '2', title: 'der Arzt', subtitle: 'دير أرتست', translation: 'الطبيب', emoji: '👨‍⚕️', audioWord: 'der Arzt' },
  { id: '3', title: 'der Lehrer', subtitle: 'دير ليرر', translation: 'المعلم', emoji: '👨‍🏫', audioWord: 'der Lehrer' },
  { id: '4', title: 'der Bäcker', subtitle: 'دير بيكر', translation: 'الخباز', emoji: '🧑‍🍳', audioWord: 'der Bäcker' },
  { id: '5', title: 'der Polizist', subtitle: 'دير بوليتسيست', translation: 'الشرطي', emoji: '👮', audioWord: 'der Polizist' },
  { id: '6', title: 'der Ingenieur', subtitle: 'دير إنجينيور', translation: 'المهندس', emoji: '👷', audioWord: 'der Ingenieur' },
  { id: '7', title: 'der Verkäufer', subtitle: 'دير فيركويفر', translation: 'البائع', emoji: '🧑‍💼', audioWord: 'der Verkäufer' },
  { id: '8', title: 'der Koch', subtitle: 'دير كوخ', translation: 'الطباخ', emoji: '👨‍🍳', audioWord: 'der Koch' },
  { id: '9', title: 'der Kellner', subtitle: 'دير كيلنر', translation: 'النادل (الجرسون)', emoji: '🤵', audioWord: 'der Kellner' },
  { id: '10', title: 'der Fahrer', subtitle: 'دير فهرر', translation: 'السائق', emoji: '🚗', audioWord: 'der Fahrer' },
  { id: '11', title: 'der Pilot', subtitle: 'دير بيلوت', translation: 'الطيار', emoji: '✈️', audioWord: 'der Pilot' },
  { id: '12', title: 'der Gärtner', subtitle: 'دير جيرتنير', translation: 'البستاني', emoji: '👨‍🌾', audioWord: 'der Gärtner' },
];

export const level9Quiz: QuizQuestion[] = [
  { id: 1, type: 'multiple_choice', question: 'ما معنى "der Arzt"؟', audioText: 'der Arzt', options: ['الطبيب', 'المعلم', 'الشرطي', 'الخباز'], answer: 'الطبيب' },
  { id: 2, type: 'multiple_choice', question: 'كيف تقول "المعلم"؟', options: ['der Polizist', 'der Lehrer', 'der Koch', 'der Beruf'], answer: 'der Lehrer' },
  { id: 3, type: 'multiple_choice', question: 'ما معنى "der Koch"؟', options: ['الباب', 'الطباخ', 'السائق', 'البائع'], answer: 'الطباخ' },
  { id: 4, type: 'multiple_choice', question: 'كيف تقول "المهندس"؟', options: ['der Ingenieur', 'der Arzt', 'der Lehrer', 'der Bäcker'], answer: 'der Ingenieur' },
  { id: 5, type: 'multiple_choice', question: 'ما معنى "der Kellner"؟', options: ['النادل', 'الطيار', 'البستاني', 'السائق'], answer: 'النادل' },
  { id: 6, type: 'multiple_choice', question: 'كيف تقول "الطيار"؟', options: ['der Pilot', 'der Fahrer', 'der Koch', 'der Arzt'], answer: 'der Pilot' },
  { id: 7, type: 'fill_in_blank', question: 'أكمل كلمة "سائق":', wordWithBlank: 'Fahr_r', translation: 'سائق', options: ['e', 'a', 'o', 'i'], answer: 'e' },
  { id: 8, type: 'memory_game', question: 'طابق المهن', answer: '', memoryPairs: [
    { id: '1a', text: 'Bäcker', matchId: '1' }, { id: '1b', text: 'خباز', matchId: '1' },
    { id: '2a', text: 'Gärtner', matchId: '2' }, { id: '2b', text: 'بستاني', matchId: '2' },
    { id: '3a', text: 'Verkäufer', matchId: '3' }, { id: '3b', text: 'بائع', matchId: '3' }
  ]}
];
