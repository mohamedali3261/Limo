import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Map, Headphones, Home, Target, Flame, MessageCircle, Globe, Trophy, BrainCircuit, Snail, Rabbit, Ear } from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';
import { useAudioSettings } from '../../context/AudioSettingsContext';

export function Navbar() {
  const location = useLocation();
  const { streak } = useProgress();
  const { audioSpeed, cycleAudioSpeed } = useAudioSettings();

  const links = [
    { to: '/lessons', label: 'المسار', icon: Map },
    { to: '/review', label: 'البطاقات', icon: BrainCircuit },
    { to: '/scenarios', label: 'النصوص', icon: MessageCircle },
    { to: '/conversations', label: 'محادثات', icon: Ear },
  ];

  const getAudioSpeedConfig = () => {
    if (audioSpeed === 1) return { label: 'طبيعي', color: 'bg-stone-100 text-stone-500 border-stone-200 hover:bg-stone-200', icon: Rabbit };
    if (audioSpeed === 0.75) return { label: 'بطيء', color: 'bg-blue-100 text-blue-600 border-blue-200', icon: Snail };
    return { label: 'سلحفاة', color: 'bg-purple-100 text-purple-600 border-purple-200', icon: Snail };
  };

  const speedConfig = getAudioSpeedConfig();
  const SpeedIcon = speedConfig.icon;

  return (
    <>
      <nav className="fixed right-0 top-0 bottom-0 w-[240px] xl:w-[280px] bg-white border-l-2 border-stone-200 p-6 hidden lg:flex flex-col gap-2 z-50 overflow-y-auto">
        <div className="font-extrabold text-[#58cc02] text-3xl mb-8 tracking-tighter px-4">Español</div>
        
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`
                relative flex items-center gap-4 px-4 py-3 rounded-2xl font-bold text-lg transition-all
                ${isActive 
                  ? 'text-[#1cb0f6] bg-[#ddf4ff] border-2 border-[#84d8ff]' 
                  : 'text-stone-500 hover:bg-stone-100 border-2 border-transparent hover:border-stone-200'}
              `}
            >
              <Icon size={28} strokeWidth={isActive ? 2.5 : 2} />
              {link.label}
            </Link>
          );
        })}

        <div className="mt-8 px-4">
          <button 
            onClick={cycleAudioSpeed}
            className={`
              w-full flex items-center gap-4 px-4 py-3 rounded-2xl font-bold text-lg transition-all border-2
              ${audioSpeed < 1 ? speedConfig.color : 'bg-white text-stone-500 border-[#e5e5e5] hover:bg-stone-50'}
            `}
          >
            <SpeedIcon size={28} strokeWidth={audioSpeed < 1 ? 2.5 : 2} />
            سرعة الصوت: {audioSpeed}x
          </button>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-stone-200 pb-safe pt-2 px-2 flex justify-around lg:hidden z-50 overflow-x-auto">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.to;
          
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`
                relative flex flex-col items-center p-2 min-w-[64px] rounded-xl transition-colors shrink-0
                ${isActive ? 'text-[#1cb0f6] bg-[#ddf4ff]' : 'text-stone-400 hover:bg-stone-50'}
              `}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className="mb-1" />
              <span className="text-[10px] font-bold whitespace-nowrap">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
