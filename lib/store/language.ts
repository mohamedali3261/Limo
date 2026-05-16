
import { create } from 'zustand';
import { Language } from '../i18n';

interface LanguageState {
  lang: Language;
  setLang: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  lang: 'en',
  setLang: (lang) => set({ lang }),
}));
