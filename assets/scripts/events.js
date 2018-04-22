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

const data = {
  'game': {
    'cell': {
      'index': 0, // position on board
      'value': 'x' // current user's turn
    },
    'over': false // if game is over or not
  }
}

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

  // if no new game is created or game is over then do not play
  if (!store.game || store.game.over) {
    $('#jumboTron').text('Click the new game button to start a new game!')
    return
  }

  // CURRENT PROBLEM TO SOLVE
  // 2.1.1 get position of game board 0 - 8 from ID of clicked element
  // How could we do that?
  else if (store.game) {
    const index = event.target.id
    console.log(event.target.id)
  }
  //      2.1.2 get current player, X or O
  let currentPlayer = 'X'
  //      2.1.3 add player to position in game board

  //      2.1.4 check for winner
  //      2.1.5 create game data object to send to API
  //      2.1.6 Pass game data to api.js function that makes API call

  // we will save this for later, focus on the problem above.
  // api.boardClick()
  //  .then(ui.boardClickSuccess)
  //  .catch(ui.boardClickFailure)
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
