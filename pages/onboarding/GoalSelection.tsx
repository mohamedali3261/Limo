import { useState } from 'react';
import { Target, Briefcase, GraduationCap, Plane, Users, Heart, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface Goal {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
}

const goals: Goal[] = [
  {
    id: 'career',
    title: 'التطور المهني',
    description: 'تحسين فرصي في العمل والحصول على وظيفة أفضل',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'education',
    title: 'الدراسة والتعليم',
    description: 'الاستعداد للدراسة في الخارج أو اجتياز الامتحانات',
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 'travel',
    title: 'السفر والسياحة',
    description: 'التواصل أثناء السفر واستكشاف العالم',
    icon: Plane,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'social',
    title: 'التواصل الاجتماعي',
    description: 'التحدث مع الأصدقاء والعائلة بلغة جديدة',
    icon: Users,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'culture',
    title: 'الثقافة والهواية',
    description: 'حب اللغة والثقافة والتعلم للمتعة',
    icon: Heart,
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'other',
    title: 'أسباب أخرى',
    description: 'لدي أهداف أخرى لتعلم اللغة',
    icon: Target,
    color: 'from-indigo-500 to-purple-500'
  }
];

interface GoalSelectionProps {
  onNext: (goal: string) => void;
  onBack: () => void;
}

export default function GoalSelection({ onNext, onBack }: GoalSelectionProps) {
  const [selectedGoal, setSelectedGoal] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleGoalSelect = (id: string) => {
    setSelectedGoal(id);
  };

  const handleContinue = () => {
    if (!selectedGoal) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      onNext(selectedGoal);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="w-full max-w-5xl"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl mb-6 shadow-lg"
          >
            <Target className="text-white" size={40} />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            ما هو هدفك من التعلم؟
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 font-bold"
          >
            سنساعدك على تحقيق هدفك بأفضل طريقة ممكنة
          </motion.p>
        </div>

        {/* Goal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <motion.button
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleGoalSelect(goal.id)}
                className={`relative group p-6 rounded-3xl border-4 transition-all duration-300 text-right ${
                  selectedGoal === goal.id
                    ? 'border-purple-500 bg-white shadow-2xl scale-105'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl'
                }`}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${goal.color} mb-4 shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>

                {/* Goal Info */}
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-gray-900">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                {/* Selection Indicator */}
                {selectedGoal === goal.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center"
                  >
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between"
        >
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-300"
          >
            <ArrowLeft
              className="transition-transform duration-300 group-hover:-translate-x-1"
              size={24}
            />
            <span>رجوع</span>
          </button>

          <button
            onClick={handleContinue}
            disabled={!selectedGoal || isAnimating}
            className={`group inline-flex items-center gap-3 px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-wider transition-all duration-300 ${
              selectedGoal && !isAnimating
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span>متابعة</span>
            <ArrowRight
              className={`transition-transform duration-300 ${
                selectedGoal ? 'group-hover:translate-x-1' : ''
              }`}
              size={24}
            />
          </button>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mt-12 flex justify-center gap-2">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`h-2 rounded-full transition-all duration-300 ${
                step === 2 ? 'w-8 bg-purple-600' : step < 2 ? 'w-2 bg-purple-400' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
