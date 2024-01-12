import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import OnTheAir from './services/tv/OnTheAir';
import Popular from './services/movies/Popular';
import Header from './components/common/header/Header';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<OnTheAir />} />
                    <Route path="/movies" element={<Popular />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
