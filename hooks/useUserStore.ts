import { create } from "zustand";

interface UserState {
  token: string | null;
  setToken: (token: string) => void;
  removeToken: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  removeToken: () => set({ token: null }),
}));
