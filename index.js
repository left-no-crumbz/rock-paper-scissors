console.log("Hello World!");

let generateChoice = (min, max) => Math.floor(Math.random() * (max - min) + min);

function getComputerChoice(choice) {
    switch(choice) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

let getHumanChoice = () => prompt("Please enter a choice: ");

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let upperHumanChoice = humanChoice.toUpperCase();
    let upperComputerChoice = computerChoice.toUpperCase();
    
    let humanWin = (upperHumanChoice === "ROCK" && upperComputerChoice === "SCISSORS" ||
    upperHumanChoice === "SCISSORS" && upperComputerChoice === "PAPER" ||
    upperHumanChoice === "PAPER" && upperComputerChoice === "ROCK");
    
    console.log(`Human chose: ${upperHumanChoice}`);
    console.log(`Computer chose: ${upperComputerChoice}`);

    let result = upperHumanChoice === upperComputerChoice ?
        console.log(`Draw! ${upperHumanChoice} is equal to ${upperComputerChoice}`) :
        win = humanWin ? humanScore++ : computerScore++;
        
    
    if (humanScore > computerScore) {
        console.log(`You win! ${upperHumanChoice} beats ${upperComputerChoice}`);
    } else if (humanScore < computerScore){
        console.log(`You lose! ${upperComputerChoice} beats ${upperHumanChoice}`);
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice(generateChoice(1, 3));
playRound(humanChoice, computerChoice);