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
    
    let humanWinCondition = (upperHumanChoice === "ROCK" && upperComputerChoice === "SCISSORS" ||
    upperHumanChoice === "SCISSORS" && upperComputerChoice === "PAPER" ||
    upperHumanChoice === "PAPER" && upperComputerChoice === "ROCK");
    
    console.log(`Human chose: ${upperHumanChoice}`);
    console.log(`Computer chose: ${upperComputerChoice}`);

    // let _ = upperHumanChoice === upperComputerChoice ?
    //     console.log(`Draw! ${upperHumanChoice} is equal to ${upperComputerChoice}`) :
    //     win = humanWinCondition ? console.log(`You win! ${upperHumanChoice} beats ${upperComputerChoice}`) : 
    //     console.log(`You lose! ${upperComputerChoice} beats ${upperHumanChoice}`);
    
    if (upperHumanChoice === upperComputerChoice) {
        console.log(`Draw! ${upperHumanChoice} is equal to ${upperComputerChoice}`)
    } else {
        if (humanWinCondition) {
            console.log(`You win! ${upperHumanChoice} beats ${upperComputerChoice}`)
            humanScore++;
        } else {
            console.log(`You lose! ${upperComputerChoice} beats ${upperHumanChoice}`);
            computerScore++;
        }
    }
    
}

function playGame() {

    for (let i = 0; i < 5; i++){
        
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice(generateChoice(1, 3));
        playRound(humanChoice, computerChoice);
        console.log("====================================================")
    }
    
    console.log(`Human score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log(`You win!`);
    } else if (humanScore < computerScore){
        console.log(`You lose!`);
    }
}

playGame();
