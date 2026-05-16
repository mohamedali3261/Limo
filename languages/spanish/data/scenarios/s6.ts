import { Scenario } from '../types';

export const s6: Scenario = {
  id: 's6',
  title: 'في الشارع',
  description: 'السؤال عن الاتجاهات للوصول إلى فندق',
  emoji: '🗺️',
  steps: [
    { text: '¡Perdona! ¿Tienes hora?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Sí, son las cinco.', correct: true, translation: 'نعم، إنها الخامسة.' },
        { text: 'Yo soy azul.', correct: false, translation: 'أنا أزرق.' }
      ]
    },
    { text: 'Gracias. Oye, ¿sabes dónde está el Hotel Plaza?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Sí, sigue todo recto y luego a la derecha.', correct: true, translation: 'نعم، امض قدماً ثم إلى اليمين.' },
        { text: 'Quiero un taco.', correct: false, translation: 'أريد تاكو.' }
      ]
    },
    { text: '¡Ah! Está muy cerca. ¡Muchas gracias!', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'De nada. ¡Buen día!', correct: true, translation: 'عفواً. طاب يومك!' },
        { text: 'La biblioteca.', correct: false, translation: 'المكتبة.' }
      ]
    }
  ]
};
