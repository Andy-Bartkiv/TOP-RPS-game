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
    console.log('RESTART');
    const del = [...document.querySelectorAll('.content')];
    del.forEach(e => results.removeChild(e));
    buttons.forEach(but => but.disabled = false);
    score = [0,0,0];
};

function playRound(humSel, compSel) {
    score[0]++;
    switch(whoWins(humSel,compSel)) {
        case 'D':             break;
        case 'W': score[1]++; break;
        case 'L': score[2]++; break;
        default: score[0] = 'ERROR';
    }
    
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = `Round ${score[0]} ->  ${humSel} ${score[1]} : ${score[2]} ${compSel} `;
    results.appendChild(content);

    update(5);
}

function update(maxScore) {
    let winner = false;
    if (score[1] >= maxScore) winner = "H"
    else if (score[2] >= maxScore) winner = "C";
    if (winner) {
        buttons.forEach(but => but.disabled = true);
        alert('THE END \n' + ((winner === "H") ? "!You Win!" : "You Loose"));
    }
}

let score = [0,0,0];

const buttons = [...document.querySelectorAll('.play-buttons')]

const results = document.querySelector('#round-res');

const butRestart = document.querySelector('#but-restart')
butRestart.addEventListener('click', restartGame);

buttons.forEach(but => { 
    but.addEventListener('click', () => {
        playRound(but.id, compPlay())
    })
});