import { Scenario } from '../types';

export const s7: Scenario = {
  id: 's7',
  title: 'في المطار',
  description: 'إجراءات السفر وحجز التذاكر',
  emoji: '✈️',
  steps: [
    { text: 'Buenos días. Su pasaporte y billete, por favor.', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Aquí tiene, gracias.', correct: true, translation: 'تفضل، شكراً.' },
        { text: 'Quiero nadar.', correct: false, translation: 'أريد السباحة.' }
      ]
    },
    { text: '¿Tiene equipaje para facturar?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Sí, una maleta.', correct: true, translation: 'نعم، حقيبة واحدة.' },
        { text: 'No hablo francés.', correct: false, translation: 'لا أتحدث الفرنسية.' }
      ]
    },
    { text: 'Perfecto. Su puerta de embarque es la B12.', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: '¿A qué hora es el vuelo?', correct: true, translation: 'في أي ساعة الرحلة؟' },
        { text: 'Tengo un gato.', correct: false, translation: 'لدي قطة.' }
      ]
    }
  ]
};
