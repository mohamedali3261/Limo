import React, { createContext, useContext, useState, useEffect } from 'react';

export interface DailyQuest {
  id: string;
  title: string;
  target: number;
  progress: number;
  xpReward: number;
  completed: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name or emoji
  unlocked: boolean;
}

interface ProgressContextType {
  xp: number;
  unlockedLevels: number[];
  completedConversations: string[];
  streak: number;
  quests: DailyQuest[];
  achievements: Achievement[];
  addXP: (amount: number) => void;
  unlockLevel: (levelId: number) => void;
  markConversationAsCompleted: (convId: string) => void;
  updateQuestProgress: (questId: string, amount: number) => void;
  unlockAchievement: (id: string) => void;
}

const defaultAchievements: Achievement[] = [
  { id: 'first_lesson', title: 'البداية', description: 'أكمل أول درس لك', icon: 'Sprout', unlocked: false },
  { id: 'xp_100', title: 'مبتدئ نشيط', description: 'اجمع 100 نقطة خبرة', icon: 'Star', unlocked: false },
  { id: 'flashcards_master', title: 'سيد البطاقات', description: 'قم بمراجعة 20 بطاقة', icon: 'Layers', unlocked: false },
  { id: 'chat_box', title: 'مُتحدث بارع', description: 'أكمل 3 محادثات', icon: 'MessageCircle', unlocked: false },
  { id: 'streak_3', title: 'شعلة النشاط', description: 'حافظ على استمراريتك لـ 3 أيام', icon: 'Flame', unlocked: false },
];

const defaultQuests: DailyQuest[] = [
  { id: 'gain_xp', title: 'اجمع 50 نقطة خبرة', target: 50, progress: 0, xpReward: 15, completed: false },
  { id: 'do_lesson', title: 'أكمل درساً واحداً', target: 1, progress: 0, xpReward: 10, completed: false },
  { id: 'do_cards', title: 'راجع 10 بطاقات', target: 10, progress: 0, xpReward: 10, completed: false },
];

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [xp, setXp] = useState<number>(() => {
    const saved = localStorage.getItem('alp_xp');
    return saved ? parseInt(saved, 10) : 0;
  });
  
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>(() => {
    const saved = localStorage.getItem('alp_unlocked_levels');
    return saved ? JSON.parse(saved) : [1];
  });

  const [completedConversations, setCompletedConversations] = useState<string[]>(() => {
    const saved = localStorage.getItem('alp_completed_convs');
    return saved ? JSON.parse(saved) : [];
  });

  const [lastActivityDate, setLastActivityDate] = useState<string>(() => {
    return localStorage.getItem('alp_last_date') || new Date().toDateString();
  });

  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem('alp_streak');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [achievements, setAchievements] = useState<Achievement[]>(() => {
    const saved = localStorage.getItem('alp_ach');
    return saved ? JSON.parse(saved) : defaultAchievements;
  });

  const [quests, setQuests] = useState<DailyQuest[]>(() => {
    const saved = localStorage.getItem('alp_quests');
    const savedDate = localStorage.getItem('alp_quests_date');
    const today = new Date().toDateString();
    
    // Reset quests if it's a new day
    if (savedDate !== today) {
      localStorage.setItem('alp_quests_date', today);
      return defaultQuests;
    }
    return saved ? JSON.parse(saved) : defaultQuests;
  });

  // Calculate streak
  useEffect(() => {
    const today = new Date().toDateString();
    if (lastActivityDate !== today) {
      const last = new Date(lastActivityDate);
      const now = new Date(today);
      const diffTime = now.getTime() - last.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      
      if (diffDays === 1) {
        // Increment streak if played yesterday. We don't increment it now, we increment it when XP is added today.
      } else if (diffDays > 1) {
        // Reset streak if missed days
        setStreak(0);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('alp_xp', xp.toString());
    localStorage.setItem('alp_unlocked_levels', JSON.stringify(unlockedLevels));
    localStorage.setItem('alp_completed_convs', JSON.stringify(completedConversations));
    localStorage.setItem('alp_last_date', lastActivityDate);
    localStorage.setItem('alp_streak', streak.toString());
    localStorage.setItem('alp_ach', JSON.stringify(achievements));
    localStorage.setItem('alp_quests', JSON.stringify(quests));

    // Check achievements
    if (xp >= 100 && !achievements.find(a => a.id === 'xp_100')?.unlocked) {
      unlockAchievement('xp_100');
    }
    if (streak >= 3 && !achievements.find(a => a.id === 'streak_3')?.unlocked) {
      unlockAchievement('streak_3');
    }
    if (unlockedLevels.length > 1 && !achievements.find(a => a.id === 'first_lesson')?.unlocked) {
      unlockAchievement('first_lesson');
    }
    if (completedConversations.length >= 3 && !achievements.find(a => a.id === 'chat_box')?.unlocked) {
      unlockAchievement('chat_box');
    }
  }, [xp, unlockedLevels, completedConversations, lastActivityDate, streak, achievements, quests]);

  const unlockAchievement = (id: string) => {
    setAchievements(prev => prev.map(a => a.id === id ? { ...a, unlocked: true } : a));
  };

  const updateQuestProgress = (questId: string, amount: number) => {
    setQuests(prev => prev.map(q => {
      if (q.id === questId && !q.completed) {
        const newProgress = Math.min(q.progress + amount, q.target);
        if (newProgress >= q.target && !q.completed) {
          // Grant XP for quest completion safely without causing recursive loop
          setTimeout(() => addXP(q.xpReward), 0);
          return { ...q, progress: newProgress, completed: true };
        }
        return { ...q, progress: newProgress };
      }
      return q;
    }));
  };

  const addXP = (amount: number) => {
    if (amount === 0) return;
    setXp((prev) => {
      const oldLevel = calculateLevel(prev);
      const newXP = prev + amount;
      const newLevel = calculateLevel(newXP);
      
      // Check if level increased
      if (newLevel > oldLevel) {
        localStorage.setItem('german_level_up', 'true');
        localStorage.setItem('german_new_level', newLevel.toString());
      }
      
      return newXP;
    });
    updateQuestProgress('gain_xp', amount);
    
    // Streak logic
    const today = new Date().toDateString();
    if (lastActivityDate !== today) {
      const last = new Date(lastActivityDate);
      const now = new Date(today);
      const diffTime = now.getTime() - last.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
      
      if (diffDays === 1) {
        setStreak(s => s + 1);
      } else if (diffDays > 1) {
        setStreak(1);
      } else {
        if (streak === 0) setStreak(1);
      }
      setLastActivityDate(today);
    }
  };

  // Calculate level using progressive system
  const calculateLevel = (xp: number): number => {
    let level = 1;
    let totalXPNeeded = 0;
    
    while (totalXPNeeded <= xp) {
      totalXPNeeded += level * 50;
      if (totalXPNeeded <= xp) {
        level++;
      }
    }
    
    return level;
  };

  const unlockLevel = (levelId: number) => {
    setUnlockedLevels((prev) => {
      if (!prev.includes(levelId)) {
        return [...prev, levelId];
      }
      return prev;
    });
  };

  const markConversationAsCompleted = (convId: string) => {
    setCompletedConversations(prev => {
      if (!prev.includes(convId)) {
        return [...prev, convId];
      }
      return prev;
    });
    addXP(25); // Bonus for completing conversation
  };

  return (
    <ProgressContext.Provider value={{ 
      xp, 
      unlockedLevels, 
      completedConversations,
      streak, 
      quests, 
      achievements, 
      addXP, 
      unlockLevel,
      markConversationAsCompleted,
      updateQuestProgress,
      unlockAchievement
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
