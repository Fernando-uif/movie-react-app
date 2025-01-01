import { SeriesProps } from "../movies/trendingMovies.interface";

export interface BookedProps {
  bookedItems: SeriesProps[];
  foundItems: SeriesProps[];
  handleBookedItem: (movie: SeriesProps) => void;
  setFoundItems: (items: SeriesProps[]) => void;
  getFoundItems: () => SeriesProps[];
  clearBooked: () => void;
  searchItem: (name: string) => SeriesProps[];
}
