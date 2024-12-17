import { useEffect } from "react";
import { options, topRatedMovies_api } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addTopRatedMovies } from "../utils/movieSlice";


const useTopRated = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(topRatedMovies_api, options);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useTopRated;
