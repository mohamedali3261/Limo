import { create } from 'zustand';

interface ThemeState {
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  primaryColor: '#FF6B00',
  setPrimaryColor: (color) => {
    document.documentElement.style.setProperty('--color-primary', color);
    // Rough darkening for the border/shadow
    const darken = (hex: string) => {
      let r = parseInt(hex.slice(1, 3), 16);
      let g = parseInt(hex.slice(3, 5), 16);
      let b = parseInt(hex.slice(5, 7), 16);
      r = Math.floor(r * 0.8);
      g = Math.floor(g * 0.8);
      b = Math.floor(b * 0.8);
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };
    document.documentElement.style.setProperty('--color-primary-dark', darken(color));
    set({ primaryColor: color });
  }
}));
