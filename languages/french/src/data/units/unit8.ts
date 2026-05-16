import { CloudSun, Sun, Thermometer, SpellCheck, Trophy } from 'lucide-react';

export const unit8 = {
  id: 8,
  title: 'الوحدة 8: الطقس والفصول',
  desc: 'حالة الطقس وفصول السنة المختلفة',
  color: 'bg-cyan-500',
  headerShadow: 'shadow-cyan-600',
  buttonColor: 'bg-cyan-500',
  buttonShadow: 'shadow-cyan-600',
  textColor: 'text-cyan-500',
  lessons: [
    { id: '8-1', type: 'lesson', status: 'locked', icon: CloudSun, title: 'حالة الطقس' },
    { id: '8-2', type: 'lesson', status: 'locked', icon: Thermometer, title: 'توصيل حالات الطقس' },
    { id: '8-3', type: 'lesson', status: 'locked', icon: Sun, title: 'فصول السنة' },
    { id: '8-4', type: 'lesson', status: 'locked', icon: SpellCheck, title: 'تكملة حروف الفصول' },
    { id: '8-5', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 8 المتكامل' },
  ]
};
