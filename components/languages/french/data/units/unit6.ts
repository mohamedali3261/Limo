import { Shirt, Target, CalendarDays, SpellCheck, Trophy } from 'lucide-react';

export const unit6 = {
  id: 6,
  title: 'الوحدة 6: الملابس والأيام',
  desc: 'أسماء الملابس وأيام الأسبوع مع الألوان',
  color: 'bg-violet-500',
  headerShadow: 'shadow-violet-600',
  buttonColor: 'bg-violet-500',
  buttonShadow: 'shadow-violet-600',
  textColor: 'text-violet-500',
  difficulty: 'intermediate',

  lessons: [
    { id: '6-1', type: 'lesson', status: 'locked', icon: Shirt, title: 'أسماء الملابس', difficulty: 'intermediate' },
    { id: '6-2', type: 'lesson', status: 'locked', icon: Target, title: 'توصيل الملابس والمسميات', difficulty: 'intermediate' },
    { id: '6-3', type: 'lesson', status: 'locked', icon: CalendarDays, title: 'أيام الأسبوع', difficulty: 'intermediate' },
    { id: '6-4', type: 'lesson', status: 'locked', icon: SpellCheck, title: 'تكملة الحروف', difficulty: 'intermediate' },
    { id: '6-5', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 6', difficulty: 'intermediate' },
  ]
};

