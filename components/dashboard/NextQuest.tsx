import { GraduationCap, Trophy, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NextQuest() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-display font-black text-slate-900">خطوتك التالية</h2>
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-lg">Action Items</span>
      </div>
      <div className="flex flex-col gap-4">
        <Link to="/learning" className="group bg-white p-6 rounded-[2rem] border border-slate-200 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all flex items-center gap-6 relative overflow-hidden">
           <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors border border-slate-100">
             <GraduationCap size={32} />
           </div>
           <div>
             <h3 className="font-black text-xl text-slate-900 mb-1">خارطة الطريق</h3>
             <p className="text-slate-500 font-bold text-sm">أكمل دروسك اليومية وحقق هدفك.</p>
           </div>
           <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <GraduationCap size={40} />
           </div>
        </Link>
        <Link to="/flashcards" className="group bg-white p-6 rounded-[2rem] border border-slate-200 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all flex items-center gap-6 relative overflow-hidden">
           <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors border border-slate-100">
             <BookOpen size={32} />
           </div>
           <div>
             <h3 className="font-black text-xl text-slate-900 mb-1">بطاقات الذاكرة</h3>
             <p className="text-slate-500 font-bold text-sm">راجع الكلمات بأسلوب التكرار المتباعد.</p>
           </div>
           <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <BookOpen size={40} />
           </div>
        </Link>
        <Link to="/leaderboard" className="group bg-white p-6 rounded-[2rem] border border-slate-200 hover:border-primary hover:shadow-xl hover:shadow-primary/5 transition-all flex items-center gap-6 relative overflow-hidden">
           <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors border border-slate-100">
             <Trophy size={32} />
           </div>
           <div>
             <h3 className="font-black text-xl text-slate-900 mb-1">لوحة الشرف</h3>
             <p className="text-slate-500 font-bold text-sm">شاهد ترتيبك بين الأبطال الآخرين.</p>
           </div>
           <div className="absolute top-4 left-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <Trophy size={40} />
           </div>
        </Link>
      </div>
    </>
  );
}
