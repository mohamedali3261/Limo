import { 
  Sprout, Tent, Waves, Sparkles, Cloud, AudioLines, Flame, Star, Zap, User 
} from 'lucide-react';
import React from 'react';

export const AREA_THEMES = [
  {
    id: 'forest',
    name: 'وادي البدايات',
    bg: 'bg-[#F0FDF4]',
    accent: '#22C55E',
    icon: Sprout,
    gradient: 'from-green-50 to-emerald-100',
    decoration: 'Lush Forest',
    particles: [React.createElement(Sprout, { size: 16 }), React.createElement(Sprout, { size: 16 }), React.createElement(Sprout, { size: 16 })]
  },
  {
    id: 'desert',
    name: 'كثبان المعرفة',
    bg: 'bg-[#FFFBEB]',
    accent: '#F59E0B',
    icon: Tent,
    gradient: 'from-orange-50 to-amber-100',
    decoration: 'Golden Dunes',
    particles: [React.createElement(Flame, { size: 16 }), React.createElement(Zap, { size: 16 }), React.createElement(Flame, { size: 16 })]
  },
  {
    id: 'ocean',
    name: 'أعماق الحكمة',
    bg: 'bg-[#F0F9FF]',
    accent: '#0EA5E9',
    icon: Waves,
    gradient: 'from-blue-50 to-sky-100',
    decoration: 'Deep Ocean',
    particles: [React.createElement(Waves, { size: 16 }), React.createElement(Waves, { size: 16 }), React.createElement(Waves, { size: 16 })]
  },
  {
    id: 'magic',
    name: 'مملكة الأساطير',
    bg: 'bg-[#F5F3FF]',
    accent: '#8B5CF6',
    icon: Sparkles,
    gradient: 'from-purple-50 to-violet-100',
    decoration: 'Mystic Realm',
    particles: [React.createElement(Sparkles, { size: 16 }), React.createElement(Sparkles, { size: 16 }), React.createElement(Star, { size: 16 })]
  },
  {
    id: 'space',
    name: 'عالم الفضاء',
    bg: 'bg-[#1e1e2f]',
    accent: '#6366F1',
    icon: Cloud,
    gradient: 'from-gray-900 to-indigo-900',
    decoration: 'Galaxy Explorer',
    particles: [React.createElement(Zap, { size: 16 }), React.createElement(Star, { size: 16 }), React.createElement(Sparkles, { size: 16 })],
    textTheme: 'text-white'
  },
  {
    id: 'cyber',
    name: 'المدينة الرقمية',
    bg: 'bg-[#0f172a]',
    accent: '#22D3EE',
    icon: AudioLines,
    gradient: 'from-slate-900 to-cyan-900',
    decoration: 'Cyber City',
    particles: [React.createElement(Zap, { size: 16 }), React.createElement(Zap, { size: 16 }), React.createElement(Zap, { size: 16 })],
    textTheme: 'text-white'
  }
];

export const MOCK_FRIENDS = [
  { id: 1, name: 'سارة', avatar: React.createElement(User, { size: 16, className: "text-blue-500" }), reachedNode: 2 },
  { id: 2, name: 'أحمد', avatar: React.createElement(User, { size: 16, className: "text-green-500" }), reachedNode: 5 },
  { id: 3, name: 'يوسف', avatar: React.createElement(User, { size: 16, className: "text-purple-500" }), reachedNode: 12 },
  { id: 4, name: 'منى', avatar: React.createElement(User, { size: 16, className: "text-pink-500" }), reachedNode: 18 }
];
