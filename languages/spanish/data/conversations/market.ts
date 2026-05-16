import { ConversationScenario } from './types';

export const market: ConversationScenario = {
    id: 'market',
    arabicTitle: 'في السوق (طويلة)',
    description: 'شراء العديد من المنتجات والمساومة قليلاً',
    lines: [
      { speaker: 'A', speakerNameEs: 'Vendedor', speakerNameAr: 'البائع', spanish: '¡Buenos días! Pase, pase. Tenemos las mejores frutas hoy. ¿Qué le pongo?', arabicTranslation: 'صباح الخير! تفضل، تفضل. لدينا أفضل الفواكه اليوم. ماذا أضع لك؟', arabicPronunciation: 'بوينوس دياس! باسي، باسي. تينيموس لاس ميخوريس فروتاس أوي. كي لي بونجو؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Buenos días. Quería saber a cuánto están los tomates.', arabicTranslation: 'صباح الخير. كنت أريد أن أعرف بكم الطماطم.', arabicPronunciation: 'بوينوس دياس. كيريا سابير أ كوانتو إستان لوس توماتيس.' },
      { speaker: 'A', speakerNameEs: 'Vendedor', speakerNameAr: 'البائع', spanish: 'A dos euros el kilo. Muy baratos y muy dulces.', arabicTranslation: 'بيوروين للكيلو. رخيصة جداً وحلوة جداً.', arabicPronunciation: 'أ دوس إيوروس إل كيلو. موي باراتوس إي موي دولثيس.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Deme un kilo y medio, por favor. Y también plátanos.', arabicTranslation: 'أعطني كيلو ونصف من فضلك. وأيضاً موز.', arabicPronunciation: 'ديمي أون كيلو إي ميديو، بور فابور. إي تامبيين بلاتانوس.' },
      { speaker: 'A', speakerNameEs: 'Vendedor', speakerNameAr: 'البائع', spanish: 'Plátanos de Canarias, por supuesto. ¿Algo más? Miel fresca, ajos...', arabicTranslation: 'موز من جزر الكناري بالطبع. هل تريد شيئاً آخر؟ عسل طازج، ثوم...', arabicPronunciation: 'بلاتانوس دي كانارياس، بور سوبويستو. ألجو ماس؟ مييل فريسكا، أوس...' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Eso es todo. ¿Cuánto es en total?', arabicTranslation: 'هذا كل شيء. كم المجموع؟', arabicPronunciation: 'إيسو إس تودو. كوانتو إس إن توتال؟' },
      { speaker: 'A', speakerNameEs: 'Vendedor', speakerNameAr: 'البائع', spanish: 'Son 4 euros con 50 céntimos. Gracias y que tenga un buen día.', arabicTranslation: 'أربعة يورو وخمسين سنتاً. شكراً لك ويوم سعيد.', arabicPronunciation: 'سون كواترو إيوروس كون ثينكوينتا ثينتيموس. جراثياس إي كي تينجا أون بوين ديا.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Cuánto cuesta un kilo de tomates?', arabic: 'Wie viel kostet ein Kilo Tomaten?', options: [ { text: '١ يورو', correct: false }, { text: '٤.٥ يورو', correct: false }, { text: '٢ يورو', correct: true } ] },
      { type: 'arrange', spanish: 'Deme un kilo y medio', arabic: 'أعطني كيلو ونصف', arrangeWords: ['Deme', 'un', 'kilo', 'medio', 'y', 'por'] },
      { type: 'true_false', spanish: 'El cliente compró miel.', arabic: 'الزبون اشترى عسلاً.', isTrue: false, correctArabic: 'هذا كل شيء (لم يشترِ العسل)' }
    ]
};
