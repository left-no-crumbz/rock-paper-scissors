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
    const score = document.querySelector("#score");
    const userText = document.querySelector(".user-text");
    const compText = document.querySelector(".computer-text");
    // const top = document.querySelector(".top");
    const user = document.querySelector(".user");
    const computer = document.querySelector(".computer");

    function choose(choice) {
        userText.style.display = "flex";
        compText.style.display = "flex";

        let computerChoice;
        switch(choice){
            // disables the clone to prevent spawning children
            case "Paper":
                computerChoice = paper.cloneNode(true);
                break;
                case "Scissors":
                computerChoice = scissors.cloneNode(true);
                break;
            case "Rock":
                computerChoice = rock.cloneNode(true);
                break;
            default:
                // do nothing;
                break;
            }
        if (computerChoice){
            computer.appendChild(computerChoice);
            computerChoice.disabled = true;
        }
    }
    const choice = getComputerChoice();
    
    let userChoice;
    switch(target.id){
        // disables the element to prevent spawning children
        case "paper":
            rpsContainer.style.display = "none";
            // rpsContainer.style.backgroundImage = "none";
            // text.style.display = "flex";
            // scissors.style.display = "none";
            // rock.style.display = "none";
            userChoice = paper.cloneNode(true);

            // paper.disabled = true;
            choose(choice);
            decideWinner();
            break;
        case "scissors":
            rpsContainer.style.display = "none";

            // rpsContainer.style.backgroundImage = "none";
            // text.style.display = "flex";
            // paper.style.display = "none";
            // rock.style.display = "none";
            // scissors.disabled = true;
            userChoice = scissors.cloneNode(true);
            choose(choice);
            decideWinner();
            break;
        case "rock":
            // fixes the awkward space when rock is chosen
            // this is because I grouped paper and scissors together
            // top.style.display = "none";
            rpsContainer.style.display = "none";
            // rpsContainer.style.backgroundImage = "none";
            // text.style.display = "flex";
            // paper.style.display = "none";
            // scissors.style.display = "none";
            // rock.disabled = true;
            userChoice = rock.cloneNode(true);
            choose(choice);
            decideWinner();
            break;
        default:
            // do nothing
            break;
    }

    if(userChoice){
        user.appendChild(userChoice);
        userChoice.disabled = true;
    }

    function decideWinner(){
        const resultDiv = document.createElement("div");
        const resultParagraph = document.createElement("p");
        const playAgain = document.createElement("button");
    
        resultDiv.appendChild(resultParagraph);
        resultDiv.append(playAgain);
        
        resultParagraph.style.fontSize = "3rem";
        resultParagraph.style.fontWeight = "700";
    
        playAgain.style.padding = "2rem 4rem";
        playAgain.textContent = "PLAY AGAIN";
        playAgain.style.fontSize = "1rem";
        playAgain.style.backgroundColor = "white";
        playAgain.style.color = "var(--dark-text)";


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
            resultParagraph.textContent = "YOU WIN";        
        } else {
            resultParagraph.textContent = "YOU LOSE";        
        }
        
        container.insertBefore(resultDiv, container.lastChild);
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
