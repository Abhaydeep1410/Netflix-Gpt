import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { options } from '../utils/constants';

const useTrailerVideo = (id) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/"+id+"/videos?language=en-US",
        options
      );
      const json = await data.json();
      const filterTrailer = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    };
  
    useEffect(() => {
      getMovieVideo();
    }, []);
}

export default useTrailerVideo