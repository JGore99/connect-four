/*--------- Cached Element References ---------*/

const topSquares = document.querySelectorAll(".above-board")
const blackStatus = document.querySelector(".black-status")
const boardEl = document.querySelector(".board")
const boardSquares = document.querySelectorAll(".square")
const messageEl = document.getElementById("message")
const redStatus = document.querySelector(".red-status")
const resetBtn = document.querySelector(".reset")


/*------------- Constants -------------*/
const chipClick = new Audio('../audio/click.mp3')
chipClick.volume = 0.3

/*------------- Variables (state) -------------*/

let playerTurn = 1
let redTurnsRemaining = 21
let blackTurnsRemaining = 21
let isWinner = false
let chipColor = "BLACK"
let gameMessage = "It's BLACK's turn!"
let boardState = [
  null, null, null, null, null, null, 
  null, null, null, null, null, null, 
  null, null, null, null, null, null, 
  null, null, null, null, null, null, 
  null, null, null, null, null, null,
  null, null, null, null, null, null,
  null, null, null, null, null, null
]

let winningCombos = [
  [0, 1, 2, 3],
[41, 40, 39, 38],
[7, 8, 9, 10],
[34, 33, 32, 31],
[14, 15, 16, 17],
[27, 26, 25, 24],
[21, 22, 23, 24],
[20, 19, 18, 17],
[28, 29, 30, 31],
[13, 12, 11, 10],
[35, 36, 37, 38],
[6, 5, 4, 3],
[0, 7, 14, 21],
[41, 34, 27, 20],
[1, 8, 15, 22],
[40, 33, 26, 19],
[2, 9, 16, 23],
[39, 32, 25, 18],
[3, 10, 17, 24],
[38, 31, 24, 17],
[4, 11, 18, 25],
[37, 30, 23, 16],
[5, 12, 19, 26],
[36, 29, 22, 15],
[6, 13, 20, 27],
[35, 28, 21, 14],
[0, 8, 16, 24],
[41, 33, 25, 17],
[7, 15, 23, 31],
[34, 26, 18, 10],
[14, 22, 30, 38],
[27, 19, 11, 3],
[35, 29, 23, 17],
[6, 12, 18, 24],
[28, 22, 16, 10],
[13, 19, 25, 31],
[21, 15, 9, 3],
[20, 26, 32, 38],
[36, 30, 24, 18],
[5, 11, 17, 23],
[37, 31, 25, 19],
[4, 10, 16, 22],
[2, 10, 18, 26],
[39, 31, 23, 15],
[1, 9, 17, 25],
[40, 32, 24, 16],
[9, 17, 25, 33],
[8, 16, 24, 32],
[11, 17, 23, 29],
[12, 18, 24, 30],
[1, 2, 3, 4],
[5, 4, 3, 2],
[8, 9, 10, 11],
[12, 11, 10, 9],
[15, 16, 17, 18],
[19, 18, 17, 16],
[22, 23, 24, 25],
[26, 25, 24, 23],
[29, 30, 31, 32],
[33, 32, 31, 30],
[36, 37, 38, 39],
[40, 39, 38, 37],
[7, 14, 21, 28],
[8, 15, 22, 29],
[9, 16, 23, 30],
[10, 17, 24, 31],
[11, 18, 25, 32],
[12, 19, 26, 33],
[13, 20, 27, 34]
]

/*-------------- Event Listeners --------------*/

boardEl.addEventListener("click", handleClick)
resetBtn.addEventListener("click", clearAll)

/*----------------- Functions -----------------*/

clearAll()

function handleClick(e) {
  
  if (e.target.classList.value !== "board") {
    let targetColumn = parseInt(e.target.classList[1].slice(4))

    if(boardState[targetColumn] === null) {
      if (isWinner === false) {
        findOpenSpace(targetColumn)
        playerTurn = playerTurn * -1
        turnCounter()
        playerTurn === 1 ? chipColor = "BLACK" : chipColor = "RED"
      } else {
        return
      }
      render()
      chipClick.play()
      determineWinner()
      handleMessages()
    }
  }   
}

function clearAll() {
  playerTurn = 1
  redTurnsRemaining = 21
  blackTurnsRemaining = 21
  chipColor = "BLACK"
  isWinner = false
  gameMessage = "It is BLACK's turn!"
  boardState = [
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null
  ]
  
  boardSquares.forEach((boardSquare) => {
    boardSquare.classList.remove("red", "black")
  })

  messageEl.classList.remove('animate__animated', 'animate__bounce')

  handleMessages()
  render()
}

function render() {
  if(isWinner === false){
    boardSquares.forEach((square, idx) => {
      if (boardState[idx] === -1){
        square.classList.add("red")
      } else if (boardState[idx] === 1){
        square.classList.add("black")
      }
    })
  }
}

function handleMessages() {
  if(isWinner === false){
    gameMessage = `It is ${chipColor}'s turn`
  } else if (isWinner === 1){
    gameMessage = "Congrats! BLACK Won!"
  } else if (isWinner === -1){
    gameMessage = "Congrats! RED Won!"
  } else if (isWinner === "Tie"){
    gameMessage = "It's a tie! Play again?"
  }
  messageEl.innerText = gameMessage

  blackStatus.innerText = `BLACK \nhas ${blackTurnsRemaining} turns remaining`
  redStatus.innerText = `RED \nhas ${redTurnsRemaining} turns remaining`

  if (isWinner === 1 || isWinner === -1){
    messageEl.classList.add('animate__animated', 'animate__bounce')
  } 

  render()
}

function turnCounter(){
  playerTurn === -1 ? blackTurnsRemaining -- : redTurnsRemaining --
}

function findOpenSpace(targetColumn){
  let bottomColIndx = targetColumn + 35
  let bottomMinusOne = targetColumn + 28 
  let bottomMinusTwo = targetColumn + 21
  let bottomMinusThree = targetColumn + 14
  let bottomMinusFour = targetColumn + 7
  let bottomMinusFive = targetColumn

  if (boardState[bottomColIndx] === null){
    boardState[bottomColIndx] = playerTurn
  } else if (boardState[bottomMinusOne] === null){
    boardState[bottomMinusOne] = playerTurn
  } else if (boardState[bottomMinusTwo] === null){
    boardState[bottomMinusTwo] = playerTurn
  } else if (boardState[bottomMinusThree] === null){
    boardState[bottomMinusThree] = playerTurn
  } else if (boardState[bottomMinusFour] === null){
    boardState[bottomMinusFour] = playerTurn
  } else if (boardState[bottomMinusFive] === null){
    boardState[bottomMinusFive] = playerTurn
  }
  
  render()
}

// function changeHoverColor(targetColumn){
//   let targetHoverSpace = targetColumn - 1
//   console.log('target', targetHoverSpace)
//   if (playerTurn === 1){
//     above-board.classList.add("black")
//   } else if (playerTurn === 1) {
//     above-board.classList.add("red")
//   } else {

//   }
// }

function determineWinner() {
  
  winningCombos.forEach(combo => {
    if ( Math.abs( boardState[combo[0]] + boardState[combo[1]] + boardState[combo[2]] + boardState[combo[3]] ) === 4 ){
      isWinner = (playerTurn * -1)
    }
  })
  if(redTurnsRemaining === 0 && blackTurnsRemaining === 0 && isWinner === false){
    isWinner = "Tie"
  }

  render()
}
