// console.log("Hello World!");


let getComputerChoice = () => {
    const choice = Math.floor(Math.random() * (max - min) + min);
    switch(choice) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
};

let container = document.querySelector(".buttons");
container.addEventListener("click", (event) => {
    const target = event.target;

    const rpsContainer = document.querySelector(".rps-container")
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");
    const rock = document.querySelector("#rock");
    const text = document.querySelector(".text");

    const body = document.querySelector("body");

    switch(target.id){
        case "paper":
            rpsContainer.style.backgroundImage = "none";
            text.style.display = "flex";
            scissors.style.display = "none";
            rock.style.display = "none";
            break;
        case "scissors":
            rpsContainer.style.backgroundImage = "none";
            text.style.display = "flex";
            paper.style.display = "none";
            rock.style.display = "none";
            break;
        case "rock":
            rpsContainer.style.backgroundImage = "none";
            text.style.display = "flex";
            paper.style.display = "none";
            scissors.style.display = "none";
            break;
    }
    body.appendChild(strDiv);
    body.appendChild(resultDiv);
});
// let getHumanChoice = () => prompt("Please enter a choice: ");

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//     let upperHumanChoice = humanChoice.toUpperCase();
//     let upperComputerChoice = computerChoice.toUpperCase();
    
//     let humanWinCondition = (upperHumanChoice === "ROCK" && upperComputerChoice === "SCISSORS" ||
//     upperHumanChoice === "SCISSORS" && upperComputerChoice === "PAPER" ||
//     upperHumanChoice === "PAPER" && upperComputerChoice === "ROCK");
    
//     console.log(`Human chose: ${upperHumanChoice}`);
//     console.log(`Computer chose: ${upperComputerChoice}`);
    
//     if (upperHumanChoice === upperComputerChoice) {
//         console.log(`Draw! ${upperHumanChoice} is equal to ${upperComputerChoice}`)
//     } else {
//         if (humanWinCondition) {
//             console.log(`You win! ${upperHumanChoice} beats ${upperComputerChoice}`)
//             humanScore++;
//         } else {
//             console.log(`You lose! ${upperComputerChoice} beats ${upperHumanChoice}`);
//             computerScore++;
//         }
//     }
    
// }

// function playGame() {

//     for (let i = 0; i < 5; i++){
        
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice(generateChoice(1, 3));
//         playRound(humanChoice, computerChoice);
//         console.log("====================================================")
//     }
    
//     console.log(`Human score: ${humanScore}`);
//     console.log(`Computer score: ${computerScore}`);
//     if (humanScore > computerScore) {
//         console.log(`You win!`);
//     } else if (humanScore < computerScore){
//         console.log(`You lose!`);
//     }
// }

// playGame();
