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
  $('#board-click').css('display', 'inline-block')
  $('#new-game').css('display', 'block')
  $('#game-history').css('display', 'block')
  $('#change-password')[0].reset()
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
  $('#change-password')[0].reset()
}
const changePasswordFailure = function () {
  console.log('ui-changePasswordFailure working')
  $('#message').css('display', 'block')
  $('#message').text('Failure to change password')
  $('#message').css('background-color', 'red')
  $('#change-password')[0].reset()
}

// Sign-out functions
const signOutSuccess = function (data) {
  $('#sign-up').css('display', 'block')
  $('#sign-in').css('display', 'block')
  $('#change-password').css('display', 'none')
  $('#sign-out').css('display', 'none')
  $('#board-click').css('display', 'none')
  $('#new-game').css('display', 'none')
  $('#game-history').css('display', 'none')
  $('#message').css('display', 'block')
  $('#message').text('Successfully signed out')
  $('#message').css('background-color', 'green')
  $('#sign-in[type=text]').val('')
  $('#sign-in[type=password]').val('')
  $('#sign-up[type=text]').val('')
  $('#sign-up[type=password]').val('')
  store.user.id = null
}

const signOutFailure = function () {
  $('#message').css('display', 'block')
  $('#message').text('Failure to sign out')
  $('#message').css('background-color', 'red')
}

// Game History functions
const gameHistorySuccess = (data) => {
  store.user = data.user
  console.log(data)
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
const newGameSuccess = () => {
  $('#jumboTron').text('X')
  $('#jumboTron').css('display', 'block')
  $('#message').text('Begin New Game')
  $('#message').css('background-color', 'green')
}
const newGameFailure = () => {
  $('#message').css('display', 'block')
  $('#jumboTron').text('Cannot Begin New Game')
  $('#jumboTron').css('background-color', 'red')
}

// Gameboard click functions
const boardClickSuccess = (data) => {
  store.user = data.user
  console.log(data.user.game)
}
const boardClickFailure = (data) => {
  store.user = data.user
  console.log('ui.boardClickFailure')
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
  newGameFailure,
  boardClickSuccess,
  boardClickFailure
}
