import { PronunciationGuide } from './PronunciationGuide';
import { motion } from 'motion/react';

export default function Pronunciation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PronunciationGuide />
    </motion.div>
  );
}
