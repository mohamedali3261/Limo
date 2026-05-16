import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../lib/store/auth';
import { apiFetch } from '../lib/api';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Mail, Lock, User, ShieldAlert, Shield } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [securityQuestions, setSecurityQuestions] = useState<any[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<number>(0);
  const [securityAnswer, setSecurityAnswer] = useState('');
  const navigate = useNavigate();
  
  const login = useAuthStore(state => state.login);

  useEffect(() => {
    // Load security questions when switching to register mode
    if (!isLogin) {
      loadSecurityQuestions();
    }
  }, [isLogin]);

  const loadSecurityQuestions = async () => {
    try {
      const response = await apiFetch('/api/auth/security-questions');
      setSecurityQuestions(response.questions);
    } catch (err) {
      console.error('Failed to load security questions:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      if (isLogin) {
        // Login flow
        const data = await apiFetch('/api/auth/login', {
          method: 'POST',
          body: JSON.stringify({ username, password })
        });
        
        login(data.user, data.token);
        navigate('/');
      } else {
        // Register flow - validate passwords match
        if (password !== confirmPassword) {
          setError('كلمات السر غير متطابقة');
          setLoading(false);
          return;
        }

        // Validate security question is selected and answered
        if (selectedQuestion === 0 || !securityAnswer.trim()) {
          setError('يرجى اختيار سؤال الأمان والإجابة عليه');
          setLoading(false);
          return;
        }

        const securityQuestionsData = [{
          questionId: selectedQuestion,
          answer: securityAnswer
        }];

        const data = await apiFetch('/api/auth/register', {
          method: 'POST',
          body: JSON.stringify({ 
            username, 
            password,
            securityQuestions: securityQuestionsData
          })
        });
        
        login(data.user, data.token);
        navigate('/');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleModeSwitch = () => {
    setIsLogin(!isLogin);
    setError('');
    setConfirmPassword('');
    setSelectedQuestion(0);
    setSecurityAnswer('');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gray-50 p-6 font-sans ${isLogin ? 'bg-indigo-50/30' : 'bg-emerald-50/30'}`}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-3xl p-10 shadow-2xl border border-gray-100"
      >
        <div className="flex flex-col items-center mb-10 text-center">
          <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-xl mb-4 transform rotate-6 transition-colors duration-500 ${isLogin ? 'bg-gray-900 shadow-gray-200' : 'bg-emerald-600 shadow-emerald-200'}`}>
            <GraduationCap size={44} />
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tighter">
            Limo<span className={isLogin ? 'text-indigo-600' : 'text-emerald-600'}>Hero</span>
          </h1>
          <p className="text-gray-400 font-bold mt-2 uppercase tracking-widest text-[10px]">Prepare for glory</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Username / اسم المستخدم"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-gray-900 outline-none transition-all font-bold"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>

            {/* Security Question for Registration - Right after username */}
            {!isLogin && (
              <div className="space-y-3 p-4 bg-orange-50/50 rounded-2xl border border-orange-100">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-primary" size={18} />
                  <h3 className="text-xs font-black text-gray-900">سؤال الأمان</h3>
                </div>
                
                <div className="relative">
                  <select
                    value={selectedQuestion}
                    onChange={(e) => setSelectedQuestion(parseInt(e.target.value))}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all font-bold text-sm appearance-none cursor-pointer hover:border-gray-300"
                    required
                    dir="rtl"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'left 0.75rem center',
                      backgroundSize: '1.25rem',
                      paddingLeft: '2.5rem'
                    }}
                  >
                    <option value={0}>اختر سؤال الأمان...</option>
                    {securityQuestions.map((q) => (
                      <option key={q.id} value={q.id}>
                        {q.question}
                      </option>
                    ))}
                  </select>
                </div>
                
                {selectedQuestion > 0 && (
                  <input
                    type="text"
                    value={securityAnswer}
                    onChange={(e) => setSecurityAnswer(e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all font-bold text-sm"
                    placeholder="أدخل الإجابة"
                    required
                    dir="rtl"
                  />
                )}
              </div>
            )}

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="password" 
                placeholder="Password / كلمة المرور"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-gray-900 outline-none transition-all font-bold"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>

            {/* Confirm Password for Registration */}
            {!isLogin && (
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="password" 
                  placeholder="Confirm Password / تأكيد كلمة المرور"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:border-gray-900 outline-none transition-all font-bold"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
            )}
          </div>

          {isLogin && (
            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-sm text-primary hover:text-primary/80 font-bold transition-colors"
              >
                نسيت كلمة السر؟
              </button>
            </div>
          )}

          <AnimatePresence>
            {error && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-500 text-xs font-black text-center bg-red-50 py-4 rounded-2xl border border-red-100 flex items-center justify-center gap-2"
              >
                <ShieldAlert size={16} /> {error}
              </motion.div>
            )}
          </AnimatePresence>

          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-4 rounded-2xl font-black text-sm tracking-wide text-white shadow-xl transition-all disabled:opacity-50 active:scale-95 ${isLogin ? 'bg-gray-900 hover:bg-black shadow-gray-200' : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-100'}`}
          >
            {loading ? 'جاري المعالجة...' : (isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد')}
          </button>

          <button 
            type="button"
            onClick={handleModeSwitch}
            className="w-full py-2 text-gray-400 font-bold hover:text-gray-900 transition-colors text-sm"
          >
            {isLogin ? 'ليس لديك حساب؟ أنشئ واحداً الآن' : 'لديك حساب بالفعل؟ سجل دخولك'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
