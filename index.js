window.onload = function(){
    createCell();
}

let repeatNumArr = [];

const createCell = function(){
    let cellContainerNode = document.getElementById("bingo-container")
    for (let cell = 1; cell <= 76; cell++) {
        
        let newCell = document.createElement("div");
        newCell.innerText = cell
        newCell.classList.add("cell");
        newCell.id = cell;

        cellContainerNode.appendChild(newCell)
    }
}

const randomNum = function(){
    let ranNum = Math.floor((Math.random() * 76) + 1);
    highLightNum(ranNum);
}

const highLightNum = function(num){
    let selectNum = document.getElementById(num);
    selectNum.classList.add("highlight");
}

