import { ConversationScenario } from './types';

export const hotel: ConversationScenario = {
    id: 'hotel_detailed',
    arabicTitle: 'في الفندق (مفصلة)',
    description: 'مشكلة في الحجز وتغيير الغرفة',
    lines: [
      { speaker: 'A', speakerNameEs: 'Recepcionista', speakerNameAr: 'مُوظّف', spanish: 'Bienvenido al Hotel Sol. ¿En qué le puedo ayudar?', arabicTranslation: 'مرحباً في فندق شمس. كيف يمكنني مساعدتك؟', arabicPronunciation: 'بيينبينيدو آل أوتيل سول. إن كي لي بويدو أيودار؟' },
      { speaker: 'B', speakerNameEs: 'Huésped', speakerNameAr: 'النزيل', spanish: 'Tengo una reserva a nombre de Ali. Por cinco noches.', arabicTranslation: 'لدي حجز باسم علي. لخمس ليالٍ.', arabicPronunciation: 'تينجو أونا ريسيربا أ نومبري دي علي. بور ثينكو نوتشيس.' },
      { speaker: 'A', speakerNameEs: 'Recepcionista', speakerNameAr: 'مُوظّف', spanish: 'Señor Ali... Aquí está. Una habitación individual con vistas a la calle.', arabicTranslation: 'السيد علي... هاهو. غرفة مفردة تطل على الشارع.', arabicPronunciation: 'سينيور علي... أكي إستا. أونا أبيتاثيون إنديبيدوال كون بيستاس أ لا كايي.' },
      { speaker: 'B', speakerNameEs: 'Huésped', speakerNameAr: 'النزيل', spanish: 'Lo siento, pero yo reservé una habitación doble con vista al mar.', arabicTranslation: 'آسف، ولكنني حجزت غرفة مزدوجة تطل على البحر.', arabicPronunciation: 'لو سيينتو، بيرو يو ريسيربي أونا أبيتاثيون دوبلي كون بيستا آل مار.' },
      { speaker: 'A', speakerNameEs: 'Recepcionista', speakerNameAr: 'مُوظّف', spanish: 'Tiene usted razón, hubo un error en el sistema. Le daré una suite sin costo extra.', arabicTranslation: 'أنت محق، كان هناك خطأ في النظام. سأعطيك جناحاً بدون أي تكلفة إضافية.', arabicPronunciation: 'تييني أوستيد راثون، أوبو أون إيرور إن إل سيستيما. لي داري أونا سويت سين كوستو إكسترا.' },
      { speaker: 'B', speakerNameEs: 'Huésped', speakerNameAr: 'النزيل', spanish: '¡Qué amable! Muchas gracias. ¿En qué piso está?', arabicTranslation: 'كم أنت لطيف! شكراً جزيلاً. في أي طابق هي؟', arabicPronunciation: 'كي أمابلي! موتشاس جراثياس. إن كي بيسو إستا؟' },
      { speaker: 'A', speakerNameEs: 'Recepcionista', speakerNameAr: 'مُوظّف', spanish: 'En el séptimo piso. Aquí tiene su tarjeta.', arabicTranslation: 'في الطابق السابع. تفضل بطاقتك.', arabicPronunciation: 'إن إل سيبتيمو بيسو. أكي تييني سو تارخيتا.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Qué problema hubo?', arabic: 'ما هي المشكلة التي حدثت؟', options: [ { text: 'La habitación era individual, no doble', correct: true }, { text: 'No encontraron la reserva', correct: false }, { text: 'El precio era muy alto', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Cuántas noches reservó Ali?', arabic: 'كم ليلة حجز علي؟', options: [ { text: 'Tres noches', correct: false }, { text: 'Cinco noches', correct: true }, { text: 'Siete noches', correct: false } ] },
      { type: 'true_false', spanish: 'El cliente pagará un costo extra.', arabic: 'سيدفع الزبون تكلفة إضافية.', isTrue: false, correctArabic: 'بدون تكلفة إضافية' },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Tengo una reserva a nombre de Ali', arabic: 'لدي حجز باسم علي' }, { spanish: 'Yo reservé una habitación doble', arabic: 'حجزت غرفة مزدوجة' }, { spanish: 'Le daré una suite sin costo extra', arabic: 'سأعطيك جناحاً بدون تكلفة إضافية' } ] },
      { type: 'match', spanish: 'Empareja las frases', arabic: 'توصيل الجمل', matchPairs: [ { spanish: 'Una habitación individual con vistas a la calle', arabic: 'غرفة مفردة تطل على الشارع' }, { spanish: 'Una habitación doble con vista al mar', arabic: 'غرفة مزدوجة تطل على البحر' }, { spanish: 'En el séptimo piso', arabic: 'في الطابق السابع' } ] },
      { type: 'fill_blank', spanish: 'أكمل الجملة', arabic: 'أكمل الجملة', sentence: 'En el _____ piso está la suite.', answer: 'séptimo', fillBlankOptions: [ 'séptimo', 'quinto', 'décimo', 'octavo' ] }
    ]
};
