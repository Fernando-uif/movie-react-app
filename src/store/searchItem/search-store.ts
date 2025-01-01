import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { SearchProps } from "../../interfaces/search/search.interface";

export const useSearchStore = create<SearchProps>()(
  persist(
    (set, get) => ({
      searchItems: [],
      foundItems: [],
      setItems(items) {
        set({ searchItems: [...items] });
      },
      getItems() {
        const { searchItems } = get();
        return searchItems;
      },
      searchItem(name) {
        const { searchItems } = get();

        const foundItems = searchItems.filter((item) =>
          (item?.title || item?.name)
            ?.toLowerCase()
            ?.includes(name?.toLowerCase())
        );

        if (searchItems.length === foundItems.length) return [];

        return foundItems;
      },
      setFoundItems(items) {
        set({ foundItems: [...items] });
      },
    }),

    {
      name: "search-items",
    }
  )
);
