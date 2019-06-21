/*
GAME RULES:

- The game has 2 players, playing in rounds
-Each turn, a player rolls a dice as many times as he wishes.  The result of each roll gets added to that player's ROUND score
-HOWEVER, if the player rolls a "1", his ROUND score is lost and it's the next player's turn
-The player can choose to "Hold", which will add his ROUND score to his GLOBAL score and then it's the next player's turn.
-The first player to reach 100 points on their GLOBAL score wins the game
*/



let scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;



document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click', function () {
    //1.   Random number.
    let dice = Math.floor(Math.random() * 6) + 1;

    //2.   Display the result.
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = './Resources/Pictures/dice-' + dice + '.png';

    //3.   Update the round score IF the rolled number was NOT a 1.

});




//document.querySelector('#current-' + activePlayer).textContent = dice;

//const x = document.querySelector('#score-0').textContent;