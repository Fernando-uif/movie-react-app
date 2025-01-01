import type { SeriesProps } from "../movies/trendingMovies.interface";

export interface SearchProps {
  searchItems: SeriesProps[];
  foundItems: SeriesProps[];
  setItems: (items: SeriesProps[]) => void;
  setFoundItems: (items: SeriesProps[]) => void;
  getItems: () => SeriesProps[];
  searchItem: (name: string) => SeriesProps[];
}
