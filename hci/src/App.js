import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/HomePage/HomePage';
import { LetsVote } from './Components/LetsVote/LetsVote';


function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<LetsVote />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>

  </Router>
  );
}

export default App;
