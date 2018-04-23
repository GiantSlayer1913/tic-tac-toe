// const api = require('./api')
// const store = require('./store')
// const ui = require('./ui')
// const data = require('./api')
// const events = require('./events')

// const changePlayer = () => {
//   if (gameBoard !== ['X'] && gameBoard !== ['O']) {
//     if (move === playerOne) {
//       move = playerTwo
//     } else {
//       move = playerOne
//     }
//
//     console.log(move)
//   } else {
//     console.log('this square is not available at the moment')
//     $('#jumboTron').text('Can\'t Play Here! Try another spot.')
//   }
//   return move
// }
// const champion = (winner) => {
//   if (winner === playerOne) {
//     return true
//   } else if (winner === playerTwo) {
//     return false
//   } else if (winner !== playerOne || playerTwo) {
//     return null
//   } else {
//     changePlayer()
//   }
// }

// const boardMoves = (data) => {
//   gameBoard[0] = $('td#0').on(events.onBoardClick)
//   gameBoard[1] = $('td#1').on(events.onBoardClick)
//   gameBoard[2] = $('td#2').on(events.onBoardClick)
//   gameBoard[3] = $('td#3').on(events.onBoardClick)
//   gameBoard[4] = $('td#4').on(events.onBoardClick)
//   gameBoard[5] = $('td#5').on(events.onBoardClick)
//   gameBoard[6] = $('td#6').on(events.onBoardClick)
//   gameBoard[7] = $('td#7').on(events.onBoardClick)
//   gameBoard[8] = $('td#8').on(events.onBoardClick)
// }
// const playerShoutOut = () => {
//   if (move === 'X') {
//     $('#jumboTron').text('Player X it is your turn')
//   } else if (move === 'X') {
//     $('#jumboTron').text('Player O it is your turn')
//   }
//   return move
// }
// playerShoutOut()
store.game = data.game

module.exports = {
  // changePlayer
  // boardMoves
}

