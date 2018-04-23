// const element = document.createElement('div')
// element.id = 'myDiv'
// element.innerHTML = 'Hello World!'
// document.body.appendChild(element)
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
// const gamelogic = require('./gamelogic')
// const config = require('./config')
const store = require('./store')



const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
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

// 2. events.js add a click event for the element
// 2.1 When board cell is clicked...
const onBoardClick = (event) => {
  // prevent default action
  event.preventDefault()

  // declare game board empty to start
  let gameBoard = ['', '', '', '', '', '', '', '', '']

  // declare playerOne and Two tokens
  const playerOne = 'X'
  const playerTwo = 'O'

  // start first move with playerOne
  let move = playerOne

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



  // start gameOver as false
  let gameOver = false

  // start winner as null
  let winner = null

  // [0, 1, 2] top row
  if ((gameBoard[1] === gameBoard[0]) && (gameBoard[2] === gameBoard[0]) && (gameBoard[0] !== '')) {
    winner = gameBoard[0]
    gameOver = true

    // [3, 4, 5] middle row
  } else if ((gameBoard[4] === gameBoard[3]) && (gameBoard[5] === gameBoard[3]) && (gameBoard[3] !== '')) {
    winner = gameBoard[4]
    gameOver = true

    // [6, 7, 8] bottom row
  } else if ((gameBoard[7] === gameBoard[6]) && (gameBoard[8] === gameBoard[6]) && (gameBoard[6] !== '')) {
    winner = gameBoard[8]
    gameOver = true

    // [0, 4, 8] diag top left
  } else if ((gameBoard[4] === gameBoard[0]) && (gameBoard[8] === gameBoard[0]) && (gameBoard[0] !== '')) {
    winner = gameBoard[4]
    gameOver = true

    // [2, 4, 6] diag top right
  } else if ((gameBoard[4] === gameBoard[2]) && (gameBoard[6] === gameBoard[2]) && (gameBoard[2] !== '')) {
    winner = gameBoard[4]
    gameOver = true

    // [2, 5, 8] right column
  } else if ((gameBoard[5] === gameBoard[2]) && (gameBoard[8] === gameBoard[2]) && (gameBoard[2] !== '')) {
    winner = gameBoard[8]
    gameOver = true

    // [1, 4, 7] middle column
  } else if ((gameBoard[4] === gameBoard[1]) && (gameBoard[7] === gameBoard[1]) && (gameBoard[7] !== '')) {
    winner = gameBoard[4]
    gameOver = true

    // [0, 3, 6] left column
  } else if ((gameBoard[3] === gameBoard[0]) && (gameBoard[6] === gameBoard[0]) && (gameBoard[0] !== '')) {
    winner = gameBoard[0]
    gameOver = true
  }
  // 2.1.5 create game data object to send to API
  const data = {
    'game': {
      'cell': {
        'index': 0, // position on board
        'value': 'x' // current user's turn
      },
      'over': false // if game is over or not
    }
  }

  //  2.1.5.1 change player move for next turn
  if (move === playerOne) {
    move = playerTwo
  } else {
    move = playerOne
  }

  // 2.1.6 Pass game data to api.js function that makes API call
  api.boardClick(data)
    .then(ui.boardClickSuccess)
    .catch(ui.boardClickFailure)
}

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
}

module.exports = {
  addHandlers
}
