// Draft changes to game logic, MUST KEEP!!!!!
$(document).ready(() => {
  let player
  $('td').on('click', (event) => {
    const spotChosen = $(this)
    if (spotChosen.inner('X') || spotChosen.hasId('O')) {
      console.log('this spot has been chosen. pick another')
    } else {
      if (player === 1) {
        spotChosen.addId('X')
        if (checkWin) {
          $('#jumboTron').css('display', 'block')
          $('#jumboTron').text('Player 1 Wins!')
        } else {
          player = 2
        }
      } else {
        spotChosen.addId('O')
        player = 1
      }
      // all the rest of the logic
    }
  })
})

const checkWin = (symbol) => {
  if ($('td#r1c1').hasId(symbol) && $('td#r1c2').hasId(symbol) && $('td#r1c3').hasId(symbol)) {
    return true
  } else if ($('td#r2c1').hasId(symbol) && $('td#r2c2').hasId(symbol) && $('td#r2c3').hasId(symbol)) {
    return true
  } else if ($('td#r3c1').hasId(symbol) && $('td#r3c2').hasId(symbol) && $('td#r3c3').hasId(symbol)) {
    return true
  } else if ($('td#r1c1').hasId(symbol) && $('td#r2c1').hasId(symbol) && $('td#r3c1').hasId(symbol)) {
    return true
  } else if ($('td#r1c2').hasId(symbol) && $('td#r2c2').hasId(symbol) && $('td#r3c2').hasId(symbol)) {
    return true
  } else if ($('td#r1c3').hasId(symbol) && $('td#r2c3').hasId(symbol) && $('td#r3c3').hasId(symbol)) {
    return true
  } else if ($('td#r1c1').hasId(symbol) && $('td#r2c2').hasId(symbol) && $('td#r3c3').hasId(symbol)) {
    return true
  } else if ($('td#r1c3').hasId(symbol) && $('td#r2c2').hasId(symbol) && $('td#r3c1').hasId(symbol)) {
    return true
  } else {
    return false
  }
}

// const winningCombinations = [
//   [0, 1, 2], //
//   [3, 4, 5], //
//   [6, 7, 8], //
//   [0, 3, 6], //
//   [1, 4, 7], //
//   [2, 5, 8],
//   [0, 4, 8],
//   [6, 4, 2]
// ]

module.exports = {
  // gameBoard,
  // winningCombinations,
  // cells,
  // newGame,
  // turnClick,
  // turn,
  // checkWin
  // gameOver,
  // winnerIs,
  // emptySquares,
  // clearBoard,
  // checkTie
}
// const gameBoard = []
//


// const newGame = () => {
//   document.querySelector('.cell').innerText = ''
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].style.removeProperty('background-color')
//     cells[i].addEventListener('submit', turnClick, false)
//   }
// }
// const cells = document.querySelectorAll('.cell')
// newGame()

// const turnClick = (square) => {
//   console.log(square.target.id)
//   if (typeof gameBoard[square.target.id] === 'number') {
//     turn(square.target.id, player1)
//     if (!checkTie()) turn(square.target.id, player2)
//   }
// }
//
// const turn = (square, player) => {
//   gameBoard[square] = player
//   document.getElementById('.cell').innerText = player
//   let gameWon = checkWin(gameBoard, player)
//   if (gameWon) gameOver(gameWon)
// }
//
// const checkWin = (board, player) => {
//   let plays = board.reduce((a, e, i) =>
//     (e === player) ? a.concat(i) : a, [])
//   let gameWon = null
//   for (let [index, win] of winCombos.entries()) {
//     if (win.every(elem => plays.indexOf(elem) > -1)) {
//       gameWon = {
//         index: index,
//         player: player
//       }
//       break
//     }
//   }
//   return gameWon
// }
//
// const gameOver = (gameWon) => {
//   for (let index of winCombos[gameWon.index]) {
//     document.getElementById(index).style.backgroundColor =
//       gameWon.player == player1 ? '#FBD374' : '#EE3419'
//   }
//   for (let i = 0; i < cells.length; i++) {
//     cells[i].removeEventListener('click', turnClick, false)
//   }
//   winnerIs(gameWon.player == player1 ? "Player 1 Wins!" : "Player 2 Wins")
// }
//
// const winnerIs = (winner) => {
//   document.querySelector("gameControls").style.display = "block"
//   document.querySelector("gameControls").innerText = winner
// }
//
// const emptySquares = () => {
//   return gameBoard.filter(s => typeof s == 'number')
// }
//
// const clearBoard = () => {
//   return emptySquares()[0]
// }
//
// const checkTie = () => {
//   if (emptySquares().length == 0) {
//     for (let i = 0; i < cells.length; i++) {
//       cells[i].style.backgroundColor = "green"
//       cells[i].removeEventListener('click', turnClick, false)
//     }
//     winnerIs("Tie Game!")
//     return true
//   }
//   return false
// }
