import { Children } from "react";

import { useBookedStore } from "../../store/booked/booked-store";
import { MovieCard } from "../movie/MovieCard";

import style from "../../sass/movies/gridMovieCard.module.scss";
import { Title } from "../title/Title";

export const Booked = () => {
  const bookedItems = useBookedStore((state) => state.bookedItems);

  return (
    <>
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
