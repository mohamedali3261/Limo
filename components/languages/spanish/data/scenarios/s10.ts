import { Scenario } from '../types';

export const s10: Scenario = {
  id: 's10',
  title: 'في العمل',
  description: 'مقابلة عمل والتحدث مع الزملاء',
  emoji: '💼',
  steps: [
    { text: 'Buenos días, cuéntame sobre su experiencia.', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Tengo cinco años de experiencia en ventas.', correct: true, translation: 'لدي خمس سنوات من الخبرة في المبيعات.' },
        { text: 'Me gustan las manzanas.', correct: false, translation: 'أنا أحب التفاح.' }
      ]
    },
    { text: 'Muy bien. ¿Sabe trabajar en equipo?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Sí, me encanta colaborar con mis compañeros.', correct: true, translation: 'نعم، أحب التعاون مع زملائي.' },
        { text: 'La película empieza a las ocho.', correct: false, translation: 'يبدأ الفيلم الساعة الثامنة.' }
      ]
    },
    { text: 'Excelente, le llamaremos pronto.', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Muchas gracias por su tiempo.', correct: true, translation: 'شكراً جزيلاً على وقتكم.' },
        { text: 'El gato está durmiendo.', correct: false, translation: 'القطة نائمة.' }
      ]
    }
  ]
};
