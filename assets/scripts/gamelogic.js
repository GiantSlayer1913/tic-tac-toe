// Draft changes to game logic, MUST KEEP!!!!!
let gameBoard = ['', '', '', '', '', '', '', '', '']
console.log(gameBoard)
let currentPlayer = 'X'



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
  playX
}
