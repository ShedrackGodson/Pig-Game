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
document.querySelector("#score--0").textContent = 0;
document.querySelector("#score--1").textContent = 0;
document.querySelector("#current--0").textContent = 0;
document.querySelector("#current--1").textContent = 0;

// rollDice Function
function rollDice(){
    var diceDOM = document.querySelector(".dice");
    var dice = Math.floor(Math.random() * 6) + 1;
    diceDOM.style.display = "block";
    var src;
    src = "dice-"+dice+".png";
    diceDOM.setAttribute("src", src); // one way
    // diceDOM.src = src; // Another way
    if(dice !== 1){
        roundScore += dice;
        document.querySelector("#current--" + activePlayer).textContent = roundScore;
        scores[activePlayer] += roundScore;
        document.querySelector("#score--" + activePlayer).textContent = scores[activePlayer];
    } else {
        // Next Player turn
        activePlayer = activePlayer === 0 ? 1 : 0;
        roundScore = 0;

        document.querySelector("#current--1").textContent = 0;
        document.querySelector("#current--0").textContent = 0;
    }
}

// holdScore Function
function holdScore(){
    console.log("Hold scores..");
}
