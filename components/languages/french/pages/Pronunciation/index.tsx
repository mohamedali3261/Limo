import { FC } from 'react';
import { motion } from 'motion/react';
import { WordList } from './WordList';

export const Pronunciation: FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-slate-900 mb-4"
        >
          النطق والاستماع
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          استمع إلى النطق الصحيح للكلمات الفرنسية الشائعة وتدرب على نطقها.
        </motion.p>
      </div>

      <WordList />
    </div>
  );
};
