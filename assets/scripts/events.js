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
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
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
  console.log('events game-history working')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGameHistory = (event) => {
  console.log('onGameHistory is logging')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.gameHistory(data)
    .then(ui.gameHistorySuccess)
    .catch(ui.gameHistoryFailure)
}

const onGameStatus = (event) => {
  console.log('onGameStatus is logging')
  event.preventDefault()
  const data = getFormFields(event.target)
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
  // $('td').on('click', onBoardClick)
}

module.exports = {
  addHandlers
}
