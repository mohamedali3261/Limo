import { useEffect, useState } from 'react';
import { useAuthStore } from '../store/auth';

export function useCurrentLevel() {
  const { user } = useAuthStore();
  const [currentLevel, setCurrentLevel] = useState<string>('beginner');

  useEffect(() => {
    // Try to get language from user or from URL or from localStorage
    let language = user?.language;
    
    if (!language) {
      // Try to get from localStorage
      const savedUser = localStorage.getItem('limohero_current_user');
      if (savedUser) {
        try {
          const parsedUser = JSON.parse(savedUser);
          language = parsedUser.language;
        } catch (e) {
          console.error('Failed to parse saved user', e);
        }
      }
    }

    if (language) {
      // Try to get the current level from localStorage
      const savedLevel = localStorage.getItem(`${language}_current_level`);
      if (savedLevel) {
        setCurrentLevel(savedLevel);
      } else {
        // Default to beginner if not set
        setCurrentLevel('beginner');
      }
    } else {
      setCurrentLevel('beginner');
    }
  }, [user?.language]);

  return currentLevel;
}

export function setCurrentLevel(language: string, level: string) {
  localStorage.setItem(`${language}_current_level`, level);
}

export function getCurrentLevel(language: string): string {
  return localStorage.getItem(`${language}_current_level`) || 'beginner';
}
