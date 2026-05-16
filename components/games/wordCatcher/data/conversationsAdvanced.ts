import { Conversation } from '../types';

// المحادثات المتوسطة - المستويات 11-20
export const ADVANCED_CONVERSATIONS: Conversation[] = [
  {
    id: 'work',
    name: 'في العمل',
    level: 11,
    lines: [
      { speaker: 'A', en: 'Good morning did you finish the report yesterday', ar: 'صباح الخير، هل أنهيت التقرير بالأمس؟' },
      { speaker: 'B', en: 'Yes I sent it to you by email last night', ar: 'نعم، أرسلته لك بالبريد الإلكتروني الليلة الماضية' },
      { speaker: 'A', en: 'Great work we have a meeting at three today', ar: 'عمل رائع، لدينا اجتماع في الثالثة اليوم' },
      { speaker: 'B', en: 'Perfect I will prepare the presentation slides now', ar: 'ممتاز، سأحضر شرائح العرض الآن' }
    ]
  },
  {
    id: 'gym',
    name: 'في النادي الرياضي',
    level: 12,
    lines: [
      { speaker: 'A', en: 'Hello I would like to join the gym please', ar: 'مرحباً، أود الانضمام إلى النادي الرياضي من فضلك' },
      { speaker: 'B', en: 'We have monthly and yearly membership options available', ar: 'لدينا خيارات عضوية شهرية وسنوية متاحة' },
      { speaker: 'A', en: 'What facilities and classes do you offer here', ar: 'ما المرافق والدروس التي تقدمونها هنا؟' },
      { speaker: 'B', en: 'We have a pool yoga classes and personal trainers', ar: 'لدينا مسبح ودروس يوغا ومدربون شخصيون' }
    ]
  },
  {
    id: 'school',
    name: 'في المدرسة',
    level: 13,
    lines: [
      { speaker: 'A', en: 'What is your favorite subject at school', ar: 'ما هي مادتك المفضلة في المدرسة؟' },
      { speaker: 'B', en: 'I really enjoy mathematics and science classes', ar: 'أستمتع حقاً بحصص الرياضيات والعلوم' },
      { speaker: 'A', en: 'Do you have any homework for tomorrow', ar: 'هل لديك أي واجبات منزلية للغد؟' },
      { speaker: 'B', en: 'Yes I need to write an essay about history', ar: 'نعم، أحتاج لكتابة مقال عن التاريخ' }
    ]
  },
  {
    id: 'library',
    name: 'في المكتبة',
    level: 14,
    lines: [
      { speaker: 'A', en: 'Excuse me where can I find history books', ar: 'عفواً، أين يمكنني إيجاد كتب التاريخ؟' },
      { speaker: 'B', en: 'History books are on the third floor section B', ar: 'كتب التاريخ في الطابق الثالث قسم ب' },
      { speaker: 'A', en: 'How many books can I borrow at once', ar: 'كم كتاباً يمكنني استعارته دفعة واحدة؟' },
      { speaker: 'B', en: 'You can borrow up to five books for two weeks', ar: 'يمكنك استعارة حتى خمسة كتب لمدة أسبوعين' }
    ]
  },
  {
    id: 'phone',
    name: 'المكالمة الهاتفية',
    level: 15,
    lines: [
      { speaker: 'A', en: 'Hello may I speak to John please', ar: 'مرحباً، هل يمكنني التحدث مع جون من فضلك؟' },
      { speaker: 'B', en: 'I am sorry he is not available right now', ar: 'آسف، هو غير متاح الآن' },
      { speaker: 'A', en: 'Can I leave a message for him', ar: 'هل يمكنني ترك رسالة له؟' },
      { speaker: 'B', en: 'Of course please tell me your message', ar: 'بالطبع، من فضلك أخبرني برسالتك' }
    ]
  },
  {
    id: 'taxi',
    name: 'في سيارة الأجرة',
    level: 16,
    lines: [
      { speaker: 'A', en: 'Please take me to the train station', ar: 'من فضلك خذني إلى محطة القطار' },
      { speaker: 'B', en: 'Sure which route would you prefer to take', ar: 'بالتأكيد، أي طريق تفضل أن نسلك؟' },
      { speaker: 'A', en: 'Take the fastest route I am in a hurry', ar: 'خذ أسرع طريق، أنا مستعجل' },
      { speaker: 'B', en: 'No problem we will be there in ten minutes', ar: 'لا مشكلة، سنصل هناك في عشر دقائق' }
    ]
  },
  {
    id: 'supermarket',
    name: 'في السوبر ماركت',
    level: 17,
    lines: [
      { speaker: 'A', en: 'Excuse me where is the dairy section', ar: 'عفواً، أين قسم الألبان؟' },
      { speaker: 'B', en: 'The dairy section is at the back on the left', ar: 'قسم الألبان في الخلف على اليسار' },
      { speaker: 'A', en: 'Do you have any special offers today', ar: 'هل لديكم أي عروض خاصة اليوم؟' },
      { speaker: 'B', en: 'Yes we have a discount on fresh vegetables', ar: 'نعم، لدينا خصم على الخضروات الطازجة' }
    ]
  },
  {
    id: 'cinema',
    name: 'في السينما',
    level: 18,
    lines: [
      { speaker: 'A', en: 'Two tickets for the evening show please', ar: 'تذكرتان لعرض المساء من فضلك' },
      { speaker: 'B', en: 'Would you like seats in the front or back', ar: 'هل تريد مقاعد في الأمام أم الخلف؟' },
      { speaker: 'A', en: 'In the middle would be perfect thank you', ar: 'في الوسط سيكون مثالياً، شكراً' },
      { speaker: 'B', en: 'Great the movie starts at seven thirty', ar: 'رائع، يبدأ الفيلم في السابعة والنصف' }
    ]
  },
  {
    id: 'park',
    name: 'في الحديقة',
    level: 19,
    lines: [
      { speaker: 'A', en: 'What a beautiful day to be outside', ar: 'يا له من يوم جميل لنكون في الخارج' },
      { speaker: 'B', en: 'Yes the weather is perfect for a picnic', ar: 'نعم، الطقس مثالي للنزهة' },
      { speaker: 'A', en: 'Did you bring something to eat and drink', ar: 'هل أحضرت شيئاً للأكل والشرب؟' },
      { speaker: 'B', en: 'Yes I made sandwiches and brought fresh juice', ar: 'نعم، صنعت سندويشات وأحضرت عصيراً طازجاً' }
    ]
  },
  {
    id: 'birthday',
    name: 'حفلة عيد ميلاد',
    level: 20,
    lines: [
      { speaker: 'A', en: 'Happy birthday I hope you have a wonderful day', ar: 'عيد ميلاد سعيد، أتمنى لك يوماً رائعاً' },
      { speaker: 'B', en: 'Thank you so much for coming to my party', ar: 'شكراً جزيلاً لحضورك حفلتي' },
      { speaker: 'A', en: 'I brought you a small gift I hope you like it', ar: 'أحضرت لك هدية صغيرة، أتمنى أن تعجبك' },
      { speaker: 'B', en: 'You are so kind I really appreciate it', ar: 'أنت لطيف جداً، أقدر ذلك حقاً' }
    ]
  }
];
