import { ConversationScenario } from './types';

export const directions: ConversationScenario = {
    id: 'asking_directions',
    arabicTitle: 'السؤال عن الاتجاهات',
    description: 'الاستفسار عن الطريق إلى المتحف',
    lines: [
      { speaker: 'A', speakerNameEs: 'Turista', speakerNameAr: 'سائح', spanish: 'Disculpe, ¿sabe dónde está el museo de arte?', arabicTranslation: 'عذراً، هل تعرف أين متحف الفن؟', arabicPronunciation: 'ديسكلوبي، سابي دوندي إستا إل موسيو دي أرِتي؟' },
      { speaker: 'B', speakerNameEs: 'Residente', speakerNameAr: 'مقيم', spanish: 'Sí, está cerca. Siga recto y gire a la derecha en la segunda calle.', arabicTranslation: 'نعم، إنه قريب. استمر للأمام وانعطف يميناً في الشارع الثاني.', arabicPronunciation: 'سي، إستا ثيركا. سيجا ريكتو إي خيري أ لا ديريتشا إن لا سيبوندا كايي.' },
      { speaker: 'A', speakerNameEs: 'Turista', speakerNameAr: 'سائح', spanish: '¿Es lejos para ir caminando?', arabicTranslation: 'هل هو بعيد للذهاب سيراً على الأقدام؟', arabicPronunciation: 'إس ليهوس بارا إير كاميناندو؟' },
      { speaker: 'B', speakerNameEs: 'Residente', speakerNameAr: 'مقيم', spanish: 'No, apenas diez minutos.', arabicTranslation: 'لا، فقط عشر دقائق.', arabicPronunciation: 'نو، أبيناس دييث مينوتوس.' },
      { speaker: 'A', speakerNameEs: 'Turista', speakerNameAr: 'سائح', spanish: 'Muchas gracias por su ayuda.', arabicTranslation: 'شكراً جزيلاً على مساعدتك.', arabicPronunciation: 'موتشاس جراثياس بور سو أيودا.' },
      { speaker: 'B', speakerNameEs: 'Residente', speakerNameAr: 'مقيم', spanish: 'De nada. Que disfrute la visita.', arabicTranslation: 'عفواً. استمتع بالزيارة.', arabicPronunciation: 'دي نادا. كي ديسفروتي لا بيسيتا.' }
    ],
    quiz: [
        { type: 'multiple_choice', spanish: '¿Qué busca?', arabic: 'Was sucht er?', options: [ { text: 'متحف الفن', correct: true }, { text: 'مطعم', correct: false }, { text: 'الفندق', correct: false } ] },
        { type: 'true_false', spanish: 'El museo está muy lejos.', arabic: 'المتحف بعيد جدا.', isTrue: false, correctArabic: 'عشر دقائق' }
    ]
};
