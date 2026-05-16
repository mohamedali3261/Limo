import { create } from 'zustand';

interface SettingsState {
  ttsRate: number;
  ttsGender: 'male' | 'female';
  animSpeed: number; // 1 (Fast), 2 (Normal), 3 (Slow)
  mapCharacterUrl: string;
  mapBackgroundUrls: string[];
  mapAnimInterval: number; // milliseconds
  setSettings: (settings: Partial<Omit<SettingsState, 'setSettings'>>) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  ttsRate: 0.9,
  ttsGender: 'female',
  animSpeed: 2,
  mapCharacterUrl: '',
  mapBackgroundUrls: [],
  mapAnimInterval: 3000,
  setSettings: (batch) => set((state) => ({ ...state, ...batch })),
}));
