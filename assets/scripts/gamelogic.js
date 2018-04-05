const xWins = () => {
  console.log('Player 1 Wins!')
}
const oWins = () => {
  console.log('Player 2 Wins!')
}

const gameBoard = ['', '', '', '', '', '', '', '', '']
let currentPlayer = 'X'
// const addToBoard = (position) => {
//   gameBoard[position] = currentPlayer
//   checkForWinner()
//   if (currentPlayer === 'X') {
//     currentPlayer = 'O'
//   } else {
//     currentPlayer = 'X'
//   }
// }

const checkForWinner = function () {
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[2] !== '') {
    xWins()
    // Function to clear gameboard
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[5] !== '') {
    xWins()
    // Function to clear gameboard
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[8] !== '') {
    xWins()
    // Function to clear gameboard
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[6] !== '') {
    xWins()
    // Function to clear gameboard
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[7] !== '') {
    xWins()
    // Function to clear gameboard
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[8] !== '') {
    xWins()
    // Function to clear gameboard
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[8] !== '') {
    xWins()
    // Function to clear gameboard
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[6] !== '') {
    xWins()
    // Function to clear gameboard
  } else if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[2] !== '') {
    oWins()
    // Function to clear gameboard
  } else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[5] !== '') {
    oWins()
    // Function to clear gameboard
  } else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[8] !== '') {
    oWins()
    // Function to clear gameboard
  } else if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[6] !== '') {
    oWins()
    // Function to clear gameboard
  } else if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[7] !== '') {
    oWins()
    // Function to clear gameboard
  } else if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[8] !== '') {
    oWins()
    // Function to clear gameboard
  } else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[8] !== '') {
    oWins()
    // Function to clear gameboard
  } else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[6] !== '') {
    oWins()
    // Function to clear gameboard
  } else {
  }
}

const addToBoard = (square) => {
  console.log(square.target.id)
}

const cells = document.querySelectorAll('.cell')

const startGame = () => {
  document.querySelector('.endgame').style.display = 'none'
  //  gameBoard = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ''
    cells[i].style.removeProperty('background-color')
    cells[i].addEventListener('click', addToBoard, false)
  }
}

module.exports = {
  startGame,
  gameBoard,
  xWins,
  oWins
}
