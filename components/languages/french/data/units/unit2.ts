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
  difficulty: 'beginner',
  lessons: [
    { id: '2-1', type: 'lesson', status: 'locked', icon: Book, title: 'التحيات الأساسية', difficulty: 'beginner' },
    { id: '2-2', type: 'lesson', status: 'locked', icon: SpellCheck, title: 'تكملة الحروف في التحيات', difficulty: 'beginner' },
    { id: '2-3', type: 'lesson', status: 'locked', icon: Star, title: 'التعارف (توصيل)', difficulty: 'beginner' },
    { id: '2-4', type: 'dialog', status: 'locked', icon: MessageCircle, title: 'اسئلة واجابات', difficulty: 'beginner' },
    { id: '2-5', type: 'test', status: 'locked', icon: Trophy, title: 'اختبار الوحدة 2', difficulty: 'beginner' },
  ]
};
