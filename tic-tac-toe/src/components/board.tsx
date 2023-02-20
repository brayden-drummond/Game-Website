import React from 'react'
import { Link } from 'react-router-dom'

import { Box } from './board-box'

import { Storage } from '../storage/storage'

import * as utils from '../utils/functions'

export class Board extends React.Component {
  constructor(props: any) {
    super(props)

    // initial component state on render

    this.state = {
      boxes: Array(9).fill(null),
      history: [],
      xTurn: true
    }
  };

  storage = new Storage();

  handleBoxClick(index) {
    const boxes = this.state.boxes.slice();

    let history = this.state.history;

    // determine winner if game finished
    if (utils.winner(boxes) || boxes[index]) {
      return
    };
    // stop game if all boxes have been clicked

    if (utils.gameOver(boxes) === true) {
      return
    };

    // alternate player turn
    boxes[index] = this.state.xTurn ? 'X' : 'O'

  }

}