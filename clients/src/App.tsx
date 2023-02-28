import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import Banner from './components/Banner';
import Home from './components/Home';
import TicTacToe from './tic-tac-toe/Tic-Tac-Toe';


function App() {
  return (
    <div className="App">
      <div>
        <Banner />
        {/* Update this link */}
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path='/tictactoe' element={<TicTacToe />} />
        <Route path='/' element={<Home />} />
      </Routes>
    
    </div>
  );
}

export default App;
