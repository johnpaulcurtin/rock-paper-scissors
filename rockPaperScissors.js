console.log ("Hello,World!")

const weapon = ['rock', 'paper', 'scissors'];
const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(){
    const winner = checkWinner(playerSelection, computerSelection);
    if(winner == 'Tie') {
        return 'It\'s a tie.';
    }
    else if(winner == 'Player'){
        return `You win. ${playerSelection} beats ${computerSelection}`;
    }
    else{
        return `You lose. ${computerSelection} beats ${playerSelection}`;
    }

}
console.log(playRound())




function getComputerChoice(){
    return weapon[Math.floor(Math.random()*weapon.length)];    
}


function getHumanChoice(){
    let input = prompt("Choose your weapon: rock, paper, or scissors");
        input = input.toLowerCase();  
        return input;
}


function checkWinner() {
    if (playerSelection == computerSelection) {
        return 'Tie';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ) {
        return 'Player';
    } else{
        return 'Computer';
    }
}
console.log (checkWinner())

let humanScore = 0;
let computerScore = 0;



console.log (computerSelection)
console.log (playerSelection)
