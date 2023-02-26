import React, { useEffect, useState } from 'react'
import "./Wrapper.css"

const Wrapper = ({children}) => {

  return (
    <div className='song--container'>
        <div className='grey--container'>
                {children}
        </div>

  </div>
  )
}

export default Wrapper