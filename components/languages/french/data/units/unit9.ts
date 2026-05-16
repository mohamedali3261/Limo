import { Shirt, ShoppingBag, Ear, Trophy } from 'lucide-react';

export const unit9 = {
  id: 9,
  title: 'الوحدة 9: الملابس والتسوق',
  desc: 'تعلم كلمات الملابس وكيف تتسوق',
  color: 'bg-pink-500',
  headerShadow: 'shadow-pink-600',
  buttonColor: 'bg-pink-500',
  buttonShadow: 'shadow-pink-600',
  textColor: 'text-pink-500',
  difficulty: 'intermediate',

  lessons: [
    { id: '9-1', type: 'lesson', status: 'locked', icon: Shirt, title: 'أسماء الملابس', difficulty: 'intermediate' },
    { id: '9-2', type: 'lesson', status: 'locked', icon: ShoppingBag, title: 'السؤال عن السعر', difficulty: 'intermediate' },
    { id: '9-3', type: 'lesson', status: 'locked', icon: Ear, title: 'استماع وتوصيل السعر', difficulty: 'intermediate' },
    { id: '9-4', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 9 المتكامل', difficulty: 'intermediate' },
  ]
};

