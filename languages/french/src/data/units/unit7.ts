import { MapPin, Navigation, Building, SpellCheck, Trophy } from 'lucide-react';

export const unit7 = {
  id: 7,
  title: 'الوحدة 7: الأماكن والاتجاهات',
  desc: 'أسماء الأماكن المختلفة في المدينة وكيفية وصف الاتجاهات',
  color: 'bg-orange-500',
  headerShadow: 'shadow-orange-600',
  buttonColor: 'bg-orange-500',
  buttonShadow: 'shadow-orange-600',
  textColor: 'text-orange-500',
  lessons: [
    { id: '7-1', type: 'lesson', status: 'locked', icon: Building, title: 'الأماكن في المدينة' },
    { id: '7-2', type: 'lesson', status: 'locked', icon: MapPin, title: 'توصيل الأماكن' },
    { id: '7-3', type: 'lesson', status: 'locked', icon: Navigation, title: 'الاتجاهات الأساسية' },
    { id: '7-4', type: 'lesson', status: 'locked', icon: SpellCheck, title: 'تكملة حروف الاتجاهات' },
    { id: '7-5', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 7 المتكامل' },
  ]
};
