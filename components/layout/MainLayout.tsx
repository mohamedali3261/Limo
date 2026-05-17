import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../lib/store/auth';
import { Languages, MessageCircle, Bookmark, LogOut, Award, Flame, Trophy, BookOpen, GraduationCap, Gamepad2, Smile, User } from 'lucide-react';
import { motion } from 'motion/react';
import { BritishFlag } from '../ui/BritishFlag';

export default function MainLayout() {
  const { user, logout } = useAuthStore();
  const location = useLocation();

  const navItems = [
    { name: 'خريطة المغامرة', path: '/learning', icon: GraduationCap },
    { name: 'الحكايات', path: '/stories', icon: Bookmark },
    { name: 'المحادثة', path: '/voice-conversation', icon: MessageCircle },
    { name: 'الألعاب', path: '/game', icon: Gamepad2 },
    { name: 'للأطفال', path: '/kids', icon: Smile },
    { name: 'البطاقات', path: '/flashcards', icon: BookOpen },
    { name: 'حسابي', path: '/profile', icon: User },
    // { name: 'المتصدرون', path: '/leaderboard', icon: Trophy },
  ];

  // if (user?.role === 'admin') {
  //   navItems.push({ name: 'Admin', path: '/admin', icon: ShieldAlert });
  // }

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col md:flex-row overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex w-48 bg-white/80 backdrop-blur-xl border-r border-gray-100 flex-col shrink-0 flex-none z-20 shadow-2xl shadow-gray-200/20 overflow-y-auto">
        <div className="flex items-center justify-center">
          <img src="/logo (4).png" alt="Logo" className="h-24 w-auto" />
        </div>
        
        <div className="flex-1 px-4 py-4 flex flex-col gap-2">
          <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] px-3 mb-1">خريطة المغامرة</p>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const Icon = item.icon;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                    : 'text-gray-500 hover:bg-orange-50/50 hover:text-primary'
                }`}
              >
                <Icon size={20} className={isActive ? 'scale-110' : 'group-hover:scale-110 transition-transform'} />
                <span className="text-sm">{item.name}</span>
                {isActive && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary -z-10 rounded-xl"
                  />
                )}
              </Link>
            )
          })}
        </div>

        <div className="p-4 space-y-4 border-t border-gray-100">
          <Link 
            to="/languages"
            className="group flex items-center gap-3 px-4 py-3 rounded-xl font-black text-xs text-gray-400 hover:bg-orange-50 hover:text-primary transition-all w-full"
          >
            <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors">
               <Languages size={14} />
            </div>
            <span>تغيير اللغة</span>
          </Link>
          
          {/* <button 
            onClick={logout} 
            className="group flex items-center gap-3 px-4 py-3 rounded-xl font-black text-xs text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all w-full"
          >
            <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
               <LogOut size={14} />
            </div>
            <span>Logout Account</span>
          </button> */}
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white border-b border-gray-100 flex items-center justify-center sticky top-0 z-30">
        <img src="/logo (4).png" alt="Logo" className="h-16 w-auto" />
      </div>

      <main className="flex-1 relative h-[calc(100vh-140px)] md:h-screen overflow-y-auto bg-transparent">
        <motion.div 
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-4 md:p-8 max-w-5xl mx-auto pb-24 md:pb-8 h-full"
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden bg-white border-t border-gray-100 flex justify-around p-3 pb-6 fixed bottom-0 left-0 right-0 z-40 backdrop-blur-lg bg-white/90 overflow-x-auto">
        {[
          { name: 'خريطة المغامرة', path: '/learning', icon: GraduationCap },
          { name: 'الحكايات', path: '/stories', icon: Bookmark },
          { name: 'المحادثة', path: '/voice-conversation', icon: MessageCircle },
          { name: 'الألعاب', path: '/game', icon: Gamepad2 },
          { name: 'للأطفال', path: '/kids', icon: Smile },
          { name: 'البطاقات', path: '/flashcards', icon: BookOpen },
          { name: 'حسابي', path: '/profile', icon: User },
        ].map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`flex flex-col items-center gap-1 px-2 py-1 rounded-xl transition-all flex-shrink-0 ${isActive ? 'text-primary' : 'text-gray-400'}`}
            >
              <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-primary/10' : ''}`}>
                <Icon size={18} />
              </div>
              <span className="text-[8px] font-black uppercase tracking-tighter whitespace-nowrap">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  );
}
