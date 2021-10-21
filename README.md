# **Connect Four** 

## Description:

Connect Four is a two player, turned based game, played on a grid that stands vertically between players. Each player takes a turn dropping their colored chips to the lowest point in columns of the grid. The first player to build a series of four chips in a row, on a horizontal, vertical, or diagonal axis wins.

<p>&nbsp;</p>

## Objective:

To create a browser based game that accurately imitates the board game Connect Four as it was when I was a kid. 

<p>&nbsp;</p>

## Link to Game:

To play the game, 
[click here.](https://jgore99.github.io/connect-four/)

<p>&nbsp;</p>

## Motivation:
There are two main reasons why I chose to build this game specifically. 
- First: I wanted to build on the concepts we learned when we built Tic Tac Toe.
  
- Second: Connect Four is a game I played as a kid. I have very clear memories and associations with it. The colors, the chips, even the box art, are all things I could describe from memory. Attempting to reference those things in this project was a fun challenge.

<p>&nbsp;</p>

## Concept Sketch:


![concept sketch](https://i.imgur.com/Rc6RIsa.jpg "Connect Four Concept Sketch")

<p>&nbsp;</p>
<p>&nbsp;</p>

## Actual Game:

![actual game](https://i.imgur.com/RcYkiuq.png "Connect Four Actual Game")

<p>&nbsp;</p>
<p>&nbsp;</p>

## Minimum Viable Product:

1. A connect four board, a reset button, and the number of moves remaining for each side.
   
2. Game will display which color’s turn it currently is.
   
3. A click event will be tied to the board.
   
4. Clicking on any circle in the board will check current board state. 
   
5. A colored chip of the active turn will appear in lowest available spot of the column clicked.
   
6. The code will check the board to see if a winning condition is has been met.
   
7. If a winning combination has not been met, steps 2 -6 will repeat.
   
8. If a winning condition has been met, a winning message will display, and the game will end.
   
9.  Clicking the reset button will return the game to the state present at condition. 

<p>&nbsp;</p>


## Technology Utilized:

- JavaScript
- CSS
- HTML
- Git
- Animate.CSS

<p>&nbsp;</p>

## Stretch Goals:

- Page loads with a large play / start button. Clicking it displays board described in Step 1
  
- The remaining turn count is represented by the correct number of chips displayed at the bottom of the page instead of a number.
  
- A celebration display / sequence is triggered upon a win being detected. Details TBD.

- Drop down instructions on hot to play
  
- Animation of chips dropping into place.
  
- Anywhere the chip color is referenced, that text is the appropriate color.

- Refactor the code to use a more elegant solution when determining if there is a winner.

<p>&nbsp;</p>

## Hindsight Perspective:

Building the state array as a single array presented challenges that could have been avoided if a two dimensional array had been used instead.