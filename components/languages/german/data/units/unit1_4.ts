import { CourseUnit } from '../types';

export const unit1_4: CourseUnit[] = [
  {
    id: 1,
    title: 'الوحدة الأولى: الأساسيات',
    description: 'تعلم الحروف، الأصوات، والأرقام',
    color: 'bg-green-500',
    difficulty: 'beginner',
    levels: [
      { id: 1, title: 'الحروف والأصوات', description: 'القسم الأول', type: 'lesson', color: 'bg-green-500', dataId: 'level1Alphabet', difficulty: 'beginner' },
      { id: 2, title: 'اختبار الحروف', description: 'تأكد من إتقانك للأساسيات', type: 'quiz', color: 'bg-yellow-500', dataId: 'level1Quiz', difficulty: 'beginner' },
      { id: 3, title: 'الأرقام', description: 'من صفر إلى عشرة', type: 'lesson', color: 'bg-green-500', dataId: 'level3Numbers', difficulty: 'beginner' },
      { id: 4, title: 'اختبار الأرقام', description: 'اختبر ذاكرتك', type: 'quiz', color: 'bg-yellow-500', dataId: 'level3Quiz', difficulty: 'beginner' }
    ]
  },
  {
    id: 2,
    title: 'الوحدة الثانية: مفردات هامة (الجزء الأول)',
    description: 'مجموعة من الكلمات الأساسية التي نحتاجها يومياً',
    color: 'bg-purple-500',
    difficulty: 'beginner',
    levels: [
      { id: 5, title: 'الألوان', description: 'تعرف على الألوان الأساسية', type: 'lesson', color: 'bg-purple-500', dataId: 'level4Colors', difficulty: 'beginner' },
      { id: 6, title: 'اختبار الألوان', description: 'تطبيق عملي', type: 'quiz', color: 'bg-yellow-500', dataId: 'level4Quiz', difficulty: 'beginner' },
      { id: 7, title: 'الحيوانات', description: 'أسماء بعض الحيوانات', type: 'lesson', color: 'bg-purple-500', dataId: 'level5Animals', difficulty: 'beginner' },
      { id: 8, title: 'اختبار الحيوانات', description: 'تطبيق عملي', type: 'quiz', color: 'bg-yellow-500', dataId: 'level5Quiz', difficulty: 'beginner' }
    ]
  },
  {
    id: 3,
    title: 'الوحدة الثالثة: التعارف',
    description: 'كيف تلقي التحية وتعرف بنفسك',
    color: 'bg-blue-500',
    difficulty: 'elementary',
    levels: [
      { id: 9, title: 'التحيات', description: 'الصباح والمساء ووداعاً', type: 'lesson', color: 'bg-blue-500', dataId: 'level2Greetings', difficulty: 'elementary' },
      { id: 10, title: 'اختبار التحيات', description: 'تطبيق عملي', type: 'quiz', color: 'bg-yellow-500', dataId: 'level2Quiz', difficulty: 'elementary' },
      { id: 11, title: 'القلعة الأولى', description: 'تحدي المعرفة الشامل', type: 'boss', color: 'bg-red-500', dataId: 'level1Quiz', difficulty: 'elementary' },
    ]
  },
  {
    id: 4,
    title: 'الوحدة الرابعة: مفردات هامة (الجزء الثاني)',
    description: 'العائلة، والطعام، والشراب',
    color: 'bg-pink-500',
    difficulty: 'elementary',
    levels: [
      { id: 12, title: 'العائلة', description: 'أفراد العائلة', type: 'lesson', color: 'bg-pink-500', dataId: 'level7Family', difficulty: 'elementary' },
      { id: 13, title: 'اختبار العائلة', description: 'تطبيق عملي', type: 'quiz', color: 'bg-yellow-500', dataId: 'level7Quiz', difficulty: 'elementary' },
      { id: 14, title: 'الطعام', description: 'المأكولات والمشروبات', type: 'lesson', color: 'bg-pink-500', dataId: 'level6Food', difficulty: 'elementary' },
      { id: 15, title: 'اختبار الطعام', description: 'تطبيق عملي', type: 'quiz', color: 'bg-yellow-500', dataId: 'level6Quiz', difficulty: 'elementary' },
      { id: 16, title: 'القلعة الثانية', description: 'تحدي المفردات', type: 'boss', color: 'bg-red-500', dataId: 'level6Quiz', difficulty: 'elementary' },
    ]
  }
];
