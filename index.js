const boardArr = [
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
    "CCCCCCC",
];



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
            cellDiv.id = "cell" + c
            targetLine.appendChild(cellDiv)

        }

    }


}
buildingBoard()
