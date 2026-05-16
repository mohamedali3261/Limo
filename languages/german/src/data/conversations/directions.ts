import { Conversation } from '../types';

export const directionsConversation: Conversation = {
  id: 'directions',
  title: 'السؤال عن الطريق',
  icon: 'MapPin',
  description: 'كيفية طلب المساعدة للوصول إلى وجهة ما.',
  dialog: [
    { id: 1, speaker: 'Sami', speakerId: 2, german: 'Entschuldigung, wissen Sie, wo der Bahnhof ist?', arabicTranslation: 'معذرة، هل تعرف أين تقع محطة القطار؟', arabicPronunciation: 'إنتشولديجونج، ڤيسن زي، ڤو دير بانهوف إيست؟' },
    { id: 2, speaker: 'Passantin', speakerId: 1, german: 'Ja, das ist ganz nah. Gehen Sie diese Straße bis zur Ampel.', arabicTranslation: 'نعم، إنها قريبة جداً. اذهب في هذا الشارع حتى الإشارة الضوئية.', arabicPronunciation: 'يا، داس إيست غانتس ناه. جيهن زي ديزه شتراسه بيس تسور أمپل.' },
    { id: 3, speaker: 'Sami', speakerId: 2, german: 'Und dann? Muss ich links oder rechts abbiegen?', arabicTranslation: 'وبعد ذلك؟ هل يجب أن أنعطف يساراً أم يميناً؟', arabicPronunciation: 'أوند دان؟ موس إيش لينكس أودر ريشتس أب بيجن؟' },
    { id: 4, speaker: 'Passantin', speakerId: 1, german: 'An der Ampel biegen Sie rechts ab. Der Bahnhof ist direkt gegenüber der Kirche.', arabicTranslation: 'عند الإشارة انعطف يميناً. المحطة تقع مباشرة مقابل الكنيسة.', arabicPronunciation: 'آن دير أمپل بيجن زي ريشتس أب. دير بانهوف إيست ديريكت جيجن أوبير دير كيرشه.' },
    { id: 5, speaker: 'Sami', speakerId: 2, german: 'Ist es weit zu Fuß?', arabicTranslation: 'هل المسافة بعيدة مشياً؟', arabicPronunciation: 'إيست إس ڤايت تسو فوس؟' },
    { id: 6, speaker: 'Passantin', speakerId: 1, german: 'Neين، nur etwa fünf Minuten. Sie können den Bahnhof schon von der Ecke aus sehen.', arabicTranslation: 'لا، فقط حوالي خمس دقائق. يمكنك رؤية المحطة بالفعل من عند الزاوية.', arabicPronunciation: 'ناين، نور إيتفا فونف مينوتن. زي كونن دين بانهوف شون فون دير إيكه أوس زيهن.' },
    { id: 7, speaker: 'Sami', speakerId: 2, german: 'Vielen Dank für Ihre Hilfe!', arabicTranslation: 'شكراً جزيلاً لمساعدتك!', arabicPronunciation: 'فيلن دانك فور إيره هيلفه!' },
    { id: 8, speaker: 'Passantin', speakerId: 1, german: 'Gern geschehen. Einen schönen Tag noch!', arabicTranslation: 'لاشكر على واجب. أتمنى لك يوماً سعيداً!', arabicPronunciation: 'جيرن جيشيهن. أينن شونِن تاج نوخ!' },
  ],
  quizQuestions: [
    {
      id: 1,
      type: 'multiple_choice',
      question: 'كيف تسأل "أين تقع محطة القطار؟"',
      options: ['Wo ist der Bahnhof?', 'Wo ist der Flughafen?', 'Wo ist das Hotel?', 'Wo ist die Bank?'],
      answer: 'Wo ist der Bahnhof?'
    },
    {
      id: 2,
      type: 'fill_in_blank',
      question: 'ترجم "يميناً": ____',
      answer: 'Rechts',
      wordWithBlank: '____'
    }
  ]
};