// const checkWin = (gamBoard) => {
//   for (let i = 0; i < gameBoard.length; i++) {
//
//     // [0, 1, 2]
//     if ((gameBoard[0] === gameBoard[1] === gameBoard[2]) && (gameBoard[0] !== ''
//      && gameBoard[1] !== '' && gameBoard[2] !== '')) {
//       champion(playerOne)
//       console.log(playerOne + ' Wins!' + ' Winning combo top row')
//       console.log(gameBoard)
//
//       // [3, 4, 5]
//     } else if ((gameBoard[3] === 'X') && (gameBoard[4] === gameBoard[3]) &&
//       (gameBoard[5] === gameBoard[3]) && (gameBoard[3] !== '') && (gameBoard[4]
//       !== '') && (gameBoard[5] !== '')) {
//       champion(playerOne)
//       console.log(playerOne + ' Wins!' + 'Winning combo middle row')
//       console.log(gameBoard)
//
//        // [6, 7, 8]
//     } else if ((gameBoard[6] === 'X') && (gameBoard[7] === gameBoard[6]) &&
//       (gameBoard[8] === gameBoard[6]) && (gameBoard[6] !== '') && (gameBoard[7]
//       !== '') && (gameBoard[8] !== '')) {
//       champion(playerOne)
//       console.log(playerOne + ' Wins!' + 'Winning combo bottom row')
//       console.log(gameBoard)
//
//       // [0, 4, 8]
//     } else if ((gameBoard[0] === 'X') && (gameBoard[4] === gameBoard[0]) &&
//       (gameBoard[8] === gameBoard[0]) && (gameBoard[0] !== '') && (gameBoard[4]
//       !== '') && (gameBoard[8] !== '')) {
//       champion(playerOne)
//       console.log(playerOne + ' Wins!' + 'Winning combo diagonal')
//       console.log(gameBoard)
//
//       // [2, 4, 6]
//     } else if ((gameBoard[2] === 'X') && (gameBoard[4] === gameBoard[2]) &&
//       (gameBoard[6] === gameBoard[2]) && (gameBoard[2] !== '') && (gameBoard[4]
//       !== '') && (gameBoard[6] !== '')) {
//       champion(playerOne)
//       console.log(playerOne + ' Wins!' + 'Winning combo diagonal')
//       console.log(gameBoard)
//
//       // [2, 5, 8]
//     } else if ((gameBoard[2] === 'X') && (gameBoard[5] === gameBoard[2]) &&
//       (gameBoard[8] === gameBoard[2]) && (gameBoard[2] !== '') && (gameBoard[5]
//       !== '') && (gameBoard[8] !== '')) {
//       champion(playerOne)
//       console.log(playerOne + ' Wins!' + 'Winning combo right column')
//       console.log(gameBoard)
//
//       // [1, 4, 7]
//     } else if ((gameBoard[1] === 'X') && (gameBoard[4] === gameBoard[1]) &&
//       (gameBoard[7] === gameBoard[1]) && (gameBoard[1] !== '') && (gameBoard[4]
//       !== '') && (gameBoard[7] !== '')) {
//       champion(playerOne)
//       console.log(playerOne + ' Wins!' + 'Winning combo middle column')
//       console.log(gameBoard)
//
//       // [0, 3, 6]
//     } else if ((gameBoard[0] === 'X') && (gameBoard[3] === gameBoard[0]) &&
//       (gameBoard[6] === gameBoard[0]) && (gameBoard[0] !== '') && (gameBoard[3]
//       !== '') && (gameBoard[6] !== '')) {
//       champion(playerOne)
//       console.log(playerOne + ' Wins!' + 'Winning combo left column')
//       console.log(gameBoard)
//
//       // [1, 4, 7]
//     } else if ((gameBoard[1] === 'O') && (gameBoard[1] === gameBoard[4]) &&
//       (gameBoard[7]) === (gameBoard[1]) && (gameBoard[1] !== '') && (gameBoard[4]
//       !== '') && (gameBoard[7] !== '')) {
//       champion(playerTwo)
//       console.log(playerTwo + ' Wins!' + ' Winning combo middle column')
//       console.log(gameBoard)
//
//       // [0, 1, 2]
//     } else if (gameBoard[0] === 'O' && gameBoard[1] === gameBoard[0] &&
//       gameBoard[2] === gameBoard[0] && gameBoard[0] !== '' && gameBoard[1]
//       !== '' && gameBoard[2] !== '') {
//       champion(playerTwo)
//       console.log(playerTwo + ' Wins!' + ' Winning combo top row')
//       console.log(gameBoard)
//
//       // [3, 4, 5]
//     } else if (gameBoard[3] === 'O' && gameBoard[4] === gameBoard[3] &&
//       gameBoard[5] === gameBoard[3] && gameBoard[3] !== '' && gameBoard[4]
//       !== '' && gameBoard[5] !== '') {
//       champion(playerTwo)
//       console.log(playerTwo + ' Wins!' + 'Winning combo middle row')
//       console.log(gameBoard)
//
//       // [6, 7, 8]
//     } else if (gameBoard[6] === 'O' && gameBoard[7] === gameBoard[6] &&
//       gameBoard[8] === gameBoard[6] && gameBoard[6] !== '' && gameBoard[7]
//       !== '' && gameBoard[8] !== '') {
//       champion(playerTwo)
//       console.log(playerTwo + ' Wins!' + 'Winning combo bottom row')
//       console.log(gameBoard)
//
//       // [0, 4, 8 ]
//     } else if (gameBoard[0] === 'O' && gameBoard[4] === gameBoard[0] &&
//       gameBoard[8] === gameBoard[0] && gameBoard[0] !== '' && gameBoard[4]
//       !== '' && gameBoard[8] !== '') {
//       champion(playerTwo)
//       console.log(playerTwo + ' Wins!' + 'Winning combo diagonal')
//       console.log(gameBoard)
//
//       // [2, 5, 8]
//     } else if (gameBoard[2] === 'O' && gameBoard[5] === gameBoard[2] &&
//       gameBoard[8] === gameBoard[2] && gameBoard[2] !== '' && gameBoard[5]
//       !== '' && gameBoard[8] !== '') {
//       champion(playerTwo)
//       console.log(playerTwo + ' Wins!' + 'Winning combo right column')
//       console.log(gameBoard)
//
//       // [2, 4, 6]
//     } else if (gameBoard[2] === 'O' && gameBoard[4] === gameBoard[2] &&
//       gameBoard[6] === gameBoard[2] && gameBoard[2] !== '' && gameBoard[4]
//       !== '' && gameBoard[6] !== '') {
//       champion(playerTwo)
//       console.log(playerTwo + ' Wins!' + 'Winning combo diagonal')
//       console.log(gameBoard)
//
//       // [0, 3, 6]
//     } else if (gameBoard[0] === 'O' && gameBoard[3] === gameBoard[0] &&
//       gameBoard[6] === gameBoard[0] && gameBoard[0] !== '' && gameBoard[3]
//       !== '' && gameBoard[6] !== '') {
//       champion(playerTwo)
//       console.log(playerTwo + ' Wins!' + 'Winning combo left column')
//       console.log(gameBoard)
//
//       // [1, 4, 7,]
//     } else if (gameBoard[1] === 'O' && gameBoard[1] === gameBoard[4] &&
//       gameBoard[7] === gameBoard[1] && gameBoard[1] !== '' && gameBoard[4]
//     !== '' && gameBoard[7] !== '') {
//       champion(playerTwo)
//       console.log(playerTwo + ' Wins!' + ' Winning combo middle column')
//       console.log(gameBoard)
//
//
//     } else if ((gameBoard[0] !== gameBoard[1] && gameBoard[2]) ||
//       (gameBoard[3] !== gameBoard[4] && gameBoard[5]) ||
//       (gameBoard[6] !== gameBoard[7] && gameBoard[8]) ||
//       (gameBoard[0] !== gameBoard[3] && gameBoard[6]) ||
//       (gameBoard[1] !== gameBoard[4] && gameBoard[7]) ||
//       (gameBoard[2] !== gameBoard[5] && gameBoard[8]) ||
//       (gameBoard[0] !== gameBoard[4] && gameBoard[8]) ||
//       (gameBoard[2] !== gameBoard[4] && gameBoard[6])) {
//       champion(!playerOne || !playerTwo)
//     } else {
//       changePlayer()
//     }
//   }
// }
// const newGame = function (event) {
//   event.preventDefault()
//   gameBoard = ['', '', '', '', '', '', '', '', '']
//   move = playerTwo
//   $('td').hide()
//   $('#jumboTron').show()

