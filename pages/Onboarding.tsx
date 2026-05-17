import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Loader2, Globe, Languages, Target, Sparkles, CheckCircle2, Heart, Sword, Book, Star } from 'lucide-react';
import { apiFetch } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../lib/store/auth';
import { toast } from 'sonner';
import { LoadingPage } from '../components/common/LoadingPage';

const ICON_MAP: Record<string, any> = {
  Globe,
  Languages,
  Target,
  Sparkles,
  CheckCircle2,
  Heart,
  Sword,
  Book,
  Star
};

export default function Onboarding() {
  const [steps, setSteps] = useState<any[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { fetchUser } = useAuthStore();

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const data = await apiFetch('/api/learning/onboarding-steps');
        setSteps(data.steps);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSteps();
  }, []);

  const handleSelect = (id: string) => {
    const stepKey = steps[currentStep].step_key;
    const newSelections = { ...selections, [stepKey]: id };
    setSelections(newSelections);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      finishOnboarding(newSelections);
    }
  };

  const finishOnboarding = async (finalData: any) => {
    setIsSubmitting(true);
    try {
      // Send all collected step data
      const response = await apiFetch('/api/learning/onboarding', {
        method: 'POST',
        body: JSON.stringify(finalData)
      });
      
      // Update global user state with the data returned from server
      if (response.user) {
        // تحديث بيانات المستخدم في الـ store و localStorage
        const token = localStorage.getItem('limohero_token') || '';
        
        // التأكد من أن onboarding_completed = true
        const updatedUser = {
          ...response.user,
          onboarding_completed: true
        };
        
        // تحديث الـ store
        useAuthStore.getState().login(updatedUser, token);
        
        // تحديث localStorage مباشرة للتأكد
        localStorage.setItem('limohero_user', JSON.stringify(updatedUser));
        
        toast.success('مرحباً بك في أكاديمية الأبطال!');
        
        // الانتقال للصفحة الرئيسية
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 800);
      } else {
        // Fallback: fetch user and navigate
        await fetchUser();
        toast.success('مرحباً بك في أكاديمية الأبطال!');
        setTimeout(() => {
          navigate('/', { replace: true });
        }, 800);
      }
    } catch (err: any) {
      console.error("Onboarding submission failed:", err);
      toast.error('حدث خطأ أثناء حفظ بياناتك. يرجى المحاولة مرة أخرى.');
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <LoadingPage message="بانتظار عالمك الجديد..." />;
  }

  if (steps.length === 0) return null;

  const step = steps[currentStep];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-orange-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-blue-50 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
        {/* Progress System */}
        <div className="flex items-center gap-4 mb-16 overflow-hidden">
           <div className="flex-1 flex gap-2">
             {steps.map((_, i) => (
               <div 
                 key={i} 
                 className="h-2 flex-1 rounded-full bg-gray-100 relative overflow-hidden"
               >
                 <motion.div 
                   className="absolute inset-0 bg-primary"
                   initial={{ width: 0 }}
                   animate={{ width: i <= currentStep ? '100%' : '0%' }}
                   transition={{ duration: 0.8, ease: "circOut" }}
                 />
               </div>
             ))}
           </div>
           <span className="text-sm font-black text-gray-300 uppercase tracking-widest tabular-nums">
             {currentStep + 1} / {steps.length}
           </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1 bg-orange-100 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6"
            >
              Step Challenge
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-display font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
              {step.title}
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-bold mb-12 max-w-lg mx-auto leading-relaxed">
              {step.description}
            </p>

            <div className="grid gap-4 max-w-md mx-auto">
              {step.options.map((opt: any) => {
                const Icon = ICON_MAP[opt.icon_name] || Sparkles;
                return (
                  <motion.button
                    key={opt.id}
                    whileHover={{ scale: 1.02, x: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelect(opt.value)}
                    className="group flex items-center justify-between p-6 rounded-[2rem] bg-white border-2 border-gray-100 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all outline-none text-right"
                    dir="rtl"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 ${opt.color_class || 'bg-primary'} text-white rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-12`}>
                         <Icon size={28} />
                      </div>
                      <div className="text-right">
                        <span className="block text-xl font-black text-gray-800 mb-0.5">{opt.label}</span>
                        <span className="text-[10px] text-gray-300 font-bold uppercase tracking-widest">Select to Continue</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-gray-50 flex items-center justify-center group-hover:border-primary/20 group-hover:bg-orange-50 transition-colors">
                      <ChevronRight className="text-gray-200 group-hover:text-primary transition-all" size={20} />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {isSubmitting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center"
          >
            <div className="w-24 h-24 bg-primary rounded-[2rem] flex items-center justify-center shadow-2xl scale-125 mb-8 animate-bounce">
              <Sword className="text-white" size={40} />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">Preparing Your Arena...</h2>
            <p className="text-gray-400 font-bold">Summoning the lessons and spirits of language.</p>
          </motion.div>
        )}
      </div>

      {/* Progress Circles */}
      <div className="fixed bottom-12 flex gap-3 z-10">
        {steps.map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              i === currentStep ? 'w-8 bg-primary' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
