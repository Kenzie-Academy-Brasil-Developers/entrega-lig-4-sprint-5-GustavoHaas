const boardArr = [
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
];

let playersArr = [
    "0000000",
    "0000000",
    "0000000",
    "0000000",
    "0000000",
    "0000000",
];

const board = document.getElementById("board");

let line = "";
let cell = "";
function buildingBoard() {


    for (let l = 0; l < boardArr.length; l++) {
        line = boardArr[l];

        const lineDiv = document.createElement("div");
        lineDiv.classList.add("line");
        lineDiv.id = l
        board.appendChild(lineDiv);

        let targetLine = document.getElementById(l);

        for (let c = 0; c < line.length; c++) {
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.id = "cell" + l + c
            targetLine.appendChild(cellDiv)
        }
    }
}

buildingBoard()

function createDisc(evt) {
    const currLine = evt.currentTarget;
    const currColumn = evt.target;

    let lineNumber = currLine.id;
    let idCurrColumn = currColumn.id;
    let columnNumber = idCurrColumn[idCurrColumn.length - 1]

    let lastLine = 5;

    while (playersArr[lastLine][columnNumber] !== '0') {
        lastLine--;
    }

    const last = document.getElementById('cell' + lastLine + columnNumber)

    const disc = document.createElement('div');
    disc.classList = 'disc'
    last.appendChild(disc)

    let linhaAtual = playersArr[lastLine];
    linhaAtual = linhaAtual.split('');
    linhaAtual[columnNumber] = 1;
    linhaAtual = linhaAtual.join('');
    playersArr[lastLine] = linhaAtual;
    checkVictory();
}

const lines = document.querySelectorAll('.line')

for (let i = 0; i < lines.length; i++) {
    lines[i].addEventListener('click', createDisc)
}

function checkVictory() {
    checkHorizontal();
    // checkVertical();
    // checkDiagonal();
}

function checkHorizontal() {
    for (let l = 0; l < playersArr.length; l++) {
        if (playersArr[l].includes("1111")) {
            alert("Jogador 1 ganhou!");
        }
    }
}

// function checkVertical() {
//     let vertical = 0;
//     for (let l = 0; l < playersArr.length; l++) {
//         for (let c = 0; c < playersArr[l].length; c++) {
//             if (playersArr[l][c] === 1) {
//                 vertical++;
//             } else {
//                 vertical = 0;
//             }
//         }
//     }
//     if (vertical === 4) {
//         alert("Jogador 1 ganhou!");
//     }
// }

// function checkDiagonal() {}