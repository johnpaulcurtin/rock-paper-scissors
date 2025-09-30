const weapon = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;




   
    

    function playRound(playerSelection, computerSelection){
    

    if(playerSelection == computerSelection) {
        document.querySelector('#footerDisplay').innerText = `It's a tie.`;
    }
    else if(
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')
    ){
        humanScore++;
        document.querySelector('#footerDisplay').innerText = `You win. ${playerSelection} beats ${computerSelection}.`;
    }
    else{
        computerScore++;
        document.querySelector('#footerDisplay').innerText = `You lose. ${computerSelection} beats ${playerSelection}.`;
    }
    document.querySelector('#humanScore').innerText = `home: ${humanScore}`;
    document.querySelector('#computerScore').innerText = `away: ${computerScore}`;
    playerSelection = "";
    computerSelection = getComputerChoice()
}
     

  





function getComputerChoice(){
    return weapon[Math.floor(Math.random()*weapon.length)];    
}


