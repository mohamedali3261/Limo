import { Conversation } from '../types';

// المحادثات المتقدمة - المستويات 21-29
export const EXPERT_CONVERSATIONS: Conversation[] = [
  {
    id: 'beach',
    name: 'على الشاطئ',
    level: 21,
    lines: [
      { speaker: 'A', en: 'The ocean looks so beautiful and calm today', ar: 'يبدو المحيط جميلاً وهادئاً جداً اليوم' },
      { speaker: 'B', en: 'Yes it is perfect for swimming and relaxing', ar: 'نعم، إنه مثالي للسباحة والاسترخاء' },
      { speaker: 'A', en: 'Did you remember to bring the sunscreen', ar: 'هل تذكرت إحضار واقي الشمس؟' },
      { speaker: 'B', en: 'Yes I have it right here in my bag', ar: 'نعم، لدي هنا في حقيبتي' }
    ]
  },
  {
    id: 'museum',
    name: 'في المتحف',
    level: 22,
    lines: [
      { speaker: 'A', en: 'This ancient Egyptian exhibition is fascinating', ar: 'هذا المعرض المصري القديم رائع' },
      { speaker: 'B', en: 'I agree the artifacts are incredibly well preserved', ar: 'أوافق، القطع الأثرية محفوظة بشكل مذهل' },
      { speaker: 'A', en: 'How long did this civilization last', ar: 'كم استمرت هذه الحضارة؟' },
      { speaker: 'B', en: 'It lasted for over three thousand years', ar: 'استمرت لأكثر من ثلاثة آلاف سنة' }
    ]
  },
  {
    id: 'job_interview',
    name: 'مقابلة عمل',
    level: 23,
    lines: [
      { speaker: 'A', en: 'Tell me about your previous work experience', ar: 'أخبرني عن خبرتك العملية السابقة' },
      { speaker: 'B', en: 'I worked as a manager for five years', ar: 'عملت كمدير لمدة خمس سنوات' },
      { speaker: 'A', en: 'What are your greatest strengths and weaknesses', ar: 'ما هي أعظم نقاط قوتك وضعفك؟' },
      { speaker: 'B', en: 'I am organized but sometimes too perfectionist', ar: 'أنا منظم لكن أحياناً مثالي جداً' }
    ]
  },
  {
    id: 'car_rental',
    name: 'استئجار سيارة',
    level: 24,
    lines: [
      { speaker: 'A', en: 'I would like to rent a car for three days', ar: 'أود استئجار سيارة لمدة ثلاثة أيام' },
      { speaker: 'B', en: 'What type of car are you looking for', ar: 'أي نوع من السيارات تبحث عنه؟' },
      { speaker: 'A', en: 'A small automatic car would be perfect', ar: 'سيارة صغيرة أوتوماتيكية ستكون مثالية' },
      { speaker: 'B', en: 'Great I will need your license and credit card', ar: 'رائع، سأحتاج رخصتك وبطاقتك الائتمانية' }
    ]
  },
  {
    id: 'post_office',
    name: 'في مكتب البريد',
    level: 25,
    lines: [
      { speaker: 'A', en: 'I need to send this package to France', ar: 'أحتاج لإرسال هذه الطرد إلى فرنسا' },
      { speaker: 'B', en: 'Would you like express or regular shipping', ar: 'هل تريد الشحن السريع أم العادي؟' },
      { speaker: 'A', en: 'How long does regular shipping usually take', ar: 'كم يستغرق الشحن العادي عادة؟' },
      { speaker: 'B', en: 'It usually takes about seven to ten days', ar: 'عادة يستغرق حوالي سبعة إلى عشرة أيام' }
    ]
  },
  {
    id: 'hairdresser',
    name: 'عند مصفف الشعر',
    level: 26,
    lines: [
      { speaker: 'A', en: 'Good afternoon I have an appointment at three', ar: 'مساء الخير، لدي موعد في الثالثة' },
      { speaker: 'B', en: 'Yes please have a seat I will be right with you', ar: 'نعم، من فضلك اجلس، سأكون معك حالاً' },
      { speaker: 'A', en: 'I would like a haircut and maybe some highlights', ar: 'أريد قصة شعر وربما بعض الخصل' },
      { speaker: 'B', en: 'Perfect let me show you some color options', ar: 'ممتاز، دعني أريك بعض خيارات الألوان' }
    ]
  },
  {
    id: 'dentist',
    name: 'عند طبيب الأسنان',
    level: 27,
    lines: [
      { speaker: 'A', en: 'I have been having pain in my back tooth', ar: 'كنت أعاني من ألم في ضرسي الخلفي' },
      { speaker: 'B', en: 'Let me take a look and see what is wrong', ar: 'دعني ألقي نظرة وأرى ما المشكلة' },
      { speaker: 'A', en: 'Will I need any treatment or medication', ar: 'هل سأحتاج أي علاج أو دواء؟' },
      { speaker: 'B', en: 'You have a cavity that needs to be filled', ar: 'لديك تسوس يحتاج للحشو' }
    ]
  },
  {
    id: 'pharmacy',
    name: 'في الصيدلية',
    level: 28,
    lines: [
      { speaker: 'A', en: 'Do you have anything for a bad cold', ar: 'هل لديك شيء للبرد الشديد؟' },
      { speaker: 'B', en: 'Yes I recommend this medicine take it twice daily', ar: 'نعم، أنصح بهذا الدواء، خذه مرتين يومياً' },
      { speaker: 'A', en: 'Are there any side effects I should know about', ar: 'هل هناك أي آثار جانبية يجب أن أعرفها؟' },
      { speaker: 'B', en: 'It might cause drowsiness so avoid driving', ar: 'قد يسبب النعاس لذا تجنب القيادة' }
    ]
  },
  {
    id: 'gas_station',
    name: 'في محطة الوقود',
    level: 29,
    lines: [
      { speaker: 'A', en: 'Fill it up with regular gas please', ar: 'املأها بالبنزين العادي من فضلك' },
      { speaker: 'B', en: 'Sure would you like me to check the oil', ar: 'بالتأكيد، هل تريد مني فحص الزيت؟' },
      { speaker: 'A', en: 'Yes please and check the tire pressure too', ar: 'نعم من فضلك وافحص ضغط الإطارات أيضاً' },
      { speaker: 'B', en: 'No problem that will be forty five dollars', ar: 'لا مشكلة، سيكون المبلغ خمسة وأربعون دولاراً' }
    ]
  }
];
