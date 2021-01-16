/*
GAME RULES

- The game has 2 players, playing in rounds.
- In each turn, a player rolls a dice as many times as he wishes, Each result gets added to his ROUND score
- BUT , if the player rolls a 1, all his ROUND scores gets lost. After that it's the next player's turns
- The player can choose to HOLD , which means that his ROUND scores gets added to his GLOBAL score. After
 that , it's the next player turn.
- The first player to reach 100 on GLOBAL scores wins the game.
*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// document.querySelector("#current--" + activePlayer).textContent = dice;
// document.querySelector(".dice").setAttribute("src", src);
document.querySelector(".dice").style.display = "none";

// rollDice Function
function rollDice(){
    var dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice").style.display = "block";
    var src;
    src = "dice-"+dice+".png";
    document.querySelector(".dice").setAttribute("src", src);
    if(dice !== 1){
        roundScore += dice;
    } else {
        console.log(activePlayer + " lost scores.");
    }
    document.querySelector("#current--" + activePlayer).textContent = roundScore;
}

// holdScore Function
function holdScore(){
    console.log("Hold scores..");
}
