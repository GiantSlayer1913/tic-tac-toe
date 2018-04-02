const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  console.log('sign-up logging')
  return $.ajax({
    url: config.apiUrl + `/sign-up`,
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
    url: config.apiUrl + `/sign-in`,
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

const changePassword = function (data) {
  console.log('change-Password logging')
  return $.ajax({
    url: config.apiUrl + `/change-password/` + store.user.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function () {
  console.log('sign-out logging')
  return $.ajax({
    url: config.apiUrl + `/sign-out/` + store.user.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
