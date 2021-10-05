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
            cellDiv.addEventListener("click", createDiscBlue) 
            cellDiv.addEventListener("click", createDiscRed)
            
        }

    }


}
buildingBoard()

const cells = document.querySelectorAll('div', '.cells');
const lines = document.querySelectorAll('div', '.line')

const handleClick = function(event) {
    const clickPosition = event.currentTarget;
    console.log(clickPosition.id);
}


function createDisc (){
    const disc = document.createElement('div')
    for(let i =0;i< lines.length; i++){
        for (let j = 0; j < cells.length; j++) {  
        disc.classList.add('discBlue')
        cells[i].appendChild(disc)
        
    }
    console.log(cells.length)
}
}
lines.addEventListener('click', handleClick)
cells.addEventListener('click', handleClick)     

