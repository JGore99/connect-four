# **Connect Four** 

## Objective -

To create a browser based game that accurately imitates the board game Connect Four as it was when I was a kid. 

## Link to Game -

To play the game, 
[here](https://jgore99.github.io/connect-four/)

## Motivation -
There are two main reasons why I chose to build this game specifically. 
- First: I wanted to build on the concepts we learned when we built Tic Tac Toe.
  
- Second: Connect Four is a game I played as a kid. I have very clear memories and associations with it. The colors, the chips, even the box art, are all things I could describe from memory. Attempting to reference those things in this project was a fun challenge.


## Concept Sketch -

Inline-style: 
![concept sketch](https://i.imgur.com/Rc6RIsa.jpg "Connect Four Concept Sketch")

## Actual Game -

![actual game](https://i.imgur.com/RcYkiuq.png "Connect Four Actual Game")

## Minimum Viable Product -

1. A connect four board, a reset button, and the number of moves remaining for each side is visible.
   
2. Game will display which color’s turn it currently is.
   
3. A click event will be tied to the board.
   
4. Clicking on any circle in the board will check current board state. 
   
5. A colored chip of the active turn will appear in lowest available spot of the column clicked.
   
6. The code will check the board to see if a winning condition is has been met.
   
7. If a winning combination has not been met, steps 2 -6 will repeat.
   
8. If a winning condition has been met, a winning message will display, and the game will end.
   
9.  Clicking the reset button will return the game to the state present at condition. 

## Technology Utilized:

- JavaScript
- CSS
- HTML
- Git
- Animate.CSS

## Stretch Goals -

- Page loads with a large play / start button. Clicking it displays board described in Step 1
  
- The correct number of colored chips represent each side’s remaining turns. Is displayed at the bottom of the page
  
- A celebration display / sequence is triggered upon a win being detected. Details TBD.

- Drop down instructions
  
- Animation of chips dropping into place.
  
- Any time the chip color is referenced, that text is the appropriate color.

- Refactor the code to use a more elegant solution when determining if there is a winner.


## Hindsight Perspective

Building the state array as a single array presented challenges that could have been avoided if a two dimensional array had been used instead.