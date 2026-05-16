import { Conversation } from '../types';

export const emergencyConversation: Conversation = {
  id: 'emergency',
  title: 'في حالة الطوارئ',
  icon: 'ShieldAlert',
  description: 'كيف تطلب المساعدة في حالة الحوادث أو الإصابات.',
  dialog: [
    { id: 1, speaker: 'Zeuge', speakerId: 1, german: 'Schnell! Rufen Sie einen Krankenwagen! Hier gab es einen Unfall.', arabicTranslation: 'بسرعة! اتصل بسيارة إسعاف! لقد حدث حادث هنا.', arabicPronunciation: 'شنيل! روفن زي آينن كرانكن-فاغن! هير غاب إس آينن أونفال.' },
    { id: 2, speaker: 'Passant', speakerId: 2, german: 'Ich rufe sofort die 112 an. Was ist passiert?', arabicTranslation: 'سأتصل بالرقم 112 فوراً. ماذا حدث؟', arabicPronunciation: 'إيش روفه زوفورت دي أينس-أينس-تسفاي آن. فاس إيست باسيرت؟' },
    { id: 3, speaker: 'Zeuge', speakerId: 1, german: 'Ein Auto ist gegen einen Baum gefahren. Der Fahrer scheint verletzt zu sein.', arabicTranslation: 'اصطدمت سيارة بشجرة. يبدو أن السائق مصاب.', arabicPronunciation: 'أين أوتو إيست غيغن آينن باوم غيفارن. دير فارر شاينت فيرليتست تسو زاين.' },
    { id: 4, speaker: 'Passant', speakerId: 2, german: 'Hallo? Notruf? Wir brauchen einen Notarzt in der Schlossstraße.', arabicTranslation: 'مرحباً؟ الطوارئ؟ نحتاج طبيب طوارئ في شارع شلوس-شتراسه.', arabicPronunciation: 'هالو؟ نوتروف؟ فير براوخن آينن نوت-آرست إن دير شلوس-شتراسه.' },
    { id: 5, speaker: 'Leitstelle', speakerId: 3, german: 'Wie viele Personen sind verletzt? Ist die Person ansprechbar?', arabicTranslation: 'كم عدد المصابين؟ هل الشخص واعٍ (يمكن محادثته)؟', arabicPronunciation: 'في فيله بيرزونن زيند فيرليتست؟ إيست دي بيرزون آن-شبغيش-بار؟' },
    { id: 6, speaker: 'Zeuge', speakerId: 1, german: 'Nur eine Person. Er ist benommen, aber er atmet.', arabicTranslation: 'شخص واحد فقط. إنه في حالة ذهول، لكنه يتنفس.', arabicPronunciation: 'نور آينه بيرزون. إير إيست بينومن، آبر إير آتمت.' },
    { id: 7, speaker: 'Leitstelle', speakerId: 3, german: 'Bleiben Sie vor Ort. Hilfe ist unterwegs.', arabicTranslation: 'ابقوا في المكان. المساعدة في الطريق.', arabicPronunciation: 'بلايبن زي فور أورت. هيلفه إيست أونترفيجس.' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'ما هو رقم الطوارئ في ألمانيا؟',
      options: ['112', '911', '110', '999'],
      answer: '112'
    },
    {
      id: 2,
      type: 'multiple_choice',
      question: 'ماذا تعني "Krankenwagen"?',
      options: ['سيارة إسعاف', 'سيارة شرطة', 'إطفاء', 'تاكسي'],
      answer: 'سيارة إسعاف'
    }
  ]
};
