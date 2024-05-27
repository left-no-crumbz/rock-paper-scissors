// console.log("Hello World!");


let getComputerChoice = () => {
    const choice = Math.floor(Math.random() * (max - min) + min);
    switch(choice) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
};

let container = document.querySelector(".rps-container");
container.addEventListener("click", (event) => {
    const target = event.target;

    // alert(`${String(target.id).toUpperCase()} was clicked`);
    
    let paper = document.querySelector("#paper");
    paper.style.display = "none";

    let scissors = document.querySelector("#scissors");
    scissors.style.display = "none";


    let rock = document.querySelector("#rock");
    rock.style.display = "none";


    const body = document.querySelector("body");

    // hide the container;
    const resultDiv = document.createElement("div");
    const strDiv = document.createElement("div");
    
    strDiv.style.display = "flex";
    strDiv.style.margin = "2rem 0";
    strDiv.style.gap = "20rem";
    strDiv.style.justifyContent = "center";
    strDiv.style.alignItems = "center";


    const userStr = document.createElement("p");
    const compStr = document.createElement("p");


    userStr.textContent = "YOU CHOSE"
    compStr.textContent = "THE HOUSE PICKED"


    switch(target.id){
        case "paper":
            // container.style.display = "none";
            container.appendChild(userStr);
            container.appendChild(compStr);
            paper.style.display = "flex";
            // let paper = document.querySelector("#paper");
            // container.appendChild(paper);
            break;
        case "scissors":
            // container.style.display = "none";
            strDiv.appendChild(userStr);
            strDiv.appendChild(compStr);
            let scissors = document.querySelector("#scissors");
            container.appendChild(scissors);
            break;
        case "rock":
            // container.style.display = "none";
            strDiv.appendChild(userStr);
            strDiv.appendChild(compStr);
            let rock = document.querySelector("#rock");
            container.appendChild(rock);
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
