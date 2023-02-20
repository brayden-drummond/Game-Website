export function winner(boxes) {
  // possible winning combintaions
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < rows.length; i++) {
    const [a, b, c] = rows[i]

    // check if boxes are matched and return the winner
    if (boxes[a] && boxes[a] === boxes[b] && boxes[a] === boxes[c]) {
      return boxes[a]
    } else {
      return null
    }
  }
}

export function gameOver(boxes) {
  let count = 0

  //increase the count when a box is clicked
  boxes.forEach(function (item) {
    if (item !== null) {
      count++
    }
  })

  // return Game Over if all boxes are clicked.
  if (count === 9) {
    return true
  } else {
    return false
  }
}
