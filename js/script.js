function getComputerChoice () {
  const choices = ['Rock', 'Paper', 'Scissors']
  let randomIdx = Math.floor(Math.random() * choices.length)

  return choices[randomIdx]
}

function playRound (playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase()
  let computer = computerSelection.toLowerCase()

  result = ''

  if (player === 'rock') {
    if (computer === 'rock') {
      result = `It's a tie!`
    } else if (computer === 'paper') {
      result = `Player loses!`
    } else if (computer === 'scissors') {
      result = `Player wins!`
    }
  } else if (player === 'paper') {
    if (computer === 'rock') {
      result = `Player wins!`
    } else if (computer === 'paper') {
      result = `It's a tie!`
    } else if (computer === 'scissors') {
      result = `Player loses!`
    }
  } else if (player === 'scissors') {
    if (computer === 'rock') {
      result = `Player loses!`
    } else if (computer === 'paper') {
      result = `Player wins!`
    } else if (computer === 'scissors') {
      result = `It's a tie!`
    }
  }

  return result
}

let playerSelection = 'Rock'
let computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))
