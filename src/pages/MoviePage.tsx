import { Navbar } from "../components/ui/Navbar";
import { Search } from "../components/search/Search";
import { UpcomingMovies } from "../components/movies/UpcomingMovies";

import style from "../sass/ui/navbar.module.scss";

export const MoviePage = () => {
  return (
    <div className={`${style["navbar__desktop"]}`}>
      <div>
        <Navbar />
      </div>
      <div className={`${style["navbar__desktop--content"]}`}>
        <Search />
        <UpcomingMovies />
      </div>
    </div>
  );
};
