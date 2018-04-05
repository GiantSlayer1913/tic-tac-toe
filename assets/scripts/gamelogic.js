const gameBoard
const currentPlayer = 'X'

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]

const cells = document.querySelectorAll('.cell')

const startGame = () => {
  document.querySelector('.endgame').style.display = 'none'
  gameBoard = Array.from(Array(9).keys())
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ''
    cells[i].style.removeProperty('background-color')
    cells[i].addEventListener('click', turnClick, false)
  }
}

const turn = function (squareId, player) {
  gameBoard[squareId] = currentPlayer
  document.getElementById(squareId).innerText = currentPlayer
  let xWins = checkWin(gameboard, currentPlayer)
    if (xWins) {
      gameOver(currentPlayer)
    } else {

    }
}

const turnClick = function(square) {
  turn(square.target.id, currentPlayer)
}

const playerTurn = (position) => {
  gameBoard[position] = currentPlayer
  checkForWinner()
  if (currentPlayer === 'X') {
    currentPlayer = 'O'
  } else {
    currentPlayer = 'X'
  }
}

const checkWin= function(board, currentPlayer) {
  let plays = board.reduce((a, event, i) =>
  (event === currentPlayer)) ? a.concat(i) : a, [])
  let currentPlayer = null
    for (let [index, win] of winCombos.entries()) {
      if (win.every(element => plays.indexOf(element) > -1) {
      gameWon = {index: currentPlayer: currentPlayer}
      break
    }
  }
    return gameWon
}

const gameOver = function (gameWon) {
  for (let index of winCombos[gameWon.index]) {
    document.getElementById(index).style.backgroundColor =
    gameWon.player == currentPlayer ? "blue" : "red"
  }
  for (const i = 0; i < cells.length; i++) {
    cells[i].removeEventListener('click', turnClick, false)
  }
}

module.exports = {
  startGame,
  gameBoard,
  playerTurn
}
