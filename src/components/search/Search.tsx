import searchStyles from "../../sass/ui/search.module.scss";
import { useLocation } from "react-router-dom";

export const Search = () => {
  const location = useLocation();
  const placeHolderMessage =
    location.pathname === "/home-movies"
      ? "Search for movies or TV series"
      : location.pathname === "/movies"
      ? "Search for movies"
      : location.pathname === "/tv-series"
      ? "Search for TV series"
      : location.pathname === "/bookmarked-shows"
      ? "Search for bookmarked shows"
      : "";
  return (
    <>
      <div className={`${searchStyles["search"]}`}>
        <input
          type="search"
          placeholder={placeHolderMessage}
          className={`${searchStyles["search__input"]}`}
        />
      </div>
    </>
  );
};
