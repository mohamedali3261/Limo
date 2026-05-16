import { LessonItem, QuizQuestion } from '../types';

export const level3Numbers: LessonItem[] = [
  { id: '0', title: 'Null', subtitle: '0', translation: 'صفر', emoji: '0️⃣', audioWord: 'Null' },
  { id: '1', title: 'Eins', subtitle: '1', translation: 'واحد', emoji: '1️⃣', audioWord: 'Eins' },
  { id: '2', title: 'Zwei', subtitle: '2', translation: 'اثنان', emoji: '2️⃣', audioWord: 'Zwei',
    grammarTip: { title: 'نطق الحرف Z', content: 'حرف Z في الألمانية يُنطق "تْس" (ts) وليس زاي.'}
  },
  { id: '3', title: 'Drei', subtitle: '3', translation: 'ثلاثة', emoji: '3️⃣', audioWord: 'Drei' },
  { id: '4', title: 'Vier', subtitle: '4', translation: 'أربعة', emoji: '4️⃣', audioWord: 'Vier',
    grammarTip: { title: 'نطق الحرف V والأكثور', content: 'حرف V يُنطق غالبًا مثل F، والمقطع ie يُنطق "إي" طويلة.'}
  },
  { id: '5', title: 'Fünf', subtitle: '5', translation: 'خمسة', emoji: '5️⃣', audioWord: 'Fünf' },
  { id: '6', title: 'Sechs', subtitle: '6', translation: 'ستة', emoji: '6️⃣', audioWord: 'Sechs',
    grammarTip: { title: 'المقطع chs', content: 'المقطع chs يُنطق كحرف X عربي (كس).' }
  },
  { id: '7', title: 'Sieben', subtitle: '7', translation: 'سبعة', emoji: '7️⃣', audioWord: 'Sieben' },
  { id: '8', title: 'Acht', subtitle: '8', translation: 'ثمانية', emoji: '8️⃣', audioWord: 'Acht' },
  { id: '9', title: 'Neun', subtitle: '9', translation: 'تسعة', emoji: '9️⃣', audioWord: 'Neun',
    grammarTip: { title: 'المقطع eu', content: 'المقطع eu يُنطق "أوي" (oy).' }
  },
  { id: '10', title: 'Zehn', subtitle: '10', translation: 'عشرة', emoji: '🔟', audioWord: 'Zehn' },
  { id: '11', title: 'Elf', subtitle: '11', translation: 'أحد عشر', emoji: '🔢', audioWord: 'Elf' },
  { id: '12', title: 'Zwölf', subtitle: '12', translation: 'اثنا عشر', emoji: '🔢', audioWord: 'Zwölf' },
  { id: '13', title: 'Dreizehn', subtitle: '13', translation: 'ثلاثة عشر', emoji: '🔢', audioWord: 'Dreizehn' },
  { id: '14', title: 'Vierzehn', subtitle: '14', translation: 'أربعة عشر', emoji: '🔢', audioWord: 'Vierzehn' },
  { id: '15', title: 'Fünfzehn', subtitle: '15', translation: 'خمسة عشر', emoji: '🔢', audioWord: 'Fünfzehn' },
  { id: '16', title: 'Sechzehn', subtitle: '16', translation: 'ستة عشر', emoji: '🔢', audioWord: 'Sechzehn' },
  { id: '17', title: 'Siebzehn', subtitle: '17', translation: 'سبعة عشر', emoji: '🔢', audioWord: 'Siebzehn' },
  { id: '18', title: 'Achtzehn', subtitle: '18', translation: 'ثمانية عشر', emoji: '🔢', audioWord: 'Achtzehn' },
  { id: '19', title: 'Neunzehn', subtitle: '19', translation: 'تسعة عشر', emoji: '🔢', audioWord: 'Neunzehn' },
  { id: '20', title: 'Zwanzig', subtitle: '20', translation: 'عشرون', emoji: '🔢', audioWord: 'Zwanzig' },
];

export const level3Quiz: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple_choice',
    question: 'ما هو الرقم 5؟',
    options: ['Vier', 'Fünf', 'Zwei', 'Acht'],
    answer: 'Fünf',
    audioText: 'Fünf'
  },
  {
    id: 2,
    type: 'fill_in_blank',
    question: 'أكمل الكلمة للرقم 10:',
    wordWithBlank: 'Z_hn',
    translation: 'عشرة',
    options: ['e', 'i', 'u', 'o'],
    answer: 'e'
  },
  {
    id: 3,
    type: 'flashcard',
    question: 'اضغط على البطاقة لقلبها',
    frontText: 'Sechs',
    backText: '6',
    answer: 'true',
    audioText: 'Sechs'
  },
  {
    id: 4,
    type: 'multiple_choice',
    question: 'كيف تقول "اثنان"؟',
    options: ['Eins', 'Zwei', 'Drei', 'Null'],
    answer: 'Zwei',
    audioText: 'Zwei'
  },
  {
    id: 5,
    type: 'fill_in_blank',
    question: 'أكمل كلمة الرقم 3:',
    wordWithBlank: 'Dr_i',
    translation: 'ثلاثة',
    options: ['e', 'a', 'o', 'u'],
    answer: 'e'
  },
  {
    id: 6,
    type: 'multiple_choice',
    question: 'الرقم 7 بالمانية هو:',
    options: ['Sechs', 'Sieben', 'Acht', 'Neun'],
    answer: 'Sieben',
    audioText: 'Sieben'
  },
  {
    id: 7,
    type: 'multiple_choice',
    question: 'ما هو الرقم 0؟',
    options: ['Null', 'Eins', 'Zehn', 'Vier'],
    answer: 'Null',
    audioText: 'Null'
  },
  {
    id: 8,
    type: 'fill_in_blank',
    question: 'أكمل كلمة الرقم 8:',
    wordWithBlank: 'A_ht',
    translation: 'ثمانية',
    options: ['c', 's', 'k', 't'],
    answer: 'c'
  },
  {
    id: 9,
    type: 'multiple_choice',
    question: 'ما هو الرقم "Elf"؟',
    options: ['11', '12', '10', '9'],
    answer: '11'
  },
  {
    id: 10,
    type: 'multiple_choice',
    question: 'ما معنى "Zwanzig"؟',
    options: ['20', '30', '40', '50'],
    answer: '20'
  },
  {
    id: 11,
    type: 'memory_game',
    question: 'طابق الأرقام',
    answer: '',
    memoryPairs: [
      { id: '1a', text: 'Elf', matchId: '1' }, { id: '1b', text: '11', matchId: '1' },
      { id: '2a', text: 'Zwölf', matchId: '2' }, { id: '2b', text: '12', matchId: '2' },
      { id: '3a', text: 'Fünfzehn', matchId: '3' }, { id: '3b', text: '15', matchId: '3' }
    ]
  },
  {
    id: 12,
    type: 'multiple_choice',
    question: 'Translate to Arabic: "Ich habe drei Kinder."',
    options: ['لدي ثلاثة أطفال', 'لدي طفل واحد', 'لدي أربعة أطفال', 'لدي طفلان'],
    answer: 'لدي ثلاثة أطفال'
  },
  {
    id: 13,
    type: 'multiple_choice',
    question: 'ترجم للألمانية: "عشرة وعشرة هي عشرون"',
    options: ['Zehn und zehn ist zwanzig', 'Fünf und fünf ist zehn', 'Eins und eins ist zwei', 'Acht und acht ist sechzehn'],
    answer: 'Zehn und zehn ist zwanzig'
  }
];
