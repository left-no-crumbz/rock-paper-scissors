console.log("Hello World!");

let generateChoice = (min, max) => Math.floor(Math.random() * (max - min) + min);

function getComputerChoice(choice) {
    switch(choice) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

