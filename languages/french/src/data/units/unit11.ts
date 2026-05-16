import { Utensils, Coffee, Salad, Trophy } from 'lucide-react';

export const unit11 = {
  id: 11,
  title: 'الوحدة 11: الطعام والمطعم',
  desc: 'أسماء الأطعمة والمشروبات والطلب في المطعم',
  color: 'bg-orange-500',
  headerShadow: 'shadow-orange-600',
  buttonColor: 'bg-orange-500',
  buttonShadow: 'shadow-orange-600',
  textColor: 'text-orange-500',
  lessons: [
    { id: '11-1', type: 'lesson', status: 'locked', icon: Salad, title: 'الأطعمة الرئيسية' },
    { id: '11-2', type: 'lesson', status: 'locked', icon: Coffee, title: 'المشروبات' },
    { id: '11-3', type: 'lesson', status: 'locked', icon: Utensils, title: 'الطلب في المطعم' },
    { id: '11-4', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 11 المتكامل' },
  ]
};
