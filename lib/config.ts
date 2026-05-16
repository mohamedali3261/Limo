// Centralized configuration for the entire application
export const APP_CONFIG = {
  name: 'Limo',
  languages: {
    french: {
      name: 'Limo 🇫🇷',
      flag: '🇫🇷',
      code: 'fr'
    },
    german: {
      name: 'Limo 🇩🇪',
      flag: '🇩🇪',
      code: 'de'
    },
    spanish: {
      name: 'Limo 🇪🇸',
      flag: '🇪🇸',
      code: 'es'
    },
    english: {
      name: 'Limo 🇬🇧',
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
