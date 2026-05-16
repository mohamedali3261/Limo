import { Scenario } from '../types';

export const s4: Scenario = {
  id: 's4',
  title: 'في المطعم',
  description: 'طلب العشاء لعدة أشخاص',
  emoji: '🥘',
  steps: [
    { text: 'Buenas noches, ¿tienen reserva?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Sí, a nombre de Ahmed.', correct: true, translation: 'نعم، باسم أحمد.' },
        { text: 'No hablo español.', correct: false, translation: 'أنا لا أتحدث الإسبانية.' }
      ]
    },
    { text: 'Perfecto, por aquí, por favor. ¿Qué desean comer?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Yo soy una manzana.', correct: false, translation: 'أنا تفاحة.' },
        { text: 'Para mí pollo, y para él pescado.', correct: true, translation: 'لي دجاج، وله سمك.' }
      ]
    },
    { text: 'Muy bien. ¿Y para beber?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Dos aguas, por favor.', correct: true, translation: 'ماء عدد 2، من فضلك.' },
        { text: 'La cuenta.', correct: false, translation: 'الفاتورة.' }
      ]
    }
  ]
};
