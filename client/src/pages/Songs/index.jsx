import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Songs.css';
import { Card } from '../../components';
import iconGenre from '../../assets/icon-genre.svg';
import makeRequest from '../../utils/makeRequest';
import { GET_SONGS } from '../../constants/apiEndPoints';


const Songs = () => {

    const [songs, setAllSongs] = useState([]);
    // const [filterdata, setFilterdata]= useState([]);
    // const [query, setQuery] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        makeRequest(GET_SONGS, {},navigate)
            .then((response) => {
                setAllSongs(response.data);
                // setFilterdata(response.data);
            });
    }, []);

    // const handlesearch=(event)=>{
    //     const getSearch= event.target.value; 
    //     if(getSearch.length > 0)
    //     {     
    //         const searchdata = songs.filter( (item)=> item.name.toLowerCase().includes(getSearch));
    //         //  console.log(searchdata);
    //         setAllSongs(searchdata);
    //     } else {
    //         setAllSongs(filterdata);
    //     }
    //     setQuery(getSearch);
    // };


    return (
        <>
            <div className='song--container' data-testid='songs'>
                <div className='grey--container'>
                    <div className="mini--header">
                        <h1>all songs</h1>
                        {/* <input type="text" placeholder="search" value={query} onChange={handlesearch}/> */}
                        <Link to="/genre" data-testid='genre'>
                            <img src={iconGenre} alt="heart" />
                        </Link>
                    </div>
                    <div className="container" >
                        {songs.map((song)=><Card data-testid='card' key={song.id} song={song} />)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Songs;
