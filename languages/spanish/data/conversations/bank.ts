import { ConversationScenario } from './types';

export const bank: ConversationScenario = {
    id: 'bank_transaction',
    arabicTitle: 'في البنك',
    description: 'فتح حساب بنكي جديد',
    lines: [
      { speaker: 'A', speakerNameEs: 'Bancario', speakerNameAr: 'موظف البنك', spanish: 'Buenos días. ¿En qué puedo ayudarle hoy?', arabicTranslation: 'صباح الخير. كيف يمكنني مساعدتك اليوم؟', arabicPronunciation: 'بوينوس دياس. إن كي بويدو أيودارلي أوي؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Quisiera abrir una cuenta corriente.', arabicTranslation: 'أود فتح حساب جاري.', arabicPronunciation: 'كييسيرا أبرير أونا كوينتا كوريينتي.' },
      { speaker: 'A', speakerNameEs: 'Bancario', speakerNameAr: 'موظف البنك', spanish: 'Claro. ¿Tiene su pasaporte o documento de identidad?', arabicTranslation: 'بالطبع. هل لديك جواز سفرك أو بطاقة هويتك؟', arabicPronunciation: 'كلارو. تييني سو باسافورتي أو دوكومينتو دي إيدينتيداد؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Sí, aquí tiene mi pasaporte.', arabicTranslation: 'نعم، ها هو جواز سفري.', arabicPronunciation: 'سي، أكي تييني مي باسافورتي.' },
      { speaker: 'A', speakerNameEs: 'Bancario', speakerNameAr: 'موظف البنك', spanish: 'Perfecto. Firme aquí, por favor.', arabicTranslation: 'ممتاز. وقع هنا من فضلك.', arabicPronunciation: 'بيرفيكتو. فيرمي أكي، بور فابور.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Muchas gracias. ¿Cuándo tendré la tarjeta?', arabicTranslation: 'شكراً جزيلاً. متى سأحصل على البطاقة؟', arabicPronunciation: 'موتشاس جراثياس. كواندو تيندري لا تارخيتا؟' },
      { speaker: 'A', speakerNameEs: 'Bancario', speakerNameAr: 'موظف البنك', spanish: 'La recibirá en su casa en cinco días hábiles.', arabicTranslation: 'ستستلمها في منزلك في خلال خمسة أيام عمل.', arabicPronunciation: 'لا ريثيبيري إن سو كاسا إن ثينكو دياس أابيليس.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Qué quiere hacer el cliente?', arabic: 'Was möchte der Kunde tun?', options: [ { text: 'فتح حساب بنكي', correct: true }, { text: 'سحب نقود', correct: false }, { text: 'الحديث مع المدير', correct: false } ] },
      { type: 'true_false', spanish: 'La tarjeta llega el mismo día.', arabic: 'البطاقة تصل في نفس اليوم.', isTrue: false, correctArabic: 'خمسة أيام عمل' }
    ]
};
