import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthStore } from '../../../../lib/store/auth';

interface ProgressContextType {
  xp: number;
  streak: number;
  unlockedLevels: number[];
  completeLesson: (levelId: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuthStore();
  const [xp, setXp] = useState(user?.xp || 0);
  const [streak, setStreak] = useState(user?.streak || 0);
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([1]);

  useEffect(() => {
    if (user) {
      setXp(user.xp || 0);
      setStreak(user.streak || 0);
    }
  }, [user]);

  const completeLesson = (levelId: number) => {
    if (!unlockedLevels.includes(levelId + 1)) {
      setUnlockedLevels([...unlockedLevels, levelId + 1]);
    }
    
    setXp(prev => {
      const oldLevel = calculateLevel(prev);
      const newXP = prev + 50;
      const newLevel = calculateLevel(newXP);
      
      // Check if level increased
      if (newLevel > oldLevel) {
        localStorage.setItem('english_level_up', 'true');
        localStorage.setItem('english_new_level', newLevel.toString());
      }
      
      return newXP;
    });
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

  return (
    <ProgressContext.Provider value={{ xp, streak, unlockedLevels, completeLesson }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
}
