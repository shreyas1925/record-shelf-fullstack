import React from "react";
import Card from "../Card";

const GenreWrapper = ({images,types,text,likes,counts}) => {
  return (
    <div data-testid="genre-wrapper">
      <div className="genre--type">
        <img src={images} alt="genre" />
        <button>{text}</button>
      </div>

      {types.map((song, index) => {
        return <Card song={song} likes={likes[index]} counts={counts[index]} />;
      })}
    </div>
  );
};

export default GenreWrapper;
