function compPlay() {
    let res ='';
    switch(Math.floor(Math.random() * 3) + 1) {
        case 1: res = 'Rock'; break;
        case 2: res = 'Paper'; break;
        case 3: res = 'Scissors'; break;
        default: res = 'NOT GOOD at all'
    }
    return res;
}

function oneRound(playerSelect, compSelect) {
    let res = '';
    switch(playerSelect.toLowerCase()) {
        case 'rock': 
            if (compSelect === 'Rock') {res = 'It \'s a draw!'
            } else if (compSelect === 'Paper') {res = 'You loose!'; score[1]+=1;
            } else if (compSelect === 'Scissors') {res = 'You WIN!'; score[0]+=1;}
            break;
        case 'paper': 
            if (compSelect === 'Rock') {res = 'You WIN!'; score[0]+=1;
            } else if (compSelect === 'Paper') res = 'It \'s a draw!';
            else if (compSelect === 'Scissors') {res = 'You loose!'; score[1]+=1;}
            break;
        case 'scissors': 
            if (compSelect === 'Rock') {res = 'You loose!'; score[1]+=1;
            } else if (compSelect === 'Paper') {res = 'You WIN!'; score[0]+=1;
            } else if (compSelect === 'Scissors') res = 'It \'s a draw!';
            break;
    }
    return `YOU: ${playerSelect}, COMP: ${compSelect} ... ` + res;
}

function game() {
    score = [0,0];
    let winner;
    let humanPlay = '';
    for (i = 1; i < 6; i++) {
        humanPlay = prompt(`Rock, Paper or Scissors? ${score}`)
        console.log('Round ' + i + ' -> ' + oneRound(humanPlay,compPlay()) + 
        ' ... Total Score is ' + score[0] + " : " + score[1]);
    } 
    winner = score[0] - score[1];
    winner = (winner > 0) ? "Human Wins" : 
        (winner < 0) ? "Comp Wins" : "A TIE";
    console.log('- - - THE END - - - ' + winner);
    
};

let score = [];
document.getElementById("Run").onclick = game;
