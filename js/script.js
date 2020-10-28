function computerPlay(){
    // get random number from 1 to 3
    const number = Math.floor(Math.random() * 3);

    // make array of choices
    const choices = ["rock", "paper", "scissors"];

    // result is array item at random number
    result = choices[(number)];

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

function displayResults(){
    // make variables for DOM items
    const resultsDiv = document.querySelector("#results");
    const playerDiv = document.querySelector("#playerSelection");
    const computerDiv = document.querySelector("#computerSelection");

    const resultsParagraph = document.createElement('p');
    const playerChoice = document.createElement('p');
    const computerChoice = document.createElement('p')


    let computerSelection = computerPlay();

    // get results from game and display them
    resultText = playRound(playerSelection, computerSelection);
    resultsParagraph.textContent = resultText;
    resultsDiv.appendChild(resultsParagraph);

    // show player choice & computer choice
    playerChoice.textContent = "You have chosen: " + playerSelection;
    playerDiv.appendChild(playerChoice);

    computerChoice.textContent = "The computer has chosen: " + computerSelection;
    computerDiv.appendChild(computerChoice);

    //detect who won and add to score
    if(resultText.includes("You Win!")){
        playerScore++;
    }else if(resultText.includes("You Lose!")){
        computerScore++;
    };

    //display score
    if(playerScore === 5){
        score.textContent = "YOU WIN! " + "Player: " + playerScore + " Computer: " + computerScore;;
    }else if(computerScore === 5){
        score.textContent = "YOU LOSE! " + "Player: " + playerScore + " Computer: " + computerScore;;
    }else {
        score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
    }
    scoreDiv.appendChild(score);
}


//initialise variables for score
let playerScore = 0;
let computerScore = 0;

//score display
const scoreDiv = document.querySelector(".title");
const score = document.createElement('p');

//add query selectors for each button
const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors");
const btnGame = document.querySelector("#btn-playGame");

//associate each button with a choice for the game
btnRock.addEventListener('click', () => {
    playerSelection = "Rock";
    displayResults();});

btnPaper.addEventListener('click', () => {
    playerSelection = "Paper";
    displayResults();});

btnScissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    displayResults();
});

btnGame.addEventListener('click', () =>{
    game();
})
