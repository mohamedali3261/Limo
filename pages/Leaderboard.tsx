import { useState, useEffect } from 'react';
import { apiFetch } from '../lib/api';
import { Trophy, Medal, Star, Flame, User } from 'lucide-react';
import { useAuthStore } from '../lib/store/auth';
import { LoadingPage } from '../components/common/LoadingPage';
import { motion } from 'motion/react';

export default function Leaderboard() {
  const [leaders, setLeaders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentUserRank, setCurrentUserRank] = useState<number | null>(null);
  const { user } = useAuthStore();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await apiFetch('/api/leaderboard');
        const leadersList = Array.isArray(data) ? data : data.leaderboard || [];
        setLeaders(leadersList);
        
        // حساب ترتيب المستخدم الحالي
        if (user) {
          const userIndex = leadersList.findIndex((l: any) => l.username === user.username);
          setCurrentUserRank(userIndex !== -1 ? userIndex + 1 : null);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, [user]);

  if (loading) {
    return null;
  }

  const currentUserInTop10 = leaders.slice(0, 10).some(l => l.username === user?.username);
  const currentUserData = leaders.find(l => l.username === user?.username);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in zoom-in-95 duration-500">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-[2rem] border-2 border-gray-100 shadow-sm flex flex-col items-center text-center relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="w-20 h-20 bg-yellow-50 text-yellow-500 rounded-3xl flex items-center justify-center mb-4 rotate-3">
          <Trophy size={40} />
        </div>
        <h1 className="text-3xl font-display font-black text-gray-900 mb-2">لوحة المتصدرين العالمية</h1>
        <p className="text-gray-500 font-medium max-w-lg">ارتقِ في التصنيف من خلال كسب النقاط (XP) من الدروس. هل يمكنك الوصول إلى القمة؟</p>
        
        {currentUserRank && (
          <div className="mt-4 px-6 py-3 bg-primary/10 text-primary rounded-2xl font-black">
            ترتيبك الحالي: #{currentUserRank} من {leaders.length}
          </div>
        )}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden"
      >
        <div className="p-8 border-b border-slate-100 bg-slate-50/50">
          <div className="grid grid-cols-[80px_1fr_100px] md:grid-cols-[100px_1fr_120px_140px] gap-4 font-black text-slate-400 uppercase tracking-[0.2em] text-[10px] md:text-xs px-4">
            <div className="text-center">الترتيب</div>
            <div>اللاعب</div>
            <div className="hidden md:block text-right">التتالي</div>
            <div className="text-right">النقاط</div>
          </div>
        </div>
        
        <div className="divide-y divide-slate-100">
          {leaders.slice(0, 10).map((leader, index) => {
            const isCurrentUser = user?.username === leader.username;
            return (
              <motion.div 
                key={leader.username}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`grid grid-cols-[80px_1fr_100px] md:grid-cols-[100px_1fr_120px_140px] gap-4 items-center p-6 transition-all duration-300 ${isCurrentUser ? 'bg-primary/5 border-l-4 border-primary' : 'hover:bg-slate-50/50'}`}
              >
                <div className="flex justify-center">
                  {index === 0 ? (
                    <div className="w-12 h-12 bg-yellow-400 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-yellow-200 rotate-3"><Medal size={24} /></div>
                  ) : index === 1 ? (
                    <div className="w-12 h-12 bg-slate-300 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-slate-100 -rotate-3"><Medal size={24} /></div>
                  ) : index === 2 ? (
                    <div className="w-12 h-12 bg-orange-300 text-white rounded-2xl flex items-center justify-center font-black shadow-lg shadow-orange-100 rotate-6"><Medal size={24} /></div>
                  ) : (
                    <div className="w-12 h-12 font-black text-slate-300 flex items-center justify-center text-xl">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  )}
                </div>
                
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center font-black text-xl uppercase hidden sm:flex border ${isCurrentUser ? 'bg-gradient-to-br from-primary to-orange-600 text-white border-primary' : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 border-slate-200'}`}>
                    {leader.username.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-slate-900 text-lg md:text-xl flex items-center gap-2">
                       {leader.username}
                       {isCurrentUser && <span className="text-[10px] font-black bg-primary text-white px-2 py-0.5 rounded-lg uppercase tracking-widest">أنت</span>}
                    </div>
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest">المستوى {leader.level}</div>
                  </div>
                </div>

                <div className="hidden md:flex flex-col items-end justify-center">
                   <div className="flex items-center gap-2 font-black text-slate-600 px-4 py-2 rounded-xl bg-slate-100">
                      <Flame size={18} className={leader.streak > 0 ? "text-orange-500 fill-orange-500" : "text-slate-300"} />
                      <span>{leader.streak}</span>
                   </div>
                </div>

                <div className="flex flex-col items-end justify-center">
                   <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl font-black text-lg">
                      {leader.xp.toLocaleString()}
                      <Star size={16} fill="currentColor" className="hidden sm:block opacity-50"/>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* عرض المستخدم الحالي إذا لم يكن في أول 10 */}
      {!currentUserInTop10 && currentUserData && currentUserRank && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-primary/10 to-orange-50 rounded-[2rem] border-2 border-primary/20 shadow-xl overflow-hidden"
        >
          <div className="p-4 bg-primary/5 border-b border-primary/10">
            <div className="flex items-center justify-center gap-2 text-primary font-black text-sm">
              <User size={16} />
              <span>ترتيبك</span>
            </div>
          </div>
          <div className="grid grid-cols-[80px_1fr_100px] md:grid-cols-[100px_1fr_120px_140px] gap-4 items-center p-6">
            <div className="flex justify-center">
              <div className="w-12 h-12 font-black text-primary flex items-center justify-center text-xl bg-white rounded-xl">
                {String(currentUserRank).padStart(2, '0')}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-orange-600 text-white rounded-2xl flex items-center justify-center font-black text-xl uppercase hidden sm:flex border border-primary">
                {currentUserData.username.charAt(0)}
              </div>
              <div>
                <div className="font-black text-gray-900 text-lg md:text-xl flex items-center gap-2">
                   {currentUserData.username}
                   <span className="text-[10px] font-black bg-primary text-white px-2 py-0.5 rounded-lg uppercase tracking-widest">أنت</span>
                </div>
                <div className="text-xs font-black text-gray-500 uppercase tracking-widest">المستوى {currentUserData.level}</div>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-end justify-center">
               <div className="flex items-center gap-2 font-black text-gray-700 px-4 py-2 rounded-xl bg-white">
                  <Flame size={18} className={currentUserData.streak > 0 ? "text-orange-500 fill-orange-500" : "text-slate-300"} />
                  <span>{currentUserData.streak}</span>
               </div>
            </div>

            <div className="flex flex-col items-end justify-center">
               <div className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-xl font-black text-lg">
                  {currentUserData.xp.toLocaleString()}
                  <Star size={16} fill="currentColor" className="hidden sm:block opacity-50"/>
               </div>
            </div>
          </div>
        </motion.div>
      )}

      {leaders.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <Trophy size={48} className="mx-auto mb-4 opacity-20" />
          <p className="font-bold">لا يوجد متصدرون حالياً</p>
        </div>
      )}
    </div>
  );
}
