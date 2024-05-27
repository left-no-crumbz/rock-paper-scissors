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
    const resultDiv = document.querySelector(".result");
    function computerChoose(choice) {
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
    
    function userChoose(choice){
        let userChoice;
        switch(target.id){
            case "paper":
                rpsContainer.style.display = "none";
                userChoice = paper.cloneNode(true);
                computerChoose(choice);
                decideWinner();
                break;
            case "scissors":
                rpsContainer.style.display = "none";
                userChoice = scissors.cloneNode(true);
                computerChoose(choice);
                decideWinner();
                break;
            case "rock":
                rpsContainer.style.display = "none";
                userChoice = rock.cloneNode(true);
                computerChoose(choice);
                decideWinner();
                break;
                default:
                    // do nothing
                break;
        }
        if(userChoice){
            user.appendChild(userChoice);
            // disables the element to prevent spawning children
            userChoice.disabled = true;
        }
    }
    function decideWinner(){
        resultDiv.style.display = "flex";
        const resultText = document.querySelector("#result-text");
        const upperHumanChoice = String(target.id).toLocaleUpperCase();
        const upperComputerChoice = String(choice).toLocaleUpperCase();
        let humanWinCondition = (upperHumanChoice === "ROCK" && upperComputerChoice === "SCISSORS" ||
        upperHumanChoice === "SCISSORS" && upperComputerChoice === "PAPER" ||
        upperHumanChoice === "PAPER" && upperComputerChoice === "ROCK");
    
        let ctr = 0;
        if(upperHumanChoice === upperComputerChoice) {
            resultText.textContent = "DRAW";        
        } else if (humanWinCondition){
            console.log(ctr);
            ++ctr;
            score.textContent = `${ctr}`;
            resultText.textContent = "YOU WIN";        
        } else {
            resultText.textContent = "YOU LOSE";        
        }
        
    }
    const choice = getComputerChoice();
    userChoose(choice);
});
