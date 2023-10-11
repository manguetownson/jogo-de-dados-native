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
         const title = `${payload.date.getFullYear()}-${
            payload.date.getMonth() + 1
        }`;
         const index = state.history.findIndex(v => v.title === title);
         const history = {
            date: payload.date.toString(),
            result: payload.result,
        };
         if (index == -1){
            state.history.unshift({title, data:[history]})
         } 
         else{
            state.history[index].data.unshift(history);
         }
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