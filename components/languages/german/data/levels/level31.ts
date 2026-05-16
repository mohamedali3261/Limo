import { LessonItem, QuizQuestion } from '../types';

export const level31Holidays: LessonItem[] = [
  { id: '1', title: 'Das Fest', translation: 'الاحتفال / العيد', emoji: '🎉', audioWord: 'Ein großes Fest' },
  { id: '2', title: 'Feiern', translation: 'يحتفل', emoji: '🥳', audioWord: 'Wir feiern Geburtstag' },
  { id: '3', title: 'Das Geschenk', translation: 'الهدية', emoji: '🎁', audioWord: 'Ein schönes Geschenk' },
  { id: '4', title: 'Die Party', translation: 'الحفلة', emoji: '🎈', audioWord: 'Die Party macht Spaß' },
  { id: '5', title: 'Herzlichen Glückwunsch', translation: 'تهانينا القلبية', emoji: '🎊', audioWord: 'Herzlichen Glückwunsch zum Geburtstag' },
  { id: '6', title: 'Einladen', translation: 'يدعو', emoji: '✉️', audioWord: 'Ich lade dich ein' },
  { id: '7', title: 'Der Gast', translation: 'الضيف', emoji: '👨‍👩-👧', audioWord: 'Die Gäste kommen bald' },
  { id: '8', title: 'Tanzen', translation: 'الرقص', emoji: '💃', audioWord: 'Wir tanzen auf dem Fest' },
  { id: '9', title: 'Singen', translation: 'الغناء', emoji: '🎤', audioWord: 'Sie singen ein Lied' },
  { id: '10', title: 'Viel Glück', translation: 'حظ سعيد', emoji: '🍀', audioWord: 'Viel Glück für die Zukunft' },
  { id: '11', title: 'Frohe Weihnachten', translation: 'عيد ميلاد مجيد', emoji: '🎄', audioWord: 'Frohe Weihnachten euch allen' },
  { id: '12', title: 'Gutes neues Jahr', translation: 'سنة جديدة سعيدة', emoji: '🎇', audioWord: 'Ein gutes neues Jahr!' },
];

export const level31Quiz: QuizQuestion[] = [
  { id: 1, type: 'multiple_choice', question: 'ما معنى "Das Geschenk"؟', options: ['الهدية', 'الاحتفال', 'الضيف', 'الحفلة'], answer: 'الهدية' },
  { id: 2, type: 'multiple_choice', question: 'كيف تقول "تهانينا"؟', options: ['Herzlichen Glückwunsch', 'Viel Glück', 'Gute Besserung', 'Guten Appetit'], answer: 'Herzlichen Glückwunsch' },
  { id: 3, type: 'flashcard', question: 'Viel Glück', frontText: 'Viel Glück', backText: 'حظ سعيد', answer: 'حظ سعيد' },
  { id: 4, type: 'memory_game', question: 'طابق كلمات العيد', answer: '', memoryPairs: [
    { id: '1a', text: 'Fest', matchId: '1' }, { id: '1b', text: 'عيد', matchId: '1' },
    { id: '2a', text: 'Gast', matchId: '2' }, { id: '2b', text: 'ضيف', matchId: '2' },
    { id: '3a', text: 'Lied', matchId: '3' }, { id: '3b', text: 'أغنية', matchId: '3' }
  ]},
  { id: 5, type: 'multiple_choice', question: 'Translate to Arabic: "Wir feiern heute."', options: ['نحن نحتفل اليوم', 'نحن نأكل الآن', 'نحن نذهب غداً', 'نحن نلعب هنا'], answer: 'نحن نحتفل اليوم' },
  { id: 6, type: 'multiple_choice', question: 'ترجم للألمانية: "حظ سعيد!"', options: ['Viel Glück!', 'Gute Reise!', 'Schönen Tag!', 'Guten Morgen!'], answer: 'Viel Glück!' }
];
