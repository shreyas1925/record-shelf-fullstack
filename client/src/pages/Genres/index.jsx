import React, { useEffect, useState } from "react";
import "./Genres.css";
import { Link } from "react-router-dom";
import { Card } from "../../components";
import inconGrid from "../../assets/icon-grid.svg";
import pops from "../../assets/genre-pop.png";
import bollywoods from "../../assets/genre-bollywood.png";
import countrys from "../../assets/genre-country.png";
import rocks from "../../assets/genre-rock.png";
import makeRequest from "../../utils/makeRequest";
import "core-js";

const Genre = () => {

  const [songs, setAllSongs] = useState([]);
  const [likes, setAllLikes] = useState([]);
  const [counts, setAllCounts] = useState([]);

  const pop = songs.filter((song) => song.genre.name === "Pop");
  const bollywood = songs.filter((song) => song.genre.name === "Bollywood");
  const country = songs.filter((song) => song.genre.name === "Country");
  const rock = songs.filter((song) => song.genre.name === "Rock");

  useEffect(() => {
    makeRequest("api/records", { method: "get" })
      .then((response) => {
        setAllSongs(response);
      })
      .catch((e) => {
        // setError(e.message);
      });
  }, []);

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
  // const songss = songs.group(song => {
  //   return song.genre;
  //  });

  //  console.log(songss);

  return (
    <>
      <div className="mini--header-g">
        <h1>genres</h1>
        <Link to="/songs">
          <img src={inconGrid} alt="heart" />
        </Link>
      </div>

      <div className="genre--type">
        <img src={pops} alt="" srcset="" />
        <button>pop</button>
      </div>

      <div className="container genre">
        {pop.map((song,index) => {
          return <Card song={song} likes={likes[index]} counts={counts[index]} />;
        })}

        <div className="genre--type">
          <img src={bollywoods} alt="" srcset="" />
          <button>Bollywood</button>
        </div>

        {bollywood.map((song,index) => {
          return <Card song={song} likes={likes[index]} counts={counts[index]} />;
        })}

        <div className="genre--type">
          <img src={countrys} alt="" srcset="" />
          <button>Country</button>
        </div>

        {country.map((song,index) => {
          return <Card song={song} likes={likes[index]} counts={counts[index]} />;
        })}

        <div className="genre--type">
          <img src={rocks} alt="" srcset="" />
          <button>Rock</button>
        </div>
        
        {rock.map((song,index) => {
          return <Card song={song} likes={likes[index]} counts={counts[index]}  />;
        })}

      </div>
    </>
  );
};

export default Genre;
