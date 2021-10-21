# **Connect Four** 

## Description:

Connect Four is a two player, turned based game, played on a gird that stands up vertically. Each player takes a turn claiming spaces on the grid. The first player to get four chips in a line wins. This can be done vertically, horizontally, or diagonally. 

<p>&nbsp;</p>

## Objective:

To create a browser based game that accurately imitates the board game Connect Four as it was when I was a child. 

<p>&nbsp;</p>

## Getting Started:

To play the game, 
[click here.](https://jgore99.github.io/connect-four/)

<p>&nbsp;</p>

## Motivation:

There are two reasons why I chose to build this game.

- First: I wanted to build on the concepts we learned building Tic Tac Toe. 
  
- Second: Connect Four is a game I played as a kid. I have very vivd memories of it. The colors, the chips, even the box art, are all things I could describe from memory. Building a functional game that has a nostalgia factor was an enjoyable process.

<p>&nbsp;</p>

## Concept Sketch:


![concept sketch](https://i.imgur.com/Rc6RIsa.jpg "Connect Four Concept Sketch")

<p>&nbsp;</p>
<p>&nbsp;</p>

## Actual Game:

![actual game](https://i.imgur.com/dBUR6uF.png "Connect Four Actual Game")

<p>&nbsp;</p>
<p>&nbsp;</p>

## Minimum Viable Product:

1. A game board, a reset button, and the current number of moves for each side.
   
2. Display indicating current player turn.
   
3. A click event tied to the game board.
   
4. Clicking on any circle in the board will check current board state. 
   
5. Each time a column is clicked, a player’s chip will appear in the lowest available spot in that column.
   
6. The code checks the board to see if a winning condition has been met.
   
7. If a winning combination has not been met, steps 2 -6 repeat.
   
8. If a winning condition has been met, a winning message will display, and the game will end.
   
9.  Clicking the reset button will return the game to the beginning state.


<p>&nbsp;</p>


## Technology Used:

- JavaScript
- CSS
- HTML
- Git
- Animate.CSS

<p>&nbsp;</p>

## Stretch Goals:

- Page loads with a large play / start button. Clicking it displays the conditions described in Step 1
  
- The remaining turn count is represented by the correct number of chips instead of a number.
  
- A celebration display / sequence is triggered upon a win being detected.

- Drop down instructions on how to play.
  
- Animation of chips dropping down columns.
  
- Any time the chip color is referenced, that text is the appropriate color.

- Refactor the code to use a more elegant solution when determining if there is a winner.

<p>&nbsp;</p>

## Hindsight Perspective:

My game board state array is a single, one dimensional array. If this was a two dimensional array instead, I would have had an easier time working with this data. This would have helped me achieve my last stretch goal of refactoring the find winner logic.