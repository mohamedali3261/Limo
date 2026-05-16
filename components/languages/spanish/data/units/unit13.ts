import { Unit } from '../types';

export const unit13: Unit = {
  id: 'unit13',
  title: 'المستوى التاسع عشر: السفر والسياحة',
  description: 'كيفية التعامل مع المواقف المختلفة أثناء السفر',
  theme: {
    bg: 'bg-[#00c3ff]',
    text: 'text-[#00c3ff]',
    border: 'border-[#009ccc]',
    lightBg: 'bg-[#ccf3ff]',
    shadow: 'shadow-[#009ccc]/50'
  },
  difficulty: 'advanced',
  lessons: [
    {
      id: 'u13_l1',
      title: 'في المطار',
      difficulty: 'advanced',
      details: [
        {
          spanish: 'El pasaporte',
          arabic: 'جواز السفر',
          type: 'flashcard'
        },
        {
          spanish: 'El billete de avión',
          arabic: 'تذكرة الطيران',
          type: 'multiple_choice',
          options: [
            { text: 'تذكرة الطيران', correct: true },
            { text: 'محطة القطار', correct: false },
            { text: 'جواز السفر', correct: false }
          ]
        },
        {
          spanish: 'El equipaje',
          arabic: 'الأمتعة',
          type: 'flashcard'
        },
        {
          spanish: '¿Dónde está la puerta de embarque?',
          arabic: 'أين بوابة الصعود؟',
          type: 'arrange',
          arrangeWords: ['Dónde', 'está', 'puerta', 'de', 'la', 'embarque', '¿?']
        }
      ]
    },
    {
      id: 'u13_l2',
      title: 'استكشاف المدينة',
      difficulty: 'advanced',
      details: [
        {
          spanish: 'El mapa',
          arabic: 'الخريطة',
          type: 'flashcard'
        },
        {
          spanish: 'El museo',
          arabic: 'المتحف',
          type: 'flashcard'
        },
        {
          spanish: 'Quiero visitar el centro histórico',
          arabic: 'أريد زيارة المركز التاريخي',
          type: 'arrange',
          arrangeWords: ['Quiero', 'visitar', 'el', 'centro', 'histórico']
        },
        {
          spanish: '¿A qué hora cierra?',
          arabic: 'في أي ساعة يُغلق؟',
          type: 'listening',
          options: [
            { text: 'في أي ساعة يُغلق؟', correct: true },
            { text: 'أين هو؟', correct: false },
            { text: 'بكم هذا؟', correct: false }
          ]
        }
      ]
    }
  ]
};

