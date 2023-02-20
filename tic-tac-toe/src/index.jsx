import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import { Board } from './components/board'
import { Scoreboard } from './components/scoreboard'

import './styles/board.css'
import './styles/box.css'
import './styles/buttons.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" component={Scoreboard} />
            <Route path="/board" component={Board}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

// ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
