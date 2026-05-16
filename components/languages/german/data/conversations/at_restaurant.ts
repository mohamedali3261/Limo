import { Conversation } from '../types';

export const atRestaurantConversation: Conversation = {
  id: 'at_restaurant',
  title: 'في المطعم',
  icon: 'Utensils',
  description: 'طلب الطعام والتعامل مع الجرسون.',
  dialog: [
    { id: 1, speaker: 'Kellner', speakerId: 1, german: 'Guten Abend! Haben Sie reserviert?', arabicTranslation: 'مساء الخير! هل قمت بالحجز؟', arabicPronunciation: 'جوتن آبند! هابن زي ريسيرفيرت؟' },
    { id: 2, speaker: 'Gast', speakerId: 2, german: 'Guten Abend. Nein, haben Sie einen Tisch für zwei Personen?', arabicTranslation: 'مساء الخير. لا، هل لديكم طاولة لشخصين؟', arabicPronunciation: 'جوتن آبند. ناين، هابن زي آينن تيش فور تسفاي بيرزونن؟' },
    { id: 3, speaker: 'Kellner', speakerId: 1, german: 'Ja, bitte folgen Sie mir. Hier ist die Speisekarte.', arabicTranslation: 'نعم، تفضل باتباعي. ها هي قائمة الطعام.', arabicPronunciation: 'يا، بيته فولجن زي مير. هير إيست دي شبايزه-كارته.' },
    { id: 4, speaker: 'Gast', speakerId: 2, german: 'Danke. Was können Sie heute empfehlen?', arabicTranslation: 'شكراً. بماذا تنصحنا اليوم؟', arabicPronunciation: 'دانكه. فاس كونن زي هويته إيم-بفيلن؟' },
    { id: 5, speaker: 'Kellner', speakerId: 1, german: 'Der Fisch des Tages ist heute sehr frisch.', arabicTranslation: 'سمك اليوم طازج جداً اليوم.', arabicPronunciation: 'دير فيش ديس تاجس إيست هويته زير فريش.' },
    { id: 6, speaker: 'Gast', speakerId: 2, german: 'Gut, ich nehme den Fisch und einen Salat.', arabicTranslation: 'جيد، سآخذ السمك وسلطة.', arabicPronunciation: 'جوت، إيش نيمه دين فيش أوند آينن زالات.' },
    { id: 7, speaker: 'Kellner', speakerId: 1, german: 'Möchten Sie auch etwas trinken?', arabicTranslation: 'هل تود أيضاً شرب شيء؟', arabicPronunciation: 'موشتن زي أوخ إيتفاس ترينكن؟' },
    { id: 8, speaker: 'Gast', speakerId: 2, german: 'Ein großes Wasser, bitte.', arabicTranslation: 'ماء كبير، من فضلك.', arabicPronunciation: 'آين جروسس فاسر، بيته.' },
    { id: 9, speaker: 'Kellner', speakerId: 1, german: 'Kommt sofort. Guten Appetit!', arabicTranslation: 'سيأتي فوراً. شهية طيبة!', arabicPronunciation: 'كومنت زوفورت. جوتن أبيتيت!' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'ماذا طلب الزبون؟',
      options: ['السمك والسلطة', 'شنيتزل وبطاطس', 'بيتزا', 'حساء'],
      answer: 'السمك والسلطة'
    }
  ]
};
