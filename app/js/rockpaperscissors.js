var getInput = function() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
var randomPlay = function() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(pMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (pMove === null) {
        return getInput();
        } 
    else if (pMove === undefined) {
        return getInput();
        } 
    else return pMove;
}
function getComputerMove(cMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (cMove === null) {
        cMove = randomPlay();
        return cMove;
        } 
    else if (cMove === undefined) {
        cmove = randomPlay();
        return cMove;
        } 
    else cMove = randomPlay();
        return cMove;
}
function getWinner(pMove,cMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
   if (((pMove == "rock") && (cMove == "scissors")) || ((pMove == "paper") && (cMove == "rock")) || ((pMove == "scissors") && (cMove == "paper"))) {
    winner = "player";
   } else if (((pMove == "rock") && (cMove == "paper")) || ((pMove == "paper") && (cMove == "scissors")) || ((pMove == "scissors") && (cMove == "rock"))) {
    winner = "computer";
   } else if (((pMove == "rock") && (cMove == "rock")) || ((pMove == "paper") && (cMove == "paper")) || ((pMove == "scissors") && (cMove == "scissors"))) {
    winner = "tie";
   } 
    return winner;
}

var playToFive = function() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;
  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  while (playerWins <= 5 && computerWins <= 5)  {
      cMove = randomPlay();
      getInput();
      getWinner(pMove,cMove);
      if (winner == "player")    {
          playerWins += 1;}
      if (winner == "computer") {
          computerWins +=1;}
        console.log('Player chose ' + pMove + ' while Computer chose ' + cMove);
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  }
  return [playerWins, computerWins];
}