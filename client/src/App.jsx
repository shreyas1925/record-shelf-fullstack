import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { ErrorPage, Genre, Home, PageNotFound, Songs } from './pages';

const App = () => {
    return (
        <div data-testid='app'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/songs" element={<Songs />} />
                    <Route path="/genre" element={<Genre />} />
                    <Route path="/error/:errorCode?" element={<ErrorPage />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
