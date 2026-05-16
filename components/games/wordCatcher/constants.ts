import { Conversation, GameLevel } from './types';
import { BASIC_CONVERSATIONS } from './data/conversations';
import { ADVANCED_CONVERSATIONS } from './data/conversationsAdvanced';
import { EXPERT_CONVERSATIONS } from './data/conversationsExpert';
import { GAME_LEVELS } from './data/gameLevels';

// دمج جميع المحادثات
export const CONVERSATIONS: Conversation[] = [
  ...BASIC_CONVERSATIONS,
  ...ADVANCED_CONVERSATIONS,
  ...EXPERT_CONVERSATIONS
];

// تصدير مستويات اللعبة
export const LEVELS: GameLevel[] = GAME_LEVELS;

// دالة للحصول على المحادثات المتاحة بناءً على التقدم
export const getAvailableConversations = (completedLevels: number): Conversation[] => {
  return CONVERSATIONS.filter(conv => (conv.level || 1) <= completedLevels + 1);
};

// دالة للتحقق من إذا كانت المحادثة مفتوحة
export const isConversationUnlocked = (conversation: Conversation, completedLevels: number): boolean => {
  return (conversation.level || 1) <= completedLevels + 1;
};

// دالة للحصول على المحادثة التالية
export const getNextConversation = (currentConvId: string): Conversation | null => {
  const currentIndex = CONVERSATIONS.findIndex(c => c.id === currentConvId);
  if (currentIndex === -1 || currentIndex === CONVERSATIONS.length - 1) return null;
  return CONVERSATIONS[currentIndex + 1];
};

