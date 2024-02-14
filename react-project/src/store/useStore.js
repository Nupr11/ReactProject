import { create } from "zustand";

export const createUserSlice = (set) => ({
  user: {
    name: "",
    email: "",
    password: "",
  },
  updateUserField: ({ name, value }) =>
    set((state) => ({ ...state, user: { ...state.user, [name]: value } })),
  setUser: (user) => set((state) => ({ ...state, user })),
});

export const useStore = create((...state) => ({
  ...createUserSlice(...state),
}));
