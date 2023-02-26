import React from 'react';

import Banner from './components/Banner';
import TicTacToe from './tic-tac-toe/Tic-Tac-Toe';


function App() {
  return (
    <div className="App">
      <div>
        <Banner />
      </div>
      <h1>Home Page</h1>
      <TicTacToe />
    </div>
  );
}

export default App;
