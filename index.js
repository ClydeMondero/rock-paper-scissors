function getComputerChoice() {
  let number = Math.floor(Math.random() * 3) + 1;

  switch (number) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
  }

  return choice;
}

let playerScore = 0;
let computerScore = 0;
function playRound(player, computer) {
  let result;

  if (player == computer) {
    result = "Draw!";
  } else if (player == "rock" && computer == "paper") {
    result = "You Lose! Paper beats Rock";
    computerScore++;
  } else if (player == "rock" && computer == "scissors") {
    result = "You Win! Rock beats Scissors";
    playerScore++;
  } else if (player == "paper" && computer == "scissors") {
    result = "You Lose! Scissors beats Paper";
    computerScore++;
  } else if (player == "paper" && computer == "rock") {
    result = "You Win! Paper beats Rock";
    playerScore++;
  } else if (player == "scissors" && computer == "rock") {
    result = "You Lose! Rock beats Scissors";
    computerScore++;
  } else if (player == "scissors" && computer == "paper") {
    result = "You Win! Scissors beats Paper";
    playerScore++;
  }

  return result;
}

function gameResult(playerScore, computerScore) {
  if (playerScore == computerScore) {
    console.log("Draw!");
  } else if (playerScore > computerScore) {
    console.log("Player Wins!");
  } else if (computerScore > playerScore) {
    console.log("Computer Wins!");
  }
}

function game() {
  while (playerScore < 5 && computerScore < 5) {
    let playerSelection = prompt("Enter your choice").toLowerCase();
    let computerSelection = getComputerChoice();

    console.log("Player's choice: " + playerSelection);
    console.log("Computer's choice: " + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player's score: ${playerScore}`);
    console.log(`Computer's score: ${computerScore}`);
  }

  gameResult(playerScore, computerScore);
}

game();
