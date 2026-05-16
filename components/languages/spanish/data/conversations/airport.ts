import { ConversationScenario } from './types';

export const airport: ConversationScenario = {
    id: 'airport_long',
    arabicTitle: 'في المطار (طويلة)',
    description: 'تأخير رحلة ووزن الأمتعة',
    lines: [
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الموظف', spanish: 'Por favor, ponga su maleta en la báscula.', arabicTranslation: 'من فضلك، ضع حقيبتك على الميزان.', arabicPronunciation: 'بور فابور، بونجا سو ماليتا إن لا باسكولا.' },
      { speaker: 'B', speakerNameEs: 'Pasajero', speakerNameAr: 'المسافر', spanish: 'De acuerdo. ¿Pesa más de veinte kilos?', arabicTranslation: 'حسناً. هل تزن أكثر من عشرين كيلوغراماً؟', arabicPronunciation: 'دي أكويردو. بيسا ماس دي بينتي كيلوس؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الموظف', spanish: 'Pesa veintidós. Tiene sobrepeso. Tendrá que pagar una multa.', arabicTranslation: 'تزن ثنين وعشرين. فيها وزن زائد. سيكون عليك دفع غرامة.', arabicPronunciation: 'بيسا بينتيدوس. تييني سوبريبيسو. تيندرا كي باجار أونا مولتا.' },
      { speaker: 'B', speakerNameEs: 'Pasajero', speakerNameAr: 'المسافر', spanish: 'Oh no. ¿Puedo sacar algo de ropa y ponerla en la mochila?', arabicTranslation: 'أوه لا. هل يمكنني إخراج بعض الملابس ووضعها في حقيبة الظهر؟', arabicPronunciation: 'أو نو. بويدو ساكار ألجو دي روبا إي بونيرلا إن لا موتتشيلا؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الموظف', spanish: 'Claro que sí. Hágalo aquí en un lado, por favor.', arabicTranslation: 'بالطبع. افعل ذلك هنا على جانب، من فضلك.', arabicPronunciation: 'كلارو كي سي. أجالو أكي إن أون لادو، بور فابور.' },
      { speaker: 'B', speakerNameEs: 'Pasajero', speakerNameAr: 'المسافر', spanish: 'Ya está. Por cierto, ¿El vuelo sale a la hora programada?', arabicTranslation: 'جاهز. بالمناسبة، هل الرحلة تقلع في الموعد المحدد؟', arabicPronunciation: 'يا إستا. بور ثييرتو، إل بويَلو سالي أ لا أورا بروجرامادا؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الموظف', spanish: 'Lleva un retraso de media hora. Puede esperar en la sala VIP si desea.', arabicTranslation: 'هناك تأخير لمدة نصف ساعة. يمكنك الانتظار في صالة كبار الشخصيات إذا أردت.', arabicPronunciation: 'ييبا أون ريتراسو دي ميديا أورا. بويدي إسبرار إن لا سالا في آي بي سي ديسيا.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Cuánto pesa la maleta primero?', arabic: 'كم تزن الحقيبة في البداية؟', options: [ { text: 'Veintidós kilos', correct: true }, { text: 'Veinte kilos', correct: false }, { text: 'Dieciocho kilos', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Cuál es el retraso del vuelo?', arabic: 'كم هو تأخير الرحلة؟', options: [ { text: 'Media hora', correct: true }, { text: 'Una hora', correct: false }, { text: 'Dos horas', correct: false } ] },
      { type: 'true_false', spanish: 'El vuelo sale temprano.', arabic: 'تقلع الرحلة باكرا.', isTrue: false, correctArabic: 'هناك تأخير' },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Ponga su maleta en la báscula', arabic: 'ضع حقيبتك على الميزان' }, { spanish: 'Tiene sobrepeso', arabic: 'فيها وزن زائد' }, { spanish: 'Lleva un retraso de media hora', arabic: 'هناك تأخير لمدة نصف ساعة' } ] },
      { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'Pesa _____. Tiene sobrepeso.', answer: 'veintidós', fillBlankOptions: [ 'veintidós', 'veinte', 'veintiuno', 'veintitrés' ] },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'De acuerdo', arabic: 'حسناً' }, { spanish: 'Hágalo aquí en un lado', arabic: 'افعل ذلك هنا على جانب' }, { spanish: 'Puede esperar en la sala VIP', arabic: 'يمكنك الانتظار في صالة كبار الشخصيات' } ] },
      { type: 'multiple_choice', spanish: '¿Dónde puede esperar el pasajero?', arabic: 'أين يمكن للمسافر أن ينتظر؟', options: [ { text: 'En la sala VIP', correct: true }, { text: 'En el avión', correct: false }, { text: 'En la calle', correct: false } ] }
    ]
};
