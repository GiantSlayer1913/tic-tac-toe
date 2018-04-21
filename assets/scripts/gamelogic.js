const api = require('./api')
const store = require('./store')
const ui = require('./ui')
const data = require('./api')

let gameBoard = ['', '', '', '', '', '', '', '', '']
const playerOne = 'X'
const playerTwo = 'O'
let move = ''

// Change turn function will change player turn, add either an 'X' or an 'O'
// to a space on click, and check to see if a space has been taken
const changePlayer = () => {
  if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
    if (move === playerOne) {
      move = playerTwo
    } else {
      move = playerOne
    }
    this.innerHTML = move
    console.log(move)
  } else {
    console.log('this square is not available at the moment')
    $('#jumboTron').text('Can\'t Play Here! Try another spot.')
  }
  return move
}

const playerShoutOut = () => {
  if (move === 'X') {
    $('#jumboTron').text('Player X it is your turn')
  } else if (move === 'X') {
    $('#jumboTron').text('Player O it is your turn')
  }
  return move
}
playerShoutOut()

// Push player token, either 'X' or 'O' to the board array
const boardMoves = (data) => {
  gameBoard[0] = $('td#1').text(api.boardClick)
  gameBoard[1] = $('td#2').text(api.boardClick)
  gameBoard[2] = $('td#3').text(api.boardClick)
  gameBoard[3] = $('td#4').text(api.boardClick)
  gameBoard[4] = $('td#5').text(api.boardClick)
  gameBoard[5] = $('td#6').text(api.boardClick)
  gameBoard[6] = $('td#7').text(api.boardClick)
  gameBoard[7] = $('td#8').text(api.boardClick)
  gameBoard[8] = $('td#9').text(api.boardClick)
}
// Function to check for win based on board index
const checkWin = (data) => {
  gameBoard[0] = document.getElementById('td#1')
  gameBoard[1] = document.getElementById('td#2')
  gameBoard[2] = document.getElementById('td#3')
  gameBoard[3] = document.getElementById('td#4')
  gameBoard[4] = document.getElementById('td#5')
  gameBoard[5] = document.getElementById('td#6')
  gameBoard[6] = document.getElementById('td#7')
  gameBoard[7] = document.getElementById('td#8')
  gameBoard[8] = document.getElementById('td#9')

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
    $('#jumboTron').text('X wins')
    $('#jumboTron').css('background-color', 'green')
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
    $('#jumboTron').text('O wins')
    $('#jumboTron').css('background-color', 'purple')
    gameEnd = true
    return true
  } else if ((gameBoard[0].innerHTML !== '' && gameBoard[1].innerHTML !== '' &&
              gameBoard[2].innerHTML !== '' && gameBoard[3].innerHTML !== '' &&
              gameBoard[4].innerHTML !== '' && gameBoard[5].innerHTML !== '' &&
              gameBoard[6].innerHTML !== '' && gameBoard[7].innerHTML !== '' &&
              gameBoard[8].innerHTML !== '')) {
    // return draw
    console.log('Its a draw')
    $('#jumboTron').text('Its a draw')
    $('#jumboTron').css('background-color', 'purple')
    gameEnd = true
    return true
  }
  return gameEnd
}

const newGame = function (event) {
  event.preventDefault()
  gameBoard = ['', '', '', '', '', '', '', '', '']
  move = playerTwo
  $('td').hide()
  $('#jumboTron').show()
  store.game = data.game
}

module.exports = {
  changePlayer,
  boardMoves,
  checkWin,
  newGame
}
