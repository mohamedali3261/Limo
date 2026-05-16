import { Users, Target, Briefcase, SpellCheck, Trophy } from 'lucide-react';

export const unit5 = {
  id: 5,
  title: 'الوحدة 5: العائلة والمهن',
  desc: 'أفراد العائلة والوظائف وكيف تتحدث عنهم',
  color: 'bg-rose-500',
  headerShadow: 'shadow-rose-600',
  buttonColor: 'bg-rose-500',
  buttonShadow: 'shadow-rose-600',
  textColor: 'text-rose-500',
  lessons: [
    { id: '5-1', type: 'lesson', status: 'locked', icon: Users, title: 'أفراد العائلة' },
    { id: '5-2', type: 'lesson', status: 'locked', icon: Target, title: 'توصيل أفراد العائلة' },
    { id: '5-3', type: 'lesson', status: 'locked', icon: Briefcase, title: 'المهن والوظائف' },
    { id: '5-4', type: 'lesson', status: 'locked', icon: SpellCheck, title: 'تكملة الحروف للوظائف' },
    { id: '5-5', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 5' },
  ]
};
