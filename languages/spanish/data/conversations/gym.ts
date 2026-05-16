import { ConversationScenario } from './types';

export const gym: ConversationScenario = {
    id: 'gym_membership',
    arabicTitle: 'في النادي الصحي (الجيم)',
    description: 'الاستفسار عن اشتراك الجيم والخدمات',
    lines: [
      { speaker: 'A', speakerNameEs: 'Recepcionista', speakerNameAr: 'موظف الاستقبال', spanish: 'Buenos días. Bienvenido a Fitness Plus.', arabicTranslation: 'صباح الخير. مرحباً بك في فيتنس بلس.', arabicPronunciation: 'بوينوس دياس. بيينبينيدو أ فيتنيس بلس.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Hola. Estoy interesado en inscribirme.', arabicTranslation: 'مرحباً. أنا مهتم بالاشتراك.', arabicPronunciation: 'أولا. إستوي إنتيريسادو إن إنسكريبيرمي.' },
      { speaker: 'A', speakerNameEs: 'Recepcionista', speakerNameAr: 'موظف الاستقبال', spanish: 'Excelente. ¿Busca planes mensuales o anuales?', arabicTranslation: 'ممتاز. هل تبحث عن خطط شهرية أم سنوية؟', arabicPronunciation: 'إيكثيلينتي. بوسكا بلاس مينسواليس أو أنواليس؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Empezaré con un plan mensual para probar.', arabicTranslation: 'سأبدأ بخطة شهرية للتجربة.', arabicPronunciation: 'إمبيثارِي كون أون بلان مينسوال بارا بروبار.' },
      { speaker: 'A', speakerNameEs: 'Recepcionista', speakerNameAr: 'موظف الاستقبال', spanish: 'Muy bien. Incluye acceso a todas las máquinas y clases.', arabicTranslation: 'جيد جداً. تشمل الدخول لجميع الآلات والفصول.', arabicPronunciation: 'موي بيين. إينكلويي أكثيسو أ توداس لاس ماكينات إي كلاسيس.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: '¿Tienen clases de yoga por la tarde?', arabicTranslation: 'هل لديكم دروس يوغا في المساء؟', arabicPronunciation: 'تيينين كلاسيس دي يوجا بور لا تاردي؟' },
      { speaker: 'A', speakerNameEs: 'Recepcionista', speakerNameAr: 'موظف الاستقبال', spanish: 'Sí, tenemos clases a las seis y siete de la tarde.', arabicTranslation: 'نعم، لدينا دروس في السادسة والسابعة مساءً.', arabicPronunciation: 'سي، تينيموس كلاسيس أ لاس سييس إي سييتي دي لا تاردي.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Perfecto. ¿Cuáles son los horarios de apertura?', arabicTranslation: 'ممتاز. ما هي مواعيد العمل؟', arabicPronunciation: 'بيرفيكتو. كواليس سون لوس أوراريوس دي أبيرتورا؟' },
      { speaker: 'A', speakerNameEs: 'Recepcionista', speakerNameAr: 'موظف الاستقبال', spanish: 'Abrimos de seis de la mañana a diez de la noche.', arabicTranslation: 'نفتح من السادسة صباحاً حتى العاشرة مساءً.', arabicPronunciation: 'أبريموس دي سييس دي لا مانيانا أ دييث دي لا نوتشي.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: '¿Qué necesito para registrarme?', arabicTranslation: 'ماذا أحتاج للتسجيل؟', arabicPronunciation: 'كي نيثيسيتو بارا ريجستريارمي؟' },
      { speaker: 'A', speakerNameEs: 'Recepcionista', speakerNameAr: 'موظف الاستقبال', spanish: 'Solo su documento de identidad y pagar la primera mensualidad.', arabicTranslation: 'فقط هويتك ودفع القسط الشهري الأول.', arabicPronunciation: 'سولو سو دوكومينتو دي إيدينتيداد إي باجار لا بريميرا مينسواليداد.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Muy bien, aquí tiene todo.', arabicTranslation: 'جيد جداً، تفضل بكل شيء.', arabicPronunciation: 'موي بيين، أكي تييني تودو.' }
    ],
    quiz: [
        {
            question: "¿Qué busca el cliente en el gimnasio?",
            options: ["Clases de yoga", "Un plan de entrenamiento", "Inscribirse"],
            correctAnswer: "Inscribirse"
        },
        {
            question: "¿Cuánto dura el plan del cliente?",
            options: ["Mensual", "Anual", "Semanal"],
            correctAnswer: "Mensual"
        }
    ]
};
