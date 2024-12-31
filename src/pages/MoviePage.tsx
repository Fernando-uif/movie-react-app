import { Navbar } from "../components/ui/Navbar";
import { Search } from "../components/search/Search";
import { UpcomingMovies } from "../components/movies/UpcomingMovies";

export const MoviePage = () => {
  return (
    <>
      <Navbar />
      <Search />
      <UpcomingMovies/>
    </>
  );
};
