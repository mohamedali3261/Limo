import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, User, Hand } from 'lucide-react';

interface UsernameInputProps {
  onNext: (username: string) => void;
}

export default function UsernameInput({ onNext }: UsernameInputProps) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!username.trim()) {
      setError('الرجاء إدخال اسم المستخدم');
      return;
    }

    if (username.length < 3) {
      setError('اسم المستخدم يجب أن يكون 3 أحرف على الأقل');
      return;
    }

    if (username.length > 20) {
      setError('اسم المستخدم يجب أن لا يتجاوز 20 حرف');
      return;
    }

    // Check if username contains only valid characters
    if (!/^[a-zA-Z0-9_\u0600-\u06FF\s-]+$/.test(username)) {
      setError('اسم المستخدم يحتوي على أحرف غير صالحة');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call to check username availability
    setTimeout(() => {
      setIsLoading(false);
      onNext(username.trim());
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 flex items-center justify-center p-4 relative overflow-hidden">
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
        className="w-full max-w-md relative z-10"
      >
        {/* Main Card */}
        <div className="bg-white rounded-[3rem] p-12 shadow-2xl">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-8 mx-auto shadow-2xl"
          >
            <User className="text-white" size={48} />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-black text-gray-900 mb-3 flex items-center justify-center gap-3">
              ما اسمك؟
              <Hand className="text-blue-600" size={36} />
            </h1>
            <p className="text-gray-600 font-bold">
              اختر اسماً يعجبك لحسابك الجديد
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Username Input */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                اسم المستخدم
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError('');
                }}
                placeholder="أدخل اسم المستخدم..."
                className={`w-full px-6 py-4 rounded-2xl border-2 font-bold text-lg transition-all duration-300 focus:outline-none ${
                  error
                    ? 'border-red-500 bg-red-50 focus:border-red-600'
                    : 'border-gray-200 bg-gray-50 focus:border-blue-500 focus:bg-white'
                }`}
                disabled={isLoading}
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm font-bold mt-2"
                >
                  {error}
                </motion.p>
              )}
            </div>

            {/* Character Count */}
            <div className="flex justify-between items-center px-2">
              <span className="text-xs text-gray-500 font-bold">
                {username.length} / 20
              </span>
              <div className="flex gap-1">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 w-1 rounded-full transition-all duration-300 ${
                      i < username.length ? 'bg-blue-500' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !username.trim()}
              className={`w-full py-4 rounded-2xl font-black text-lg uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 ${
                isLoading || !username.trim()
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-2xl hover:scale-105'
              }`}
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  جاري التحقق...
                </>
              ) : (
                <>
                  <span>التالي</span>
                  <ArrowRight size={24} />
                </>
              )}
            </button>
          </motion.form>

          {/* Info Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-xs text-gray-500 font-bold mt-6"
          >
            يمكنك تغيير اسم المستخدم لاحقاً من إعدادات حسابك
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
