import { motion } from 'motion/react';
import { Volume2, Mic } from 'lucide-react';
import { useAudioSettings } from '../../context/AudioSettingsContext';

interface AudioCardProps {
  spanish: string;
  arabic: string;
  category: string;
  index: number;
  key?: string | number;
}

export function AudioCard({ spanish, arabic, category, index }: AudioCardProps) {
  const { audioSpeed } = useAudioSettings();

  const playAudio = () => {
    const utterance = new SpeechSynthesisUtterance(spanish);
    utterance.lang = 'es-ES';
    // Tune properties for better voice if possible
    utterance.rate = audioSpeed; 
    utterance.pitch = 1.2; // Youthful pitch
    window.speechSynthesis.speak(utterance);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center"
    >
      <div className="w-full flex justify-between items-center mb-6">
        <span className="text-xs font-bold text-stone-400 uppercase tracking-widest bg-stone-100 px-3 py-1 rounded-full">{category}</span>
        <button 
          onClick={playAudio}
          className="w-10 h-10 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center hover:bg-teal-600 hover:text-white transition-colors"
        >
          <Volume2 size={20} />
        </button>
      </div>
      
      <h3 className="text-2xl font-bold text-stone-800 mb-2" dir="ltr">{spanish}</h3>
      <p className="text-stone-500 font-medium">{arabic}</p>
      
      <button 
        onClick={playAudio}
        className="mt-6 w-full py-3 bg-stone-50 hover:bg-stone-100 text-stone-600 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors border border-stone-100"
      >
        <Mic size={18} />
        استمع للنطق
      </button>
    </motion.div>
  );
}
