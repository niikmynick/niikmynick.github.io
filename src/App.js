import React from "react";
import {MainPage} from "./pages/main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {PersonPage} from "./pages/person";
import './main.css';
import {ProgrammingPage} from "./pages/programming";
import {MusicPage} from "./pages/music";
import {OtherPage} from "./pages/other";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/person" element={<PersonPage />} />
                <Route path="/programming" element={<ProgrammingPage />} />
                <Route path="/music" element={<MusicPage />} />
                <Route path="/other" element={<OtherPage />} />
            </Routes>
        </Router>
    );
}

export default App;