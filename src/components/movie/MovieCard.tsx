import styleMovie from "../../sass/movies/movieCard.module.scss";
import { Icon } from "../Icon";

import type { MovieResult } from "../../interfaces/movies/trendingMovies.interface";

export const MovieCard = ({
  movie,
  isDescriptionInside,
}: {
  movie: MovieResult;
  isDescriptionInside: boolean;
}) => {
  console.log(movie,'movie');
  return (
    <div className={`${styleMovie["movieCard"]}`}>
      <div className={`${styleMovie["movieCard__wrapperBookMovie"]}`}>
        <Icon
          name="book_movie"
          className={`${styleMovie["movieCard__bookMovie"]}`}
        />
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
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
            {movie.release_date.split("-")[0]}
          </span>
          <span className={`${styleMovie["movieCard__detailsMovie--item"]}`}>
            Movie
          </span>
          <span className={`${styleMovie["movieCard__detailsMovie--item"]}`}>
            PG
          </span>
        </div>
        <span
          className={` ${
            isDescriptionInside
              ? styleMovie["movieCard__movieTitle"]
              : styleMovie["movieCard__noInfoInside__movieTitle"]
          }`}
        >
          {movie.title}
        </span>
      </div>
    </div>
  );
};
