import { Unit } from '../types';

export const unit1: Unit = {
  id: 'unit1',
  title: 'الوحدة 1: الأساسيات',
  description: 'التحيات، الوداع، والتعريف بالنفس',
  difficulty: 'beginner',
  theme: {
    bg: 'bg-teal-500',
    text: 'text-teal-500',
    border: 'border-teal-500',
    lightBg: 'bg-teal-100',
    shadow: 'shadow-teal-500/30'
  },
  lessons: [
    {
      id: 'u1l0',
      title: 'الأبجدية الإسبانية',
      difficulty: 'beginner',
      details: [
        { type: 'flashcard', spanish: 'A', arabic: 'Árbol (شجرة)' },
        { type: 'flashcard', spanish: 'B', arabic: 'Barco (سفينة)' },
        { type: 'flashcard', spanish: 'C', arabic: 'Casa (منزل)' },
        { type: 'flashcard', spanish: 'D', arabic: 'Dedo (إصبع)' },
        { type: 'flashcard', spanish: 'E', arabic: 'Elefante (فيل)' },
        { type: 'flashcard', spanish: 'F', arabic: 'Flor (زهرة)' },
        { type: 'flashcard', spanish: 'G', arabic: 'Gato (قطة)' },
        { type: 'flashcard', spanish: 'H', arabic: 'Helado (مثلجات)' },
        { type: 'flashcard', spanish: 'I', arabic: 'Isla (جزيرة)' },
        {
          type: 'multiple_choice',
          spanish: 'Casa',
          arabic: 'أي من هذه الصور لـ "منزل"؟',
          options: [
            { text: 'Barco', correct: false },
            { text: 'Casa', correct: true },
            { text: 'Dedo', correct: false }
          ]
        },
        {
          type: 'listening',
          spanish: 'Elefante',
          arabic: 'الفيل',
          options: [
            { text: 'فيل', correct: true },
            { text: 'زهرة', correct: false },
            { text: 'قطة', correct: false }
          ]
        },
        { type: 'flashcard', spanish: 'J', arabic: 'Jugo (عصير)' },
        { type: 'flashcard', spanish: 'K', arabic: 'Kilo (كيلو)' },
        { type: 'flashcard', spanish: 'L', arabic: 'Luna (قمر)' },
        { type: 'flashcard', spanish: 'M', arabic: 'Mano (يد)' },
        { type: 'flashcard', spanish: 'N', arabic: 'Nido (عش)' },
        { type: 'flashcard', spanish: 'Ñ', arabic: 'Ñandú (نعام)' },
        { type: 'flashcard', spanish: 'O', arabic: 'Ojo (عين)' },
        { type: 'flashcard', spanish: 'P', arabic: 'Pan (خبز)' },
        {
          type: 'arabic_to_spanish',
          spanish: 'Luna',
          arabic: 'قمر',
          options: [
            { text: 'Luna', correct: true },
            { text: 'Mano', correct: false },
            { text: 'Nido', correct: false }
          ]
        },
        {
          type: 'match',
          spanish: '',
          arabic: '',
          matchPairs: [
            { spanish: 'Jugo', arabic: 'عصير' },
            { spanish: 'Luna', arabic: 'قمر' },
            { spanish: 'Mano', arabic: 'يد' },
            { spanish: 'Pan', arabic: 'خبز' }
          ]
        },
        { type: 'flashcard', spanish: 'Q', arabic: 'Queso (جبن)' },
        { type: 'flashcard', spanish: 'R', arabic: 'Ratón (فأر)' },
        { type: 'flashcard', spanish: 'S', arabic: 'Sol (شمس)' },
        { type: 'flashcard', spanish: 'T', arabic: 'Tren (قطار)' },
        { type: 'flashcard', spanish: 'U', arabic: 'Uva (عنب)' },
        { type: 'flashcard', spanish: 'V', arabic: 'Vaca (بقرة)' },
        { type: 'flashcard', spanish: 'W', arabic: 'Waterpolo' },
        { type: 'flashcard', spanish: 'X', arabic: 'Xilófono' },
        { type: 'flashcard', spanish: 'Y', arabic: 'Yo (أنا)' },
        { type: 'flashcard', spanish: 'Z', arabic: 'Zapato (حذاء)' },
        {
          type: 'true_false',
          spanish: 'Zapato',
          arabic: 'حذاء',
          isTrue: true
        },
        {
          type: 'true_false',
          spanish: 'Ratón',
          arabic: 'قطة',
          isTrue: false,
          correctArabic: 'فأر'
        },
        {
          type: 'arrange',
          spanish: 'El Sol',
          arabic: 'الشمس',
          arrangeWords: ['Sol', 'El', 'Luna', 'La']
        },
        {
          type: 'arrange_ar',
          spanish: 'El Sol',
          arabic: 'الشمس',
          arrangeWords: ['الشمس', 'القمر', 'النجم']
        },
        {
          type: 'arrange_ar',
          spanish: 'La Casa',
          arabic: 'المنزل',
          arrangeWords: ['المنزل', 'المدرسة', 'الشارع']
        },
        {
          type: 'multiple_choice',
          spanish: 'Uva',
          arabic: 'ما معنى كلمة Uva؟',
          options: [
            { text: 'عنب', correct: true },
            { text: 'تفاح', correct: false },
            { text: 'موز', correct: false }
          ]
        },
        { type: 'flashcard', spanish: 'CH', arabic: 'Chico (ولد)' },
        { type: 'flashcard', spanish: 'LL', arabic: 'Llama (حيوان اللاما / شعلة)' },
        { type: 'flashcard', spanish: 'RR', arabic: 'Perro (كلب - راء مشددة)' },
        {
          type: 'multiple_choice',
          spanish: 'Chico',
          arabic: 'ما معنى كلمة Chico؟',
          options: [
            { text: 'ولد', correct: true },
            { text: 'بنت', correct: false },
            { text: 'سيارة', correct: false }
          ]
        },
        {
          type: 'listening',
          spanish: 'Perro',
          arabic: 'كلب',
          options: [
            { text: 'كلب', correct: true },
            { text: 'قطة', correct: false },
            { text: 'بطة', correct: false }
          ]
        },
        {
          type: 'match',
          spanish: '',
          arabic: '',
          matchPairs: [
            { spanish: 'Chico', arabic: 'ولد' },
            { spanish: 'Llama', arabic: 'اللاما' },
            { spanish: 'Perro', arabic: 'كلب' },
            { spanish: 'Ñandú', arabic: 'نعام' }
          ]
        }
      ]
    },
    {
      id: 'u1l1',
      title: 'التحيات الأولى',
      details: [
        { type: 'flashcard', spanish: '¡Hola!', arabic: 'مرحباً!' },
        { type: 'flashcard', spanish: 'Buenos días', arabic: 'صباح الخير' },
        { type: 'flashcard', spanish: '¿Qué tal?', arabic: 'كيف الحال؟ (غير رسمية)' },
        { type: 'flashcard', spanish: 'Bienvenido', arabic: 'أهلاً بك' },
        {
          type: 'multiple_choice',
          spanish: '¡Hola!',
          arabic: 'ماذا تقول عندما تقابل شخصاً لأول مرة؟',
          options: [
            { text: 'Adiós', correct: false },
            { text: '¡Hola!', correct: true },
            { text: 'Gracias', correct: false }
          ]
        },
        {
          type: 'listening',
          spanish: 'Buenos días',
          arabic: 'صباح الخير',
          options: [
            { text: 'صباح الخير', correct: true },
            { text: 'مساء الخير', correct: false },
            { text: 'تصبح على خير', correct: false }
          ]
        },
        {
          type: 'arabic_to_spanish',
          spanish: '¡Hola!',
          arabic: 'مرحباً',
          options: [
            { text: 'Adiós', correct: false },
            { text: 'Buenas noches', correct: false },
            { text: '¡Hola!', correct: true }
          ]
        },
        {
          type: 'multiple_choice',
          spanish: '¿Qué tal?',
          arabic: 'كيف تسأل صديقاً عن حاله بطريقة غير رسمية؟',
          options: [
            { text: 'Buenos días', correct: false },
            { text: '¿Qué tal?', correct: true },
            { text: 'Bienvenido', correct: false }
          ]
        },
        {
          type: 'listening',
          spanish: 'Bienvenido',
          arabic: 'أهلاً بك',
          options: [
            { text: 'وداعاً', correct: false },
            { text: 'أهلاً بك', correct: true },
            { text: 'شكراً', correct: false }
          ]
        },
        {
          type: 'arrange',
          spanish: 'Hola Buenos días',
          arabic: 'مرحباً، صباح الخير',
          arrangeWords: ['días', 'Hola', 'Buenos']
        },
        {
          type: 'true_false',
          spanish: 'Bienvenido',
          arabic: 'أهلاً بك',
          isTrue: true
        },
        {
          type: 'true_false',
          spanish: 'Buenos días',
          arabic: 'تصبح على خير',
          isTrue: false,
          correctArabic: 'صباح الخير'
        },
        {
          type: 'match',
          spanish: '',
          arabic: '',
          matchPairs: [
            { spanish: 'Hola', arabic: 'مرحباً' },
            { spanish: 'Buenos días', arabic: 'صباح الخير' },
            { spanish: 'Bienvenido', arabic: 'أهلاً بك' },
            { spanish: '¿Qué tal?', arabic: 'كيف الحال؟' }
          ]
        }
      ]
    },
    {
      id: 'u1l2',
      title: 'أوقات اليوم',
      details: [
        { type: 'flashcard', spanish: 'Buenas tardes', arabic: 'مساء الخير' },
        { type: 'flashcard', spanish: 'Buenas noches', arabic: 'ليلة سعيدة / تصبح على خير' },
        { type: 'flashcard', spanish: 'El día', arabic: 'اليوم' },
        { type: 'flashcard', spanish: 'La tarde', arabic: 'بعد الظهر / المساء' },
        {
          type: 'multiple_choice',
          spanish: 'Buenas tardes',
          arabic: 'ماذا تقول بعد الظهر؟',
          options: [
            { text: 'Buenos días', correct: false },
            { text: 'Buenas tardes', correct: true },
            { text: 'Hasta mañana', correct: false }
          ]
        },
        {
          type: 'listening',
          spanish: 'Buenas noches',
          arabic: 'ليلة سعيدة',
          options: [
            { text: 'مرحباً', correct: false },
            { text: 'صباح الخير', correct: false },
            { text: 'تصبح على خير', correct: true }
          ]
        },
        {
          type: 'arabic_to_spanish',
          spanish: 'Buenas tardes',
          arabic: 'مساء الخير',
          options: [
            { text: 'Buenas tardes', correct: true },
            { text: 'Adiós', correct: false },
            { text: 'Buenos días', correct: false }
          ]
        },
        {
          type: 'multiple_choice',
          spanish: 'El día',
          arabic: 'ما معنى كلمة "El día"؟',
          options: [
            { text: 'الليل', correct: false },
            { text: 'اليوم', correct: true },
            { text: 'الصباح', correct: false }
          ]
        },
        {
          type: 'listening',
          spanish: 'La tarde',
          arabic: 'بعد الظهر',
          options: [
            { text: 'اليوم', correct: false },
            { text: 'الليل', correct: false },
            { text: 'بعد الظهر', correct: true }
          ]
        },
        {
          type: 'arrange',
          spanish: 'Buenas tardes señor',
          arabic: 'مساء الخير يا سيد',
          arrangeWords: ['tardes', 'señor', 'Buenas']
        },
        {
          type: 'true_false',
          spanish: 'Buenas noches',
          arabic: 'تصبح على خير',
          isTrue: true
        },
        {
          type: 'match',
          spanish: '',
          arabic: '',
          matchPairs: [
            { spanish: 'Buenas tardes', arabic: 'مساء الخير' },
            { spanish: 'Buenas noches', arabic: 'ليلة سعيدة' },
            { spanish: 'El día', arabic: 'اليوم' },
            { spanish: 'La tarde', arabic: 'بعد الظهر' }
          ]
        }
      ]
    },
    {
      id: 'u1l3',
      title: 'الوداع',
      details: [
        { type: 'flashcard', spanish: 'Adiós', arabic: 'وداعاً' },
        { type: 'flashcard', spanish: 'Hasta luego', arabic: 'أراك لاحقاً' },
        { type: 'flashcard', spanish: 'Hasta mañana', arabic: 'أراك غداً' },
        { type: 'flashcard', spanish: 'Nos vemos', arabic: 'نلتقي' },
        { type: 'flashcard', spanish: 'Chao', arabic: 'وداعاً (غير رسمية)' },
        {
          type: 'multiple_choice',
          spanish: 'Hasta luego',
          arabic: 'كيف تقول "أراك لاحقاً"؟',
          options: [
            { text: 'Adiós', correct: false },
            { text: 'Mucho gusto', correct: false },
            { text: 'Hasta luego', correct: true }
          ]
        },
        {
          type: 'listening',
          spanish: 'Adiós',
          arabic: 'وداعاً',
          options: [
            { text: 'وداعاً', correct: true },
            { text: 'شكراً', correct: false },
            { text: 'من فضلك', correct: false }
          ]
        },
        {
          type: 'arabic_to_spanish',
          spanish: 'Hasta mañana',
          arabic: 'أراك غداً',
          options: [
            { text: 'Buenos días', correct: false },
            { text: 'Hasta mañana', correct: true },
            { text: 'Hasta luego', correct: false }
          ]
        },
        {
          type: 'multiple_choice',
          spanish: 'Nos vemos',
          arabic: 'ما معنى "Nos vemos"؟',
          options: [
            { text: 'صباح الخير', correct: false },
            { text: 'نلتقي', correct: true },
            { text: 'نعم', correct: false }
          ]
        },
        {
          type: 'listening',
          spanish: 'Chao',
          arabic: 'وداعاً (غير رسمية)',
          options: [
            { text: 'مرحباً', correct: false },
            { text: 'وداعاً', correct: true },
            { text: 'شكراً', correct: false }
          ]
        },
        {
          type: 'arrange',
          spanish: 'Adiós y hasta mañana',
          arabic: 'وداعاً وأراك غداً',
          arrangeWords: ['mañana', 'hasta', 'Adiós', 'y']
        },
        {
          type: 'true_false',
          spanish: 'Hasta luego',
          arabic: 'أراك غداً',
          isTrue: false,
          correctArabic: 'أراك لاحقاً'
        },
        {
          type: 'match',
          spanish: '',
          arabic: '',
          matchPairs: [
            { spanish: 'Adiós', arabic: 'وداعاً' },
            { spanish: 'Hasta luego', arabic: 'أراك لاحقاً' },
            { spanish: 'Hasta mañana', arabic: 'أراك غداً' },
            { spanish: 'Nos vemos', arabic: 'نلتقي' }
          ]
        }
      ]
    },
    {
      id: 'u1l4',
      title: 'من أنت؟',
      details: [
        { type: 'flashcard', spanish: 'Me llamo...', arabic: 'اسمي...' },
        { type: 'flashcard', spanish: '¿Cómo te llamas?', arabic: 'ما اسمك؟' },
        { type: 'flashcard', spanish: 'Mucho gusto', arabic: 'تشرفنا' },
        { type: 'flashcard', spanish: 'Encantado', arabic: 'سعيد بلقائك' },
        { type: 'flashcard', spanish: 'Señor', arabic: 'سيد / أستاذ' },
        {
          type: 'multiple_choice',
          spanish: '¿Cómo te llamas?',
          arabic: 'كيف تسأل شخصاً عن اسمه؟',
          options: [
            { text: 'Me llamo Juan', correct: false },
            { text: '¿Cómo te llamas?', correct: true },
            { text: 'Adiós', correct: false }
          ]
        },
        {
          type: 'listening',
          spanish: 'Mucho gusto',
          arabic: 'تشرفنا',
          options: [
            { text: 'كيف حالك؟', correct: false },
            { text: 'تشرفنا', correct: true },
            { text: 'اسمي...', correct: false }
          ]
        },
        {
          type: 'arabic_to_spanish',
          spanish: 'Me llamo...',
          arabic: 'اسمي...',
          options: [
            { text: 'Mucho gusto', correct: false },
            { text: '¿Cómo te llamas?', correct: false },
            { text: 'Me llamo...', correct: true }
          ]
        },
        {
          type: 'multiple_choice',
          spanish: 'Encantado',
          arabic: 'ماذا تقول عندما تقابل شخصاً لتخبره أنك سعيد بلقائه؟',
          options: [
            { text: 'Hasta luego', correct: false },
            { text: 'Encantado', correct: true },
            { text: 'Señor', correct: false }
          ]
        },
        {
          type: 'listening',
          spanish: 'Señor',
          arabic: 'سيد',
          options: [
            { text: 'أخ', correct: false },
            { text: 'سيد', correct: true },
            { text: 'طبيب', correct: false }
          ]
        },
        {
          type: 'arrange',
          spanish: 'Hola me llamo Juan',
          arabic: 'مرحباً اسمي خوان',
          arrangeWords: ['Juan', 'Hola', 'llamo', 'me']
        },
        {
          type: 'true_false',
          spanish: 'Mucho gusto',
          arabic: 'تشرفنا',
          isTrue: true
        },
        {
          type: 'match',
          spanish: '',
          arabic: '',
          matchPairs: [
            { spanish: 'Me llamo', arabic: 'اسمي' },
            { spanish: 'Mucho gusto', arabic: 'تشرفنا' },
            { spanish: '¿Cómo te llamas?', arabic: 'ما اسمك؟' },
            { spanish: 'Señor', arabic: 'سيد' }
          ]
        }
      ]
    },
    {
      id: 'u1l5',
      title: 'طلب المساعدة والشكر',
      details: [
        { type: 'flashcard', spanish: '¡Ayuda!', arabic: 'مساعدة / نجدة' },
        { type: 'flashcard', spanish: 'Por favor', arabic: 'من فضلك' },
        { type: 'flashcard', spanish: 'Gracias', arabic: 'شكراً' },
        { type: 'flashcard', spanish: 'De nada', arabic: 'عفواً' },
        {
          type: 'multiple_choice',
          spanish: 'Gracias',
          arabic: 'كيف تقول "شكراً"؟',
          options: [
            { text: 'Por favor', correct: false },
            { text: 'Gracias', correct: true },
            { text: 'De nada', correct: false }
          ]
        },
        {
          type: 'listening',
          spanish: 'Por favor',
          arabic: 'من فضلك',
          options: [
            { text: 'مساعدة', correct: false },
            { text: 'عفواً', correct: false },
            { text: 'من فضلك', correct: true }
          ]
        },
        {
          type: 'arabic_to_spanish',
          spanish: '¡Ayuda!',
          arabic: 'مساعدة / نجدة',
          options: [
            { text: 'Gracias', correct: false },
            { text: '¡Ayuda!', correct: true },
            { text: 'Por favor', correct: false }
          ]
        },
        {
          type: 'arrange',
          spanish: 'Un café por favor',
          arabic: 'قهوة من فضلك',
          arrangeWords: ['café', 'por', 'Un', 'favor']
        },
        {
          type: 'true_false',
          spanish: 'De nada',
          arabic: 'عفواً',
          isTrue: true
        },
        {
          type: 'match',
          spanish: '',
          arabic: '',
          matchPairs: [
            { spanish: '¡Ayuda!', arabic: 'مساعدة' },
            { spanish: 'Por favor', arabic: 'من فضلك' },
            { spanish: 'Gracias', arabic: 'شكراً' },
            { spanish: 'De nada', arabic: 'عفواً' }
          ]
        }
      ]
    },
    {
      id: 'u1l6',
      title: 'الاعتذار',
      details: [
        { type: 'flashcard', spanish: 'Lo siento', arabic: 'أنا آسف' },
        { type: 'flashcard', spanish: 'Perdón', arabic: 'عذراً' },
        { type: 'flashcard', spanish: 'No pasa nada', arabic: 'لا بأس' },
        { type: 'flashcard', spanish: 'Disculpe', arabic: 'عذراً (رسمية)' },
        {
          type: 'multiple_choice',
          spanish: 'Lo siento',
          arabic: 'كيف تقول "أنا آسف"؟',
          options: [
            { text: 'Gracias', correct: false },
            { text: 'Lo siento', correct: true },
            { text: 'Perdón', correct: false }
          ]
        },
        {
          type: 'listening',
          spanish: 'Perdón',
          arabic: 'عذراً',
          options: [
            { text: 'لا بأس', correct: false },
            { text: 'عذراً', correct: true },
            { text: 'شكراً', correct: false }
          ]
        },
        {
          type: 'arabic_to_spanish',
          spanish: 'No pasa nada',
          arabic: 'لا بأس',
          options: [
            { text: 'Lo siento', correct: false },
            { text: 'No pasa nada', correct: true },
            { text: 'Perdón', correct: false }
          ]
        },
        {
          type: 'arrange',
          spanish: 'Lo siento mucho',
          arabic: 'أنا آسف جداً',
          arrangeWords: ['mucho', 'Lo', 'siento']
        },
        {
          type: 'true_false',
          spanish: 'Disculpe',
          arabic: 'عذراً (رسمية)',
          isTrue: true
        },
        {
          type: 'match',
          spanish: '',
          arabic: '',
          matchPairs: [
            { spanish: 'Lo siento', arabic: 'أنا آسف' },
            { spanish: 'Perdón', arabic: 'عذراً' },
            { spanish: 'No pasa nada', arabic: 'لا بأس' },
            { spanish: 'Disculpe', arabic: 'عذراً (رسمية)' }
          ]
        }
      ]
    },
    {
      id: 'u1_exam',
      title: 'إختبار الوحدة 1',
      details: [
        {
          type: 'multiple_choice',
          spanish: '¡Hola!',
          arabic: 'ما معنى "مرحباً" بالأسكتلندية (عفواً بالإسبانية)؟',
          options: [
            { text: 'Adiós', correct: false },
            { text: '¡Hola!', correct: true },
            { text: 'Gracias', correct: false }
          ]
        },
        {
          type: 'listening',
          spanish: 'Gracias',
          arabic: 'شكراً',
          options: [
            { text: 'شكراً', correct: true },
            { text: 'من فضلك', correct: false },
            { text: 'عفواً', correct: false }
          ]
        },
        {
          type: 'true_false',
          spanish: 'Adiós',
          arabic: 'وداعاً',
          isTrue: true
        },
        {
          type: 'match',
          spanish: '',
          arabic: '',
          matchPairs: [
            { spanish: 'Buenos días', arabic: 'صباح الخير' },
            { spanish: 'Buenas noches', arabic: 'ليلة سعيدة' },
            { spanish: 'Hasta luego', arabic: 'أراك لاحقاً' },
            { spanish: 'Mucho gusto', arabic: 'تشرفنا' }
          ]
        },
        {
          type: 'arrange',
          spanish: 'Me llamo Juan',
          arabic: 'اسمي خوان',
          arrangeWords: ['Juan', 'llamo', 'Me', 'Soy']
        }
      ]
    }
  ]
};
