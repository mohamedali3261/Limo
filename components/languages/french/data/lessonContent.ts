export interface LessonItem {
  id: number;
  type: 'listen' | 'translate' | 'select' | 'missing_letter' | 'match';
  question: string;
  sound?: string;
  options?: string[];
  correct?: number;
  text?: string;
  pairs?: { left: string; right: string; id: number }[];
}

export const lessonsDataMap: Record<string, LessonItem[]> = {
  '1-1': [
    { id: 1, type: 'missing_letter', question: 'ما هو الحرف الناقص للكلمة التي تعني "تفاحة"؟', text: 'P _ m m e', options: ['o', 'a', 'e', 'u'], correct: 0 },
    { id: 2, type: 'missing_letter', question: 'ما هو الحرف الناقص للكلمة التي تعني "قطة"؟', text: 'C h _ t', options: ['e', 'a', 'i', 'o'], correct: 1 },
    { id: 3, type: 'missing_letter', question: 'أكمل الكلمة التي تعني "دلفين"', text: 'D a u p h _ n', options: ['e', 'a', 'i', 'u'], correct: 2 },
    { id: 4, type: 'missing_letter', question: 'أكمل اسم الحيوان "فيل"', text: 'É l _ p h a n t', options: ['e', 'é', 'a', 'i'], correct: 1 },
    { id: 5, type: 'missing_letter', question: 'أكمل كلمة تعني "أسد"', text: 'L i _ n', options: ['e', 'o', 'a', 'u'], correct: 1 },
  ],
  '1-2': [
    { id: 1, type: 'match', question: 'صل كل كلمة بمعناها بالعربي', pairs: [ { left: 'Abeille 🐝', right: 'نحلة', id: 1 }, { left: 'Baleine 🐋', right: 'حوت', id: 2 }, { left: 'Chat 🐈', right: 'قطة', id: 3 }, { left: 'Dauphin 🐬', right: 'دلفين', id: 4 } ] },
    { id: 2, type: 'match', question: 'صل كل كلمة بمعناها بالعربي', pairs: [ { left: 'Éléphant 🐘', right: 'فيل', id: 1 }, { left: 'Fourmi 🐜', right: 'نملة', id: 2 }, { left: 'Girafe 🦒', right: 'زرافة', id: 3 }, { left: 'Hibou 🦉', right: 'بومة', id: 4 } ] },
    { id: 3, type: 'match', question: 'صل الحيوانات بأسمائها بالعربي', pairs: [ { left: 'Iguane 🦎', right: 'إغوانة', id: 1 }, { left: 'Jaguar 🐆', right: 'فهد', id: 2 }, { left: 'Lion 🦁', right: 'أسد', id: 3 }, { left: 'Kangourou 🦘', right: 'كنغر', id: 4 } ] },
    { id: 4, type: 'match', question: 'صل الحيوانات بأسمائها', pairs: [ { left: 'Koala 🐨', right: 'كوالا', id: 1 }, { left: 'Loup 🐺', right: 'ذئب', id: 2 }, { left: 'Mouton 🐑', right: 'خروف', id: 3 }, { left: 'Narval 🐋', right: 'حريش البحر', id: 4 } ] },
    { id: 5, type: 'match', question: 'صل الحيوانات بأسمائها', pairs: [ { left: 'Ours 🐻', right: 'دب', id: 1 }, { left: 'Pingouin 🐧', right: 'بطريق', id: 2 }, { left: 'Quetzal 🦜', right: 'طائر الكيتزال', id: 3 }, { left: 'Renard 🦊', right: 'ثعلب', id: 4 } ] },
    { id: 6, type: 'match', question: 'صل الحيوانات بأسمائها', pairs: [ { left: 'Singe 🐒', right: 'قرد', id: 1 }, { left: 'Tigre 🐅', right: 'نمر', id: 2 }, { left: 'Unau 🦥', right: 'كسلان', id: 3 }, { left: 'Vache 🐄', right: 'بقرة', id: 4 } ] },
    { id: 7, type: 'match', question: 'صل الحيوانات بأسمائها', pairs: [ { left: 'Wapiti 🦌', right: 'أيل', id: 1 }, { left: 'Xérus 🐿️', right: 'سنجاب أرضي', id: 2 }, { left: 'Yak 🐂', right: 'ياك', id: 3 }, { left: 'Zèbre 🦓', right: 'حمار وحشي', id: 4 } ] },
  ],
  '1-3': [
    { id: 1, type: 'listen', question: 'اي كلمة تبدأ بهذا الصوت؟', sound: 'Abeille', options: ['Chat', 'Abeille', 'Lion', 'Chien'], correct: 1 },
    { id: 2, type: 'listen', question: 'اختر الحرف الذي تسمعه', sound: 'F', options: ['V', 'F', 'P', 'B'], correct: 1 },
    { id: 3, type: 'listen', question: 'ما هو هذا الحرف؟', sound: 'B', options: ['D', 'T', 'P', 'B'], correct: 3 },
    { id: 4, type: 'listen', question: 'استمع واختر الكلمة', sound: 'Chat', options: ['Chien', 'Chat', 'Renard', 'Lion'], correct: 1 },
    { id: 5, type: 'listen', question: 'ما هو هذا الحرف؟', sound: 'J', options: ['G', 'J', 'H', 'Y'], correct: 1 },
  ],
  '1-4': [
    { id: 1, type: 'match', question: 'توصيل الحروف بالكلمات (مراجعة)', pairs: [{left: 'Girafe 🦒', right: 'G', id:1}, {left: 'Hibou 🦉', right: 'H', id: 2}, {left: 'Iguane 🦎', right: 'I', id:3}, {left: 'Lion 🦁', right: 'L', id:4}] },
    { id: 2, type: 'select', question: 'الحرف P هو بداية كلمة:', options: ['Pomme', 'Chat', 'Zèbre', 'Vache'], correct: 0 },
    { id: 3, type: 'select', question: 'الحرف O هو بداية كلمة:', options: ['Livre', 'Ours', 'Serpent', 'Tigre'], correct: 1 },
    { id: 4, type: 'select', question: 'الحرف K هو بداية كلمة:', options: ['Loup', 'Koala', 'Kangourou', 'Kiwi'], correct: 1 },
  ],
  '1-5': [
    { id: 1, type: 'missing_letter', question: 'أكمل الكلمة التي تعني "أسد"', text: '_ i o n', options: ['L', 'M', 'N', 'P'], correct: 0 },
    { id: 2, type: 'match', question: 'صل الكلمة بمعناها', pairs: [{left: 'Chat', right: 'قطة', id:1}, {left: 'Éléphant', right: 'فيل', id:2}, {left: 'Pomme', right: 'تفاحة', id:3}, {left: 'Abeille', right: 'نحلة', id:4}] },
    { id: 3, type: 'listen', question: 'اختر ما تسمعه', sound: 'Bonjour', options: ['Au revoir', 'Merci', 'Bonjour', 'Salut'], correct: 2 },
    { id: 4, type: 'missing_letter', question: 'أكمل', text: 'C h i e _', options: ['n', 'm', 'r', 'l'], correct: 0 },
    { id: 5, type: 'select', question: 'ما معنى Renard؟', options: ['ثعلب', 'دب', 'ذئب', 'أسد'], correct: 0 },
  ],
  '2-1': [
    { id: 1, type: 'select', question: 'ما هو الرد المناسب على (مرحباً - Bonjour)؟', options: ['Bonsoir', 'Bonjour', 'Merci', 'Pardon'], correct: 1 },
    { id: 2, type: 'translate', question: 'كلمة (Salut) تعني:', options: ['مرحباً / وداعاً', 'شكراً', 'عفواً', 'نعم'], correct: 0 },
    { id: 3, type: 'listen', question: 'استمع واختر الكلمة الصحيحة', sound: 'Bonsoir', options: ['Bonjour', 'Bonsoir', 'Salut', 'Merci'], correct: 1 },
    { id: 4, type: 'select', question: 'متى نقول Bonsoir؟', options: ['في الصباح', 'في الظهر', 'في المساء', 'قبل النوم'], correct: 2 },
    { id: 5, type: 'listen', question: 'استمع واختر', sound: 'Bonne nuit', options: ['Bonjour', 'Bonne nuit', 'Bonsoir', 'Salut'], correct: 1 },
  ],
  '2-2': [
    { id: 1, type: 'missing_letter', question: 'أكمل الحرف الناقص في كلمة بمعنى "صباح الخير"', text: 'B o n j _ u r', options: ['a', 'o', 'e', 'i'], correct: 1 },
    { id: 2, type: 'missing_letter', question: 'أكمل الحرف الناقص في كلمة بمعنى "شكراً"', text: 'M _ r c i', options: ['a', 'o', 'e', 'u'], correct: 2 },
    { id: 3, type: 'missing_letter', question: 'أكمل كلمة تعني "وداعاً"', text: 'A u  r _ v o i r', options: ['e', 'a', 'o', 'i'], correct: 0 },
    { id: 4, type: 'missing_letter', question: 'كلمة بمعنى عفوا', text: 'D é s o l _', options: ['a', 'e', 'é', 'i'], correct: 2 },
    { id: 5, type: 'missing_letter', question: 'كلمة تستخدم عند الاعتذار', text: 'P a r d _ n', options: ['e', 'a', 'o', 'u'], correct: 2 },
  ],
  '2-3': [
    { id: 1, type: 'match', question: 'صل الكلمة بمعناها', pairs: [{left: 'Bonjour', right: 'صباح الخير', id:1}, {left: 'Bonsoir', right: 'مساء الخير', id:2}, {left: 'Merci', right: 'شكراً', id:3}, {left: 'Salut', right: 'مرحباً', id:4}] },
    { id: 2, type: 'match', question: 'صل العبارات', pairs: [{left: 'Pardon', right: 'عفواً', id:1}, {left: 'Désolé', right: 'آسف', id:2}, {left: 'S\'il vous plaît', right: 'من فضلك', id:3}, {left: 'Au revoir', right: 'وداعاً', id:4}] },
  ],
  '2-4': [
    { id: 1, type: 'select', question: 'للسؤال عن الاسم تقول بالفرنسية:', options: ['Comment ça va?', 'Comment tu t\'appelles?', 'Quel âge as-tu?', 'Où?'], correct: 1 },
    { id: 2, type: 'translate', question: 'ما معنى الجملة (Je m\'appelle Ali)؟', options: ['عمري علي', 'أنا بخير', 'اسمي علي', 'أين علي'], correct: 2 },
    { id: 3, type: 'select', question: 'للسؤال عن الحال تقول:', options: ['Où habites-tu?', 'Comment ça va?', 'Bonjour?', 'Merci?'], correct: 1 },
    { id: 4, type: 'select', question: 'كيف ترد على Comment ça va؟', options: ['Ça va bien, merci', 'Au revoir', 'Je m\'appelle Paul', 'Bonsoir'], correct: 0 },
    { id: 5, type: 'listen', question: 'تسمع أي سؤال؟', sound: 'Quel âge as-tu?', options: ['Comment tu t\'appelles', 'Quel âge as-tu?', 'Comment ça va?', 'Où?'], correct: 1 },
  ],
  '2-5': [
    { id: 1, type: 'match', question: 'صل السؤال بإجابته', pairs: [{left: 'Comment tu t\'appelles?', right: 'Je m\'appelle', id:1}, {left: 'Comment ça va?', right: 'Ça va bien', id:2}, {left: 'Quel âge as-tu?', right: 'J\'ai 10 ans', id:3}] },
    { id: 2, type: 'missing_letter', question: 'أكمل الحرف الناقص في عبارة بمعنى "إلى اللقاء"', text: 'A u  r _ v o i r', options: ['a', 'e', 'o', 'i'], correct: 1 },
    { id: 3, type: 'select', question: 'الرد على Merci هو عبارة', options: ['De rien', 'Bonjour', 'Salut', 'Oui'], correct: 0 },
    { id: 4, type: 'listen', question: 'اختر الجملة الصحيحة', sound: 'Désolé', options: ['Merci', 'Désolé', 'Pardon', 'Salut'], correct: 1 },
    { id: 5, type: 'match', question: 'صل المسميات', pairs: [{left: 'Bonne nuit', right: 'تصبح على خير', id:1}, {left: 'À bientôt', right: 'أراك قريباً', id:2}, {left: 'Bonjour', right: 'صباح الخير', id:3}] },
  ],
  '3-1': [
    { id: 1, type: 'select', question: 'الرقم واحد (1):', options: ['Un', 'Deux', 'Trois', 'Quatre'], correct: 0 },
    { id: 2, type: 'select', question: 'الرقم إثنان (2):', options: ['Un', 'Deux', 'Trois', 'Quatre'], correct: 1 },
    { id: 3, type: 'listen', question: 'استمع', sound: 'Trois', options: ['1', '2', '3', '4'], correct: 2 },
    { id: 4, type: 'select', question: 'ما هو الرقم 4؟', options: ['Cinq', 'Six', 'Quatre', 'Sept'], correct: 2 },
    { id: 5, type: 'select', question: 'ما هو الرقم 5؟', options: ['Un', 'Trois', 'Cinq', 'Deux'], correct: 2 },
  ],
  '3-2': [
    { id: 1, type: 'match', question: 'صل الأرقام 1-4', pairs: [{left: 'Un', right: '1', id:1}, {left: 'Deux', right: '2', id:2}, {left: 'Trois', right: '3', id:3}, {left: 'Quatre', right: '4', id:4}] },
    { id: 2, type: 'match', question: 'صل الأرقام 5-8', pairs: [{left: 'Cinq', right: '5', id:1}, {left: 'Six', right: '6', id:2}, {left: 'Sept', right: '7', id:3}, {left: 'Huit', right: '8', id:4}] },
    { id: 3, type: 'match', question: 'صل الأرقام 9-12', pairs: [{left: 'Neuf', right: '9', id:1}, {left: 'Dix', right: '10', id:2}, {left: 'Onze', right: '11', id:3}, {left: 'Douze', right: '12', id:4}] },
  ],
  '3-3': [
    { id: 1, type: 'select', question: 'اللون الأحمر:', options: ['Vert', 'Bleu', 'Rouge', 'Jaune'], correct: 2 },
    { id: 2, type: 'select', question: 'اللون الأزرق:', options: ['Bleu', 'Blanc', 'Noir', 'Rouge'], correct: 0 },
    { id: 3, type: 'listen', question: 'أي لون تسمع؟', sound: 'Vert', options: ['أخضر', 'أزرق', 'أحمر', 'أصفر'], correct: 0 },
    { id: 4, type: 'select', question: 'اللون الأسود:', options: ['Blanc', 'Gris', 'Noir', 'Rose'], correct: 2 },
    { id: 5, type: 'select', question: 'اللون الأبيض:', options: ['Noir', 'Blanc', 'Jaune', 'Bleu'], correct: 1 },
  ],
  '3-4': [
    { id: 1, type: 'missing_letter', question: 'أكمل لتكون كلمة بمعنى لون "أخضر"', text: 'V _ r t', options: ['a', 'e', 'i', 'o'], correct: 1 },
    { id: 2, type: 'missing_letter', question: 'أكمل لتكون كلمة بمعنى رقم "خمسة"', text: 'C i n _', options: ['p', 'q', 'k', 'c'], correct: 1 },
    { id: 3, type: 'missing_letter', question: 'أكمل لتكون كلمة لون أصفر', text: 'J a u n _', options: ['a', 'e', 'o', 'i'], correct: 1 },
    { id: 4, type: 'missing_letter', question: 'رقم تسعة', text: 'N _ u f', options: ['e', 'o', 'a', 'i'], correct: 0 },
    { id: 5, type: 'missing_letter', question: 'رقم ثمانية', text: 'H u _ t', options: ['a', 'e', 'o', 'i'], correct: 3 },
  ],
  '3-5': [
    { id: 1, type: 'match', question: 'صل كل لون بمعناه', pairs: [{left: 'Rouge', right: 'أحمر', id:1}, {left: 'Bleu', right: 'أزرق', id:2}, {left: 'Vert', right: 'أخضر', id:3}, {left: 'Jaune', right: 'أصفر', id:4}] },
    { id: 2, type: 'match', question: 'صل الأرقام', pairs: [{left: 'Cinq', right: '5', id:1}, {left: 'Six', right: '6', id:2}, {left: 'Sept', right: '7', id:3}, {left: 'Huit', right: '8', id:4}] },
    { id: 3, type: 'listen', question: 'استمع أي رقم هذا؟ (10)', sound: 'Dix', options: ['Huit', 'Sept', 'Dix', 'Neuf'], correct: 2 },
    { id: 4, type: 'listen', question: 'استمع للون', sound: 'Noir', options: ['أبيض', 'أزرق', 'أسود', 'وردي'], correct: 2 },
    { id: 5, type: 'select', question: 'الرقم 20 هو:', options: ['Vingt', 'Quinze', 'Treize', 'Dix'], correct: 0 },
  ],
  '4-1': [
    { id: 1, type: 'select', question: 'ما الكلمة التي تعني "ماء"؟', options: ['Lait', 'Eau', 'Pain', 'Café'], correct: 1 },
    { id: 2, type: 'select', question: 'ما الكلمة التي تعني "خبز"؟', options: ['Pain', 'Eau', 'Fromage', 'Thé'], correct: 0 },
    { id: 3, type: 'listen', question: 'استمع واختر الكلمة', sound: 'Café', options: ['Thé', 'Café', 'Jus', 'Lait'], correct: 1 },
    { id: 4, type: 'select', question: 'ما الكلمة التي تعني "جبن"؟', options: ['Fromage', 'Poulet', 'Viande', 'Riz'], correct: 0 },
    { id: 5, type: 'select', question: 'اي كلمة تعني "أرز"؟', options: ['Pain', 'Riz', 'Poulet', 'Soupe'], correct: 1 },
  ],
  '4-2': [
    { id: 1, type: 'match', question: 'صل كل طعام بمعناه', pairs: [{ left: 'Pain', right: 'خبز', id: 1 }, { left: 'Eau', right: 'ماء', id: 2 }, { left: 'Café', right: 'قهوة', id: 3 }, { left: 'Lait', right: 'حليب', id: 4 }] },
    { id: 2, type: 'match', question: 'صل الأطباق', pairs: [{ left: 'Poulet', right: 'دجاج', id: 1 }, { left: 'Viande', right: 'لحم', id: 2 }, { left: 'Riz', right: 'أرز', id: 3 }, { left: 'Soupe', right: 'حساء', id: 4 }] },
  ],
  '4-3': [
    { id: 1, type: 'missing_letter', question: 'أكمل الكلمة التي تعني "حليب"', text: 'L a _ t', options: ['o', 'u', 'i', 'e'], correct: 2 },
    { id: 2, type: 'missing_letter', question: 'أكمل الكلمة التي تعني "جبن"', text: 'F r o m a g _', options: ['e', 'a', 'i', 'o'], correct: 0 },
    { id: 3, type: 'missing_letter', question: 'الكلمة التي تعني ماء', text: 'E a _', options: ['u', 'e', 'a', 'i'], correct: 0 },
    { id: 4, type: 'missing_letter', question: 'لحم بالفرنسية', text: 'V i a n d _', options: ['a', 'e', 'o', 'u'], correct: 1 },
    { id: 5, type: 'missing_letter', question: 'دجاج', text: 'P o u l _ t', options: ['e', 'a', 'o', 'i'], correct: 0 },
  ],
  '4-4': [
    { id: 1, type: 'listen', question: 'استمع واختر الشراب', sound: 'Lait', options: ['Eau', 'Café', 'Lait', 'Thé'], correct: 2 },
    { id: 2, type: 'select', question: 'ماذا تعني كلمة "Thé"؟', options: ['شاي', 'قهوة', 'ماء', 'عصير'], correct: 0 },
    { id: 3, type: 'listen', question: 'تسمع ماذا؟', sound: 'Riz', options: ['أرز', 'لحم', 'دجاج', 'بطاطس'], correct: 0 },
    { id: 4, type: 'select', question: 'أريد من فضلك (لطلب طعام):', options: ['Je voudrais s\'il vous plaît', 'Où est', 'Merci', 'Comment ça va'], correct: 0 },
    { id: 5, type: 'listen', question: 'استمع', sound: 'Jus d\'orange', options: ['عصير تفاح', 'عصير برتقال', 'ماء', 'شاي'], correct: 1 },
  ],
  '4-5': [
    { id: 1, type: 'match', question: 'صل كل مفرده بمعناها الصحيح', pairs: [{ left: 'Lait', right: 'حليب', id: 1 }, { left: 'Thé', right: 'شاي', id: 2 }, { left: 'Fromage', right: 'جبن', id: 3 }, { left: 'Pain', right: 'خبز', id: 4 }] },
    { id: 2, type: 'missing_letter', question: 'أكمل الكلمة التي تدل على شراب شاي', text: 'T h _', options: ['e', 'é', 'a', 'è'], correct: 1 },
    { id: 3, type: 'listen', question: 'اختر ما تسمعه بوضوح', sound: 'Pain', options: ['Eau', 'Lait', 'Pain', 'Jus'], correct: 2 },
    { id: 4, type: 'match', question: 'صل المشروبات والمأكولات', pairs: [{left: 'Eau', right: 'ماء', id:1}, {left: 'Viande', right: 'لحم', id:2}, {left: 'Poulet', right: 'دجاج', id:3}, {left: 'Jus', right: 'عصير', id:4}] },
    { id: 5, type: 'select', question: 'ترجمة: أنا أكل الدجاج', options: ['Je mange du poulet', 'Je bois de l\'eau', 'Je voudrais du thé', 'Merci beaucoup'], correct: 0 },
  ],
  '5-1': [
    { id: 1, type: 'select', question: 'الأب باللغة الفرنسية:', options: ['Mère', 'Frère', 'Père', 'Sœur'], correct: 2 },
    { id: 2, type: 'select', question: 'الأم باللغة الفرنسية:', options: ['Mère', 'Grand-père', 'Frère', 'Oncle'], correct: 0 },
    { id: 3, type: 'listen', question: 'تسمع ماذا؟', sound: 'Frère', options: ['أخ', 'أخت', 'عم', 'جد'], correct: 0 },
    { id: 4, type: 'select', question: 'الأخت تعني:', options: ['Frère', 'Sœur', 'Cousin', 'Père'], correct: 1 },
    { id: 5, type: 'listen', question: 'استمع', sound: 'Famille', options: ['شجرة', 'منزل', 'عائلة', 'مدرسة'], correct: 2 },
  ],
  '5-2': [
    { id: 1, type: 'match', question: 'صل أفراد العائلة', pairs: [{left: 'Père', right: 'أب', id:1}, {left: 'Mère', right: 'أم', id:2}, {left: 'Frère', right: 'أخ', id:3}, {left: 'Sœur', right: 'أخت', id:4}] },
    { id: 2, type: 'match', question: 'صل الأجداد والأعمام', pairs: [{left: 'Grand-père', right: 'جد', id:1}, {left: 'Grand-mère', right: 'جدة', id:2}, {left: 'Oncle', right: 'عم/خال', id:3}, {left: 'Tante', right: 'عمة/خالة', id:4}] },
  ],
  '5-3': [
    { id: 1, type: 'select', question: 'معلم باللغة الفرنسية', options: ['Professeur', 'Médecin', 'Avocat', 'Ingénieur'], correct: 0 },
    { id: 2, type: 'select', question: 'Médecin تعني:', options: ['شرطي', 'معلم', 'طبيب', 'طيار'], correct: 2 },
    { id: 3, type: 'listen', question: 'استمع', sound: 'Avocat', options: ['مهندس', 'محامي', 'طبيب', 'نجار'], correct: 1 },
    { id: 4, type: 'select', question: 'Police تعني:', options: ['شرطة', 'دفاع مدني', 'مستشفى', 'مدرسة'], correct: 0 },
    { id: 5, type: 'listen', question: 'ما هو هذا العمل؟', sound: 'Ingénieur', options: ['طبيب', 'محاسب', 'مهندس', 'معلم'], correct: 2 },
  ],
  '5-4': [
    { id: 1, type: 'missing_letter', question: 'أكمل كلمة (أب)', text: 'P _ r e', options: ['e', 'è', 'é', 'a'], correct: 1 },
    { id: 2, type: 'missing_letter', question: 'أكمل (أم)', text: 'M _ r e', options: ['é', 'a', 'è', 'o'], correct: 2 },
    { id: 3, type: 'missing_letter', question: 'معلم', text: 'P r o f e s s e u _', options: ['r', 'l', 's', 't'], correct: 0 },
    { id: 4, type: 'missing_letter', question: 'طبيب', text: 'M é d e c _ n', options: ['a', 'e', 'i', 'o'], correct: 2 },
    { id: 5, type: 'missing_letter', question: 'أخ', text: 'F r _ r e', options: ['e', 'é', 'a', 'è'], correct: 3 },
  ],
  '5-5': [
    { id: 1, type: 'match', question: 'صل العائلة والمسميات', pairs: [{left: 'Père', right: 'أب', id:1}, {left: 'Mère', right: 'أم', id:2}, {left: 'Professeur', right: 'معلم', id:3}, {left: 'Médecin', right: 'طبيب', id:4}] },
    { id: 2, type: 'listen', question: 'استمع', sound: 'Sœur', options: ['أخت', 'أخ', 'جد', 'أم'], correct: 0 },
    { id: 3, type: 'select', question: 'أنا معلم (مذكر)', options: ['Je suis professeur', 'Il est médecin', 'Elle est sœur', 'Tu es avocat'], correct: 0 },
    { id: 4, type: 'missing_letter', question: 'أكمل مهندس', text: 'I n g é n i e u _', options: ['x', 's', 'r', 'l'], correct: 2 },
    { id: 5, type: 'match', question: 'صل المهن باللغة العربية', pairs: [{left: 'Avocat', right: 'محامي', id:1}, {left: 'Ingénieur', right: 'مهندس', id:2}, {left: 'Police', right: 'شرطة', id:3}, {left: 'Pilote', right: 'طيار', id:4}] },
  ],
  '6-1': [
    { id: 1, type: 'select', question: 'بنطال بالفرنسية:', options: ['Pantalon', 'Chemise', 'Robe', 'Chaussettes'], correct: 0 },
    { id: 2, type: 'select', question: 'قميص:', options: ['Chapeau', 'Chemise', 'Manteau', 'Jupe'], correct: 1 },
    { id: 3, type: 'listen', question: 'استمع', sound: 'Robe', options: ['فستان', 'معطف', 'حذاء', 'قبعة'], correct: 0 },
    { id: 4, type: 'select', question: 'حذاء بالفرنسية:', options: ['Chaussures', 'Chaussettes', 'Gants', 'Écharpe'], correct: 0 },
    { id: 5, type: 'listen', question: 'استمع للملابس', sound: 'Manteau', options: ['معطف', 'نظارات', 'حقيبة', 'ساعة'], correct: 0 },
  ],
  '6-2': [
    { id: 1, type: 'match', question: 'صل الملابس', pairs: [{left: 'Pantalon', right: 'بنطال', id:1}, {left: 'Chemise', right: 'قميص', id:2}, {left: 'Robe', right: 'فستان', id:3}, {left: 'Chaussures', right: 'حذاء', id:4}] },
    { id: 2, type: 'match', question: 'لوازم أخرى', pairs: [{left: 'Chapeau', right: 'قبعة', id:1}, {left: 'Manteau', right: 'معطف', id:2}, {left: 'Chaussettes', right: 'جوارب', id:3}, {left: 'Jupe', right: 'تنورة', id:4}] },
  ],
  '6-3': [
    { id: 1, type: 'select', question: 'يوم الإثنين:', options: ['Mardi', 'Lundi', 'Jeudi', 'Samedi'], correct: 1 },
    { id: 2, type: 'select', question: 'يوم الجمعة:', options: ['Vendredi', 'Mercredi', 'Dimanche', 'Jeudi'], correct: 0 },
    { id: 3, type: 'listen', question: 'استمع لليوم', sound: 'Mardi', options: ['الثلاثاء', 'الإثنين', 'الأربعاء', 'الخميس'], correct: 0 },
    { id: 4, type: 'select', question: 'Samedi يعني يوم:', options: ['الأحد', 'الجمعة', 'السبت', 'الاثنين'], correct: 2 },
    { id: 5, type: 'listen', question: 'استمع', sound: 'Dimanche', options: ['السبت', 'الأحد', 'الإثنين', 'الثلاثاء'], correct: 1 },
  ],
  '6-4': [
    { id: 1, type: 'missing_letter', question: 'أكمل الإثنين', text: 'L u n d _', options: ['a', 'e', 'i', 'o'], correct: 2 },
    { id: 2, type: 'missing_letter', question: 'أكمل الجمعة', text: 'V e n d r e d _', options: ['e', 'o', 'a', 'i'], correct: 3 },
    { id: 3, type: 'missing_letter', question: 'قميص', text: 'C h e m i s _', options: ['e', 'é', 'a', 'i'], correct: 0 },
    { id: 4, type: 'missing_letter', question: 'بنطال', text: 'P a n t a l _ n', options: ['o', 'u', 'i', 'a'], correct: 0 },
    { id: 5, type: 'missing_letter', question: 'يوم الثلاتاء', text: 'M a r d _', options: ['e', 'a', 'i', 'o'], correct: 2 },
  ],
  '6-5': [
    { id: 1, type: 'match', question: 'أيام الأسبوع 1', pairs: [{left: 'Lundi', right: 'الإثنين', id:1}, {left: 'Mardi', right: 'الثلاثاء', id:2}, {left: 'Mercredi', right: 'الأربعاء', id:3}, {left: 'Jeudi', right: 'الخميس', id:4}] },
    { id: 2, type: 'match', question: 'أيام والألبسة', pairs: [{left: 'Vendredi', right: 'الجمعة', id:1}, {left: 'Samedi', right: 'السبت', id:2}, {left: 'Pantalon', right: 'بنطال', id:3}, {left: 'Robe', right: 'فستان', id:4}] },
    { id: 3, type: 'listen', question: 'استمع', sound: 'Chaussures', options: ['أحذية', 'جوارب', 'قبعات', 'قمصان'], correct: 0 },
    { id: 4, type: 'missing_letter', question: 'أكمل الأحد', text: 'D i m a n c h _', options: ['e', 'a', 'o', 'i'], correct: 0 },
    { id: 5, type: 'select', question: 'أنا أرتدي قميص أحمر', options: ['Je porte une chemise rouge', 'Je porte un pantalon bleu', 'Je mange une pomme', 'Bonjour monsieur'], correct: 0 },
  ],
  // Unit 7
  '7-1': [
    { id: 1, type: 'select', question: 'ما الكلمة التي تعني "مدرسة"؟', options: ['École', 'Maison', 'Hôpital', 'Banque'], correct: 0 },
    { id: 2, type: 'select', question: 'ما الكلمة التي تعني "منزل"؟', options: ['Gare', 'Maison', 'Parc', 'Restaurant'], correct: 1 },
    { id: 3, type: 'listen', question: 'استمع واختر الكلمة', sound: 'Hôpital', options: ['مستشفى', 'بنك', 'لعبة', 'كتاب'], correct: 0 },
    { id: 4, type: 'select', question: 'ما الكلمة التي تعني "مستشفى"؟', options: ['Hôpital', 'Cinéma', 'Gare', 'Banque'], correct: 0 },
    { id: 5, type: 'select', question: 'اي كلمة تعني "بنك"؟', options: ['Plage', 'Banque', 'École', 'Maison'], correct: 1 },
  ],
  '7-2': [
    { id: 1, type: 'match', question: 'صل كل مكان بمعناه', pairs: [{ left: 'École', right: 'مدرسة', id: 1 }, { left: 'Maison', right: 'منزل', id: 2 }, { left: 'Hôpital', right: 'مستشفى', id: 3 }, { left: 'Banque', right: 'بنك', id: 4 }] },
    { id: 2, type: 'match', question: 'صل الأماكن', pairs: [{ left: 'Parc', right: 'منتزه', id: 1 }, { left: 'Gare', right: 'محطة', id: 2 }, { left: 'Restaurant', right: 'مطعم', id: 3 }, { left: 'Hôtel', right: 'فندق', id: 4 }] },
  ],
  '7-3': [
    { id: 1, type: 'select', question: 'ماذا تعني "يمين"؟', options: ['Droite', 'Gauche', 'Tout droit', 'Derrière'], correct: 0 },
    { id: 2, type: 'select', question: 'ماذا تعني "يسار"؟', options: ['Dans', 'Gauche', 'Devant', 'Droite'], correct: 1 },
    { id: 3, type: 'listen', question: 'استمع للاتجاه', sound: 'Tout droit', options: ['يسار', 'للأمام مباشرة', 'يمين', 'خلف'], correct: 1 },
    { id: 4, type: 'select', question: 'أمام بالفرنسية هي:', options: ['Sous', 'Derrière', 'Devant', 'Sur'], correct: 2 },
    { id: 5, type: 'select', question: 'خلف بالفرنسية:', options: ['Ici', 'Derrière', 'Gauche', 'Dans'], correct: 1 },
  ],
  '7-4': [
    { id: 1, type: 'missing_letter', question: 'أكمل مدرسة', text: 'É c o l _', options: ['i', 'a', 'e', 'u'], correct: 2 },
    { id: 2, type: 'missing_letter', question: 'أكمل يمين', text: 'D r o i t _', options: ['e', 'o', 'a', 'i'], correct: 0 },
    { id: 3, type: 'missing_letter', question: 'أكمل يسار', text: 'G a u c h _', options: ['a', 'o', 'e', 'i'], correct: 2 },
    { id: 4, type: 'missing_letter', question: 'أكمل منزل', text: 'M a i s o _', options: ['m', 'n', 'r', 't'], correct: 1 },
    { id: 5, type: 'missing_letter', question: 'أكمل بنك', text: 'B a n q u _', options: ['a', 'o', 'e', 'i'], correct: 2 },
  ],
  '7-5': [
    { id: 1, type: 'match', question: 'صل الأماكن بمعانيها', pairs: [{ left: 'École', right: 'مدرسة', id: 1 }, { left: 'Maison', right: 'منزل', id: 2 }, { left: 'Devant', right: 'أمام', id: 3 }, { left: 'Derrière', right: 'خلف', id: 4 }] },
    { id: 2, type: 'listen', question: 'استمع', sound: 'Gauche', options: ['يمين', 'يسار', 'أمام', 'خلف'], correct: 1 },
    { id: 3, type: 'missing_letter', question: 'أكمل الكلمة', text: 'D r o i t _', options: ['a', 'e', 'o', 'u'], correct: 1 },
    { id: 4, type: 'select', question: 'كيف تقول "المدرسة على اليمين"؟', options: ['L\'école est à droite', 'La maison est ici', 'Je vais à l\'école', 'Le parc est grand'], correct: 0 },
    { id: 5, type: 'match', question: 'صل كل كلمة بالاتجاه المناسب', pairs: [{left: 'Droite', right: 'يمين', id:1}, {left: 'Gauche', right: 'يسار', id:2}, {left: 'Tout droit', right: 'للأمام مباشرة', id:3}, {left: 'Ici', right: 'هنا', id:4}] },
  ],
  // Unit 8
  '8-1': [
    { id: 1, type: 'select', question: 'ما الكلمة التي تعني "شمس"؟', options: ['Lune', 'Soleil', 'Neige', 'Pluie'], correct: 1 },
    { id: 2, type: 'select', question: 'ما الكلمة التي تعني "مطر"؟', options: ['Neige', 'Vent', 'Pluie', 'Chaud'], correct: 2 },
    { id: 3, type: 'listen', question: 'استمع واختر الكلمة', sound: 'Neige', options: ['ثلج', 'رياح', 'شمس', 'مطر'], correct: 0 },
    { id: 4, type: 'select', question: 'الجو حار يعبر عنه بـ:', options: ['Il fait froid', 'Il pleut', 'Il fait chaud', 'Il neige'], correct: 2 },
    { id: 5, type: 'select', question: 'الجو بارد يعبر عنه بـ:', options: ['Il fait chaud', 'Il fait froid', 'Il y a du vent', 'Il neige'], correct: 1 },
  ],
  '8-2': [
    { id: 1, type: 'match', question: 'صل الطقس بمعناه', pairs: [{ left: 'Soleil', right: 'شمس', id: 1 }, { left: 'Pluie', right: 'مطر', id: 2 }, { left: 'Neige', right: 'ثلج', id: 3 }, { left: 'Vent', right: 'رياح', id: 4 }] },
    { id: 2, type: 'match', question: 'صل الجمل بمعناها', pairs: [{ left: 'Il fait chaud', right: 'الجو حار', id: 1 }, { left: 'Il fait froid', right: 'الجو بارد', id: 2 }, { left: 'Il pleut', right: 'إنها تمطر', id: 3 }, { left: 'Il neige', right: 'إنها تثلج', id: 4 }] },
  ],
  '8-3': [
    { id: 1, type: 'select', question: 'فصل الصيف:', options: ['Hiver', 'Été', 'Printemps', 'Automne'], correct: 1 },
    { id: 2, type: 'select', question: 'فصل الشتاء:', options: ['Été', 'Hiver', 'Automne', 'Printemps'], correct: 1 },
    { id: 3, type: 'listen', question: 'استمع', sound: 'Printemps', options: ['الخريف', 'الصيف', 'الربيع', 'الشتاء'], correct: 2 },
    { id: 4, type: 'select', question: 'الخريف:', options: ['Hiver', 'Automne', 'Printemps', 'Été'], correct: 1 },
    { id: 5, type: 'select', question: 'أنا أحب الصيف:', options: ['J\'aime l\'hiver', 'J\'aime l\'été', 'Je n\'aime pas l\'automne', 'Il fait beau'], correct: 1 },
  ],
  '8-4': [
    { id: 1, type: 'missing_letter', question: 'أكمل شمس', text: 'S o l e i _', options: ['l', 'r', 'm', 'n'], correct: 0 },
    { id: 2, type: 'missing_letter', question: 'أكمل صيف', text: 'É t _', options: ['a', 'e', 'é', 'o'], correct: 2 },
    { id: 3, type: 'missing_letter', question: 'أكمل شتاء', text: 'H i v e _', options: ['r', 's', 'l', 't'], correct: 0 },
    { id: 4, type: 'missing_letter', question: 'أكمل ربيع', text: 'P r i n t e m p _', options: ['t', 's', 'l', 'm'], correct: 1 },
    { id: 5, type: 'missing_letter', question: 'أكمل مطر', text: 'P l u i _', options: ['a', 'e', 'o', 'i'], correct: 1 },
  ],
  '8-5': [
    { id: 1, type: 'match', question: 'صل الفصول', pairs: [{ left: 'Été', right: 'الصيف', id: 1 }, { left: 'Hiver', right: 'الشتاء', id: 2 }, { left: 'Printemps', right: 'الربيع', id: 3 }, { left: 'Automne', right: 'الخريف', id: 4 }] },
    { id: 2, type: 'missing_letter', question: 'أكمل الكلمة "ثلج"', text: 'N e i g _', options: ['a', 'o', 'e', 'i'], correct: 2 },
    { id: 3, type: 'listen', question: 'استمع واختر', sound: 'Il pleut', options: ['الجو بارد', 'إنها تمطر', 'إنها تثلج', 'توجد رياح'], correct: 1 },
    { id: 4, type: 'select', question: 'ترجمة: الجو بارد في الشتاء', options: ['Il fait chaud en été', 'Il fait froid en hiver', 'Il pleut au printemps', 'Il neige en automne'], correct: 1 },
    { id: 5, type: 'match', question: 'صل الطقس', pairs: [{left: 'Il fait chaud', right: 'الجو حار', id:1}, {left: 'Il fait froid', right: 'الجو بارد', id:2}, {left: 'Soleil', right: 'شمس', id:3}, {left: 'Vent', right: 'رياح', id:4}] },
  ],
  // Unit 9
  '9-1': [
    { id: 1, type: 'select', question: 'ما الكلمة التي تعني "ملابس"؟', options: ['Vêtements', 'Chaussures', 'Livre', 'Chien'], correct: 0 },
    { id: 2, type: 'select', question: 'ما الكلمة التي تعني "معطف"؟', options: ['Pantalon', 'Manteau', 'Robe', 'T-shirt'], correct: 1 },
    { id: 3, type: 'listen', question: 'استمع واختر الكلمة', sound: 'Robe', options: ['فستان', 'قميص', 'حذاء', 'قبعة'], correct: 0 },
    { id: 4, type: 'select', question: 'ما الكلمة التي تعني "بنطال"؟', options: ['Chapeau', 'Pantalon', 'Gants', 'Écharpe'], correct: 1 },
    { id: 5, type: 'select', question: 'اي كلمة تعني "قميص"؟', options: ['Chemise', 'Jupe', 'Veste', 'Chaussettes'], correct: 0 },
  ],
  '9-2': [
    { id: 1, type: 'match', question: 'صل كل قطعة מלابس باسمها', pairs: [{ left: 'Robe', right: 'فستان', id: 1 }, { left: 'Manteau', right: 'معطف', id: 2 }, { left: 'Pantalon', right: 'بنطال', id: 3 }, { left: 'Chemise', right: 'قميص', id: 4 }] },
    { id: 2, type: 'translate', question: 'كم سعر هذا؟', options: ['Combien ça coûte ?', 'Où est la gare ?', 'Quel âge as-tu ?', 'Comment ça va ?'], correct: 0 },
    { id: 3, type: 'select', question: 'الرد على "كم السعر" يمكن أن يكون:', options: ['J\'ai 10 ans', 'Ça fait 20 euros', 'Je m\'appelle Ali', 'Il fait beau'], correct: 1 },
  ],
  '9-3': [
    { id: 1, type: 'listen', question: 'أي سعر تسمع؟', sound: 'Cinquante euros', options: ['خمسون يورو', 'عشرون يورو', 'خمسة يورو', 'مئة يورو'], correct: 0 },
    { id: 2, type: 'missing_letter', question: 'أكمل الكلمة التي تعني "غالي"', text: 'C h _ r', options: ['a', 'o', 'e', 'u'], correct: 2 },
    { id: 3, type: 'missing_letter', question: 'أكمل الكلمة التي تعني يورو', text: 'E u r _ s', options: ['o', 'e', 'a', 'i'], correct: 0 },
  ],
  '9-4': [
    { id: 1, type: 'match', question: 'صل لتكوين جمل مفيدة', pairs: [{ left: 'Je voudrais', right: 'أريد', id: 1 }, { left: 'Combien', right: 'كم', id: 2 }, { left: 'Ça coûte', right: 'يكلف', id: 3 }, { left: 'Cher', right: 'غالي', id: 4 }] },
    { id: 2, type: 'select', question: 'أريد شراء هذا القميص', options: ['Je voudrais acheter cette chemise', 'Je mange une pomme', 'Où est le pantalon', 'Il fait très froid'], correct: 0 },
    { id: 3, type: 'listen', question: 'هل تريد قياسه؟', sound: 'Vous voulez l\'essayer ?', options: ['هل تريد شراءه؟', 'هل تريد قياسه؟', 'أين غرف القياس؟', 'هذا غالي جداً'], correct: 1 },
    { id: 4, type: 'missing_letter', question: 'قميص', text: 'C h e m i s _', options: ['e', 'a', 'o', 'u'], correct: 0 },
  ],
  // Unit 10
  '10-1': [
    { id: 1, type: 'select', question: 'ما الكلمة التي تعني "رأس"؟', options: ['Tête', 'Bras', 'Jambe', 'Main'], correct: 0 },
    { id: 2, type: 'select', question: 'ما الكلمة التي تعني "عين"؟', options: ['Bouche', 'Nez', 'Œil', 'Oreille'], correct: 2 },
    { id: 3, type: 'listen', question: 'استمع واختر الكلمة', sound: 'Bouche', options: ['فم', 'أنف', 'أذن', 'شعر'], correct: 0 },
    { id: 4, type: 'select', question: 'ما الكلمة التي تعني "أنف"؟', options: ['Nez', 'Oreille', 'Dos', 'Ventre'], correct: 0 },
    { id: 5, type: 'select', question: 'اي كلمة تعني "يد"؟', options: ['Pied', 'Main', 'Doigt', 'Bras'], correct: 1 },
  ],
  '10-2': [
    { id: 1, type: 'match', question: 'صل أعضاء الجسم', pairs: [{ left: 'Tête', right: 'رأس', id: 1 }, { left: 'Nez', right: 'أنف', id: 2 }, { left: 'Bouche', right: 'فم', id: 3 }, { left: 'Main', right: 'يد', id: 4 }] },
    { id: 2, type: 'select', question: 'كيف تقول "أنا مريض" بالفرنسية؟', options: ['Je suis malade', 'Je suis fatigué', 'J\'ai faim', 'Je vais bien'], correct: 0 },
    { id: 3, type: 'translate', question: 'كيف تقول "لدي ألم في رأسي"؟', options: ['J\'ai mal à la tête', 'J\'ai soif', 'Je suis grand', 'J\'ai un chien'], correct: 0 },
  ],
  '10-3': [
    { id: 1, type: 'missing_letter', question: 'أكمل جزء الجسم "رأس"', text: 'T ê t _', options: ['e', 'a', 'i', 'o'], correct: 0 },
    { id: 2, type: 'missing_letter', question: 'أكمل جزء الجسم "يد"', text: 'M a _ n', options: ['i', 'e', 'u', 'o'], correct: 0 },
    { id: 3, type: 'listen', question: 'استمع', sound: 'J\'ai mal au ventre', options: ['أشعر بألم في بطني', 'أشعر بألم في رأسي', 'أنا بصحة جيدة', 'أشعر بألم في قدمي'], correct: 0 },
  ],
  '10-4': [
    { id: 1, type: 'match', question: 'صل الأمراض و الأعضاء', pairs: [{ left: 'Malade', right: 'مريض', id: 1 }, { left: 'Tête', right: 'رأس', id: 2 }, { left: 'Ventre', right: 'بطن', id: 3 }, { left: 'Docteur', right: 'طبيب', id: 4 }] },
    { id: 2, type: 'missing_letter', question: 'أكمل كلمة طبيب', text: 'D o c t e u _', options: ['t', 'r', 's', 'x'], correct: 1 },
    { id: 3, type: 'select', question: 'ترجمة "يجب أن ترتاح"', options: ['Tu dois te reposer', 'Tu dois manger', 'Tu dois courir', 'Il fait beau'], correct: 0 },
    { id: 4, type: 'listen', question: 'تسمع أي كلمة؟', sound: 'Médecin', options: ['طبيب', 'مستشفى', 'مريض', 'دواء'], correct: 0 },
  ],
  // Unit 11
  '11-1': [
    { id: 1, type: 'select', question: 'ما الكلمة التي تعني "طعام"؟', options: ['Nourriture', 'Boisson', 'Eau', 'Pain'], correct: 0 },
    { id: 2, type: 'select', question: 'ما الكلمة التي تعني "خبز"؟', options: ['Fromage', 'Pain', 'Viande', 'Poulet'], correct: 1 },
    { id: 3, type: 'listen', question: 'استمع واختر', sound: 'Poulet', options: ['دجاج', 'لحم', 'سمك', 'أرز'], correct: 0 },
    { id: 4, type: 'select', question: 'كلمة لحم تعني بالفرنسية:', options: ['Poisson', 'Viande', 'Légumes', 'Fruits'], correct: 1 },
  ],
  '11-2': [
    { id: 1, type: 'match', question: 'صل المشروب بمعناه', pairs: [{ left: 'Eau', right: 'ماء', id: 1 }, { left: 'Café', right: 'قهوة', id: 2 }, { left: 'Thé', right: 'شاي', id: 3 }, { left: 'Lait', right: 'حليب', id: 4 }] },
    { id: 2, type: 'listen', question: 'استمع', sound: 'Je voudrais du café', options: ['أريد قهوة', 'أريد ماء', 'أريد شاي', 'أريد حليب'], correct: 0 },
    { id: 3, type: 'missing_letter', question: 'أكمل كلمة "ماء"', text: 'E a _', options: ['u', 'i', 'o', 'e'], correct: 0 },
  ],
  '11-3': [
    { id: 1, type: 'listen', question: 'ماذا يطلب في المطعم؟', sound: 'L\'addition s\'il vous plaît', options: ['الفاتورة من فضلك', 'المنيو من فضلك', 'الماء من فضلك', 'الخبز من فضلك'], correct: 0 },
    { id: 2, type: 'select', question: 'أريد حجز طاولة', options: ['Je voudrais réserver une table', 'Je voudrais manger', 'L\'addition', 'C\'est délicieux'], correct: 0 },
    { id: 3, type: 'match', question: 'توصيل', pairs: [{ left: 'Délicieux', right: 'لذيذ', id: 1 }, { left: 'Addition', right: 'فاتورة', id: 2 }, { left: 'Table', right: 'طاولة', id: 3 }, { left: 'Menu', right: 'قائمة طعام', id: 4 }] },
  ],
  '11-4': [
    { id: 1, type: 'select', question: 'ما الكلمة التي تعني "لذيذ"؟', options: ['Mauvais', 'Délicieux', 'Chaud', 'Froid'], correct: 1 },
    { id: 2, type: 'listen', question: 'استمع إلى الكلمة', sound: 'Restaurant', options: ['مطعم', 'مقهى', 'فندق', 'مستشفى'], correct: 0 },
    { id: 3, type: 'translate', question: 'أنا جائع', options: ['J\'ai faim', 'J\'ai soif', 'Je suis fatigué', 'Je vais bien'], correct: 0 },
    { id: 4, type: 'translate', question: 'أنا عطشان', options: ['J\'ai soif', 'J\'ai faim', 'J\'ai chaud', 'J\'ai froid'], correct: 0 },
  ],
  // Unit 12
  '12-1': [
    { id: 1, type: 'select', question: 'ما الكلمة التي تعني "طائرة"؟', options: ['Train', 'Voiture', 'Avion', 'Bus'], correct: 2 },
    { id: 2, type: 'match', question: 'صل المواصلات', pairs: [{ left: 'Voiture', right: 'سيارة', id: 1 }, { left: 'Train', right: 'قطار', id: 2 }, { left: 'Bus', right: 'حافلة', id: 3 }, { left: 'Vélo', right: 'دراجة', id: 4 }] },
    { id: 3, type: 'listen', question: 'استمع واختر', sound: 'Je vais en voiture', options: ['أنا أذهب بالسيارة', 'أنا أذهب بالقطار', 'أنا أذهب ماشياً', 'أنا أذهب بالطائرة'], correct: 0 },
  ],
  '12-2': [
    { id: 1, type: 'select', question: 'كيف أقول "تذكرة"؟', options: ['Billet', 'Passeport', 'Valise', 'Hôtel'], correct: 0 },
    { id: 2, type: 'listen', question: 'حجز', sound: 'Je voudrais un billet pour Paris', options: ['أريد تذكرة لباريس', 'أريد تذكرة لليون', 'أريد الذهاب إلى المحطة', 'أين المطار'], correct: 0 },
    { id: 3, type: 'missing_letter', question: 'أكمل كلمة "قطار"', text: 'T r a i _', options: ['n', 'm', 'l', 'r'], correct: 0 },
  ],
  '12-3': [
    { id: 1, type: 'select', question: 'ماذا تعني كلمة "مطار"؟', options: ['Gare', 'Aéroport', 'Station', 'Port'], correct: 1 },
    { id: 2, type: 'match', question: 'صل الكلمات', pairs: [{ left: 'Passeport', right: 'جواز سفر', id: 1 }, { left: 'Valise', right: 'حقيبة سفر', id: 2 }, { left: 'Vol', right: 'رحلة طيران', id: 3 }, { left: 'Aéroport', right: 'مطار', id: 4 }] },
    { id: 3, type: 'listen', question: 'استمع', sound: 'Où est la porte d\'embarquement ?', options: ['أين بوابة الصعود؟', 'أين حقيبتي؟', 'أين الحمام؟', 'أين جواز سفري؟'], correct: 0 },
  ],
  '12-4': [
    { id: 1, type: 'select', question: 'كيف تسأل "أين المحطة؟"', options: ['Où est la gare ?', 'Où est l\'hôtel ?', 'Où est le restaurant ?', 'Comment ça va ?'], correct: 0 },
    { id: 2, type: 'listen', question: 'حقيبة', sound: 'Valise', options: ['حقيبة', 'تذكرة', 'جواز سفر', 'طائرة'], correct: 0 },
    { id: 3, type: 'translate', question: 'أتمنى لك رحلة سعيدة', options: ['Bon voyage', 'Bonne nuit', 'Bonjour', 'Au revoir'], correct: 0 },
    { id: 4, type: 'missing_letter', question: 'طائرة', text: 'A v i o _', options: ['n', 'm', 'r', 's'], correct: 0 },
  ],
  // Unit 13
  '13-1': [
    { id: 1, type: 'select', question: 'ما الكلمة التي تعني "لعبة" أو "يلعب"؟', options: ['Jouer', 'Manger', 'Dormir', 'Travailler'], correct: 0 },
    { id: 2, type: 'match', question: 'صل الهوايات', pairs: [{ left: 'Lire', right: 'يقرأ', id: 1 }, { left: 'Dessiner', right: 'يرسم', id: 2 }, { left: 'Chanter', right: 'يغني', id: 3 }, { left: 'Danser', right: 'يرقص', id: 4 }] },
    { id: 3, type: 'listen', question: 'استمع واختر التركيمة', sound: 'Je lis un livre', options: ['أنا أقرأ كتاباً', 'أنا أرسم', 'أنا أغني', 'أنا أكتب'], correct: 0 },
  ],
  '13-2': [
    { id: 1, type: 'select', question: 'ما الكلمة التي تعني "رياضة"؟', options: ['Musique', 'Sport', 'Dessin', 'Lecture'], correct: 1 },
    { id: 2, type: 'listen', question: 'استمع للرياضة', sound: 'Football', options: ['كرة القدم', 'كرة السلة', 'السباحة', 'التنس'], correct: 0 },
    { id: 3, type: 'missing_letter', question: 'أكمل كلمة "يسبح"', text: 'N a g e _', options: ['r', 'm', 's', 'l'], correct: 0 },
  ],
  '13-3': [
    { id: 1, type: 'listen', question: 'ماذا يقول؟', sound: 'J\'aime la musique', options: ['أحب الموسيقى', 'أحب الرياضة', 'أحب القراءة', 'أحب اللعب'], correct: 0 },
    { id: 2, type: 'select', question: 'أريد اللعب بالخارج', options: ['Je veux jouer dehors', 'Je lis un livre', 'Il fait beau', 'Je joue au foot'], correct: 0 },
    { id: 3, type: 'match', question: 'وصل الكلمات', pairs: [{ left: 'Musique', right: 'موسيقى', id: 1 }, { left: 'Guitare', right: 'جيتار', id: 2 }, { left: 'Piano', right: 'بيانو', id: 3 }, { left: 'Chanson', right: 'أغنية', id: 4 }] },
  ],
  '13-4': [
    { id: 1, type: 'select', question: 'أي من هؤلاء هواية؟', options: ['Voiture', 'Maison', 'Lecture', 'Gare'], correct: 2 },
    { id: 2, type: 'listen', question: 'استمع', sound: 'Je joue au tennis', options: ['ألعب التنس', 'أقرأ كتابا', 'أحب الموسيقى', 'العب الكرة'], correct: 0 },
    { id: 3, type: 'translate', question: 'أنا أرسم', options: ['Je dessine', 'Je mange', 'Il court', 'Elle chante'], correct: 0 },
    { id: 4, type: 'missing_letter', question: 'يقرأ', text: 'L i r _', options: ['e', 's', 'x', 'a'], correct: 0 },
  ],
  // Unit 14
  '14-1': [
    { id: 1, type: 'select', question: 'ما الكلمة التي تعني "يستيقظ"؟', options: ['Se réveiller', 'Dormir', 'Manger', 'Arriver'], correct: 0 },
    { id: 2, type: 'match', question: 'صل الافعال', pairs: [{ left: 'Se réveiller', right: 'يستيقظ', id: 1 }, { left: 'Se doucher', right: 'يستحم', id: 2 }, { left: 'S\'habiller', right: 'يرتدي ملابسه', id: 3 }, { left: 'Petit-déjeuner', right: 'الإفطار', id: 4 }] },
    { id: 3, type: 'listen', question: 'استمع واختر', sound: 'Je me lève à sept heures', options: ['أستيقظ في السابعة', 'أنام في الثامنة', 'أذهب للعمل', 'آكل الفطور'], correct: 0 },
  ],
  '14-2': [
    { id: 1, type: 'select', question: 'كيف تقول "المكتب"؟', options: ['Le bureau', 'La maison', 'Le lit', 'Le café'], correct: 0 },
    { id: 2, type: 'listen', question: 'استمع', sound: 'Je travaille', options: ['أنا أعمل', 'أنا أدرس', 'أنا أنام', 'أنا آكل'], correct: 0 },
    { id: 3, type: 'missing_letter', question: 'أكمل كلمة "يعمل"', text: 'T r a v a i l l e _', options: ['r', 'm', 'n', 's'], correct: 0 },
  ],
  '14-3': [
    { id: 1, type: 'select', question: 'ماذا تعني كلمة "ينام"؟', options: ['Manger', 'Dormir', 'Regarder', 'Écouter'], correct: 1 },
    { id: 2, type: 'match', question: 'صل الكلمات', pairs: [{ left: 'Dormir', right: 'ينام', id: 1 }, { left: 'Lit', right: 'سرير', id: 2 }, { left: 'Dîner', right: 'عشاء', id: 3 }, { left: 'Soir', right: 'مساء', id: 4 }] },
    { id: 3, type: 'listen', question: 'استمع', sound: 'Je me couche à dix heures', options: ['أنام في العاشرة', 'أستيقظ في العاشرة', 'أعمل في العاشرة', 'أتعشى'], correct: 0 },
  ],
  '14-4': [
    { id: 1, type: 'select', question: 'ما هو "الإفطار"؟', options: ['Dîner', 'Déjeuner', 'Petit-déjeuner', 'Repas'], correct: 2 },
    { id: 2, type: 'listen', question: 'استمع', sound: 'Dormir', options: ['ينام', 'يأكل', 'يعمل', 'يمشي'], correct: 0 },
    { id: 3, type: 'translate', question: 'أنا أستيقظ', options: ['Je me réveille', 'Je me couche', 'Je travaille', 'Il mange'], correct: 0 },
    { id: 4, type: 'missing_letter', question: 'سرير', text: 'L i _', options: ['t', 's', 'x', 'r'], correct: 0 },
  ]
};
