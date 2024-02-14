import { create } from "zustand";

export const createUserSlice = (set) => ({
  user: null,
  isHasAccount: false,
  auth: false,
  isLogout: true,
  updateUserField: ({ name, value }) =>
    set((state) => ({ ...state, user: { ...state.user, [name]: value } })),
  setUser: (user) => set((state) => ({ ...state, user })),
  logout: () => set((state) => ({ ...state, user: null })),
  hasAccountToggle: () =>
    set((state) => ({ isHasAccount: !state.isHasAccount })),
  authToggle: () => set((state) => ({ auth: !state.auth })),
  isLogoutToggle: () => set((state) => ({ isLogout: !state.isLogout })),
});

export const useStore = create((...state) => ({
  ...createUserSlice(...state),
}));
