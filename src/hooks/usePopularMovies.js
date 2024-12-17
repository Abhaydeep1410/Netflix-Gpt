import React, { useEffect } from 'react'
import { options, popularMovies_api } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
    const dispatch=useDispatch();
    const getPopularMovies=async()=>{
        const data=await fetch(popularMovies_api,options);
        const json=await data.json();
        console.log(json.results)
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        getPopularMovies();
    });

  
}

export default usePopularMovies