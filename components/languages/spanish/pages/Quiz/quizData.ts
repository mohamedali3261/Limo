export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const quizQuestions: Question[] = [
  {
    id: 1,
    question: "ما معنى كلمة 'Gracias'؟",
    options: ["مرحباً", "شكراً", "وداعاً", "آسف"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "كيف تقول 'صباح الخير' بالإسبانية؟",
    options: ["Buenas noches", "Buenas tardes", "Buenos días", "Hola"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "ماذا تعني '¿Cómo te llamas?'؟",
    options: ["أين تعيش؟", "كم عمرك؟", "كيف حالك؟", "ما اسمك؟"],
    correctAnswer: 3
  },
  {
    id: 4,
    question: "كلمة 'Agua' تعني:",
    options: ["ماء", "نار", "هواء", "أرض"],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "كيف تقول 'كتاب' بالإسبانية؟",
    options: ["Coche", "Libro", "Gato", "Casa"],
    correctAnswer: 1
  },
  {
    id: 6,
    question: "ما معنى كلمة 'Perro'؟",
    options: ["قطة", "طائر", "كلب", "أسد"],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "كيف تقول 'من فضلك' بالإسبانية؟",
    options: ["De nada", "Por favor", "Perdón", "Gracias"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "ماذا تعني '¿Dónde está el baño?'؟",
    options: ["أين الفندق؟", "أين المطعم؟", "أين المحطة؟", "أين يوجد الحمام؟"],
    correctAnswer: 3
  },
  {
    id: 9,
    question: "كلمة 'Rojo' تدل على أي لون؟",
    options: ["أزرق", "أحمر", "أصفر", "أخضر"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "كيف تقول 'أنا آسف' بالإسبانية؟",
    options: ["Lo siento", "Mucho gusto", "Encantado", "Permiso"],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "ما هو 'El gato'؟",
    options: ["الكلب", "الطائر", "القطة", "الحصان"],
    correctAnswer: 2
  },
  {
    id: 12,
    question: "كيف تطلب 'الفاتورة' في المطعم؟",
    options: ["El menú", "La cuenta", "El agua", "La comida"],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "كلمة 'Grande' تعني:",
    options: ["كبير", "صغير", "جديد", "قديم"],
    correctAnswer: 0
  },
  {
    id: 14,
    question: "كيف تقول 'الرجل' و 'المرأة'؟",
    options: ["El niño y la niña", "El padre y la madre", "El hombre y la mujer", "El abuelo y la abuela"],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "ماذا تعني '¿Qué tal?'؟",
    options: ["كيف حالك؟", "ما اسمك؟", "من أين أنت؟", "أين تعيش؟"],
    correctAnswer: 0
  },
  {
    id: 16,
    question: "كيف تقول 'وداعاً'؟",
    options: ["Hola", "Adiós", "Gracias", "Por favor"],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "ما هو 'El abuelo'؟",
    options: ["الأب", "الأخ", "العم", "الجد"],
    correctAnswer: 3
  },
  {
    id: 18,
    question: "كلمة 'Frío' تعني:",
    options: ["حار", "مشمس", "بارد", "غائم"],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "كيف تقول 'القطار' و 'الطائرة' بالإسبانية؟",
    options: ["El coche y el taxi", "El tren y el avión", "El autobús y la bicicleta", "El metro y el barco"],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "ما معنى 'Feliz'؟",
    options: ["حزين", "غاضب", "متعب", "سعيد"],
    correctAnswer: 3
  }
];
