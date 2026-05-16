import { Conversation } from '../types';

export const airportConversation: Conversation = {
  id: 'airport',
  title: 'في المطار',
  icon: 'Plane',
  description: 'الأسئلة عند السفر.',
  dialog: [
    { id: 1, speaker: 'Mona', speakerId: 2, german: 'Entschuldigung, ich suche den Check-in-Schalter für den Flug nach Kairo.', arabicTranslation: 'معذرة، أنا أبحث عن شباك تسجيل الدخول للرحلة المتجهة إلى القاهرة.', arabicPronunciation: 'إنتشولديجونج، إيش زوخه دين شيك إن شالتر فور دين فلوج ناخ كايرو.' },
    { id: 2, speaker: 'Mitarbeiter', speakerId: 1, german: 'Fliegen Sie mit Lufthansa? Das ist Schalter Nummer 45.', arabicTranslation: 'هل تسافرين مع لوفتهانزا؟ إنه الشباك رقم 45.', arabicPronunciation: 'فليجن زي ميت لوفتهانزا؟ داس إيست شالتر نومر فونف أوند فيرتسيش.' },
    { id: 3, speaker: 'Mona', speakerId: 2, german: 'Vielen Dank. Wo finde ich danach die Sicherheitskontrolle?', arabicTranslation: 'شكراً جزيلاً. أين أجد التفتيش الأمني بعد ذلك؟', arabicPronunciation: 'فيلن دانك. ڤو فينده إيش داناخ دي زيشرهايتس كونتروله؟' },
    { id: 4, speaker: 'Mitarbeiter', speakerId: 1, german: 'Gehen Sie hier geradeaus und dann links nehmen Sie die Rolltreppe nach oben.', arabicTranslation: 'اذهبي من هنا مباشرة ثم لليسار استخدمي السلم المتحرك للأعلى.', arabicPronunciation: 'جيهن زي هير جيراده أوس أوند دان لينكس نيمِن زي دي رول تريبه ناخ أوبِن.' },
    { id: 5, speaker: 'Mona', speakerId: 2, german: 'Und wo ist das Gate für den Flug nach Kairo?', arabicTranslation: 'وأين بوابة الرحلة المتجهة إلى القاهرة؟', arabicPronunciation: 'أوند ڤو إيست داس جيت فور دين فلوج ناخ كايرو؟' },
    { id: 6, speaker: 'Mitarbeiter', speakerId: 1, german: 'Das kann ich Ihnen jetzt noch nicht sagen. Bitte schauen Sie auf die Anzeigetafel nach der Kontrolle.', arabicTranslation: 'لا أستطيع أن أخبرك بذلك الآن. يرجى النظر إلى لوحة العرض بعد التفتيش.', arabicPronunciation: 'داس كان إيش إينن يتست نوخ نيشت زاجِن. بيته شاوِن زي أوف دي أنتسايجه تافل ناخ دير كونتروله.' },
    { id: 7, speaker: 'Mona', speakerId: 2, german: 'Wann beginnt das Boarding normalerweise?', arabicTranslation: 'متى يبدأ الصعود للطائرة عادة؟', arabicPronunciation: 'ڤان بيجينت داس بوردينج نورمالرڤايزه؟' },
    { id: 8, speaker: 'Mitarbeiter', speakerId: 1, german: 'Etwa 30 Minuten vor dem Abflug. Gute Reise!', arabicTranslation: 'حوالي 30 دقيقة قبل الإقلاع. رحلة سعيدة!', arabicPronunciation: 'إيتڤا درايسيش مينوتن فور ديم أب فلوج. جوته رايزه!' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'ماذا تعني كلمة "Sicherheitskontrolle"?',
      options: ['التفتيش الأمني', 'بوابة الصعود', 'مكتب الاستعلامات', 'جوازات السفر'],
      answer: 'التفتيش الأمني'
    },
    {
      id: 2,
      type: 'fill_in_blank',
      question: 'أكمل: Wo ist das ____ für den Flug nach Kairo?',
      answer: 'Gate',
      wordWithBlank: 'Wo ist das ____'
    }
  ]
};
