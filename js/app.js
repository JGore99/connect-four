/*--------- Cached Element References ---------*/
const topSquares = document.querySelectorAll(".above-board")
const blackStatus = document.querySelector(".black-status")
const boardEl = document.querySelector(".board")
const boardSquares = document.querySelectorAll(".square")
const messageEl = document.getElementById("message")
const redStatus = document.querySelector(".red-status")
const resetBtn = document.querySelector(".reset")

/*----------------- Constants -----------------*/
const column0 = [topSquares[0], boardSquares[7], boardSquares[14], boardSquares[21], boardSquares[28], boardSquares[35]] 
const column1 = [topSquares[1], boardSquares[8], boardSquares[15], boardSquares[22], boardSquares[29], boardSquares[36]] 
const column2 = [topSquares[2], boardSquares[9], boardSquares[16], boardSquares[23], boardSquares[30], boardSquares[37]] 
const column3 = [topSquares[3], boardSquares[10], boardSquares[17], boardSquares[24], boardSquares[31], boardSquares[38]] 
const column4 = [topSquares[4], boardSquares[11], boardSquares[18], boardSquares[25], boardSquares[32], boardSquares[39]] 
const column5 = [topSquares[5], boardSquares[12], boardSquares[19], boardSquares[26], boardSquares[33], boardSquares[40]] 
const column6 = [topSquares[6], boardSquares[13], boardSquares[20], boardSquares[28], boardSquares[34], boardSquares[41]] 


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

/*-------------- Event Listeners --------------*/

boardEl.addEventListener("click", handleClick)
resetBtn.addEventListener("click", clearAll)
/*----------------- Functions -----------------*/

clearAll()

// A. click event tied to the board, identifies target id of square clicked
// B. target id is used to update state array.

function handleClick(e) {
  
  if (e.target.classList.value !== "board") {
    console.log(e.target.classList)
    let targetColumn = parseInt(e.target.classList[1].slice(4))
    let targetId = parseInt(e.target.id);
    
    if(boardState[targetColumn] === null) {
      if (isWinner === false) {
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
  playerTurn === -1 ? blackTurnsRemaining -- : redTurnsRemaining --
}

function findOpenSpace(targetColumn){
  console.log(targetColumn)
  let bottomColIndx = targetColumn + 35
  let bottomMinusOne = targetColumn + 28 
  let bottomMinusTwo = targetColumn + 21
  let bottomMinusThree = targetColumn + 14
  let bottomMinusFour = targetColumn + 7
  let bottomMinusFive = targetColumn

  if (boardState[bottomColIndx] === null){
    boardState[bottomColIndx] = playerTurn
    console.log("board state", boardState)
  } else if (boardState[bottomMinusOne] === null){
    boardState[bottomMinusOne] = playerTurn
    console.log("board state", boardState)
  } else if (boardState[bottomMinusTwo] === null){
    boardState[bottomMinusTwo] = playerTurn
    console.log("board state", boardState)  
  } else if (boardState[bottomMinusThree] === null){
    boardState[bottomMinusThree] = playerTurn
    console.log("board state", boardState)   
  } else if (boardState[bottomMinusFour] === null){
    boardState[bottomMinusFour] = playerTurn
    console.log("board state", boardState) 
  } else if (boardState[bottomMinusFive] === null){
    boardState[bottomMinusFive] = playerTurn
    console.log("board state", boardState) 
  }
  render()
}


function determineWinner() {
  //for vertical 

  // loop over each row, colum, diagonal seperately. adding the value of each chip of matching color / value. if the next chip is not of equal value or is null, the count is equal to the next chip, and contines going up until the run end, or the next chip is a different color.
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