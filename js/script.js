function getComputerChoice () {
  const choices = ['Rock', 'Paper', 'Scissors']
  let randomIdx = Math.floor(Math.random() * choices.length)

  return choices[randomIdx]
}

function playRound (playerSelection, computerSelection) {
  result = ''

  if (playerSelection === 'rock') {
    if (computerSelection === 'rock') {
      result = `It's a tie!`
    } else if (computerSelection === 'paper') {
      result = `Player loses the round!`
    } else if (computerSelection === 'scissors') {
      result = `Player wins the round!`
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      result = `Player wins the round!`
    } else if (computerSelection === 'paper') {
      result = `It's a tie!`
    } else if (computerSelection === 'scissors') {
      result = `Player loses the round!`
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'rock') {
      result = `Player loses the round!`
    } else if (computerSelection === 'paper') {
      result = `Player wins the round!`
    } else if (computerSelection === 'scissors') {
      result = `It's a tie!`
    }
  }

  return result
}

function playGame() {
  let roundsPlayed = 0
  let playerWins = 0
  let computerWins = 0

  let playerChoice
  let computerChoice

  while (roundsPlayed < 5) {
    let result
    computerChoice = getComputerChoice()
    computerChoice = computerChoice.toLowerCase()
    playerChoice = prompt(`Rock, Paper, Scissors? `)
    playerChoice = playerChoice.toLowerCase()

    console.log(`Player has ${playerChoice}`)
    console.log(`Computer has ${computerChoice}`)

    result = playRound(playerChoice, computerChoice)
    console.log(result)

    if (result === `Player wins the round!`) {
      playerWins++
    } else if (result === `Player loses the round!`) {
      computerWins++
    }

    console.log('')

    roundsPlayed++
  }

  console.log(`Player won ${playerWins} times.`)
  console.log(`Computer won ${computerWins} times.`)

  if (playerWins > computerWins) {
    console.log(`Player has won the game!`)
  } else if (playerWins < computerWins) {
    console.log(`Computer has won the game!`)
  } else if (playerWins === computerWins) {
    console.log(`It's a tie game!`)
  }
}
