import { ConversationScenario } from './types';

export const tech_support: ConversationScenario = {
    id: 'tech_support',
    arabicTitle: 'الدعم التقني للإنترنت',
    description: 'حل مشكلة انقطاع الإنترنت مع الدعم الفني',
    lines: [
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'موظف الدعم', spanish: 'Buenos días, gracias por llamar a NetFix. ¿Cómo puedo ayudarle?', arabicTranslation: 'صباح الخير، شكراً لاتصالك بـ نت فيكس. كيف يمكنني مساعدتك؟', arabicPronunciation: 'بوينوس دياس، جراثياس بور يامار أ نت فيكس. كومو بويدو أيودارلي؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Hola. Mi internet no funciona desde esta mañana.', arabicTranslation: 'مرحباً. الإنترنت لا يعمل منذ هذا الصباح.', arabicPronunciation: 'أولا. مي إينتيرنيت نو فونثيونا ديسدي إيستا مانيانا.' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'موظف الدعم', spanish: 'Entiendo. ¿Ha intentado reiniciar el router?', arabicTranslation: 'أفهم. هل حاولت إعادة تشغيل الراوتر؟', arabicPronunciation: 'إينتييندو. أ إينتينتادو ريينيثار إل روتر؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Sí, lo hice tres veces pero no cambia nada.', arabicTranslation: 'نعم، فعلت ذلك ثلاث مرات لكن لم يتغير شيء.', arabicPronunciation: 'سي، لو إيثي تريس بيثيس بيرو نو كامبيا نادا.' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'موظف الدعم', spanish: '¿Las luces del router están parpadeando?', arabicTranslation: 'هل أضواء الراوتر تومض؟', arabicPronunciation: 'لاس لوثيس ديل روتر إستان باربادياندو؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Sí, la luz roja parpadea constantemente.', arabicTranslation: 'نعم، الضوء الأحمر يومض باستمرار.', arabicPronunciation: 'سي، لا لوث روخا باربادي أ كونستانتي مينتي.' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'موظف الدعم', spanish: 'Parece un problema de conexión en su área. Revisaré el sistema.', arabicTranslation: 'يبدو أنها مشكلة اتصال في منطقتك. سأراجع النظام.', arabicPronunciation: 'باريثي أون بروبليما دي كونيثيون إن سو أريا. ريبيساري إل سيستيما.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Es importante porque trabajo desde casa.', arabicTranslation: 'هذا مهم لأنني أعمل من المنزل.', arabicPronunciation: 'إس إينبورتانتي بوركي تراباخو ديسدي كاسا.' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'موظف الدعم', spanish: 'Comprendo. Sí, veo una incidencia general. La solucionaremos pronto.', arabicTranslation: 'أفهم. نعم، أرى مشكلة عامة. سنحلها قريباً.', arabicPronunciation: 'كومبريندو. سي، بيو أونا إينثيدينثيا خينيرال. لا سوليثيوناريموس برونتو.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: '¿Cuánto tiempo puede llevar la reparación?', arabicTranslation: 'كم من الوقت قد تستغرق الإصلاحات؟', arabicPronunciation: 'كوانتو تيمبو بويدي ييبار لا ريباراثيون؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'موظف الدعم', spanish: 'Esperamos que esté resuelto en un par de horas.', arabicTranslation: 'نتوقع أن تُحل خلال ساعتين.', arabicPronunciation: 'إسبراموس كي إستي ريسويلتو إن أون بار دي أوراس.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Muy bien, gracias por la información.', arabicTranslation: 'جيد جداً، شكراً على المعلومات.', arabicPronunciation: 'موي بيين، جراثياس بور لا إينفورماثيون.' }
    ],
    quiz: [
        { type: 'multiple_choice', spanish: '¿Cuál es el problema del cliente?', arabic: 'ما هي مشكلة الزبون؟', options: [ { text: 'El internet no funciona', correct: true }, { text: 'La velocidad es baja', correct: false }, { text: 'El router está roto', correct: false } ] },
        { type: 'multiple_choice', spanish: '¿Cuántas veces reinició el router?', arabic: 'كم مرة أعاد تشغيل الراوتر؟', options: [ { text: 'Una vez', correct: false }, { text: 'Dos veces', correct: false }, { text: 'Tres veces', correct: true } ] },
        { type: 'true_false', spanish: 'La luz roja parpadea constantemente.', arabic: 'الضوء الأحمر يومض باستمرار.', isTrue: true, correctArabic: 'نعم' },
        { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Mi internet no funciona', arabic: 'الإنترنت لا يعمل' }, { spanish: 'Ha intentado reiniciar el router', arabic: 'هل حاولت إعادة تشغيل الراوتر' }, { spanish: 'La luz roja parpadea constantemente', arabic: 'الضوء الأحمر يومض باستمرار' } ] },
        { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Trabajo desde casa', arabic: 'أعمل من المنزل' }, { spanish: 'Veo una incidencia general', arabic: 'أرى مشكلة عامة' }, { spanish: 'Esperamos que esté resuelto en un par de horas', arabic: 'نتوقع أن تُحل خلال ساعتين' } ] },
        { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'Mi internet no funciona desde esta _____', answer: 'mañana', fillBlankOptions: [ 'mañana', 'tarde', 'noche', 'madrugada' ] }
    ]
};
