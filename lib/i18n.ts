
import { APP_CONFIG } from './config';

export const translations = {
  en: {
    admin: 'Mission Control',
    subtitle: `${APP_CONFIG.name} ADMINISTRATIVE OS`,
    tabs: {
      stats: 'Stats',
      theme: 'Theme',
      levels: 'Levels',
      lessons: 'Lessons',
      quizzes: 'Quizzes',
      onboarding: 'Onboarding',
      stories: 'Stories',
      games: 'Games',
      system: 'System'
    },
    system: {
      ttsRate: 'Speech Synthesis Rate',
      faster: 'Faster',
      slower: 'Slower',
      save: 'Save Changes',
      gender: 'Voice Gender',
      male: 'Male',
      female: 'Female'
    },
    stats: {
      users: 'Total Users',
      lessons: 'Completed Lessons',
      revenue: 'Total XP Earned'
    }
  },
  ar: {
    admin: 'مركز التحكم',
    subtitle: `نظام إدارة ${APP_CONFIG.name}`,
    tabs: {
      stats: 'الإحصائيات',
      theme: 'المظهر',
      levels: 'المراحل',
      lessons: 'الدروس',
      quizzes: 'الاختبارات',
      onboarding: 'الترحيب',
      stories: 'القصص',
      games: 'الألعاب',
      system: 'النظام'
    },
    system: {
      ttsRate: 'سرعة تحويل النص إلى صوت',
      faster: 'أسرع',
      slower: 'أبطأ',
      save: 'حفظ التغييرات',
      gender: 'جنس الصوت',
      male: 'ذكر',
      female: 'أنثى'
    },
    stats: {
      users: 'إجمالي المستخدمين',
      lessons: 'الدروس المكتملة',
      revenue: 'إجمالي نقاط الخبرة'
    }
  }
};

export type Language = 'en' | 'ar';
