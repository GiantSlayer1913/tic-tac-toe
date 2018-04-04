const xWins = () => {
  console.log('Player 1 Wins!')
}
const oWins = () => {
  console.log('Player 2 Wins!')
}

const gameBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'

const checkForWinner = function () {
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[2] !== '') {
    xWins()
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[5] !== '') {
    xWins()
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[8] !== '') {
    xWins()
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[6] !== '') {
    xWins()
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[7] !== '') {
    xWins()
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[8] !== '') {
    xWins()
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[8] !== '') {
    xWins()
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[6] !== '') {
    xWins()
  } else if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[2] !== '') {
    oWins()
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[5] !== '') {
    oWins()
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[8] !== '') {
    oWins()
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[6] !== '') {
    oWins()
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[7] !== '') {
    oWins()
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[8] !== '') {
    oWins()
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[8] !== '') {
    oWins()
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[6] !== '') {
    oWins()
  } else {
  }
}

const addToBoard = (position) => {
  gameBoard[position] = currentPlayer
  checkForWinner()
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

module.exports = {
  addToBoard,
  gameBoard,
  xWins,
  oWins
}
