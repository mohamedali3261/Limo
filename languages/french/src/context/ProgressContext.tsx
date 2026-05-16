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
