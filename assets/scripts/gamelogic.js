const api = require('./api')
const store = require('./store')
// const data = require('./api')
// Draft changes to game logic, MUST KEEP!!!!!
let gameBoard = ['', '', '', '', '', '', '', '', '']
console.log(gameBoard)
let currentPlayer = 'X'

// Change turn function will change player turn, add either an 'X' or an 'O'
// to a space on click, and check to see if a space has been taken
const playerTurn = () => {
  if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
    if (currentPlayer === 'X') {
      currentPlayer = 'O'
    } else {
      currentPlayer = 'X'
    }
    this.innerHTML = currentPlayer
    console.log(currentPlayer)
  } else {
    console.log('this square is not available at the moment')
    $('#message').text('Can\'t Play Here! Try another spot.')
  }
  return currentPlayer
}

const playerShoutOut = () => {
  if (currentPlayer === 'O') {
    $('#message').text('Player X it is your turn')
  } else if (currentPlayer === 'X') {
    $('#jumboTron').text('Player O it is your turn')
  }
  return currentPlayer
}
playerShoutOut()

// Push player token, either 'X' or 'O' to the board array
const boardMoves = (data) => {
  gameBoard[0] = $('#r1c1').text(api.gameStatus)
  gameBoard[1] = $('#r1c2').text(api.gameStatus)
  gameBoard[2] = $('#r1c3').text(api.gameStatus)
  gameBoard[3] = $('#r2c1').text(api.gameStatus)
  gameBoard[4] = $('#r2c2').text(api.gameStatus)
  gameBoard[5] = $('#r2c3').text(api.gameStatus)
  gameBoard[6] = $('#r3c1').text(api.gameStatus)
  gameBoard[7] = $('#r3c2').text(api.gameStatus)
  gameBoard[8] = $('#r3c3').text(api.gameStatus)
}
// Function to check for win based on board index
const checkWin = () => {
  gameBoard[0] = document.getElementById('r1c1')
  gameBoard[1] = document.getElementById('r1c2')
  gameBoard[2] = document.getElementById('r1c3')
  gameBoard[3] = document.getElementById('r2c1')
  gameBoard[4] = document.getElementById('r2c2')
  gameBoard[5] = document.getElementById('r2c3')
  gameBoard[6] = document.getElementById('r3c1')
  gameBoard[7] = document.getElementById('r3c2')
  gameBoard[8] = document.getElementById('r3c3')

  let gameEnd = false

  if ((gameBoard[0].innerHTML === 'X' && gameBoard[1].innerHTML === 'X' && gameBoard[2].innerHTML === 'X') ||
      (gameBoard[3].innerHTML === 'X' && gameBoard[4].innerHTML === 'X' && gameBoard[5].innerHTML === 'X') ||
      (gameBoard[6].innerHTML === 'X' && gameBoard[7].innerHTML === 'X' && gameBoard[8].innerHTML === 'X') ||
      (gameBoard[0].innerHTML === 'X' && gameBoard[4].innerHTML === 'X' && gameBoard[8].innerHTML === 'X') ||
      (gameBoard[2].innerHTML === 'X' && gameBoard[5].innerHTML === 'X' && gameBoard[8].innerHTML === 'X') ||
      (gameBoard[0].innerHTML === 'X' && gameBoard[3].innerHTML === 'X' && gameBoard[6].innerHTML === 'X') ||
      (gameBoard[1].innerHTML === 'X' && gameBoard[4].innerHTML === 'X' && gameBoard[7].innerHTML === 'X') ||
      (gameBoard[2].innerHTML === 'X' && gameBoard[4].innerHTML === 'X' && gameBoard[6].innerHTML === 'X')) {
    console.log('X wins')
    $('#message').text('X wins')
    $('#message').css('background-color', 'green')
    $('#gameBoard').hide()
    $('#message').hide()
    $('#jumboTron').show()
    gameEnd = true
    return true
  } else if ((gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') ||
             (gameBoard[3].innerHTML === 'O' && gameBoard[4].innerHTML === 'O' && gameBoard[5].innerHTML === 'O') ||
             (gameBoard[6].innerHTML === 'O' && gameBoard[7].innerHTML === 'O' && gameBoard[8].innerHTML === 'O') ||
             (gameBoard[0].innerHTML === 'O' && gameBoard[4].innerHTML === 'O' && gameBoard[8].innerHTML === 'O') ||
             (gameBoard[2].innerHTML === 'O' && gameBoard[5].innerHTML === 'O' && gameBoard[8].innerHTML === 'O') ||
             (gameBoard[0].innerHTML === 'O' && gameBoard[3].innerHTML === 'O' && gameBoard[6].innerHTML === 'O') ||
             (gameBoard[1].innerHTML === 'O' && gameBoard[4].innerHTML === 'O' && gameBoard[7].innerHTML === 'O') ||
             (gameBoard[2].innerHTML === 'O' && gameBoard[4].innerHTML === 'O' && gameBoard[6].innerHTML === 'O')) {
    console.log('O wins')
    $('#message').text('O wins')
    $('#message').css('background-color', 'purple')
    $('#game-board').hide()
    $('#player-message').hide()
    $('#outcome-message').show()
    gameEnd = true
    return true
  } else if ((gameBoard[0].innerHTML !== '' && gameBoard[1].innerHTML !== '' &&
              gameBoard[2].innerHTML !== '' && gameBoard[3].innerHTML !== '' &&
              gameBoard[4].innerHTML !== '' && gameBoard[5].innerHTML !== '' &&
              gameBoard[6].innerHTML !== '' && gameBoard[7].innerHTML !== '' &&
              gameBoard[8].innerHTML !== '')) {
    // return draw
    console.log('Its a draw')
    $('#message').text('Its a draw')
    $('#message').css('background-color', 'purple')
    $('#gameBoard').hide()
    $('#player-message').hide()
    $('#outcome-message').show()
    gameEnd = true
    return true
  }
  return gameEnd
}

const newGame = function (event) {
  event.preventDefault()
  gameBoard = ['', '', '', '', '', '', '', '', '']
  currentPlayer = 'O'
  $('#gameBoard').show()
  $('.box').html('')
  $('#message').show()
  $('#jumboTron').hide()
  $('#board-hide').removeClass()
  store.gamelogic = data.gamelogic
}

module.exports = {
  playerTurn,
  boardMoves,
  checkWin,
  newGame
}
