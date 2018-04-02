const store = require('./store')

const signUpSuccess = function () {
  console.log('ui-signUpSuccess working')
  $('#message').text('Successfully signed up')
  $('#message').css('background-color', 'green')
}
const signUpFailure = function () {
  console.log('ui-signUpFailure working')
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

// const signOutSuccess = function (data) {
//   console.log(data)
//   $('#message').text('Successfully signed out')
//   $('#message').css('background-color', 'green')
//   store.user = null
// }
// const signOutFailure = function () {
//   $('#message').text('Failure to sign out')
//   $('#message').css('background-color', 'red')
// }
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
  // signOutSuccess,
  // signOutFailure
}
