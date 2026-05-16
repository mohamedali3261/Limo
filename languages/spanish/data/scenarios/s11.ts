import { Scenario } from '../types';

export const s11: Scenario = {
  id: 's11',
  title: 'في المطار',
  description: 'إنهاء إجراءات السفر والتحدث مع موظف الطيران.',
  emoji: '✈️',
  steps: [
    {
      speaker: 'bot',
      text: '¡Buenos días! ¿A dónde vuela hoy?',
    },
    {
      speaker: 'user',
      text: '',
      options: [
        { text: 'Vuelo a Madrid.', translation: 'أسافر إلى مدريد.', correct: true },
        { text: 'Busco mi maleta.', translation: 'أبحث عن حقيبتي.', correct: false },
      ],
    },
    {
      speaker: 'bot',
      text: 'Perfecto. ¿Me da su pasaporte y su billete, por favor?',
    },
    {
      speaker: 'user',
      text: '',
      options: [
        { text: 'Aquí tiene mi pasaporte.', translation: 'تفضل جواز سفري.', correct: true },
        { text: 'No tengo dinero.', translation: 'ليس معي مال.', correct: false },
      ],
    },
    {
      speaker: 'bot',
      text: 'Gracias. ¿Tiene maletas para facturar?',
    },
    {
      speaker: 'user',
      text: '',
      options: [
        { text: 'Sí, tengo una maleta grande.', translation: 'نعم، لدي حقيبة واحدة كبيرة.', correct: true },
        { text: 'No me gusta viajar.', translation: 'لا أحب السفر.', correct: false },
      ],
    },
    {
      speaker: 'bot',
      text: 'De acuerdo. Su puerta de embarque es la B12. ¡Buen viaje!',
    },
  ],
};
