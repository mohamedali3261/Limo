import { ShoppingCart, Target, Star, SpellCheck, Trophy } from 'lucide-react';

export const unit4 = {
  id: 4,
  title: 'الوحدة 4: الطعام والشراب',
  desc: 'مفردات الأطعمة، المشروبات، وكيف تطلب في المطعم',
  color: 'bg-emerald-500',
  headerShadow: 'shadow-emerald-600',
  buttonColor: 'bg-emerald-500',
  buttonShadow: 'shadow-emerald-600',
  textColor: 'text-emerald-500',
  difficulty: 'elementary',

  lessons: [
    { id: '4-1', type: 'lesson', status: 'locked', icon: ShoppingCart, title: 'المأكولات الأساسية', difficulty: 'elementary' },
    { id: '4-2', type: 'lesson', status: 'locked', icon: Target, title: 'توصيل الطعام', difficulty: 'elementary' },
    { id: '4-3', type: 'lesson', status: 'locked', icon: SpellCheck, title: 'تكملة الحروف بالمطعم', difficulty: 'elementary' },
    { id: '4-4', type: 'lesson', status: 'locked', icon: Star, title: 'استماع الكلمات', difficulty: 'elementary' },
    { id: '4-5', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 4 المتكامل', difficulty: 'elementary' },
  ]
};

