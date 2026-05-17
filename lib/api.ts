import { mockApi } from './mockApi';

// Mock API Router - Routes API calls to mock implementation
export async function apiFetch(url: string, options: any = {}) {
  try {
    // Parse URL and method
    const method = options.method || 'GET';
    const body = options.body ? JSON.parse(options.body) : {};

    // Route to appropriate mock API endpoint
    if (url.includes('/api/auth/login')) {
      return await mockApi.auth.login(body.username, body.password);
    }
    
    if (url.includes('/api/auth/register')) {
      return await mockApi.auth.register(body.username, body.password, body.securityQuestions);
    }
    
    if (url.includes('/api/auth/me')) {
      return await mockApi.auth.me();
    }
    
    if (url.includes('/api/auth/logout')) {
      return await mockApi.auth.logout();
    }
    
    if (url.includes('/api/auth/security-questions') && method === 'GET') {
      return { questions: await mockApi.auth.getSecurityQuestions() };
    }
    
    if (url.includes('/api/auth/verify-security-answers')) {
      return await mockApi.auth.verifySecurityAnswers(body.username, body.answers);
    }
    
    if (url.includes('/api/auth/reset-password')) {
      return await mockApi.auth.resetPassword(body.username, body.newPassword, body.resetToken);
    }
    
    if (url.includes('/api/auth/onboarding')) {
      return await mockApi.auth.updateOnboarding(body);
    }

    // Learning endpoints
    if (url.includes('/api/learning/levels') && method === 'GET') {
      return await mockApi.learning.getLevels();
    }
    
    if (url.match(/\/api\/learning\/levels\/(\d+)\/lessons/)) {
      const levelId = parseInt(url.match(/\/api\/learning\/levels\/(\d+)\/lessons/)?.[1] || '0');
      return await mockApi.learning.getLessons(levelId);
    }
    
    if (url.match(/\/api\/learning\/lessons\/(\d+)$/) && method === 'GET') {
      const lessonId = parseInt(url.match(/\/api\/learning\/lessons\/(\d+)$/)?.[1] || '0');
      return await mockApi.learning.getLesson(lessonId);
    }
    
    if (url.match(/\/api\/learning\/lesson\/(\d+)$/)) {
      const lessonId = parseInt(url.match(/\/api\/learning\/lesson\/(\d+)$/)?.[1] || '0');
      const lessonData = await mockApi.learning.getLesson(lessonId);
      return { lesson: lessonData, quizzes: lessonData.quizzes };
    }
    
    if (url.match(/\/api\/learning\/lessons\/(\d+)\/complete/)) {
      const lessonId = parseInt(url.match(/\/api\/learning\/lessons\/(\d+)\/complete/)?.[1] || '0');
      return await mockApi.learning.completeLesson(lessonId);
    }
    
    if (url.includes('/api/learning/complete-lesson')) {
      return await mockApi.learning.completeLesson(parseInt(body.lessonId));
    }
    
    if (url.includes('/api/learning/progress')) {
      return await mockApi.learning.getProgress();
    }
    
    if (url.includes('/api/learning/path')) {
      const levels = await mockApi.learning.getLevels();
      const progress = await mockApi.learning.getProgress();
      const completedLessonIds = new Set(progress.map((p: any) => p.lesson_id));
      
      const levelsWithLessons = await Promise.all(
        levels.map(async (level: any) => {
          const lessons = await mockApi.learning.getLessons(level.id);
          const lessonsWithCompletion = lessons.map((lesson: any) => ({
            ...lesson,
            is_completed: completedLessonIds.has(lesson.id)
          }));
          return { ...level, lessons: lessonsWithCompletion };
        })
      );
      return { levels: levelsWithLessons };
    }
    
    if (url.includes('/api/learning/stories') && method === 'GET' && !url.match(/\/\d+$/)) {
      const stories = await mockApi.learning.getStories();
      return { stories };
    }
    
    if (url.match(/\/api\/learning\/stories\/(\d+)$/)) {
      const storyId = parseInt(url.match(/\/api\/learning\/stories\/(\d+)$/)?.[1] || '0');
      return await mockApi.learning.getStory(storyId);
    }
    
    if (url.match(/\/api\/learning\/story\/(\d+)$/)) {
      const storyId = parseInt(url.match(/\/api\/learning\/story\/(\d+)$/)?.[1] || '0');
      const storyData = await mockApi.learning.getStory(storyId);
      
      // Map questions to their scenes
      const scenesWithQuestions = (storyData.scenes || []).map((scene: any, index: number) => {
        const sceneQuestions = (storyData.questions || []).filter((q: any) => q.scene_idx === index)
          .map((q: any) => ({
            type: q.type,
            question_text: q.question_en || q.q,
            correct_answer: q.answer || q.a,
            options: typeof q.options === 'string' ? q.options.split(' ') : (q.options || [])
          }));
        return {
          ...scene,
          content_en: scene.content_en || scene.en,
          content_ar: scene.content_ar || scene.ar,
          character: scene.character_name || scene.name,
          questions: sceneQuestions
        };
      });
      
      // Map final questions
      const mappedFinalQuestions = (storyData.finalQuestions || []).map((q: any) => ({
        type: q.type,
        question_text: q.question_en || q.q,
        correct_answer: q.answer || q.a,
        options: typeof q.options === 'string' ? q.options.split(' ') : (q.options || [])
      }));
      
      return { 
        story: {
          id: storyData.id,
          title: storyData.title,
          description: storyData.description,
          difficulty: storyData.difficulty,
          thumbnail: storyData.thumbnail,
          xp_reward: storyData.xp_reward
        },
        scenes: scenesWithQuestions,
        finalQuestions: mappedFinalQuestions
      };
    }
    
    if (url.includes('/api/learning/complete-story')) {
      return { success: true, xp_earned: 150 };
    }
    
    if (url.includes('/api/learning/game-levels') && method === 'GET' && !url.match(/\/\d+$/)) {
      const levels = await mockApi.learning.getGameLevels();
      return { levels };
    }
    
    if (url.match(/\/api\/learning\/game-levels\/(\d+)$/)) {
      const levelId = parseInt(url.match(/\/api\/learning\/game-levels\/(\d+)$/)?.[1] || '0');
      return await mockApi.learning.getGameLevel(levelId);
    }
    
    if (url.match(/\/api\/learning\/game-level\/(\d+)$/)) {
      const levelId = parseInt(url.match(/\/api\/learning\/game-level\/(\d+)$/)?.[1] || '0');
      return await mockApi.learning.getGameLevel(levelId);
    }
    
    if (url.includes('/api/learning/complete-game-level')) {
      return { success: true, xp_earned: 100 };
    }
    
    if (url.includes('/api/learning/achievements')) {
      return { achievements: [] };
    }
    
    if (url.includes('/api/learning/vocabulary')) {
      const vocabularyData = await import('../data/db/vocabulary.json');
      return { vocabulary: vocabularyData.default };
    }
    
    if (url.includes('/api/learning/onboarding-steps')) {
      return { steps: await mockApi.admin.getOnboardingSteps() };
    }
    
    if (url.includes('/api/learning/onboarding')) {
      return await mockApi.auth.updateOnboarding(body);
    }

    // Settings endpoints
    if (url.includes('/api/settings') && method === 'GET') {
      return await mockApi.settings.getSettings();
    }
    
    if (url.includes('/api/settings') && method === 'PUT') {
      return await mockApi.settings.updateSettings(body.key, body.value);
    }

    // Leaderboard endpoints
    if (url.includes('/api/leaderboard')) {
      return await mockApi.leaderboard.getLeaderboard();
    }

    // Settings endpoints
    if (url.includes('/api/settings/all')) {
      return await mockApi.settings.getSettings();
    }
    
    if (url.includes('/api/settings/theme')) {
      const settings = await mockApi.settings.getSettings();
      return { primaryColor: settings.theme_primary || '#FF6B00' };
    }
    
    if (url.includes('/api/settings/update') && method === 'POST') {
      return await mockApi.settings.updateSettings(body.key, body.value);
    }

    // Default fallback
    console.warn('Unhandled API route:', url);
    return { success: true, data: [] };

  } catch (error: any) {
    // في تطبيق فرونت فقط، لا نعيد التوجيه إلى /auth
    // بدلاً من ذلك، نرمي الخطأ ليتم التعامل معه في المكون
    console.error('API Error:', error);
    throw error;
  }
}
