import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  count: number;
  setUser: (user: User | null) => void;
  setTheme: (theme: 'light' | 'dark') => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      user: null,
      theme: 'light',
      count: 0,
      setUser: (user) => set({ user }),
      setTheme: (theme) => set({ theme }),
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: 'app-storage', // localStorage key
    }
  )
);

