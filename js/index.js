// REVAMP

const rpsContainer = document.querySelector(".rps-container")
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const rock = document.querySelector("#rock");
const score = document.querySelector("#score");
const userText = document.querySelector(".user-text");
const compText = document.querySelector(".computer-text");

const user = document.querySelector(".user");
const computer = document.querySelector(".computer");

const resultDiv = document.querySelector(".result");
const resultsContainer = document.querySelector(".results-container");
const resultText = document.querySelector("#result-text");
const playAgainBtn = document.querySelector("#play-again");

let userChoice;
let computerChoice;

const getComputerChoice = () => {
    const choices = ["ROCK", "SCISSORS", "PAPER"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function decideWinner(userChoice, computerChoice){
    const winConditions = {
        ROCK: "SCISSORS",
        SCISSORS: "PAPER",
        PAPER: "ROCK"
    };

    let ctr = parseInt(score.textContent);
    if (userChoice === computerChoice){
        resultText.textContent = "DRAW";
    } else if (winConditions[userChoice] === computerChoice) {
        score.textContent = `${++ctr}`;
        resultText.textContent = "YOU WIN";
    } else {
        resultText.textContent = "YOU LOSE";
    }
    user.appendChild(userText);
    computer.appendChild(compText);
}

function handleUserChoice(choice){
    // clone the user button choice
    switch(choice){
        case "PAPER":
            userChoice = paper.cloneNode(true);
            break;
        case "SCISSORS":
            userChoice = scissors.cloneNode(true);
            break;
        case "ROCK":
            userChoice = rock.cloneNode(true);
            break;
        default:
            // do nothing
            break;
    }

    const computerChoiceStr = getComputerChoice();
    switch(computerChoiceStr){
        case "PAPER":
            computerChoice = paper.cloneNode(true);
            break;
        case "SCISSORS":
            computerChoice = scissors.cloneNode(true);
            break;
        case "ROCK":
            computerChoice = rock.cloneNode(true);
            break;
        default:
            // do nothing
    }

    
    decideWinner(choice, computerChoiceStr);
    
    user.appendChild(userChoice);
    computer.appendChild(computerChoice);
    
    rpsContainer.style.display = "none";
    resultsContainer.style.display = "flex";
    resultDiv.style.display = "flex";
    userText.style.display = "flex";
    compText.style.display = "flex";

    userText.hidden = false;
    compText.hidden = false;

}

function resetGame() {
    rpsContainer.style.display = "flex";
    resultsContainer.style.display = "none";
    resultDiv.style.display = "none";
    userText.hidden = true;
    compText.hidden = true;

    resultText.textContent = "";

    console.log(user.innerHTML);
    console.log(computer.innerHTML);

    user.innerHTML = "";
    computer.innerHTML = "";

    userChoice = null;
    computerChoice = null;
}

// Event listeners for user choices
document.querySelectorAll(".buttons button").forEach((button) => {
    button.addEventListener("click", () => {
        handleUserChoice(String(button.id).toLocaleUpperCase());
    });
});

playAgainBtn.addEventListener("click", resetGame);
