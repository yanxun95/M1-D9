window.onload = function(){
    createMainCell();
}

let repeatNumArr = [];
let userTotalArr = [];

const createMainCell = function(){
    let cellContainerNode = document.getElementById("main-bingo-container")
    let br = document.createElement("br")
    for (let cell = 1; cell <= 76; cell++) {
        let newCell = document.createElement("div");
        newCell.innerText = cell
        newCell.classList.add("mainCell");
        newCell.id = `main${cell}`;
        cellContainerNode.appendChild(newCell)
    }
}

const randomNum = function(){
    let ranNum = Math.floor((Math.random() * 76) + 1);
    if(repeatNumArr.length < 76){
        while(repeatNumArr.includes(ranNum)){
            ranNum = Math.floor((Math.random() * 76) + 1);
        }
        repeatNumArr.push(ranNum);
        highLightNum(ranNum);
        console.log(repeatNumArr.length)
    }else{
        alert("Game Over!");
    }
}

const highLightNum = function(num){
    let mainNum = document.getElementById(`main${num}`);
    let userNum = document.getElementById(`user${num}`);
    for(let i = 0; i < userTotalArr.length; i++){
        for(let j = 0; j < userTotalArr[i].length; j++){
            if(userTotalArr[i].includes(num)){
                userNum.classList.add("highlight");
            }
        }
    }
    mainNum.classList.add("highlight");
}

const createUserCell = function(){
    let userArr = [];
    let userContainerNode = document.getElementById("user-bingo-container")
    let userCellContainerNode = document.createElement("new-user-container")
    let br = document.createElement("br")
    let br2 = document.createElement("br")
    for (let cell = 1; cell <= 25; cell++) {
        let ranNum = Math.floor((Math.random() * 76) + 1);
        if(userArr.length <= 25){
            while(userArr.includes(ranNum)){
                ranNum = Math.floor((Math.random() * 76) + 1);
            }
        }
        userArr.push(ranNum);
        let newCell = document.createElement("div");
        newCell.innerText = ranNum
        newCell.classList.add("userCell");
        newCell.id = `user${ranNum}`

        userCellContainerNode.appendChild(newCell)
    }
    userContainerNode.appendChild(userCellContainerNode);
    userContainerNode.appendChild(br);
    userContainerNode.appendChild(br2);
    userTotalArr.push(userArr);
    console.log(userTotalArr);
}
