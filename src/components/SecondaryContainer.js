import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const data = useSelector((store) => store.movies?.nowPlayingMovies);

  const popularMoviesData = useSelector((store) => store.movies?.popularMovies);
  const topRatedData = useSelector((store) => store.movies?.topRated);

  if (!data || !popularMoviesData || !topRatedData) return;

  return (
    <div className="bg-black w-screen">
      {/**
       * movielist- popular
       *    - moviecard*n
       * movielist- nowplaying
       * movielist- trending
       *
       */}
      <div className="-mt-48 relative z-20">
      <MovieList title={"Now Playing"} movies={data} />
      <MovieList title={"Top Rated"} movies={topRatedData} />
      <MovieList title={"Popular"} movies={popularMoviesData} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
