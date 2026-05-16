import { ConversationScenario } from './types';

export const ordering_coffee: ConversationScenario = {
    id: 'ordering_coffee',
    arabicTitle: 'طلب قهوة',
    description: 'طلب قهوة وأنواع المخبوزات في المقهى',
    lines: [
      { speaker: 'A', speakerNameEs: 'Camarero', speakerNameAr: 'النادل', spanish: 'Buenos días. ¿Qué le gustaría tomar?', arabicTranslation: 'صباح الخير. ماذا تود أن تطلب؟', arabicPronunciation: 'بوينوس دياس. كي لي جوستاريا تومار؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Buenos días. Quisiera un café con leche, por favor.', arabicTranslation: 'صباح الخير. أريد قهوة بالحليب من فضلك.', arabicPronunciation: 'بوينوس دياس. كييسيرا أون كافيه كون ليتشي، بور فابور.' },
      { speaker: 'A', speakerNameEs: 'Camarero', speakerNameAr: 'النادل', spanish: 'Claro. ¿Lo quiere grande o mediano?', arabicTranslation: 'بالطبع. هل تودها كبيرة أم متوسطة؟', arabicPronunciation: 'كلارو. لو كييري غراندي أو ميديانو؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Grande, por favor. Y también una magdalena de chocolate.', arabicTranslation: 'كبيرة من فضلك. وأيضاً مافن شوكولاتة.', arabicPronunciation: 'غراندي، بور فابور. إي تامبيين أونا ماجدالينا دي تشوكولاتي.' },
      { speaker: 'A', speakerNameEs: 'Camarero', speakerNameAr: 'النادل', spanish: 'Excelente elección. ¿Algo más?', arabicTranslation: 'اختيار ممتاز. هل تريد أي شيء آخر؟', arabicPronunciation: 'إيكثيلينتي إيليكتيون. ألجو ماس؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'No, eso sería todo. ¿Cuánto cuesta?', arabicTranslation: 'لا، هذا كل شيء. بكم؟', arabicPronunciation: 'نو، إيسو سيريا تودو. كوانتو كويستا؟' },
      { speaker: 'A', speakerNameEs: 'Camarero', speakerNameAr: 'النادل', spanish: 'Son cuatro euros con cincuenta céntimos en total.', arabicTranslation: 'أربعة يورو وخمسون سنتاً بالإجمالي.', arabicPronunciation: 'سون كواترو إيوروس كون ثينكوينتا ثينتيموس إن توتال.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Aquí tiene cinco euros.', arabicTranslation: 'تفضل خمسة يورو.', arabicPronunciation: 'أكي تييني ثينكو إيوروس.' },
      { speaker: 'A', speakerNameEs: 'Camarero', speakerNameAr: 'النادل', spanish: 'Muchas gracias. Aquí tiene su cambio.', arabicTranslation: 'شكراً جزيلاً. تفضل باقي المال.', arabicPronunciation: 'موتشاس جراثياس. أكي تييني سو كامبيو.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Gracias. ¿Dónde puedo sentarme?', arabicTranslation: 'شكراً. أين يمكنني الجلوس؟', arabicPronunciation: 'جراثياس. دوندي بويدو سينتارمي؟' },
      { speaker: 'A', speakerNameEs: 'Camarero', speakerNameAr: 'النادل', spanish: 'Cualquier mesa libre junto a la ventana.', arabicTranslation: 'أي طاولة شاغرة قرب النافذة.', arabicPronunciation: 'كوالكير ميسا ليبري خونتو أ لا بانتانا.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Perfecto, muchas gracias.', arabicTranslation: 'ممتاز، شكراً جزيلاً.', arabicPronunciation: 'بيرفيكتو، موتشاس جراثياس.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Qué pidió el cliente?', arabic: 'ماذا طلب الزبون؟', options: [ { text: 'Un té', correct: false }, { text: 'Un café con leche', correct: true }, { text: 'Un jugo de naranja', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Qué acompañamiento pidió?', arabic: 'ما الحلوى التي طلبها؟', options: [ { text: 'Un croissant', correct: false }, { text: 'Una magdalena de chocolate', correct: true }, { text: 'Un pan tostado', correct: false } ] },
      { type: 'true_false', spanish: 'El cliente pidió dos magdalenas.', arabic: 'طلب الزبون مافنتين.', isTrue: false, correctArabic: 'واحدة فقط' },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Un café con leche, por favor', arabic: 'قهوة بالحليب من فضلك' }, { spanish: 'Una magdalena de chocolate', arabic: 'مافن شوكولاتة' }, { spanish: 'Cualquier mesa libre junto a la ventana', arabic: 'أي طاولة شاغرة قرب النافذة' } ] },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Cuatro euros con cincuenta céntimos', arabic: 'أربعة يورو وخمسون سنتاً' }, { spanish: 'Aquí tiene su cambio', arabic: 'تفضل باقي المال' }, { spanish: 'Dónde puedo sentarme', arabic: 'أين يمكنني الجلوس' } ] },
      { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'Quisiera un café con _____, por favor.', answer: 'leche', fillBlankOptions: [ 'leche', 'azúcar', 'hielo', 'canela' ] }
    ]
};
