import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Question {
  id: number;
  situationId: number;
  situationTitle: string;
  question: string;
  questionAr: string;
  options: string[];
  correctAnswer: number;
}

export default function ComprehensiveQuiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAllQuestions();
  }, []);

  const loadAllQuestions = async () => {
    try {
      const indexResponse = await fetch('/data/conversations/index.json');
      const situations = await indexResponse.json();
      
      let allQuestions: Question[] = [];
      
      for (const situation of situations) {
        const response = await fetch(`/data/conversations/${situation.file}`);
        const data = await response.json();
        
        if (data.quiz && data.quiz.questions) {
          const questionsWithSituation = data.quiz.questions.map((q: any) => ({
            ...q,
            situationId: situation.id,
            situationTitle: situation.title
          }));
          allQuestions = [...allQuestions, ...questionsWithSituation];
        }
      }
      
      // Shuffle questions
      allQuestions = allQuestions.sort(() => Math.random() - 0.5);
      setQuestions(allQuestions);
      setLoading(false);
    } catch (err) {
      console.error('Error loading questions:', err);
      setLoading(false);
    }
  };

  const handleAnswer = (index: number) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);
    
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    loadAllQuestions();
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setShowResults(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-primary mx-auto mb-4"></div>
          <p className="text-xl font-bold text-gray-600">جاري تحميل الاختبار الشامل...</p>
        </div>
      </div>
    );
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 pb-32">
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-8 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => navigate('/voice-conversation')}
              className="flex items-center gap-2 mb-4 hover:bg-white/20 px-4 py-2 rounded-xl transition-all"
            >
              <ArrowLeft size={20} />
              <span className="font-bold">رجوع</span>
            </button>
            <h1 className="text-4xl font-black">الاختبار الشامل</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 shadow-lg text-center"
          >
            <h2 className="text-3xl font-black mb-6 text-primary">النتائج النهائية</h2>
            
            <div className="mb-8">
              <div className="text-7xl font-black text-primary mb-4">{percentage}%</div>
              <p className="text-2xl font-bold text-gray-600">
                {score} من {questions.length} إجابات صحيحة
              </p>
            </div>

            <div className="mb-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl">
              <p className="text-lg font-bold text-gray-700">
                {percentage >= 80 ? '🎉 ممتاز! أنت متقن للمحادثات الإنجليزية' : 
                 percentage >= 60 ? '👍 جيد! استمر في التدريب' :
                 '📚 حاول مرة أخرى وركز على الأسئلة التي أخطأت فيها'}
              </p>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={resetQuiz}
                className="px-8 py-3 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all"
              >
                إعادة الاختبار
              </button>
              <button
                onClick={() => navigate('/voice-conversation')}
                className="px-8 py-3 bg-gray-300 text-gray-700 font-bold rounded-2xl hover:bg-gray-400 transition-all"
              >
                العودة للمحادثات
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-bold text-gray-600">لم يتم العثور على أسئلة</p>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 pb-32">
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-8 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => navigate('/voice-conversation')}
            className="flex items-center gap-2 mb-4 hover:bg-white/20 px-4 py-2 rounded-xl transition-all"
          >
            <ArrowLeft size={20} />
            <span className="font-bold">رجوع</span>
          </button>
          <h1 className="text-4xl font-black mb-2">الاختبار الشامل</h1>
          <p className="text-xl opacity-90">اختبر معلوماتك في جميع المحادثات</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="font-bold text-gray-600">السؤال {currentQuestion + 1} من {questions.length}</span>
            <span className="font-bold text-primary">{score} نقاط</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-primary h-3 rounded-full transition-all"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-lg mb-8"
        >
          <div className="mb-4 p-3 bg-blue-100 rounded-xl">
            <p className="text-sm font-bold text-blue-700">{question.situationTitle}</p>
          </div>
          
          <h2 className="text-2xl font-black text-gray-800 mb-2">{question.question}</h2>
          <p className="text-lg text-gray-600 mb-8">{question.questionAr}</p>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                whileHover={!answered ? { scale: 1.02 } : {}}
                className={`w-full p-4 rounded-2xl font-bold text-lg transition-all text-left ${
                  selectedAnswer === index
                    ? isCorrect
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : answered && index === question.correctAnswer
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                } ${answered ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {selectedAnswer === index && (
                    isCorrect ? <CheckCircle size={24} /> : <XCircle size={24} />
                  )}
                  {answered && index === question.correctAnswer && selectedAnswer !== index && (
                    <CheckCircle size={24} />
                  )}
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Next Button */}
        {answered && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={handleNext}
            className="w-full py-4 bg-primary text-white font-bold rounded-2xl hover:bg-primary-dark transition-all text-lg"
          >
            {currentQuestion === questions.length - 1 ? 'عرض النتائج' : 'السؤال التالي'}
          </motion.button>
        )}
      </div>
    </div>
  );
}
