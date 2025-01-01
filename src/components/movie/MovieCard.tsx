import styleMovie from "../../sass/movies/movieCard.module.scss";
import { Icon } from "../Icon";

import type { SeriesProps } from "../../interfaces/movies/trendingMovies.interface";
import { useBookedStore } from "../../store/booked/booked-store";

export const MovieCard = ({
  movie,
  isDescriptionInside,
}: {
  movie: SeriesProps;
  isDescriptionInside: boolean;
}) => {
  const handleItem = useBookedStore((state) => state.handleBookedItem);
  const booketMovies = useBookedStore((state) => state.bookedItems);
  const isBooked = booketMovies.filter((item) => item.id === movie.id);

  return (
    <div className={`${styleMovie["movieCard"]}`}>
      <div
        className={`${styleMovie["movieCard__wrapperBookMovie"]}`}
        onClick={() => {
          handleItem(movie);
        }}
      >
        <Icon
          name="book_movie"
          className={
            isBooked?.length ? `${styleMovie["movieCard__booked"]}` : ""
          }
        />
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movie?.backdrop_path || movie?.poster_path
        }`}
        alt=""
        className={`${styleMovie["movieCard__image"]}`}
      />

      <div
        className={`${
          isDescriptionInside
            ? styleMovie["movieCard__infoMovie"]
            : styleMovie["movieCard__noInfoInside"]
        }`}
      >
        <div className={`${styleMovie["movieCard__detailsMovie"]}`}>
          <span className={`${styleMovie["movieCard__detailsMovie--item"]}`}>
            {movie?.release_date
              ? movie?.release_date?.split("-")?.[0]
              : movie?.first_air_date?.split("-")?.[0]}
          </span>
          <span className={`${styleMovie["movieCard__detailsMovie--item"]}`}>
            {movie?.release_date ? "Movie" : "Serie"}
          </span>
          <span className={`${styleMovie["movieCard__detailsMovie--item"]}`}>
            {`${movie?.vote_average?.toFixed(1)} / 10`}
          </span>
        </div>
        <span
          className={` ${
            isDescriptionInside
              ? styleMovie["movieCard__movieTitle"]
              : styleMovie["movieCard__noInfoInside__movieTitle"]
          }`}
        >
          {movie?.title ? movie?.title : movie?.name}
        </span>
      </div>
    </div>
  );
};
