import { Children } from "react";

import { useFetch } from "../../hooks/useFetch";
import { Title } from "../title/Title";

import { useSearchStore } from "../../store/searchItem/search-store";
import { MovieCard } from "../movie/MovieCard";

import style from "../../sass/movies/gridMovieCard.module.scss";

import type { TrendingMovieResponse } from "../../interfaces";

export const Series = () => {
  const {
    data,
    isLoading,
  }: { data: TrendingMovieResponse | undefined; isLoading: boolean } = useFetch(
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${
      import.meta.env.VITE_MOVIE_KEY
    }`
  );
  const setSearchItems = useSearchStore((state) => state.setItems);
  const foundItems = useSearchStore((state) => state.foundItems);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data available</p>;

  setSearchItems(data.results);

  return (
    <>
      <Title level="h2" text="Popular Series" />
      <div className={`${style["gridMovieCard"]}`}>
        {foundItems.length
          ? Children.toArray(
              foundItems.map((movie) => {
                return <MovieCard movie={movie} isDescriptionInside={false} />;
              })
            )
          : Children.toArray(
              data?.results.map((movie) => {
                return <MovieCard movie={movie} isDescriptionInside={false} />;
              })
            )}
      </div>
    </>
  );
};
