import { Scenario } from '../types';

export const s5: Scenario = {
  id: 's5',
  title: 'التسوق',
  description: 'شراء ملابس من المتجر',
  emoji: '🛍️',
  steps: [
    { text: '¡Hola! ¿Te puedo ayudar en algo?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Sí, busco una camisa blanca.', correct: true, translation: 'نعم، أبحث عن قميص أبيض.' },
        { text: 'Me gusta el perro.', correct: false, translation: 'أنا أحب الكلب.' }
      ]
    },
    { text: 'Aquí tienes. ¿Qué talla usas?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'La talla mediana, por favor.', correct: true, translation: 'المقاس المتوسط من فضلك.' },
        { text: 'Cincuenta años.', correct: false, translation: 'خمسون عاماً.' }
      ]
    },
    { text: 'Perfecto. Los probadores están al fondo.', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Hoy es martes.', correct: false, translation: 'اليوم هو الثلاثاء.' },
        { text: 'Muchas gracias, voy a probármela.', correct: true, translation: 'شكراً جزيلاً، سأقوم بتجربتها.' }
      ]
    }
  ]
};
