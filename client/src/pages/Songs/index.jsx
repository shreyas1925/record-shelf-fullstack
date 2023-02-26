import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Songs.css";
import { Card } from "../../components";
import iconGenre from "../../assets/icon-genre.svg";
import makeRequest from "../../utils/makeRequest";

const Songs = () => {
  const [songs, setAllSongs] = useState([]);
  const [likes, setAllLikes] = useState([]);
  const [counts, setAllCounts] = useState([]);

  useEffect(() => {
    makeRequest("api/records", { method: "get" })
      .then((response) => {
        setAllSongs(response);
      })
      .catch((e) => {
        // setError(e.message);
      }); 
      
  },[]);


  useEffect(() => {
    songs.map((song)=>{
      makeRequest(`api/records/${song.id}/likes`, { method: "get" })
        .then((response) => {
          const {count,like} = response
          console.log(like)
          // res1.push(like)
          // res2.push(count)
          setAllLikes(likes => [...likes,like]);
          setAllCounts(counts => [...counts,count]);
         
        })
        .catch((e) => {
          // setError(e.message);
        })
      return(
        <div key={song.id}></div>
      )  
  })
  },[songs]);

  useEffect(() => {
    songs.map((song)=>{
      makeRequest(`api/records/${song.id}/likes`, { method: "patch" },{data: {counts : counts +1}})
        .then((response) => {
         
        })
        .catch((e) => {
          // setError(e.message);
        })
      return(
        <div key={song.id}></div>
      )  
  })
  },[songs]);

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
