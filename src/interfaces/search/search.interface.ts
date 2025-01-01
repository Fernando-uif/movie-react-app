import type { SeriesProps } from "../movies/trendingMovies.interface";

export interface SearchProps {
  searchItems: SeriesProps[];
  setItems: (items: SeriesProps[]) => void;
  getItems: () => SeriesProps[];
}
