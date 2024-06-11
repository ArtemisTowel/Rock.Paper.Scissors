function playGame() {

let humanScore=0;
let computerScore=0;

function getHumanChoice(){
return prompt("Rock, Paper, Scissors?").toLowerCase();
}

function getComputerChoice(){
  let a = Math.random();
    if (a<=.34){
        return "rock"
    }
    else if (a<=.67){
        return "paper"
    }
    else {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice){
    
    if(humanChoice === computerChoice){
        return "It's a Draw!"
    }

    if(humanChoice === "rock"){
        if(computerChoice === "scissors"){
            ++humanScore
            return "Rock beats Scissors! You Win!"
           
        }
        else {
            ++computerScore
            return "Paper beats Rock! You Lose!"
        }
    }

    if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            ++humanScore
            return "Paper beats Rock! You Win!"
        }
        else {
            ++computerScore
            return "Scissors beats Paper! You Lose"
        }
    }

    if(humanChoice === "scissors"){
        if(computerChoice === "paper"){
            ++humanScore
            return "Scissors beats Paper! You Win!"
        }
        else {
            ++computerScore
            return "Rock beats Scissors! You Lose!"
        }
    }
}

for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice= getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);
    console.log(roundResult);
    console.log(humanScore, computerScore)
}

function keepScore(){
    if (humanScore>computerScore){
        return "Congrats! You Won!"
    }
    else if (computerScore>humanScore){
        return "Too bad. Play Again!"
    }
    else {
        return "Game ends in a Tie!"
    }
}

return keepScore();

}

console.log(playGame());