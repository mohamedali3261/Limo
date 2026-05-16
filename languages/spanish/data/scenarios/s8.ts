import { Scenario } from '../types';

export const s8: Scenario = {
  id: 's8',
  title: 'في الفندق',
  description: 'حجز غرفة وتسجيل الدخول',
  emoji: '🏨',
  steps: [
    { text: 'Bienvenido. ¿Qué desea?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Tengo una reserva a nombre de Ali.', correct: true, translation: 'لدي حجز باسم علي.' },
        { text: 'Me gusta el cine.', correct: false, translation: 'أحب السينما.' }
      ]
    },
    { text: 'Sí, aquí está. Una habitación doble.', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: '¿El desayuno está incluido?', correct: true, translation: 'هل الإفطار مشمول؟' },
        { text: 'El coche es rápido.', correct: false, translation: 'السيارة سريعة.' }
      ]
    },
    { text: 'Sí, de 7 a 10. Aquí tiene su llave, habitación 305.', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Muchas gracias.', correct: true, translation: 'شكراً جزيلاً.' },
        { text: 'Es un perro.', correct: false, translation: 'إنه كلب.' }
      ]
    }
  ]
};
