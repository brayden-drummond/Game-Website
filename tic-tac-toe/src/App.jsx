import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Board } from './components/board'
import { Scoreboard } from './components/scoreboard'

import './styles/board.css'
import './styles/box.css'
import './styles/buttons.css'

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Scoreboard />} />
          <Route path="/board" element={<Board />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
