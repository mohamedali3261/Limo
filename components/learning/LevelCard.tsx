import { motion } from 'motion/react';
import { Trophy } from 'lucide-react';

interface LevelCardProps {
  level: any;
  idx: number;
  onClick: () => void;
}

export const LevelCard = ({ level, idx, onClick }: LevelCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white border border-slate-200 rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all cursor-pointer group"
      onClick={onClick}
    >
       <div className="flex items-center gap-4">
         <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
            {level.icon_url ? (
              <img src={level.icon_url} alt="" className="w-10 h-10 object-contain" />
            ) : (
              <Trophy className="text-slate-300 group-hover:text-primary transition-colors" size={24} />
            )}
         </div>
         <div>
           <h3 className="font-black text-slate-900">{level.title}</h3>
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Level {idx + 1} • {level.lessons?.length || 0} Lessons</p>
         </div>
       </div>
       <div className="mt-4 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-1000" 
            style={{ width: `${(level.lessons?.filter((l: any) => l.is_completed).length / level.lessons?.length * 100) || 0}%` }} 
          />
       </div>
    </motion.div>
  );
};
