import { ConversationScenario } from './types';

export const interview: ConversationScenario = {
    id: 'job_interview',
    arabicTitle: 'مقابلة عمل',
    description: 'إجراء مقابلة عمل لوظيفة مسوق',
    lines: [
      { speaker: 'A', speakerNameEs: 'Entrevistador', speakerNameAr: 'المُحاور', spanish: 'Buenos días. Cuénteme, ¿por qué quiere trabajar aquí?', arabicTranslation: 'صباح الخير. أخبرني، لماذا تريد العمل هنا؟', arabicPronunciation: 'بوينوس دياس. كوينتيمي، بور كي كييري تراباخار أكي؟' },
      { speaker: 'B', speakerNameEs: 'Candidato', speakerNameAr: 'المرشح', spanish: 'Admiro mucho esta empresa y quiero aprender más sobre marketing digital.', arabicTranslation: 'أنا أقدر هذه الشركة كثيراً وأريد تعلم المزيد عن التسويق الرقمي.', arabicPronunciation: 'أدميرو موتشو إيستا إمبريسا إي كييرو أبريندير ماس سوبري ماركيتينج ديخييتال.' },
      { speaker: 'A', speakerNameEs: 'Entrevistador', speakerNameAr: 'المُحاور', spanish: '¿Tiene experiencia en ventas?', arabicTranslation: 'هل لديك خبرة في المبيعات؟', arabicPronunciation: 'تييني إكسبريينثيا إن بينتاس؟' },
      { speaker: 'B', speakerNameEs: 'Candidato', speakerNameAr: 'المرشح', spanish: 'Sí, trabajé dos años en una tienda de ropa comercial.', arabicTranslation: 'نعم، عملت عامين في متجر ملابس تجاري.', arabicPronunciation: 'سي، تراباخي دوس أنيوس إن أونا تييندا دي روبا كوميرثيال.' },
      { speaker: 'A', speakerNameEs: 'Entrevistador', speakerNameAr: 'المُحاور', spanish: 'Excelente. ¿Qué idiomas habla?', arabicTranslation: 'ممتاز. ما اللغات التي تتحدثها؟', arabicPronunciation: 'إيكثيلينتي. كي إيديوماس أبلا؟' },
      { speaker: 'B', speakerNameEs: 'Candidato', speakerNameAr: 'المرشح', spanish: 'Hablo español, inglés y un poco de francés.', arabicTranslation: 'أتحدث الإسبانية، الإنجليزية، وقليلاً من الفرنسية.', arabicPronunciation: 'أبلو إسبانيول، إينجليس إي أون بوكو دي فرانثيس.' },
      { speaker: 'A', speakerNameEs: 'Entrevistador', speakerNameAr: 'المُحاور', spanish: 'Muy bien, le llamaremos pronto.', arabicTranslation: 'جيد جداً، سنتصل بك قريباً.', arabicPronunciation: 'موي بيين، لي ياماريموس برونتو.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Tiene experiencia el candidato?', arabic: 'هل لدى المرشح خبرة؟', options: [ { text: 'No', correct: false }, { text: 'Sí, en ventas', correct: true }, { text: 'Sí, en enseñanza', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Cuántos años trabajó en la tienda?', arabic: 'كم سنة عمل في المتجر؟', options: [ { text: 'Un año', correct: false }, { text: 'Dos años', correct: true }, { text: 'Tres años', correct: false } ] },
      { type: 'true_false', spanish: 'El candidato habla francés perfectamente.', arabic: 'المرشح يتحدث الفرنسية بطلاقة.', isTrue: false, correctArabic: 'قليل من الفرنسية' },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Admiro mucho esta empresa', arabic: 'أنا أقدر هذه الشركة كثيراً' }, { spanish: 'Trabajé dos años en una tienda', arabic: 'عملت عامين في متجر' }, { spanish: 'Hablo español, inglés y francés', arabic: 'أتحدث الإسبانية والإنجليزية والفرنسية' } ] },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Quiero aprender más sobre marketing digital', arabic: 'أريد تعلم المزيد عن التسويق الرقمي' }, { spanish: 'Excelente', arabic: 'ممتاز' }, { spanish: 'Le llamaremos pronto', arabic: 'سنتصل بك قريباً' } ] },
      { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'Hablo español, inglés y un poco de _____', answer: 'francés', fillBlankOptions: [ 'francés', 'alemán', 'italiano', 'portugués' ] }
    ]
};
