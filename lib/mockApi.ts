// Mock API for Frontend-Only Application
import { v4 as uuidv4 } from 'uuid';

// Import static data
import achievementsData from '../data/db/achievements.json';
import levelsData from '../data/db/levels.json';
import lessonsData from '../data/db/lessons.json';
import quizzesData from '../data/db/quizzes.json';
import storiesData from '../data/db/stories.json';
import storyScenesData from '../data/db/story_scenes.json';
import storyQuestionsData from '../data/db/story_questions.json';
import settingsData from '../data/db/settings.json';
import onboardingStepsData from '../data/db/onboarding_steps.json';
import onboardingOptionsData from '../data/db/onboarding_options.json';
import gameLevelsData from '../data/db/game_levels.json';
import scrambledWordData from '../data/games/scrambled_word.json';
import sentenceArrangementData from '../data/games/sentence_arrangement.json';
import translationData from '../data/games/translation.json';
import wordMatchingData from '../data/games/word_matching.json';

// LocalStorage keys
const STORAGE_KEYS = {
  CURRENT_USER: 'limohero_current_user',
  USERS: 'limohero_users',
  USER_PROGRESS: 'limohero_user_progress',
  USER_ACHIEVEMENTS: 'limohero_user_achievements',
  TRANSLATIONS: 'limohero_translations',
  SAVED_PHRASES: 'limohero_saved_phrases',
  USER_SESSIONS: 'limohero_user_sessions',
};

// Security Questions
export const SECURITY_QUESTIONS = [
  { id: 1, question: 'ما اسم مدينتك الأولى؟' },
  { id: 2, question: 'ما اسم حيوانك الأليف المفضل؟' },
  { id: 3, question: 'ما اسم مدرستك الابتدائية؟' },
  { id: 4, question: 'ما لون سيارتك المفضل؟' },
  { id: 5, question: 'ما اسم أفضل صديق طفولة؟' },
  { id: 6, question: 'ما اسم أول معلم لك؟' },
  { id: 7, question: 'ما اسم الشارع الذي نشأت فيه؟' },
  { id: 8, question: 'ما هو طعامك المفضل؟' }
];

// Helper functions
function getFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function saveToStorage(key: string, value: any): void {
  localStorage.setItem(key, JSON.stringify(value));
}

function getCurrentUser() {
  return getFromStorage(STORAGE_KEYS.CURRENT_USER, null);
}

function requireAuth() {
  const user = getCurrentUser();
  if (!user) {
    throw new Error('Unauthorized');
  }
  return user;
}

// Secure password hashing function
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + 'limohero_salt_2024');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Hash security answer
async function hashSecurityAnswer(answer: string): Promise<string> {
  const normalized = answer.toLowerCase().trim();
  return await hashPassword(normalized);
}

// Verify password against hash
async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const passwordHash = await hashPassword(password);
  return passwordHash === hash;
}

// Track user session time
function trackSessionStart(userId: string) {
  const sessions = getFromStorage(STORAGE_KEYS.USER_SESSIONS, {});
  if (!sessions[userId]) {
    sessions[userId] = {
      totalMinutes: 0,
      sessions: []
    };
  }
  sessions[userId].currentSessionStart = Date.now();
  saveToStorage(STORAGE_KEYS.USER_SESSIONS, sessions);
}

function trackSessionEnd(userId: string) {
  const sessions = getFromStorage(STORAGE_KEYS.USER_SESSIONS, {});
  if (sessions[userId]?.currentSessionStart) {
    const duration = Math.floor((Date.now() - sessions[userId].currentSessionStart) / 60000); // minutes
    sessions[userId].totalMinutes = (sessions[userId].totalMinutes || 0) + duration;
    sessions[userId].sessions.push({
      start: new Date(sessions[userId].currentSessionStart).toISOString(),
      end: new Date().toISOString(),
      duration
    });
    delete sessions[userId].currentSessionStart;
    saveToStorage(STORAGE_KEYS.USER_SESSIONS, sessions);
  }
}

function getUserSessionData(userId: string) {
  const sessions = getFromStorage(STORAGE_KEYS.USER_SESSIONS, {});
  return sessions[userId] || { totalMinutes: 0, sessions: [] };
}

