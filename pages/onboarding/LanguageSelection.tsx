import { useState } from 'react';
import { Globe, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  color: string;
  description: string;
  route: string;
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'الإنجليزية',
    flag: '🇬🇧',
    color: 'from-blue-500 to-blue-600',
    description: 'تعلم اللغة الإنجليزية من الصفر',
    route: '/'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'الفرنسية',
    flag: '🇫🇷',
    color: 'from-indigo-500 to-purple-600',
    description: 'تعلم اللغة الفرنسية بطريقة تفاعلية',
    route: '/french'
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'الألمانية',
    flag: '🇩🇪',
    color: 'from-yellow-500 to-red-600',
    description: 'تعلم اللغة الألمانية خطوة بخطوة',
    route: '/german'
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'الإسبانية',
    flag: '🇪🇸',
    color: 'from-red-500 to-yellow-500',
    description: 'تعلم اللغة الإسبانية بسهولة',
    route: '/spanish'
  }
];

interface LanguageSelectionProps {
  onNext: (language: string) => void;
  onBack?: () => void;
}

export default function LanguageSelection({ onNext, onBack }: LanguageSelectionProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
  };

  const handleContinue = () => {
    if (!selectedLanguage) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      onNext(selectedLanguage);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="w-full max-w-5xl"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mb-6 shadow-lg"
          >
            <Globe className="text-white" size={40} />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            اختر اللغة التي تريد تعلمها
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 font-bold"
          >
            ابدأ رحلتك في تعلم لغة جديدة اليوم
          </motion.p>
        </div>

        {/* Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {languages.map((language, index) => (
            <motion.button
              key={language.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              onClick={() => handleLanguageSelect(language.code)}
              className={`relative group p-8 rounded-3xl border-4 transition-all duration-300 text-right ${
                selectedLanguage === language.code
                  ? 'border-purple-500 bg-white shadow-2xl scale-105'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-xl'
              }`}
            >
              {/* Selected Badge */}
              {selectedLanguage === language.code && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="text-white" size={24} />
                </motion.div>
              )}

              {/* Flag */}
              <div className="text-6xl mb-4 text-center">{language.flag}</div>

              {/* Language Info */}
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-gray-900">
                  {language.nativeName}
                </h3>
                <p className="text-sm font-bold text-gray-500">
                  {language.name}
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  {language.description}
                </p>
              </div>

              {/* Gradient Bar */}
              <div className={`mt-6 h-2 rounded-full bg-gradient-to-r ${language.color}`} />
            </motion.button>
          ))}
        </div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {onBack && (
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
          )}
          
          <button
            onClick={handleContinue}
            disabled={!selectedLanguage || isAnimating}
            className={`group inline-flex items-center gap-3 px-12 py-5 rounded-2xl font-black text-lg uppercase tracking-wider transition-all duration-300 ${
              selectedLanguage && !isAnimating
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span>متابعة</span>
            <ArrowRight
              className={`transition-transform duration-300 ${
                selectedLanguage ? 'group-hover:translate-x-1' : ''
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
                step === 2 ? 'w-8 bg-purple-600' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
