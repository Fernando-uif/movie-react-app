import { Navbar } from "../components/ui/Navbar";
import { Search } from "../components/search/Search";
import { Booked } from "../components/movies/Booked";

import style from "../sass/ui/navbar.module.scss";

export const BookedPage = () => {
  return (
    <div className={`${style["navbar__desktop"]}`}>
      <div>
        <Navbar />
      </div>
      <div className={`${style["navbar__desktop--content"]}`}>
        <Search />
        <Booked />
      </div>
    </div>
  );
};
