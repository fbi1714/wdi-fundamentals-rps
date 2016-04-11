///////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
var player;
var computer;

function PlayerMove(move) {
    if (!move) {
        return getInput();
    } else {
        return move;
    }

}

function ComputerMove(move) {
    if (!move) {
        return randomPlay();
    } else {
        return move;
    }
}

function getWinner(playerMove, computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    playerMove = PlayerMove();
    computerMove = ComputerMove();
    player = playerMove;
    computer = computerMove;
    if (playerMove === computerMove) {
        winner = "tie";
    } else if (((playerMove === "rock") && (computerMove === "scissors")) || ((playerMove === "scissors") && (computerMove = "paper")) || ((playerMove === "paper") && (computerMove === "rock"))) {
        winner = playerMove;
    } else {
        winner = computerMove;
    }
    return winner;

}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    //
    while (playerWins < 5 && computerWins < 5) {
        var Winner = getWinner();
        if (Winner === player) {
            playerWins += 1;
            console.log('Player chose: ' + player + ' while Computer chose: ' + computer);
            console.log('The score is currently ' + playerWins + ' to the Player ' + computerWins + ' to the Computer.' + '\n');
        } else {
            computerWins += 1;
            console.log('Player chose: ' + player + ' while Computer chose: ' + computer);
            console.log('The score is currently ' + computerWins + ' to the Computer and ' + playerWins + ' to the Player.' + '\n');

        }
    }


    return [playerWins, computerWins];
}
playToFive();
