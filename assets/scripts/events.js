// const element = document.createElement('div')
// element.id = 'myDiv'
// element.innerHTML = 'Hello World!'
// document.body.appendChild(element)
const api = require('./api')
const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui')
// require events from gameBoardEvents
const gameBoardEvents = require('./gameBoardEvents')

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

const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
// Gameboard events
const onGameBoard = function () {
  event.preventDefault()
  gameBoardEvents.gameBoard()
    .then(ui.clickBoardSuccess)
    .catch(ui.clickBoardFailure)
}
// Double check to see if this acutally works!!!
const onNewGame = function (event) {
  event.preventDefault()
  console.log('Game Finished!')
  $('.gameBoard').html('')
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  // Below is addHandlers for creating new game
  $('#new-game').on('submit', onNewGame)
}

module.exports = {
  addHandlers
}
