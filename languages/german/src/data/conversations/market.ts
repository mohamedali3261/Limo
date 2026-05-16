import { Conversation } from '../types';

export const marketConversation: Conversation = {
  id: 'market',
  title: 'في السوق',
  icon: 'ShoppingBag',
  description: 'التسوق ومعرفة الأسعار.',
  dialog: [
    { id: 1, speaker: 'Verkäufer', speakerId: 1, german: 'Guten Morgen! Was darf es heute sein?', arabicTranslation: 'صباح الخير! ماذا تفضل اليوم؟', arabicPronunciation: 'جوتن مورجن! ڤاس دارف إس هويته زاين؟' },
    { id: 2, speaker: 'Kunde', speakerId: 2, german: 'Guten Morgen. Ich hätte gern ein Kilo Äpfel und ein halbes Kilo Tomaten, bitte.', arabicTranslation: 'صباح الخير. أود كيلو من التفاح ونصف كيلو من الطماطم، من فضلك.', arabicPronunciation: 'جوتن مورجن. إيش هَيته جيرن أين كيلو إبفل أوند أين هالبِس كيلو توماتِن، بيته.' },
    { id: 3, speaker: 'Verkäufer', speakerId: 1, german: 'Gerne. Möchten Sie die süßen roten Äpfel oder die grünen?', arabicTranslation: 'بكل سرور. هل تريد التفاح الأحمر الحلو أم الأخضر؟', arabicPronunciation: 'جيرنه. موشتِن زي دي زوسِن روتِن إبفل أودر دي جرونِن؟' },
    { id: 4, speaker: 'Kunde', speakerId: 2, german: 'Die roten bitte. Haben Sie auch frische Kartoffeln?', arabicTranslation: 'الأحمر من فضلك. هل لديك أيضاً بطاطس طازجة؟', arabicPronunciation: 'دي روتِن بيته. هابِن زي أوخ فريشه كارتوفِلن؟' },
    { id: 5, speaker: 'Verkäufer', speakerId: 1, german: 'Ja, natürlich. Wie viel brauchen Sie?', arabicTranslation: 'نعم، بالطبع. كم تحتاج؟', arabicPronunciation: 'يا، ناتورليش. ڤي فيل براوخِن زي؟' },
    { id: 6, speaker: 'Kunde', speakerId: 2, german: 'Geben Sie mir bitte zwei Kilo. Das ist dann alles.', arabicTranslation: 'أعطني من فضلك اثنان كيلو. هذا كل شيء إذن.', arabicPronunciation: 'جيبِن زي مير بيته تسفاي كيلو. داس إيست دان أليس.' },
    { id: 7, speaker: 'Verkäufer', speakerId: 1, german: 'Das macht zusammen sieben Euro und fünfzig Cent.', arabicTranslation: 'هذا يكلف معاً سبعة يورو وخمسين سنتاً.', arabicPronunciation: 'داس ماخت تسوزامِن زيبِن أويْرو أوند فونفتسيش سينت.' },
    { id: 8, speaker: 'Kunde', speakerId: 2, german: 'Hier sind zehn Euro. Stimmt so, danke!', arabicTranslation: 'تفضل عشرة يورو. احتفظ بالباقي، شكراً!', arabicPronunciation: 'هير زينت تسين أويْرو. شتيمت زو، دانكه!' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'كم كيلو من التفاح طلب الزبون؟',
      options: ['Ein Kilo', 'Zwei Kilo', 'Drei Kilo', 'Pfund'],
      answer: 'Ein किलो'
    },
    {
      id: 2,
      type: 'multiple_choice',
      question: 'ما هو سعر المشتريات الإجمالي؟',
      options: ['7,50 Euro', '10,00 Euro', '5,00 Euro', '8,50 Euro'],
      answer: '7,50 Euro'
    },
    {
      id: 3,
      type: 'fill_in_blank',
      question: 'أكمل الجملة: Ich ____ gern Äpfel.',
      answer: 'hätte',
      wordWithBlank: 'Ich ____ gern Äpfel'
    }
  ]
};
