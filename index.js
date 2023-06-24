// let playerScore = 0;
// let computerScore = 0;
// function playRound(player, computer) {
//   let result;

//   if (player == computer) {
//     result = "Draw!";
//   } else if (player == "rock" && computer == "paper") {
//     result = "You Lose! Paper beats Rock";
//     computerScore++;
//   } else if (player == "rock" && computer == "scissors") {
//     result = "You Win! Rock beats Scissors";
//     playerScore++;
//   } else if (player == "paper" && computer == "scissors") {
//     result = "You Lose! Scissors beats Paper";
//     computerScore++;
//   } else if (player == "paper" && computer == "rock") {
//     result = "You Win! Paper beats Rock";
//     playerScore++;
//   } else if (player == "scissors" && computer == "rock") {
//     result = "You Lose! Rock beats Scissors";
//     computerScore++;
//   } else if (player == "scissors" && computer == "paper") {
//     result = "You Win! Scissors beats Paper";
//     playerScore++;
//   }

//   return result;
// }

// function gameResult(playerScore, computerScore) {
//   if (playerScore == computerScore) {
//     console.log("Draw!");
//   } else if (playerScore > computerScore) {
//     console.log("Player Wins!");
//   } else if (computerScore > playerScore) {
//     console.log("Computer Wins!");
//   }
// }

// function game() {
//   while (playerScore < 5 && computerScore < 5) {
//     //TODO: use buttons inseated of prompt
//     let playerSelection = prompt("Enter your choice").toLowerCase();
//     let computerSelection = getComputerChoice();

//     console.log("Player's choice: " + playerSelection);
//     console.log("Computer's choice: " + computerSelection);
//     console.log(playRound(playerSelection, computerSelection));
//     console.log(`Player's score: ${playerScore}`);
//     console.log(`Computer's score: ${computerScore}`);
//   }

//   gameResult(playerScore, computerScore);
// }

// game();

//* Gets the player's choice
function getPlayerChoice(computer) {
  const choices = document.querySelectorAll(".choice");

  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      console.log(choice.textContent);
      computer();
    });
  });
}

//* Gets the computer's choice
function getComputerChoice() {
  //* 1. Get a random number from 1-3
  const number = Math.floor(Math.random() * 3) + 1;

  //* 2. Set the choice corresponding to the random number
  let choice;
  switch (number) {
    case 1:
      choice = "Rock";
      break;
    case 2:
      choice = "Paper";
      break;
    case 3:
      choice = "Scissors";
      break;
  }

  console.log(choice);
}

//* Decided who wins the round
//* First to 5 wins

//* Gets the computer's choice when the player's choice is decided
getPlayerChoice(getComputerChoice);
