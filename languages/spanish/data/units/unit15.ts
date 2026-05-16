import { Unit } from '../types';

export const unit15: Unit = {
  id: 'unit15',
  title: 'المستوى الحادي والعشرون: المجتمع والسياسة',
  description: 'مصطلحات متقدمة عن الحياة العامة والسياسة',
  theme: {
    bg: 'bg-[#ce82ff]',
    text: 'text-[#ce82ff]',
    border: 'border-[#a568cc]',
    lightBg: 'bg-[#f4e5ff]',
    shadow: 'shadow-[#a568cc]/50'
  },
  lessons: [
    {
      id: 'u15_l1',
      title: 'المجتمع والناس',
      details: [
        {
          spanish: 'La sociedad',
          arabic: 'المجتمع',
          type: 'flashcard'
        },
        {
          spanish: 'El gobierno',
          arabic: 'الحكومة',
          type: 'multiple_choice',
          options: [
            { text: 'الناس', correct: false },
            { text: 'الحكومة', correct: true },
            { text: 'الشعب', correct: false }
          ]
        },
        {
          spanish: 'Los ciudadanos',
          arabic: 'المواطنون',
          type: 'flashcard'
        },
        {
          spanish: 'Las leyes',
          arabic: 'القوانين',
          type: 'listening',
          options: [
            { text: 'القواعد', correct: false },
            { text: 'القوانين', correct: true }
          ]
        }
      ]
    },
    {
      id: 'u15_l2',
      title: 'الاقتصاد',
      details: [
        {
          spanish: 'La economía',
          arabic: 'الاقتصاد',
          type: 'flashcard'
        },
        {
          spanish: 'Los impuestos',
          arabic: 'الضرائب',
          type: 'flashcard'
        },
        {
          spanish: 'El desempleo',
          arabic: 'البطالة',
          type: 'multiple_choice',
          options: [
            { text: 'العمل', correct: false },
            { text: 'البطالة', correct: true },
            { text: 'السوق', correct: false }
          ]
        },
        {
          spanish: 'El nivel de vida',
          arabic: 'مستوى المعيشة',
          type: 'true_false',
          isTrue: true
        }
      ]
    }
  ]
};
