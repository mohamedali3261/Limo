import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { courseUnits } from '../../data/courseData';
import { useProgress } from '../../contexts/ProgressContext';
import { useNavigate } from 'react-router-dom';
import { Star, Check, Lock, Cloud, TreePine, Map as MapIcon, Flag, Sparkles } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <Star className={className} />;
  return <Icon className={className} />;
};

export default function AdventureMap() {
  const { unlockedLevels } = useProgress();
  const navigate = useNavigate();

  // Generate some random positions for background decorations
  const decorations = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 450,
      y: Math.random() * 1500,
      scale: 0.5 + Math.random() * 0.7,
      type: Math.random() > 0.6 ? 'tree' : 'cloud',
      opacity: 0.1 + Math.random() * 0.3
    }));
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto pb-20 px-2 flex flex-col items-center relative min-h-[100vh]">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {decorations.map(dec => (
           <div 
             key={dec.id} 
             className="absolute"
             style={{ 
               transform: `translate(calc(50vw + ${dec.x}px), ${dec.y}px) scale(${dec.scale})`,
               opacity: dec.opacity
             }}
           >
             {dec.type === 'tree' ? <TreePine size={48} className="text-emerald-500" /> : <Cloud size={48} className="text-slate-300" />}
           </div>
        ))}
      </div>

      <div className="w-full text-center py-6 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border-2 border-white shadow-xl shadow-indigo-100/50 mb-2 inline-flex items-center gap-2">
          <MapIcon className="w-6 h-6 text-indigo-500" />
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">خريطة التعلم</h1>
        </div>
      </div>

      {courseUnits.map((unit, unitIndex) => (
        <div key={unit.id} className="w-full mb-8 relative z-10 max-w-[450px]">
          {/* Unit Header */}
          <div className={`${unit.color} text-white p-3 md:p-6 rounded-[1.5rem] shadow-lg shadow-${unit.color.split('-')[1]}-500/20 mb-6 relative overflow-hidden ring-2 ring-white/30 transform hover:-translate-y-1 transition-transform duration-500`}>
            <div className="relative z-10 flex items-center gap-3">
              <div className="bg-white/20 p-3 rounded-[1.2rem] backdrop-blur-sm border border-white/30 shadow-inner">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg md:text-3xl font-black mb-0.5 drop-shadow-md opacity-95">{unit.title}</h2>
                <p className="opacity-90 font-bold text-xs md:text-lg leading-snug drop-shadow-sm">{unit.description}</p>
              </div>
            </div>
            {/* Background design */}
            <div className="absolute right-0 top-0 w-64 h-64 bg-white/20 rounded-full blur-3xl transform translate-x-12 -translate-y-12" />
            <div className="absolute left-0 bottom-0 w-40 h-40 bg-black/10 rounded-full blur-2xl transform -translate-x-10 translate-y-10" />
          </div>

          {/* Unit Levels */}
          <div className="flex flex-col items-center w-full relative">
            {unit.levels.map((level, i) => {
              const isUnlocked = unlockedLevels.includes(level.id);
              const isCompleted = unlockedLevels.includes(level.id + 1);
              const isCurrent = isUnlocked && !isCompleted;
              
              // Smoother sine wave
              const xOffset = Math.sin(i * 1.3) * 50;
              const nextXOffset = i < unit.levels.length - 1 ? Math.sin((i + 1) * 1.3) * 50 : 0;
              const dx = nextXOffset - xOffset;
              const dy = 85; 

              const pathLength = Math.sqrt(dx * dx + dy * dy);
              const angle = Math.atan2(dy, dx) * (180 / Math.PI);

              // Add a finish flag for the last level in the course
              const isLastInCourse = unitIndex === courseUnits.length - 1 && i === unit.levels.length - 1;

              return (
                <div key={level.id} className="relative flex flex-col items-center mb-6 z-10 w-full" style={{ transform: `translateX(${xOffset}px)` }}>
                  
                  {/* Path to next level */}
                  {i !== unit.levels.length - 1 && (
                    <div 
                      className="absolute bg-slate-200/80 -z-10 rounded-full overflow-hidden origin-top border-x-2 border-slate-300/50"
                      style={{ 
                        width: '24px',
                        height: `${pathLength}px`,
                        top: '50%',
                        left: '50%',
                        transform: `translateX(-50%) rotate(${angle - 90}deg)`,
                      }}
                    >
                        {isCompleted && (
                          <motion.div 
                            className={`${unit.color} w-full`}
                            initial={{ height: 0 }}
                            animate={{ height: '100%' }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                          />
                        )}
                    </div>
                  )}

                  {/* Level Button */}
                  <motion.button
                    whileHover={isUnlocked ? { scale: 1.05 } : {}}
                    whileTap={isUnlocked ? { scale: 0.95 } : {}}
                    onClick={() => {
                      if (isUnlocked) navigate(`/${level.type === 'lesson' ? 'level' : 'quiz'}/${level.id}`);
                    }}
                    className={`w-18 h-18 rounded-full flex items-center justify-center border-b-[4px] shadow-lg relative z-20 group transition-all duration-300 ${
                      isCompleted 
                        ? 'bg-amber-400 border-amber-500 text-white hover:bg-amber-300 shadow-amber-500/40 hover:border-amber-400' 
                         : isCurrent 
                          ? `${level.color} border-black/10 text-white hover:brightness-110 shadow-2xl shadow-${level.color.split('-')[1]}-500/50 ring-[3px] ring-white` 
                          : 'bg-slate-200 border-slate-300 text-slate-400'
                    }`}
                  >
                    {isCurrent && (
                      <motion.div
                        className={`absolute inset-0 rounded-full border-[2px] border-white/50 ring-2 ring-${level.color.split('-')[1]}-400/30`}
                        animate={{ scale: [1, 1.25, 1], opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                      />
                    )}

                    <div className={`absolute top-1/2 -translate-y-1/2 ${i % 2 === 0 ? 'left-[130%]' : 'right-[130%]'} opacity-0 group-hover:opacity-100 transition-opacity bg-white px-4 py-3 rounded-2xl shadow-xl border-2 border-slate-100 whitespace-nowrap pointer-events-none z-30 font-bold flex flex-col items-center min-w-[150px]`}>
                      <span className="text-slate-800 text-xl font-black">{level.title}</span>
                      <span className="text-slate-500 text-xs mt-1">{level.type === 'lesson' ? 'درس تفاعلي' : level.type === 'quiz' ? 'اختبار' : 'تحدي المعرفة'}</span>
                      <div className={`absolute top-1/2 -translate-y-1/2 ${i % 2 === 0 ? '-left-3 border-b-2 border-l-2' : '-right-3 border-t-2 border-r-2'} w-4 h-4 bg-white transform rotate-45 border-slate-100`} />
                    </div>

                    {level.type === 'boss' ? (
                      <Star className={`w-8 h-8 ${isUnlocked ? 'fill-current drop-shadow-md' : ''}`} />
                    ) : isLastInCourse ? (
                      <Flag className="w-8 h-8 drop-shadow-md" />
                    ) : isCompleted ? (
                      <Check className="w-8 h-8 stroke-[4] drop-shadow-md" />
                    ) : isCurrent ? (
                      <div className="flex flex-col items-center">
                        {level.icon ? (
                          <IconComponent name={level.icon} className="w-8 h-8 drop-shadow-md" />
                        ) : level.emoji ? (
                           <span className="text-2xl drop-shadow-md">{level.emoji}</span>
                        ) : (
                          <Star className="w-8 h-8 fill-current drop-shadow-md" />
                        )}
                      </div>
                    ) : (
                      <Lock className="w-6 h-6" />
                    )}
                  </motion.button>
                  <div className={`mt-2 font-black text-sm md:text-lg ${isUnlocked ? 'text-slate-800 bg-white/90 backdrop-blur px-3 py-1 rounded-full border border-slate-200/50 shadow-sm' : 'text-slate-400'} drop-shadow-sm text-center`}>
                      {level.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
