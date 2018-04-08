const store = require('./store')

// Sign-up functions
const signUpSuccess = function (data) {
  console.log('ui-signUpSuccess working')
  console.log(data)
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
}
const signUpFailure = function () {
  console.log('ui-signUpFailure working')
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
}
const signInFailure = function () {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
}

// Change Password functions
const changePasswordSuccess = function () {
  console.log('ui-changePassword-Success working')
  $('#message').text('Successfully changed password')
  $('#message').css('background-color', 'green')
}
const changePasswordFailure = function () {
  console.log('ui-changePasswordFailure working')
  $('#message').text('Failure to change password')
  $('#message').css('background-color', 'red')
}

// Sign-out functions
const signOutSuccess = function (data) {
  console.log(data)
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  store.user = null
}
const signOutFailure = function () {
  $('#message').text('Failure to sign out')
  $('#message').css('background-color', 'red')
}

// Game History functions
const gameHistorySuccess = (data) => {
  $('#jumboTron').text('History Successful')
  $('#jumboTron').css('background-color', 'green')
}
const gameHistoryFailure = (data) => {
  $('#jumboTron').text('History Failure')
  $('#jumboTron').css('background-color', 'red')
}

// New Game functions
const newGameSuccess = (data) => {
  $('#jumboTron').text('Begin New Game')
  $('#jumboTron').css('background-color', 'green')
}
const newGameFailure = (data) => {
  $('#jumboTron').text('Cannot Begin New Game')
  $('#jumboTron').css('background-color', 'red')
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
