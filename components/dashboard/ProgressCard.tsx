export function ProgressCard({ user }: { user: any }) {
  const progress = user ? (user.xp % (user.level * 100)) / (user.level * 100) * 100 : 0;
  const xpNeeded = user ? (user.level * 100) - (user.xp % (user.level * 100)) : 0;

  return (
    <div className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-slate-200 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
      {/* Subtle Pattern Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:scale-110 transition-transform duration-1000" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '16px 16px' }} 
      />
      
      <div className="relative z-10 w-28 h-28 bg-slate-900 text-white rounded-3xl flex flex-col items-center justify-center font-display shadow-2xl shrink-0 border-b-8 border-black">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1 leading-none">LEVEL</span>
        <span className="text-5xl font-black">{user?.level}</span>
        <div className="absolute -top-4 -right-4 w-10 h-10 bg-yellow-400 rounded-2xl flex items-center justify-center text-lg shadow-xl rotate-12 border-2 border-white">⭐</div>
      </div>
      
      <div className="flex-1 w-full relative z-10 text-right md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-4 gap-2">
          <div>
            <h3 className="font-black text-2xl text-slate-900 tracking-tight">تقدّمك الحالي</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Hero Progress Tracker</p>
          </div>
          <span className="font-black text-primary bg-primary/10 px-4 py-1.5 rounded-full text-xs">
            باقي {xpNeeded} نقطة لمستوى {user ? user.level + 1 : 2}
          </span>
        </div>
        <div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden p-1 border border-slate-200">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-1000 ease-out shadow-sm" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
