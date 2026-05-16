import { Conversation } from '../types';

export const doctorConversation: Conversation = {
  id: 'doctor',
  title: 'عند الطبيب',
  icon: 'Stethoscope',
  description: 'التحدث عن الأمراض والأعراض.',
  dialog: [
    { id: 1, speaker: 'Arzt', speakerId: 1, german: 'Guten Morgen, Frau Müller. Was fehlt Ihnen?', arabicTranslation: 'صباح الخير، سيدة مولر. مم تشكين؟', arabicPronunciation: 'جوتن مورجن، فراو مولر. ڤاس فيلت إينن؟' },
    { id: 2, speaker: 'Mona', speakerId: 2, german: 'Mir geht es gar nicht gut. Ich habe starke Kopfschmerzen und Husten.', arabicTranslation: 'لست بخير على الإطلاق. لدي صداع قوي وسعال.', arabicPronunciation: 'مير جيت إس جار نيشت جوت. إيش هابه شتاركه كوبف شميرتسن أوند هوستِن.' },
    { id: 3, speaker: 'Arzt', speakerId: 1, german: 'Haben Sie auch Fieber?', arabicTranslation: 'هل لديك حمى أيضاً؟', arabicPronunciation: 'هابن زي أوخ فيبر؟' },
    { id: 4, speaker: 'Mona', speakerId: 2, german: 'Ja, ich glaube schon. Mir war heute Nacht sehr heiß.', arabicTranslation: 'نعم، أعتقد ذلك. كنت أشعر بحرارة شديدة الليلة الماضية.', arabicPronunciation: 'يا، إيش جلاوبه شون. مير ڤار هويته ناخت زير هايس.' },
    { id: 5, speaker: 'Arzt', speakerId: 1, german: 'Ich werde Sie mal untersuchen. Bitte atmen Sie tief ein und aus.', arabicTranslation: 'سأفحصك قليلاً. يرجى التنفس بعمق للداخل والخارج.', arabicPronunciation: 'إيش ڤيرده زي مال أونترزوخِن. بيته آتمِن زي تيف أين أوند أوس.' },
    { id: 6, speaker: 'Mona', speakerId: 2, german: 'Ist es etwas Schlimmes?', arabicTranslation: 'هل هو شيء خطير؟', arabicPronunciation: 'إيست إس إيتڤاس شليمِس؟' },
    { id: 7, speaker: 'Arzt', speakerId: 1, german: 'Nein, es ist nur eine starke Erkältung. Sie müssen im Bett bleiben und viel Wasser trinken.', arabicTranslation: 'لا، إنها مجرد نزلة برد قوية. يجب عليك البقاء في السرير وشرب الكثير من الماء.', arabicPronunciation: 'ناين، إس إيست نور أينه شتاركه إيركيلتونج. زي موسِن إيم بيت بلايبِن أوند فيل ڤاسر ترينكِن.' },
    { id: 8, speaker: 'Mona', speakerId: 2, german: 'Okay, danke Herr Doktor.', arabicTranslation: 'حسناً، شكراً سيدي الطبيب.', arabicPronunciation: 'أوكيه، دانكه هير دوكتور.' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'بماذا تشعر منى؟',
      options: ['صداع وسعال', 'ألم في البطن', 'كسر في القدم', 'ألم في الأذن'],
      answer: 'صداع وسعال'
    },
    {
      id: 2,
      type: 'multiple_choice',
      question: 'ماذا طلب الطبيب من منى؟',
      options: ['البقاء في السرير', 'الذهاب للعمل', 'ممارسة الرياضة', 'السفر'],
      answer: 'البقاء في السرير'
    }
  ]
};
