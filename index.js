//* Sets player's selected choice
function selectChoice() {
  return new Promise((resolve) => {
    const choices = document.querySelectorAll(".choice");

    choices.forEach((choice) => {
      choice.addEventListener("click", () => {
        resolve(choice.classList.add("selected"));
      });
    });
  });
}

//*Removes player's selected choice
function removeChoice(choice) {
  choice.classList.remove("selected");
}

//* Gets player's choice
async function getPlayerChoice() {
  await selectChoice(); //waits for the player to select before continueing

  const selectedChoice = document.querySelector(".selected");

  let choice = selectedChoice.getAttribute("id");

  removeChoice(selectedChoice);

  console.log(`Player: ${choice}`);
  return choice;
}

//* Diplays player's choice
function displayPlayerChoice(playerChoice) {
  const playerHand = document.querySelector(".hands__player");
  if (playerChoice == "Rock") {
    playerHand.src = "./images/rock.png";
  } else if (playerChoice == "Paper") {
    playerHand.src = "./images/paper.png";
  } else if (playerChoice == "Scissors") {
    playerHand.src = "./images/scissors.png";
  }
}

//* Gets computer's choice
function getComputerChoice() {
  let number = Math.floor(Math.random() * 3) + 1;

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

  console.log(`Computer: ${choice}`);
  return choice;
}

//* Displays computer's choice
function displayComputerChoice(computerChoice) {
  const computerHand = document.querySelector(".hands__computer");
  if (computerChoice == "Rock") {
    computerHand.src = "./images/rock.png";
  } else if (computerChoice == "Paper") {
    computerHand.src = "./images/paper.png";
  } else if (computerChoice == "Scissors") {
    computerHand.src = "./images/scissors.png";
  }
}

//* Decides who wons the round
function decideWinner(player, computer) {
  let result;

  if (player == "Rock") {
    if (computer == "Rock") result = "Draw!";
    if (computer == "Paper") result = "Computer wins!";
    if (computer == "Scissors") result = "Player wins!";
  } else if (player == "Paper") {
    if (computer == "Paper") result = "Draw!";
    if (computer == "Scissors") result = "Computer wins!";
    if (computer == "Rock") result = "Player wins!";
  } else if (player == "Scissors") {
    if (computer == "Scissors") result = "Draw!";
    if (computer == "Rock") result = "Computer wins!";
    if (computer == "Paper") result = "Player wins!";
  }

  return result;
}

//* Displays the winner
function displayWinner(result) {
  const winner = document.querySelector(".winner");

  winner.textContent = result;
  if (result == "Player wins!") winner.style.color = "#a01a58";
  if (result == "Computer wins!") winner.style.color = "#1780a1";
  if (result == "Draw!") winner.style.color = "#0F0F0F";
}

//* Updates the scores
function updateScore(winner) {
  winner = winner.split(" ");

  if (winner[0] == "Player") {
    playerScore++;
    document.querySelector("#playerScore").textContent = playerScore;
  } else if (winner[0] == "Computer") {
    computerScore++;
    document.querySelector("#computerScore").textContent = computerScore;
  }
}

let playerScore = 0;
let computerScore = 0;

//* Plays 1 round until one reaches 5 wins
async function playRound() {
  let player = await getPlayerChoice();

  displayPlayerChoice(player);

  let computer = getComputerChoice();

  displayComputerChoice(computer);

  let winner = decideWinner(player, computer);

  displayWinner(winner);

  updateScore(winner);

  if (playerScore < 5 && computerScore < 5) {
    playRound();
  } else {
    if (playerScore == 5) {
      console.log("Player wins the game!");
    } else if (computerScore == 5) {
      console.log("Computer wins the game!");
    }
  }
}

playRound();
