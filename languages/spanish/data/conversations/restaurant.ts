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
      { type: 'multiple_choice', spanish: '¿Qué quiere de segundo plato?', arabic: 'ماذا يريد للطبق الثاني؟', options: [ { text: 'حساء خضروات', correct: false }, { text: 'سمك مشوي', correct: true }, { text: 'ماء', correct: false } ] },
      { type: 'true_false', spanish: 'El cliente quiere vino.', arabic: 'الزبون يريد نبيذ.', isTrue: false, correctArabic: 'ماء' }
    ]
};
