// Draft changes to game logic, MUST KEEP!!!!!
let gameBoard = ['', '', '', '', '', '', '', '', '']
console.log(gameBoard)
const player1 = 'X'
const player2 = 'O'
let playerSwitch = ''

// Change turn function will change player turn, add either an 'X' or an 'O'
// to a space on click, and check to see if a space has been taken
const playerturn = () => {
  if (this.innerHTML !== 'X' && this.innerHTML !== 'O') {
    if (playerSwitch === player1) {
      playerSwitch = player2
    } else {
      playerSwitch = player1
    }
    this.innerHTML = playerSwitch
    console.log(playerSwitch)
  } else {
    console.log('this square is not available at the moment')
    $('#player-message').text('Can\'t Play Here! Try another spot.')
  }
  return playerSwitch
}

const announcePlayerTurn = () => {
  if (playerSwitch === 'O') {
    $('#player-message').text('Player X it is your turn')
  } else if (playerSwitch === 'X') {
    $('#player-message').text('Player O it is your turn')
  }
  return playerSwitch
}
announcePlayerTurn()

// Push player token, either 'X' or 'O' to the board array
const newArray = (data) => {
  gameBoard[0] = $('#0').text(api.gameUpdate)
  gameBoard[1] = $('#1').text(api.gameUpdate)
  gameBoard[2] = $('#2').text(api.gameUpdate)
  gameBoard[3] = $('#3').text(api.gameUpdate)
  gameBoard[4] = $('#4').text(api.gameUpdate)
  gameBoard[5] = $('#5').text(api.gameUpdate)
  gameBoard[6] = $('#6').text(api.gameUpdate)
  gameBoard[7] = $('#7').text(api.gameUpdate)
  gameBoard[8] = $('#8').text(api.gameUpdate)
}



module.exports = {

}
