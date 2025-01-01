import { Navbar } from "../components/ui/Navbar";
import { Recommended } from "../components/movies/Recommended";
import { Search } from "../components/search/Search";
import { TrendingMovies } from "../components/movies/TrendingMovies";

import style from "../sass/ui/navbar.module.scss";

export const HomeMovies = () => {
  return (
    <div className={`${style["navbar__desktop"]}`}>
      <div>
        <Navbar />
      </div>
      <div className={`${style["navbar__desktop--content"]}`}>
        <Search />
        <TrendingMovies />
        <Recommended />
      </div>
    </div>
  );
};
