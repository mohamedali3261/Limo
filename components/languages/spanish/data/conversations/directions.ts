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
      { type: 'multiple_choice', spanish: '¿Qué busca?', arabic: 'ماذا يبحث عنه؟', options: [ { text: 'Museo de arte', correct: true }, { text: 'Restaurante', correct: false }, { text: 'Hotel', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Cuánto tiempo tarda caminando?', arabic: 'كم من الوقت يستغرق سيراً على الأقدام؟', options: [ { text: 'Cinco minutos', correct: false }, { text: 'Diez minutos', correct: true }, { text: 'Veinte minutos', correct: false } ] },
      { type: 'true_false', spanish: 'El museo está muy lejos.', arabic: 'المتحف بعيد جداً.', isTrue: false, correctArabic: 'عشر دقائق' },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Siga recto y gire a la derecha', arabic: 'استمر للأمام وانعطف يميناً' }, { spanish: 'Apenas diez minutos', arabic: 'فقط عشر دقائق' }, { spanish: 'Que disfrute la visita', arabic: 'استمتع بالزيارة' } ] },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Sabe dónde está el museo', arabic: 'تعرف أين المتحف' }, { spanish: 'En la segunda calle', arabic: 'في الشارع الثاني' }, { spanish: 'Muchas gracias por su ayuda', arabic: 'شكراً جزيلاً على مساعدتك' } ] },
      { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'Disculpe, ¿sabe dónde está el _____ de arte?', answer: 'museo', fillBlankOptions: [ 'museo', 'parque', 'teatro', 'cine' ] }
    ]
};
