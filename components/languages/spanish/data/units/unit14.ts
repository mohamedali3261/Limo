import { Unit } from '../types';

export const unit14: Unit = {
  id: 'unit14',
  title: 'المستوى العشرون: التعبير عن المشاعر',
  description: 'كيفية التحدث عن العواطف والمشاعر والأحاسيس',
  theme: {
    bg: 'bg-[#ff4b4b]',
    text: 'text-[#ff4b4b]',
    border: 'border-[#ea2b2b]',
    lightBg: 'bg-[#ffdbdb]',
    shadow: 'shadow-[#ea2b2b]/50'
  },
  difficulty: 'advanced',
  lessons: [
    {
      id: 'u14_l1',
      title: 'السعادة والحزن',
      difficulty: 'advanced',
      details: [
        {
          spanish: 'Estoy muy feliz',
          arabic: 'أنا سعيد جداً',
          type: 'flashcard'
        },
        {
          spanish: 'Triste',
          arabic: 'حزين',
          type: 'multiple_choice',
          options: [
            { text: 'سعيد', correct: false },
            { text: 'حزين', correct: true },
            { text: 'غاضب', correct: false }
          ]
        },
        {
          spanish: 'Llorar',
          arabic: 'يبكي',
          type: 'flashcard'
        },
        {
          spanish: 'Sonreír',
          arabic: 'يبتسم',
          type: 'listening',
          options: [
            { text: 'يضحك', correct: false },
            { text: 'يبتسم', correct: true },
            { text: 'يبكي', correct: false }
          ]
        }
      ]
    },
    {
      id: 'u14_l2',
      title: 'الغضب والخوف',
      difficulty: 'advanced',
      details: [
        {
          spanish: 'Estoy enfadado',
          arabic: 'أنا غاضب',
          type: 'flashcard'
        },
        {
          spanish: 'Tengo miedo',
          arabic: 'أشعر بالخوف',
          type: 'arrange',
          arrangeWords: ['miedo', 'Tengo']
        },
        {
          spanish: 'Preocupado',
          arabic: 'قلق',
          type: 'flashcard'
        },
        {
          spanish: 'No te preocupes',
          arabic: 'لا تقلق',
          type: 'multiple_choice',
          options: [
            { text: 'لا تبك', correct: false },
            { text: 'لا تقلق', correct: true }
          ]
        }
      ]
    }
  ]
};

