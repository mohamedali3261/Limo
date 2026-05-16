import { ConversationScenario } from './types';

export const restaurant: ConversationScenario = {
    id: 'restaurant_order',
    arabicTitle: 'طلب الطعام في المطعم',
    description: 'طلب وجبة كاملة في مطعم إسباني',
    lines: [
      { speaker: 'A', speakerNameEs: 'Camarero', speakerNameAr: 'النادل', spanish: 'Buenas noches. ¿Qué van a tomar de primero?', arabicTranslation: 'مساء الخير. ماذا ستطلبون للمقبلات؟', arabicPronunciation: 'بويناس نوتشيس. كي بان أ تومار دي بريميرو؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Para mí, una sopa de verduras, por favor.', arabicTranslation: 'بالنسبة لي، حساء خضروات من فضلك.', arabicPronunciation: 'بارا مي، أونا سوبا دي بيردوراس، بور فابور.' },
      { speaker: 'A', speakerNameEs: 'Camarero', speakerNameAr: 'النادل', spanish: 'Excelente elección. ¿Y de segundo?', arabicTranslation: 'اختيار ممتاز. وماذا عن الطبق الرئيسي؟', arabicPronunciation: 'إيكثيلينتي إليكثيون. إي دي سيبوندو؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Quisiera el pescado a la plancha con patatas.', arabicTranslation: 'أود سمك مشوي مع بطاطس.', arabicPronunciation: 'كييسيرا إل بيسكادو أ لا بلانتشا كون باتاتاس.' },
      { speaker: 'A', speakerNameEs: 'Camarero', speakerNameAr: 'النادل', spanish: '¿Desean algo de beber?', arabicTranslation: 'هل ترغبون في شيء للشرب؟', arabicPronunciation: 'ديسيان ألجو دي بيبير؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Solo agua natural, gracias.', arabicTranslation: 'فقط ماء طبيعي، شكراً.', arabicPronunciation: 'سولو أجوا ناتورال، جراثياس.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Qué quiere de segundo plato?', arabic: 'ماذا يريد للطبق الثاني؟', options: [ { text: 'Sopa de verduras', correct: false }, { text: 'Pescado a la plancha', correct: true }, { text: 'Agua', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Qué pidió de primero?', arabic: 'ماذا طلب للمقبلات؟', options: [ { text: 'Ensalada', correct: false }, { text: 'Sopa de verduras', correct: true }, { text: 'Pan', correct: false } ] },
      { type: 'true_false', spanish: 'El cliente quiere vino.', arabic: 'الزبون يريد نبيذ.', isTrue: false, correctArabic: 'ماء' },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Una sopa de verduras', arabic: 'حساء خضروات' }, { spanish: 'Pescado a la plancha con patatas', arabic: 'سمك مشوي مع بطاطس' }, { spanish: 'Solo agua natural', arabic: 'فقط ماء طبيعي' } ] },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Qué van a tomar de primero', arabic: 'ماذا ستطلبون للمقبلات' }, { spanish: 'Y de segundo', arabic: 'وماذا عن الطبق الرئيسي' }, { spanish: 'Desean algo de beber', arabic: 'هل ترغبون في شيء للشرب' } ] },
      { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'Quisiera el _____ a la plancha con patatas.', answer: 'pescado', fillBlankOptions: [ 'pescado', 'pollo', 'carne', 'jamón' ] }
    ]
};
