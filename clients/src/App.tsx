import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Banner from './components/Banner';
import Games from './components/Games';
import TicTacToe from './tic-tac-toe/Tic-Tac-Toe';


function App() {
  return (
    <div className="App">
      <div>
        <Banner />
      </div>
      <Routes>
        <Route path='/tictactoe' element={<TicTacToe />} />
      </Routes>
      <h1>Home Page</h1>
      <Games />
    </div>
  );
}

export default App;
