import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home--container' data-testid='home'>
        <p>:((</p>
        <p>seems a bit empty in here...</p>
        <button>
            <Link to="/songs">sync</Link>
        </button>
    </div>
  )
}

export default Home