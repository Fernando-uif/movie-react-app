import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { BookedProps } from "../../interfaces/booked/booked.interface";

export const useBookedStore = create<BookedProps>()(
  persist(
    (set, get) => ({
      bookedItems: [],
      foundItems: [],
      handleBookedItem(movie) {
        const { bookedItems } = get();
        const movieInBooked = bookedItems.some((item) => {
          return item?.id === movie?.id;
        });

        if (!movieInBooked) {
          set({ bookedItems: [...bookedItems, movie] });
          return;
        }
        if (movieInBooked) {
          const updatedBooked = bookedItems.filter(
            (item) => item.id !== movie.id
          );
          set({ bookedItems: updatedBooked });
        }
      },

      clearBooked() {
        set({ foundItems: [] });
      },

      searchItem(name) {
        const { bookedItems } = get();
        const searchItems = bookedItems.filter((item) =>
          item.title.toLowerCase().includes(name.toLowerCase())
        );
        if (bookedItems.length === searchItems.length) return [];

        return searchItems;
      },
      setFoundItems(items) {
        set({ foundItems: [...items] });
      },
      getFoundItems() {
        const { foundItems } = get();
        return foundItems;
      },
    }),

    {
      name: "booked-items",
    }
  )
);
