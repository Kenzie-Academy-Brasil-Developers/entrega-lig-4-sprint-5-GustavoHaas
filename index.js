const boardArr = [
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC"
];

let playersArr = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
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

let currentPlayer = 1;

function createDisc(evt) {
    const currLine = evt.currentTarget;
    const currColumn = evt.target;

    let lineNumber = currLine.id;
    let idCurrColumn = currColumn.id;
    let columnNumber = idCurrColumn[idCurrColumn.length - 1]

    let lastLine = 5;

    while (playersArr[lastLine][columnNumber] !== 0) {
        lastLine--;
    }

    const last = document.getElementById('cell' + lastLine + columnNumber)

    const disc = document.createElement('div');
   
    last.appendChild(disc)

    playersArr[lastLine][columnNumber] = currentPlayer;
       
        if(currentPlayer === 1){
            disc.classList = 'player1'
            currentPlayer =2;
         
        }else if(currentPlayer ===2) {
            disc.classList = 'player2'
            currentPlayer=1;
        }
    checkVictory(columnNumber);
}

const lines = document.querySelectorAll('.line')

for (let i = 0; i < lines.length; i++) {
    lines[i].addEventListener('click', createDisc)
}

function checkVictory(columnNumber) {
    checkHorizontal();
    checkVertical(columnNumber);
    checkDiagonal();
    checkTie();
}

function checkHorizontal() {
    for (let l = 0; l < playersArr.length; l++) {
        let str = playersArr[l].join('')
        if (str.includes("1111")) {
            victory("Jogador 1 ganhou!")
        }

        if (str.includes("2222")) {
            victory("Jogador 2 ganhou!");
        }
    }
}

function checkVertical(columnNumber) {
    let verticalP1 = 0;
    let verticalP2 = 0;
    let p = 0;

    let l = columnNumber;
    for (let c = 0; c < 6; c++) {
        if (playersArr[c][l] === 1) {
            verticalP1++;
        } else if (playersArr[c][l] === 2){
            verticalP2++;
        } else {
            verticalP1 = 0;
            verticalP2 = 0;
        }
    }
    if ((verticalP1 === 4) || (verticalP2 === 4)){
        if (currentPlayer === 1) {
            p = 2
        } else {
            p = 1
        }
        victory("Jogador " + p +" ganhou!");
    }
}

function checkDiagonal() {
    let diagonalP1 = 0;
    let diagonalP2 = 0;
    let p = 0;
    let b = 0;
    let d = 0;

    for (let l = 5; l >= 0; l--) {
        let a = 5;
        d = b
        for (let c = 0; c < 6; c++) {
            if (playersArr[a][d] === 1) {
                diagonalP1++;
            } else {
                diagonalP1 = 0;
            }
            
            if (playersArr[a][d] === 2) {
                diagonalP2++;
            } else {
                diagonalP2 = 0;
            }
            if ((diagonalP1 === 4) || (diagonalP2 === 4)){
                if (currentPlayer === 1) {
                    p = 2
                } else {
                    p = 1
                }
                victory("Jogador " + p +" ganhou!");
            }
            a--;
            d++;
        }
        b++;
    }
    diagonalP1 = 0;
    diagonalP2 = 0;


    b = playersArr[1].length - 1;
    d = playersArr[1].length - 1;
    for (let l = 5; l >= 0; l--) {
        let a = 5;
        d = b
        for (let c = 0; c < 6; c++) {
            if (playersArr[a][d] === 1) {
                diagonalP1++;
            } else if (playersArr[a][d] === 2) {
                diagonalP2++;
            } else {
                diagonalP1 = 0;
                diagonalP2 = 0;
            }
            if ((diagonalP1 === 4) || (diagonalP2 === 4)){
                if (currentPlayer === 1) {
                    p = 2
                } else {
                    p = 1
                }
                victory("Jogador " + p +" ganhou!");
            }
            a--;
            d--;
        }
        b--;
    }   
}

function checkTie() {
    let arrStr = playersArr.join('');

    if (arrStr.includes('0') === false) {
        victory("Empate");
    }
}

const btnPlay = document.getElementById("btnPlay");
const btnReset = document.getElementById("btnReset");
const msg = document.getElementById("msg");

const display = document.getElementById("display");

btnPlay.addEventListener("click",play)

btnReset.addEventListener("click",reset)


function play(){
    display.className = "hidden";
    document.body.appendChild(btnReset)
    btnReset.className = "show";
}

function reset(){location.reload()}

function victory(message){
    display.className = "show";
    btnPlay.className = "hidden";
    display.appendChild(btnReset);
    btnReset.className = "show";
    msg.innerHTML = message;
}