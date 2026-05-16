import { ConversationScenario } from './types';

export const dentist: ConversationScenario = {
    id: 'dentist_appointment',
    arabicTitle: 'عند طبيب الأسنان',
    description: 'حجز موعد وتنظيف الأسنان',
    lines: [
      { speaker: 'A', speakerNameEs: 'Secretaria', speakerNameAr: 'السكرتيرة', spanish: 'Clínica Dental Sonrisa. ¿En qué le puedo ayudar?', arabicTranslation: 'عيادة ابتسامة للأسنان. كيف يمكنني مساعدتك؟', arabicPronunciation: 'كلينيكا دينتال سونريسا. إن كي لي بويدو أيودار؟' },
      { speaker: 'B', speakerNameEs: 'Paciente', speakerNameAr: 'المريض', spanish: 'Hola, quisiera hacer una cita para una limpieza.', arabicTranslation: 'مرحباً، أود حجز موعد للتنظيف.', arabicPronunciation: 'أولا، كييسيرا أثير أونا ثيتا بارا أونا ليمبييثا.' },
      { speaker: 'A', speakerNameEs: 'Secretaria', speakerNameAr: 'السكرتيرة', spanish: 'Claro, ¿qué día prefiere?', arabicTranslation: 'بالطبع، أي يوم تفضل؟', arabicPronunciation: 'كلارو، كي ديا بريفيير؟' },
      { speaker: 'B', speakerNameEs: 'Paciente', speakerNameAr: 'المريض', spanish: '¿Tienen algo disponible para el miércoles?', arabicTranslation: 'هل يوجد شيء متاح ليوم الأربعاء؟', arabicPronunciation: 'تيينين ألجو ديسبونيبيلي بارا إل مييركوليس؟' },
      { speaker: 'A', speakerNameEs: 'Secretaria', speakerNameAr: 'السكرتيرة', spanish: 'Déjeme revisar... Sí, tengo espacio a las diez de la mañana.', arabicTranslation: 'دعني أراجع... نعم، لدي مساحة في العاشرة صباحاً.', arabicPronunciation: 'ديخيمي ريبيسار... سي، تينجو إسباثيو أ لاس دييث دي لا مانيانا.' },
      { speaker: 'B', speakerNameEs: 'Paciente', speakerNameAr: 'المريض', spanish: 'Perfecto, me queda bien. ¿Cuánto dura la sesión?', arabicTranslation: 'ممتاز، يناسبني. كم تستغرق الجلسة؟', arabicPronunciation: 'بيرفيكتو، مي كيدا بيين. كوانتو دورا لا سيسيون؟' },
      { speaker: 'A', speakerNameEs: 'Secretaria', speakerNameAr: 'السكرتيرة', spanish: 'Aproximadamente cuarenta y cinco minutos.', arabicTranslation: 'حوالي خمس وأربعين دقيقة.', arabicPronunciation: 'أبروكثيمادامينتي كوارينتا إي ثينكو مينتوس.' },
      { speaker: 'B', speakerNameEs: 'Paciente', speakerNameAr: 'المريض', spanish: '¿Es necesario llevar alguna radiografía previa?', arabicTranslation: 'هل من الضروري إحضار أي صور أشعة سابقة؟', arabicPronunciation: 'إس نيثيساريو ييبار ألجونا راديوجرافيا بريبيا؟' },
      { speaker: 'A', speakerNameEs: 'Secretaria', speakerNameAr: 'السكرتيرة', spanish: 'No, si es solo una limpieza, no hace falta.', arabicTranslation: 'لا، إذا كان مجرد تنظيف، فلا داعي لذلك.', arabicPronunciation: 'نو، سي إس سولو أونا ليمبييثا، نو أثي فالتا.' },
      { speaker: 'B', speakerNameEs: 'Paciente', speakerNameAr: 'المريض', spanish: 'Muchas gracias. Por cierto, ¿cuánto cuesta?', arabicTranslation: 'شكراً جزيلاً. بالمناسبة، كم تكلف؟', arabicPronunciation: 'موتشاس جراثياس. بور ثييرتو، كوانتو كويستا؟' },
      { speaker: 'A', speakerNameEs: 'Secretaria', speakerNameAr: 'السكرتيرة', spanish: 'Cincuenta euros por la limpieza básica.', arabicTranslation: 'خمسون يورو للتنظيف الأساسي.', arabicPronunciation: 'ثينكوينتا إيوروس بور لا ليمبييثا باسيكا.' },
      { speaker: 'B', speakerNameEs: 'Paciente', speakerNameAr: 'المريض', spanish: 'De acuerdo, nos vemos el miércoles.', arabicTranslation: 'اتفقنا، نراك يوم الأربعاء.', arabicPronunciation: 'دي أكويردو، نوس بييموس إل مييركوليس.' }
    ],
    quiz: [
        {
            question: "¿Qué necesita el paciente?",
            options: ["Una extracción", "Una limpieza", "Un empaste"],
            correctAnswer: "Una limpieza"
        },
        {
            question: "¿Cuánto dura la limpieza?",
            options: ["30 minutos", "45 minutos", "60 minutos"],
            correctAnswer: "45 minutos"
        }
    ]
};
