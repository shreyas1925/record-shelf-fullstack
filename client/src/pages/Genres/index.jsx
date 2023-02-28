import React, { useEffect, useState } from "react";
import "./Genres.css";
import { Link, useNavigate } from "react-router-dom";
import inconGrid from "../../assets/icon-grid.svg";
import makeRequest from "../../utils/makeRequest";
import { GET_SONGS } from "../../constants/apiEndPoints";
import genreIcons from "../../constants/genreIcons";
import { Card } from "../../components";

const Genre = () => {
  // const pop = songs.filter((song) => song.genre.name === "Pop");
  // const bollywood = songs.filter((song) => song.genre.name === "Bollywood");
  // const country = songs.filter((song) => song.genre.name === "Country");
  // const rock = songs.filter((song) => song.genre.name === "Rock");

  const [genres, setGenres] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_SONGS, {}, navigate).then((response) => {
      const songs = response.data;
      console.log("songs" + songs);
      const genreSongs = songs.reduce((acc, song) => {
        const category = song.genre.name;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(song);
        return acc;
      }, {});
      setGenres(genreSongs);
    });
  }, []);

  console.log(genres);
  return genres ? (
    <>
      <div className="song--container" data-testid="genre">
        <div className="grey--container">
          <div className="mini--header-g">
            <h1>genres</h1>
            <Link to="/songs" data-testid="songs">
              <img src={inconGrid} alt="heart" />
            </Link>
          </div>

          {Object.keys(genres).map((category) => (
            <div data-testid="genre-wrapper">
              <div className="genre--type">
                <img src={genreIcons[category.toLowerCase()]} alt="genre" />
                <button>{category}</button>
              </div>
              <div className="container">
                {genres[category].map((song) => (
                  <Card key={song.id} song={song} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <p>loading...</p>
  );
};

export default Genre;