// const checkWin = (data) => {
//   gameBoard[0] = document.getElementById('td#1')
//   gameBoard[1] = document.getElementById('td#2')
//   gameBoard[2] = document.getElementById('td#3')
//   gameBoard[3] = document.getElementById('td#4')
//   gameBoard[4] = document.getElementById('td#5')
//   gameBoard[5] = document.getElementById('td#6')
//   gameBoard[6] = document.getElementById('td#7')
//   gameBoard[7] = document.getElementById('td#8')
//   gameBoard[8] = document.getElementById('td#9')
//
//
//
//   if (($('td#1').innerHTML === 'X' && $('td#2').innerHTML === 'X' && $('td#3').innerHTML === 'X') ||
//       ($('td#4').innerHTML === 'X' && $('td#5').innerHTML === 'X' && $('td#6').innerHTML === 'X') ||
//       ($('td#7').innerHTML === 'X' && $('td#8').innerHTML === 'X' && $('td#9').innerHTML === 'X') ||
//       ($('td#1').innerHTML === 'X' && $('td#5').innerHTML === 'X' && $('td#9').innerHTML === 'X') ||
//       ($('td#3').innerHTML === 'X' && $('td#6').innerHTML === 'X' && $('td#9').innerHTML === 'X') ||
//       ($('td#1').innerHTML === 'X' && $('td#4').innerHTML === 'X' && $('td#7').innerHTML === 'X') ||
//       ($('td#2').innerHTML === 'X' && $('td#5').innerHTML === 'X' && $('td#8').innerHTML === 'X') ||
//       ($('td#3').innerHTML === 'X' && $('td#5').innerHTML === 'X' && $('td#7').innerHTML === 'X')) {
//     console.log('X wins')
//     $('#jumboTron').text('X wins')
//     $('#jumboTron').css('background-color', 'green')
//     gameEnd = true
//     return true
//   } else if (($('td#1').innerHTML === 'O' && $('td#2').innerHTML === 'O' && $('td#3').innerHTML === 'O') ||
//       ($('td#4').innerHTML === 'O' && $('td#5').innerHTML === 'O' && $('td#6').innerHTML === 'O') ||
//       ($('td#7').innerHTML === 'O' && $('td#8').innerHTML === 'O' && $('td#9').innerHTML === 'O') ||
//       ($('td#1').innerHTML === 'O' && $('td#5').innerHTML === 'O' && $('td#9').innerHTML === 'O') ||
//       ($('td#3').innerHTML === 'O' && $('td#6').innerHTML === 'O' && $('td#9').innerHTML === 'O') ||
//       ($('td#1').innerHTML === 'O' && $('td#4').innerHTML === 'O' && $('td#7').innerHTML === 'O') ||
//       ($('td#2').innerHTML === 'O' && $('td#5').innerHTML === 'O' && $('td#8').innerHTML === 'O') ||
//       ($('td#3').innerHTML === 'O' && $('td#5').innerHTML === 'O' && $('td#7').innerHTML === 'O')) {
//     console.log('O wins')
//     $('#jumboTron').text('O wins')
//     $('#jumboTron').css('background-color', 'red')
//     gameEnd = true
//     return true
//   } else if (($('td#1').innerHTML !== '' && $('td#2').innerHTML !== '' &&
//               $('td#3').innerHTML !== '' && $('td#4').innerHTML !== '' &&
//               $('td#5').innerHTML !== '' && $('td#6').innerHTML !== '' &&
//               $('td#7').innerHTML !== '' && $('td#8').innerHTML !== '' &&
//               $('td#9').innerHTML !== '')) {
//     // return draw
//     console.log('Its a draw')
//     $('#jumboTron').text('Its a draw')
//     $('#jumboTron').css('background-color', 'yellow')
//     gameEnd = true
//     return true
//   }
//   return gameEnd
// }
