function getComputerChoice()
{
    let computerChoice = Math.floor(Math.random()*3)

    if (computerChoice === 0) 
    {
    //   console.log(computerChoice);
        return "Rock";
    } else if (computerChoice === 1)
    {
    //    console.log(computerChoice);
        return "Paper";
    } else if (computerChoice === 2)
    {
    //   console.log(computerChoice);
        return "Scissors";
    } else 
    {

    //    console.log(computerChoice);
        return "Error";
    }
}

function playRound(e, computerSelection)
{
    playerSelection = e.srcElement.className;
    if(playerSelection.toLowerCase() === "rock")
    {
       if(computerSelection === "Rock")
       {
            return "It's a tie!";
       } else if (computerSelection === "Scissors")
       {
            return "You win! Rock beats scissors.";
       } else
       {
            return "You lose! Paper Beats Rock.";
       }
    } else if (playerSelection.toLowerCase() === "paper")
    {
        if(computerSelection === "Scissors")
        {
            return "You lose! Scissors beats Paper.";
        } else if (computerSelection === "Rock")
        {
            return "You Win! Paper beats Rock.";
        } else
        {
            return "It's a tie!";
        }
    } else if (playerSelection.toLowerCase() === "scissors")
    {
        if(computerSelection === "Paper")
        {
            return "You Win! Scissors beats Paper.";
        } else if (computerSelection === "Rock")
        {
            return "You Lose! Rock beats Paper.";
        } else 
        {
            return "It's a tie!";
        }
    } else
    {
        console.log("you aren't supposed to see this.");
    }
}


function game()
{
    let playerChoice;
    let computerChoice;

    // for(let i = 0; i < 5; i++)
    // {
    playerChoice = prompt("Pick Rock Paper or scissors!");
    computerChoice = getComputerChoice();
    console.log("computer choice is " + computerChoice);
    console.log(playRound(playerChoice, computerChoice));
    // }
}

function playAndPrint(e) 
{ 
    
    const results = document.querySelector(".results");
    const singleResult = document.createElement("p");
    const rollingResult = document.createElement("p");

    singleResult.textContent = playRound(e, getComputerChoice());
    console.log(e);
    results.appendChild(singleResult);
    
    runningTotal++;
    console.log(singleResult.textContent);
    if(singleResult.textContent !=  "It's a tie!" && singleResult.textContent.slice(0, 9) != "You lose!")
    {
        playerWin++;
    }

    rollingResult.textContent = ` Player wins: ${playerWin} Computer wins: ${runningTotal-playerWin}`;
    results.appendChild(rollingResult);

    if(runningTotal === 5)
    {
        buttons.forEach( (button) => {
            button.removeEventListener('click', playAndPrint);
        })

        printFinalResult();
    }
}

// add event listeners to buttons
const buttons = document.querySelectorAll('button');

let runningTotal = 0;
let playerWin = 0;


    buttons.forEach((button) => {
    
        button.addEventListener('click', playAndPrint);
    });


function printFinalResult()
{
    const results = document.querySelector(".results");
    const finalResult = document.createElement("p");

    if (playerWin > 2)
    {

        finalResult.textContent = "You Won!!!!";
    } else 
    {
        finalResult.textContent = "You LOST!!!!!";
    }

    results.appendChild(finalResult);
}


// game();

