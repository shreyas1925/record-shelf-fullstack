import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Songs.css";
import { Card } from "../../components";
import iconGenre from "../../assets/icon-genre.svg";
import makeRequest from "../../utils/makeRequest";
import { GET_SONGS } from "../../constants/apiEndPoints";


const Songs = () => {

  const [songs, setAllSongs] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    makeRequest(GET_SONGS, {},navigate)
      .then((response) => {
        setAllSongs(response.data);
      })
  }, []);

  return (
    <>
    <div className='song--container' data-testid='songs'>
        <div className='grey--container'>
          <div className="mini--header">
            <h1>all songs</h1>
            <Link to="/genre" data-testid='genre'>
              <img src={iconGenre} alt="heart" />
            </Link>
          </div>
          <div className="container" >
           {songs.map((song)=><Card data-testid='card' song={song} />)}
          </div>
      </div>
    </div>
    </>
  );
};

export default Songs;
