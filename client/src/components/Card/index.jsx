import React, {useEffect, useState } from "react";
import "./Card.css";
import redHeart from "../../assets/heart-red.svg";
import blackHeart from "../../assets/heart-gray.svg";
import makeRequest from "../../utils/makeRequest";
import { GET_SONG_LIKE_BY_ID, UPDATE_SONG_LIKE_BY_ID } from "../../constants/apiEndPoints";

const Card = ({ song }) => {
  
  const [countInc, setCountInc] = useState(0);
  const [likeInc, setLikeInc] = useState(false);

  useEffect(()=>{
    makeRequest(GET_SONG_LIKE_BY_ID(song.id), {})
        .then((response) => {
          setCountInc(response.data.count)
          setLikeInc(response.data.like)
        })
        .catch((e) => {
          // setError(e.message);
      });
  })
  
  const likedImage = likeInc ? redHeart : blackHeart;

  const handleLikes = async () => {
    try{
      await makeRequest(UPDATE_SONG_LIKE_BY_ID(song.id),{ data: { like:!likeInc } });
      setCountInc(likeInc ? countInc - 1 : countInc + 1);
      setLikeInc(!likeInc);
    } catch(e){
      // 
    }
  }
  return (
    <div className="container--card" data-testid='card'>
      <img alt="card" src={song.imageUrl} />
      <div className="card--footer">
        <div className="card--details">
          <h3>{song.name}</h3>
          <p>{song.artist.name}</p>
        </div>
        <div className="red--heart">
          <img src={likedImage} alt="heart" onClick={handleLikes}/>
          <p>{countInc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
