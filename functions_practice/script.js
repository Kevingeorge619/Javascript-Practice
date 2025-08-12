function getComputerChoice(){

    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
function getHumanChoice() {
    let choice = prompt("Enter your choice: rock, paper, or scissors");
    return choice.toLowerCase().trim();
}
console.log("Computer choice:", getComputerChoice());
console.log("Human choice:", getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice , computerChoice){
    

}