import React from 'react'
import './index.css'

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import App from './App'

import './styles/board.css'
import './styles/box.css'
import './styles/buttons.css'

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