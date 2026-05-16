import { Unit } from '../types';

export const unit12: Unit = {
  id: 'unit12',
  title: 'المستوى الثامن عشر: في العمل',
  description: 'محادثات ومصطلحات خاصة ببيئة العمل',
  theme: {
    bg: 'bg-[#ff9600]',
    text: 'text-[#ff9600]',
    border: 'border-[#cc7800]',
    lightBg: 'bg-[#ffeacc]',
    shadow: 'shadow-[#cc7800]/50'
  },
  lessons: [
    {
      id: 'u12_l1',
      title: 'مقابلة العمل',
      details: [
        {
          spanish: 'La entrevista de trabajo',
          arabic: 'مقابلة العمل',
          type: 'flashcard'
        },
        {
          spanish: 'El currículum',
          arabic: 'السيرة الذاتية',
          type: 'multiple_choice',
          options: [
            { text: 'الرسالة', correct: false },
            { text: 'السيرة الذاتية', correct: true },
            { text: 'الهوية', correct: false }
          ]
        },
        {
          spanish: 'La experiencia',
          arabic: 'الخبرة',
          type: 'flashcard'
        },
        {
          spanish: '¿Tiene usted experiencia en este campo?',
          arabic: 'هل لديك خبرة في هذا المجال؟',
          type: 'arrange',
          arrangeWords: ['Tiene', 'experiencia', 'en', 'usted', 'campo', 'este', '¿?']
        }
      ]
    },
    {
      id: 'u12_l2',
      title: 'العمل المكتبي',
      details: [
        {
          spanish: 'La oficina',
          arabic: 'المكتب',
          type: 'flashcard'
        },
        {
          spanish: 'El jefe',
          arabic: 'المدير / الرئيس',
          type: 'flashcard'
        },
        {
          spanish: 'Tenemos una reunión mañana',
          arabic: 'لدينا اجتماع غدا',
          type: 'multiple_choice',
          options: [
            { text: 'عندي موعد اليوم', correct: false },
            { text: 'لدينا اجتماع غدا', correct: true }
          ]
        },
        {
          spanish: 'El ordenador / La computadora',
          arabic: 'الحاسوب',
          type: 'flashcard'
        }
      ]
    }
  ]
};
