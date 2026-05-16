import { Book, MessageCircle, Star, Target, Trophy, SpellCheck } from 'lucide-react';

export const unit2 = {
  id: 2,
  title: 'الوحدة 2: التحيات',
  desc: 'كيف تلقي التحية، وتعرف بنفسك للآخرين',
  color: 'bg-sky-500',
  headerShadow: 'shadow-sky-600',
  buttonColor: 'bg-sky-500',
  buttonShadow: 'shadow-sky-600',
  textColor: 'text-sky-500',
  lessons: [
    { id: '2-1', type: 'lesson', status: 'locked', icon: Book, title: 'التحيات الأساسية' },
    { id: '2-2', type: 'lesson', status: 'locked', icon: SpellCheck, title: 'تكملة الحروف في التحيات' },
    { id: '2-3', type: 'lesson', status: 'locked', icon: Star, title: 'التعارف (توصيل)' },
    { id: '2-4', type: 'dialog', status: 'locked', icon: MessageCircle, title: 'اسئلة واجابات' },
    { id: '2-5', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 2' },
  ]
};
