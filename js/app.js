/*--------- Cached Element References ---------*/
const blackStatus = document.querySelector(".black-status")
const boardEl = document.querySelector(".board")
const boardSquares = document.querySelectorAll(".square")
// const columnEl = document.querySelectorAll(".column")
const messageEl = document.getElementById("message")
const redStatus = document.querySelector(".red-status")
const resetBtn = document.querySelector(".reset")
const turnEl = document.querySelector(".turn-title")
/*----------------- Constants -----------------*/

/*------------- Variables (state) -------------*/
let playerTurn = 1
let redTurnsRemaining = 21
let blackTurnsRemaining = 21
let isWinner = null
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

/*-------------- Event Listeners --------------*/

boardEl.addEventListener("click", handleClick)
resetBtn.addEventListener("click", clearAll)
/*----------------- Functions -----------------*/

clearAll()

// A. click event tied to the board, identifies target id of square clicked
// B. target id is used to update state array.

function handleClick(e) {
  let columnId = parseInt(e.target.parentNode.id.slice(1))
  let targetId = parseInt(e.target.id);
  if (isWinner === null && boardState[targetId] === null) {
    playerTurn === 1 ? (boardState[targetId] = -1) : (boardState[targetId] = 1);
    turnCounter()
    playerTurn = playerTurn * -1;
    playerTurn === 1 ? chipColor = "BLACK" : chipColor = "RED"
  }
  console.log("space", targetId)
  render(columnId)
  determineWinner()
  handleMessages()
}

function clearAll() {
  playerTurn = 1
  redTurnsRemaining = 21
  blackTurnsRemaining = 21
  chipColor = "BLACK"
  isWinner = null
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
    boardSquare.innerText = "";
  })

  handleMessages()
  render()
}

function render(columnId) {
  if(columnId === 0){
    
  }
  // if column x, check all children in said column for !== null.
  // if found, use index of that spot - 1, change color of that spot
  // if not found, change color of last spot in row.
  console.log("column", columnId)
  boardSquares.forEach((boardSquare, idx) => {
    if (boardState[idx] === -1) {
      boardSquare.innerText = "BL";
    } else if (boardState[idx] === 1) {
      boardSquare.innerText = "RD";
    }
  })

}

function handleMessages() {
  if(isWinner === null){
    gameMessage = `It is ${chipColor}'s turn'`
  } else if (isWinner === "BLACK"){
    gameMessage = "Congrats! BLACK Won!"
  } else if (isWinner === "RED"){
    gameMessage = "Congrats! RED Won!"
  } else if (isWinner === "Tie"){
    gameMessage = "It's a tie! Play again?"
  }
  messageEl.innerText = gameMessage

  blackStatus.innerText = `BLACK has ${blackTurnsRemaining} of turns remaining`
  redStatus.innerText = `RED has ${redTurnsRemaining} of turns remaining`

  render()
}

function turnCounter(){
  playerTurn === 1 ? blackTurnsRemaining -- : redTurnsRemaining --
}

function determineWinner() {
  
}

// 1. A connect four board, a reset button, and the number of moves remaining for each side is visible.
// 2. Game will display which color’s turn it currently is.
// 3. A click event will be tied to the board.
// 4. Clicking on any circle in the board will check current board state.
// 5. A colored chip of the active turn will appear in lowest available spot of the column clicked
// 6. The code will check the board to see if a winning condition is has been met.
// 7. If a winning combination has not been met, steps 2 -6 will repeat
// 8. If a winning condition has been met, a winning message will display, and the game will end.
// 9. Clicking the reset button will return the game to the state present at condition