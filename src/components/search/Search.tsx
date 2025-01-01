import { useState } from "react";
import { useLocation } from "react-router-dom";

import { useBookedStore } from "../../store/booked/booked-store";

import searchStyles from "../../sass/ui/search.module.scss";

type Locations = "/home-movies" | "/movies" | "/series" | "/bookmark";

type PathMessages = {
  [key: string]: string;
  "/home-movies": string;
  "/movies": string;
  "/series": string;
  "/bookmark": string;
};

const pathMessages: PathMessages = {
  "/home-movies": "Search for movies or TV series",
  "/movies": "Search for movies",
  "/series": "Search for TV series",
  "/bookmark": "Search for bookmarked shows",
};

export const Search = () => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState<string>("");
  const setSearchItem = useBookedStore((state) => state.searchItem);
  const setFoundItems = useBookedStore((state) => state.setFoundItems);

  const placeHolderMessage: string = pathMessages[location.pathname] || "";
  const currentPath: Locations = location.pathname as Locations;

  const handleSearchItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (currentPath === "/bookmark") {
      const foundItems = setSearchItem(e.target.value);

      setFoundItems(foundItems);
    } else {
      console.log();
    }
  };
  // TODO Vamos actualizando el store cuando vamos escribiendo, porque ya tenemos el arreglo de todos nuestros elementos
  return (
    <>
      <div className={`${searchStyles["search"]}`}>
        <input
          type="search"
          placeholder={placeHolderMessage}
          className={`${searchStyles["search__input"]}`}
          onChange={handleSearchItem}
          value={inputValue}
        />
      </div>
    </>
  );
};
