import React from 'react'
import Header from './Header'
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {

  useNowPlaying();
  return (
    <div>
      <Header/>
      {
        /**
         * Main container
         *    - video background
         *    - video title
         * Secondary container
         *    - movielist* n
         *        -cards*n
         */
      }

      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse