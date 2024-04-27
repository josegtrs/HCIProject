import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LetsVote } from './Components/LetsVote/LetsVote';
import { FinishPage } from './Components/FinishPage/FinishPage';
import { Presidential } from './Components/VotingPage/Presidential';
import { State } from './Components/VotingPage/State';
import { Congressional } from './Components/VotingPage/Congressional';
import { Representative } from './Components/VotingPage/Representative';
import { Judicial } from './Components/VotingPage/Judicial';
import { Criminal } from './Components/VotingPage/Criminal';
import { Civil } from './Components/VotingPage/Civil';
import { Review } from './Components/FinishPage/Review';
import { StraightParty } from './Components/VotingPage/StraightParty';
import { Instructions } from './Components/LetsVote/Instructions'



function App() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<LetsVote />} />
        <Route path="/letsvotepage" element={<LetsVote />} />
        <Route path="/instructions" element={<Instructions/>} />
        <Route path="/straightparty" element={<StraightParty />} />
        <Route path="/presidential" element={<Presidential />} />
        <Route path="/finishpage" element={<FinishPage />} />
        <Route path="/state" element={<State />} />
        <Route path="/congressional" element={<Congressional />} />
        <Route path="/representative" element={<Representative />} />
        <Route path="/judicial" element={<Judicial />} />
        <Route path="/criminal" element={<Criminal />} />
        <Route path="/civil" element={<Civil />} />
        <Route path="/review" element={<Review />} />

      </Routes>

  </Router>
  );
}

export default App;
