import { Conversation } from '../types';

export const greetingsConversation: Conversation = {
  id: 'greetings',
  title: 'التحيات والوداع',
  icon: 'Handshake',
  description: 'تحيات الصباح والمساء وطرق الوداع المختلفة.',
  dialog: [
    { id: 1, speaker: 'Lukas', speakerId: 1, german: 'Guten Morgen, Sarah!', arabicTranslation: 'صباح الخير يا سارة!', arabicPronunciation: 'جوتن مورجن، زارا!' },
    { id: 2, speaker: 'Sarah', speakerId: 2, german: 'Guten Morgen, Lukas. Wie geht es dir heute?', arabicTranslation: 'صباح الخير يا لوكاس. كيف حالك اليوم؟', arabicPronunciation: 'جوتن مورجن، لوكاس. ڤي جيت إس دير هويته؟' },
    { id: 3, speaker: 'Lukas', speakerId: 1, german: 'Danke, sehr gut. Und dir?', arabicTranslation: 'شكراً، بخير. وأنتِ؟', arabicPronunciation: 'دانكه، زير جوت. أوند دير؟' },
    { id: 4, speaker: 'Sarah', speakerId: 2, german: 'Auch gut, danke. Wir sehen uns später!', arabicTranslation: 'وأنا بخير أيضاً، شكراً. نلتقي لاحقاً!', arabicPronunciation: 'أوخ جوت، دانكه. ڤير زيهن أونس شبيتر!' },
    { id: 5, speaker: 'Lukas', speakerId: 1, german: 'Ja, bis später. Einen schönen Tag noch!', arabicTranslation: 'نعم، أراك لاحقاً. أتمنى لكِ يوماً سعيداً!', arabicPronunciation: 'يا، بيس شبيتر. أينن شونِن تاج نوخ!' },
    { id: 6, speaker: 'Sarah', speakerId: 2, german: 'Danke, gleichfalls! Tschüss!', arabicTranslation: 'شكراً، ولك بالمثل! وداعاً!', arabicPronunciation: 'دانكه، جلايش فالس! تشوس!' },
    { id: 7, speaker: 'Lukas', speakerId: 1, german: 'Auf Wiedersehen, Sarah.', arabicTranslation: 'إلى اللقاء يا سارة.', arabicPronunciation: 'أوف ڤيدرزين، زارا.' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'ماذا تعني "Guten Morgen"?',
      options: ['صباح الخير', 'مساء الخير', 'تصبح على خير', 'طاب يومك'],
      answer: 'صباح الخير'
    },
    {
      id: 2,
      type: 'multiple_choice',
      question: 'ترجم: "Bis später"',
      options: ['أراك لاحقاً', 'إلى اللقاء', 'صباح الخير', 'شكراً'],
      answer: 'أراك لاحقاً'
    },
    {
      id: 3,
      type: 'fill_in_blank',
      question: 'أكمل الجملة: Wie geht es ____?',
      answer: 'dir',
      wordWithBlank: 'Wie geht es ____?'
    },
    {
      id: 4,
      type: 'sentence_builder',
      question: 'رتب الجملة: "اسمي آنا."',
      options: ['Ich', 'heiße', 'Anna', 'bin', 'du'],
      answer: 'Ich heiße Anna'
    }
  ]
};
