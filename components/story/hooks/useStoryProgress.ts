import { useState, useEffect } from 'react';
import { StoryProgress } from '../types';

const STORAGE_KEY = 'story_progress';

export function useStoryProgress() {
  const [progress, setProgress] = useState<StoryProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const saveProgress = (storyId: number, completed: boolean, score?: number) => {
    const newProgress = {
      ...progress,
      [storyId]: {
        completed,
        bestScore: score || progress[storyId]?.bestScore || 0
      }
    };
    setProgress(newProgress);
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newProgress));
    } catch (error) {
      console.error('Failed to save story progress:', error);
    }
  };

  const getCompletedCount = () => {
    return Object.values(progress).filter(p => p.completed).length;
  };

  const isStoryUnlocked = (storyLevel: number) => {
    // فتح كل القصص (إزالة نظام القفل)
    return true;
  };

  return {
    progress,
    saveProgress,
    getCompletedCount,
    isStoryUnlocked
  };
}
