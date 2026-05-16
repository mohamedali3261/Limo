import { Clock, Sun, Moon, Trophy } from 'lucide-react';

export const unit14 = {
  id: 14,
  title: 'الوحدة 14: الروتين اليومي',
  desc: 'كيف تصف يومك من الصباح للمساء',
  color: 'bg-cyan-500',
  headerShadow: 'shadow-cyan-600',
  buttonColor: 'bg-cyan-500',
  buttonShadow: 'shadow-cyan-600',
  textColor: 'text-cyan-500',
  lessons: [
    { id: '14-1', type: 'lesson', status: 'locked', icon: Sun, title: 'في الصباح' },
    { id: '14-2', type: 'lesson', status: 'locked', icon: Clock, title: 'وقت العمل' },
    { id: '14-3', type: 'lesson', status: 'locked', icon: Moon, title: 'في المساء' },
    { id: '14-4', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 14' },
  ]
};
