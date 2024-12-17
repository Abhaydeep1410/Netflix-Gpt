import { useEffect } from "react";
import { nowplayingMovies_api, options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";


const useNowPlaying = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    const data = await fetch(nowplayingMovies_api, options);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useNowPlaying;
