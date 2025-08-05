console.log ("Hello,World!")


function getComputerChoice(){
    const num = Math.random()

    if (num<0.33) {
        return "rock";
    }
    else if(num>0.66) {
        return "paper";
    }
    else
    {return "scissors"}
    
}


}

