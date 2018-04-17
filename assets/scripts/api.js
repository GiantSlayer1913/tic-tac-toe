const config = require('./config')
const store = require('./store')

// Message timeout function
// const onSetTimeout = (event) => {
//   event.preventDefault()
//   document.getElementById('#message').innerHTML = ''
// }

// Sign-up
const signUp = function (data) {
  console.log('api.sign-up is working')
  return $.ajax({
    url: config.apiUrl + `/sign-up`,
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

// Sign-in
const signIn = function (data) {
  console.log('api.sign-in is working')
  return $.ajax({
    url: config.apiUrl + `/sign-in`,
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}

// Change Password
const changePassword = function (data) {
  console.log('api.change-Password is working')
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

// Sign-out
const signOut = function () {
  console.log('api.sign-out is working')
  return $.ajax({
    url: config.apiUrl + `/sign-out/` + store.user.id,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Game Controls -->
// New Game
const newGame = (data) => {
  console.log('api.New Game is working')
  return $.ajax({
    url: config.apiUrl + '/new-game',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data
  })
}
// Game history
const gameHistory = (data) => {
  console.log('api.game-history is working')
  return $.ajax({
    url: config.apiUrl + `/game-history/`,
    method: 'GET',
    contentType: 'application/json',
    Authorization: 'Token token=' + store.data
  })
}

// Gameboard api

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  gameHistory,
  newGame
}
