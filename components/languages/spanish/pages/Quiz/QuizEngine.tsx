import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowLeft, RotateCcw } from 'lucide-react';
import { quizQuestions } from './quizData';

export function QuizEngine() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = quizQuestions[currentQuestion];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-10 text-center border border-stone-200 shadow-xl shadow-teal-900/5"
        >
          <div className="w-24 h-24 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold">{score}/{quizQuestions.length}</span>
          </div>
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            {score === quizQuestions.length ? 'عمل رائع! نتيجة مثالية 🌟' : 'نهاية الاختبار! أحسنت 👏'}
          </h2>
          <p className="text-stone-500 mb-10">
            لقد أتممت الاختبار بنجاح. الممارسة المستمرة هي مفتاح إتقان الإسبانية.
          </p>
          
          <button
            onClick={resetQuiz}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-2xl font-bold inline-flex items-center gap-2 transition-colors"
          >
            <RotateCcw size={20} />
            أعد الاختبار
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="mb-8 flex justify-between items-center text-sm font-bold text-stone-400">
        <span>السؤال {currentQuestion + 1} من {quizQuestions.length}</span>
        <span>النتيجة: {score}</span>
      </div>

      <div className="w-full bg-stone-100 rounded-full h-2 mb-10 overflow-hidden">
        <motion.div
          className="bg-teal-500 h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentQuestion) / quizQuestions.length) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-stone-800 mb-8" dir="auto">{question.question}</h2>

          <div className="grid gap-4">
            {question.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = index === question.correctAnswer;
              
              let optionStyle = "bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100";
              
              if (isAnswered) {
                if (isCorrect) {
                  optionStyle = "bg-green-50 border-green-200 text-green-700";
                } else if (isSelected && !isCorrect) {
                  optionStyle = "bg-red-50 border-red-200 text-red-700";
                } else {
                  optionStyle = "bg-stone-50 border-stone-100 text-stone-400 opacity-50";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                  dir="auto"
                  className={`relative p-5 w-full text-right rounded-2xl border-2 font-bold text-lg transition-all flex items-center justify-between ${optionStyle}`}
                >
                  <span>{option}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="text-green-500" size={24} />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="text-red-500" size={24} />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 flex justify-end"
              >
                <button
                  onClick={handleNext}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors"
                >
                  {currentQuestion < quizQuestions.length - 1 ? 'السؤال التالي' : 'عرض النتيجة'}
                  <ArrowLeft size={20} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
