import { SpellCheck, Headphones, Trophy } from 'lucide-react';

export const unit1 = {
  id: 1,
  title: 'الوحدة 1: الأساسيات',
  desc: 'الحروف الأبجدية، الأصوات، ونطق الكلمات الأولى',
  color: 'bg-teal-500',
  headerShadow: 'shadow-teal-600',
  buttonColor: 'bg-teal-500',
  buttonShadow: 'shadow-teal-600',
  textColor: 'text-teal-500',
  lessons: [
    { id: 'alphabet', type: 'lesson', status: 'current', icon: SpellCheck, title: 'الحروف الأبجدية بالكامل' },
    { id: '1-1', type: 'lesson', status: 'locked', icon: SpellCheck, title: 'تكملة الحروف 1' },
    { id: '1-2', type: 'lesson', status: 'locked', icon: SpellCheck, title: 'توصيل الحروف 1' },
    { id: '1-3', type: 'audio', status: 'locked', icon: Headphones, title: 'استماع الكلمات' },
    { id: '1-4', type: 'lesson', status: 'locked', icon: SpellCheck, title: 'توصيل الحروف 2' },
    { id: '1-5', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 1' },
  ]
};
