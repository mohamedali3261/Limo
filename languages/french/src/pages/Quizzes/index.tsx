import { FC } from 'react';
import { motion } from 'motion/react';
import { QuizEngine } from './QuizEngine';

export const Quizzes: FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-900 mb-4"
        >
          اختبر معلوماتك
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          أجب عن الأسئلة التالية لتقييم مستواك في اللغة الفرنسية.
        </motion.p>
      </div>

      <QuizEngine />
    </div>
  );
};
