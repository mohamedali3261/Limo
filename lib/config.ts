// Centralized configuration for the entire application
export const APP_CONFIG = {
  name: 'Limo Hero',
  languages: {
    french: {
      name: 'Limo Hero 🇫🇷',
      flag: '🇫🇷',
      code: 'fr'
    },
    german: {
      name: 'Limo Hero 🇩🇪',
      flag: '🇩🇪',
      code: 'de'
    },
    spanish: {
      name: 'Limo Hero 🇪🇸',
      flag: '🇪🇸',
      code: 'es'
    },
    english: {
      name: 'Limo Hero 🇬🇧',
      flag: '🇬🇧',
      code: 'en'
    }
  }
};

export const getAppTitle = (languageCode?: string): string => {
  if (!languageCode) return APP_CONFIG.name;
  
  const lang = Object.values(APP_CONFIG.languages).find(l => l.code === languageCode);
  return lang ? lang.name : APP_CONFIG.name;
};

export const getLanguageFlag = (languageCode: string): string => {
  const lang = Object.values(APP_CONFIG.languages).find(l => l.code === languageCode);
  return lang ? lang.flag : '';
};
