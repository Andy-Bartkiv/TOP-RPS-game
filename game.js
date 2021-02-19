function compPlay() {
    return {
        1: "Rock",
        2: "Paper",
        3: "Scissors"
    }[Math.floor(Math.random() * 3) + 1]
}

function whoWins(playerSelect, compSelect) {
    const b = ["Rock", "Paper", "Scissors"];
    return [
        ["D", "L", "W"],
        ["W", "D", "L"], 
        ["L", "W", "D"]]
        [b.indexOf(playerSelect)][b.indexOf(compSelect)];
}

function restartGame() {
    const del = [...document.querySelectorAll('.content')];
    del.forEach(e => results.removeChild(e));
    hideShowElementById('buttons', "show");
    hideShowElementById("but-restart", "hide")
    document.getElementById("player").textContent = "?";
    document.getElementById("player").classList.remove("shining-winner");
    document.getElementById("comp").textContent = "?";
    document.getElementById("comp").classList.remove("shining-winner");
    score = [0,0,0];
    document.getElementById('comp-score').textContent = score[2];
    document.getElementById('player-score').textContent = score[1];
};

function playRound(humSel, compSel) {
    document.getElementById("player").classList.remove("shining-winner");
    document.getElementById("player").textContent = humSel[0];
    document.getElementById("comp").classList.remove("shining-winner");
    document.getElementById("comp").textContent = compSel[0];
    score[0]++; // counting Game Rounds
    switch(whoWins(humSel,compSel)) {
        case 'D':             break;
        case 'W': 
            score[1]++;
            document.getElementById('player-score').textContent = score[1];
            document.getElementById("player").classList.add("shining-winner");
            break;
        case 'L': 
            score[2]++;
            document.getElementById('comp-score').textContent = score[2];
            document.getElementById("comp").classList.add("shining-winner");
            break;
        default: score[0] = 'ERROR'; //Just in Case...
    }
    
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = `${humSel[0]} ... ${score[1]} : ${score[2]} ... ${compSel[0]} `;
    results.appendChild(content);

    update(maxScore); // Cheking for Game End Condition
}

function update(maxScore) {
    let winner = false;
    if (score[1] >= maxScore) winner = "H"
    else if (score[2] >= maxScore) winner = "C";
    if (winner) {
        hideShowElementById('buttons', "hide");
        hideShowElementById("but-restart","show")
    }
}

function hideShowElementById(id, command) {
    if (command === 'hide')
        document.getElementById(id).classList.add('btn-hide');
    else
        document.getElementById(id).classList.remove('btn-hide');
}
// ---------------------------------------
// - - - End of Function Declaraions - - -
//----------------------------------------

let score = [0,0,0]; // Game Score Arr
const maxScore = 3; // Score to win the game

const buttons = [...document.querySelectorAll('.play-buttons')]

const results = document.querySelector('#round-res');

restartGame();

buttons.forEach(but => { 
    but.addEventListener('click', () => {
        playRound(but.id, compPlay())
    })
});

const butRestart = document.querySelector('#but-restart')
butRestart.addEventListener('click', restartGame);