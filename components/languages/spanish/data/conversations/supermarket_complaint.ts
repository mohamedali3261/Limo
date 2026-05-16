import { ConversationScenario } from './types';

export const supermarket_complaint: ConversationScenario = {
    id: 'supermarket_complaint',
    arabicTitle: 'شكوى في السوبر ماركت',
    description: 'إرجاع منتج تالف في السوبر ماركت',
    lines: [
      { speaker: 'A', speakerNameEs: 'Gerente', speakerNameAr: 'المدير', spanish: 'Buenos días, ¿en qué puedo ayudarle hoy?', arabicTranslation: 'صباح الخير، كيف يمكنني مساعدتك اليوم؟', arabicPronunciation: 'بوينوس دياس، إن كي بويدو أيودارلي أوي؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Hola, compré esta leche ayer y está caducada.', arabicTranslation: 'مرحباً، اشتريت هذا الحليب بالأمس وهو منتهي الصلاحية.', arabicPronunciation: 'أولا، كومبري إيستا ليتشي أيير إي إيستا كادوكادا.' },
      { speaker: 'A', speakerNameEs: 'Gerente', speakerNameAr: 'المدير', spanish: 'Oh, lo siento mucho. Permítame revisar la fecha.', arabicTranslation: 'أوه، آسف جداً. اسمح لي بمراجعة التاريخ.', arabicPronunciation: 'أو، لو سيينتو موتشو. بيرميتيمي ريبيسار لا فيتشا.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Claro, aquí puede ver que expiró hace dos días.', arabicTranslation: 'طبعاً، هنا يمكنك أن ترى أنها انتهت قبل يومين.', arabicPronunciation: 'كلارو، أكي بويدي بير كي إكسبيرو أثي دوس دياس.' },
      { speaker: 'A', speakerNameEs: 'Gerente', speakerNameAr: 'المدير', spanish: 'Tiene razón, es un error de nuestro inventario.', arabicTranslation: 'أنت محق، هذا خطأ من مخزوننا.', arabicPronunciation: 'تييني راثون، إس أون إيرور دي نويسترو إينفينتاريو.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Quisiera un cambio o la devolución de mi dinero.', arabicTranslation: 'أود استبدالها أو استرداد نقودي.', arabicPronunciation: 'كييسيرا أون كامبيو أو لا ديبولوبيون دي مي دينيرو.' },
      { speaker: 'A', speakerNameEs: 'Gerente', speakerNameAr: 'المدير', spanish: 'Por supuesto. ¿Prefiere llevarse otra botella nueva?', arabicTranslation: 'بالطبع. هل تفضل أخذ زجاجة أخرى جديدة؟', arabicPronunciation: 'بور سوبويستو. بريفييريي ييبارسي أوترا بوتيا نويبا؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'No, prefiero el reembolso, por favor.', arabicTranslation: 'لا، أفضل استرداد المبلغ من فضلك.', arabicPronunciation: 'نو، بريفييرو إل رييمبولسون، بور فابور.' },
      { speaker: 'A', speakerNameEs: 'Gerente', speakerNameAr: 'المدير', spanish: 'Como desee. ¿Tiene el recibo de la compra?', arabicTranslation: 'كما تشاء. هل لديك إيصال الشراء؟', arabicPronunciation: 'كومو ديسي. تييني إل ريثيبو دي لا كومبرا؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Sí, aquí le entrego el recibo.', arabicTranslation: 'نعم، ها هو الإيصال.', arabicPronunciation: 'سي، أكي لي إنتريجو إل ريثيبو.' },
      { speaker: 'A', speakerNameEs: 'Gerente', speakerNameAr: 'المدير', spanish: 'Gracias. Aquí tiene su dinero. Disculpe las molestias.', arabicTranslation: 'شكراً. تفضل نقودك. اعتذر عن الإزعاج.', arabicPronunciation: 'جراثياس. أكي تييني سو دينيرو. ديسكولبي لاس مولستياس.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Gracias por su atención, hasta luego.', arabicTranslation: 'شكراً على اهتمامك، إلى اللقاء.', arabicPronunciation: 'جراثياس بور سو أتينثيون، أستا لويجو.' }
    ],
    quiz: [
        { type: 'multiple_choice', spanish: '¿Por qué el cliente se queja?', arabic: 'لماذا يشتكي الزبون؟', options: [ { text: 'Producto caducado', correct: true }, { text: 'Precio alto', correct: false }, { text: 'Producto roto', correct: false } ] },
        { type: 'multiple_choice', spanish: '¿Qué quiere el cliente?', arabic: 'ماذا يريد الزبون؟', options: [ { text: 'Cambio', correct: false }, { text: 'Reembolso', correct: true }, { text: 'Descuento', correct: false } ] },
        { type: 'true_false', spanish: 'El cliente tiene el recibo.', arabic: 'الزبون لديه الإيصال.', isTrue: true, correctArabic: 'نعم' },
        { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'La leche está caducada', arabic: 'الحليب منتهي الصلاحية' }, { spanish: 'Quisiera un cambio o la devolución', arabic: 'أود استبدالها أو استرداد نقودي' }, { spanish: 'Tiene el recibo de la compra', arabic: 'هل لديك إيصال الشراء' } ] },
        { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Es un error de nuestro inventario', arabic: 'هذا خطأ من مخزوننا' }, { spanish: 'Prefiero el reembolso', arabic: 'أفضل استرداد المبلغ' }, { spanish: 'Disculpe las molestias', arabic: 'اعتذر عن الإزعاج' } ] },
        { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'Compré esta leche _____ y está caducada.', answer: 'ayer', fillBlankOptions: [ 'ayer', 'hoy', 'mañana', 'hace dos días' ] }
    ]
};
