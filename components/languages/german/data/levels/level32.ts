import { LessonItem, QuizQuestion } from '../types';

export const level32Emotions: LessonItem[] = [
  { id: '1', title: 'Glücklich', translation: 'سعيد جداً / محظوظ', emoji: '🤩', audioWord: 'Ich bin so glücklich' },
  { id: '2', title: 'Traurig', translation: 'حزين', emoji: '😢', audioWord: 'Warum bist du traurig?' },
  { id: '3', title: 'Wütend', translation: 'غاضب جداً', emoji: '💢', audioWord: 'Er ist richtig wütend' },
  { id: '4', title: 'Überrascht', translation: 'متفاجئ', emoji: '😲', audioWord: 'Ich bin total überrascht' },
  { id: '5', title: 'Ängstlich', translation: 'خائف', emoji: '😨', audioWord: 'Keine Angst haben' },
  { id: '6', title: 'Stolz', translation: 'فخور', emoji: '🦁', audioWord: 'Ich bin stolz auf dich' },
  { id: '7', title: 'Eifersüchtig', translation: 'غيور', emoji: '😒', audioWord: 'Sei nicht eifersüchtig' },
  { id: '8', title: 'Enttäuscht', translation: 'خائب الأمل', emoji: '😞', audioWord: 'Ich bin etwas enttäuscht' },
  { id: '9', title: 'Dankbar', translation: 'ممتن', emoji: '🙏', audioWord: 'Ich bin sehr dankbar' },
  { id: '10', title: 'Ehrlich', translation: 'صادق / صريح', emoji: '😇', audioWord: 'Man muss ehrlich sein' },
  { id: '11', title: 'Mutig', translation: 'شجاع', emoji: '🦸', audioWord: 'Sei mutig und stark' },
  { id: '12', title: 'Nervös', translation: 'متوتر / قلق', emoji: '😟', audioWord: 'Ich bin nervös vor dem Test' },
];

export const level32Quiz: QuizQuestion[] = [
  { id: 1, type: 'multiple_choice', question: 'ما معنى "Dankbar"؟', options: ['ممتن', 'غاضب', 'خائف', 'شجاع'], answer: 'ممتن' },
  { id: 2, type: 'multiple_choice', question: 'كيف تقول "فخور"؟', options: ['Stolz', 'Traurig', 'Mutig', 'Ehrlich'], answer: 'Stolz' },
  { id: 3, type: 'flashcard', question: 'Mutig', frontText: 'Mutig', backText: 'شجاع', answer: 'شجاع' },
  { id: 4, type: 'memory_game', question: 'طابق المشاعر المتقدمة', answer: '', memoryPairs: [
    { id: '1a', text: 'Stolz', matchId: '1' }, { id: '1b', text: 'فخور', matchId: '1' },
    { id: '2a', text: 'Traurig', matchId: '2' }, { id: '2b', text: 'حزين', matchId: '2' },
    { id: '3a', text: 'Mutig', matchId: '3' }, { id: '3b', text: 'شجاع', matchId: '3' }
  ]},
  { id: 5, type: 'multiple_choice', question: 'Translate to Arabic: "Ich bin stolz auf dich."', options: ['أنا فخور بك', 'أنا حزين من أجلك', 'أنا سعيد معك', 'أنا غاضب منك'], answer: 'أنا فخور بك' },
  { id: 6, type: 'multiple_choice', question: 'ترجم للألمانية: "كن شجاعاً!"', options: ['Sei mutig!', 'Sei stolz!', 'Sei dankbar!', 'Sei ehrlich!'], answer: 'Sei mutig!' }
];
