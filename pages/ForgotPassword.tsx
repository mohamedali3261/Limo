import * as React from 'react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Lock, Shield, CheckCircle2, AlertCircle } from 'lucide-react';
import { apiFetch } from '../lib/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export default function ForgotPassword() {
  const [step, setStep] = useState<'username' | 'questions' | 'newPassword' | 'success'>('username');
  const [username, setUsername] = useState('');
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleUsernameSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Get all security questions
      const response = await apiFetch('/api/auth/security-questions');
      
      // For now, we'll show all questions and let the user answer them
      // In a real app, you'd fetch the user's specific questions
      setQuestions(response.questions.slice(0, 3)); // Show first 3 questions
      setStep('questions');
    } catch (err: any) {
      setError(err.message || 'حدث خطأ. يرجى المحاولة مرة أخرى.');
      toast.error('حدث خطأ. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const answersArray = questions.map(q => ({
        questionId: q.id,
        answer: answers[q.id] || ''
      }));

      const response = await apiFetch('/api/auth/verify-security-answers', {
        method: 'POST',
        body: JSON.stringify({
          username,
          answers: answersArray
        })
      });

      setResetToken(response.resetToken);
      setStep('newPassword');
      toast.success('تم التحقق بنجاح! يمكنك الآن تغيير كلمة السر.');
    } catch (err: any) {
      setError(err.message || 'الإجابات غير صحيحة. يرجى المحاولة مرة أخرى.');
      toast.error('الإجابات غير صحيحة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword !== confirmPassword) {
      setError('كلمات السر غير متطابقة');
      toast.error('كلمات السر غير متطابقة');
      return;
    }

    if (newPassword.length < 6) {
      setError('كلمة السر يجب أن تكون 6 أحرف على الأقل');
      toast.error('كلمة السر يجب أن تكون 6 أحرف على الأقل');
      return;
    }

    setIsLoading(true);

    try {
      await apiFetch('/api/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({
          username,
          newPassword,
          resetToken
        })
      });

      setStep('success');
      toast.success('تم تغيير كلمة السر بنجاح!');
    } catch (err: any) {
      setError(err.message || 'حدث خطأ. يرجى المحاولة مرة أخرى.');
      toast.error('حدث خطأ. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate('/auth')}
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-bold">العودة لتسجيل الدخول</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              {step === 'success' ? (
                <CheckCircle2 className="text-green-500" size={32} />
              ) : (
                <Lock className="text-primary" size={32} />
              )}
            </div>
            <h1 className="text-3xl font-black text-gray-900 mb-2">
              {step === 'username' && 'استعادة كلمة السر'}
              {step === 'questions' && 'أسئلة الأمان'}
              {step === 'newPassword' && 'كلمة سر جديدة'}
              {step === 'success' && 'تم بنجاح!'}
            </h1>
            <p className="text-gray-500 font-medium">
              {step === 'username' && 'أدخل اسم المستخدم الخاص بك'}
              {step === 'questions' && 'أجب على أسئلة الأمان'}
              {step === 'newPassword' && 'أدخل كلمة السر الجديدة'}
              {step === 'success' && 'تم تغيير كلمة السر بنجاح'}
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-2xl flex items-start gap-3"
            >
              <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
              <p className="text-red-700 font-medium text-sm">{error}</p>
            </motion.div>
          )}

          {/* Step 1: Username */}
          {step === 'username' && (
            <form onSubmit={handleUsernameSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  اسم المستخدم
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors font-medium"
                  placeholder="أدخل اسم المستخدم"
                  required
                  dir="rtl"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-3 rounded-xl font-black text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'جاري التحميل...' : 'التالي'}
              </button>
            </form>
          )}

          {/* Step 2: Security Questions */}
          {step === 'questions' && (
            <form onSubmit={handleQuestionsSubmit} className="space-y-6">
              <div className="space-y-4">
                {questions.map((q, index) => (
                  <div key={q.id}>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      <Shield className="inline-block ml-2" size={16} />
                      {q.question}
                    </label>
                    <input
                      type="text"
                      value={answers[q.id] || ''}
                      onChange={(e) => setAnswers({ ...answers, [q.id]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors font-medium"
                      placeholder="أدخل الإجابة"
                      required
                      dir="rtl"
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-3 rounded-xl font-black text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'جاري التحقق...' : 'تحقق'}
              </button>
            </form>
          )}

          {/* Step 3: New Password */}
          {step === 'newPassword' && (
            <form onSubmit={handlePasswordReset} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  كلمة السر الجديدة
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors font-medium"
                  placeholder="أدخل كلمة السر الجديدة"
                  required
                  minLength={6}
                  dir="rtl"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  تأكيد كلمة السر
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors font-medium"
                  placeholder="أعد إدخال كلمة السر"
                  required
                  minLength={6}
                  dir="rtl"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-3 rounded-xl font-black text-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'جاري الحفظ...' : 'تغيير كلمة السر'}
              </button>
            </form>
          )}

          {/* Step 4: Success */}
          {step === 'success' && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="text-green-500" size={40} />
              </div>
              <p className="text-gray-600 font-medium">
                تم تغيير كلمة السر بنجاح! يمكنك الآن تسجيل الدخول بكلمة السر الجديدة.
              </p>
              <button
                onClick={() => navigate('/auth')}
                className="w-full bg-primary text-white py-3 rounded-xl font-black text-lg hover:bg-primary/90 transition-colors"
              >
                تسجيل الدخول
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
