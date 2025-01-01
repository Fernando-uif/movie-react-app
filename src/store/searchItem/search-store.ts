import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { SearchProps } from "../../interfaces/search/search.interface";

export const useBookedStore = create<SearchProps>()(
  persist(
    (set, get) => ({
      searchItems: [],
      setItems(items) {
        set({ searchItems: { ...items } });
      },
      getItems() {
        const { searchItems } = get();
        return searchItems;
      },
    }),

    {
      name: "search-items",
    }
  )
);
