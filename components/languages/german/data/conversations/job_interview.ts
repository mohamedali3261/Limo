import { Conversation } from '../types';

export const jobInterviewConversation: Conversation = {
  id: 'job_interview',
  title: 'مقابلة عمل',
  icon: 'Briefcase',
  description: 'محادثة حول الخبرات المهنية والتقديم للوظائف.',
  dialog: [
    { id: 1, speaker: 'Chef', speakerId: 1, german: 'Guten Tag, Herr Schmidt. Bewerben Sie sich als Softwareentwickler?', arabicTranslation: 'نهار سعيد، سيد شميت. هل تتقدم لوظيفة مطور برامج؟', arabicPronunciation: 'جوتن تاج، هير شميت. بيفيربن زي زيش الس سوفت وير-إنتفيكلر؟' },
    { id: 2, speaker: 'Schmidt', speakerId: 2, german: 'Guten Tag. Ja, genau. Ich habe Ihre Anzeige im Internet gelesen.', arabicTranslation: 'نهار سعيد. نعم، بالضبط. لقد قرأت إعلانكم على الإنترنت.', arabicPronunciation: 'جوتن تاج. يا، جيناو. إيش هابه إيري أنتسايجة إيم إنترنت جيليرن.' },
    { id: 3, speaker: 'Chef', speakerId: 1, german: 'Erzählen Sie mir bitte etwas über Ihre bisherige Erfahrung.', arabicTranslation: 'أخبرني من فضلك شيئاً عن خبرتك السابقة.', arabicPronunciation: 'إير-تسلن زي مير بيته إيتفاس أوبر إيري بِي-شيريجة إير-فارونج.' },
    { id: 4, speaker: 'Schmidt', speakerId: 2, german: 'Ich habe fünf Jahre lang in einer Firma in Hamburg gearbeitet.', arabicTranslation: 'لقد عملت لمدة خمس سنوات في شركة في هامبورغ.', arabicPronunciation: 'إيش هابه فونف يارة لانج إن آينر فيرما إن هامبورغ جيأربايتت.' },
    { id: 5, speaker: 'Chef', speakerId: 1, german: 'Warum möchten Sie jetzt bei uns arbeiten?', arabicTranslation: 'لماذا تود العمل معنا الآن؟', arabicPronunciation: 'فاروم موشتن زي يتست باي أونس آربايتن؟' },
    { id: 6, speaker: 'Schmidt', speakerId: 2, german: 'Ihre Firma ist sehr bekannt für innovative Projekte. Das interessiert mich sehr.', arabicTranslation: 'شركتكم معروفة جداً بمشاريعها المبتكرة. هذا يثير اهتمامي كثيراً.', arabicPronunciation: 'إيري فيرما إيست زير بيكانت فور إنوفاتيفه برويكته. داس إن-تريسيرت ميش زير.' },
    { id: 7, speaker: 'Chef', speakerId: 1, german: 'Haben Sie auch Erfahrung mit Teamarbeit?', arabicTranslation: 'هل لديك أيضاً خبرة في العمل الجماعي؟', arabicPronunciation: 'هابن زي أوخ إير-فارونج ميت تيم-آربايت؟' },
    { id: 8, speaker: 'Schmidt', speakerId: 2, german: 'Ja, ich arbeite gerne im Team. Kommunikation ist mir sehr wichtig.', arabicTranslation: 'نعم، أحب العمل في فريق. التواصل مهم جداً بالنسبة لي.', arabicPronunciation: 'يا، إيش آربايتة جيرنه إيم تيم. كومونيكاتسيون إيست مير زير فيشتيش.' },
    { id: 9, speaker: 'Chef', speakerId: 1, german: 'Das klingt gut. Wann könnten Sie bei uns anfangen?', arabicTranslation: 'هذا يبدو جيداً. متى يمكنك البدء معنا؟', arabicPronunciation: 'داس كلينكت جوت. فين كونتن زي باي أونس أن-فانجن؟' },
    { id: 10, speaker: 'Schmidt', speakerId: 2, german: 'Ich könnte ab nächsten Monat beginnen. Ich habe eine Kündigungsfrist.', arabicTranslation: 'يمكنني البدء من الشهر القادم. لدي فترة إشعار بالاستقالة.', arabicPronunciation: 'إيش كونته أب نيخستن مونات بِي-جينن. إيش هابه آينه كونديجونجس-فريست.' },
    { id: 11, speaker: 'Chef', speakerId: 1, german: 'Vielen Dank für das Gespräch. Wir melden uns bei Ihnen.', arabicTranslation: 'شكراً جزيلاً على المحادثة. سنقوم بالاتصال بك.', arabicPronunciation: 'فيلن دانك فور داس جي-شبريخ. فير ميلدن أونس باي إينن.' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'ما هي الوظيفة التي يتقدم لها Schmidt؟',
      options: ['Softwareentwickler', 'Arzt', 'Lehrer', 'Kellner'],
      answer: 'Softwareentwickler'
    },
    {
      id: 2,
      type: 'multiple_choice',
      question: 'ماذا تعني "Teamarbeit"?',
      options: ['العمل الجماعي', 'العمل الفردي', 'وقت الراحة', 'الخبرة السابقة'],
      answer: 'العمل الجماعي'
    }
  ]
};
