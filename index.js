const boardArr = [
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
];

let currentPlayer = 'player01';

const cells = document.querySelectorAll('div');

const handleClick = function(evt) {
    const cell = evt.target
    console.log(cell.id);



    if (currentPlayer === 'player01') {
        currentPlayer = 'player02'
    }else {
        currentPlayer = 'player01'
    }
}



const board = document.getElementById("board");



let line = "";
let cell = "";
function buildingBoard(){

    
    for(let l = 0; l < boardArr.length; l++){
        line = boardArr[l];
      
        const lineDiv = document.createElement("div");
        lineDiv.classList.add("line");
        lineDiv.id = "line" + l
        board.appendChild(lineDiv);

        let targetLine = document.getElementById('line' + l);

        for(let c = 0; c < line.length; c ++){
            cell = boardArr[l][c];
            const cellDiv = document.createElement("div");
            cellDiv.classList.add("cell");
            cellDiv.id = "cell" + l + c
            targetLine.appendChild(cellDiv)
            cellDiv.addEventListener('click', handleClick);

        }

    }


}
buildingBoard()