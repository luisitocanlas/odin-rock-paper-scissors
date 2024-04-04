const btnContainer = document.querySelector('#btn-container');
const resultContainer = document.querySelector('#result-container');
let result = document.createElement('p');
let score = document.createElement('p');
let rounds = 0;
let playerWins = 0;
let computerWins = 0;

result.textContent = 'Select a button to start.';
resultContainer.appendChild(result);

score.textContent = ``;
resultContainer.appendChild(score);

function playGame(playerSelection) {
	console.log(`Player won ${playerWins} times.`);
	console.log(`Computer won ${computerWins} times.`);
	score.textContent = `Player won ${playerWins} times.\n
  Computer won ${computerWins} times.`;
}

function resetGame() {
	if (playerWins > computerWins) {
		console.log(`Player has won the game!`);
		result.textContent = `Player has won the game!`;
	} else if (playerWins < computerWins) {
		console.log(`Computer has won the game!`);
		result.textContent = `Computer has won the game!`;
	} else {
		console.log(`It's a tie game!`);
		result.textContent = `It's a tie game!`;
	}

	playerWins = 0;
	computerWins = 0;
	rounds = 0;
}

btnContainer.addEventListener('click', (e) => {
	let playerSelection = '';
	switch (e.target.id) {
		case 'btn-rock':
			playerSelection = 'rock';
			break;

		case 'btn-paper':
			playerSelection = 'paper';
			break;

		case 'btn-scissors':
			playerSelection = 'scissors';
			break;
	}

	if (rounds < 5) {
		playGame(playerSelection);
		rounds++;
	} else {
		resetGame();
	}
});

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * choices.length)];
}
