import { Conversation } from '../types';

export const workplaceConversation: Conversation = {
  id: 'workplace',
  title: 'في مكان العمل',
  icon: 'Briefcase',
  description: 'التعامل مع الزملاء والمهام الوظيفية.',
  dialog: [
    { id: 1, speaker: 'Kollege', speakerId: 1, german: 'Guten Morgen, Herr Müller. Haben Sie den Bericht für das Meeting fertig?', arabicTranslation: 'صباح الخير، سيد مولر. هل جهزت التقرير للاجتماع؟', arabicPronunciation: 'جوتن مورجن، هير مولر. هاست دو دين بِريشت فور داس ميتينغ فيرتيش؟' },
    { id: 2, speaker: 'Müller', speakerId: 2, german: 'Guten Morgen. Fast fertig, ich muss nur noch die Statistiken einfügen.', arabicTranslation: 'صباح الخير. شبه جاهز، يجب علي فقط إدراج الإحصائيات.', arabicPronunciation: 'جوتن مورجن. فاست فيرتيش، إيش موس نور نوخ دي شتاتستيكن آين-فوغن.' },
    { id: 3, speaker: 'Kollege', speakerId: 1, german: 'Wann findet das Meeting genau statt?', arabicTranslation: 'متى سيعقد الاجتماع بالضبط؟', arabicPronunciation: 'فان فيندت داس ميتينغ غيناو شتات؟' },
    { id: 4, speaker: 'Müller', speakerId: 2, german: 'Es beginnt um 11 Uhr im großen Konferenzraum.', arabicTranslation: 'سيبدأ في الساعة 11 في قاعة المؤتمرات الكبيرة.', arabicPronunciation: 'إس بِجينت أوم إلف أور إيم غروسن كونفيرينتس-راوم.' },
    { id: 5, speaker: 'Kollege', speakerId: 1, german: 'Soll ich die Präsentation vorbereiten?', arabicTranslation: 'هل يجب أن أحضر العرض التقديمي؟', arabicPronunciation: 'زول إيش دي بريزينتاتسيون فور-بيراتين؟' },
    { id: 6, speaker: 'Müller', speakerId: 2, german: 'Ja, das wäre sehr hilfreich. Die Dateien liegen auf dem gemeinsamen Server.', arabicTranslation: 'نعم، سيكون ذلك مفيداً جداً. الملفات موجودة على السيرفر المشترك.', arabicPronunciation: 'يا، داس فيرِه زير هيلف-رايش. دي داتايين ليغن أوف ديم غيماين-زامن سيرفر.' },
    { id: 7, speaker: 'Kollege', speakerId: 1, german: 'Kein Problem. Ich mache das sofort.', arabicTranslation: 'لا مشكلة. سأقوم بذلك فوراً.', arabicPronunciation: 'كاين بروبليم. إيش ماخه داس زوفورت.' },
    { id: 8, speaker: 'Müller', speakerId: 2, german: 'Vielen Dank! Nach dem Meeting können wir zusammen Mittagessen gehen.', arabicTranslation: 'شكراً جزيلاً! بعد الاجتماع يمكننا الذهاب لتناول الغداء معاً.', arabicPronunciation: 'فيلن دانك! ناخ ديم ميتينغ كونن فير تسوزامِن مِيتاغ-إيسن غيهن.' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'أين سيعقد الاجتماع؟',
      options: ['Im Konferenzraum', 'Im Café', 'Zu Hause', 'Im Auto'],
      answer: 'Im Konferenzraum'
    },
    {
      id: 2,
      type: 'multiple_choice',
      question: 'ماذا طلب الزميل أن يفعل؟',
      options: ['تحضير العرض التقديمي', 'شراء القهوة', 'كتابة إيميل', 'الاتصال بالمدير'],
      answer: 'تحضير العرض التقديمي'
    }
  ]
};
