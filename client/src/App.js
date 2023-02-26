import React from 'react'
import { Home,Songs,Genre } from './pages'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Wrapper from './components/Wrapper'

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/songs" element={<Wrapper><Songs/></Wrapper> } />
          <Route path="/genre" element={<Wrapper> <Genre/> </Wrapper>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App