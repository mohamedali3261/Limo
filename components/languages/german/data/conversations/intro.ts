import { Conversation } from '../types';

export const introConversation: Conversation = {
  id: 'intro',
  title: 'التعارف',
  icon: 'UserPlus',
  description: 'كيفية التعريف بنفسك وتبادل التحيات.',
  dialog: [
    { id: 1, speaker: 'Anna', speakerId: 1, german: 'Hallo! Ich heiße Anna. Wie heißt du?', arabicTranslation: 'مرحباً! اسمي آنا. ما اسمك؟', arabicPronunciation: 'هالو! إيش هايسه آنا. ڤي هايست دو؟' },
    { id: 2, speaker: 'Ali', speakerId: 2, german: 'Hallo Anna, ich bin Ali. Freut mich sehr, dich kennenzulernen.', arabicTranslation: 'مرحباً آنا، أنا علي. يسعدني جداً لقاؤك.', arabicPronunciation: 'هالو آنا، إيش بين علي. فرويت ميش زير، ديش كينِّن تسو ليرنين.' },
    { id: 3, speaker: 'Anna', speakerId: 1, german: 'Freut mich auch. Woher kommst du, Ali?', arabicTranslation: 'يسعدني أيضاً. من أين أنت يا علي؟', arabicPronunciation: 'فرويت ميش أوخ. ڤوهير كومست دو، علي؟' },
    { id: 4, speaker: 'Ali', speakerId: 2, german: 'Ich komme aus Ägypten, aus Kairo. Und du?', arabicTranslation: 'أنا من مصر، من القاهرة. وأنتِ؟', arabicPronunciation: 'إيش كومه أوس إيجيپتِن، أوس كايرو. أوند دو؟' },
    { id: 5, speaker: 'Anna', speakerId: 1, german: 'Ich komme aus Deutschland, aus Berlin. Wohnst du jetzt hier in München?', arabicTranslation: 'أنا من ألمانيا، من برلين. هل تعيش الآن هنا في ميونخ؟', arabicPronunciation: 'إيش كومه أوس دويتشلاند، أوس بيرلين. ڤونست دو يتست هير إن مونشِن؟' },
    { id: 6, speaker: 'Ali', speakerId: 2, german: 'Ja, ich wohne seit zwei Monaten hier. Ich lerne gerade Deutsch.', arabicTranslation: 'نعم، أعيش هنا منذ شهرين. أنا أتعلم الألمانية حالياً.', arabicPronunciation: 'يا، إيش ڤونه زايت تسفاي موناتِن هير. إيش ليرنه جيراده دويتش.' },
    { id: 7, speaker: 'Anna', speakerId: 1, german: 'Dein Deutsch ist schon sehr gut! Viel Erfolg beim Lernen.', arabicTranslation: 'ألمانيتك جيدة جداً بالفعل! بالتوفيق في التعلم.', arabicPronunciation: 'داين دويتش إيست شون زير جوت! فيل إرفولج بايم ليرنين.' },
    { id: 8, speaker: 'Ali', speakerId: 2, german: 'Vielen Dank, Anna. Bis bald!', arabicTranslation: 'شكراً جزيلاً آنا. أراكِ قريباً!', arabicPronunciation: 'فيلِن دانك، آنا. بيس بالد!' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'ماذا قالت آنا عندما سألت علي عن اسمه؟',
      options: ['Wie heißt du?', 'Woher kommst du?', 'Wie geht es dir?', 'Wer bist du?'],
      answer: 'Wie heißt du?'
    },
    {
      id: 2,
      type: 'multiple_choice',
      question: 'من أين جاء علي؟',
      options: ['Deutschland', 'Ägypten', 'Österreich', 'Schweiz'],
      answer: 'Ägypten'
    },
    {
      id: 3,
      type: 'fill_in_blank',
      question: 'أكمل الجملة: Ich ____ aus Kairo.',
      answer: 'komme',
      wordWithBlank: 'Ich ____ aus Kairo'
    },
    {
      id: 4,
      type: 'memory_game',
      question: 'طابق الكلمات بمعانيها',
      answer: '',
      memoryPairs: [
        { id: '1a', text: 'Wohner', matchId: '1' }, { id: '1b', text: 'يسكن', matchId: '1' },
        { id: '2a', text: 'Lernen', matchId: '2' }, { id: '2b', text: 'يتعلم', matchId: '2' },
        { id: '3a', text: 'Freut mich', matchId: '3' }, { id: '3b', text: 'يسعدني', matchId: '3' }
      ]
    }
  ]
};
