import { Conversation } from '../types';

export const restaurantConversation: Conversation = {
  id: 'restaurant',
  title: 'في المطعم',
  icon: 'UtensilsCrossed',
  description: 'طلب الطعام ودفع الحساب.',
  dialog: [
    { id: 1, speaker: 'Kellner', speakerId: 1, german: 'Guten Abend! Haben Sie schon gewählt oder möchten Sie noch einen Moment warten?', arabicTranslation: 'مساء الخير! هل اخترتم بالفعل أم تودون الانتظار لحظة أخرى؟', arabicPronunciation: 'جوتن آبند! هابن زي شون جيفيلت أودر موشتِن زي نوخ أينن مومينت ڤارتِن؟' },
    { id: 2, speaker: 'Sami', speakerId: 2, german: 'Wir möchten gerne bestellen. Ich nehme das Schnitzel mit Pommes.', arabicTranslation: 'نود أن نطلب. سآخذ شنيتزل مع بطاطس مقلية.', arabicPronunciation: 'ڤير موشتِن جيرنه بيشتيلِن. إيش نيمه داس شنيتسِل ميت بومِس.' },
    { id: 3, speaker: 'Kellner', speakerId: 1, german: 'Sehr gerne. Und was möchten Sie trinken?', arabicTranslation: 'بكل سرور. وماذا تود أن تشرب؟', arabicPronunciation: 'زير جيرنه. أوند ڤاس موشتِن زي ترينكِن؟' },
    { id: 4, speaker: 'Sami', speakerId: 2, german: 'Ein großes Wasser, bitte. Haben Sie auch einen kleinen Beilagensalat dazu?', arabicTranslation: 'ماء كبير، من فضلك. هل لديكم أيضاً سلطة جانبية صغيرة معها؟', arabicPronunciation: 'أين جروسِس ڤاسر، بيته. هابن زي أوخ أينن كلاينِن بايلاجن زالات داتسو؟' },
    { id: 5, speaker: 'Kellner', speakerId: 1, german: 'Ja, der ist beim Schnitzel dabei. Kommt sofort!', arabicTranslation: 'نعم، إنها تأتي مع الشنيتزل. سيأتي فوراً!', arabicPronunciation: 'يا، دير إيست بايم شنيتسل داباي. كومت زوفورت!' },
    { id: 6, speaker: 'Sami', speakerId: 2, german: 'Entschuldigung, wir möchten gerne zahlen.', arabicTranslation: 'معذرة، نود أن ندفع.', arabicPronunciation: 'إنتشولديجونج، ڤير موشتِن جيرنه تسالِن.' },
    { id: 7, speaker: 'Kellner', speakerId: 1, german: 'Zusammen oder getrennt? Das macht dann 18 Euro.', arabicTranslation: 'معاً أم منفصلين؟ الحساب إذن 18 يورو.', arabicPronunciation: 'تسوزامِن أودر جيترينت؟ داس ماخت دان أختسين أويْرو.' },
    { id: 8, speaker: 'Sami', speakerId: 2, german: 'Zusammen bitte. Hier sind 20 Euro. Stimmt so.', arabicTranslation: 'معاً من فضلك. تفضل 20 يورو. احتفظ بالباقي.', arabicPronunciation: 'تسوزامِن بيته. هير زينت تسفانتسيش أويْرو. شتيمت زو.' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'fill_in_blank',
      question: 'أكمل الجملة: Ich möchte gerne ____.',
      answer: 'bestellen',
      wordWithBlank: 'Ich möchte gerne ____'
    },
    {
      id: 2,
      type: 'multiple_choice',
      question: 'ماذا يعني "Die Rechnung bitte"?',
      options: ['الحساب من فضلك', 'القائمة من فضلك', 'ماء من فضلك', 'شكراً جزيلاً'],
      answer: 'الحساب من فضلك'
    }
  ]
};