// ترجمات الكلمات (يمكن نقلها لملف منفصل لاحقاً إذا كبر حجمها)
export const wordTranslations: Record<string, string> = {
  "hello": "مرحباً", "how": "كيف", "are": "تكون", "you": "أنت", "i": "أنا", "am": "أكون",
  "fine": "بخير", "thanks": "شكراً", "what": "ماذا", "is": "يكون", "your": "خاصتك",
  "name": "اسم", "my": "خاصتي", "memo": "ميمو", "want": "أريد", "a": "لـ", "coffee": "قهوة",
  "with": "بـ", "milk": "حليب", "or": "أم", "sugar": "سكر", "only": "فقط", "please": "رجاءً",
  "that": "ذلك", "three": "ثلاثة", "pounds": "جنيهات", "much": "كثير", "this": "هذا",
  "it": "إنه", "ten": "عشرة", "dollars": "دولارات", "too": "جداً", "okay": "حسناً",
  "five": "خمسة", "where": "أين", "the": "الـ", "bank": "بنك", "go": "اذهب",
  "straight": "مباشرة", "ahead": "أماماً", "turn": "انعطف", "right": "يميناً",
  "there": "هناك", "thank": "شكراً", "very": "جداً", "weather": "طقس", "sunny": "مشمس",
  "today": "اليوم", "hot": "حار", "no": "لا", "perfect": "مثالي", "do": "هل",
  "have": "تملك", "siblings": "أخوة", "yes": "نعم", "one": "واحد", "brother": "أخ",
  "he": "هو", "older": "أكبر", "than": "من", "younger": "أصغر", "doing": "تفعل",
  "well": "جيد", "and": "و", "from": "من", "egypt": "مصر", "would": "أود", "like": "أن",
  "to": "إلى", "order": "أطلب", "cup": "فنجان", "of": "من", "just": "فقط", "me": "لي",
  "will": "سيكون", "be": "يكون", "fifty": "خمسون", "pence": "بنس", "excuse": "عفواً",
  "does": "يفعل", "shirt": "قميص", "cost": "يكلف", "costs": "يكلف", "twenty": "عشرون",
  "seems": "يبدو", "bit": "قليلاً", "expensive": "غالي", "for": "لـ", "can": "يمكن",
  "give": "أعطي", "discount": "خصم", "percent": "بالمئة", "nearest": "أقرب", "here": "هنا",
  "two": "اثنان", "blocks": "مباني", "then": "ثم", "should": "يجب", "left": "يسار",
  "see": "ترى", "on": "على", "looking": "يبدو", "outside": "خارج", "warm": "دافئ",
  "think": "أعتقد", "rain": "تمطر", "later": "لاحقاً", "stay": "يبقى", "all": "كل",
  "day": "يوم", "any": "أي", "sisters": "أخوات", "but": "لكن", "good": "جيد",
  "evening": "مساء", "table": "طاولة", "course": "بالطبع", "follow": "اتبع", "way": "طريق",
  "menu": "قائمة", "wine": "نبيذ", "list": "قائمة", "back": "أعود", "shortly": "قريباً",
  "reservation": "حجز", "under": "تحت", "smith": "سميث", "let": "دع", "check": "أتحقق",
  "moment": "لحظة", "time": "وقت", "breakfast": "إفطار", "served": "يُقدم", "morning": "صباح",
  "seven": "سابعة", "until": "حتى", "thirty": "ثلاثون", "in": "في", "flight": "رحلة",
  "london": "لندن", "counter": "كاونتر", "number": "رقم", "fifteen": "خمسة عشر",
  "many": "كم", "bags": "حقائب", "allowed": "مسموح", "up": "حتى", "kilos": "كيلو",
  "each": "كل", "doctor": "دكتور", "not": "لا", "feeling": "أشعر", "problem": "مشكلة",
  "exactly": "بالضبط", "bad": "سيء", "headache": "صداع", "sore": "التهاب", "throat": "حلق",
  "examine": "أفحص", "temperature": "حرارة", "did": "هل", "finish": "أنهيت", "report": "تقرير",
  "yesterday": "أمس", "sent": "أرسلت", "by": "بـ", "email": "بريد", "last": "الماضية",
  "night": "ليلة", "great": "رائع", "work": "عمل", "we": "نحن", "meeting": "اجتماع",
  "at": "في", "prepare": "أحضر", "presentation": "عرض", "slides": "شرائح", "now": "الآن",
  "join": "انضم", "gym": "نادي", "monthly": "شهرية", "yearly": "سنوية", "membership": "عضوية",
  "options": "خيارات", "available": "متاحة", "facilities": "مرافق", "classes": "دروس",
  "offer": "تقدم", "pool": "مسبح", "yoga": "يوغا", "personal": "شخصي", "trainers": "مدربون",
  "favorite": "مفضل", "subject": "مادة", "school": "مدرسة", "really": "حقاً", "enjoy": "أستمتع",
  "mathematics": "رياضيات", "science": "علوم", "homework": "واجبات", "tomorrow": "غد",
  "need": "أحتاج", "write": "أكتب", "essay": "مقال", "about": "عن", "history": "تاريخ",
  "find": "أجد", "books": "كتب", "floor": "طابق", "section": "قسم", "borrow": "أستعير",
  "once": "واحدة", "weeks": "أسابيع", "may": "يمكن", "speak": "أتحدث", "john": "جون",
  "sorry": "آسف", "leave": "أترك", "message": "رسالة", "tell": "أخبر",
  "take": "خذ", "train": "قطار", "station": "محطة", "sure": "بالتأكيد", "which": "أي",
  "route": "طريق", "prefer": "تفضل", "fastest": "أسرع", "hurry": "مستعجل", "minutes": "دقائق",
  "dairy": "ألبان", "special": "خاصة", "offers": "عروض", "fresh": "طازج", "vegetables": "خضروات",
  "tickets": "تذاكر", "show": "عرض", "seats": "مقاعد", "front": "أمام", "middle": "وسط",
  "movie": "فيلم", "starts": "يبدأ", "beautiful": "جميل", "picnic": "نزهة",
  "bring": "أحضر", "something": "شيء", "eat": "أكل", "drink": "شرب", "made": "صنع",
  "sandwiches": "سندويشات", "brought": "أحضر", "juice": "عصير", "happy": "سعيد", "birthday": "ميلاد",
  "hope": "أتمنى", "wonderful": "رائع", "so": "جداً", "coming": "حضور", "party": "حفلة",
  "small": "صغير", "gift": "هدية", "kind": "لطيف", "appreciate": "أقدر", "ocean": "محيط",
  "looks": "يبدو", "calm": "هادئ", "swimming": "سباحة", "relaxing": "استرخاء", "remember": "تذكر",
  "sunscreen": "واقي", "bag": "حقيبة", "ancient": "قديم", "egyptian": "مصري", "exhibition": "معرض",
  "fascinating": "رائع", "agree": "أوافق", "artifacts": "قطع", "incredibly": "مذهل", "preserved": "محفوظ",
  "long": "طويل", "civilization": "حضارة", "lasted": "استمر", "over": "أكثر", "thousand": "ألف",
  "years": "سنوات", "previous": "سابق", "experience": "خبرة", "worked": "عمل", "manager": "مدير",
  "greatest": "أعظم", "strengths": "قوة", "weaknesses": "ضعف", "organized": "منظم", "sometimes": "أحياناً",
  "perfectionist": "مثالي", "rent": "استئجار", "car": "سيارة", "days": "أيام", "type": "نوع",
  "automatic": "أوتوماتيك", "license": "رخصة", "credit": "ائتمان", "card": "بطاقة", "send": "أرسل",
  "package": "طرد", "france": "فرنسا", "express": "سريع", "regular": "عادي", "shipping": "شحن",
  "usually": "عادة", "takes": "يستغرق", "afternoon": "مساء", "appointment": "موعد", "seat": "اجلس",
  "haircut": "قصة", "maybe": "ربما", "highlights": "خصل", "color": "ألوان", "having": "أعاني",
  "pain": "ألم", "tooth": "ضرس", "look": "نظرة", "wrong": "مشكلة", "treatment": "علاج",
  "medication": "دواء", "cavity": "تسوس", "filled": "حشو", "anything": "شيء", "cold": "برد",
  "recommend": "أنصح", "medicine": "دواء", "twice": "مرتين", "daily": "يومياً", "side": "جانبية",
  "effects": "آثار", "know": "أعرف", "might": "قد", "cause": "يسبب", "drowsiness": "نعاس",
  "avoid": "تجنب", "driving": "قيادة", "fill": "املأ", "gas": "بنزين", "oil": "زيت",
  "tire": "إطار", "pressure": "ضغط", "forty": "أربعون"
};
