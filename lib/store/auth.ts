import { create } from 'zustand';
import { apiFetch } from '../api';

interface AuthState {
  user: any | null;
  token: string | null;
  login: (user: any, token: string) => void;
  logout: () => void;
  fetchUser: () => Promise<void>;
}

// استعادة بيانات المستخدم من localStorage عند بدء التطبيق
const getStoredUser = () => {
  try {
    const storedUser = localStorage.getItem('limohero_user');
    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    return null;
  }
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: getStoredUser(), // استعادة المستخدم من localStorage
  token: localStorage.getItem('limohero_token'),
  login: (user, token) => {
    // حفظ التوكن وبيانات المستخدم في localStorage
    localStorage.setItem('limohero_token', token);
    localStorage.setItem('limohero_user', JSON.stringify(user));
    set({ user, token });
  },
  logout: () => {
    // حذف جميع بيانات الجلسة
    localStorage.removeItem('limohero_token');
    localStorage.removeItem('limohero_user');
    set({ user: null, token: null });
  },
  fetchUser: async () => {
    const token = get().token;
    if (!token) return;
    try {
      const data = await apiFetch('/api/auth/me');
      if (data?.user) {
        // تحديث بيانات المستخدم في localStorage
        localStorage.setItem('limohero_user', JSON.stringify(data.user));
        set({ user: data.user });
      }
    } catch (error) {
      console.error('Failed to fetch user', error);
      // في حالة فشل التحقق، حذف الجلسة
      localStorage.removeItem('limohero_token');
      localStorage.removeItem('limohero_user');
      set({ user: null, token: null });
    }
  }
}));
