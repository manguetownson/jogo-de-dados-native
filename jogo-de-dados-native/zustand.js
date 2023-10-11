import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create(
  persist(
    (set) => ({
      history: [],
      increaseHistory: () => set((state) => ({ history: state.history + 1 })),
      clearHistory: () => set({ history: 0 }),
    }),
    {
      name: "score-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    }
  )
);