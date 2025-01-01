import { Children } from "react";

import { useFetch } from "../../hooks/useFetch";
import { Title } from "../title/Title";
import { MovieCard } from "../movie/MovieCard";

import style from "../../sass/movies/gridMovieCard.module.scss";

import type { TrendingMovieResponse } from "../../interfaces";

export const Recommended = () => {
  const {
    data,
    isLoading,
  }: { data: TrendingMovieResponse | undefined; isLoading: boolean } = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?&page=1&api_key=${
      import.meta.env.VITE_MOVIE_KEY
    }`
  );

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data available</p>;
  
  return (
    <>
      <Title level="h2" text="Recommended for you" />
      <div className={`${style["gridMovieCard"]}`}>
        {Children.toArray(
          data?.results.map((movie) => {
            return <MovieCard movie={movie} isDescriptionInside={false} />;
          })
        )}
      </div>
    </>
  );
};
