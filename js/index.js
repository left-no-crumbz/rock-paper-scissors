// console.log("Hello World!");


let getComputerChoice = () => {
    const MAX = 4;
    const MIN = 1;
    const choice = Math.floor(Math.random() * (MAX - MIN) + MIN);


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
    const top = document.querySelector(".top");
    let score = document.querySelector("#score");

    console.log(score);
    console.log(score.textContent);
    // TODO: Implement game logic 

    function choose(choice) {
        switch(choice){
            // disables the clone to prevent spawning children
            case "Paper":
                const paperClone = paper.cloneNode(true);
                paperClone.style.display = "flex";
                container.appendChild(paperClone);
                container.style.flexDirection = "row";
                container.style.gap = "12rem";
                paperClone.disabled = true;
                break;
            case "Scissors":
                const scissorsClone = scissors.cloneNode(true);
                scissorsClone.style.display = "flex";
                container.appendChild(scissorsClone);
                container.style.flexDirection = "row";
                container.style.gap = "12rem";
                scissorsClone.disabled = true;
                break;
            case "Rock":
                const rockClone = rock.cloneNode(true);
                rockClone.style.display = "flex";
                container.appendChild(rockClone);
                container.style.flexDirection = "row";
                container.style.gap = "12rem";
                rockClone.disabled = true;
                break;
            default:
                // do nothing;
                break;
        
        }
    }

    const choice = getComputerChoice();
    switch(target.id){
        // disables the element to prevent spawning children
        case "paper":
            rpsContainer.style.backgroundImage = "none";
            text.style.display = "flex";
            scissors.style.display = "none";
            rock.style.display = "none";
            paper.disabled = true;
            choose(choice);
            break;
        case "scissors":
            rpsContainer.style.backgroundImage = "none";
            text.style.display = "flex";
            paper.style.display = "none";
            rock.style.display = "none";
            scissors.disabled = true;
            choose(choice);
            break;
        case "rock":
            // fixes the awkward space when rock is chosen
            // this is because I grouped paper and scissors together
            top.style.display = "none";

            rpsContainer.style.backgroundImage = "none";
            text.style.display = "flex";
            paper.style.display = "none";
            scissors.style.display = "none";
            rock.disabled = true;
            choose(choice);
            break;
        default:
            // do nothing
            break;
    }
    const upperHumanChoice = String(target.id).toLocaleUpperCase();
    const upperComputerChoice = String(choice).toLocaleUpperCase();
    let humanWinCondition = (upperHumanChoice === "ROCK" && upperComputerChoice === "SCISSORS" ||
    upperHumanChoice === "SCISSORS" && upperComputerChoice === "PAPER" ||
    upperHumanChoice === "PAPER" && upperComputerChoice === "ROCK");

    let ctr = 0;
    if(humanWinCondition) {
        console.log(ctr);
        ++ctr;
        score.textContent = `${ctr}`;
    }

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
