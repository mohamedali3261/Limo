import { Gamepad2, Music, Dumbbell, Trophy } from 'lucide-react';

export const unit13 = {
  id: 13,
  title: 'الوحدة 13: الهوايات والرياضة',
  desc: 'تحدث عن ما تحب فعله في وقت فراغك',
  color: 'bg-rose-500',
  headerShadow: 'shadow-rose-600',
  buttonColor: 'bg-rose-500',
  buttonShadow: 'shadow-rose-600',
  textColor: 'text-rose-500',
  difficulty: 'advanced',

  lessons: [
    { id: '13-1', type: 'lesson', status: 'locked', icon: Gamepad2, title: 'الهوايات', difficulty: 'advanced' },
    { id: '13-2', type: 'lesson', status: 'locked', icon: Dumbbell, title: 'الرياضة', difficulty: 'advanced' },
    { id: '13-3', type: 'lesson', status: 'locked', icon: Music, title: 'الاستماع', difficulty: 'advanced' },
    { id: '13-4', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 13', difficulty: 'advanced' },
  ]
};

