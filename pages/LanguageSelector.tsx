import { useNavigate } from 'react-router-dom';
import { Globe, ArrowRight, Sparkles, Zap, Award, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';
import FrenchFlag from '../components/languages/flags/FrenchFlag';
import EnglishFlag from '../components/languages/flags/EnglishFlag';
import SpanishFlag from '../components/languages/flags/SpanishFlag';
import GermanFlag from '../components/languages/flags/GermanFlag';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: React.ComponentType;
  color: string;
  description: string;
  route: string;
}

const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'الإنجليزية',
    flag: EnglishFlag,
    color: 'from-indigo-500 to-blue-600',
    description: 'تعلم اللغة الإنجليزية من الصفر',
    route: '/learning'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'الفرنسية',
    flag: FrenchFlag,
    color: 'from-blue-500 to-purple-600',
    description: 'تعلم اللغة الفرنسية بطريقة تفاعلية',
    route: '/french'
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'الألمانية',
    flag: GermanFlag,
    color: 'from-yellow-500 to-amber-600',
    description: 'تعلم اللغة الألمانية خطوة بخطوة',
    route: '/german'
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'الإسبانية',
    flag: SpanishFlag,
    color: 'from-red-500 to-orange-600',
    description: 'تعلم اللغة الإسبانية بسهولة',
    route: '/spanish'
  }
];

export default function LanguageSelector() {
  const navigate = useNavigate();

  const handleLanguageSelect = (route: string, code: string) => {
    // Save selected language
    localStorage.setItem('limohero_selected_language', code);
    
    // Navigate to language route
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mb-8 shadow-2xl"
          >
            <Globe className="text-white" size={48} />
          </motion.div>
          
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            اختر لغتك
          </h1>
          
          <p className="text-xl text-gray-600 font-bold">
            ابدأ رحلتك في تعلم لغة جديدة وطور مهاراتك اللغوية
          </p>
        </div>

        {/* Language Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {languages.map((language, index) => {
            const FlagComponent = language.flag;
            return (
              <motion.button
                key={language.code}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleLanguageSelect(language.route, language.code)}
                className="group relative p-8 rounded-3xl border-2 border-gray-200 bg-white hover:border-purple-500 hover:shadow-2xl transition-all duration-300 text-center overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${language.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Flag */}
                <div className="w-full h-20 rounded-xl overflow-hidden mb-6 shadow-md border border-gray-200 relative z-10">
                  <FlagComponent />
                </div>

                {/* Language Info */}
                <div className="space-y-3 relative z-10">
                  <h3 className="text-2xl font-black text-gray-900">
                    {language.nativeName}
                  </h3>
                  <p className="text-sm font-bold text-gray-500">
                    {language.name}
                  </p>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    {language.description}
                  </p>
                </div>

                {/* Gradient Bar */}
                <div className={`mt-6 h-2 rounded-full bg-gradient-to-r ${language.color} relative z-10`} />

                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 relative z-10"
                >
                  <ArrowRight className="text-purple-600" size={24} />
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-blue-900">دروس تفاعلية</h3>
            </div>
            <p className="text-sm text-blue-800">تعلم من خلال ألعاب وتمارين ممتعة وفعالة</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-amber-500 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-amber-900">تقدم سريع</h3>
            </div>
            <p className="text-sm text-amber-800">اكسب نقاط وارتقِ المستويات مع كل درس</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border border-green-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500 rounded-lg">
                <Award className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-green-900">إنجازات</h3>
            </div>
            <p className="text-sm text-green-800">اكسب شارات وإنجازات حصرية</p>
          </motion.div>
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-3xl p-8 shadow-lg text-center border-2 border-purple-100"
        >
          <p className="text-gray-700 font-bold text-lg flex items-center justify-center gap-2">
            <Lightbulb className="text-yellow-600" size={24} />
            يمكنك التبديل بين اللغات في أي وقت من القائمة الرئيسية
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
