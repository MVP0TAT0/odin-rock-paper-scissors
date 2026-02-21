// Gets computer choice randomly selected between 3 options
function getComputerChoice() {
  // Generates the numbers 1, 2 and 3 randomly
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    return "ROCK";
  } else if (computerChoice === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

// Gets human choice by prompting an answer between rock, paper,
// and scissors (case insensitive)
function getHumanChoice() {
  let humanChoice = prompt("Choose your weapon");
  humanChoice = humanChoice.toUpperCase();

  if (humanChoice === "ROCK") {
    return "ROCK";
  } else if (humanChoice === "PAPER") {
    return "PAPER";
  } else if (humanChoice === "SCISSORS") {
    return "SCISSORS";
  }
}

// Determines the result between the choices made by the human and computer
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "ROCK") {
    if (computerChoice === "ROCK") {
      console.log("It's a tie!");
      return "TIE";
    } else if (computerChoice === "PAPER") {
      console.log("You lose! Paper beats Rock!");
      return "COMPUTER";
    } else if (computerChoice === "SCISSORS") {
      console.log("You win! Rock beats Paper!");
      return "PLAYER";
    }
  } else if (humanChoice === "PAPER") {
    if (computerChoice === "ROCK") {
      console.log("You win! Paper beats Rock!");
      return "PLAYER";
    } else if (computerChoice === "PAPER") {
      console.log("It's a tie!");
      return "TIE";
    } else if (computerChoice === "SCISSORS") {
      console.log("You lose! Scissors beats Paper!");
      return "COMPUTER";
    }
  } else if (humanChoice === "SCISSORS") {
    if (computerChoice === "ROCK") {
      console.log("You lose!, Rock beats Scissors!");
      return "COMPUTER";
    } else if (computerChoice === "PAPER") {
      console.log("You win! Scissors beat Paper!");
      return "PLAYER";
    } else if (computerChoice === "SCISSORS") {
      console.log("It's a tie!");
      return "TIE";
    }
  }
}

// Main function that plays the game
function playGame() {
  // Initial scores
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log("Round: " + i);
    const round = playRound(getHumanChoice(), getComputerChoice());

    if (round === "COMPUTER") {
      computerScore += 1;
    } else if (round === "PLAYER") {
      playerScore += 1;
    }

    console.log(playerScore);
    console.log(computerScore);
  }
}

playGame();
