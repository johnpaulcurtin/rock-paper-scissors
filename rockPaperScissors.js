console.log ("Hello,World!")

const weapon = ['rock', 'paper', 'scissors'];
const playerSelection = getHumanChoice();
const computerSelection = getComputerChoice();
let humanScore = 0;
let computerScore = 0;


function playRound(){

    if(playerSelection == computerSelection) {
        console.log (`It's a tie. The score is you: ${humanScore} vs. computer: ${computerScore}.`);
    }
    else if(
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ){
        humanScore++;
        console.log(`You win. ${playerSelection} beats ${computerSelection}. The score is you: ${humanScore} vs. computer: ${computerScore}.`);
        
    }
    else{
        computerScore++;
        console.log (`You lose. ${computerSelection} beats ${playerSelection}. The score is you: ${humanScore} vs. computer: ${computerScore}.`);
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

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  
