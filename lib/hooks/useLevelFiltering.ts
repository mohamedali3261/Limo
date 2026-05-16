import { useCurrentLevel } from './useCurrentLevel';

const levelOrder = ['beginner', 'elementary', 'intermediate', 'advanced'];

export function useLevelFiltering() {
  const currentLevel = useCurrentLevel();

  const filterLevelsByCurrentLevel = (levels: any[]) => {
    const currentLevelIndex = levelOrder.indexOf(currentLevel);
    
    // Return only levels from current level onwards
    return levels.filter(level => {
      const levelIndex = levelOrder.indexOf(level.difficulty || 'beginner');
      return levelIndex >= currentLevelIndex;
    });
  };

  const isLevelAccessible = (levelDifficulty: string) => {
    const currentLevelIndex = levelOrder.indexOf(currentLevel);
    const levelIndex = levelOrder.indexOf(levelDifficulty);
    return levelIndex >= currentLevelIndex;
  };

  return {
    currentLevel,
    filterLevelsByCurrentLevel,
    isLevelAccessible,
    levelOrder
  };
}
