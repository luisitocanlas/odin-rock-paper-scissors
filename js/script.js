
function getComputerChoice () {
  const choices = ['Rock', 'Paper', 'Scissors']
  let randomIdx = Math.floor(Math.random() * choices.length)

  return choices[randomIdx]
}



