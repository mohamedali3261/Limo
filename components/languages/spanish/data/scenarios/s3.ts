import { Scenario } from '../types';

export const s3: Scenario = {
  id: 's3',
  title: 'في محطة القطار',
  description: 'السؤال عن الاتجاهات وشراء تذكرة',
  emoji: '🚆',
  steps: [
    { text: 'Buenos días, ¿en qué puedo ayudarle?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Un billete para Madrid, por favor.', correct: true, translation: 'تذكرة إلى مدريد، من فضلك.' },
        { text: 'Me gusta Madrid.', correct: false, translation: 'أنا أحب مدريد.' }
      ]
    },
    { text: 'Claro, ¿solo ida o ida y vuelta?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Ida y vuelta.', correct: true, translation: 'ذهاب وعودة.' },
        { text: 'A la derecha.', correct: false, translation: 'إلى اليمين.' }
      ]
    },
    { text: 'Son 45 euros. El tren sale en 10 minutos.', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: '¡Gracias! Hasta luego.', correct: true, translation: 'شكراً! أراك لاحقاً.' },
        { text: '¿Qué hora es?', correct: false, translation: 'كم الساعة؟' }
      ]
    }
  ]
};
