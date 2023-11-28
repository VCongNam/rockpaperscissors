let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  updateScore();
  // if (!score){
  //   score = {
  //     wins: 0,
  //     losses: 0,
  //     ties: 0
  //   };
  // }

  function playGame(player) {
    if (player === "Scissors") {
      if (computerMove === "rock") {
        result = "You lose.";
      } else if (computerMove === "paper") {
        result = "You win.";
      } else if (computerMove === "scissors") {
        result = "Tie.";
      }
    } else if (player === "Paper") {
      if (computerMove === "rock") {
        result = "You win.";
      } else if (computerMove === "paper") {
        result = "Tie.";
      } else if (computerMove === "scissors") {
        result = "You lose.";
      }
    } else if (player === "Rock") {
      if (computerMove === "rock") {
        result = "Tie.";
      } else if (computerMove === "paper") {
        result = "You lose.";
      } else if (computerMove === "scissors") {
        result = "You win.";
      }
    }
    if (result === "You win.") {
      score.wins += 1;
    } else if (result === "You lose.") {
      score.losses += 1;
    } else if (result === "Tie.") {
      score.ties += 1;
    }

    updateScore();

    document.querySelector(".js-result").innerHTML = result;

    document.querySelector(
      ".js-moves"
    ).innerHTML = `You: <img class="move-icon" src="${player}-emoji.png"> - Com: <img class="move-icon" src="${computerMove}-emoji.png">`;
  }

  function updateScore() {
    document.querySelector(
      ".js-score"
    ).innerHTML = `Total wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}.`;
  }
  let computerMove = "";
  let result = "";
  function PickcomMove() {
    const randomNumber = Math.random();
    
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissors";
    }
  }
  