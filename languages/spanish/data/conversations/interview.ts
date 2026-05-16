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
      { type: 'multiple_choice', spanish: '¿Tiene experiencia el candidato?', arabic: 'Hat der Kandidat Erfahrung?', options: [ { text: 'لا', correct: false }, { text: 'نعم، في المبيعات', correct: true }, { text: 'نعم، في التدريس', correct: false } ] },
      { type: 'true_false', spanish: 'El candidato habla francés perfectamente.', arabic: 'المرشح يتحدث الفرنسية بطلاقة.', isTrue: false, correctArabic: 'قليل من الفرنسية' }
    ]
};
