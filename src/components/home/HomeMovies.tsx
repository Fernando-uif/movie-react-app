import { TrendingMovies } from "../movies/TrendingMovies";
import { Search } from "../search/Search";
import { Navbar } from "../ui/Navbar";

export const HomeMovies = () => {
  return (
    <>
      <Navbar />
      <Search />
      <TrendingMovies />
    </>
  );
};
