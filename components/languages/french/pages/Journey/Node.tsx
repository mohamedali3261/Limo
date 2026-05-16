import { FC } from 'react';
import { motion } from 'motion/react';
import { Star, Check, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NodeProps {
  lesson: any;
  unit: any;
  isLast?: boolean;
}

export const Node: FC<NodeProps> = ({ lesson, unit, isLast }) => {
  const isCompleted = lesson.status === 'completed';
  const isCurrent = lesson.status === 'current';
  const isLocked = lesson.status === 'locked';
  
  const Icon = lesson.icon;

  let baseColor = 'bg-gradient-to-br from-slate-200 to-slate-300';
  let shadowColor = '#cbd5e1';
  let iconColor = 'text-slate-400';
  let ringColor = 'ring-slate-300';
  
  if (isCompleted) {
    baseColor = 'bg-gradient-to-br from-green-400 to-emerald-500';
    shadowColor = '#059669';
    iconColor = 'text-white';
    ringColor = 'ring-green-300';
  } else if (isCurrent) {
    baseColor = `bg-gradient-to-br ${unit.buttonColor || 'from-blue-400 to-blue-600'}`;
    iconColor = 'text-white';
    ringColor = 'ring-blue-300';
    
    // Map tailwind color suffix to hex for inline shadow
    if (unit.buttonColor?.includes('green')) shadowColor = '#16a34a';
    if (unit.buttonColor?.includes('teal')) shadowColor = '#0d9488';
    if (unit.buttonColor?.includes('blue')) shadowColor = '#2563eb';
    if (unit.buttonColor?.includes('sky')) shadowColor = '#0284c7';
    if (unit.buttonColor?.includes('purple')) shadowColor = '#9333ea';
    if (unit.buttonColor?.includes('indigo')) shadowColor = '#4f46e5';
  }

  const NodeContent = () => (
    <motion.div 
      whileHover={!isLocked ? { scale: 1.1, y: -4 } : {}}
      whileTap={!isLocked ? { scale: 0.95 } : {}}
      className="relative group cursor-pointer flex flex-col items-center justify-center"
    >
      {/* Button */}
      <motion.div 
        className={`w-24 h-24 rounded-full flex items-center justify-center transition-all relative ring-4 ${ringColor}
          ${baseColor} 
          ${isLocked ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-2xl active:shadow-lg'}
        `}
        style={{ 
          boxShadow: `0 12px 0 ${shadowColor}, 0 0 30px ${shadowColor}30`
        }}
      >
         {/* Inner highlight for 3D effect */}
         {(!isLocked) && (
            <div className="absolute inset-0 rounded-full bg-white/30 h-1/2 rounded-b-[100%] pointer-events-none" />
         )}

         {isCompleted ? (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.6 }}
            >
              <Check className={`w-12 h-12 ${iconColor}`} strokeWidth={3} />
            </motion.div>
         ) : isCurrent ? (
            <motion.div
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {isLast ? (
                <Icon className={`w-12 h-12 ${iconColor}`} strokeWidth={2.5} fill="currentColor" />
              ) : (
                <Star className={`w-12 h-12 ${iconColor}`} strokeWidth={2.5} fill="currentColor" />
              )}
            </motion.div>
         ) : isLocked ? (
            <Lock className={`w-10 h-10 ${iconColor}`} strokeWidth={2.5} />
         ) : (
            <Icon className={`w-12 h-12 ${iconColor}`} strokeWidth={2.5} />
         )}
         
      </motion.div>

      {/* Progress Ring for current node - REMOVED */}

      {/* Level Badge */}
      {isCurrent && (
         <motion.div 
           animate={{ scale: [1, 1.2, 1] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="absolute -left-3 -top-3 w-10 h-10 bg-gradient-to-br from-yellow-300 to-yellow-400 border-3 border-white rounded-full flex items-center justify-center text-xs font-black text-gray-900 shadow-lg"
         >
           ⭐
         </motion.div>
      )}

      {/* Lesson Title - Below the button */}
      <motion.div 
        initial={{ opacity: 0, y: -5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-center max-w-[120px]"
      >
        <p className={`text-sm font-black leading-tight ${isCompleted ? 'text-green-600' : isCurrent ? 'text-blue-600' : 'text-gray-600'}`}>
          {lesson.title}
        </p>
      </motion.div>

      {/* Tooltip for current node - appears on hover */}
      {isCurrent && (
        <motion.div 
          initial={{ y: -10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="absolute -top-20 bg-gradient-to-br from-blue-500 to-blue-600 border-2 border-blue-300 rounded-2xl py-3 px-5 shadow-xl z-20 whitespace-nowrap text-white font-bold flex flex-col items-center justify-center min-w-[140px] backdrop-blur-sm pointer-events-none"
        >
          {/* Tooltip Arrow */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-blue-500 border-b-2 border-l-2 border-blue-300 transform -rotate-45" />
          
          <span className="text-xs text-blue-100 font-black mb-1 uppercase tracking-wider">الدرس الحالي</span>
          <span className="text-sm">{lesson.title || 'ابدأ الدرس'}</span>
        </motion.div>
      )}
    </motion.div>
  );

  // If node is current or completed, wrap in Link
  if (isCurrent || isCompleted) {
    return (
      <Link to={`/french/lesson/${lesson.id}`}>
        <NodeContent />
      </Link>
    );
  }

  return (
    <div className={isLocked ? 'pointer-events-none' : ''}>
      <NodeContent />
    </div>
  );
};
