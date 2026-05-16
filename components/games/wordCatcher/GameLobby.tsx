import { Target, Play, Lock, Star, CheckCircle } from 'lucide-react';
import { Conversation, ConversationProgress } from './types';
import { CONVERSATIONS } from './constants';

interface GameLobbyProps {
  activeConv: Conversation;
  setActiveConv: (conv: Conversation) => void;
  startGame: () => void;
  progress: ConversationProgress;
}

export function GameLobby({ activeConv, setActiveConv, startGame, progress }: GameLobbyProps) {
  // حساب عدد المستويات المكتملة
  const completedCount = Object.values(progress).filter(p => p.completed).length;
  
  // التحقق من إذا كانت المحادثة مفتوحة
  const isUnlocked = (conv: Conversation) => {
    const convLevel = conv.level || 1;
    return convLevel <= completedCount + 1;
  };

  // الحصول على حالة المحادثة
  const getConvStatus = (conv: Conversation) => {
    return progress[conv.id];
  };

  return (
    <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-12 text-center overflow-y-auto">
      <div className="w-28 h-28 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[2.5rem] flex items-center justify-center text-white mb-8 shadow-2xl shadow-orange-500/30 transform hover:rotate-6 transition-transform">
        <Target size={56} className="text-white" />
      </div>
      <h1 className="text-5xl font-black text-slate-900 mb-3 tracking-tight">صائد الكلمات</h1>
      <p className="text-slate-500 font-bold mb-6 text-lg max-w-md">التقط الكلمات الصحيحة ورتبها لإتمام المحادثة قبل انتهاء الوقت!</p>
      
      {/* عداد التقدم */}
      <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 px-8 py-4 rounded-2xl border-2 border-indigo-200">
        <p className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-2">تقدمك</p>
        <div className="flex items-center gap-3">
          <CheckCircle className="text-green-500" size={24} />
          <span className="text-3xl font-black text-slate-800">{completedCount}</span>
          <span className="text-slate-500 font-bold">/ {CONVERSATIONS.length}</span>
        </div>
      </div>

      <div className="w-full max-w-4xl space-y-4 mb-10">
        <div className="space-y-3">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest text-right">المواضيع</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 direction-rtl max-h-[400px] overflow-y-auto px-2" dir="rtl">
            {CONVERSATIONS.map(c => {
              const unlocked = isUnlocked(c);
              const status = getConvStatus(c);
              const isActive = activeConv.id === c.id;
              
              return (
                <button 
                  key={c.id} 
                  onClick={() => unlocked && setActiveConv(c)} 
                  disabled={!unlocked}
                  className={`relative py-4 px-3 rounded-2xl font-bold transition-all border-2 text-sm ${
                    !unlocked 
                      ? 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-60' 
                      : isActive
                        ? 'bg-gradient-to-br from-slate-800 to-slate-900 text-white border-slate-900 shadow-xl scale-105' 
                        : status?.completed
                          ? 'bg-gradient-to-br from-green-50 to-emerald-50 text-green-700 border-green-300 hover:border-green-400 hover:shadow-lg'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  {/* رقم المستوى */}
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-black shadow-lg">
                    {c.level || 1}
                  </div>
                  
                  {/* أيقونة القفل أو الإكمال */}
                  {!unlocked && (
                    <div className="absolute -top-2 -left-2 w-7 h-7 bg-slate-400 text-white rounded-full flex items-center justify-center shadow-lg">
                      <Lock size={14} />
                    </div>
                  )}
                  
                  {status?.completed && (
                    <div className="absolute -top-2 -left-2 w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle size={14} />
                    </div>
                  )}
                  
                  <div className="mt-1">{c.name}</div>
                  
                  {/* النجوم */}
                  {status?.completed && (
                    <div className="flex justify-center gap-1 mt-2">
                      {[...Array(status.stars || 0)].map((_, i) => (
                        <Star key={i} size={12} className="text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <button 
        onClick={startGame} 
        disabled={!isUnlocked(activeConv)}
        className={`w-full max-w-sm py-5 rounded-[2rem] font-black text-2xl shadow-2xl transition-all flex items-center justify-center gap-3 ${
          isUnlocked(activeConv)
            ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-blue-500/30 active:scale-95'
            : 'bg-slate-200 text-slate-400 cursor-not-allowed'
        }`}
      >
        {isUnlocked(activeConv) ? (
          <>
            <Play size={28} fill="currentColor" />
            العب الآن
          </>
        ) : (
          <>
            <Lock size={28} />
            مقفل
          </>
        )}
      </button>
    </div>
  );
}
