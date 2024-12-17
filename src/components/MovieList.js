import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-6">
      <h1 className="text-white text-3xl py-2">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex">
          {movies.map((value, key) => (
            <MovieCard path={value.poster_path} key={key}></MovieCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
