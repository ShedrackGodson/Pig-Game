
/*
- The game has 2 players, playing in rounds.
- In each turn, a player rolls a dice as many times as he wishes, Each result gets added to his ROUND score
- BUT , if the player rolls a 1, all his ROUND scores gets lost. After that it's the next player's turns
- The player can choose to HOLD , which means that his ROUND scores gets added to his GLOBAL score. After
 that , it's the next player turn.
- The first player to reach 100 on GLOBAL scores wins the game.
*/

var scores, roundScore, activePlayer, dice, src;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector(".btn--roll").addEventListener("click", function(){
    // 1. Get the random number
    dice = Math.floor(Math.random() * 6) + 1;

    console.log(dice);

    // 2. Display the results

    // 3. Update the roundScore if the rolled Number was not a 1
});