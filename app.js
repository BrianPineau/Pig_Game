/*
GAME RULES:

- The game has 2 players, playing in rounds
-Each turn, a player rolls a dice as many times as he wishes.  The result of each roll gets added to that player's ROUND score
-HOWEVER, if the player rolls a "1", his ROUND score is lost and it's the next player's turn
-The player can choose to "Hold", which will add his ROUND score to his GLOBAL score and then it's the next player's turn.
-The first player to reach 100 points on their GLOBAL score wins the game
*/



let scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('#current-' + activePlayer).textContent = dice;







