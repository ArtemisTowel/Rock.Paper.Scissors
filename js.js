function getHumanChoice(){
return prompt("Rock, Paper, Scissors?").toLowerCase()
    console.log(getHumanChoice())}

function getComputerChoice(){
  let a = Math.random()
    if (a<=.34){
        return "rock"
    }
    else if (a<=.67){
        return "paper"
    }
    else {
        return "scissors"
    }
    console.log(getComputerChoice())}

    let humanScore=0
    let computerScore=0



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



console.log(playRound(getHumanChoice(),getComputerChoice()))

console.log(humanScore, computerScore)
