import { ConversationScenario } from './types';

export const library: ConversationScenario = {
    id: 'library_borrowing',
    arabicTitle: 'في المكتبة',
    description: 'استعارة كتب من المكتبة العامة',
    lines: [
      { speaker: 'A', speakerNameEs: 'Bibliotecario', speakerNameAr: 'أمين المكتبة', spanish: 'Buenos días. ¿Puedo ayudarle?', arabicTranslation: 'صباح الخير. هل يمكنني مساعدتك؟', arabicPronunciation: 'بوينوس دياس. بويدو أيودارلي؟' },
      { speaker: 'B', speakerNameEs: 'Estudiante', speakerNameAr: 'طالب', spanish: 'Sí, busco libros sobre historia de España para un trabajo.', arabicTranslation: 'نعم، أبحث عن كتب حول تاريخ إسبانيا من أجل بحث.', arabicPronunciation: 'سي، بوسكو ليبروس سوبري إستوريا دي إسبانيا بارا أون تراباخو.' },
      { speaker: 'A', speakerNameEs: 'Bibliotecario', speakerNameAr: 'أمين المكتبة', spanish: 'Tenemos muchos. ¿Busca una época específica?', arabicTranslation: 'لدينا الكثير. هل تبحث عن حقبة محددة؟', arabicPronunciation: 'تينيموس موتشوس. بوسكا أونا إيبوكا إسبيثيفيكا؟' },
      { speaker: 'B', speakerNameEs: 'Estudiante', speakerNameAr: 'طالب', spanish: 'Sí, el siglo veinte. ¿Cuántos libros puedo llevar?', arabicTranslation: 'نعم، القرن العشرين. كم كتاباً يمكنني الاستعارة؟', arabicPronunciation: 'سي، إل سيجلو بينتي. كوانتوس ليبروس بويدو ييبار؟' },
      { speaker: 'A', speakerNameEs: 'Bibliotecario', speakerNameAr: 'أمين المكتبة', spanish: 'Puede llevar hasta tres libros por dos semanas.', arabicTranslation: 'يمكنك أخذ حتى ثلاثة كتب لمدة أسبوعين.', arabicPronunciation: 'بويدي ييبار أستا تريس ليبروس بور دوس سيميناس.' },
      { speaker: 'B', speakerNameEs: 'Estudiante', speakerNameAr: 'طالب', spanish: 'Perfecto. ¿Necesito mi carné de estudiante?', arabicTranslation: 'ممتاز. هل أحتاج إلى بطاقة الطالب الخاصة بي؟', arabicPronunciation: 'بيرفيكتو. نيثيسيتو مي كارني دي إستوديانتى؟' },
      { speaker: 'A', speakerNameEs: 'Bibliotecario', speakerNameAr: 'أمين المكتبة', spanish: 'Sí, por favor, preséntelo aquí.', arabicTranslation: 'نعم، من فضلك، قدمها هنا.', arabicPronunciation: 'سي، بور فابور، بريسينتيلو أكي.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Qué busca el estudiante?', arabic: 'ماذا يبحث الطالب؟', options: [ { text: 'Libros de historia', correct: true }, { text: 'Novelas', correct: false }, { text: 'Diccionarios', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Qué época busca?', arabic: 'ما الحقبة التي يبحث عنها؟', options: [ { text: 'El siglo diecinueve', correct: false }, { text: 'El siglo veinte', correct: true }, { text: 'El siglo veintiuno', correct: false } ] },
      { type: 'true_false', spanish: 'Puede llevar cuatro libros.', arabic: 'يمكنه أخذ أربعة كتب.', isTrue: false, correctArabic: 'ثلاثة كتب' },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Busco libros sobre historia de España', arabic: 'أبحث عن كتب حول تاريخ إسبانيا' }, { spanish: 'Puede llevar hasta tres libros', arabic: 'يمكنك أخذ حتى ثلاثة كتب' }, { spanish: 'Necesito mi carné de estudiante', arabic: 'أحتاج إلى بطاقة الطالب الخاصة بي' } ] },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Por dos semanas', arabic: 'لمدة أسبوعين' }, { spanish: 'Preséntelo aquí', arabic: 'قدمها هنا' }, { spanish: 'Tenemos muchos', arabic: 'لدينا الكثير' } ] },
      { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'Puede llevar hasta _____ libros por dos semanas.', answer: 'tres', fillBlankOptions: [ 'tres', 'cuatro', 'cinco', 'dos' ] }
    ]
};
