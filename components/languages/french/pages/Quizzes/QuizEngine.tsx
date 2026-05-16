import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const quizQuestions = [
  {
    id: 1,
    question: "كيف تقول 'مرحباً' بالفرنسية في الصباح؟",
    options: ["Bonsoir", "Bonjour", "Merci", "Salut"],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "أي من هذه الكلمات تعني 'ولد'؟",
    options: ["Fille", "Homme", "Garçon", "Femme"],
    correctAnswer: 2
  },
  {
    id: 3,
    question: "ما هو تصريف فعل Être (يكون) مع الضمير Je؟",
    options: ["Es", "Est", "Sommes", "Suis"],
    correctAnswer: 3
  },
  {
    id: 4,
    question: "كيف تسأل 'ما اسمك؟'",
    options: ["Comment allez-vous?", "Quel âge as-tu?", "Comment tu t'appelles?", "Où habites-tu?"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "ما معنى كلمة 'Voiture' ؟",
    options: ["قطار", "دراجة", "طائرة", "سيارة"],
    correctAnswer: 3
  },
  {
    id: 6,
    question: "اختر الترجمة الصحيحة لـ 'أنا أحب التفاح':",
    options: ["J'aime les pommes", "Je mange une banane", "Il aime les oranges", "Nous voulons des pommes"],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "الرقم 15 بالفرنسية هو:",
    options: ["Cinq", "Quinze", "Cinquante", "Vingt"],
    correctAnswer: 1
  },
  {
    id: 8,
    question: "ماذا تعني عبارة 'S'il vous plaît' ؟",
    options: ["شكرا جزيلا", "عفوا", "من فضلك", "إلى اللقاء"],
    correctAnswer: 2
  },
  {
    id: 9,
    question: "أي من الكلمات التالية هي لون أحمر؟",
    options: ["Bleu", "Rouge", "Vert", "Jaune"],
    correctAnswer: 1
  },
  {
    id: 10,
    question: "لتطلب الحساب في المطعم، ماذا تقول؟",
    options: ["L'addition, s'il vous plaît", "Le menu", "Je suis fatigué", "Où est la gare ?"],
    correctAnswer: 0
  },
  {
    id: 11,
    question: "تصريف فعل Avoir (يملك) مع الضمير Tu هو:",
    options: ["Ai", "A", "Avons", "As"],
    correctAnswer: 3
  },
  {
    id: 12,
    question: "كيف تقول 'الجو بارد'؟",
    options: ["Il fait chaud", "Il fait froid", "Il pleut", "Il neige"],
    correctAnswer: 1
  },
  {
    id: 13,
    question: "ما معنى كلمة 'Chien'؟",
    options: ["قطة", "كلب", "عصفور", "سمكة"],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "أي من هذه الأيام هو 'الاثنين'؟",
    options: ["Mardi", "Lundi", "Jeudi", "Dimanche"],
    correctAnswer: 1
  },
  {
    id: 15,
    question: "الترجمة الصحيحة لـ 'أنا أستيقظ':",
    options: ["Je me couche", "Je m'habille", "Je me lève", "Je me lave"],
    correctAnswer: 2
  },
  {
    id: 16,
    question: "ما لون الشمس؟ (بالفرنسية)",
    options: ["Bleu", "Rouge", "Jaune", "Noir"],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "كلمة 'Gare' تعني:",
    options: ["مطار", "محطة قطار", "موقف حافلات", "مرفأ"],
    correctAnswer: 1
  },
  {
    id: 18,
    question: "كيف تقول 'إلى اللقاء'؟",
    options: ["Salut", "Bonjour", "Au revoir", "Merci"],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "من أفراد العائلة، كلمة 'Mère' تعني:",
    options: ["أخ", "أخت", "أب", "أم"],
    correctAnswer: 3
  },
  {
    id: 20,
    question: "أي فعل يعني 'يحب'؟",
    options: ["Aimer", "Manger", "Dormir", "Parler"],
    correctAnswer: 0
  }
];

export const QuizEngine: FC = () => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const question = quizQuestions[currentQuestionIdx];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === question.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx(idx => idx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <Card className="text-center py-16 px-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          className="w-24 h-24 mx-auto bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mb-6"
        >
          <Trophy className="w-12 h-12" />
        </motion.div>
        <h2 className="text-3xl font-bold text-slate-800 mb-4">النتيجة النهائية</h2>
        <p className="text-slate-600 text-lg mb-8">
          لقد أجبت بشكل صحيح على <span className="font-bold text-blue-600 mx-1">{score}</span> من أصل <span className="font-bold mx-1">{quizQuestions.length}</span> أسئلة.
        </p>
        <Button onClick={handleRestart} size="lg" className="gap-2 rounded-xl">
          <RotateCcw className="w-5 h-5" />
          إعادة الاختبار
        </Button>
      </Card>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <span className="text-sm font-bold text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full">
          السؤال {currentQuestionIdx + 1} من {quizQuestions.length}
        </span>
        <div className="flex gap-1">
          {quizQuestions.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2 rounded-full transition-all ${
                idx === currentQuestionIdx 
                  ? 'w-8 bg-blue-600' 
                  : idx < currentQuestionIdx 
                    ? 'w-2 bg-blue-300' 
                    : 'w-2 bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestionIdx}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 leading-relaxed">
              {question.question}
            </h2>

            <div className="flex flex-col gap-3">
              {question.options.map((option, idx) => {
                let optionClass = "border-slate-200 bg-white hover:bg-slate-50 text-slate-700";
                let Icon = null;
                
                if (isAnswered) {
                  if (idx === question.correctAnswer) {
                    optionClass = "border-teal-500 bg-teal-50 text-teal-800 ring-1 ring-teal-500";
                    Icon = CheckCircle2;
                  } else if (idx === selectedOption) {
                    optionClass = "border-rose-500 bg-rose-50 text-rose-800 ring-1 ring-rose-500";
                    Icon = XCircle;
                  } else {
                    optionClass = "border-slate-100 bg-slate-50/50 text-slate-400 opacity-50";
                  }
                } else if (selectedOption === idx) {
                  optionClass = "border-blue-500 bg-blue-50 text-blue-800 ring-1 ring-blue-500";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={isAnswered}
                    className={`relative w-full text-right p-4 rounded-xl border text-lg transition-all duration-200 flex items-center justify-between ${optionClass}`}
                  >
                    <span>{option}</span>
                    {Icon && <Icon className="w-6 h-6" />}
                  </button>
                );
              })}
            </div>

            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex justify-end"
              >
                <Button onClick={handleNext} className="gap-2 pr-5 rounded-xl block">
                  {currentQuestionIdx < quizQuestions.length - 1 ? 'السؤال التالي' : 'عرض النتيجة'}
                  <ArrowRight className="w-5 h-5 inline-block mr-2" />
                </Button>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
