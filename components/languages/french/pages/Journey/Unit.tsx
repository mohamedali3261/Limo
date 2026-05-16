import { FC } from 'react';
import { Node } from './Node';
import { motion } from 'motion/react';
import { BookOpen, Sparkles } from 'lucide-react';

interface UnitProps {
  unit: any;
}

const offsets = [
  "translate-x-0",
  "-translate-x-8",
  "-translate-x-16",
  "-translate-x-8",
  "translate-x-0",
  "translate-x-8",
  "translate-x-16",
  "translate-x-8",
];

export const Unit: FC<UnitProps> = ({ unit }) => {
  // Calculate progress
  const completedCount = unit.lessons.filter((l: any) => l.status === 'completed').length;
  const totalCount = unit.lessons.length;
  const progressPercent = (completedCount / totalCount) * 100;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center"
    >
      {/* Unit Header */}
      <motion.div 
        whileHover={{ y: -4 }}
        className={`w-full rounded-2xl p-4 sm:p-5 text-white mb-6 ${unit.color} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden shadow-lg transition-all duration-300`}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-white/5 w-full h-1/2 rounded-b-[100%] opacity-30 transform -translate-y-1/2 pointer-events-none" />
        
        <div className="relative z-10 flex-1">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-2"
          >
            <Sparkles size={20} className="text-white/80" />
            <span className="text-xs font-black uppercase tracking-widest text-white/80">الوحدة</span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl font-black mb-2 flex items-center gap-3">
            {unit.title}
          </h2>
          <p className="text-white/90 font-semibold text-sm sm:text-base leading-relaxed max-w-2xl">{unit.desc}</p>
          
          {/* Progress Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 space-y-2"
          >
            <div className="flex justify-between text-xs font-black text-white/80 uppercase">
              <span>التقدم</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercent}%` }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-full bg-white rounded-full shadow-lg"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Icon */}
        <div className="hidden sm:flex opacity-30 transform scale-150">
          <BookOpen size={64} className="text-white" />
        </div>

        {/* Review Button */}
        <motion.button 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-10 mt-4 sm:mt-0 w-full sm:w-auto text-center shrink-0 bg-white text-gray-900 font-black py-3 px-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 shadow-lg"
        >
          مراجعة
        </motion.button>
      </motion.div>

      {/* Path Nodes */}
      <div className="flex flex-col items-center gap-4 relative w-full py-4">
        {/* Vertical Connection Line */}
        <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent rounded-full -z-10" />
            
        {unit.lessons.map((lesson: any, index: number) => {
          const isTrophy = lesson.type === 'test';
          const offsetClass = isTrophy ? 'translate-x-0' : offsets[index % offsets.length];
          
          return (
            <motion.div 
              key={lesson.id} 
              initial={{ opacity: 0, x: offsetClass.includes('-') ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative z-10 ${offsetClass} transition-transform duration-300`}
            >
              <Node lesson={lesson} unit={unit} isLast={index === unit.lessons.length - 1} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
