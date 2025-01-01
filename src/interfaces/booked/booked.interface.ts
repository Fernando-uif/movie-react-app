import { SeriesProps } from "../movies/trendingMovies.interface";

export interface BookedProps {
  bookedItems: SeriesProps[];
  handleBookedItem: (movie: SeriesProps) => void;
  clearBooked: () => void;
}
