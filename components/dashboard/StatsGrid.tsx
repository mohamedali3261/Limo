import { Star, Zap, Flame, Trophy } from 'lucide-react';

export function StatsGrid({ user }: { user: any }) {
  const stats = [
    { icon: Trophy, label: 'المستوى', value: user?.level, color: 'text-yellow-500', bg: 'bg-yellow-50', border: 'border-yellow-200' },
    { icon: Star, label: 'إجمالي النقاط', value: user?.xp, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200' },
    { icon: Flame, label: 'سلسلة الأيام', value: user?.streak, color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-200' },
    { icon: Zap, label: 'التصنيف', value: 'برونزي', color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-200' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div key={i} className={`bg-white p-6 rounded-3xl border-2 ${stat.border} flex flex-col items-center justify-center text-center shadow-sm hover:-translate-y-1 transition-transform`}>
            <div className={`w-12 h-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-3`}>
              <Icon size={24} />
            </div>
            <p className="text-3xl font-display font-black text-gray-900">{stat.value}</p>
            <p className="font-bold text-gray-500 text-sm uppercase tracking-wide">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
