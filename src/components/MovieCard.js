import React from "react";
import { image_tmdb_cdn } from "../utils/constants";

const MovieCard = ({path}) => {
  
  return (
    <div   className="w-48 pr-4" >
        
      <img  src={image_tmdb_cdn+path} alt="Image"></img>
    </div>
  );
};

export default MovieCard;
