import { Scenario } from '../types';

export const s9: Scenario = {
  id: 's9',
  title: 'عند الطبيب',
  description: 'شرح الأعراض والأمراض الشائعة',
  emoji: '👨‍⚕️',
  steps: [
    { text: 'Hola, ¿Qué le pasa?', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Me duele la cabeza y tengo fiebre.', correct: true, translation: 'رأسي يؤلمني ولدي حمى.' },
        { text: 'Quiero comprar zapatos.', correct: false, translation: 'أريد شراء أحذية.' }
      ]
    },
    { text: 'Debe descansar y tomar esta medicina.', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: '¿Cuántas veces al día?', correct: true, translation: 'كم مرة في اليوم؟' },
        { text: 'Es un libro interesante.', correct: false, translation: 'إنه كتاب مثير للاهتمام.' }
      ]
    },
    { text: 'Dos veces al día después de las comidas.', speaker: 'bot' },
    {
      text: '',
      speaker: 'user',
      options: [
        { text: 'Entendido, gracias doctor.', correct: true, translation: 'مفهوم، شكراً أيها الطبيب.' },
        { text: 'Me gusta el color azul.', correct: false, translation: 'أحب اللون الأزرق.' }
      ]
    }
  ]
};
