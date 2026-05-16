import { useState, useEffect } from 'react';
import { Sparkles, Rocket, ArrowLeft, PartyPopper } from 'lucide-react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { useAuthStore } from '../../lib/store/auth';

interface WelcomeScreenProps {
  username: string;
  language: string;
  goal: string;
  currentLevel: string;
  onComplete: () => void;
  onBack: () => void;
}

const languageNames: Record<string, string> = {
  en: 'الإنجليزية',
  fr: 'الفرنسية',
  de: 'الألمانية',
  es: 'الإسبانية'
};

const goalNames: Record<string, string> = {
  career: 'التطور المهني',
  education: 'الدراسة والتعليم',
  travel: 'السفر والسياحة',
  social: 'التواصل الاجتماعي',
  culture: 'الثقافة والهواية',
  other: 'أسباب أخرى'
};

const levelNames: Record<string, string> = {
  beginner: 'مبتدئ',
  elementary: 'أساسي',
  intermediate: 'متوسط',
  advanced: 'متقدم'
};

export default function WelcomeScreen({ username, language, goal, currentLevel, onComplete, onBack }: WelcomeScreenProps) {
  const [isReady, setIsReady] = useState(false);
  const { login } = useAuthStore();

  useEffect(() => {
    // Trigger confetti animation
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    setIsReady(true);
    
    // Update user with username and language
    const currentUser = JSON.parse(localStorage.getItem('memohero_current_user') || '{}');
    const updatedUser = {
      ...currentUser,
      username: username,
      language: language,
      currentLevel: currentLevel,
      onboarding_completed: true
    };
    
    localStorage.setItem('memohero_current_user', JSON.stringify(updatedUser));
    localStorage.setItem(`${language}_current_level`, currentLevel);
    
    // Update auth store
    const token = localStorage.getItem('memohero_token') || '';
    login(updatedUser, token);
    
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 flex items-center justify-center p-4 relative overflow-hidden">
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
        className="w-full max-w-3xl relative z-10"
      >
        {/* Main Card */}
        <div className="bg-white rounded-[3rem] p-12 shadow-2xl text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-8 shadow-2xl"
          >
            <Sparkles className="text-white" size={64} />
          </motion.div>

          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-4 flex items-center justify-center gap-3">
              مرحباً {username}!
              <PartyPopper className="text-purple-600" size={48} />
            </h1>
            <p className="text-xl text-gray-600 font-bold mb-12">
              كل شيء جاهز لبدء رحلتك التعليمية
            </p>
          </motion.div>

          {/* Summary Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl border-2 border-blue-100">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-sm font-black text-gray-500 uppercase tracking-wider mb-2">
                اللغة
              </h3>
              <p className="text-xl font-black text-gray-900">
                {languageNames[language]}
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-3xl border-2 border-purple-100">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-sm font-black text-gray-500 uppercase tracking-wider mb-2">
                الهدف
              </h3>
              <p className="text-xl font-black text-gray-900">
                {goalNames[goal]}
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-3xl border-2 border-green-100">
              <div className="text-4xl mb-3"></div>
              <h3 className="text-sm font-black text-gray-500 uppercase tracking-wider mb-2">
                مستواك الحالي
              </h3>
              <p className="text-xl font-black text-gray-900">
                {levelNames[currentLevel]}
              </p>
            </div>
          </motion.div>

          {/* Motivational Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-3xl mb-8"
          >
            <p className="text-lg text-gray-800 font-bold leading-relaxed">
              "رحلة الألف ميل تبدأ بخطوة واحدة"
              <br />
              <span className="text-base text-gray-600">
                استعد لتجربة تعليمية ممتعة ومليئة بالتحديات!
              </span>
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onBack}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-300"
            >
              <ArrowLeft
                className="transition-transform duration-300 group-hover:-translate-x-1"
                size={24}
              />
              <span>تعديل الإعدادات</span>
            </button>

            <button
              onClick={handleStart}
              disabled={isReady}
              className={`group inline-flex items-center gap-3 px-12 py-5 rounded-2xl font-black text-xl uppercase tracking-wider transition-all duration-300 ${
                !isReady
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Rocket
                className={`transition-transform duration-300 ${
                  !isReady ? 'group-hover:translate-y-[-4px]' : ''
                }`}
                size={28}
              />
              <span>ابدأ الآن</span>
            </button>
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 flex justify-center gap-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className="h-2 w-2 rounded-full bg-white/80"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
