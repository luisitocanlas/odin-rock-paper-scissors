const btnContainer = document.querySelector('#btn-container');
const resultContainer = document.querySelector('#result-container');
let result = document.createElement('p');
let score = document.createElement('p');
let rounds = 1;
let playerWins = 0;
let computerWins = 0;

result.textContent = 'Select a button to start.';
resultContainer.appendChild(result);
resultContainer.appendChild(score);

function playGame(playerSelection) {
	const computerSelection = getComputerChoice();

	const outcomes = {
		rock: {
			rock: `It's a tie.`,
			paper: `Computer wins.`,
			scissors: `You win.`,
		},
		paper: {
			rock: `You win.`,
			paper: `It's a tie.`,
			scissors: `Computer wins.`,
		},
		scissors: {
			rock: `Computer wins.`,
			paper: `You win.`,
			scissors: `It's a tie.`,
		},
	};
	const resultText = outcomes[playerSelection][computerSelection];

	if (resultText.includes('You win')) {
		playerWins++;
	} else if (resultText.includes('Computer wins')) {
		computerWins++;
	}

	score.textContent = `Round #: ${rounds}. Player won ${playerWins} times. Computer won ${computerWins} times.`;
	result.textContent = resultText;
}

function resetGame() {
	score.textContent = `Thank you for playing! Click on a button to start a new game.`;

	result.textContent =
		playerWins > computerWins
			? `Player has won the game!`
			: playerWins < computerWins
			? `Computer has won the game!`
			: `It's a tie game!`;

	playerWins = 0;
	computerWins = 0;
	rounds = 1;
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

	console.log(`Round #: ${rounds}`);
	console.log(`Player win #: ${playerWins}`);
	console.log(`Computer win #: ${computerWins}`);
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
