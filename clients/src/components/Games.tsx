import React from 'react'
import { Link } from 'react-router-dom'


import styles from '../styles/Games.module.scss'
import TicTacToe from '../tic-tac-toe/Tic-Tac-Toe'

const backgroundVideo = require('../media/background.mp4')

export default function Games() {
  return (
    <>
     <div>
      <Link to="/">Home</Link>
      <Link to="/tictactoe">Tic Tac Toe</Link>
      </div>
    </>
  )
}