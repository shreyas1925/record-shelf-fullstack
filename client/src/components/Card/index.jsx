import React, { useEffect, useState } from "react";
import "./Card.css";
import redHeart from "../../assets/heart-red.svg";
import blackHeart from "../../assets/heart-gray.svg";
import makeRequest from "../../utils/makeRequest";

const Card = ({ song, counts, likes }) => {
  const [countInc, setCountInc] = useState(counts);
  const [likeInc, setLikeInc] = useState(likes);

  const likedImage = likes ? redHeart : blackHeart;

  const handleStates = async () => {

    console.log("hello")
    try{
      await makeRequest(
        `api/records/${song.id}/likes`,
        { method: "patch" },
        { data: { like:!likeInc }},
      )
      setCountInc(!likeInc ? countInc + 1 : countInc - 1);
      setLikeInc(!likeInc);
    } catch(e){
        console.log(e);
    }

  };
  // console.log(song);
  return (
    <div className="container--card">
      <img alt="card" src={song.imageUrl} />
      <div className="card--footer">
        <div className="card--details">
          <h3>{song.name}</h3>
          <p>{song.artist.name}</p>
        </div>
        <div className="red--heart">
          <img src={likedImage} alt="red-heart" onClick={handleStates}/>
          <p>{counts}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
