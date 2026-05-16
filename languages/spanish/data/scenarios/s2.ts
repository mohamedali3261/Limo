import { Scenario } from '../types';

export const s2: Scenario = {
  id: 's2',
  title: 'التعارف',
  description: 'قدم نفسك لشخص جديد',
  emoji: '🤝',
  steps: [
    { text: '¡Hola! Me llamo Carlos. ¿Y tú?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Adiós.', correct: false, translation: 'وداعاً.' },
        { text: '¡Hola! Me llamo Juan.', correct: true, translation: 'مرحباً، اسمي خوان.' }
      ]
    },
    { text: 'Mucho gusto. ¿De dónde eres?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Soy de Egipto.', correct: true, translation: 'أنا من مصر.' },
        { text: 'Tengo hambre.', correct: false, translation: 'أنا جائع.' }
      ]
    }
  ]
};
