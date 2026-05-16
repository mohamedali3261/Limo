import { Book, Headphones, Star, Trophy, Target, SpellCheck } from 'lucide-react';

export const unit3 = {
  id: 3,
  title: 'الوحدة 3: الأرقام',
  desc: 'العد من 1 إلى 20، والألوان الأساسية',
  color: 'bg-indigo-400',
  headerShadow: 'shadow-indigo-500',
  buttonColor: 'bg-indigo-400',
  buttonShadow: 'shadow-indigo-500',
  textColor: 'text-indigo-400',
  lessons: [
    { id: '3-1', type: 'lesson', status: 'locked', icon: Book, title: 'الأرقام 1 إلى 5' },
    { id: '3-2', type: 'lesson', status: 'locked', icon: Target, title: 'توصيل الأرقام' },
    { id: '3-3', type: 'lesson', status: 'locked', icon: Star, title: 'الألوان (1)' },
    { id: '3-4', type: 'lesson', status: 'locked', icon: SpellCheck, title: 'تكملة الحروف' },
    { id: '3-5', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 3' },
  ]
};
