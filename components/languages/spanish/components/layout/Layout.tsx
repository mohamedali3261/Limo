import { Outlet } from 'react-router-dom';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Map, MessageCircle, BrainCircuit, Ear, Award, Flame, GraduationCap, User } from 'lucide-react';
import { useAuthStore } from '../../../../../lib/store/auth';
import { useProgress } from '../../hooks/useProgress';
import { SpanishFlag } from '../ui/SpanishFlag';
import LevelUpModal from '../../../../../components/common/LevelUpModal';
import { useState, useEffect } from 'react';

export function Layout() {
  const location = useLocation();
  const { user } = useAuthStore();
  const { streak } = useProgress();
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [newLevel, setNewLevel] = useState(0);

  // Calculate level progress
  const calculateLevel = (xp: number): number => {
    let level = 1;
    let totalXPNeeded = 0;
    
    while (totalXPNeeded <= xp) {
      totalXPNeeded += level * 50;
      if (totalXPNeeded <= xp) {
        level++;
      }
    }
    
    return level;
  };

  const getLevelProgress = (xp: number): { percentage: number } => {
    const level = calculateLevel(xp);
    let totalXPForPreviousLevels = 0;
    for (let i = 1; i < level; i++) {
      totalXPForPreviousLevels += i * 50;
    }
    
    const xpInCurrentLevel = xp - totalXPForPreviousLevels;
    const xpNeededForCurrentLevel = level * 50;
    const percentage = Math.min((xpInCurrentLevel / xpNeededForCurrentLevel) * 100, 100);
    
    return { percentage };
  };

  useEffect(() => {
    const levelUp = localStorage.getItem('spanish_level_up');
    if (levelUp === 'true') {
      const level = parseInt(localStorage.getItem('spanish_new_level') || '0', 10);
      setNewLevel(level);
      setShowLevelUp(true);
      localStorage.removeItem('spanish_level_up');
      localStorage.removeItem('spanish_new_level');
    }
  }, [location.pathname]);

  const navItems = [
    { name: 'خريطة المغامرة', path: '/spanish', icon: Map },
    { name: 'البطاقات', path: '/spanish/review', icon: BrainCircuit },
    { name: 'النصوص', path: '/spanish/scenarios', icon: MessageCircle },
    { name: 'محادثات', path: '/spanish/conversations', icon: Ear },
    { name: 'حسابي', path: '/spanish/profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col md:flex-row overflow-hidden font-sans" dir="rtl">
      <LevelUpModal isOpen={showLevelUp} level={newLevel} onClose={() => setShowLevelUp(false)} />
      {/* Background Decor */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex w-56 bg-white/80 backdrop-blur-xl border-l border-gray-100 flex-col shrink-0 flex-none z-20 shadow-2xl shadow-gray-200/20">
        <div className="flex items-center justify-center">
          <img src="/logo (4).png" alt="Logo" className="h-24 w-auto" />
        </div>
        
        <div className="flex-1 px-6 py-6 flex flex-col gap-3">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] px-4 mb-2">تعلم اللغة الإسبانية</p>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path === '/spanish' && (location.pathname === '/spanish' || location.pathname === '/spanish/' || location.pathname === '/spanish/lessons'));
            const Icon = item.icon;
            return (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`group relative flex items-center gap-4 px-5 py-4 rounded-[1.5rem] font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-teal-600 text-white shadow-xl shadow-teal-600/30' 
                    : 'text-gray-500 hover:bg-teal-50/50 hover:text-teal-600'
                }`}
              >
                <Icon size={22} className={isActive ? 'scale-110' : 'group-hover:scale-110 transition-transform'} />
                <span className="text-[15px]">{item.name}</span>
                {isActive && (
                  <motion.div 
                    layoutId="active-pill-spanish"
                    className="absolute inset-0 bg-teal-600 -z-10 rounded-[1.5rem]"
                  />
                )}
              </Link>
            )
          })}
        </div>

        <div className="p-6 space-y-6">
          <Link 
            to="/languages"
            className="group flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-sm text-gray-400 hover:bg-teal-50 hover:text-teal-600 transition-all w-full"
          >
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
               <GraduationCap size={16} />
            </div>
            <span>تغيير اللغة</span>
          </Link>
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
          className="p-4 md:p-8 max-w-5xl mx-auto pb-24 md:pb-8"
        >
          <Outlet />
        </motion.div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden bg-white border-t border-gray-100 flex justify-around p-3 pb-6 fixed bottom-0 left-0 right-0 z-40 backdrop-blur-lg bg-white/90">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path === '/spanish' && (location.pathname === '/spanish' || location.pathname === '/spanish/' || location.pathname === '/spanish/lessons'));
          const Icon = item.icon;
          return (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`flex flex-col items-center gap-1 px-2 py-1 rounded-xl transition-all flex-shrink-0 ${isActive ? 'text-teal-600' : 'text-gray-400'}`}
            >
              <div className={`p-2 rounded-xl transition-all ${isActive ? 'bg-teal-600/10' : ''}`}>
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
