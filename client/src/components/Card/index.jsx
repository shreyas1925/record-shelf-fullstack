import React, {useState } from "react";
import "./Card.css";
import redHeart from "../../assets/heart-red.svg";
import blackHeart from "../../assets/heart-gray.svg";
import makeRequest from "../../utils/makeRequest";
import { UPDATE_SONG_LIKE_BY_ID } from "../../constants/apiEndPoints";

const Card = ({ song, counts, likes }) => {
  
  // const [countInc, setCountInc] = useState(counts);
  const [likeInc, setLikeInc] = useState(likes);

  const likedImage = likes ? redHeart : blackHeart;

  const handleLikes = async () => {
    console.log("hello")
    try{
      const res = await makeRequest(UPDATE_SONG_LIKE_BY_ID(song.id),{ data: { like:!likeInc }})
      // likeInc ? setCountInc(countInc - 1) : setCountInc(countInc + 1);
      console.log(res)
      setLikeInc(!likeInc);
    } catch(e){
      // 
    }
  }
  return (
    <div className="container--card">
      <img alt="card" src={song.imageUrl} />
      <div className="card--footer">
        <div className="card--details">
          <h3>{song.name}</h3>
          <p>{song.artist.name}</p>
        </div>
        <div className="red--heart">
          <img src={likedImage} alt="red-heart" onClick={handleLikes}/>
          <p>{counts}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
