import { ConversationScenario } from './types';

export const travel_agency: ConversationScenario = {
    id: 'travel_agency_booking',
    arabicTitle: 'وكالة السفر',
    description: 'خطط لرحلة فاخرة إلى جزيرة بالي',
    lines: [
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'موظف السفر', spanish: 'Bienvenido a Viajes Fantásticos. ¿Qué destino sueña visitar?', arabicTranslation: 'مرحباً في رحلات خيالية. ما الوجهة التي تحلم بزيارتها؟', arabicPronunciation: 'بيينبينيدو أ بياخيس فانتاستيكوس. كي ديستينو سوينيا بيسيتار؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Quiero visitar Bali para una luna de miel inolvidable.', arabicTranslation: 'أريد زيارة بالي لشهر عسل لا يُنسى.', arabicPronunciation: 'كييرو بيسيتار بالي بارا أونا لونا دي مييل إينولبيدابل.' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'موظف السفر', spanish: '¡Bali es perfecto! ¿Qué fechas tiene en mente?', arabicTranslation: 'بالي مثالية! ما التواريخ التي تفكر فيها؟', arabicPronunciation: 'بالي إس بيرفيكتو! كي فيتشاس تييني إن مينتي؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Pensamos en ir en septiembre por dos semanas.', arabicTranslation: 'نفكر في الذهاب في سبتمبر لمدة أسبوعين.', arabicPronunciation: 'بينساموس إن إير إن سيبتيمبري بور دوس سيميناس.' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'موظف السفر', spanish: 'Es una época fantástica para el clima. ¿Busca hoteles de lujo?', arabicTranslation: 'إنه وقت رائع للطقس. هل تبحث عن فنادق فاخرة؟', arabicPronunciation: 'إس أونا إيبوكا فانتاستيكا بارا إل كليما. بوسكا أوتيليس دي لوخو؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Sí, preferimos villas privadas cerca de la playa.', arabicTranslation: 'نعم، نفضل فيلاً خاصة بالقرب من الشاطئ.', arabicPronunciation: 'سي، بريفيريموس بيياس بريباداس ثيركا دي لا بلايا.' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'موظف السفر', spanish: 'Tengo unas opciones increíbles con vista al océano.', arabicTranslation: 'لدي خيارات مذهلة تطل على المحيط.', arabicPronunciation: 'تينجو أوناس أوثيونيس إينكرييبيليس كون بيستا آل أوثيانو.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: '¿Qué actividades incluyen los paquetes turísticos?', arabicTranslation: 'ما هي الأنشطة التي تشملها باقات السياحة؟', arabicPronunciation: 'كي أكتيبيداديس إينكلويين لوس باكيتيس توريستيكوس؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'موظف السفر', spanish: 'Incluyen visitas a templos, buceo y cenas privadas.', arabicTranslation: 'تشمل زيارات للمعابد، الغطس، وعشاء خاص.', arabicPronunciation: 'إينكلويين بيسيتاس أ تيمبلوس، بوثيو إي ثيناس بريباداس.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Suena maravilloso. ¿Cuál es el presupuesto estimado?', arabicTranslation: 'يبدو رائعاً. ما هي الميزانية التقديرية؟', arabicPronunciation: 'سوينا مارابييوسو. كوال إس إل بريسوبيويستو إيستيمادو؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'موظف السفر', spanish: 'Para dos personas, serían unos tres mil euros en total.', arabicTranslation: 'لشخصين، سيكون حوالي ثلاثة آلاف يورو إجمالاً.', arabicPronunciation: 'بارا دوس بيرسوناس، سيريان أونوس تريس ميل إيوروس إن توتال.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Me parece correcto. Comencemos con la reserva.', arabicTranslation: 'يبدو مناسباً لي. لنبدأ بالحجز.', arabicPronunciation: 'مي باريثي كوريكتو. كومينثيموس كون لا ريسيربا.' }
    ],
    quiz: [
        { type: 'multiple_choice', spanish: '¿A dónde quiere ir el cliente?', arabic: 'إلى أين يريد الزبون أن يذهب؟', options: [ { text: 'Bali', correct: true }, { text: 'Tailandia', correct: false }, { text: 'Hawái', correct: false } ] },
        { type: 'multiple_choice', spanish: '¿Qué tipo de alojamiento prefiere?', arabic: 'ما نوع الإقامة التي يفضلها؟', options: [ { text: 'Hotel de lujo', correct: false }, { text: 'Villas privadas', correct: true }, { text: 'Resort todo incluido', correct: false } ] },
        { type: 'true_false', spanish: 'El viaje es para una semana.', arabic: 'الرحلة لمدة أسبوع.', isTrue: false, correctArabic: 'أسبوعان' },
        { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Quiero visitar Bali para una luna de miel', arabic: 'أريد زيارة بالي لشهر عسل' }, { spanish: 'Pensamos en ir en septiembre', arabic: 'نفكر في الذهاب في سبتمبر' }, { spanish: 'Villas privadas cerca de la playa', arabic: 'فيلاً خاصة بالقرب من الشاطئ' } ] },
        { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Es una época fantástica para el clima', arabic: 'إنه وقت رائع للطقس' }, { spanish: 'Incluyen visitas a templos, buceo y cenas privadas', arabic: 'تشمل زيارات للمعابد، الغطس، وعشاء خاص' }, { spanish: 'Serían unos tres mil euros en total', arabic: 'سيكون حوالي ثلاثة آلاف يورو إجمالاً' } ] },
        { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'Serían unos _____ mil euros en total.', answer: 'tres', fillBlankOptions: [ 'tres', 'dos', 'cuatro', 'cinco' ] }
    ]
};
