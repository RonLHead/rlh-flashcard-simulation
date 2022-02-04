Abstract at the top (A sentence or two describing the project)
A GIF of the working application
Technologies used
Install/Setup instructions

# FlashCards Simulation
<p align="center">
  <img width=400 height=600 src="assets/flashcard_screenshot.JPG">
</p>

This project simulates a FlashCard game using the command line through the terminal. 
## Contributor
- [Ron Head](https://github.com/RonLHead)

## Technologies Used
- JavaScript
- Html
- CSS

## [Deploy Link](https://github.com/RonLHead/rlh-tic-tac-toe)

## Instructions For Use

- Index.html will open a new Tic-Tac-Toe game on the user's browser.
- The new game will display an empty grid of nine boxes (arranged in three rows and three columns). A new game will default to Player One's turn first, which will display under the heading.
- Player One goes first by clicking one of the empty boxes. Player One's token is a star symbol, which will fill the box that the user clicks.

<p align="center">
  <img width=120 height=100 src="assets/tic-tac-toe-p1-token.jpg">
</p>

- It will be Player Two's turn next (this message will display in the subheading). Just like in the previous step, Player Two can click on any empty box, which will fill it with Player Two's token, a white square.

<p align="center">
  <img width=120 height=100 src="assets/tic-tac-toe-p2-token.jpg">
</p>

- This back-and-forth sequence will continue until one of two outcomes occur:
  1. A player fills three boxes in a row with their respective token in three possible directions:
    - Horizontal
    - Vertical
    - Diagonal
  2. All boxes are clicked and filled but no player has three in a row, resulting in a tie game

1. In the case of the first outcome, the game pauses with the winning row highlighted on the game grid and the winning player displayed in the subheading. The winning player's score is incremented in their respective section of the game (Player One above the game grid and Player Two below). After roughly five seconds, the tokens are cleared and a new game ensues.
<p align="center">
  <img width=400 height=600 src="assets/tic-tac-toe-gameplay.gif">
</p>

2. In the case of the second outcome, the game pauses and the subheading displays a tie game. No player's score increments. After roughly five seconds, a new game ensues with the next player's turn up first.

<p align="center">
  <img width=400 height=600 src="assets/tic-tac-toe-tiegame.gif">
</p>
- Each player's score will continue to increment as the game continues. The scores will reset to zero once the user refreshes the browser.

## Future Additions
- Implement local storage to save and display the scores of previous games.
- Allow users to select their own unique tokens from a list of tokens.
