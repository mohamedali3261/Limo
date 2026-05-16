import { motion } from 'motion/react';
import { Lock, Star, CheckCircle, Zap } from 'lucide-react';
import { Conversation, ConversationProgress } from '../games/wordCatcher/types';

interface WordCatcherLevelCardProps {
  conversation: Conversation;
  isUnlocked: boolean;
  isActive: boolean;
  progress?: ConversationProgress[string];
  onSelect: (conv: Conversation) => void;
  onPlay: (conv: Conversation) => void;
}

export function WordCatcherLevelCard({
  conversation,
  isUnlocked,
  isActive,
  progress,
  onSelect,
  onPlay
}: WordCatcherLevelCardProps) {
  const level = conversation.level || 1;
  const isCompleted = progress?.completed;
  const stars = progress?.stars || 0;

  return (
    <motion.button
      whileHover={isUnlocked ? { scale: 1.02, y: -4 } : {}}
      whileTap={isUnlocked ? { scale: 0.98 } : {}}
      onClick={() => {
        if (isUnlocked) {
          onSelect(conversation);
        }
      }}
      disabled={!isUnlocked}
      className={`relative rounded-3xl p-6 shadow-lg transition-all duration-300 overflow-hidden group w-full text-right ${
        !isUnlocked
          ? 'bg-slate-100 opacity-60 cursor-not-allowed'
          : isActive
            ? 'bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-2xl shadow-slate-900/30'
            : isCompleted
              ? 'bg-gradient-to-br from-green-50 to-emerald-50 text-slate-800 shadow-lg shadow-green-200/30 hover:shadow-green-300/50'
              : 'bg-white text-slate-800 hover:shadow-xl hover:shadow-slate-200/50'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between gap-4">
        {/* Left Side - Icon and Info */}
        <div className="flex items-center gap-4 flex-1">
          <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
            isActive
              ? 'bg-white/20'
              : isCompleted
                ? 'bg-green-200/50'
                : 'bg-slate-100'
          }`}>
            <Zap size={28} className={isActive ? 'text-white' : isCompleted ? 'text-green-600' : 'text-slate-400'} />
          </div>

          <div className="flex-1">
            <h3 className={`text-lg font-black leading-tight ${
              isActive ? 'text-white' : isCompleted ? 'text-green-700' : 'text-slate-800'
            }`}>
              {conversation.name}
            </h3>
            <p className={`text-xs font-bold mt-1 ${
              isActive ? 'text-white/70' : isCompleted ? 'text-green-600/70' : 'text-slate-500'
            }`}>
              {conversation.lines.length} جملة
            </p>
          </div>
        </div>

        {/* Right Side - Level Badge and Status */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Level Badge */}
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-sm ${
            isActive
              ? 'bg-white/20 text-white'
              : isCompleted
                ? 'bg-green-300 text-green-700'
                : 'bg-indigo-500 text-white'
          }`}>
            {level}
          </div>

          {/* Status Icon */}
          {!isUnlocked && (
            <div className="w-10 h-10 rounded-full bg-slate-400 text-white flex items-center justify-center shadow-lg">
              <Lock size={18} />
            </div>
          )}

          {isCompleted && (
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg">
                <CheckCircle size={18} />
              </div>
              {stars > 0 && (
                <div className="flex gap-0.5">
                  {[...Array(stars)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Play Button - Shows on hover when unlocked and not active */}
      {isUnlocked && !isActive && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          onClick={(e) => {
            e.stopPropagation();
            onPlay(conversation);
          }}
          className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"
        >
          <div className="bg-white text-slate-800 px-6 py-3 rounded-full font-black flex items-center gap-2 shadow-lg">
            <Zap size={20} className="fill-current" />
            العب الآن
          </div>
        </motion.button>
      )}

      {/* Active Indicator */}
      {isActive && (
        <div className="absolute top-3 left-3 w-3 h-3 bg-white rounded-full shadow-lg animate-pulse"></div>
      )}
    </motion.button>
  );
}
