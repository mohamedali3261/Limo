import { Conversation } from '../types';

export const sightseeingConversation: Conversation = {
  id: 'sightseeing',
  title: 'مشاهدة معالم المدينة',
  icon: 'Camera',
  description: 'جولة سياحية وطلب معلومات عن الأماكن التاريخية.',
  dialog: [
    { id: 1, speaker: 'Tourist', speakerId: 2, german: 'Entschuldigung, ist das hier das Brandenburger Tor?', arabicTranslation: 'معذرة، هل هذه هي بوابة براندنبورغ؟', arabicPronunciation: 'إنتشولديجونج، إيست داس هير داس براندنبورغر تور؟' },
    { id: 2, speaker: 'Einheimischer', speakerId: 1, german: 'Ja, genau. Es ist eines der bekanntesten Wahrzeichen von Berlin.', arabicTranslation: 'نعم، بالضبط. إنها واحدة من أشهر المعالم في برلين.', arabicPronunciation: 'يا، جيناو. إس إيست أينِس دير بيكانتستن فار-تسايشن فون بيرلين.' },
    { id: 3, speaker: 'Tourist', speakerId: 2, german: 'Es ist wirklich beeindruckend. Wie alt ist es?', arabicTranslation: 'إنها مثيرة للإعجاب حقاً. كم عمرها؟', arabicPronunciation: 'إس إيست فيركليش بين-دروكيند. في آلت إيست إس؟' },
    { id: 4, speaker: 'Einheimischer', speakerId: 1, german: 'Es wurde Ende des 18. Jahrhunderts gebaut. Haben Sie schon die Museumsinsel besucht?', arabicTranslation: 'بنيت في نهاية القرن الثامن عشر. هل قمت بزيارة جزيرة المتاحف بالفعل؟', arabicPronunciation: 'إس فورده إنده ديس أخت-تسينتن يار-هوندرتس غيباوت. هابن زي شون دي موزيومس-إينزل بيزوخت؟' },
    { id: 5, speaker: 'Tourist', speakerId: 2, german: 'Noch nicht. Wie komme ich am besten dorthin?', arabicTranslation: 'ليس بعد. كيف أصل إلى هناك بأفضل طريقة؟', arabicPronunciation: 'نوخ نيشت. في كومه إيش أم بيستن دورت-هين؟' },
    { id: 6, speaker: 'Einheimischer', speakerId: 1, german: 'Sie können den Bus 100 nehmen oder einfach 15 Minuten zu Fuß gehen.', arabicTranslation: 'يمكنك ركوب الحافلة رقم 100 أو ببساطة المشي لمدة 15 دقيقة.', arabicPronunciation: 'زي كونن دين بوس هوندرت نيمين أودر آينفاخ فونف-تسين مينوتن تسو فوس غيهن.' },
    { id: 7, speaker: 'Tourist', speakerId: 2, german: 'Vielen Dank für die Information! Berlin ist eine tolle Stadt.', arabicTranslation: 'شكراً جزيلاً على المعلومات! برلين مدينة رائعة.', arabicPronunciation: 'فيلن دانك فور دي إنفورماتسيون! بيرلين إيست آينه توله شتات.' },
    { id: 8, speaker: 'Einheimischer', speakerId: 1, german: 'Viel Spaß noch bei Ihrer Entdeckungstour!', arabicTranslation: 'استمتع بجولتك الاستكشافية!', arabicPronunciation: 'فيل شباس نوخ باي إيرر إينت-ديكونجس-تور!' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'أين تقع بوابة براندنبورغ؟',
      options: ['München', 'Berlin', 'Hamburg', 'Frankfurt'],
      answer: 'Berlin'
    },
    {
      id: 2,
      type: 'fill_in_blank',
      question: 'أكمل: Berlin ist eine ____ Stadt.',
      answer: 'tolle',
      wordWithBlank: 'Berlin ist eine ____ Stadt'
    }
  ]
};
