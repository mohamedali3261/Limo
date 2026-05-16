import { Plane, Train, Car, Trophy } from 'lucide-react';

export const unit12 = {
  id: 12,
  title: 'الوحدة 12: السفر والمواصلات',
  desc: 'أسماء المواصلات وشراء التذاكر',
  color: 'bg-indigo-500',
  headerShadow: 'shadow-indigo-600',
  buttonColor: 'bg-indigo-500',
  buttonShadow: 'shadow-indigo-600',
  textColor: 'text-indigo-500',
  difficulty: 'advanced',

  lessons: [
    { id: '12-1', type: 'lesson', status: 'locked', icon: Plane, title: 'المواصلات', difficulty: 'advanced' },
    { id: '12-2', type: 'lesson', status: 'locked', icon: Train, title: 'شراء التذاكر', difficulty: 'advanced' },
    { id: '12-3', type: 'lesson', status: 'locked', icon: Car, title: 'في المطار', difficulty: 'advanced' },
    { id: '12-4', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 12 المتكامل', difficulty: 'advanced' },
  ]
};

