// const element = document.createElement('div')
// element.id = 'myDiv'
// element.innerHTML = 'Hello World!'
// document.body.appendChild(element)
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
const gamelogic = require('./gamelogic')
// const config = require('./config')
const store = require('./store')



const onSignUp = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function(event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onNewGame = (event) => {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

// declare game board empty to start
let gameBoard = ['', '', '', '', '', '', '', '', '']

// declare playerOne and Two tokens
const playerOne = 'X'
const playerTwo = 'O'

// start first move with playerOne
let move = playerOne

// 2. events.js add a click event for the element
// 2.1 When board cell is clicked...
const onBoardClick = (event) => {

  // prevent default action
  event.preventDefault()

  // if no new game is created or game is over then do not play
  if (!store.game || store.game.over) {
    $('#jumboTron').text('Click the new game button to start a new game!')
    return
  }
  // Alraedy solved
  // 2.1.1 get position of game board 0 - 8 from ID of clicked element
  // How could we do that?
  const index = event.target.id

  //      2.1.2 get current player, X or O
  let currentPlayer = move

  //      2.1.3 add player to position in game board
  gameBoard[index] = move

//      2.1.4 check for winner
const checkWin = (gamBoard) => {
  for (let i = 0; i < gameBoard.length; i++) {

    // [0, 1, 2]
    if ((gameBoard[0] === gameBoard[1] === gameBoard[2]) && (gameBoard[0] !== ''
     && gameBoard[1] !== '' && gameBoard[2] !== '')) {
      champion(playerOne)
      console.log(playerOne + ' Wins!' + ' Winning combo top row')
      console.log(gameBoard)

      // [3, 4, 5]
    } else if ((gameBoard[3] === 'X') && (gameBoard[4] === gameBoard[3]) &&
      (gameBoard[5] === gameBoard[3]) && (gameBoard[3] !== '') && (gameBoard[4]
      !== '') && (gameBoard[5] !== '')) {
      champion(playerOne)
      console.log(playerOne + ' Wins!' + 'Winning combo middle row')
      console.log(gameBoard)

       // [6, 7, 8]
    } else if ((gameBoard[6] === 'X') && (gameBoard[7] === gameBoard[6]) &&
      (gameBoard[8] === gameBoard[6]) && (gameBoard[6] !== '') && (gameBoard[7]
      !== '') && (gameBoard[8] !== '')) {
      champion(playerOne)
      console.log(playerOne + ' Wins!' + 'Winning combo bottom row')
      console.log(gameBoard)

      // [0, 4, 8]
    } else if ((gameBoard[0] === 'X') && (gameBoard[4] === gameBoard[0]) &&
      (gameBoard[8] === gameBoard[0]) && (gameBoard[0] !== '') && (gameBoard[4]
      !== '') && (gameBoard[8] !== '')) {
      champion(playerOne)
      console.log(playerOne + ' Wins!' + 'Winning combo diagonal')
      console.log(gameBoard)

      // [2, 4, 6]
    } else if ((gameBoard[2] === 'X') && (gameBoard[4] === gameBoard[2]) &&
      (gameBoard[6] === gameBoard[2]) && (gameBoard[2] !== '') && (gameBoard[4]
      !== '') && (gameBoard[6] !== '')) {
      champion(playerOne)
      console.log(playerOne + ' Wins!' + 'Winning combo diagonal')
      console.log(gameBoard)

      // [2, 5, 8]
    } else if ((gameBoard[2] === 'X') && (gameBoard[5] === gameBoard[2]) &&
      (gameBoard[8] === gameBoard[2]) && (gameBoard[2] !== '') && (gameBoard[5]
      !== '') && (gameBoard[8] !== '')) {
      champion(playerOne)
      console.log(playerOne + ' Wins!' + 'Winning combo right column')
      console.log(gameBoard)

      // [1, 4, 7]
    } else if ((gameBoard[1] === 'X') && (gameBoard[4] === gameBoard[1]) &&
      (gameBoard[7] === gameBoard[1]) && (gameBoard[1] !== '') && (gameBoard[4]
      !== '') && (gameBoard[7] !== '')) {
      champion(playerOne)
      console.log(playerOne + ' Wins!' + 'Winning combo middle column')
      console.log(gameBoard)

      // [0, 3, 6]
    } else if ((gameBoard[0] === 'X') && (gameBoard[3] === gameBoard[0]) &&
      (gameBoard[6] === gameBoard[0]) && (gameBoard[0] !== '') && (gameBoard[3]
      !== '') && (gameBoard[6] !== '')) {
      champion(playerOne)
      console.log(playerOne + ' Wins!' + 'Winning combo left column')
      console.log(gameBoard)

      // [1, 4, 7]
    } else if ((gameBoard[1] === 'O') && (gameBoard[1] === gameBoard[4]) &&
      (gameBoard[7]) === (gameBoard[1]) && (gameBoard[1] !== '') && (gameBoard[4]
      !== '') && (gameBoard[7] !== '')) {
      champion(playerTwo)
      console.log(playerTwo + ' Wins!' + ' Winning combo middle column')
      console.log(gameBoard)

      // [0, 1, 2]
    } else if (gameBoard[0] === 'O' && gameBoard[1] === gameBoard[0] &&
      gameBoard[2] === gameBoard[0] && gameBoard[0] !== '' && gameBoard[1]
      !== '' && gameBoard[2] !== '') {
      champion(playerTwo)
      console.log(playerTwo + ' Wins!' + ' Winning combo top row')
      console.log(gameBoard)

      // [3, 4, 5]
    } else if (gameBoard[3] === 'O' && gameBoard[4] === gameBoard[3] &&
      gameBoard[5] === gameBoard[3] && gameBoard[3] !== '' && gameBoard[4]
      !== '' && gameBoard[5] !== '') {
      champion(playerTwo)
      console.log(playerTwo + ' Wins!' + 'Winning combo middle row')
      console.log(gameBoard)

      // [6, 7, 8]
    } else if (gameBoard[6] === 'O' && gameBoard[7] === gameBoard[6] &&
      gameBoard[8] === gameBoard[6] && gameBoard[6] !== '' && gameBoard[7]
      !== '' && gameBoard[8] !== '') {
      champion(playerTwo)
      console.log(playerTwo + ' Wins!' + 'Winning combo bottom row')
      console.log(gameBoard)

      // [0, 4, 8 ]
    } else if (gameBoard[0] === 'O' && gameBoard[4] === gameBoard[0] &&
      gameBoard[8] === gameBoard[0] && gameBoard[0] !== '' && gameBoard[4]
      !== '' && gameBoard[8] !== '') {
      champion(playerTwo)
      console.log(playerTwo + ' Wins!' + 'Winning combo diagonal')
      console.log(gameBoard)

      // [2, 5, 8]
    } else if (gameBoard[2] === 'O' && gameBoard[5] === gameBoard[2] &&
      gameBoard[8] === gameBoard[2] && gameBoard[2] !== '' && gameBoard[5]
      !== '' && gameBoard[8] !== '') {
      champion(playerTwo)
      console.log(playerTwo + ' Wins!' + 'Winning combo right column')
      console.log(gameBoard)

      // [2, 4, 6]
    } else if (gameBoard[2] === 'O' && gameBoard[4] === gameBoard[2] &&
      gameBoard[6] === gameBoard[2] && gameBoard[2] !== '' && gameBoard[4]
      !== '' && gameBoard[6] !== '') {
      champion(playerTwo)
      console.log(playerTwo + ' Wins!' + 'Winning combo diagonal')
      console.log(gameBoard)

      // [0, 3, 6]
    } else if (gameBoard[0] === 'O' && gameBoard[3] === gameBoard[0] &&
      gameBoard[6] === gameBoard[0] && gameBoard[0] !== '' && gameBoard[3]
      !== '' && gameBoard[6] !== '') {
      champion(playerTwo)
      console.log(playerTwo + ' Wins!' + 'Winning combo left column')
      console.log(gameBoard)

      // [1, 4, 7,]
    } else if (gameBoard[1] === 'O' && gameBoard[1] === gameBoard[4] &&
      gameBoard[7] === gameBoard[1] && gameBoard[1] !== '' && gameBoard[4]
    !== '' && gameBoard[7] !== '') {
      champion(playerTwo)
      console.log(playerTwo + ' Wins!' + ' Winning combo middle column')
      console.log(gameBoard)


    } else if ((gameBoard[0] !== gameBoard[1] && gameBoard[2]) ||
      (gameBoard[3] !== gameBoard[4] && gameBoard[5]) ||
      (gameBoard[6] !== gameBoard[7] && gameBoard[8]) ||
      (gameBoard[0] !== gameBoard[3] && gameBoard[6]) ||
      (gameBoard[1] !== gameBoard[4] && gameBoard[7]) ||
      (gameBoard[2] !== gameBoard[5] && gameBoard[8]) ||
      (gameBoard[0] !== gameBoard[4] && gameBoard[8]) ||
      (gameBoard[2] !== gameBoard[4] && gameBoard[6])) {
      champion(!playerOne || !playerTwo)
    } else {
      changePlayer()
    }
  }
}
//      2.1.5 create game data object to send to API
//      2.1.6 Pass game data to api.js function that makes API call
// const data = {
//   'game': {
//     'cell': {
//       'index': 0, // position on board
//       'value': 'x' // current user's turn
//     },
//     'over': false // if game is over or not
//   }
// }
// we will save this for later, focus on the problem above.
// api.boardClick()
//  .then(ui.boardClickSuccess)
//  .catch(ui.boardClickFailure)

const onGameHistory = (event) => {
  event.preventDefault()
  // const data = getFormFields(event.target)
  console.log('events game-history working')
  api.gameHistory()
    .then(ui.gameHistorySuccess)
    .catch(ui.gameHistoryFailure)
}

const onGameStatus = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('events game-status is working')
  api.gameStatus(data)
    .then(ui.gameStatusSuccess)
    .catch(ui.gameStatusFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#new-game').on('submit', onNewGame)
  $('#game-history').on('submit', onGameHistory)
  $('#game-status').on('submit', onGameStatus)
  $('td').on('click', onBoardClick)
  $('td').on('click', addToBoard)
}

module.exports = {
  addHandlers
}
