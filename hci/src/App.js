import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { HomePage } from './Components/HomePage/HomePage';
import { LetsVote } from './Components/LetsVote/LetsVote';
import { VotingPage } from './Components/VotingPage/VotingPage';
import { FinishPage } from './Components/FinishPage/FinishPage';



function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<LetsVote />} />
        <Route path="/letsvotepage" element={<LetsVote />} />
        <Route path="/homepage" element={<VotingPage />} />
        <Route path="/finishpage" element={<FinishPage />} />
      </Routes>

  </Router>
  );
}

export default App;
