function computerPlay(){
    // get random number from 1 to 3
    const number = Math.floor(Math.random() * 3);
    let result = "";
    // assign numbers to rock/paper/scissors
    if(number === 1){
        result = "rock";
    }else if(number === 2){
        result = "paper";
    }else{
        result = "scissors";
    }
    // return result
    return result;
}

function playRound(playerSelection, computerSelection) {
    //initialise result text
    let resultText = "";
    
    //determine who wins the round
    if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors"){
        resultText = "You Win! Rock beats Scissors."
    }else if(playerSelection.toLowerCase() == "rock" && computerSelection == "paper"){
        resultText = "You Lose! Paper beats Rock."
    }else if(playerSelection.toLowerCase() == "rock" && computerSelection == "rock"){
        resultText = "Tie!"
    }else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "rock"){
        resultText = "You Lose! Rock beats Scissors."
    }else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper"){
        resultText = "You Win! Scissors beats Paper."
    }else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors"){
        resultText = "Tie!"
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        resultText = "You Win! Paper beats Rock."
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "paper"){
        resultText = "Tie!"
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "scissors"){
        resultText = "You Lose! Scissors beats Paper."
    }

    // return the result in text format
    return resultText;
}

function game(){
    //initialise variables for score
    let playerScore = 0;
    let computerScore = 0;

    //loop through 5 rounds
    for(let i = 0; i < 5; i++){

        //prompt player for pick and set computer pick
        const playerSelection = prompt("rock, paper, or scissors?");
        const computerSelection = computerPlay();

        //play a round
        const game = playRound(playerSelection, computerSelection);

        //determine who won and award point
        if(game.includes("Win")){
            playerScore ++;
        }else if(game.includes("Lose")){
            computerScore ++;
        }

        //update player on details of the round
        console.log("You chose " + playerSelection.toUpperCase() + " Computer chose: " + computerSelection.toUpperCase() + "......", game, "Player Score: " + playerScore + " Computer Score: " + computerScore);
    }

    // returns the final score of the game in text
    return "Game Over!  Player: " + playerScore + "  Computer: " + computerScore;
}






