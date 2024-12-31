import { Navbar } from "../components/ui/Navbar";
import { Recommended } from "../components/movies/Recommended";
import { Search } from "../components/search/Search";
import { TrendingMovies } from "../components/movies/TrendingMovies";


export const HomeMovies = () => {
  return (
    <>
      <Navbar />
      <Search />
      <TrendingMovies />
      <Recommended />
    </>
  );
};
