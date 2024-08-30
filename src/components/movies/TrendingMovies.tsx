import { useFetch } from "../../hooks/useFetch";
import { Title } from "../title/Title";
import trendingStyles from "../../sass/movies/trendingMovies.module.scss";
import { Icon } from "../Icon";
import { TrendingMovieResponse } from "../../interfaces";

export const TrendingMovies = () => {
  const {
    data,
    isLoading,
  }: { data: TrendingMovieResponse | undefined; isLoading: boolean } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?&page=1&api_key=${
      import.meta.env.VITE_MOVIE_KEY
    }`
  );

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data available</p>;

  return (
    <>
      <Title
        level="h2"
        text="Trending"
        className={`${trendingStyles["trending__title"]}`}
      />
      <div className={`${trendingStyles["trending__wrapperScroll"]}`}>
        <div className={`${trendingStyles["trending__wrapperScrollImages"]}`}>
          {data.results.map((movie) => {
            console.log(movie, "movie");
            return (
              <>
                <div className={`${trendingStyles["trending__wrapperImage"]}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt=""
                    className={`${trendingStyles["trending__image"]}`}
                  />
                  <div className={`${trendingStyles["trending__infoMovie"]}`}>
                    <div
                      className={`${trendingStyles["trending__detailsMovie"]}`}
                    >
                      <span
                        className={`${trendingStyles["trending__detailsMovie--item"]}`}
                      >
                        {movie.release_date.split("-")[0]}
                      </span>
                      <span
                        className={`${trendingStyles["trending__detailsMovie--item"]}`}
                      >
                        <Icon name="" /> Movie
                      </span>
                      <span
                        className={`${trendingStyles["trending__detailsMovie--item"]}`}
                      >
                        PG
                      </span>
                    </div>
                    <span
                      className={`${trendingStyles["trending__movieTitle"]}`}
                    >
                      {movie.title}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
