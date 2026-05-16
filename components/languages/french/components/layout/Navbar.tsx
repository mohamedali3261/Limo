import { FC, ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Mic, Home, Lightbulb, GraduationCap, Map } from 'lucide-react';

const NavLink = ({ to, icon: Icon, children }: { to: string, icon: any, children: ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} className="relative px-3 py-2 rounded-xl flex items-center gap-2 group transition-colors text-slate-600 hover:text-blue-600 font-medium">
      {isActive && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute inset-0 bg-blue-50 rounded-xl -z-10"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`} />
      <span className={isActive ? 'text-blue-700' : ''}>{children}</span>
    </Link>
  );
};

export const Navbar: FC = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/french" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-800 font-sans tracking-tight">فرنسي<span className="text-blue-600">سهل</span></span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/french" icon={Map}>مسار التعلم</NavLink>
            <NavLink to="/french/pronunciation" icon={Mic}>محادثات تفاعلية</NavLink>
            <NavLink to="/french/phrases" icon={BookOpen}>المحادثة</NavLink>
            <NavLink to="/french/quizzes" icon={Lightbulb}>اختبارات</NavLink>
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-2 pb-safe pt-2 flex justify-around items-center h-16 pointer-events-auto">
        <MobNavLink to="/french" icon={Map} label="الرحلة" />
        <MobNavLink to="/french/pronunciation" icon={Mic} label="محادثة صوتية" />
        <MobNavLink to="/french/phrases" icon={BookOpen} label="جمل شائعة" />
        <MobNavLink to="/french/quizzes" icon={Lightbulb} label="اختبارات" />
      </nav>
    </>
  );
};

const MobNavLink = ({ to, icon: Icon, label }: { to: string, icon: any, label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`flex flex-col items-center justify-center w-full h-full gap-1 ${isActive ? 'text-blue-600' : 'text-slate-500'}`}>
      <Icon className={`w-6 h-6 ${isActive ? 'fill-blue-100' : ''}`} />
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
};
