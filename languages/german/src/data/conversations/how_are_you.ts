import { Conversation } from '../types';

export const howAreYouConversation: Conversation = {
  id: 'how_are_you',
  title: 'كيف الحال؟',
  icon: 'Smile',
  description: 'كيف تسأل وتجيب عن الحال بشكل ودي.',
  dialog: [
    { id: 1, speaker: 'Tom', speakerId: 1, german: 'Hallo Maria! Lange nicht gesehen. Wie geht‘s?', arabicTranslation: 'مرحباً ماريا! لم أركِ منذ فترة طويلة. كيف الحال؟', arabicPronunciation: 'هالو ماريا! لانجه نيشت جيزيهن. ڤي جيتس؟' },
    { id: 2, speaker: 'Maria', speakerId: 2, german: 'Hallo Tom! Mir geht es super. Und selbst?', arabicTranslation: 'مرحباً توم! أنا ممتازة. وأنت؟', arabicPronunciation: 'هالو توم! مير جيت إس زوبر. أوند زيلبست؟' },
    { id: 3, speaker: 'Tom', speakerId: 1, german: 'Mir geht es heute nicht so gut. Ich bin sehr müde.', arabicTranslation: 'لست بخير اليوم. أنا متعب جداً.', arabicPronunciation: 'مير جيت إس هويته نيشت زو جوت. إيش بين زير موده.' },
    { id: 4, speaker: 'Maria', speakerId: 2, german: 'Oh, das tut mir leid. Hast du schlecht geschlafen?', arabicTranslation: 'أوه، يحزنني سماع ذلك. هل نمت بشكل سيء؟', arabicPronunciation: 'أوه، داس توت مير لايد. هاست دو شليشت جيشلافِن؟' },
    { id: 5, speaker: 'Tom', speakerId: 1, german: 'Ja, ich habe viel gearbeitet. Aber morgen wird es besser.', arabicTranslation: 'نعم، عملت كثيراً. لكن غداً سيكون أفضل.', arabicPronunciation: 'يا، إيش هابه فيل جيأربايتت. آبر مورجن ڤيرد إس بيسر.' },
    { id: 6, speaker: 'Maria', speakerId: 2, german: 'Dann ruh dich gut aus! Gute Besserung.', arabicTranslation: 'إذن ارتح جيداً! أتمنى لك التحسن.', arabicPronunciation: 'دان روه ديش جوت أوس! جوته بيسرونج.' },
    { id: 7, speaker: 'Tom', speakerId: 1, german: 'Danke, Maria. Wir sprechen uns morgen.', arabicTranslation: 'شكراً يا ماريا. نتحدث غداً.', arabicPronunciation: 'دانكه، ماريا. ڤير شبريشن أونس مورجن.' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'ماذا تعني "Wie geht es dir"?',
      options: ['كيف حالك؟', 'من أين أنت؟', 'ما اسمك؟', 'أين تعيش؟'],
      answer: 'كيف حالك؟'
    },
    {
      id: 2,
      type: 'multiple_choice',
      question: 'ترجم "Ich bin müde"',
      options: ['أنا متعب', 'أنا سعيد', 'أنا جائع', 'أنا مريض'],
      answer: 'أنا متعب'
    }
  ]
};
