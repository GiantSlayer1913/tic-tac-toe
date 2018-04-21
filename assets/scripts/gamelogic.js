const api = require('./api')
const store = require('./store')
const ui = require('./ui')
const data = require('./api')

let gameBoard = ['', '', '', '', '', '', '', '', '']
const playerOne = 'X'
const playerTwo = 'O'
let move = ''

const changePlayer = () => {
  if ($('.td').innerHTML !== 'X' && $('.td').innerHTML !== 'O') {
    if (move === playerOne) {
      move = playerTwo
    } else {
      move = playerOne
    }
    $('.td').innerHTML = move
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

  if (($('td#1').innerHTML === 'X' && $('td#2').innerHTML === 'X' && $('td#3').innerHTML === 'X') ||
      ($('td#4').innerHTML === 'X' && $('td#5').innerHTML === 'X' && $('td#6').innerHTML === 'X') ||
      ($('td#7').innerHTML === 'X' && $('td#8').innerHTML === 'X' && $('td#9').innerHTML === 'X') ||
      ($('td#1').innerHTML === 'X' && $('td#5').innerHTML === 'X' && $('td#9').innerHTML === 'X') ||
      ($('td#3').innerHTML === 'X' && $('td#6').innerHTML === 'X' && $('td#9').innerHTML === 'X') ||
      ($('td#1').innerHTML === 'X' && $('td#4').innerHTML === 'X' && $('td#7').innerHTML === 'X') ||
      ($('td#2').innerHTML === 'X' && $('td#5').innerHTML === 'X' && $('td#8').innerHTML === 'X') ||
      ($('td#3').innerHTML === 'X' && $('td#5').innerHTML === 'X' && $('td#7').innerHTML === 'X')) {
    console.log('X wins')
    $('#jumboTron').text('X wins')
    $('#jumboTron').css('background-color', 'green')
    gameEnd = true
    return true
  } else if (($('td#1').innerHTML === 'O' && $('td#2').innerHTML === 'O' && $('td#3').innerHTML === 'O') ||
      ($('td#4').innerHTML === 'O' && $('td#5').innerHTML === 'O' && $('td#6').innerHTML === 'O') ||
      ($('td#7').innerHTML === 'O' && $('td#8').innerHTML === 'O' && $('td#9').innerHTML === 'O') ||
      ($('td#1').innerHTML === 'O' && $('td#5').innerHTML === 'O' && $('td#9').innerHTML === 'O') ||
      ($('td#3').innerHTML === 'O' && $('td#6').innerHTML === 'O' && $('td#9').innerHTML === 'O') ||
      ($('td#1').innerHTML === 'O' && $('td#4').innerHTML === 'O' && $('td#7').innerHTML === 'O') ||
      ($('td#2').innerHTML === 'O' && $('td#5').innerHTML === 'O' && $('td#8').innerHTML === 'O') ||
      ($('td#3').innerHTML === 'O' && $('td#5').innerHTML === 'O' && $('td#7').innerHTML === 'O')) {
    console.log('O wins')
    $('#jumboTron').text('O wins')
    $('#jumboTron').css('background-color', 'red')
    gameEnd = true
    return true
  } else if (($('td#1').innerHTML !== '' && $('td#2').innerHTML !== '' &&
              $('td#3').innerHTML !== '' && $('td#4').innerHTML !== '' &&
              $('td#5').innerHTML !== '' && $('td#6').innerHTML !== '' &&
              $('td#7').innerHTML !== '' && $('td#8').innerHTML !== '' &&
              $('td#9').innerHTML !== '')) {
    // return draw
    console.log('Its a draw')
    $('#jumboTron').text('Its a draw')
    $('#jumboTron').css('background-color', 'yellow')
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
