//main init
const cardList = ["fa fa-gem", "fa fa-gem", "fa fa-paper-plane", "fa fa-paper-plane", "fa fa-anchor", "fa fa-anchor", "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle", "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];
const cardItem = document.querySelector('.deck').children;
const startBtn = document.querySelector('#start');
const endBtn = document.querySelector('#end');
const restart = document.querySelector('.restart');
const score = document.querySelector('.stars').children;
const moves = document.querySelector('.moves');
const clockSel = document.querySelector('.clock');

let minute = 0;
let second = 0;
let movesCount = 0;
let shuffledCard = [];
let clock = null;
let clickedCards = [];
let matched = 0;
let stars = 3;
let endTime = '';

startGame();

//new game initialization
function init() {
	minute = 0;
	second = 0;
	movesCount = 0;
	shuffledCard = [];
	clock = null;
	clickedCards = [];
	matched = 0;
	stars = 3;
	endTime = '';
}

//score&move reset
function resetScore() {
	for (let i = 0; i < score.length; i++) {
		score[i].children[0].classList.value = 'fa fa-star';
	}
	movesCount = 0; //reset moves
	moves.innerHTML = movesCount;
}

//resetting the table
function resetTable() {
	shuffledCard = shuffle(cardList);
	for (let i = 0; i < cardItem.length; i++) {
		cardItem[i].children[0].classList.value = shuffledCard[i];
		cardItem[i].classList.value = 'card';
	};
}

//comparing clicked cards
function compareCards() {
	return (clickedCards[0] === clickedCards[1]) ? true : false;
}

//endgame modal print score and time
function endGame() {
	endBtn.style.display = 'inline';
	endBtn.innerHTML = `<span>CONGRATULATION!<br>
	YOU WON!</span><br><br>
	Your score: ${stars} star.<br>
	Your time: ${endTime}.<br><br>
	Click for the new game!`;
	endBtn.addEventListener('click', restartReset);
}

//add cards event listener + move counter + score indicator
function cardClick(e) {
	if (e.target.classList.value === 'card open show') {
		e.target.classList.value = 'card';
		clickedCards = [];
	} else if (e.target.classList.value === 'card') {
		e.target.classList.value = 'card open show';
		clickedCards.push(e.target.children[0].classList.value);
		
		if (clickedCards.length === 2) {
			if (compareCards()) {
				//matched cards
				for (let i = 0; i < cardItem.length; i++) {
					if (cardItem[i].classList.value === 'card open show') {
						cardItem[i].classList.value = 'card match show';
						cardItem[i].removeEventListener('click', cardClick);
						clickedCards = [];
						matched++;
						
						if (matched === 16) {
							window.clearInterval(clock);
							setTimeout(endGame, 800);
						};
					}
				};
			} else {
				//turn back unmatched cards
				setTimeout(function() {
					for (let i = 0; i < cardItem.length; i++) {
						if (cardItem[i].classList.value === 'card open show') {
							cardItem[i].classList.value = 'card';
							clickedCards = [];
						}
					};
				}, 500);
			}
		}
	}

	//move counter update
	movesCount++;
	moves.innerHTML = movesCount;

	//score update
	if (26 < movesCount && movesCount <= 36) {
		score[2].children[0].classList.value = 'far fa-star';
		stars = 2;
	} else if (movesCount > 36) {
		score[1].children[0].classList.value = 'far fa-star';
		stars = 1;
	}
}

//add card event listener
function cardEvent() {
	for (let i = 0; i < cardItem.length; i++) {
		cardItem[i].addEventListener('click', cardClick);
	};
}

function restartReset() {
	//stop timer
	window.clearInterval(clock);

	//remove cards event listener
	for (let i = 0; i < cardItem.length; i++) {
	cardItem[i].removeEventListener('click', cardClick);
	};

	//remove start button event listener
	startBtn.removeEventListener('click', starting);

	//remove end button event listener
	endBtn.removeEventListener('click', restartReset);

	clockSel.innerHTML = "00:00";
	startBtn.style.display = 'inline';	
	init();
	resetScore();
	startGame();
}

//restart button function
function restartFunc() {
	if (confirm('Restarting the game, your progress will be lost! Are you sure?')) {
		restartReset();
	};
}

function starting() {
	startBtn.style.display = 'none';
	//start timer
	clock = window.setInterval(timer, 1000);

	cardEvent();
	
	//add restart button event listener
	restart.addEventListener('click', restartFunc);
}

//start button action
function startGame() {
	resetTable();
	endBtn.removeEventListener('click', startGame);
	endBtn.style.display = 'none';
	startBtn.style.display = 'inline';
	startBtn.addEventListener('click', starting);
}

//timer function 
function timer() {
	let minutes = 0;
	let seconds = 0;
	second += 1;
	if (second >= 60) {
		minute += 1;
		second = 0;
	}
	minutes = minute;
	seconds = second;

	if (second < 10) {
		seconds = "0" + second;
	}

	if (minute < 10) {
		minutes = "0" + minute;
	}
		endTime = minutes + ":" + seconds;
	clockSel.innerHTML = endTime;
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}