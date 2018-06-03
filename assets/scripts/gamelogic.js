

  $(document).ready(function () {
    let move = 1
    let play = true

    $('#board tr td').click(function () {
      if ($(this).text() === '' && play) {
        if ((move % 2) === 1) {
          $(this).append('X')
        } else {
          $(this).append('O')
        }
        move++
        if (checkForWinner() !== -1 && checkForWinner() !== '') {
          if (checkForWinner() === 'X') {
            alert('Player 1 wins!')
          } else {
            alert('Player 2 wins!')
          }
          play = false
        }
      }
    })

    function checkForWinner () {
      const space1 = $('#board tr:nth-child(1) td:nth-child(1)').text()
      const space2 = $('#board tr:nth-child(1) td:nth-child(2)').text()
      const space3 = $('#board tr:nth-child(1) td:nth-child(3)').text()
      const space4 = $('#board tr:nth-child(2) td:nth-child(1)').text()
      const space5 = $('#board tr:nth-child(2) td:nth-child(2)').text()
      const space6 = $('#board tr:nth-child(2) td:nth-child(3)').text()
      const space7 = $('#board tr:nth-child(3) td:nth-child(1)').text()
      const space8 = $('#board tr:nth-child(3) td:nth-child(2)').text()
      const space9 = $('#board tr:nth-child(3) td:nth-child(3)').text()
      // check rows
      if ((space1 === space2) && (space2 === space3)) {
        return space3
      } else if ((space4 === space5) && (space5 === space6)) {
        return space6
      } else if ((space7 === space8) && (space8 === space9)) {
        return space9
      } else if ((space1 === space4) && (space4 === space7)) {
        return space7
      } else if ((space2 === space5) && (space5 === space8)) {
        return space8
      } else if ((space3 === space6) && (space6 === space9)) {
        return space9
      } else if ((space1 === space5) && (space5 === space9)) {
        return space9
      } else if ((space3 === space5) && (space5 === space7)) {
        return space7
      }
      // no winner
      return -1
    }
  })


// From events.js
// 2. events.js add a click event for the element
// 2.1 When board cell is clicked...
const onBoardClick = (event) => {
  // prevent default action
  event.preventDefault()

  // declare game board empty to start

  // declare playerOne and Two tokens
  const playerOne = 'X'
  const playerTwo = 'O'

  // start first move with playerOne
  let move = playerOne

  // if no new game is created or game is over then do not play
  if (!store.game || store.game.over) {
    $('#jumboTron').text('Click the new game button to start a new game!')
    return
  }
  // Alraedy solved
  // 2.1.1 get position of game board 0 - 8 from ID of clicked element
  // How could we do that?
  const index = event.target.id

  //      2.1.2 get current player, X or O
  // let currentPlayer = move

  //      2.1.3 add player to position in game board
  // gameBoard[index] = move

  //      2.1.4 check for winner



  // // start gameOver as false
  // let gameOver = false
  //
  // // start winner as null
  // let winner = null
  //
  // // [0, 1, 2] top row
  // if ((gameBoard[1] === gameBoard[0]) && (gameBoard[2] === gameBoard[0]) && (gameBoard[0] !== '')) {
  //   winner = gameBoard[0]
  //   gameOver = true
  //
  //   // [3, 4, 5] middle row
  // } else if ((gameBoard[4] === gameBoard[3]) && (gameBoard[5] === gameBoard[3]) && (gameBoard[3] !== '')) {
  //   winner = gameBoard[4]
  //   gameOver = true
  //
  //   // [6, 7, 8] bottom row
  // } else if ((gameBoard[7] === gameBoard[6]) && (gameBoard[8] === gameBoard[6]) && (gameBoard[6] !== '')) {
  //   winner = gameBoard[8]
  //   gameOver = true
  //
  //   // [0, 4, 8] diag top left
  // } else if ((gameBoard[4] === gameBoard[0]) && (gameBoard[8] === gameBoard[0]) && (gameBoard[0] !== '')) {
  //   winner = gameBoard[4]
  //   gameOver = true
  //
  //   // [2, 4, 6] diag top right
  // } else if ((gameBoard[4] === gameBoard[2]) && (gameBoard[6] === gameBoard[2]) && (gameBoard[2] !== '')) {
  //   winner = gameBoard[4]
  //   gameOver = true
  //
  //   // [2, 5, 8] right column
  // } else if ((gameBoard[5] === gameBoard[2]) && (gameBoard[8] === gameBoard[2]) && (gameBoard[2] !== '')) {
  //   winner = gameBoard[8]
  //   gameOver = true
  //
  //   // [1, 4, 7] middle column
  // } else if ((gameBoard[4] === gameBoard[1]) && (gameBoard[7] === gameBoard[1]) && (gameBoard[7] !== '')) {
  //   winner = gameBoard[4]
  //   gameOver = true
  //
  //   // [0, 3, 6] left column
  // } else if ((gameBoard[3] === gameBoard[0]) && (gameBoard[6] === gameBoard[0]) && (gameBoard[0] !== '')) {
  //   winner = gameBoard[0]
  //   gameOver = true
  // }
  // 2.1.5 create game data object to send to API
  const data = {
    'game': {
      'cell': {
        'index': 0, // position on board
        'value': 'x' // current user's turn
      },
      'over': false // if game is over or not
    }
  }

  //  2.1.5.1 change player move for next turn
  // if (move === playerOne) {
  //   move = playerTwo
  // } else {
  //   move = playerOne
  // }

  // 2.1.6 Pass game data to api.js function that makes API call
//   api.boardClick(data)
//     .then(ui.boardClickSuccess)
//     .catch(ui.boardClickFailure)
// }
