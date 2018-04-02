// function to declare Player 1 winner
const xWins = () => {
  console.log('Player 1 Wins!')
}
// function to declare Player 2 winner
const oWins = () => {
  console.log('Player 2 Wins!')
}
// function to continue playing game (waiting for on submit event called onNextMove)
const continueGame = () => {
// Remeber to add jquery to events.js
//  $('#nextMove').on('submit', onNextMove)
}
// game logic for determining Player 1 winner or Player 2 winner
const gameBoard = []
const gameLogic = function (event) {
  for (let i = 0; i < gameBoard.length; i++) {
    if (this[0] && this[1] && this[2] === 'X') {
      xWins()
    } else if (this[3] && this[4] && this[5] === 'X') {
      xWins()
    } else if (this[6] && this[7] && this[8] === 'X') {
      xWins()
    } else if (this[0] && this[3] && this[6] === 'X') {
      xWins()
    } else if (this[1] && this[4] && this[7] === 'X') {
      xWins()
    } else if (this[2] && this[5] && this[8] === 'X') {
      xWins()
    } else if (this[0] && this[4] && this[8] === 'X') {
      xWins()
    } else if (this[2] && this[4] && this[6] === 'X') {
      xWins()
    } else if (this[0] && this[1] && this[2] === 'O') {
      oWins()
    } else if (this[3] && this[4] && this[5] === 'O') {
      oWins()
    } else if (this[6] && this[7] && this[8] === 'O') {
      oWins()
    } else if (this[0] && this[3] && this[6] === 'O') {
      oWins()
    } else if (this[1] && this[4] && this[7] === 'O') {
      oWins()
    } else if (this[2] && this[5] && this[8] === 'O') {
      oWins()
    } else if (this[0] && this[4] && this[8] === 'O') {
      oWins()
    } else if (this[2] && this[4] && this[6] === 'O') {
      oWins()
    } else {
      continueGame()
    }
  }
}

module.exports = {
  gameLogic,
  gameBoard,
  xWins,
  oWins
}
