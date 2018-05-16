# Memory Game Project
This game is the 3rd project of the Google Developer Scholarship Front End Developer Nanodegree course. This is a classical memory card game where you should find pairing cards.

## Table of Contents

* [Development](#development)
* [Rules](#rules)
* [Contributing](#contributing)

## Development

### Starting conditions
It was given some starter code:
- an HTML file,
- a CSS file with styling,
- a JS file with a given shuffle function (http://stackoverflow.com/a/2450976)

The goal was to made an interactive memory game.

### Used technologies
- HTML5
- CSS3
- core Javascript
- Font Awesome icons
- Google Fonts

### Game behavior
- The game randomly shuffles the cards. A user wins once all cards have successfully been matched.
- When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It also tell the user how much time it took to win the game, and what the star rating was.
- The restart button allows the player to reset the game board, the timer, and the star rating.
- The game displays a star rating (from 1 to 3) that reflects the player's performance.
- When the player starts a game, a displayed timer also start.
- Game displays the current number of moves a user has made.


The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Rules

The goal of the game is to find 8 pairing cards. You can click a card and it reveals its symbol, then you can click another card and it reveals its symbol too. If the two cards match, you found a pair and the cards stay revealed, if not the cards turn back. The game will end when all the 8 pairs is found.
The game counts your moves. The revealing two cards count as one move. If you use an amount of moves you lose one star and later another one. The better is to accomplish the game with the least moves. You can see your score, moves and your time in the top of the game. 
You can restart the game at any time with the restart button on the top right corner. When the game end, you can see your score and time.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md). 
