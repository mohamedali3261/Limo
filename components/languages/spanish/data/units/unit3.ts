import { Unit } from '../types';

export const unit3: Unit = {
  "id": "unit3",
  "title": "الوحدة 3: المطعم والطعام",
  "description": "كيف تطلب وجبتك",
  "theme": {
    "bg": "bg-emerald-500",
    "text": "text-emerald-500",
    "border": "border-emerald-500",
    "lightBg": "bg-emerald-100",
    "shadow": "shadow-emerald-500/30"
  },
  "lessons": [
    {
      "id": "u3l1",
      "title": "طلب الطعام",
      "details": [
        {
          "type": "flashcard",
          "spanish": "El menú, por favor",
          "arabic": "القائمة من فضلك"
        },
        {
          "type": "flashcard",
          "spanish": "Quiero...",
          "arabic": "أريد..."
        },
        {
          "type": "flashcard",
          "spanish": "Agua",
          "arabic": "ماء"
        },
        {
          "type": "multiple_choice",
          "spanish": "El menú, por favor",
          "arabic": "ما معنى \"El menú, por favor\"؟",
          "options": [
            {
              "text": "ماء",
              "correct": false
            },
            {
              "text": "القائمة من فضلك",
              "correct": true
            },
            {
              "text": "أريد...",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El menú, por favor",
          "arabic": "القائمة من فضلك",
          "options": [
            {
              "text": "أريد...",
              "correct": false
            },
            {
              "text": "ماء",
              "correct": false
            },
            {
              "text": "القائمة من فضلك",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El menú, por favor",
          "arabic": "أريد...",
          "isTrue": false,
          "correctArabic": "القائمة من فضلك"
        },
        {
          "type": "arrange",
          "spanish": "El menú, por favor",
          "arabic": "القائمة من فضلك",
          "arrangeWords": [
            "menú,",
            "por",
            "favor",
            "Quiero...",
            "El"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "Quiero...",
          "arabic": "أريد...",
          "options": [
            {
              "text": "Agua",
              "correct": false
            },
            {
              "text": "El menú, por favor",
              "correct": false
            },
            {
              "text": "Quiero...",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Quiero...",
          "arabic": "أريد...",
          "options": [
            {
              "text": "القائمة من فضلك",
              "correct": false
            },
            {
              "text": "ماء",
              "correct": false
            },
            {
              "text": "أريد...",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Quiero...",
          "arabic": "أريد...",
          "isTrue": true
        },
        {
          "type": "multiple_choice",
          "spanish": "Agua",
          "arabic": "ما معنى \"Agua\"؟",
          "options": [
            {
              "text": "القائمة من فضلك",
              "correct": false
            },
            {
              "text": "أريد...",
              "correct": false
            },
            {
              "text": "ماء",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Agua",
          "arabic": "ماء",
          "options": [
            {
              "text": "ماء",
              "correct": true
            },
            {
              "text": "القائمة من فضلك",
              "correct": false
            },
            {
              "text": "أريد...",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Agua",
          "arabic": "القائمة من فضلك",
          "isTrue": false,
          "correctArabic": "ماء"
        },
        {
          "type": "match",
          "spanish": "",
          "arabic": "",
          "matchPairs": [
            {
              "spanish": "El menú, por favor",
              "arabic": "القائمة من فضلك"
            },
            {
              "spanish": "Quiero...",
              "arabic": "أريد..."
            },
            {
              "spanish": "Agua",
              "arabic": "ماء"
            }
          ]
        }
      ]
    },
    {
      "id": "u3l2",
      "title": "الأطباق",
      "details": [
        {
          "type": "flashcard",
          "spanish": "Pollo",
          "arabic": "دجاج"
        },
        {
          "type": "flashcard",
          "spanish": "Pescado",
          "arabic": "سمك"
        },
        {
          "type": "flashcard",
          "spanish": "Carne",
          "arabic": "لحم"
        },
        {
          "type": "multiple_choice",
          "spanish": "Pollo",
          "arabic": "ما معنى \"Pollo\"؟",
          "options": [
            {
              "text": "سمك",
              "correct": false
            },
            {
              "text": "دجاج",
              "correct": true
            },
            {
              "text": "لحم",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Pollo",
          "arabic": "دجاج",
          "options": [
            {
              "text": "دجاج",
              "correct": true
            },
            {
              "text": "سمك",
              "correct": false
            },
            {
              "text": "لحم",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Pollo",
          "arabic": "سمك",
          "isTrue": false,
          "correctArabic": "دجاج"
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "Pescado",
          "arabic": "سمك",
          "options": [
            {
              "text": "Pescado",
              "correct": true
            },
            {
              "text": "Carne",
              "correct": false
            },
            {
              "text": "Pollo",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Pescado",
          "arabic": "سمك",
          "options": [
            {
              "text": "سمك",
              "correct": true
            },
            {
              "text": "لحم",
              "correct": false
            },
            {
              "text": "دجاج",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Pescado",
          "arabic": "لحم",
          "isTrue": false,
          "correctArabic": "سمك"
        },
        {
          "type": "multiple_choice",
          "spanish": "Carne",
          "arabic": "ما معنى \"Carne\"؟",
          "options": [
            {
              "text": "لحم",
              "correct": true
            },
            {
              "text": "سمك",
              "correct": false
            },
            {
              "text": "دجاج",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Carne",
          "arabic": "لحم",
          "options": [
            {
              "text": "سمك",
              "correct": false
            },
            {
              "text": "لحم",
              "correct": true
            },
            {
              "text": "دجاج",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Carne",
          "arabic": "دجاج",
          "isTrue": false,
          "correctArabic": "لحم"
        },
        {
          "type": "match",
          "spanish": "",
          "arabic": "",
          "matchPairs": [
            {
              "spanish": "Pollo",
              "arabic": "دجاج"
            },
            {
              "spanish": "Pescado",
              "arabic": "سمك"
            },
            {
              "spanish": "Carne",
              "arabic": "لحم"
            }
          ]
        }
      ]
    },
    {
      "id": "u3l3",
      "title": "الدفع",
      "details": [
        {
          "type": "flashcard",
          "spanish": "La cuenta, por favor",
          "arabic": "الفاتورة من فضلك"
        },
        {
          "type": "flashcard",
          "spanish": "¿Cuánto cuesta?",
          "arabic": "كم التكلفة؟"
        },
        {
          "type": "flashcard",
          "spanish": "Delicioso",
          "arabic": "لذيذ"
        },
        {
          "type": "multiple_choice",
          "spanish": "La cuenta, por favor",
          "arabic": "ما معنى \"La cuenta, por favor\"؟",
          "options": [
            {
              "text": "كم التكلفة؟",
              "correct": false
            },
            {
              "text": "الفاتورة من فضلك",
              "correct": true
            },
            {
              "text": "لذيذ",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "La cuenta, por favor",
          "arabic": "الفاتورة من فضلك",
          "options": [
            {
              "text": "لذيذ",
              "correct": false
            },
            {
              "text": "كم التكلفة؟",
              "correct": false
            },
            {
              "text": "الفاتورة من فضلك",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "La cuenta, por favor",
          "arabic": "لذيذ",
          "isTrue": false,
          "correctArabic": "الفاتورة من فضلك"
        },
        {
          "type": "arrange",
          "spanish": "La cuenta, por favor",
          "arabic": "الفاتورة من فضلك",
          "arrangeWords": [
            "favor",
            "por",
            "cuenta,",
            "La",
            "Delicioso"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "¿Cuánto cuesta?",
          "arabic": "كم التكلفة؟",
          "options": [
            {
              "text": "Delicioso",
              "correct": false
            },
            {
              "text": "La cuenta, por favor",
              "correct": false
            },
            {
              "text": "¿Cuánto cuesta?",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "¿Cuánto cuesta?",
          "arabic": "كم التكلفة؟",
          "options": [
            {
              "text": "كم التكلفة؟",
              "correct": true
            },
            {
              "text": "لذيذ",
              "correct": false
            },
            {
              "text": "الفاتورة من فضلك",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "¿Cuánto cuesta?",
          "arabic": "كم التكلفة؟",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "¿Cuánto cuesta?",
          "arabic": "كم التكلفة؟",
          "arrangeWords": [
            "Delicioso",
            "cuesta?",
            "¿Cuánto"
          ]
        },
        {
          "type": "multiple_choice",
          "spanish": "Delicioso",
          "arabic": "ما معنى \"Delicioso\"؟",
          "options": [
            {
              "text": "الفاتورة من فضلك",
              "correct": false
            },
            {
              "text": "لذيذ",
              "correct": true
            },
            {
              "text": "كم التكلفة؟",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Delicioso",
          "arabic": "لذيذ",
          "options": [
            {
              "text": "الفاتورة من فضلك",
              "correct": false
            },
            {
              "text": "كم التكلفة؟",
              "correct": false
            },
            {
              "text": "لذيذ",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Delicioso",
          "arabic": "لذيذ",
          "isTrue": true
        },
        {
          "type": "match",
          "spanish": "",
          "arabic": "",
          "matchPairs": [
            {
              "spanish": "La cuenta, por favor",
              "arabic": "الفاتورة من فضلك"
            },
            {
              "spanish": "¿Cuánto cuesta?",
              "arabic": "كم التكلفة؟"
            },
            {
              "spanish": "Delicioso",
              "arabic": "لذيذ"
            }
          ]
        }
      ]
    },
    {
      "id": "u3l4",
      "title": "مشروبات",
      "details": [
        {
          "type": "flashcard",
          "spanish": "El café",
          "arabic": "القهوة"
        },
        {
          "type": "flashcard",
          "spanish": "El té",
          "arabic": "الشاي"
        },
        {
          "type": "flashcard",
          "spanish": "El jugo",
          "arabic": "العصير"
        },
        {
          "type": "multiple_choice",
          "spanish": "El café",
          "arabic": "ما معنى \"El café\"؟",
          "options": [
            {
              "text": "القهوة",
              "correct": true
            },
            {
              "text": "العصير",
              "correct": false
            },
            {
              "text": "الشاي",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El café",
          "arabic": "القهوة",
          "options": [
            {
              "text": "القهوة",
              "correct": true
            },
            {
              "text": "العصير",
              "correct": false
            },
            {
              "text": "الشاي",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El café",
          "arabic": "الشاي",
          "isTrue": false,
          "correctArabic": "القهوة"
        },
        {
          "type": "arrange",
          "spanish": "El café",
          "arabic": "القهوة",
          "arrangeWords": [
            "El",
            "El",
            "café"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "El té",
          "arabic": "الشاي",
          "options": [
            {
              "text": "El jugo",
              "correct": false
            },
            {
              "text": "El café",
              "correct": false
            },
            {
              "text": "El té",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El té",
          "arabic": "الشاي",
          "options": [
            {
              "text": "العصير",
              "correct": false
            },
            {
              "text": "القهوة",
              "correct": false
            },
            {
              "text": "الشاي",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El té",
          "arabic": "الشاي",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "El té",
          "arabic": "الشاي",
          "arrangeWords": [
            "El",
            "té",
            "El"
          ]
        },
        {
          "type": "multiple_choice",
          "spanish": "El jugo",
          "arabic": "ما معنى \"El jugo\"؟",
          "options": [
            {
              "text": "العصير",
              "correct": true
            },
            {
              "text": "القهوة",
              "correct": false
            },
            {
              "text": "الشاي",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El jugo",
          "arabic": "العصير",
          "options": [
            {
              "text": "القهوة",
              "correct": false
            },
            {
              "text": "الشاي",
              "correct": false
            },
            {
              "text": "العصير",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El jugo",
          "arabic": "القهوة",
          "isTrue": false,
          "correctArabic": "العصير"
        },
        {
          "type": "arrange",
          "spanish": "El jugo",
          "arabic": "العصير",
          "arrangeWords": [
            "El",
            "El",
            "jugo"
          ]
        },
        {
          "type": "match",
          "spanish": "",
          "arabic": "",
          "matchPairs": [
            {
              "spanish": "El café",
              "arabic": "القهوة"
            },
            {
              "spanish": "El té",
              "arabic": "الشاي"
            },
            {
              "spanish": "El jugo",
              "arabic": "العصير"
            }
          ]
        }
      ]
    },
    {
      "id": "u3l5",
      "title": "فواكه وخضروات",
      "details": [
        {
          "type": "flashcard",
          "spanish": "La manzana",
          "arabic": "التفاحة"
        },
        {
          "type": "flashcard",
          "spanish": "La naranja",
          "arabic": "البرتقالة"
        },
        {
          "type": "flashcard",
          "spanish": "El tomate",
          "arabic": "الطماطم"
        },
        {
          "type": "flashcard",
          "spanish": "La cebolla",
          "arabic": "البصلة"
        },
        {
          "type": "multiple_choice",
          "spanish": "La manzana",
          "arabic": "ما معنى \"La manzana\"؟",
          "options": [
            {
              "text": "الطماطم",
              "correct": false
            },
            {
              "text": "البرتقالة",
              "correct": false
            },
            {
              "text": "التفاحة",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "La manzana",
          "arabic": "التفاحة",
          "options": [
            {
              "text": "الطماطم",
              "correct": false
            },
            {
              "text": "البرتقالة",
              "correct": false
            },
            {
              "text": "التفاحة",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "La manzana",
          "arabic": "التفاحة",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "La manzana",
          "arabic": "التفاحة",
          "arrangeWords": [
            "La",
            "manzana",
            "El"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "La naranja",
          "arabic": "البرتقالة",
          "options": [
            {
              "text": "La cebolla",
              "correct": false
            },
            {
              "text": "La naranja",
              "correct": true
            },
            {
              "text": "La manzana",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "La naranja",
          "arabic": "البرتقالة",
          "options": [
            {
              "text": "البصلة",
              "correct": false
            },
            {
              "text": "البرتقالة",
              "correct": true
            },
            {
              "text": "التفاحة",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "La naranja",
          "arabic": "البرتقالة",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "La naranja",
          "arabic": "البرتقالة",
          "arrangeWords": [
            "La",
            "La",
            "naranja"
          ]
        },
        {
          "type": "multiple_choice",
          "spanish": "El tomate",
          "arabic": "ما معنى \"El tomate\"؟",
          "options": [
            {
              "text": "البرتقالة",
              "correct": false
            },
            {
              "text": "الطماطم",
              "correct": true
            },
            {
              "text": "التفاحة",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El tomate",
          "arabic": "الطماطم",
          "options": [
            {
              "text": "البرتقالة",
              "correct": false
            },
            {
              "text": "التفاحة",
              "correct": false
            },
            {
              "text": "الطماطم",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El tomate",
          "arabic": "الطماطم",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "El tomate",
          "arabic": "الطماطم",
          "arrangeWords": [
            "El",
            "tomate",
            "La"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "La cebolla",
          "arabic": "البصلة",
          "options": [
            {
              "text": "El tomate",
              "correct": false
            },
            {
              "text": "La naranja",
              "correct": false
            },
            {
              "text": "La cebolla",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "La cebolla",
          "arabic": "البصلة",
          "options": [
            {
              "text": "البصلة",
              "correct": true
            },
            {
              "text": "البرتقالة",
              "correct": false
            },
            {
              "text": "الطماطم",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "La cebolla",
          "arabic": "البصلة",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "La cebolla",
          "arabic": "البصلة",
          "arrangeWords": [
            "La",
            "cebolla",
            "El"
          ]
        },
        {
          "type": "match",
          "spanish": "",
          "arabic": "",
          "matchPairs": [
            {
              "spanish": "La manzana",
              "arabic": "التفاحة"
            },
            {
              "spanish": "La naranja",
              "arabic": "البرتقالة"
            },
            {
              "spanish": "El tomate",
              "arabic": "الطماطم"
            },
            {
              "spanish": "La cebolla",
              "arabic": "البصلة"
            }
          ]
        }
      ]
    },
    {
      "id": "u3l6",
      "title": "حلويات",
      "details": [
        {
          "type": "flashcard",
          "spanish": "El postre",
          "arabic": "الحلوى"
        },
        {
          "type": "flashcard",
          "spanish": "El pastel",
          "arabic": "الكعكة"
        },
        {
          "type": "flashcard",
          "spanish": "El helado",
          "arabic": "المثلجات"
        },
        {
          "type": "flashcard",
          "spanish": "Dulce",
          "arabic": "حلو"
        },
        {
          "type": "multiple_choice",
          "spanish": "El postre",
          "arabic": "ما معنى \"El postre\"؟",
          "options": [
            {
              "text": "الحلوى",
              "correct": true
            },
            {
              "text": "حلو",
              "correct": false
            },
            {
              "text": "المثلجات",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El postre",
          "arabic": "الحلوى",
          "options": [
            {
              "text": "المثلجات",
              "correct": false
            },
            {
              "text": "الحلوى",
              "correct": true
            },
            {
              "text": "حلو",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El postre",
          "arabic": "المثلجات",
          "isTrue": false,
          "correctArabic": "الحلوى"
        },
        {
          "type": "arrange",
          "spanish": "El postre",
          "arabic": "الحلوى",
          "arrangeWords": [
            "El",
            "postre",
            "El"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "El pastel",
          "arabic": "الكعكة",
          "options": [
            {
              "text": "El postre",
              "correct": false
            },
            {
              "text": "El helado",
              "correct": false
            },
            {
              "text": "El pastel",
              "correct": true
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El pastel",
          "arabic": "الكعكة",
          "options": [
            {
              "text": "المثلجات",
              "correct": false
            },
            {
              "text": "الكعكة",
              "correct": true
            },
            {
              "text": "الحلوى",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El pastel",
          "arabic": "الكعكة",
          "isTrue": true
        },
        {
          "type": "arrange",
          "spanish": "El pastel",
          "arabic": "الكعكة",
          "arrangeWords": [
            "El",
            "pastel",
            "El"
          ]
        },
        {
          "type": "multiple_choice",
          "spanish": "El helado",
          "arabic": "ما معنى \"El helado\"؟",
          "options": [
            {
              "text": "الكعكة",
              "correct": false
            },
            {
              "text": "المثلجات",
              "correct": true
            },
            {
              "text": "حلو",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "El helado",
          "arabic": "المثلجات",
          "options": [
            {
              "text": "حلو",
              "correct": false
            },
            {
              "text": "المثلجات",
              "correct": true
            },
            {
              "text": "الكعكة",
              "correct": false
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "El helado",
          "arabic": "الكعكة",
          "isTrue": false,
          "correctArabic": "المثلجات"
        },
        {
          "type": "arrange",
          "spanish": "El helado",
          "arabic": "المثلجات",
          "arrangeWords": [
            "helado",
            "El",
            "El"
          ]
        },
        {
          "type": "arabic_to_spanish",
          "spanish": "Dulce",
          "arabic": "حلو",
          "options": [
            {
              "text": "El helado",
              "correct": false
            },
            {
              "text": "Dulce",
              "correct": true
            },
            {
              "text": "El postre",
              "correct": false
            }
          ]
        },
        {
          "type": "listening",
          "spanish": "Dulce",
          "arabic": "حلو",
          "options": [
            {
              "text": "الحلوى",
              "correct": false
            },
            {
              "text": "المثلجات",
              "correct": false
            },
            {
              "text": "حلو",
              "correct": true
            }
          ]
        },
        {
          "type": "true_false",
          "spanish": "Dulce",
          "arabic": "الحلوى",
          "isTrue": false,
          "correctArabic": "حلو"
        },
        {
          "type": "match",
          "spanish": "",
          "arabic": "",
          "matchPairs": [
            {
              "spanish": "El postre",
              "arabic": "الحلوى"
            },
            {
              "spanish": "El pastel",
              "arabic": "الكعكة"
            },
            {
              "spanish": "El helado",
              "arabic": "المثلجات"
            },
            {
              "spanish": "Dulce",
              "arabic": "حلو"
            }
          ]
        }
      ]
    },
    {
      "id": "u3_exam",
      "title": "إختبار الوحدة 3",
      "details": []
    }
  ]
};

