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
    toggleElement('buttons', "flex")
    toggleElement("but-restart","flex")
    document.getElementById("player").textContent = "?";
    document.getElementById("comp").textContent = "?";
    score = [0,0,0];
    document.getElementById('comp-score').textContent = score[2];
    document.getElementById('player-score').textContent = score[1];
};

function playRound(humSel, compSel) {
    console.log(humSel, compSel);
    let humI = "..."; let cmpI = "...";
    document.getElementById("player").textContent = humSel[0];
    document.getElementById("comp").textContent = compSel[0];
    score[0]++;
    switch(whoWins(humSel,compSel)) {
        case 'D':             break;
        case 'W': 
            score[1]++;
            document.getElementById('player-score').textContent = score[1];
            humI = "...";
            break;
        case 'L': 
            score[2]++;
            document.getElementById('comp-score').textContent = score[2];
            cmpI = "...";
            break;
        default: score[0] = 'ERROR';
    }
    
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = `${humSel[0]} ${humI} ${score[1]} : ${score[2]} ${cmpI} ${compSel[0]} `;
    results.appendChild(content);


    update(3);
}

function update(maxScore) {
    let winner = false;
    if (score[1] >= maxScore) winner = "H"
    else if (score[2] >= maxScore) winner = "C";
    if (winner) {
        toggleElement('buttons', "flex")
        toggleElement("but-restart","flex")
        // alert('THE END \n' + ((winner === "H") ? "!You Win!" : "You Loose"));
    }
}

function toggleElement(id, styleDisplay) {
    let el = document.getElementById(id);
    if (el.style.display === "none") {
        el.style.display = styleDisplay;
    } else {
        el.style.display = "none";
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
        console.log(score)
    })
});