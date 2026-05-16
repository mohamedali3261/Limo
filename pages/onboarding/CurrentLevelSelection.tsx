import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowLeft, Zap, Target, BookOpen, Crown } from 'lucide-react';

interface CurrentLevelSelectionProps {
  language: string;
  onNext: (level: string) => void;
  onBack: () => void;
}

const levelOptions = [
  {
    id: 'beginner',
    name: 'ابدأ من الصفر',
    description: 'لم أتعلم هذه اللغة من قبل',
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-700'
  },
  {
    id: 'elementary',
    name: 'مستوى أساسي',
    description: 'أعرف بعض الكلمات والعبارات الأساسية',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700'
  },
  {
    id: 'intermediate',
    name: 'مستوى متوسط',
    description: 'أستطيع التحدث والفهم بشكل أساسي',
    icon: Target,
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700'
  },
  {
    id: 'advanced',
    name: 'مستوى متقدم',
    description: 'أتحدث اللغة بطلاقة وأفهم معظم الأشياء',
    icon: Crown,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700'
  }
];

const languageNames: Record<string, string> = {
  en: 'الإنجليزية',
  fr: 'الفرنسية',
  de: 'الألمانية',
  es: 'الإسبانية'
};

export default function CurrentLevelSelection({ language, onNext, onBack }: CurrentLevelSelectionProps) {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = (levelId: string) => {
    setSelectedLevel(levelId);
    setIsLoading(true);
    
    // Save the selected level to localStorage
    localStorage.setItem(`${language}_current_level`, levelId);
    
    setTimeout(() => {
      setIsLoading(false);
      onNext(levelId);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        className="w-full max-w-4xl relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            ما هو مستواك الحالي؟ 📊
          </h1>
          <p className="text-xl text-gray-300 font-bold">
            في {languageNames[language]}
          </p>
        </motion.div>

        {/* Level Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {levelOptions.map((level, index) => {
            const Icon = level.icon;
            const isSelected = selectedLevel === level.id;

            return (
              <motion.button
                key={level.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelect(level.id)}
                disabled={isLoading}
                className={`relative overflow-hidden rounded-3xl p-8 text-left transition-all duration-300 border-2 ${
                  isSelected
                    ? `${level.bgColor} ${level.borderColor} shadow-2xl ring-2 ring-offset-2 ring-offset-slate-900`
                    : 'bg-white/10 border-white/20 hover:border-white/40 hover:bg-white/15'
                }`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${level.color} opacity-0 ${isSelected ? 'opacity-10' : ''} transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${level.bgColor}`}>
                      <Icon className={`w-8 h-8 ${level.textColor}`} />
                    </div>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    )}
                  </div>

                  <h3 className={`text-2xl font-black mb-2 ${isSelected ? level.textColor : 'text-white'}`}>
                    {level.name}
                  </h3>
                  <p className={`text-sm font-bold ${isSelected ? level.textColor : 'text-gray-300'}`}>
                    {level.description}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onBack}
            disabled={isLoading}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-lg bg-white/10 text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-50"
          >
            <ArrowLeft
              className="transition-transform duration-300 group-hover:-translate-x-1"
              size={24}
            />
            <span>رجوع</span>
          </button>

          <button
            onClick={() => selectedLevel && handleSelect(selectedLevel)}
            disabled={!selectedLevel || isLoading}
            className={`group inline-flex items-center gap-3 px-12 py-5 rounded-2xl font-black text-xl uppercase tracking-wider transition-all duration-300 ${
              selectedLevel && !isLoading
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:scale-105'
                : 'bg-gray-400 text-gray-600 cursor-not-allowed'
            }`}
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                />
                <span>جاري التحميل...</span>
              </>
            ) : (
              <>
                <span>التالي</span>
                <ArrowRight
                  className={`transition-transform duration-300 ${selectedLevel ? 'group-hover:translate-x-1' : ''}`}
                  size={24}
                />
              </>
            )}
          </button>
        </motion.div>

        {/* Info Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-sm text-gray-400 font-bold mt-8"
        >
          يمكنك تغيير مستواك لاحقاً من إعدادات الحساب
        </motion.p>
      </motion.div>
    </div>
  );
}
