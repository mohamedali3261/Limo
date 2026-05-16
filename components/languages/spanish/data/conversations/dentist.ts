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
      { type: 'multiple_choice', spanish: '¿Qué necesita el paciente?', arabic: 'ماذا يحتاج المريض؟', options: [ { text: 'Una extracción', correct: false }, { text: 'Una limpieza', correct: true }, { text: 'Un empaste', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Cuánto dura la limpieza?', arabic: 'كم تستغرق التنظيف؟', options: [ { text: '30 minutos', correct: false }, { text: '45 minutos', correct: true }, { text: '60 minutos', correct: false } ] },
      { type: 'true_false', spanish: 'Es necesario llevar radiografías previas.', arabic: 'من الضروري إحضار صور أشعة سابقة.', isTrue: false, correctArabic: 'لا، إذا كان مجرد تنظيف' },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Clínica Dental Sonrisa', arabic: 'عيادة ابتسامة للأسنان' }, { spanish: 'Aproximadamente cuarenta y cinco minutos', arabic: 'حوالي خمس وأربعين دقيقة' }, { spanish: 'Cincuenta euros por la limpieza básica', arabic: 'خمسون يورو للتنظيف الأساسي' } ] },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Quisiera hacer una cita para una limpieza', arabic: 'أود حجز موعد للتنظيف' }, { spanish: 'Tengo espacio a las diez de la mañana', arabic: 'لدي مساحة في العاشرة صباحاً' }, { spanish: 'Nos vemos el miércoles', arabic: 'نراك يوم الأربعاء' } ] },
      { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'Quisiera hacer una _____ para una limpieza.', answer: 'cita', fillBlankOptions: [ 'cita', 'llamada', 'reserva', 'consulta' ] }
    ]
};
