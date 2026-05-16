import { Scenario } from '../types';

export const s1: Scenario = {
  id: 's1',
  title: 'في المقهى',
  description: 'اطلب قهوتك وتحدث مع النادل',
  emoji: '☕',
  steps: [
    { text: '¡Hola! ¿Qué vas a tomar?', speaker: 'bot' },
    { 
      text: '', 
      speaker: 'user', 
      options: [
        { text: 'Un café con leche, por favor.', correct: true, translation: 'قهوة بالحليب من فضلك.' },
        { text: 'Yo soy un café.', correct: false, translation: 'أنا قهوة.' }
      ]
    },
    { text: '¿Algo para comer?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Sí, una bicicleta.', correct: false, translation: 'نعم، دراجة.' },
        { text: 'Un cruasán, por favor.', correct: true, translation: 'كرواسون من فضلك.' }
      ]
    },
    { text: 'Aquí tienes. Son 4 euros.', speaker: 'bot' },
    {
       text: '',
       speaker: 'user',
       options: [
          { text: 'Gracias. Aquí tienes.', correct: true, translation: 'شكراً، تفضل.' },
          { text: '¿Dónde está el baño?', correct: false, translation: 'أين الحمام؟' }
       ]
    }
  ]
};
