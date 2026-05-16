import { Unit } from '../types';

export const unit2: Unit = {
  "id": "unit2",
  "title": "الوحدة 2: السفر والمحاورات",
  "description": "السؤال عن الحال، الأماكن، والأسعار",
  "theme": {
    "bg": "bg-purple-500",
    "text": "text-purple-500",
    "border": "border-purple-500",
    "lightBg": "bg-purple-100",
    "shadow": "shadow-purple-500/30"
  },
  "lessons": [
    {
      "id": "u2l1",
      "title": "كيف الحال؟",
      "details": [
        {
          "type": "flashcard",
          "spanish": "¿Cómo estás?",
          "arabic": "كيف حالك؟"
        },
        {
          "type": "flashcard",
          "spanish": "Muy bien, gracias",
          "arabic": "بخير جداً، شكراً"
        },
        {
          "type": "flashcard",
          "spanish": "¿Y tú?",
          "arabic": "وأنت؟"
        },
        {
          "type": "multiple_choice",
          "spanish": "¿Cómo estás?",
          "arabic": "ما معنى \"¿Cómo estás?\"؟",
          "options": [
            {
              "text": "بخير جداً، شكراً",
              "correct": false
            },
            {
              "text": "كيف حالك؟",
              "correct": true
            },
            {
              "text": "وأنت؟",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "¿Cómo estás?",
          "arabic": "كيف حالك؟",
          "options": [
            {
              "text": "وأنت؟",
              "correct": false
            },
            {
              "text": "كيف حالك؟",
              "correct": true
            },
            {
              "text": "بخير جداً، شكراً",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "¿Cómo estás?",
          "arabic": "كيف حالك؟",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "¿Cómo estás?",
          "arabic": "كيف حالك؟",
          "arrangeWords": [
            "¿Cómo",
            "Muy",
            "estás?"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "Muy bien, gracias",
          "arabic": "بخير جداً، شكراً",
          "options": [
            {
              "text": "¿Y tú?",
              "correct": false
            },
            {
              "text": "¿Cómo estás?",
              "correct": false
            },
            {
              "text": "Muy bien, gracias",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Muy bien, gracias",
          "arabic": "بخير جداً، شكراً",
          "options": [
            {
              "text": "وأنت؟",
              "correct": false
            },
            {
              "text": "بخير جداً، شكراً",
              "correct": true
            },
            {
              "text": "كيف حالك؟",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Muy bien, gracias",
          "arabic": "كيف حالك؟",
          "isTrue": false,
          "correctArabic": "بخير جداً، شكراً"
        },
        {
          "type": "arrange",
          "spanish": "Muy bien, gracias",
          "arabic": "بخير جداً، شكراً",
          "arrangeWords": [
            "Muy",
            "gracias",
            "bien,",
            "¿Cómo"
          ]
        },
        {
          "type": "multiple_choice",
          "spanish": "¿Y tú?",
          "arabic": "ما معنى \"¿Y tú?\"؟",
          "options": [
            {
              "text": "بخير جداً، شكراً",
              "correct": false
            },
            {
              "text": "كيف حالك؟",
              "correct": false
            },
            {
              "text": "وأنت؟",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "¿Y tú?",
          "arabic": "وأنت؟",
          "options": [
            {
              "text": "بخير جداً، شكراً",
              "correct": false
            },
            {
              "text": "وأنت؟",
              "correct": true
            },
            {
              "text": "كيف حالك؟",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "¿Y tú?",
          "arabic": "وأنت؟",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "¿Y tú?",
          "arabic": "وأنت؟",
          "arrangeWords": [
            "tú?",
            "Muy",
            "¿Y"
          ]
        },
        {
          "type": "match",
          "spanish": "",
          "arabic": "",
          "matchPairs": [
            {
              "spanish": "¿Cómo estás?",
              "arabic": "كيف حالك؟"
            },
            {
              "spanish": "Muy bien, gracias",
              "arabic": "بخير جداً، شكراً"
            },
            {
              "spanish": "¿Y tú?",
              "arabic": "وأنت؟"
            }
          ]
        }
      ]
    },
    {
      "id": "u2l2",
      "title": "الاتجاهات",
      "details": [
        {
          "type": "flashcard",
          "spanish": "¿Dónde está...?",
          "arabic": "أين يوجد...؟"
        },
        {
          "type": "flashcard",
          "spanish": "El baño",
          "arabic": "الحمام"
        },
        {
          "type": "flashcard",
          "spanish": "El hotel",
          "arabic": "الفندق"
        },
        {
          "type": "multiple_choice",
          "spanish": "¿Dónde está...?",
          "arabic": "ما معنى \"¿Dónde está...?\"؟",
          "options": [
            {
              "text": "أين يوجد...؟",
              "correct": true
            },
            {
              "text": "الفندق",
              "correct": false
            },
            {
              "text": "الحمام",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "¿Dónde está...?",
          "arabic": "أين يوجد...؟",
          "options": [
            {
              "text": "أين يوجد...؟",
              "correct": true
            },
            {
              "text": "الحمام",
              "correct": false
            },
            {
              "text": "الفندق",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "¿Dónde está...?",
          "arabic": "أين يوجد...؟",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "¿Dónde está...?",
          "arabic": "أين يوجد...؟",
          "arrangeWords": [
            "El",
            "¿Dónde",
            "está...?"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "El baño",
          "arabic": "الحمام",
          "options": [
            {
              "text": "El hotel",
              "correct": false
            },
            {
              "text": "¿Dónde está...?",
              "correct": false
            },
            {
              "text": "El baño",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El baño",
          "arabic": "الحمام",
          "options": [
            {
              "text": "الحمام",
              "correct": true
            },
            {
              "text": "أين يوجد...؟",
              "correct": false
            },
            {
              "text": "الفندق",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El baño",
          "arabic": "الحمام",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "El baño",
          "arabic": "الحمام",
          "arrangeWords": [
            "El",
            "¿Dónde",
            "baño"
          ]
        },
        {
          "type": "multiple_choice",
          "spanish": "El hotel",
          "arabic": "ما معنى \"El hotel\"؟",
          "options": [
            {
              "text": "الحمام",
              "correct": false
            },
            {
              "text": "أين يوجد...؟",
              "correct": false
            },
            {
              "text": "الفندق",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El hotel",
          "arabic": "الفندق",
          "options": [
            {
              "text": "الحمام",
              "correct": false
            },
            {
              "text": "الفندق",
              "correct": true
            },
            {
              "text": "أين يوجد...؟",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El hotel",
          "arabic": "الفندق",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "El hotel",
          "arabic": "الفندق",
          "arrangeWords": [
            "¿Dónde",
            "hotel",
            "El"
          ]
        },
        {
          "type": "match",
          "spanish": "",
          "arabic": "",
          "matchPairs": [
            {
              "spanish": "¿Dónde está...?",
              "arabic": "أين يوجد...؟"
            },
            {
              "spanish": "El baño",
              "arabic": "الحمام"
            },
            {
              "spanish": "El hotel",
              "arabic": "الفندق"
            }
          ]
        }
      ]
    },
    {
      "id": "u2l3",
      "title": "التسوق",
      "details": [
        {
          "type": "flashcard",
          "spanish": "¿Cuánto cuesta?",
          "arabic": "بكم هذا؟"
        },
        {
          "type": "flashcard",
          "spanish": "Es muy caro",
          "arabic": "إنه غالي جداً"
        },
        {
          "type": "flashcard",
          "spanish": "Barato",
          "arabic": "رخيص"
        },
        {
          "type": "multiple_choice",
          "spanish": "¿Cuánto cuesta?",
          "arabic": "ما معنى \"¿Cuánto cuesta?\"؟",
          "options": [
            {
              "text": "رخيص",
              "correct": false
            },
            {
              "text": "إنه غالي جداً",
              "correct": false
            },
            {
              "text": "بكم هذا؟",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "¿Cuánto cuesta?",
          "arabic": "بكم هذا؟",
          "options": [
            {
              "text": "إنه غالي جداً",
              "correct": false
            },
            {
              "text": "رخيص",
              "correct": false
            },
            {
              "text": "بكم هذا؟",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "¿Cuánto cuesta?",
          "arabic": "رخيص",
          "isTrue": false,
          "correctArabic": "بكم هذا؟"
        },
        {
          "type": "arrange",
          "spanish": "¿Cuánto cuesta?",
          "arabic": "بكم هذا؟",
          "arrangeWords": [
            "cuesta?",
            "¿Cuánto",
            "Barato"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "Es muy caro",
          "arabic": "إنه غالي جداً",
          "options": [
            {
              "text": "Es muy caro",
              "correct": true
            },
            {
              "text": "¿Cuánto cuesta?",
              "correct": false
            },
            {
              "text": "Barato",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Es muy caro",
          "arabic": "إنه غالي جداً",
          "options": [
            {
              "text": "بكم هذا؟",
              "correct": false
            },
            {
              "text": "إنه غالي جداً",
              "correct": true
            },
            {
              "text": "رخيص",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Es muy caro",
          "arabic": "إنه غالي جداً",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "Es muy caro",
          "arabic": "إنه غالي جداً",
          "arrangeWords": [
            "muy",
            "Barato",
            "caro",
            "Es"
          ]
        },
        {
          "type": "multiple_choice",
          "spanish": "Barato",
          "arabic": "ما معنى \"Barato\"؟",
          "options": [
            {
              "text": "بكم هذا؟",
              "correct": false
            },
            {
              "text": "رخيص",
              "correct": true
            },
            {
              "text": "إنه غالي جداً",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Barato",
          "arabic": "رخيص",
          "options": [
            {
              "text": "بكم هذا؟",
              "correct": false
            },
            {
              "text": "إنه غالي جداً",
              "correct": false
            },
            {
              "text": "رخيص",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Barato",
          "arabic": "رخيص",
          "isTrue": true
        },
        {
          "type": "match",
          "spanish": "",
          "arabic": "",
          "matchPairs": [
            {
              "spanish": "¿Cuánto cuesta?",
              "arabic": "بكم هذا؟"
            },
            {
              "spanish": "Es muy caro",
              "arabic": "إنه غالي جداً"
            },
            {
              "spanish": "Barato",
              "arabic": "رخيص"
            }
          ]
        }
      ]
    },
    {
      "id": "u2l4",
      "title": "الاستفهام",
      "details": [
        {
          "type": "flashcard",
          "spanish": "No entiendo",
          "arabic": "لا أفهم"
        },
        {
          "type": "flashcard",
          "spanish": "Más despacio, por favor",
          "arabic": "أبطأ من فضلك"
        },
        {
          "type": "flashcard",
          "spanish": "¿Hablas inglés?",
          "arabic": "هل تتحدث الإنجليزية؟"
        },
        {
          "type": "multiple_choice",
          "spanish": "No entiendo",
          "arabic": "ما معنى \"No entiendo\"؟",
          "options": [
            {
              "text": "أبطأ من فضلك",
              "correct": false
            },
            {
              "text": "هل تتحدث الإنجليزية؟",
              "correct": false
            },
            {
              "text": "لا أفهم",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "No entiendo",
          "arabic": "لا أفهم",
          "options": [
            {
              "text": "أبطأ من فضلك",
              "correct": false
            },
            {
              "text": "هل تتحدث الإنجليزية؟",
              "correct": false
            },
            {
              "text": "لا أفهم",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "No entiendo",
          "arabic": "أبطأ من فضلك",
          "isTrue": false,
          "correctArabic": "لا أفهم"
        },
        {
          "type": "arrange",
          "spanish": "No entiendo",
          "arabic": "لا أفهم",
          "arrangeWords": [
            "Más",
            "entiendo",
            "No"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "Más despacio, por favor",
          "arabic": "أبطأ من فضلك",
          "options": [
            {
              "text": "No entiendo",
              "correct": false
            },
            {
              "text": "Más despacio, por favor",
              "correct": true
            },
            {
              "text": "¿Hablas inglés?",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Más despacio, por favor",
          "arabic": "أبطأ من فضلك",
          "options": [
            {
              "text": "أبطأ من فضلك",
              "correct": true
            },
            {
              "text": "لا أفهم",
              "correct": false
            },
            {
              "text": "هل تتحدث الإنجليزية؟",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Más despacio, por favor",
          "arabic": "لا أفهم",
          "isTrue": false,
          "correctArabic": "أبطأ من فضلك"
        },
        {
          "type": "arrange",
          "spanish": "Más despacio, por favor",
          "arabic": "أبطأ من فضلك",
          "arrangeWords": [
            "Más",
            "favor",
            "por",
            "No",
            "despacio,"
          ]
        },
        {
          "type": "multiple_choice",
          "spanish": "¿Hablas inglés?",
          "arabic": "ما معنى \"¿Hablas inglés?\"؟",
          "options": [
            {
              "text": "أبطأ من فضلك",
              "correct": false
            },
            {
              "text": "لا أفهم",
              "correct": false
            },
            {
              "text": "هل تتحدث الإنجليزية؟",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "¿Hablas inglés?",
          "arabic": "هل تتحدث الإنجليزية؟",
          "options": [
            {
              "text": "لا أفهم",
              "correct": false
            },
            {
              "text": "هل تتحدث الإنجليزية؟",
              "correct": true
            },
            {
              "text": "أبطأ من فضلك",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "¿Hablas inglés?",
          "arabic": "أبطأ من فضلك",
          "isTrue": false,
          "correctArabic": "هل تتحدث الإنجليزية؟"
        },
        {
          "type": "arrange",
          "spanish": "¿Hablas inglés?",
          "arabic": "هل تتحدث الإنجليزية؟",
          "arrangeWords": [
            "Más",
            "¿Hablas",
            "inglés?"
          ]
        },
        {
          "type": "match",
          "spanish": "",
          "arabic": "",
          "matchPairs": [
            {
              "spanish": "No entiendo",
              "arabic": "لا أفهم"
            },
            {
              "spanish": "Más despacio, por favor",
              "arabic": "أبطأ من فضلك"
            },
            {
              "spanish": "¿Hablas inglés?",
              "arabic": "هل تتحدث الإنجليزية؟"
            }
          ]
        }
      ]
    },
    {
      "id": "u2l5",
      "title": "الوقت",
      "details": [
        {
          "type": "flashcard",
          "spanish": "¿Qué hora es?",
          "arabic": "كم الساعة؟"
        },
        {
          "type": "flashcard",
          "spanish": "Es la una",
          "arabic": "الساعة الواحدة"
        },
        {
          "type": "flashcard",
          "spanish": "Son las dos",
          "arabic": "الساعة الثانية"
        },
        {
          "type": "flashcard",
          "spanish": "Temprano",
          "arabic": "مبكراً"
        },
        {
          "type": "multiple_choice",
          "spanish": "¿Qué hora es?",
          "arabic": "ما معنى \"¿Qué hora es?\"؟",
          "options": [
            {
              "text": "مبكراً",
              "correct": false
            },
            {
              "text": "كم الساعة؟",
              "correct": true
            },
            {
              "text": "الساعة الثانية",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "¿Qué hora es?",
          "arabic": "كم الساعة؟",
          "options": [
            {
              "text": "مبكراً",
              "correct": false
            },
            {
              "text": "الساعة الثانية",
              "correct": false
            },
            {
              "text": "كم الساعة؟",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "¿Qué hora es?",
          "arabic": "الساعة الثانية",
          "isTrue": false,
          "correctArabic": "كم الساعة؟"
        },
        {
          "type": "arrange",
          "spanish": "¿Qué hora es?",
          "arabic": "كم الساعة؟",
          "arrangeWords": [
            "es?",
            "Son",
            "¿Qué",
            "hora"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "Es la una",
          "arabic": "الساعة الواحدة",
          "options": [
            {
              "text": "Temprano",
              "correct": false
            },
            {
              "text": "Es la una",
              "correct": true
            },
            {
              "text": "¿Qué hora es?",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Es la una",
          "arabic": "الساعة الواحدة",
          "options": [
            {
              "text": "كم الساعة؟",
              "correct": false
            },
            {
              "text": "مبكراً",
              "correct": false
            },
            {
              "text": "الساعة الواحدة",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Es la una",
          "arabic": "الساعة الواحدة",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "Es la una",
          "arabic": "الساعة الواحدة",
          "arrangeWords": [
            "Es",
            "¿Qué",
            "la",
            "una"
          ]
        },
        {
          "type": "multiple_choice",
          "spanish": "Son las dos",
          "arabic": "ما معنى \"Son las dos\"؟",
          "options": [
            {
              "text": "الساعة الثانية",
              "correct": true
            },
            {
              "text": "الساعة الواحدة",
              "correct": false
            },
            {
              "text": "مبكراً",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Son las dos",
          "arabic": "الساعة الثانية",
          "options": [
            {
              "text": "الساعة الواحدة",
              "correct": false
            },
            {
              "text": "مبكراً",
              "correct": false
            },
            {
              "text": "الساعة الثانية",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Son las dos",
          "arabic": "الساعة الثانية",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "Son las dos",
          "arabic": "الساعة الثانية",
          "arrangeWords": [
            "Son",
            "dos",
            "Es",
            "las"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "Temprano",
          "arabic": "مبكراً",
          "options": [
            {
              "text": "Es la una",
              "correct": false
            },
            {
              "text": "¿Qué hora es?",
              "correct": false
            },
            {
              "text": "Temprano",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Temprano",
          "arabic": "مبكراً",
          "options": [
            {
              "text": "كم الساعة؟",
              "correct": false
            },
            {
              "text": "مبكراً",
              "correct": true
            },
            {
              "text": "الساعة الواحدة",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Temprano",
          "arabic": "الساعة الواحدة",
          "isTrue": false,
          "correctArabic": "مبكراً"
        },
        {
          "type": "match",
          "spanish": "",
          "arabic": "",
          "matchPairs": [
            {
              "spanish": "¿Qué hora es?",
              "arabic": "كم الساعة؟"
            },
            {
              "spanish": "Es la una",
              "arabic": "الساعة الواحدة"
            },
            {
              "spanish": "Son las dos",
              "arabic": "الساعة الثانية"
            },
            {
              "spanish": "Temprano",
              "arabic": "مبكراً"
            }
          ]
        }
      ]
    },
    {
      "id": "u2l6",
      "title": "وسائل النقل",
      "details": [
        {
          "type": "flashcard",
          "spanish": "El tren",
          "arabic": "القطار"
        },
        {
          "type": "flashcard",
          "spanish": "El autobús",
          "arabic": "الحافلة"
        },
        {
          "type": "flashcard",
          "spanish": "El taxi",
          "arabic": "سيارة الأجرة"
        },
        {
          "type": "flashcard",
          "spanish": "El avión",
          "arabic": "الطائرة"
        },
        {
          "type": "multiple_choice",
          "spanish": "El tren",
          "arabic": "ما معنى \"El tren\"؟",
          "options": [
            {
              "text": "القطار",
              "correct": true
            },
            {
              "text": "الطائرة",
              "correct": false
            },
            {
              "text": "الحافلة",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El tren",
          "arabic": "القطار",
          "options": [
            {
              "text": "الطائرة",
              "correct": false
            },
            {
              "text": "القطار",
              "correct": true
            },
            {
              "text": "الحافلة",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El tren",
          "arabic": "الحافلة",
          "isTrue": false,
          "correctArabic": "القطار"
        },
        {
          "type": "arrange",
          "spanish": "El tren",
          "arabic": "القطار",
          "arrangeWords": [
            "El",
            "tren",
            "El"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "El autobús",
          "arabic": "الحافلة",
          "options": [
            {
              "text": "El tren",
              "correct": false
            },
            {
              "text": "El avión",
              "correct": false
            },
            {
              "text": "El autobús",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El autobús",
          "arabic": "الحافلة",
          "options": [
            {
              "text": "الحافلة",
              "correct": true
            },
            {
              "text": "القطار",
              "correct": false
            },
            {
              "text": "الطائرة",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El autobús",
          "arabic": "القطار",
          "isTrue": false,
          "correctArabic": "الحافلة"
        },
        {
          "type": "arrange",
          "spanish": "El autobús",
          "arabic": "الحافلة",
          "arrangeWords": [
            "El",
            "El",
            "autobús"
          ]
        },
        {
          "type": "multiple_choice",
          "spanish": "El taxi",
          "arabic": "ما معنى \"El taxi\"؟",
          "options": [
            {
              "text": "سيارة الأجرة",
              "correct": true
            },
            {
              "text": "الحافلة",
              "correct": false
            },
            {
              "text": "القطار",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El taxi",
          "arabic": "سيارة الأجرة",
          "options": [
            {
              "text": "القطار",
              "correct": false
            },
            {
              "text": "سيارة الأجرة",
              "correct": true
            },
            {
              "text": "الحافلة",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El taxi",
          "arabic": "الحافلة",
          "isTrue": false,
          "correctArabic": "سيارة الأجرة"
        },
        {
          "type": "arrange",
          "spanish": "El taxi",
          "arabic": "سيارة الأجرة",
          "arrangeWords": [
            "taxi",
            "El",
            "El"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "El avión",
          "arabic": "الطائرة",
          "options": [
            {
              "text": "El autobús",
              "correct": false
            },
            {
              "text": "El taxi",
              "correct": false
            },
            {
              "text": "El avión",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El avión",
          "arabic": "الطائرة",
          "options": [
            {
              "text": "الحافلة",
              "correct": false
            },
            {
              "text": "الطائرة",
              "correct": true
            },
            {
              "text": "سيارة الأجرة",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El avión",
          "arabic": "الطائرة",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "El avión",
          "arabic": "الطائرة",
          "arrangeWords": [
            "El",
            "El",
            "avión"
          ]
        },
        {
          "type": "match",
          "spanish": "",
          "arabic": "",
          "matchPairs": [
            {
              "spanish": "El tren",
              "arabic": "القطار"
            },
            {
              "spanish": "El autobús",
              "arabic": "الحافلة"
            },
            {
              "spanish": "El taxi",
              "arabic": "سيارة الأجرة"
            },
            {
              "spanish": "El avión",
              "arabic": "الطائرة"
            }
          ]
        }
      ]
    },
    {
      "id": "u2_exam",
      "title": "إختبار الوحدة 2",
      "details": []
    }
  ]
};

