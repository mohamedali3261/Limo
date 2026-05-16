import { Smile, Stethoscope, SpellCheck, Trophy } from 'lucide-react';

export const unit10 = {
  id: 10,
  title: 'الوحدة 10: أعضاء الجسم والصحة',
  desc: 'أسماء أعضاء الجسم والتعبير عن الألم',
  color: 'bg-teal-500',
  headerShadow: 'shadow-teal-600',
  buttonColor: 'bg-teal-500',
  buttonShadow: 'shadow-teal-600',
  textColor: 'text-teal-500',
  lessons: [
    { id: '10-1', type: 'lesson', status: 'locked', icon: Smile, title: 'أعضاء الجسم' },
    { id: '10-2', type: 'lesson', status: 'locked', icon: Stethoscope, title: 'التعبير عن الألم' },
    { id: '10-3', type: 'lesson', status: 'locked', icon: SpellCheck, title: 'توصيل الأعضاء' },
    { id: '10-4', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 10 المتكامل' },
  ]
};
