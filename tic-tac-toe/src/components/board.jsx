import React from 'react'
import { Link } from 'react-router-dom'

import { Box } from './board-box'

import { Storage } from '../storage/storage'

import * as utils from '../utils/functions'

export class Board extends React.Component {
  constructor(props) {
    super(props)

    // initial component state on render

    this.state = {
      boxes: Array(9).fill(null),
      history: [],
      xTurn: true,
    }
  }

  storage = new Storage()

  handleBoxClick(index) {
    const boxes = this.state.boxes.slice()

    let history = this.state.history

    // determine winner if game finished
    if (utils.winner(boxes) || boxes[index]) {
      return
    }
    // stop game if all boxes have been clicked

    if (utils.gameOver(boxes) === true) {
      return
    }

    // alternate player turn
    boxes[index] = this.state.xTurn ? 'X' : 'O'

    // push move into history array
    history.push(this.state.xTurn ? 'X' : 'O')

    // update component state with X or O in Grid
    this.setState({
      boxes: boxes,
      history: history,
      xTurn: !this.state.xTurn,
    })
  }

  // Restart Game if there is a winner or game over

  handGameRestart() {
    this.setState({
      boxes: Array(9).fill(null),
      history: [],
      xTurn: true,
    })
  }

  render() {
    // Determine a winner if any
    const winner = utils.winner(this.state.boxes)

    //See if all boxes have been checked
    const boardIsFilled = utils.gameOver(this.state.boxes)

    let message

    if (winner) {
      message = `The Winner is: ${winner}!`

      this.storage.updateData([`${winner} won!`])
    } else if (!winner && boardIsFilled) {
      message = 'Game is a draw!'

      this.storage.updateData([`Draw!`])
    } else {
      message = `It is ${this.state.xTurn ? 'X' : 'O'}'s turn`
    }

    return (
      <>
        {/* Scoreboard link */}
        <Link to="/" className="boardLink">
          Go back to Scoreboard
        </Link>

        {/* The game board */}
      </>
    )
  }
}
