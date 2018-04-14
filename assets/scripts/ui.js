const store = require('./store')

// Sign-up functions
const signUpSuccess = function (data) {
  console.log('ui-signUpSuccess working')
  console.log(data)
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
  $('#sign-up').css('display', 'none')
}
const signUpFailure = function () {
  console.log('ui-signUpFailure working')
  $('#message').css('display', 'block')
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
}

// Sign-in functions
const signInSuccess = function (data) {
  console.log('ui.signIn working')
  console.log(data)
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  store.user = data.user
  $('#sign-up').css('display', 'none')
  $('#sign-in').css('display', 'none')
  $('#change-password').css('display', 'block')
  $('#sign-out').css('display', 'block')
  $('#gameBoard').css('display', 'inline-block')
  $('#new-game').css('display', 'block')
  $('#game-history').css('display', 'block')
}
const signInFailure = function () {
  $('#message').css('display', 'block')
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
}

// Change Password functions
const changePasswordSuccess = function () {
  console.log('ui-changePassword-Success working')
  $('#message').css('display', 'block')
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
}
const changePasswordFailure = function () {
  console.log('ui-changePasswordFailure working')
  $('#message').css('display', 'block')
  $('#message').text('Failure to change password')
  $('#message').css('background-color', 'red')
}

// Sign-out functions
const signOutSuccess = function (data) {
  console.log(data)
  $('#sign-up').css('display', 'block')
  $('#sign-in').css('display', 'block')
  $('#change-password').css('display', 'none')
  $('#sign-out').css('display', 'none')
  $('#gameBoard').css('display', 'none')
  $('#new-game').css('display', 'none')
  $('#game-history').css('display', 'none')
  $('#message').css('display', 'block')
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  store.user = null
}
const signOutFailure = function () {
  $('#message').css('display', 'block')
  $('#message').text('Failure to sign out')
  $('#message').css('background-color', 'red')
}

// Game History functions
const gameHistorySuccess = (data) => {
  $('#jumboTron').css('display', 'block')
  $('#jumboTron').text('History Successful')
  $('#jumboTron').css('background-color', 'green')
}
const gameHistoryFailure = (data) => {
  $('#message').css('display', 'block')
  $('#message').text('Cannot show history')
  $('#message').css('background-color', 'red')
}

// New Game functions
const newGameSuccess = (data) => {
  $('#message').css('display', 'block')
  $('#message').text('Begin New Game')
  $('#message').css('background-color', 'green')
}
const newGameFailure = (data) => {
  $('#message').css('display', 'block')
  $('#message').text('Cannot Begin New Game')
  $('#message').css('background-color', 'red')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  gameHistorySuccess,
  gameHistoryFailure,
  newGameSuccess,
  newGameFailure
}
