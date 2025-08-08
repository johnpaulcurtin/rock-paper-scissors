console.log ("Hello,World!")

const weapon = ['rock', 'paper', 'scissors'];
const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;


/*function game() {
    for (let i = 0; i <=5; i++){
        playRound();
    }
}*/


function playRound(){

    const winner = checkWinner(playerSelection, computerSelection);
    if(winner == 'Tie') {
        return `It's a tie. The score is you: ${humanScore} vs. computer: ${computerScore}.`;
    }
    else if(winner == 'Player'){
        humanScore++;
        return `You win. ${playerSelection} beats ${computerSelection}. The score is you: ${humanScore} vs. computer: ${computerScore}.`;
        
    }
    else{
        computerScore++;
        return `You lose. ${computerSelection} beats ${playerSelection}. The score is you: ${humanScore} vs. computer: ${computerScore}.`;
    }

}
console.log(playRound())

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



function getComputerChoice(){
    return weapon[Math.floor(Math.random()*weapon.length)];    
}


function getHumanChoice(){
    let input = prompt("Choose your weapon: rock, paper, or scissors");
        input = input.toLowerCase();  
        return input;
}




game();