// Mock API Implementation
export const mockApi = {
  // Auth endpoints
  auth: {
    login: async (username: string, password: string) => {
      const users = getFromStorage(STORAGE_KEYS.USERS, []);
      const user = users.find((u: any) => u.username === username);
      
      if (!user) {
        throw new Error('Invalid credentials');
      }

      // Verify password using hash
      const isPasswordValid = await verifyPassword(password, user.password_hash);
      
      if (!isPasswordValid) {
        throw new Error('Invalid credentials');
      }

      // Update last active
      user.last_active = new Date().toISOString();
      saveToStorage(STORAGE_KEYS.USERS, users);
      saveToStorage(STORAGE_KEYS.CURRENT_USER, user);

      // Track session start
      trackSessionStart(user.id);

      return {
        token: `mock_token_${user.id}`,
        user: {
          id: user.id,
          username: user.username,
          xp: user.xp,
          level: user.level,
          streak: user.streak,
          role: user.role,
          learning_language: user.learning_language,
          onboarding_completed: user.onboarding_completed,
          goal: user.goal
        }
      };
    },

    register: async (username: string, password: string, securityQuestions?: any[]) => {
      const users = getFromStorage(STORAGE_KEYS.USERS, []);
      
      if (users.find((u: any) => u.username === username)) {
        throw new Error('Username already exists');
      }

      // Hash the password before storing
      const passwordHash = await hashPassword(password);

      // Hash security answers
      let hashedSecurityQuestions = [];
      if (securityQuestions && securityQuestions.length > 0) {
        hashedSecurityQuestions = await Promise.all(
          securityQuestions.map(async (sq: any) => ({
            questionId: sq.questionId,
            answerHash: await hashSecurityAnswer(sq.answer)
          }))
        );
      }

      const newUser = {
        id: uuidv4(),
        username,
        password_hash: passwordHash,
        xp: 0,
        level: 1,
        streak: 0,
        last_active: new Date().toISOString(),
        role: 'user',
        learning_language: null,
        onboarding_completed: false,
        goal: null,
        security_questions: hashedSecurityQuestions,
        created_at: new Date().toISOString()
      };

      users.push(newUser);
      saveToStorage(STORAGE_KEYS.USERS, users);
      saveToStorage(STORAGE_KEYS.CURRENT_USER, newUser);

      // Track session start
      trackSessionStart(newUser.id);

      return {
        token: `mock_token_${newUser.id}`,
        user: {
          id: newUser.id,
          username: newUser.username,
          xp: newUser.xp,
          level: newUser.level,
          streak: newUser.streak,
          role: newUser.role,
          learning_language: newUser.learning_language,
          onboarding_completed: newUser.onboarding_completed,
          goal: newUser.goal
        }
      };
    },

    me: async () => {
      const user = requireAuth();
      return {
        user: {
          id: user.id,
          username: user.username,
          xp: user.xp,
          level: user.level,
          streak: user.streak,
          role: user.role,
          learning_language: user.learning_language,
          onboarding_completed: user.onboarding_completed,
          goal: user.goal
        }
      };
    },

    logout: async () => {
      const user = getCurrentUser();
      if (user) {
        trackSessionEnd(user.id);
      }
      localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
      return { success: true };
    },

    getSecurityQuestions: async () => {
      return SECURITY_QUESTIONS;
    },

    verifySecurityAnswers: async (username: string, answers: any[]) => {
      const users = getFromStorage(STORAGE_KEYS.USERS, []);
      const user = users.find((u: any) => u.username === username);
      
      if (!user || !user.security_questions || user.security_questions.length === 0) {
        throw new Error('User not found or no security questions set');
      }

      // Verify all answers
      const verifications = await Promise.all(
        answers.map(async (ans: any) => {
          const savedQuestion = user.security_questions.find((sq: any) => sq.questionId === ans.questionId);
          if (!savedQuestion) return false;
          const answerHash = await hashSecurityAnswer(ans.answer);
          return answerHash === savedQuestion.answerHash;
        })
      );

      const allCorrect = verifications.every(v => v === true);
      
      if (!allCorrect) {
        throw new Error('Security answers are incorrect');
      }

      return { 
        success: true, 
        resetToken: `reset_${user.id}_${Date.now()}` 
      };
    },

    resetPassword: async (username: string, newPassword: string, resetToken: string) => {
      const users = getFromStorage(STORAGE_KEYS.USERS, []);
      const userIndex = users.findIndex((u: any) => u.username === username);
      
      if (userIndex === -1) {
        throw new Error('User not found');
      }

      // Verify reset token format
      if (!resetToken.startsWith(`reset_${users[userIndex].id}_`)) {
        throw new Error('Invalid reset token');
      }

      // Hash new password
      const newPasswordHash = await hashPassword(newPassword);
      users[userIndex].password_hash = newPasswordHash;
      
      saveToStorage(STORAGE_KEYS.USERS, users);

      return { success: true };
    },

    updateOnboarding: async (data: any) => {
      const user = requireAuth();
      const users = getFromStorage(STORAGE_KEYS.USERS, []);
      const userIndex = users.findIndex((u: any) => u.id === user.id);
      
      if (userIndex !== -1) {
        // تحديث بيانات المستخدم مع التأكد من onboarding_completed = true
        users[userIndex] = { 
          ...users[userIndex], 
          ...data, 
          onboarding_completed: true 
        };
        saveToStorage(STORAGE_KEYS.USERS, users);
        saveToStorage(STORAGE_KEYS.CURRENT_USER, users[userIndex]);
        
        // Return updated user data with all fields
        return { 
          success: true,
          user: {
            id: users[userIndex].id,
            username: users[userIndex].username,
            xp: users[userIndex].xp,
            level: users[userIndex].level,
            streak: users[userIndex].streak,
            role: users[userIndex].role,
            learning_language: users[userIndex].learning_language,
            onboarding_completed: true, // التأكد من إرجاع true
            goal: users[userIndex].goal
          }
        };
      }

      return { success: false };
    }
  },

  // Learning endpoints
  learning: {
    getLevels: async () => {
      return levelsData;
    },

    getLessons: async (levelId: number) => {
      return lessonsData.filter((lesson: any) => lesson.level_id === levelId);
    },

    getLesson: async (lessonId: number) => {
      const lesson = lessonsData.find((l: any) => l.id === lessonId);
      if (!lesson) throw new Error('Lesson not found');
      
      const quizzes = quizzesData.filter((q: any) => q.lesson_id === lessonId);
      return { ...lesson, quizzes };
    },

    completeLesson: async (lessonId: number) => {
      const user = requireAuth();
      const lesson = lessonsData.find((l: any) => l.id === lessonId);
      if (!lesson) throw new Error('Lesson not found');

      // Update user progress
      const progress = getFromStorage(STORAGE_KEYS.USER_PROGRESS, {});
      if (!progress[user.id]) progress[user.id] = [];
      
      if (!progress[user.id].find((p: any) => p.lesson_id === lessonId)) {
        progress[user.id].push({
          lesson_id: lessonId,
          completed_at: new Date().toISOString()
        });
        saveToStorage(STORAGE_KEYS.USER_PROGRESS, progress);

        // Update user XP
        const users = getFromStorage(STORAGE_KEYS.USERS, []);
        const userIndex = users.findIndex((u: any) => u.id === user.id);
        if (userIndex !== -1) {
          users[userIndex].xp += lesson.xp_reward;
          users[userIndex].level = Math.floor(users[userIndex].xp / 500) + 1;
          saveToStorage(STORAGE_KEYS.USERS, users);
          saveToStorage(STORAGE_KEYS.CURRENT_USER, users[userIndex]);
        }
      }

      return { success: true, xp_earned: lesson.xp_reward };
    },

    getProgress: async () => {
      const user = requireAuth();
      const progress = getFromStorage(STORAGE_KEYS.USER_PROGRESS, {});
      return progress[user.id] || [];
    },

    getStories: async () => {
      return storiesData;
    },

    getStory: async (storyId: number) => {
      const story = storiesData.find((s: any) => s.id === storyId);
      if (!story) throw new Error('Story not found');
      
      // Load the full story from its JSON file
      try {
        const storyModule = await import(`../data/stories/story${storyId}.json`);
        const fullStory = storyModule.default || storyModule;
        return fullStory;
      } catch (error) {
        console.error(`Failed to load story ${storyId}:`, error);
        // Fallback to old method if story file doesn't exist
        const scenes = storyScenesData.filter((sc: any) => sc.story_id === storyId);
        const questions = storyQuestionsData.filter((q: any) => q.story_id === storyId);
        return { ...story, scenes, questions };
      }
    },

    getGameLevels: async () => {
      return gameLevelsData;
    },

    getGameLevel: async (levelId: number) => {
      const level = gameLevelsData.find((l: any) => l.id === levelId);
      if (!level) throw new Error('Game level not found');
      
      // Select the appropriate data source based on level_type
      let challengesData: any[] = [];
      switch (level.level_type) {
        case 'scrambled_word':
          challengesData = scrambledWordData;
          break;
        case 'sentence_arrangement':
          challengesData = sentenceArrangementData;
          break;
        case 'translation':
          challengesData = translationData;
          break;
        case 'word_matching':
          challengesData = wordMatchingData;
          break;
        default:
          challengesData = [];
      }
      
      const challenges = challengesData.filter((c: any) => c.game_level_id === levelId).map((c: any) => ({
        ...c,
        options: c.options ? (typeof c.options === 'string' ? JSON.parse(c.options) : c.options) : []
      }));
      
      return { level, challenges };
    }
  },

  // Settings endpoints
  settings: {
    getSettings: async () => {
      const settings: any = {};
      settingsData.forEach((s: any) => {
        settings[s.key] = s.value;
      });
      return settings;
    },

    updateSettings: async (key: string, value: string) => {
      // In mock, we just return success
      return { success: true };
    }
  },

  // Leaderboard endpoints
  leaderboard: {
    getLeaderboard: async () => {
      const users = getFromStorage(STORAGE_KEYS.USERS, []);
      return users
        .map((u: any) => ({
          username: u.username,
          xp: u.xp,
          level: u.level,
          streak: u.streak
        }))
        .sort((a: any, b: any) => b.xp - a.xp)
        .slice(0, 10);
    }
  }
};
