let userInput = 'rock'; //Rock, paper or stone

userInput = userInput.toLowerCase();

// User Choice
const getUserChoice = userInput =>{ if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
  return userInput;
} else {
  console.log('You entered a wrong choice');
}
}

// Computer Choice
getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3)
  if(randomNum === 1) {
    return 'rock';
  } 
  else if(randomNum === 2) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

// winner
determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'The game is a tie!'
  }

  if (userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Computer Won!';
    } 
    else if(userChoice === 'rock') {
      if(computerChoice === 'scissors')
      return 'You won';
    }
  }

   if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Computer Won!';
    } else if(userChoice == 'paper') {
      if(computerChoice === 'rock')
      return 'You won';
    }
  }

   if (userChoice === 'scissors') {
    if(computerChoice === 'paper') {
      return 'You Won!';
    } 
    else if (userChoice === 'scissors') {
      if(computerChoice === 'rock') {
      return 'Computer won';
    }
  }
}

}



// Play Game
const playGame = () => {

    const userChoice = getUserChoice('rock');
    console.log('User', userChoice)
    const computerChoice = getComputerChoice();
    console.log('Computer', computerChoice)

    determineWinner(userChoice, computerChoice)

    console.log(determineWinner(userChoice, computerChoice) )

}

playGame()

