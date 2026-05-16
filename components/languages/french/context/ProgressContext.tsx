import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the linear order of lessons
export const lessonSequence = [
  'alphabet',
  '1-1',
  '1-2',
  '1-3',
  '1-4',
  '1-5', // Test Unit 1
  '2-1',
  '2-2',
  '2-3',
  '2-4',
  '2-5', // Test Unit 2
  '3-1',
  '3-2',
  '3-3',
  '3-4',
  '3-5', // Test Unit 3
  '4-1',
  '4-2',
  '4-3',
  '4-4',
  '4-5', // Test Unit 4
  '5-1',
  '5-2',
  '5-3',
  '5-4',
  '5-5', // Test Unit 5
  '6-1',
  '6-2',
  '6-3',
  '6-4',
  '6-5', // Test Unit 6
  '7-1',
  '7-2',
  '7-3',
  '7-4',
  '7-5', // Test Unit 7
  '8-1',
  '8-2',
  '8-3',
  '8-4',
  '8-5', // Test Unit 8
  '9-1',
  '9-2',
  '9-3',
  '9-4', // Test Unit 9
  '10-1',
  '10-2',
  '10-3',
  '10-4', // Test Unit 10
  '11-1',
  '11-2',
  '11-3',
  '11-4', // Test Unit 11
  '12-1',
  '12-2',
  '12-3',
  '12-4', // Test Unit 12
  '13-1',
  '13-2',
  '13-3',
  '13-4', // Test Unit 13
  '14-1',
  '14-2',
  '14-3',
  '14-4', // Test Unit 14
];

// Calculate level based on XP (progressive system)
const calculateLevel = (xp: number): number => {
  let level = 1;
  let totalXPNeeded = 0;
  
  while (totalXPNeeded <= xp) {
    totalXPNeeded += level * 50; // Each level requires level * 50 XP
    if (totalXPNeeded <= xp) {
      level++;
    }
  }
  
  return level;
};

// Calculate XP needed for next level
const getXPForNextLevel = (currentLevel: number): number => {
  return currentLevel * 50;
};

// Calculate progress within current level
const getLevelProgress = (xp: number, level: number): { current: number; needed: number; percentage: number } => {
  let totalXPForPreviousLevels = 0;
  for (let i = 1; i < level; i++) {
    totalXPForPreviousLevels += i * 50;
  }
  
  const xpInCurrentLevel = xp - totalXPForPreviousLevels;
  const xpNeededForCurrentLevel = level * 50;
  const percentage = Math.min((xpInCurrentLevel / xpNeededForCurrentLevel) * 100, 100);
  
  return {
    current: xpInCurrentLevel,
    needed: xpNeededForCurrentLevel,
    percentage
  };
};

interface ProgressContextType {
  completedLessons: string[];
  currentLesson: string;
  completeLesson: (id: string) => void;
  getLessonStatus: (id: string) => 'completed' | 'current' | 'locked';
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider = ({ children }: { children: ReactNode }) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>(() => {
    const saved = localStorage.getItem('french_learning_progress');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('french_learning_progress', JSON.stringify(completedLessons));
  }, [completedLessons]);

  const currentLesson = lessonSequence.find(id => !completedLessons.includes(id)) || lessonSequence[lessonSequence.length - 1];

  const completeLesson = (id: string) => {
    setCompletedLessons(prev => {
      if (!prev.includes(id)) {
        // Add XP when completing a lesson
        const currentXP = parseInt(localStorage.getItem('french_xp') || '0', 10);
        const oldLevel = calculateLevel(currentXP);
        const newXP = currentXP + 50;
        const newLevel = calculateLevel(newXP);
        
        localStorage.setItem('french_xp', newXP.toString());
        
        // Check if level increased
        if (newLevel > oldLevel) {
          localStorage.setItem('french_level_up', 'true');
          localStorage.setItem('french_new_level', newLevel.toString());
        }
        
        // Update streak
        const lastCompletionDate = localStorage.getItem('french_last_completion');
        const today = new Date().toDateString();
        
        if (lastCompletionDate !== today) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          
          if (lastCompletionDate === yesterday.toDateString()) {
            // Continue streak
            const currentStreak = parseInt(localStorage.getItem('french_streak') || '0', 10);
            localStorage.setItem('french_streak', (currentStreak + 1).toString());
          } else {
            // Reset streak
            localStorage.setItem('french_streak', '1');
          }
          
          localStorage.setItem('french_last_completion', today);
        }
        
        return [...prev, id];
      }
      return prev;
    });
  };

  const getLessonStatus = (id: string) => {
    if (completedLessons.includes(id)) return 'completed';
    if (id === currentLesson) return 'current';
    return 'locked';
  };

  return (
    <ProgressContext.Provider value={{ completedLessons, currentLesson, completeLesson, getLessonStatus }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
