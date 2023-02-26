import { useEffect, useState } from "react";
import { GET_SONGS, GET_SONG_LIKE_BY_ID } from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Wrapper } from "../../components";
import Songs from "../Songs";
import Genre from "../Genres";
import Home from "../Home";

const Wrapperpage = () => {
  const [songs, setAllSongs] = useState([]);
  const [likes, setAllLikes] = useState([]);
  const [counts, setAllCounts] = useState([]);

  useEffect(() => {
    makeRequest(GET_SONGS, {})
      .then((response) => {
        setAllSongs(response.data);
      })
      .catch((e) => {
        //
      });
  }, []);

  useEffect(() => {
    songs.map((song) => {
      makeRequest(GET_SONG_LIKE_BY_ID(song.id), {})
        .then((response) => {
          const { count, like } = response.data;
          console.log(like);
          setAllLikes((likes) => [...likes, like]);
          setAllCounts((counts) => [...counts, count]);
        })
        .catch((e) => {
          // setError(e.message);
        });
      return <div key={song.id}></div>;
    });
  }, [songs]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/songs"
            element={
              <Wrapper>
                <Songs songs={songs} likes={likes} counts={counts} />
              </Wrapper>
            }
          />
          <Route
            path="/genre"
            element={
              <Wrapper>
                <Genre songs={songs} likes={likes} counts={counts} />
              </Wrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Wrapperpage;
