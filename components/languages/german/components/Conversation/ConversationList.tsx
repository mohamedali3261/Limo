import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { conversations } from '../../data/conversations';
import { MessageCircle, Headphones, Star, Lock, CheckCircle2 } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { useProgress } from '../../contexts/ProgressContext';

const cardColors = [
  { bg: 'bg-indigo-50', iconBg: 'bg-indigo-100', hoverIconBg: 'group-hover:bg-indigo-200', border: 'border-indigo-100', hoverBorder: 'hover:border-indigo-400', shadow: 'shadow-[0_6px_0_0_#c7d2fe]', hoverShadow: 'hover:shadow-[0_6px_0_0_#818cf8]', text: 'text-indigo-900', desc: 'text-indigo-600/80', accent: 'bg-indigo-500' },
  { bg: 'bg-amber-50', iconBg: 'bg-amber-100', hoverIconBg: 'group-hover:bg-amber-200', border: 'border-amber-100', hoverBorder: 'hover:border-amber-400', shadow: 'shadow-[0_6px_0_0_#fde68a]', hoverShadow: 'hover:shadow-[0_6px_0_0_#fbbf24]', text: 'text-amber-900', desc: 'text-amber-700/80', accent: 'bg-amber-500' },
  { bg: 'bg-emerald-50', iconBg: 'bg-emerald-100', hoverIconBg: 'group-hover:bg-emerald-200', border: 'border-emerald-100', hoverBorder: 'hover:border-emerald-400', shadow: 'shadow-[0_6px_0_0_#a7f3d0]', hoverShadow: 'hover:shadow-[0_6px_0_0_#34d399]', text: 'text-emerald-900', desc: 'text-emerald-700/80', accent: 'bg-emerald-500' },
  { bg: 'bg-rose-50', iconBg: 'bg-rose-100', hoverIconBg: 'group-hover:bg-rose-200', border: 'border-rose-100', hoverBorder: 'hover:border-rose-400', shadow: 'shadow-[0_6px_0_0_#fecdd3]', hoverShadow: 'hover:shadow-[0_6px_0_0_#fb7185]', text: 'text-rose-900', desc: 'text-rose-700/80', accent: 'bg-rose-500' },
  { bg: 'bg-cyan-50', iconBg: 'bg-cyan-100', hoverIconBg: 'group-hover:bg-cyan-200', border: 'border-cyan-100', hoverBorder: 'hover:border-cyan-400', shadow: 'shadow-[0_6px_0_0_#cffafe]', hoverShadow: 'hover:shadow-[0_6px_0_0_#22d3ee]', text: 'text-cyan-900', desc: 'text-cyan-700/80', accent: 'bg-cyan-500' },
  { bg: 'bg-fuchsia-50', iconBg: 'bg-fuchsia-100', hoverIconBg: 'group-hover:bg-fuchsia-200', border: 'border-fuchsia-100', hoverBorder: 'hover:border-fuchsia-400', shadow: 'shadow-[0_6px_0_0_#fbcfe8]', hoverShadow: 'hover:shadow-[0_6px_0_0_#e879f9]', text: 'text-fuchsia-900', desc: 'text-fuchsia-700/80', accent: 'bg-fuchsia-500' },
];

const IconComponent = ({ name, className }: { name: string; className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <Star className={className} />;
  return <Icon className={className} />;
};

export default function ConversationList() {
  const navigate = useNavigate();
  const { completedConversations } = useProgress();

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 flex flex-col items-center min-h-[calc(100vh-80px)]">
      <div className="w-full mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 inline-flex items-center gap-4">
          <MessageCircle className="w-12 h-12 text-primary-500" strokeWidth={2.5} />
          المحادثات الصوتية
        </h2>
        <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
          اختر أحد المواقف واستمع للمحادثات الواقعية لتقوية نطقك وتدريب مهارة الاستماع لديك للغة الألمانية بشكل سليم.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {conversations.map((conv, idx) => {
          const color = cardColors[idx % cardColors.length];
          const isCompleted = completedConversations.includes(conv.id);
          const isFirst = idx === 0;
          const prevConvIsCompleted = idx > 0 && completedConversations.includes(conversations[idx - 1].id);
          const isUnlocked = isFirst || prevConvIsCompleted;

          return (
            <motion.button
              key={conv.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              whileHover={isUnlocked ? { scale: 1.02, y: -4 } : {}}
              whileTap={isUnlocked ? { scale: 0.98 } : {}}
              onClick={() => isUnlocked && navigate(`/conversations/${conv.id}`)}
              disabled={!isUnlocked}
              className={`${isUnlocked ? color.bg : 'bg-slate-50'} rounded-[2rem] p-6 text-right flex flex-col border-2 ${isUnlocked ? color.border : 'border-slate-200'} ${isUnlocked ? color.hoverBorder : ''} ${isUnlocked ? color.shadow : 'shadow-[0_6px_0_0_#e2e8f0]'} ${isUnlocked ? color.hoverShadow : ''} transition-all duration-300 group relative overflow-hidden ${!isUnlocked ? 'cursor-not-allowed opacity-80 grayscale' : ''}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-5 ${isUnlocked ? color.iconBg : 'bg-slate-200'} rounded-[1.5rem] ${isUnlocked ? color.hoverIconBg : ''} transition-colors shadow-sm`}>
                  {isUnlocked ? (
                    <IconComponent name={conv.icon} className={`w-10 h-10 ${color.text}`} />
                  ) : (
                    <Lock className="w-10 h-10 text-slate-400" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  {isCompleted && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                  <div className={`w-12 h-12 rounded-full ${isUnlocked ? color.accent : 'bg-slate-300'} bg-opacity-10 group-hover:bg-opacity-20 flex items-center justify-center transition-colors`}>
                    <Headphones className={`w-6 h-6 ${isUnlocked ? color.text : 'text-slate-400'} opacity-60 group-hover:opacity-100`} />
                  </div>
                </div>
              </div>
              <h3 className={`text-2xl font-black ${isUnlocked ? color.text : 'text-slate-500'} mb-3 tracking-wide`}>
                {conv.title}
              </h3>
              <p className={`${isUnlocked ? color.desc : 'text-slate-400'} text-base font-bold leading-relaxed line-clamp-2`}>
                {isUnlocked ? conv.description : 'أكمل المحادثة السابقة لفتح هذه المحادثة'}
              </p>
              {isUnlocked && <div className={`absolute bottom-0 left-0 w-full h-1.5 ${color.accent} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
