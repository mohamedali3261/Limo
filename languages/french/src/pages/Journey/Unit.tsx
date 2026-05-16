import { FC } from 'react';
import { Node } from './Node';

import { BookOpen } from 'lucide-react';

interface UnitProps {
  unit: any;
}

const offsets = [
  "translate-x-0",
  "-translate-x-6",
  "-translate-x-12",
  "-translate-x-6",
  "translate-x-0",
  "translate-x-6",
  "translate-x-12",
  "translate-x-6",
];

export const Unit: FC<UnitProps> = ({ unit }) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Unit Header */}
      <div className={`w-full rounded-2xl p-4 sm:p-6 text-white mb-8 ${unit.color} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden`} style={{ boxShadow: '0 8px 0 rgba(0,0,0,0.1)' }}>
        <div className="absolute inset-0 bg-white/10 w-full h-1/2 rounded-b-[100%] opacity-20 transform -translate-y-1/2 pointer-events-none" />
        
        <div className="relative z-10 flex items-center justify-between w-full">
          <div>
            <h2 className="text-2xl font-black mb-1 flex items-center gap-2">
              {unit.title}
            </h2>
            <p className="text-white/90 font-medium text-lg leading-relaxed max-w-md">{unit.desc}</p>
          </div>
          
          <div className="hidden sm:block opacity-20 transform rotate-12 bg-white rounded-xl p-3">
             <BookOpen size={48} className="text-slate-900" />
          </div>
        </div>
        
        <button className="relative z-10 mt-4 sm:mt-0 w-full sm:w-auto text-center shrink-0 bg-white text-slate-800 font-bold py-3 px-8 rounded-xl hover:bg-slate-50 transition-colors" style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.1)' }}>
          مراجعة
        </button>
      </div>

      {/* Path Nodes */}
      <div className="flex flex-col items-center gap-4 relative w-full py-4">
        {/* Connection Line (Pseudo) - since calculating precise SVG paths for staggered items without fixed heights is tough, 
            we rely on the staggered circles themselves to form the visual path, just like typical mobile games. */}
            
        {unit.lessons.map((lesson: any, index: number) => {
          const isTrophy = lesson.type === 'test';
          const offsetClass = isTrophy ? 'translate-x-0' : offsets[index % offsets.length];
          
          return (
            <div key={lesson.id} className={`relative z-10 ${offsetClass}`}>
              <Node lesson={lesson} unit={unit} isLast={index === unit.lessons.length - 1} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
