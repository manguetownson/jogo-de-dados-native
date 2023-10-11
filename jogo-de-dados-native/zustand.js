import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useStore = create(
  persist(
    (set) => ({
      history: [],
      increaseHistory: (payload) =>
       set((state) => {
         console.log("payload =", payload);
         return state;
         }),
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: "score-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => AsyncStorage), // (optional) by default, 'localStorage' is used
    }
  )
);