import { LessonItem, QuizQuestion } from '../types';

export const level2Greetings: LessonItem[] = [
  { 
    id: 'hallo', title: 'Hallo', subtitle: 'مرحباً', translation: 'مرحباً', emoji: '👋', audioWord: 'Hallo',
    grammarTip: { title: 'التحيات (Begrüßung)', content: 'كلمة Hallo هي الطريقة الأكثر شيوعاً لإلقاء التحية في ألمانيا في أي وقت من اليوم.' }
  },
  { id: 'guten_morgen', title: 'Guten Morgen', subtitle: 'صباح الخير', translation: 'صباح الخير', emoji: '🌅', audioWord: 'Guten Morgen' },
  { id: 'guten_tag', title: 'Guten Tag', subtitle: 'طاب يومك', translation: 'طاب يومك (نهاراً)', emoji: '☀️', audioWord: 'Guten Tag' },
  { id: 'guten_abend', title: 'Guten Abend', subtitle: 'مساء الخير', translation: 'مساء الخير', emoji: '🌇', audioWord: 'Guten Abend' },
  { id: 'gute_nacht', title: 'Gute Nacht', subtitle: 'تصبح على خير', translation: 'تصبح على خير', emoji: '🌙', audioWord: 'Gute Nacht',
    grammarTip: { title: 'ملاحظة', content: 'نقول Gute (وليس Guten) لأن كلمة Nacht مؤنثة.' }
  },
  { id: 'tschuss', title: 'Tschüss', subtitle: 'وداعاً (غير رسمي)', translation: 'وداعاً (بين الأصدقاء)', emoji: '👋', audioWord: 'Tschüss' },
  { id: 'auf_wiedersehen', title: 'Auf Wiedersehen', subtitle: 'إلى اللقاء (رسمي)', translation: 'إلى اللقاء (بشكل رسمي)', emoji: '🤝', audioWord: 'Auf Wiedersehen' },
  { id: 'ich_heisse', title: 'Ich heiße...', subtitle: 'اسمي...', translation: 'اسمي...', emoji: '🆔', audioWord: 'Ich heiße' },
  { id: 'wie_heisst_du', title: 'Wie heißt du?', subtitle: 'ما اسمك؟', translation: 'ما اسمك؟', emoji: '❓', audioWord: 'Wie heißt du' },
  { id: 'wie_geht_es_dir', title: 'Wie geht es dir?', subtitle: 'كيف حالك؟', translation: 'كيف حالك؟', emoji: '😊', audioWord: 'Wie geht es dir' },
  { id: 'mir_geht_es_gut', title: 'Mir geht es gut', subtitle: 'أنا بخير', translation: 'أنا بخير', emoji: '👍', audioWord: 'Mir geht es gut' },
  { id: 'danke', title: 'Danke', subtitle: 'شكراً', translation: 'شكراً', emoji: '🙏', audioWord: 'Danke' },
  { id: 'bitte', title: 'Bitte', subtitle: 'عفواً / من فضلك', translation: 'عفواً / من فضلك', emoji: '😊', audioWord: 'Bitte' },
  { id: 'freut_mich', title: 'Freut mich', subtitle: 'سعيد بلقائك', translation: 'سعيد بلقائك', emoji: '🤝', audioWord: 'Freut mich' },
  { id: 'bis_bald', title: 'Bis bald', subtitle: 'أراك قريباً', translation: 'أراك قريباً', emoji: '👋', audioWord: 'Bis bald' },
];

export const level2Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'كيف نقول "صباح الخير"؟',
    options: ['Guten Tag', 'Guten Morgen', 'Gute Nacht', 'Hallo'],
    answer: 'Guten Morgen',
    audioText: 'Guten Morgen'
  },
  {
    id: 2,
    type: 'memory_game',
    question: 'طابق التحية بمعناها',
    answer: 'true',
    memoryPairs: [
      { id: '1a', text: 'Guten Tag', matchId: '1' },
      { id: '1b', text: 'طاب يومك', matchId: '1' },
      { id: '2a', text: 'Auf Wiedersehen', matchId: '2' },
      { id: '2b', text: 'إلى اللقاء', matchId: '2' },
      { id: '3a', text: 'Gute Nacht', matchId: '3' },
      { id: '3b', text: 'تصبح على خير', matchId: '3' }
    ]
  },
  {
    id: 3,
    type: 'fill_in_blank',
    question: 'أكمل الحرف الناقص للكلمة التي تعني "وداعاً":',
    wordWithBlank: 'Tsch_ss',
    translation: 'وداعاً',
    options: ['ü', 'a', 'o', 'e'],
    answer: 'ü'
  },
  {
    id: 4,
    type: 'multiple_choice',
    question: 'كيف تقول "مساء الخير"؟',
    options: ['Guten Morgen', 'Guten Abend', 'Guten Tag', 'Gute Nacht'],
    answer: 'Guten Abend',
    audioText: 'Guten Abend'
  },
  {
    id: 5,
    type: 'multiple_choice',
    question: 'معنى "Auf Wiedersehen" هو:',
    options: ['مرحباً', 'وداعاً (غير رسمي)', 'إلى اللقاء (رسمي)', 'صباح الخير'],
    answer: 'إلى اللقاء (رسمي)',
    audioText: 'Auf Wiedersehen'
  },
  {
    id: 6,
    type: 'fill_in_blank',
    question: 'أكمل الكلمة لـ "طاب يومك":',
    wordWithBlank: 'Guten T_g',
    translation: 'طاب يومك',
    options: ['a', 'o', 'e', 'u'],
    answer: 'a'
  },
  {
    id: 7,
    type: 'multiple_choice',
    question: 'ما هو الرد المناسب لشخص قال لك "Hallo"؟',
    options: ['Gute Nacht', 'Hallo', 'Tschüss', 'Auf Wiedersehen'],
    answer: 'Hallo',
    audioText: 'Hallo'
  },
  {
    id: 8,
    type: 'multiple_choice',
    question: 'كيف تسأل "كيف حالك"؟',
    options: ['Wie geht es dir?', 'Wie heißt du?', 'Wie alt bist du?', 'Woher kommst du?'],
    answer: 'Wie geht es dir?'
  },
  {
    id: 9,
    type: 'multiple_choice',
    question: 'ما معنى "Freut mich"؟',
    options: ['سعيد بلقائك', 'أنا حزين', 'تفضل', 'شكراً'],
    answer: 'سعيد بلقائك'
  },
  {
    id: 10,
    type: 'fill_in_blank',
    question: 'أكمل كلمة "شكراً":',
    wordWithBlank: 'Dan_e',
    translation: 'شكراً',
    options: ['k', 'g', 'c', 't'],
    answer: 'k'
  },
  {
    id: 11,
    type: 'multiple_choice',
    question: 'Translate to Arabic: "Wie geht es dir?"',
    options: ['كيف حالك؟', 'ما اسمك؟', 'من أين أنت؟', 'كم عمرك؟'],
    answer: 'كيف حالك؟'
  },
  {
    id: 12,
    type: 'multiple_choice',
    question: 'ترجم للألمانية: "أنا بخير، شكراً"',
    options: ['Mir geht es gut, danke', 'Hallo, danke', 'Tschüss, danke', 'Gute Nacht, danke'],
    answer: 'Mir geht es gut, danke'
  }
];
