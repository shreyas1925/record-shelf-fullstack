import React from 'react'
import "./ErrorPage.css"
const ErrorPage = () => {
  return (
    <div className="container--error" data-testid='error-page'>
        <img src="https://i.imgur.com/qIufhof.png" alt='main_image' />
        <h1>
          <span>500</span> <br />
          Internal server error
        </h1>
        <p>We are currently trying to fix the problem.</p>
    </div>
  )
}

export default ErrorPage