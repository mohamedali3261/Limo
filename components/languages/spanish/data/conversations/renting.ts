import { ConversationScenario } from './types';

export const renting: ConversationScenario = {
    id: 'renting_apartment',
    arabicTitle: 'في مكتب تأجير الشقق',
    description: 'الاستفسار عن شقة للإيجار',
    lines: [
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الوكيل', spanish: 'Buenos días. ¿Busca usted alquilar o comprar?', arabicTranslation: 'صباح الخير. هل تبحث عن الإيجار أم الشراء؟', arabicPronunciation: 'بوينوس دياس. بوسكا أوستيد ألكيلار أو كومبرار؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Quiero alquilar un apartamento cerca de la universidad.', arabicTranslation: 'أريد استئجار شقة قرب الجامعة.', arabicPronunciation: 'كييرو ألكيلار أون أبارتامينتو ثيركا دي لا أونيبرسيداد.' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الوكيل', spanish: 'Tengo uno perfecto de dos habitaciones. Está amueblado.', arabicTranslation: 'لدي واحدة مثالية بغرفتي نوم. إنها مفروشة.', arabicPronunciation: 'تينجو أونو بيرفيكتو دي دوس أبيتاثيونيس. إستا أمويبلادو.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: '¿Cuánto es el alquiler mensual?', arabicTranslation: 'كم الإيجار الشهري؟', arabicPronunciation: 'كوانتو إس إل ألكيليير منسوال؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الوكيل', spanish: 'Ochocientos euros. El gas y el agua están incluidos.', arabicTranslation: 'ثمانمائة يورو. الغاز والماء مشمولان.', arabicPronunciation: 'أوتشوثيينتوس إيوروس. إل جاس إي إل أجوا إستان إنكلوييدوس.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Suena bien. ¿Podemos ir a verlo esta tarde?', arabicTranslation: 'يبدو جيداً. هل يمكننا الذهاب لرؤيته بعد ظهر اليوم؟', arabicPronunciation: 'سوينا بيين. بوديموس إير أ بيرلو إيستا تاردي؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الوكيل', spanish: 'Por supuesto. Lo espero aquí a las cinco.', arabicTranslation: 'بالطبع. انتظرك هنا في الساعة الخامسة.', arabicPronunciation: 'بور سوبويستو. لو إسبرو أكي أ لاس ثينكو.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Cuánto es el alquiler mensual?', arabic: 'كم الإيجار الشهري؟', options: [ { text: '800 euros', correct: true }, { text: '1000 euros', correct: false }, { text: '500 euros', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Cuántas habitaciones tiene?', arabic: 'كم عدد الغرف؟', options: [ { text: 'Una habitación', correct: false }, { text: 'Dos habitaciones', correct: true }, { text: 'Tres habitaciones', correct: false } ] },
      { type: 'true_false', spanish: 'El apartamento no tiene muebles.', arabic: 'الشقة غير مفروشة.', isTrue: false, correctArabic: 'إنها مفروشة' },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Quiero alquilar un apartamento', arabic: 'أريد استئجار شقة' }, { spanish: 'El gas y el agua están incluidos', arabic: 'الغاز والماء مشمولان' }, { spanish: 'Podemos ir a verlo esta tarde', arabic: 'يمكننا الذهاب لرؤيته بعد ظهر اليوم' } ] },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Cerca de la universidad', arabic: 'قرب الجامعة' }, { spanish: 'Está amueblado', arabic: 'إنها مفروشة' }, { spanish: 'Lo espero aquí a las cinco', arabic: 'انتظرك هنا في الساعة الخامسة' } ] },
      { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'El apartamento tiene _____ habitaciones.', answer: 'dos', fillBlankOptions: [ 'dos', 'tres', 'cuatro', 'una' ] }
    ]
};
