import { Children } from "react";

import { useBookedStore } from "../../store/booked/booked-store";
import { MovieCard } from "../movie/MovieCard";
import { Title } from "../title/Title";

import style from "../../sass/movies/gridMovieCard.module.scss";

export const Booked = () => {
  const bookedItems = useBookedStore((state) => state.bookedItems);
  const foundItems = useBookedStore((state) => state.foundItems);
  
  return (
    <>
      <Title level="h2" text="Bookmarked Movies / Series" />

      <div className={`${style["gridMovieCard"]}`}>
        {foundItems.length
          ? Children.toArray(
              foundItems.map((movie) => {
                return <MovieCard isDescriptionInside={false} movie={movie} />;
              })
            )
          : Children.toArray(
              bookedItems.map((movie) => {
                return <MovieCard isDescriptionInside={false} movie={movie} />;
              })
            )}
      </div>
    </>
  );
};
