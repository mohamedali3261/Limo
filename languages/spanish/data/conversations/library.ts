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
      { type: 'multiple_choice', spanish: '¿Qué busca el estudiante?', arabic: 'Was sucht der Student?', options: [ { text: 'كتب تاريخ', correct: true }, { text: 'روايات', correct: false }, { text: 'قاموس', correct: false } ] },
      { type: 'true_false', spanish: 'Puede llevar cuatro libros.', arabic: 'يمكنه أخذ أربعة كتب.', isTrue: false, correctArabic: 'ثلاثة كتب' }
    ]
};
