import { Conversation } from '../types';

export const universityConversation: Conversation = {
  id: 'university',
  title: 'في الجامعة',
  icon: 'GraduationCap',
  description: 'محادثة بين طلاب حول المحاضرات والامتحانات.',
  dialog: [
    { id: 1, speaker: 'Lars', speakerId: 1, german: 'Hey Julia! Gehst du heute auch zur Vorlesung in Informatik?', arabicTranslation: 'هيي جوليا! هل ستذهبين اليوم أيضاً لمحاضرة المعلوماتية؟', arabicPronunciation: 'هيي جوليا! غيست دو هويته أوخ تسور فور-ليزونج إن إنفورماتيك؟' },
    { id: 2, speaker: 'Julia', speakerId: 2, german: 'Ja, aber ich habe den Raum vergessen. Ist es wieder im Hörsaal 3?', arabicTranslation: 'نعم، لكني نسيت القاعة. هل هي مجدداً في قاعة المحاضرات رقم 3؟', arabicPronunciation: 'يا، آبر إيش هابه دين راوم فيرغيسن. إيست إس فيدر إيم هور-زال دراي؟' },
    { id: 3, speaker: 'Lars', speakerId: 1, german: 'Nein, heute ist es im Raum 204. Hast du schon für die Prüfung nächste Woche gelernt?', arabicTranslation: 'لا، اليوم في القاعة 204. هل درست بالفعل للامتحان الأسبوع القادم؟', arabicPronunciation: 'ناين، هويته إيست إس إيم راوم تسفاي-هوندرت-فير. هاست دو شون فور دي بروفونج نيخسته فوخه غيليرنت؟' },
    { id: 4, speaker: 'Julia', speakerId: 2, german: 'Noch nicht genug. Der Stoff ist ziemlich schwer. Wollen wir zusammen in der Bibliothek lernen?', arabicTranslation: 'ليس كافياً بعد. المادة صعبة نوعاً ما. هل نود الدراسة معاً في المكتبة؟', arabicPronunciation: 'نوخ نيشت غينوغ. دير شتوف إيست تسيم-ليش شفير. فولن فير تسوزامن إن دير بيبليوتيك ليرنين؟' },
    { id: 5, speaker: 'Lars', speakerId: 1, german: 'Gute Idee! Ich habe morgen Nachmittag Zeit. Treffen wir uns vor der Mensa?', arabicTranslation: 'فكرة جيدة! لدي وقت غداً بعد الظهر. هل نلتقي أمام المطعم الجامعي؟', arabicPronunciation: 'جوته إيديه! إيش هابه مورجن ناخ-ميتاغ تسايت. تريفن فير أونس فور دير مينزا؟' },
    { id: 6, speaker: 'Julia', speakerId: 2, german: 'Perfekt. Ich bringe meine Notizen mit.', arabicTranslation: 'ممتاز. سأحضر ملاحظاتي معي.', arabicPronunciation: 'بيرفيكت. إيش برينغه ماينه نوتيتسن ميت.' },
    { id: 7, speaker: 'Lars', speakerId: 1, german: 'Super, bis morgen dann!', arabicTranslation: 'رائع، أراكِ غداً إذن!', arabicPronunciation: 'زوبر، بيس مورجن دان!' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'ماذا تعني "Vorlesung"?',
      options: ['محاضرة', 'امتحان', 'مكتبة', 'عطلة'],
      answer: 'محاضرة'
    },
    {
      id: 2,
      type: 'multiple_choice',
      question: 'أين اقترحت جوليا الدراسة؟',
      options: ['In der Bibliothek', 'In der Mensa', 'Im Park', 'Zu Hause'],
      answer: 'In der Bibliothek'
    }
  ]
};
