import { AudioCard } from './AudioCard';
import { motion } from 'motion/react';

const words = [
  { spanish: 'Por favor', arabic: 'من فضلك', category: 'الأساسيات' },
  { spanish: 'Gracias', arabic: 'شكراً', category: 'الأساسيات' },
  { spanish: 'Lo siento', arabic: 'أنا آسف', category: 'الأساسيات' },
  { spanish: 'Coche', arabic: 'سيارة', category: 'أشياء' },
  { spanish: 'Agua', arabic: 'ماء', category: 'طعام وشراب' },
  { spanish: 'Pan', arabic: 'خبز', category: 'طعام وشراب' },
  { spanish: 'Gato', arabic: 'قطة', category: 'حيوانات' },
  { spanish: 'Perro', arabic: 'كلب', category: 'حيوانات' },
  { spanish: 'Familia', arabic: 'عائلة', category: 'حياة' },
  { spanish: 'Libro', arabic: 'كتاب', category: 'أشياء' },
  { spanish: 'Amigo', arabic: 'صديق', category: 'علاقات' },
  { spanish: 'Casa', arabic: 'منزل', category: 'أماكن' },
];

export function PronunciationGuide() {
  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">دليل النطق الصحيح</h1>
        <p className="text-stone-500 max-w-2xl mx-auto">
          استمع إلى الكلمات الإسبانية الشائعة، حاول تكرارها بصوت عالٍ لتتدرب على النطق الصحيح.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {words.map((word, index) => (
          <AudioCard key={index} index={index} {...word} />
        ))}
      </div>
    </div>
  );
}
