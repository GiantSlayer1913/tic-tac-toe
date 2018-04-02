const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log('sign-up logging')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const signIn = function (data) {
  console.log('sign-in logging')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const signOut = function () {
//   console.log('sign-out logging')
//   return $.ajax({
//     url: config.apiUrl + '/sign-out',
//     method: 'DELETE',
//     headers: {
//       contentType: 'application/json',
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
module.exports = {
  store,
  signUp,
  signIn,
  changePassword
  // signOut
}
