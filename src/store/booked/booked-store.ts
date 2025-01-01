import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { BookedProps } from "../../interfaces/booked/booked.interface";

export const useBookedStore = create<BookedProps>()(
  persist(
    (set, get) => ({
      bookedItems: [],
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
        set({ bookedItems: [] });
      },
    }),

    {
      name: "booked-items",
    }
  )
);
