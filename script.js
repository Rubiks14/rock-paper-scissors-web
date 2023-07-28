/*
Rock Paper Scissors
*/

"use strict"

//set stillPlaying to true
let stillPlaying = true

// While stillPlaying
while (stillPlaying) {
    // create list of valid options
    const validOptions = {
        "rock": ["scissors"],
        "paper": ["rock"],
        "scissors": ["paper"]
    }
    let playerMove = ""
    // check if player input is inside the list of valid options
    while (!(playerMove in validOptions)) {
        // display options for player
        console.log(`Your options are: ${validOptions.join(", ")}`)
        // prompt player for input
        playerMove = input("> ").toLowerCase()
    }

    // get computer move
    let computerMove = getComputerMove(validOptions)

    // check if the player input is in the list of inputs that computer's choice beats
    if (checkWinCondition(playerMove, validOptions[computerMove])) {
        // if it is then display the computer as the winner
        console.log("You lost!")
    }
    // check if the computer's option is in the list of options that the player's choice beats
    else if (checkWinCondition(computerMove, validOptions[playerMove])) {
        // if it is then display the player as the winner
        console.log("You Win!")
    }
    else {
        // otherwise it's a tie
        console.log("It's a tie!")
    }

    // ask the player if they want to rematch
    console.log("Would you like to play again? (yes/no): ")
    if (input("> ").toLowerCase() == "no") {
        // if no then stillPlaying is set to false
        stillPlaying = false
    }
}


function getComputerMove(optionsObject) {
    // generate random number from 0 to 2
    // use the random number to select the computer's option
    const optionsArray = Object.keys(optionsObject)
    return optionsArray[Math.floor(Math.random() * optionsArray.length)]
}

function checkWinCondition(check, listOfMovesBeatByMove) {
    return check in listOfMovesBeatByMove
}

