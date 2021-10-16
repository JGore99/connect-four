/*--------- Cached Element References ---------*/
const turnEl = document.querySelector(".turn-title")
const boardEl = document.querySelector(".board") 
const resetBtn = document.querySelector(".reset")
/*----------------- Constants -----------------*/

/*------------- Variables (state) -------------*/
let playerTurn = 1
let isWinner = null
let gameMessage = "It's BLACK's turn!"
let boardState = [
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
  null, null, null, null, null, null, null,
]



/*-------------- Event Listeners --------------*/

boardEl.addEventListener("click", handleClick)
resetBtn.addEventListener("click", clearAll)
/*----------------- Functions -----------------*/

clearAll()

// A. click event tied to the board, identifies target id of square clicked
// B. target id is used to update state array.

function handleClick(e){
  let targetId = parseInt(e.target.id)
  if (isWinner === null && boardState[targetId] === null){
    playerTurn === 1 ? boardState[targetId] = -1 : boardState[targetId] = 1
    console.log(boardState)
    playerTurn = playerTurn * 1
  } 
  render()
  determineWinner()
  handleMessage()
}


function clearAll(){
  playerTurn = 1
  isWinner = null
  gameMessage = "It is BLACK's turn!"
  boardState = [
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
  ]

  handleMessage()
  render()  
}


function render(){

}

function handleMessage(){

}


function determineWinner(){

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


