import React from "react";
import { Link } from "react-router-dom";
import "./Songs.css";
import { Card } from "../../components";
import iconGenre from "../../assets/icon-genre.svg";


const Songs = ({songs,likes,counts}) => {
  return (
    <>
    <div className='song--container'>
        <div className='grey--container'>
          <div className="mini--header">
            <h1>all songs</h1>
            <Link to="/genre">
              <img src={iconGenre} alt="heart" />
            </Link>
          </div>
          <div className="container">
            {songs.map((song,index) => {
              return <Card key={song.id} song={song} counts={counts[index]} likes={likes[index]} />;
            })}
          </div>
      </div>
    </div>
    </>
  );
};

export default Songs;
