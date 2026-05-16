import { FC } from 'react';
import { motion } from 'motion/react';
import { Star, Check } from 'lucide-react';
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

  let baseColor = 'bg-slate-200';
  let shadowHex = '#cbd5e1';
  let iconColor = 'text-slate-400';
  
  if (isCompleted) {
    baseColor = 'bg-amber-400';
    shadowHex = '#f59e0b';
    iconColor = 'text-white';
  } else if (isCurrent) {
    baseColor = unit.buttonColor;
    // Map tailwind color suffix to hex for inline shadow
    if (unit.buttonColor.includes('green')) shadowHex = '#16a34a';
    if (unit.buttonColor.includes('teal')) shadowHex = '#0d9488';
    if (unit.buttonColor.includes('blue')) shadowHex = '#2563eb';
    if (unit.buttonColor.includes('sky')) shadowHex = '#0284c7';
    if (unit.buttonColor.includes('purple')) shadowHex = '#9333ea';
    if (unit.buttonColor.includes('indigo')) shadowHex = '#4f46e5';
    iconColor = 'text-white';
  }

  const NodeContent = () => (
    <div className="relative group cursor-pointer flex flex-col items-center justify-center">
      
      {/* Tooltip for current node */}
      {isCurrent && (
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute -top-16 bg-white border-2 border-slate-200 rounded-xl py-2 px-4 shadow-sm z-20 whitespace-nowrap text-slate-700 font-bold flex flex-col items-center justify-center min-w-[120px]"
        >
          {/* Tooltip Arrow */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-l-2 border-slate-200 transform -rotate-45" />
          
          <span className="text-xs text-slate-400 font-medium mb-1 uppercase tracking-wider">{unit.title.split(':')[0]}</span>
          <span className="text-sm">{lesson.title || 'ابدأ الدرس'}</span>
        </motion.div>
      )}

      {/* Button */}
      <div 
        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all relative
          ${baseColor} 
          ${isLocked ? 'opacity-80' : 'hover:-translate-y-1 active:translate-y-2'}
        `}
        style={{ 
          boxShadow: `0 8px 0 ${shadowHex}`
        }}
      >
         {/* Inner highlight for 3D effect */}
         {(!isLocked) && (
            <div className="absolute inset-0 rounded-full bg-white/20 h-1/2 rounded-b-[100%] pointer-events-none" />
         )}

         {isCompleted ? (
            <Check className={`w-10 h-10 ${iconColor}`} strokeWidth={4} />
         ) : isCurrent ? (
            isLast ? (
                <Icon className={`w-10 h-10 ${iconColor}`} strokeWidth={2.5} fill="currentColor" />
            ) : (
                <Star className={`w-10 h-10 ${iconColor}`} strokeWidth={2.5} fill="currentColor" />
            )
         ) : (
            <Icon className={`w-10 h-10 ${iconColor}`} strokeWidth={2.5} />
         )}
         
      </div>

      {/* Progress Ring for current node */}
      {isCurrent && (
        <svg className="absolute top-1/2 left-1/2 w-24 h-24 pointer-events-none -translate-x-1/2 -translate-y-1/2 -rotate-90">
          <circle cx="48" cy="48" r="44" stroke="#e2e8f0" strokeWidth="6" fill="none" />
          <circle cx="48" cy="48" r="44" stroke="#f59e0b" strokeWidth="6" fill="none" strokeDasharray="276" strokeDashoffset="180" className="transition-all duration-1000 ease-out" />
        </svg>
      )}
      
      {/* Level Crown / Stars (Optional decoration) */}
      {isCurrent && (
         <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500 shadow-sm">
           1
         </div>
      )}
    </div>
  );

  // If node is current or completed, wrap in Link
  if (isCurrent || isCompleted) {
    return (
      <Link to={`/lesson/${lesson.id}`}>
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
