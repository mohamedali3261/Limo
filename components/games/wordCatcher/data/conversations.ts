import { Conversation } from '../types';

// المحادثات الأساسية - المستويات 1-10
export const BASIC_CONVERSATIONS: Conversation[] = [
  { 
    id: 'intro', 
    name: 'التعارف الأول',
    level: 1,
    lines: [
        { speaker: 'A', en: 'Hello how are you doing today', ar: 'مرحباً، كيف حالك اليوم؟' },
        { speaker: 'B', en: 'I am doing very well thank you', ar: 'أنا بحال جيد جداً، شكراً لك' },
        { speaker: 'A', en: 'What is your name and where are you from', ar: 'ما اسمك ومن أين أنت؟' },
        { speaker: 'B', en: 'My name is Memo and I am from Egypt', ar: 'اسمي ميمو وأنا من مصر' }
    ]
  },
  { 
    id: 'cafe', 
    name: 'في المقهى',
    level: 2,
    lines: [
        { speaker: 'A', en: 'I would like to order a cup of coffee please', ar: 'أود أن أطلب فنجان قهوة من فضلك' },
        { speaker: 'B', en: 'Would you like it with milk or sugar', ar: 'هل تريدها بالحليب أم بالسكر؟' },
        { speaker: 'A', en: 'Just milk please no sugar for me', ar: 'بالحليب فقط من فضلك، بدون سكر' },
        { speaker: 'B', en: 'That will be three pounds and fifty pence', ar: 'سيكون المبلغ ثلاثة جنيهات وخمسون بنساً' }
    ]
  },
  {
    id: 'shopping',
    name: 'التسوق',
    level: 3,
    lines: [
      { speaker: 'A', en: 'Excuse me how much does this shirt cost', ar: 'عفواً، بكم يكلف هذا القميص؟' },
      { speaker: 'B', en: 'This one costs twenty five dollars', ar: 'هذا يكلف خمسة وعشرون دولاراً' },
      { speaker: 'A', en: 'That seems a bit expensive for me', ar: 'يبدو هذا غالياً بعض الشيء بالنسبة لي' },
      { speaker: 'B', en: 'I can give you a discount of ten percent', ar: 'يمكنني أن أعطيك خصماً بنسبة عشرة بالمئة' }
    ]
  },
  {
    id: 'direction',
    name: 'الاتجاهات',
    level: 4,
    lines: [
      { speaker: 'A', en: 'Excuse me where is the nearest bank from here', ar: 'عفواً، أين أقرب بنك من هنا؟' },
      { speaker: 'B', en: 'Go straight ahead for two blocks', ar: 'اذهب مباشرة لمسافة مبنيين' },
      { speaker: 'A', en: 'Then should I turn right or left', ar: 'ثم هل أنعطف يميناً أم يساراً؟' },
      { speaker: 'B', en: 'Turn right and you will see it on your left', ar: 'انعطف يميناً وستراه على يسارك' }
    ]
  },
  {
    id: 'weather',
    name: 'الطقس',
    level: 5,
    lines: [
        { speaker: 'A', en: 'How is the weather looking today outside', ar: 'كيف يبدو الطقس اليوم في الخارج؟' },
        { speaker: 'B', en: 'It is very sunny and warm today', ar: 'إنه مشمس ودافئ جداً اليوم' },
        { speaker: 'A', en: 'Do you think it will rain later', ar: 'هل تعتقد أنها ستمطر لاحقاً؟' },
        { speaker: 'B', en: 'No I think it will stay sunny all day', ar: 'لا، أعتقد أنه سيبقى مشمساً طوال اليوم' }
    ]
  },
  {
     id: 'family',
     name: 'العائلة',
     level: 6,
     lines: [
         { speaker: 'A', en: 'Do you have any brothers or sisters', ar: 'هل لديك أي إخوة أو أخوات؟' },
         { speaker: 'B', en: 'Yes I have one brother and two sisters', ar: 'نعم، لدي أخ واحد وأختان' },
         { speaker: 'A', en: 'Are they older or younger than you', ar: 'هل هم أكبر أم أصغر منك؟' },
         { speaker: 'B', en: 'My brother is older but my sisters are younger', ar: 'أخي أكبر لكن أخواتي أصغر' }
     ]
  },
  {
    id: 'restaurant',
    name: 'في المطعم',
    level: 7,
    lines: [
      { speaker: 'A', en: 'Good evening I would like a table for two please', ar: 'مساء الخير، أريد طاولة لشخصين من فضلك' },
      { speaker: 'B', en: 'Of course please follow me this way', ar: 'بالطبع، من فضلك اتبعني من هنا' },
      { speaker: 'A', en: 'Can I see the menu and wine list', ar: 'هل يمكنني رؤية قائمة الطعام والنبيذ؟' },
      { speaker: 'B', en: 'Here you are I will be back shortly', ar: 'تفضل، سأعود بعد قليل' }
    ]
  },
  {
    id: 'hotel',
    name: 'في الفندق',
    level: 8,
    lines: [
      { speaker: 'A', en: 'Hello I have a reservation under the name Smith', ar: 'مرحباً، لدي حجز باسم سميث' },
      { speaker: 'B', en: 'Let me check that for you one moment please', ar: 'دعني أتحقق من ذلك، لحظة من فضلك' },
      { speaker: 'A', en: 'What time is breakfast served in the morning', ar: 'في أي وقت يُقدم الإفطار في الصباح؟' },
      { speaker: 'B', en: 'Breakfast is served from seven until ten thirty', ar: 'يُقدم الإفطار من السابعة حتى العاشرة والنصف' }
    ]
  },
  {
    id: 'airport',
    name: 'في المطار',
    level: 9,
    lines: [
      { speaker: 'A', en: 'Where can I check in for my flight to London', ar: 'أين يمكنني تسجيل الوصول لرحلتي إلى لندن؟' },
      { speaker: 'B', en: 'Check in is at counter number fifteen', ar: 'تسجيل الوصول عند الكاونتر رقم خمسة عشر' },
      { speaker: 'A', en: 'How many bags am I allowed to check in', ar: 'كم حقيبة يُسمح لي بتسجيلها؟' },
      { speaker: 'B', en: 'You are allowed two bags up to twenty kilos each', ar: 'يُسمح لك بحقيبتين حتى عشرين كيلو لكل منهما' }
    ]
  },
  {
    id: 'doctor',
    name: 'عند الطبيب',
    level: 10,
    lines: [
      { speaker: 'A', en: 'Good morning doctor I am not feeling well today', ar: 'صباح الخير دكتور، لا أشعر بحال جيد اليوم' },
      { speaker: 'B', en: 'What seems to be the problem exactly', ar: 'ما المشكلة بالضبط؟' },
      { speaker: 'A', en: 'I have a bad headache and a sore throat', ar: 'لدي صداع شديد والتهاب في الحلق' },
      { speaker: 'B', en: 'Let me examine you and check your temperature', ar: 'دعني أفحصك وأقيس درجة حرارتك' }
    ]
  }
];
