import { Children } from "react";

import { Navbar } from "../components/ui/Navbar";
import { Search } from "../components/search/Search";
import { Title } from "../components/title/Title";
import { useBookedStore } from "../store/booked/booked-store";
import { MovieCard } from "../components/movie/MovieCard";

import style from "../sass/movies/gridMovieCard.module.scss";

export const Booked = () => {
  const bookedItems = useBookedStore((state) => state.bookedItems);

  return (
    <>
      <Navbar />
      <Search />
      <Title level="h2" text="Bookmarked Movies / Series" />
      <div className={`${style["gridMovieCard"]}`}>
        {Children.toArray(
          bookedItems.map((movie) => {
            return <MovieCard isDescriptionInside={false} movie={movie} />;
          })
        )}
      </div>
    </>
  );
};
