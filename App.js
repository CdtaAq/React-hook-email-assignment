import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ChrisComponent from './ChrisComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chris/:email/:session" element={<ChrisComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
