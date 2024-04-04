function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
	const result = {
		rock: {
			rock: `It's a tie!`,
			paper: `Player loses the round!`,
			scissors: `Player wins the round!`,
		},
		paper: {
			rock: `Player wins the round!`,
			paper: `It's a tie!`,
			scissors: `Player loses the round!`,
		},
		scissors: {
			rock: `Player loses the round!`,
			paper: `Player wins the round!`,
			scissors: `It's a tie!`,
		},
	};

	roundResult.textContent = result[playerSelection][computerSelection];
}

function playGame() {
	let playerWins = 0;
	let computerWins = 0;

	console.log(`Player won ${playerWins} times.`);
	console.log(`Computer won ${computerWins} times.`);

	if (playerWins > computerWins) {
		console.log(`Player has won the game!`);
	} else if (playerWins < computerWins) {
		console.log(`Computer has won the game!`);
	} else {
		console.log(`It's a tie game!`);
	}
}

const btnContainer = document.querySelector('#btn-container');
const resultContainer = document.querySelector('#result-container');
let roundResult = document.createElement('p');
let score = document.createElement('p');

btnContainer.addEventListener('click', (e) => {
	let playerSelection = '';
	switch (e.target.id) {
		case 'btn-rock':
			console.log('rock');
			playerSelection = 'rock';
			break;

		case 'btn-paper':
			console.log('paper');
			playerSelection = 'paper';
			break;

		case 'btn-scissors':
			console.log('scissors');
			playerSelection = 'scissors';
			break;
	}

	playRound(playerSelection, getComputerChoice());
	resultContainer.append(roundResult);
});
