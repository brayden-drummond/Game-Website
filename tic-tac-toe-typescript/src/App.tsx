import React, { useState, ReactElement } from "react";
import Board from "./components/Board";
import './App.css';

import { calculateWinner } from "./helpers"

function App() {
  const [history, setHistory] = useState([{ squares: new Array(9) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const [finished, setFinished] = useState(false);

  const handleClick = (i: number) => {
    if (finished) {
      return;
    }
    if (stepNumber >= 9) {
      setFinished(true)
      return;
    }
    const _history = history.slice(0, stepNumber + 1);
    const squares = [..._history[_history.length - 1].squares];
    console.log(squares);
    console.log("history:", _history.length, stepNumber);
    if (squares[i]) {
      return;
    }
    const winner = calculateWinner(squares);
    if (winner) {
      setFinished(true);
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext)
    setHistory([..._history, { squares }]);
    setStepNumber(_history.length);
  }

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0)
    setFinished(false);
  };

  const _history = [...history];
  const squares = [..._history[stepNumber].squares];
  const winner = calculateWinner(squares);
  const status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O");
  const moves = _history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <Board
      squares={squares}
      finished={finished}
      onClick={i => handleClick(i)}
      />
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>

      </div>
    </div>
  );
}

export default App;
