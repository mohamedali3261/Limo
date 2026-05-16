/**
 * Utility functions for level management
 */

const levelOrder = ['beginner', 'elementary', 'intermediate', 'advanced'];

/**
 * Get the index of a level in the order
 */
export function getLevelIndex(level: string): number {
  return levelOrder.indexOf(level);
}

/**
 * Check if a lesson/unit is accessible based on current level
 */
export function isLessonAccessible(lessonDifficulty: string, currentLevel: string): boolean {
  const lessonIndex = getLevelIndex(lessonDifficulty);
  const currentIndex = getLevelIndex(currentLevel);
  
  // If lesson difficulty is not recognized, allow access
  if (lessonIndex === -1) return true;
  
  // Allow access if lesson is at or above current level
  return lessonIndex >= currentIndex;
}

/**
 * Filter lessons by current level - show all but mark locked ones
 */
export function filterLessonsByLevel(lessons: any[], currentLevel: string): any[] {
  return lessons.map(lesson => {
    // If lesson has no difficulty specified, show it as unlocked
    if (!lesson.difficulty) return lesson;
    
    const isAccessible = isLessonAccessible(lesson.difficulty, currentLevel);
    
    // Return lesson with updated status if not accessible
    if (!isAccessible && lesson.status !== 'completed') {
      return {
        ...lesson,
        status: 'locked'
      };
    }
    
    return lesson;
  });
}

/**
 * Filter units by current level - show all units but filter lessons
 */
export function filterUnitsByLevel(units: any[], currentLevel: string): any[] {
  return units.map(unit => ({
    ...unit,
    lessons: filterLessonsByLevel(unit.lessons, currentLevel)
  }));
}

/**
 * Get difficulty level from lesson index
 * Assumes lessons are ordered by difficulty
 */
export function getDifficultyFromIndex(index: number, totalLessons: number): string {
  const ratio = index / totalLessons;
  
  if (ratio < 0.25) return 'beginner';
  if (ratio < 0.5) return 'elementary';
  if (ratio < 0.75) return 'intermediate';
  return 'advanced';
}

/**
 * Mark lesson as locked if not accessible
 */
export function markLockedLessons(lessons: any[], currentLevel: string): any[] {
  return lessons.map(lesson => {
    const accessible = isLessonAccessible(lesson.difficulty || 'beginner', currentLevel);
    
    return {
      ...lesson,
      status: accessible ? lesson.status : 'locked'
    };
  });
}
