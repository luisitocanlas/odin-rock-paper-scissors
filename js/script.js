function getComputerChoice() {
	const choices = ['Rock', 'Paper', 'Scissors'];
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

	return result[playerSelection][computerSelection];
}

function playGame() {
	let playerWins = 0;
	let computerWins = 0;

	for (let roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
		let playerChoice;
		let computerChoice = getComputerChoice().toLowerCase();

		do {
			playerChoice = prompt('Rock, Paper, Scissors? ');
			if (playerChoice === null) {
				console.log('Player canceled the game.');
				return;
			}
			playerChoice = playerChoice.toLowerCase();
		} while (!['rock', 'paper', 'scissors'].includes(playerChoice));

		console.log(`Player has ${playerChoice}`);
		console.log(`Computer has ${computerChoice}`);

		let result = playRound(playerChoice, computerChoice);
		console.log(result);

		if (result.includes('Player wins')) {
			playerWins++;
		} else if (result.includes('Player loses')) {
			computerWins++;
		}

		console.log('');
	}

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
