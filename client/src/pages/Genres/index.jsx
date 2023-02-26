import React from "react";
import "./Genres.css";
import { Link } from "react-router-dom";
import inconGrid from "../../assets/icon-grid.svg";
import pops from "../../assets/genre-pop.png";
import bollywoods from "../../assets/genre-bollywood.png";
import countrys from "../../assets/genre-country.png";
import rocks from "../../assets/genre-rock.png";
import GenreWrapper from "../../components/GenreWrapper";

const Genre = ({songs,likes,counts}) => {

  const pop = songs.filter((song) => song.genre.name === "Pop");
  const bollywood = songs.filter((song) => song.genre.name === "Bollywood");
  const country = songs.filter((song) => song.genre.name === "Country");
  const rock = songs.filter((song) => song.genre.name === "Rock");

  return (
    <>
      <div className="mini--header-g">
        <h1>genres</h1>
        <Link to="/songs">
          <img src={inconGrid} alt="heart" />
        </Link>
      </div>

      <div className="container">
         <GenreWrapper images={pops} text="pop" types={pop} likes={likes} counts={counts} />
         <GenreWrapper images={bollywoods} text="bollywood" types={bollywood} likes={likes} counts={counts} /> 
         <GenreWrapper images={countrys} text="country" types={country} likes={likes} counts={counts} /> 
         <GenreWrapper images={rocks} text="rock" types={rock} likes={likes} counts={counts} />  
      </div>
    </>
  );
};

export default Genre;
