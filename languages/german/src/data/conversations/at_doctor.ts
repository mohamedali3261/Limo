import { Conversation } from '../types';

export const atDoctorConversation: Conversation = {
  id: 'at_doctor',
  title: 'عند الطبيب',
  icon: 'Stethoscope',
  description: 'شرح الأعراض والحصول على نصيحة طبية.',
  dialog: [
    { id: 1, speaker: 'Arzt', speakerId: 1, german: 'Guten Tag. Was fehlt Ihnen?', arabicTranslation: 'نهار سعيد. مما تشكو؟', arabicPronunciation: 'جوتن تاج. فاس فيلت إينن؟' },
    { id: 2, speaker: 'Patient', speakerId: 2, german: 'Guten Tag, Herr Doktor. Ich habe seit gestern starke Kopfschmerzen.', arabicTranslation: 'نهار سعيد، حضرة الطبيب. لدي صداع قوي منذ أمس.', arabicPronunciation: 'جوتن تاج، هير دوكتور. إيش هابه زايت جيسترن شتاركه كوبف-شميرتسن.' },
    { id: 3, speaker: 'Arzt', speakerId: 1, german: 'Haben Sie auch Fieber oder Husten?', arabicTranslation: 'هل لديك أيضاً حمى أو سعال؟', arabicPronunciation: 'هابن زي أوخ فيبر أودر هوستن؟' },
    { id: 4, speaker: 'Patient', speakerId: 2, german: 'Nein, nur Kopfschmerzen und ich fühle mich sehr müde.', arabicTranslation: 'لا، فقط صداع وأشعر بتعب شديد.', arabicPronunciation: 'ناين، نور كوبف-شميرتسن أوند إيش فولة ميش زير مودة.' },
    { id: 5, speaker: 'Arzt', speakerId: 1, german: 'Ich werde Sie untersuchen. Machen Sie bitte den Mund auf.', arabicTranslation: 'سأقوم بفحصك. من فضلك افتح فمك.', arabicPronunciation: 'إيش فيردة زي أونتر-زوخن. ماخن زي بيته دين موند أوف.' },
    { id: 6, speaker: 'Arzt', speakerId: 1, german: 'Sie haben eine leichte Erkältung. Sie müssen viel trinken und sich ausruhen.', arabicTranslation: 'لديك زكام خفيف. يجب أن تشرب كثيراً وترتاح.', arabicPronunciation: 'زي هابن آينه لايشته إير-كيلتونج. زي موسن فيل ترينكن أوند زيش آوس-روهن.' },
    { id: 7, speaker: 'Patient', speakerId: 2, german: 'Brauche ich Medikamente?', arabicTranslation: 'هل أحتاج إلى أدوية؟', arabicPronunciation: 'براوخه إيش ميدي-كامينته؟' },
    { id: 8, speaker: 'Arzt', speakerId: 1, german: 'Hier ist ein Rezept für Schmerztabletten. Nehmen Sie eine am Abend.', arabicTranslation: 'إليك وصفة طبية لحبوب مسكنة. خذ واحدة في المساء.', arabicPronunciation: 'هير إيست آين ريتسبت فور شميرتس-تابليتن. نيمه زي آينه أم آبند.' },
    { id: 9, speaker: 'Patient', speakerId: 2, german: 'Vielen Dank, Herr Doktor.', arabicTranslation: 'شكراً جزيلاً، حضرة الطبيب.', arabicPronunciation: 'فيلن دانك، هير دوكتور.' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'مما يشكو المريض؟',
      options: ['صداع', 'ألم في البطن', 'سعال', 'حمى'],
      answer: 'صداع'
    }
  ]
};
