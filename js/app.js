/*--------- Cached Element References ---------*/
const topSquares = document.querySelectorAll(".above-board")
const blackStatus = document.querySelector(".black-status")
const boardEl = document.querySelector(".board")
const boardSquares = document.querySelectorAll(".square")
const messageEl = document.getElementById("message")
const redStatus = document.querySelector(".red-status")
const resetBtn = document.querySelector(".reset")
const turnEl = document.querySelector(".turn-title")
/*----------------- Constants -----------------*/
// const column0 = [topSquares[0], boardSquares[7], boardSquares[14], boardSquares[21], boardSquares[28], boardSquares[35]] 
// const column1 = [topSquares[1], boardSquares[8], boardSquares[15], boardSquares[22], boardSquares[29], boardSquares[36]] 
// const column2 = [topSquares[2], boardSquares[9], boardSquares[16], boardSquares[23], boardSquares[30], boardSquares[37]] 
// const column3 = [topSquares[3], boardSquares[10], boardSquares[17], boardSquares[24], boardSquares[31], boardSquares[38]] 
// const column4 = [topSquares[4], boardSquares[11], boardSquares[18], boardSquares[25], boardSquares[32], boardSquares[39]] 
// const column5 = [topSquares[5], boardSquares[12], boardSquares[19], boardSquares[26], boardSquares[33], boardSquares[40]] 
// const column6 = [topSquares[6], boardSquares[13], boardSquares[20], boardSquares[28], boardSquares[34], boardSquares[41]] 


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
  // playerTurn = 1
  let targetColumn = parseInt(e.target.classList[1].slice(4))
  let targetId = parseInt(e.target.id);
  if (isWinner === null) {
    // playerTurn === 1 ? (boardState[targetId] = -1) : (boardState[targetId] = 1);
    console.log("playerTurn before change", playerTurn)
    findOpenSpace(targetColumn)
    playerTurn = playerTurn * -1
    console.log("playerTurn after change", playerTurn)
    turnCounter()
    playerTurn === 1 ? chipColor = "BLACK" : chipColor = "RED"
  } else {
    return
  }
  console.log("column", targetColumn)
  console.log("space", targetId)
  // console.log(boardState)
  render(targetColumn)
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

function render() {
  
  // if column x, check all children in said column for !== null.
  // if found, use index of that spot - 1, change color of that spot
  // if not found, change color of last spot in row.
  // console.log("column", columnId)
  // console.log(boardState)
  // boardSquares.forEach((boardSquare, idx) => {
  //   if (boardState[idx] === -1) {
  //     boardSquare.innerText = "BL";
  //   } else if (boardState[idx] === 1) {
  //     boardSquare.innerText = "RD";
  //   }
  // })

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

function findOpenSpace(targetColumn){
  console.log(targetColumn)
  let bottomColIndx = targetColumn + 35 //THIS!!!!
  if (boardState[bottomColIndx] === null){
    boardState[bottomColIndx] = playerTurn
  } else {
      console.log("playerTurn", playerTurn)
      for(let i = targetColumn; i < 42; i += 7){
        console.log("player turn in function", playerTurn)
        let indexLessSeven = (i-7)
        if (boardState[i] === null ){
          boardState[indexLessSeven] = playerTurn
        }
      }
    }
    console.log("board state", boardState)
    // if (boardState[i] !== null || boardState[i] === 1 || boardState[i] === -1) 
  // if column 0 for loop starting at 0 +7 check every state value for != null. 
  // if found, grab -7, if not use last 
    // check boardState at index 0, 7, 14, 21, 28, 35. If any of these values !== null, index -7 make that space 1, or -1.
    // If not, make that index 1 or -1
  
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