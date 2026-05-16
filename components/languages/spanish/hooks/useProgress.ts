import { useState, useEffect } from 'react';

interface SRSItem {
  spanish: string;
  arabic: string;
  level: number; // 0 = needs review soon, 5 = mastered
  nextReview: number; // timestamp
}

export function useProgress() {
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('es_completed_lessons');
    return saved ? JSON.parse(saved) : [];
  });

  const [streak, setStreak] = useState<number>(() => {
    const saved = localStorage.getItem('es_streak_count');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [srsData, setSrsData] = useState<SRSItem[]>(() => {
    const saved = localStorage.getItem('es_srs_data');
    const parsed = saved ? JSON.parse(saved) : [];
    
    if (parsed.length === 0) {
      // Seed with initial data so the user can see how Review works immediately
      const initialData = [
        { spanish: '¡Hola!', arabic: 'مرحباً!', level: 0, nextReview: Date.now() - 1000 },
        { spanish: 'Gracias', arabic: 'شكراً', level: 0, nextReview: Date.now() - 1000 },
        { spanish: 'Adiós', arabic: 'وداعاً', level: 0, nextReview: Date.now() - 1000 },
        { spanish: 'Buenos días', arabic: 'صباح الخير', level: 0, nextReview: Date.now() - 1000 },
        { spanish: 'Por favor', arabic: 'من فضلك', level: 0, nextReview: Date.now() - 1000 }
      ];
      localStorage.setItem('es_srs_data', JSON.stringify(initialData));
      return initialData;
    }
    
    return parsed;
  });

  // Calculate streak on mount
  useEffect(() => {
    const lastActiveStr = localStorage.getItem('es_last_active');
    const today = new Date().toDateString();

    if (lastActiveStr !== today) {
      const lastActive = lastActiveStr ? new Date(lastActiveStr) : null;
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (lastActive && lastActive.toDateString() === yesterday.toDateString()) {
        // Kept streak
        setStreak(s => s + 1);
        localStorage.setItem('es_streak_count', (streak + 1).toString());
      } else if (lastActive && lastActive.toDateString() !== today) {
        // Lost streak
        setStreak(1);
        localStorage.setItem('es_streak_count', '1');
      } else if (!lastActive) {
        // First time
        setStreak(1);
        localStorage.setItem('es_streak_count', '1');
      }
      
      localStorage.setItem('es_last_active', today);
    }
  }, [streak]);

  const markComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      const newCompleted = [...completedLessons, lessonId];
      setCompletedLessons(newCompleted);
      localStorage.setItem('es_completed_lessons', JSON.stringify(newCompleted));
      
      // Add XP when completing a lesson
      const currentXP = parseInt(localStorage.getItem('spanish_xp') || '0', 10);
      const oldLevel = calculateLevel(currentXP);
      const newXP = currentXP + 50;
      const newLevel = calculateLevel(newXP);
      
      localStorage.setItem('spanish_xp', newXP.toString());
      
      // Check if level increased
      if (newLevel > oldLevel) {
        localStorage.setItem('spanish_level_up', 'true');
        localStorage.setItem('spanish_new_level', newLevel.toString());
      }
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

  const addSRSItem = (spanish: string, arabic: string, correct: boolean) => {
    setSrsData(prev => {
      const existing = prev.find(item => item.spanish === spanish);
      const now = Date.now();
      let newData;

      if (existing) {
        const newLevel = correct ? Math.min(existing.level + 1, 5) : 0;
        // Calculate next review based on level (0 = 1 min, 1 = 1 day, 2 = 3 days, 3 = 7 days, 4 = 14 days, 5 = 30 days)
        const delays = [60 * 1000, 86400 * 1000, 3 * 86400 * 1000, 7 * 86400 * 1000, 14 * 86400 * 1000, 30 * 86400 * 1000];
        
        newData = prev.map(item => 
          item.spanish === spanish 
            ? { ...item, level: newLevel, nextReview: now + delays[newLevel] } 
            : item
        );
      } else {
        const initialLevel = correct ? 1 : 0;
        const delays = [60 * 1000, 86400 * 1000];
        newData = [...prev, { spanish, arabic, level: initialLevel, nextReview: now + delays[initialLevel] }];
      }

      localStorage.setItem('es_srs_data', JSON.stringify(newData));
      return newData;
    });
  };

  const getDueReviews = () => {
    const now = Date.now();
    return srsData.filter(item => item.nextReview <= now);
  };

  return { completedLessons, markComplete, streak, addSRSItem, getDueReviews, srsData };
}
