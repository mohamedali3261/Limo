import { QuizEngine } from './QuizEngine';
import { motion } from 'motion/react';

export default function Quiz() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">اختبر معلوماتك</h1>
        <p className="text-stone-500">مجموعة من الأسئلة السريعة لتقييم مستواك في الكلمات والعبارات التي تعلمتها.</p>
      </div>
      <QuizEngine />
    </motion.div>
  );
}
