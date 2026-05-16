import { Conversation } from '../types';

export const hotelConversation: Conversation = {
  id: 'hotel',
  title: 'في الفندق',
  icon: 'Hotel',
  description: 'حجز غرفة والاستعلام عن الخدمات.',
  dialog: [
    { id: 1, speaker: 'Rezeption', speakerId: 1, german: 'Herzlich willkommen im Hotel Sonnenschein! Wie kann ich Ihnen helfen?', arabicTranslation: 'أهلاً وسهلاً بك في فندق زوننشاين! كيف يمكنني مساعدتك؟', arabicPronunciation: 'هيرتسليش فيلكومن إيم هوتيل زونِن شاين! ڤي كان إيش إينن هيلفن؟' },
    { id: 2, speaker: 'Gast', speakerId: 2, german: 'Guten Abend. Ich habe ein Einzelzimmer für drei Nächte reserviert.', arabicTranslation: 'مساء الخير. لقد حجزت غرفة مفردة لثلاث ليالٍ.', arabicPronunciation: 'جوتن آبند. إيش هابه أين آينتسِل تسيمر فور دراي نيشته ريزيرفيرت.' },
    { id: 3, speaker: 'Rezeption', speakerId: 1, german: 'Auf welchen Namen, bitte?', arabicTranslation: 'بأي اسم، من فضلك؟', arabicPronunciation: 'أوف ڤيلشين نامن، بيته؟' },
    { id: 4, speaker: 'Gast', speakerId: 2, german: 'Auf den Namen Rami.', arabicTranslation: 'باسم رامي.', arabicPronunciation: 'أوف دين نامن رامي.' },
    { id: 5, speaker: 'Rezeption', speakerId: 1, german: 'Ah ja, ich habe es gefunden. Bitte füllen Sie dieses Formular aus.', arabicTranslation: 'آه نعم، لقد وجدته. يرجى ملء هذا النموذج.', arabicPronunciation: 'آه يا، إيش هابه إس جيفوندِن. بيته فُولِن زي ديزيس فورمولار أوس.' },
    { id: 6, speaker: 'Gast', speakerId: 2, german: 'Mache ich. Ab wann gibt es morgen Frühstück?', arabicTranslation: 'سأفعل. من متى يوجد إفطار غداً؟', arabicPronunciation: 'ماخه إيش. أب ڤان جيبت إس مورجن فروشِتُك؟' },
    { id: 7, speaker: 'Rezeption', speakerId: 1, german: 'Das Frühstück ist von 7 bis 10 Uhr im Restaurant. Hier ist Ihr Schlüssel, Zimmer 204 im zweiten Stock.', arabicTranslation: 'الإفطار من 7 إلى 10 في المطعم. تفضل مفتاحك، غرفة 204 في الطابق الثاني.', arabicPronunciation: 'داس فروشِتُك إيست فون زيبِن بيس تسين أور إيم ريستوران. هير إيست إير شلوسل، تسيمر تسفاي هوندرت فير إيم تسفايتن شتوك.' },
    { id: 8, speaker: 'Gast', speakerId: 2, german: 'Vielen Dank! Einen schönen Abend noch.', arabicTranslation: 'شكراً جزيلاً! أتمنى لك مساءً سعيداً.', arabicPronunciation: 'فيلن دانك! أينن شونِن آبند نوخ.' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'memory_game',
      question: 'طابق الكلمات بمعانيها',
      answer: '',
      memoryPairs: [
        { id: '1a', text: 'Einzelzimmer', matchId: '1' }, { id: '1b', text: 'غرفة مفردة', matchId: '1' },
        { id: '2a', text: 'Frühstück', matchId: '2' }, { id: '2b', text: 'إفطار', matchId: '2' },
        { id: '3a', text: 'Schlüssel', matchId: '3' }, { id: '3b', text: 'مفتاح', matchId: '3' }
      ]
    },
    {
      id: 2,
      type: 'multiple_choice',
      question: 'أين تتناول الإفطار عادة في الفندق؟',
      options: ['Im Restaurant', 'Im Bett', 'Im Auto', 'Im Bahnhof'],
      answer: 'Im Restaurant'
    }
  ]
};
