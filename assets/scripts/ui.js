const store = require('./store')

const signUpSuccess = function () {
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
}
const signUpFailure = function () {
  $('#message').text('Failure signing up')
  $('#message').css('background-color', 'red')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('Successfully signed in')
  $('#message').css('background-color', 'green')
  store.user = data.user
}
const signInFailure = function () {
  $('#message').text('Failure signing in')
  $('#message').css('background-color', 'red')
}
//
// const signOutSuccess = function (data) {
//   $('#message').text('Successfully signed out')
//   $('#message').css('background-color', 'green')
//   store.user = null
// }
// const signOutFailure = function () {
//   $('#message').text('Failure to sign out')
//   $('#message').css('background-color', 'red')
// }
module.exports = {
  store,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
  // signOutSuccess,
  // signOutFailure
}
