var scores, roundScore, activePlayer, gameActice;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if(gameActice) {
                //Store the random number
    "use strict";
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //Display the dice
    document.querySelector('.dice-image').style.display = 'block';
    document.querySelector('.dice-image').src = 'images/dice-' + dice + '.JPG';
    
    //Update the current score if rolled number is not 1
    if (dice !== 1) {
            //Add the score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }   
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gameActice) {
                 // Add the CURRENT score to the GLOBAL score
    scores[activePlayer] += roundScore;
    
    // Update the UI
    document.querySelector('#global-' + activePlayer).textContent = scores[activePlayer];
    
    //Check if the Player won
    if (scores[activePlayer] >= 50) {
        document.querySelector('#player-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.panel-' + activePlayer).classList.add('winner');
        document.querySelector('.panel-' + activePlayer).classList.remove('active');
        gameActice = false;
        
        //Hide the Dice
        document.querySelector('.dice-image').style.display = 'none';
    } else {
        //Next Player's turn
        nextPlayer();
        }   
    }
});

function nextPlayer() {
    //Next player's turn
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
        
            document.getElementById('current-0').textContent = 0;
            document.getElementById('current-1').textContent = 0;
            
            document.querySelector('.panel-0').classList.toggle('active');
            document.querySelector('.panel-1').classList.toggle('active');
            
            document.querySelector('.dice-image').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    "use strict";
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gameActice = true;

    document.querySelector('.dice-image').style.display = 'none';

    document.getElementById('global-0').textContent = 0;
    document.getElementById('global-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('player-0').textContent = 'Player 1';
    document.getElementById('player-1').textContent = 'Player 2';
    document.querySelector('.panel-0').classList.remove('winner');
    document.querySelector('.panel-1').classList.remove('winner');
    document.querySelector('.panel-0').classList.remove('active');
    document.querySelector('.panel-1').classList.remove('active');
    document.querySelector('.panel-0').classList.add('active');
}
