/*
Rock Paper Scissors
*/

"use strict"

// create play round function that takes the
// player choice and the computer choice then
// determines the winner
function playRound(playerMove, computerMove, options) {
    let winner = "tie";
    // check if the player input is in the list of inputs that computer's choice beats
    if (checkWinCondition(playerMove, options[computerMove])) {
        // if it is then display the computer as the winner
        winner = "computer";
    }
    // check if the computer's option is in the list of options that the player's choice beats
    else if (checkWinCondition(computerMove, options[playerMove])) {
        // if it is then display the player as the winner
        winner = "player";
    }
    return winner;
}

function game() {
    const numberOfGames = 5;

    // create list of valid options
    const options = {
        "rock": ["scissors"],
        "paper": ["rock"],
        "scissors": ["paper"]
    };

    for (let i = 0; i < numberOfGames; ++i) {
        let playerMove = "";
        // check if player input is inside the list of valid options
        while (!(playerMove in options)) {
            // prompt player for input
            playerMove =
                prompt(`Your options are: ${Object.keys(options).join(", ")}`)
                    .toLowerCase();
        }

        // get computer move
        let computerMove = getComputerMove(options);

        let winner = playRound(playerMove, computerMove, options);
        if (winner === "computer") {
            console.log(`You lost! ${capitalizeString(computerMove)} beats ${capitalizeString(playerMove)}`);
        }
        else if (winner === "player") {
            console.log(`You Win! ${capitalizeString(playerMove)} beats ${capitalizeString(computerMove)}`);
        }
        else if (winner === "tie") {
            console.log("It's a tie!");
        }
    }
}


function getComputerMove(options) {
    // generate random number from 0 to 2
    // use the random number to select the computer's option
    const optionsArray = Object.keys(options);
    return optionsArray[Math.floor(Math.random() * optionsArray.length)];
}


function checkWinCondition(check, listOfMovesBeatByMove) {
    return listOfMovesBeatByMove.includes(check);
}


function capitalizeString(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}


game()