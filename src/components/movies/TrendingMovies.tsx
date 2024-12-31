import { Children } from "react";

import { useFetch } from "../../hooks/useFetch";
import { Title } from "../title/Title";

import trendingStyles from "../../sass/movies/trendingMovies.module.scss";

import type { TrendingMovieResponse } from "../../interfaces";
import { MovieCard } from "../movie/MovieCard";

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
          {Children.toArray(
            data.results.map((movie) => {
              return <MovieCard movie={movie} isDescriptionInside={true} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
