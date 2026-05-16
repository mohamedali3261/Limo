import { Conversation } from '../types';

export const rentingConversation: Conversation = {
  id: 'renting',
  title: 'البحث عن سكن',
  icon: 'Key',
  description: 'كيفية الاستفسار عن شقة ومعاينة السكن.',
  dialog: [
    { id: 1, speaker: 'Mieter', speakerId: 2, german: 'Guten Tag, Herr Weber. Ich interessiere mich für die 3-Zimmer-Wohnung.', arabicTranslation: 'نهار سعيد، سيد فيبر. أنا مهتم بالشقة المكونة من 3 غرف.', arabicPronunciation: 'جوتن تاج، هير فيبر. إيش إن-تريسيرِه ميش فور دي دراي-تسيمر-فونونج.' },
    { id: 2, speaker: 'Vermieter', speakerId: 1, german: 'Schön, dass Sie da sind. Die Wohnung ist 80 Quadratmeter groß und hat einen Balkon.', arabicTranslation: 'جميل أنك هنا. مساحة الشقة 80 متراً مربعاً وبها شرفة.', arabicPronunciation: 'شون، داس زي دا زيند. دي فونونج إيست أختسيش كوادراد-ميتر غروس أوند هات آينن بالكون.' },
    { id: 3, speaker: 'Mieter', speakerId: 2, german: 'Wie hoch ist die monatliche Kaltmiete?', arabicTranslation: 'كم تبلغ قيمة الإيجار الأساسي (بدون فواتير) شهرياً؟', arabicPronunciation: 'في هوخ إيست دي موناث-ليخه كالت-ميته؟' },
    { id: 4, speaker: 'Vermieter', speakerId: 1, german: 'Die Kaltmiete beträgt 900 Euro, dazu kommen 200 Euro Nebenkosten.', arabicTranslation: 'الإيجار الأساسي 900 يورو، يضاف إليها 200 يورو تكاليف إضافية (فواتير).', arabicPronunciation: 'دي كالت-ميته بيتريغت نوين-هوندرت أويْرو، داتسو كومن تسفاي-هوندرت أويْرو نيبن-كوستن.' },
    { id: 5, speaker: 'Mieter', speakerId: 2, german: 'Gibt es eine Kaution?', arabicTranslation: 'هل يوجد تأمين؟', arabicPronunciation: 'غيبت إس آينه كاوتسيون؟' },
    { id: 6, speaker: 'Vermieter', speakerId: 1, german: 'Ja, die Kaution beträgt drei Monatskaltmieten.', arabicTranslation: 'نعم، التأمين يبلغ قيمة إيجار ثلاثة أشهر أساسية.', arabicPronunciation: 'يا، دي كاوتسيون بيتريغت دراي موناثس-كالت-ميتن.' },
    { id: 7, speaker: 'Mieter', speakerId: 2, german: 'Wann kann ich die Wohnung besichtigen?', arabicTranslation: 'متى يمكنني معاينة الشقة؟', arabicPronunciation: 'فان كان إيش دي فونونج بيزيشتيغين؟' },
    { id: 8, speaker: 'Vermieter', speakerId: 1, german: 'Kommen Sie bitte am Samstag um 10 Uhr vorbei.', arabicTranslation: 'من فضلك مر عليّ يوم السبت في الساعة 10.', arabicPronunciation: 'كومن زي بيته أم سامستاغ أوم تسين أور فورباي.' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'ماذا تعني "Kaltmiete"?',
      options: ['الإيجار بدون فواتير', 'الإيجار شامل الفواتير', 'ثمن البيع', 'التأمين'],
      answer: 'الإيجار بدون فواتير'
    },
    {
      id: 2,
      type: 'fill_in_blank',
      question: 'أكمل: Die Wohnung hat einen ____.',
      answer: 'Balkon',
      wordWithBlank: 'Die Wohnung hat einen ____'
    }
  ]
};
