import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newConversations = `import { LessonDetail } from './types';

export interface ConversationLine {
  speaker: 'A' | 'B';
  speakerNameEs: string;
  speakerNameAr: string;
  spanish: string;
  arabicTranslation: string;
  arabicPronunciation: string;
}

export interface ConversationScenario {
  id: string;
  arabicTitle: string;
  description: string;
  lines: ConversationLine[];
  quiz?: LessonDetail[];
}

export const conversations: ConversationScenario[] = [
  {
    id: 'greeting',
    arabicTitle: 'التعارف (محسن)',
    description: 'التعرف على شخص جديد وتفاصيل أكثر',
    lines: [
      { speaker: 'A', speakerNameEs: 'Juan', speakerNameAr: 'خوان', spanish: '¡Hola! Buenos días. ¿Cómo te llamas?', arabicTranslation: 'مرحباً! صباح الخير. ما اسمك؟', arabicPronunciation: 'أولا! بوينوس دياس. كومو تي ياماس؟' },
      { speaker: 'B', speakerNameEs: 'María', speakerNameAr: 'ماريا', spanish: 'Hola. Me llamo María. ¿Y tú?', arabicTranslation: 'مرحباً. اسمي ماريا. وأنت؟', arabicPronunciation: 'أولا. مي يامو ماريا. إي تو؟' },
      { speaker: 'A', speakerNameEs: 'Juan', speakerNameAr: 'خوان', spanish: 'Me llamo Juan. Mucho gusto, María. ¿De dónde eres?', arabicTranslation: 'اسمي خوان. تشرفنا يا ماريا. من أين أنت؟', arabicPronunciation: 'مي يامو خوان. موتشو جوستو، ماريا. دي دوندي إيريس؟' },
      { speaker: 'B', speakerNameEs: 'María', speakerNameAr: 'ماريا', spanish: 'Soy de México, de la capital. ¿Y tú, eres de España?', arabicTranslation: 'أنا من المكسيك، من العاصمة. وأنت، هل أنت من إسبانيا؟', arabicPronunciation: 'سوي دي ميخيكو، دي لا كابيتال. إي تو، إيريس دي إسبانيا؟' },
      { speaker: 'A', speakerNameEs: 'Juan', speakerNameAr: 'خوان', spanish: 'Sí, soy de Madrid. ¿Cuántos años tienes?', arabicTranslation: 'نعم، أنا من مدريد. كم عمرك؟', arabicPronunciation: 'سي، سوي دي مادريد. كوانتوس أنيوس تيينيس؟' },
      { speaker: 'B', speakerNameEs: 'María', speakerNameAr: 'ماريا', spanish: 'Tengo veinticinco años. ¿A qué te dedicas?', arabicTranslation: 'عمري خمسة وعشرون عاماً. ماذا تعمل؟', arabicPronunciation: 'تينجو بينتيثينكو أنيوس. أ كي تي ديديكاس؟' },
      { speaker: 'A', speakerNameEs: 'Juan', speakerNameAr: 'خوان', spanish: 'Soy estudiante de medicina. ¿Y tú?', arabicTranslation: 'أنا طالب طب. وأنتِ؟', arabicPronunciation: 'سوي إستوديانتى دي ميديِثينا. إي تو؟' },
      { speaker: 'B', speakerNameEs: 'María', speakerNameAr: 'ماريا', spanish: 'Yo trabajo como profesora de español. Es un placer conocerte.', arabicTranslation: 'أنا أعمل كمعلمة للغة الإسبانية. سررت بمعرفتك.', arabicPronunciation: 'يو تراباخو كومو بروفيسورا دي إسبانيول. إس أون بلاسير كونوثيرتي.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿De dónde es María?', arabic: 'من أين ماريا؟', options: [ { text: 'إسبانيا', correct: false }, { text: 'العاصمة المكسيكية', correct: true }, { text: 'مدريد', correct: false } ] },
      { type: 'listening', spanish: 'Soy estudiante de medicina', arabic: 'أنا طالب طب', options: [ { text: 'أنا طالب طب', correct: true }, { text: 'أنا معلم اسباني', correct: false }, { text: 'عمري ٢٥ عام', correct: false } ] },
      { type: 'true_false', spanish: 'Juan es profesor.', arabic: 'خوان هو المعلم', isTrue: false, correctArabic: 'طالب طب' }
    ]
  },
  {
    id: 'market',
    arabicTitle: 'في السوق (طويلة)',
    description: 'شراء العديد من المنتجات والمساومة قليلاً',
    lines: [
      { speaker: 'A', speakerNameEs: 'Vendedor', speakerNameAr: 'البائع', spanish: '¡Buenos días! Pase, pase. Tenemos las mejores frutas hoy. ¿Qué le pongo?', arabicTranslation: 'صباح الخير! تفضل، تفضل. لدينا أفضل الفواكه اليوم. ماذا أضع لك؟', arabicPronunciation: 'بوينوس دياس! باسي، باسي. تينيموس لاس ميخوريس فروتاس أوي. كي لي بونجو؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Buenos días. Quería saber a cuánto están los tomates.', arabicTranslation: 'صباح الخير. كنت أريد أن أعرف بكم الطماطم.', arabicPronunciation: 'بوينوس دياس. كيريا سابير أ كوانتو إستان لوس توماتيس.' },
      { speaker: 'A', speakerNameEs: 'Vendedor', speakerNameAr: 'البائع', spanish: 'A dos euros el kilo. Muy baratos y muy dulces.', arabicTranslation: 'بيوروين للكيلو. رخيصة جداً وحلوة جداً.', arabicPronunciation: 'أ دوس إيوروس إل كيلو. موي باراتوس إي موي دولثيس.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Deme un kilo y medio, por favor. Y también plátanos.', arabicTranslation: 'أعطني كيلو ونصف من فضلك. وأيضاً موز.', arabicPronunciation: 'ديمي أون كيلو إي ميديو، بور فابور. إي تامبيين بلاتانوس.' },
      { speaker: 'A', speakerNameEs: 'Vendedor', speakerNameAr: 'البائع', spanish: 'Plátanos de Canarias, por supuesto. ¿Algo más? Miel fresca, ajos...', arabicTranslation: 'موز من جزر الكناري بالطبع. هل تريد شيئاً آخر؟ عسل طازج، ثوم...', arabicPronunciation: 'بلاتانوس دي كانارياس، بور سوبويستو. ألجو ماس؟ مييل فريسكا، أوس...' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Eso es todo. ¿Cuánto es en total?', arabicTranslation: 'هذا كل شيء. كم المجموع؟', arabicPronunciation: 'إيسو إس تودو. كوانتو إس إن توتال؟' },
      { speaker: 'A', speakerNameEs: 'Vendedor', speakerNameAr: 'البائع', spanish: 'Son 4 euros con 50 céntimos. Gracias y que tenga un buen día.', arabicTranslation: 'أربعة يورو وخمسين سنتاً. شكراً لك ويوم سعيد.', arabicPronunciation: 'سون كواترو إيوروس كون ثينكوينتا ثينتيموس. جراثياس إي كي تينجا أون بوين ديا.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Cuánto cuesta un kilo de tomates?', arabic: 'كم سعر كيلو الطماطم؟', options: [ { text: '١ يورو', correct: false }, { text: '٤.٥ يورو', correct: false }, { text: '٢ يورو', correct: true } ] },
      { type: 'arrange', spanish: 'Deme un kilo y medio', arabic: 'أعطني كيلو ونصف', arrangeWords: ['Deme', 'un', 'kilo', 'medio', 'y', 'por'] },
      { type: 'true_false', spanish: 'El cliente compró miel.', arabic: 'الزبون اشترى عسلاً.', isTrue: false, correctArabic: 'هذا كل شيء (لم يشترِ العسل)' }
    ]
  },
  {
    id: 'doctor_detailed',
    arabicTitle: 'عند الطبيب (مفصلة)',
    description: 'شرح الأعراض بالتفصيل وتلقي الوصفة',
    lines: [
      { speaker: 'A', speakerNameEs: 'Doctor', speakerNameAr: 'الطبيب', spanish: 'Adelante, siéntese. ¿Qué le ocurre?', arabicTranslation: 'تفضل بالدخول، اجلس. ماذا حدث لك؟', arabicPronunciation: 'أديلانتى، سيينتيسى. كي لي أوكوري؟' },
      { speaker: 'B', speakerNameEs: 'Paciente', speakerNameAr: 'المريض', spanish: 'Llevo tres días con un dolor de garganta fuerte y mucha tos.', arabicTranslation: 'أعاني منذ ثلاثة أيام من ألم قوي في الحلق وسعال شديد.', arabicPronunciation: 'ييبو تريس دياس كون أون دولور دي جارجانتا فويرتى إي موتشا توس.' },
      { speaker: 'A', speakerNameEs: 'Doctor', speakerNameAr: 'الطبيب', spanish: 'Vamos a ver. Abra la boca y diga "ah".', arabicTranslation: 'دعنا نرى. افتح فمك وقل "آه".', arabicPronunciation: 'باموس أ بير. أبرا لا بوكا إي ديجا "آه".' },
      { speaker: 'B', speakerNameEs: 'Paciente', speakerNameAr: 'المريض', spanish: '¡Ah! ¿Es grave, doctor?', arabicTranslation: 'آه! هل هو خطير يا دكتور؟', arabicPronunciation: 'آه! إس جرابى، دكتور؟' },
      { speaker: 'A', speakerNameEs: 'Doctor', speakerNameAr: 'الطبيب', spanish: 'No, es una simple infección. Le recetaré este jarabe y unas pastillas para la fiebre.', arabicTranslation: 'لا، إنها مجرد عدوى بسيطة. سأصف لك هذا الشراب وحبوباً من أجل الحمى.', arabicPronunciation: 'نو، إس أونا سيمبلى إنفيكثيون. لي ريثيتاري إشتى خارابى إي أوناس باستياس بارا لا فييبري.' },
      { speaker: 'B', speakerNameEs: 'Paciente', speakerNameAr: 'المريض', spanish: '¿Cuántas veces al día?', arabicTranslation: 'كم مرة في اليوم؟', arabicPronunciation: 'كوانتاس بيثيس آل ديا؟' },
      { speaker: 'A', speakerNameEs: 'Doctor', speakerNameAr: 'الطبيب', spanish: 'El jarabe tres veces y la pastilla sólo si tiene dolor. Beba mucha agua.', arabicTranslation: 'الشراب ثلاث مرات والحبة فقط إذا كان هناك ألم. اشرب الكثير من الماء.', arabicPronunciation: 'إل خارابى تريس بيثيس إي لا باستيا سولو سي تييني دولور. بيبا موتشا أجوا.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Qué tiene el paciente?', arabic: 'ماذا يعاني المريض؟', options: [ { text: 'ألم في الرأس', correct: false }, { text: 'ألم في الحلق وسعال', correct: true }, { text: 'ألم في المعدة', correct: false } ] },
      { type: 'listening', spanish: 'Beba mucha agua', arabic: 'اشرب الكثير من الماء', options: [ { text: 'اشرب الكثير من الماء', correct: true }, { text: 'كل كثيرا', correct: false }, { text: 'افتح فمك', correct: false } ] },
      { type: 'true_false', spanish: 'El doctor receta un jarabe y pastillas.', arabic: 'الطبيب يصف شراب وحبوب.', isTrue: true }
    ]
  },
  {
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
      { type: 'multiple_choice', spanish: '¿Qué problema hubo?', arabic: 'ما المشكلة التي حصلت؟', options: [ { text: 'الغرفة كانت مفردة وليست مزدوجة', correct: true }, { text: 'لم يجد الحجز إطلاقا', correct: false }, { text: 'السعر كان مرتفعا', correct: false } ] },
      { type: 'arrange', spanish: 'En el séptimo piso', arabic: 'في الطابق السابع', arrangeWords: ['séptimo', 'el', 'piso', 'En'] },
      { type: 'true_false', spanish: 'El cliente pagará un costo extra.', arabic: 'سيدفع الزبون تكلفة إضافية.', isTrue: false, correctArabic: 'بدون تكلفة إضافية' }
    ]
  },
  {
    id: 'airport_long',
    arabicTitle: 'في المطار (طويلة)',
    description: 'تأخير رحلة ووزن الأمتعة',
    lines: [
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الموظف', spanish: 'Por favor, ponga su maleta en la báscula.', arabicTranslation: 'من فضلك، ضع حقيبتك على الميزان.', arabicPronunciation: 'بور فابور، بونجا سو ماليتا إن لا باسكولا.' },
      { speaker: 'B', speakerNameEs: 'Pasajero', speakerNameAr: 'المسافر', spanish: 'De acuerdo. ¿Pesa más de veinte kilos?', arabicTranslation: 'حسناً. هل تزن أكثر من عشرين كيلوغراماً؟', arabicPronunciation: 'دي أكويردو. بيسا ماس دي بينتي كيلوس؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الموظف', spanish: 'Pesa veintidós. Tiene sobrepeso. Tendrá que pagar una multa.', arabicTranslation: 'تزن ثنين وعشرين. فيها وزن زائد. سيكون عليك دفع غرامة.', arabicPronunciation: 'بيسا بينتيدوس. تييني سوبريبيسو. تيندرا كي باجار أونا مولتا.' },
      { speaker: 'B', speakerNameEs: 'Pasajero', speakerNameAr: 'المسافر', spanish: 'Oh no. ¿Puedo sacar algo de ropa y ponerla en la mochila?', arabicTranslation: 'أوه لا. هل يمكنني إخراج بعض الملابس ووضعها في حقيبة الظهر؟', arabicPronunciation: 'أو نو. بويدو ساكار ألجو دي روبا إي بونيرلا إن لا موتتشيلا؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الموظف', spanish: 'Claro que sí. Hágalo aquí en un lado, por favor.', arabicTranslation: 'بالطبع. افعل ذلك هنا على جانب، من فضلك.', arabicPronunciation: 'كلارو كي سي. أجالو أكي إن أون لادو، بور فابور.' },
      { speaker: 'B', speakerNameEs: 'Pasajero', speakerNameAr: 'المسافر', spanish: 'Ya está. Por cierto, ¿El vuelo sale a la hora programada?', arabicTranslation: 'جاهز. بالمناسبة، هل الرحلة تقلع في الموعد المحدد؟', arabicPronunciation: 'يا إستا. بور ثييرتو، إل بويَلو سالي أ لا أورا بروجرامادا؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الموظف', spanish: 'Lleva un retraso de media hora. Puede esperar en la sala VIP si desea.', arabicTranslation: 'هناك تأخير لمدة نصف ساعة. يمكنك الانتظار في صالة كبار الشخصيات إذا أردت.', arabicPronunciation: 'ييبا أون ريتراسو دي ميديا أورا. بويدي إسبرار إن لا سالا في آي بي سي ديسيا.' }
    ],
    quiz: [
      { type: 'multiple_choice', spanish: '¿Cuánto pesa la maleta primero?', arabic: 'كم وزن الحقيبة أولا؟', options: [ { text: '٢٢ كيلو', correct: true }, { text: '٢٠ كيلو', correct: false }, { text: '١٨ كيلو', correct: false } ] },
      { type: 'arabic_to_spanish', spanish: 'Un retraso de media hora', arabic: 'تأخير نصف ساعة', options: [ { text: 'Un retraso de media hora', correct: true }, { text: 'Sale a la hora', correct: false }, { text: 'La maleta en la báscula', correct: false } ] },
      { type: 'true_false', spanish: 'El vuelo sale temprano.', arabic: 'تقلع الرحلة باكرا.', isTrue: false, correctArabic: 'هناك تأخير' }
    ]
  },
  {
    id: 'renting_apartment',
    arabicTitle: 'في مكتب تأجير الشقق',
    description: 'الاستفسار عن شقة للإيجار',
    lines: [
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الوكيل', spanish: 'Buenos días. ¿Busca usted alquilar o comprar?', arabicTranslation: 'صباح الخير. هل تبحث عن الإيجار أم الشراء؟', arabicPronunciation: 'بوينوس دياس. بوسكا أوستيد ألكيلار أو كومبرار؟' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Quiero alquilar un apartamento cerca de la universidad.', arabicTranslation: 'أريد استئجار شقة قرب الجامعة.', arabicPronunciation: 'كييرو ألكيلار أون أبارتامينتو ثيركا دي لا أونيبرسيداد.' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الوكيل', spanish: 'Tengo uno perfecto de dos habitaciones. Está amueblado.', arabicTranslation: 'لدي واحدة مثالية بغرفتي نوم. إنها مفروشة.', arabicPronunciation: 'تينجو أونو بيرفيكتو دي دوس أبيتاثيونيس. إستا أمويبلادو.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: '¿Cuánto es el alquiler mensual?', arabicTranslation: 'كم الإيجار الشهري؟', arabicPronunciation: 'كوانتو إس إل ألكيليير منسوال؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الوكيل', spanish: 'Ochocientos euros. El gas y el agua están incluidos.', arabicTranslation: 'ثمانمائة يورو. الغاز والماء مشمولان.', arabicPronunciation: 'أوتشوثيينتوس إيوروس. إل جاس إي إل أجوا إستان إنكلوييدوس.' },
      { speaker: 'B', speakerNameEs: 'Cliente', speakerNameAr: 'الزبون', spanish: 'Suena bien. ¿Podemos ir a verlo esta tarde?', arabicTranslation: 'يبدو جيداً. هل يمكننا الذهاب لرؤيته بعد ظهر اليوم؟', arabicPronunciation: 'سوينا بيين. بوديموس إير أ بيرلو إيستا تاردي؟' },
      { speaker: 'A', speakerNameEs: 'Agente', speakerNameAr: 'الوكيل', spanish: 'Por supuesto. Lo espero aquí a las cinco.', arabicTranslation: 'بالطبع. انتظرك هنا في الساعة الخامسة.', arabicPronunciation: 'بور سوبويستو. لو إسبرو أكي أ لاس ثينكو.' }
    ],
    quiz: [
      { type: 'listening', spanish: 'Quiero alquilar un apartamento cerca de la universidad.', arabic: 'أريد استئجار شقة قرب الجامعة.', options: [ { text: 'أريد استئجار شقة قرب الجامعة.', correct: true }, { text: 'أريد شراء منزل جديد.', correct: false }, { text: 'أريد بيع شقتي المفروشة.', correct: false } ] },
      { type: 'multiple_choice', spanish: '¿Cuánto es el alquiler?', arabic: 'كم الإيجار؟', options: [ { text: '٨٠٠ يورو', correct: true }, { text: '١٠٠٠ يورو', correct: false }, { text: '٥٠ يورو', correct: false } ] },
      { type: 'true_false', spanish: 'El apartamento no tiene muebles.', arabic: 'الشقة ليس بها أثاث.', isTrue: false, correctArabic: 'إنها مفروشة' }
    ]
  }
];
`;

fs.writeFileSync(path.join(__dirname, 'conversations.ts'), newConversations);
console.log("Done");
