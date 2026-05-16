import { Link } from 'react-router-dom';
import { Flame, Trophy, Rabbit, Snail } from 'lucide-react';
import { useProgress } from '../../hooks/useProgress';
import { useAudioSettings } from '../../context/AudioSettingsContext';

export function TopBar() {
  const { streak } = useProgress();
  const { audioSpeed, cycleAudioSpeed } = useAudioSettings();

  const getAudioSpeedConfig = () => {
    if (audioSpeed === 1) return { label: 'طبيعي', color: 'bg-stone-100 text-stone-500 border-stone-200 hover:bg-stone-200', icon: Rabbit };
    if (audioSpeed === 0.75) return { label: 'بطيء', color: 'bg-blue-100 text-blue-600 border-blue-200', icon: Snail };
    return { label: 'سلحفاة', color: 'bg-purple-100 text-purple-600 border-purple-200', icon: Snail };
  };

  const speedConfig = getAudioSpeedConfig();
  const SpeedIcon = speedConfig.icon;

  return (
    <div className="h-16 bg-white border-b-2 border-stone-200 px-6 flex items-center justify-between sticky top-0 z-40 bg-white/80 backdrop-blur-md">
       <div className="font-extrabold text-[#58cc02] text-2xl tracking-tighter lg:hidden">Español</div>
       <div className="hidden lg:block"></div>
       <div className="flex gap-4">
          <button 
            onClick={cycleAudioSpeed}
            className={`flex items-center gap-2 font-bold px-3 py-1.5 rounded-xl border shadow-sm transition-colors ${speedConfig.color}`}
            title={`سرعة الصوت: ${speedConfig.label}`}
          >
             <SpeedIcon size={20} />
             <span className="hidden sm:inline">{audioSpeed}x</span>
          </button>
          <Link to="/spanish/achievements" className="flex items-center gap-2 font-bold text-stone-500 hover:text-stone-700 bg-stone-100 px-3 py-1.5 rounded-xl hover:bg-stone-200 transition-colors">
             <Trophy size={20} className="text-[#ffc800]" />
             <span className="hidden sm:inline">الإنجازات</span>
          </Link>
          <div className="flex items-center gap-2 font-bold text-orange-500 bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-100 shadow-sm cursor-help" title="شعلة الحماس">
             <Flame size={20} className="fill-orange-500" />
             <span>{streak || 0}</span>
          </div>
       </div>
    </div>
  );
}
