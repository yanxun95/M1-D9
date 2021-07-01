window.onload = function(){
    createMainCell();
}

const createMainCell = function(){
    let cellContainerNode = document.getElementById("main-bingo-container")
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
    let repeatNumArr = [];
    if(repeatNumArr.length <= 76){
        while(repeatNumArr.includes(ranNum)){
            ranNum = Math.floor((Math.random() * 76) + 1);
        }
        repeatNumArr.push(ranNum);
    
        highLightNum(ranNum);
        console.log(ranNum);
        console.log(repeatNumArr);
    }
}

const highLightNum = function(num){
    let mainNum = document.getElementById(`main${num}`);
    let userNum = document.getElementById(`user${num}`);

    mainNum.classList.add("highlight");
    userNum.classList.add("highlight");
}

const createUserCell = function(){
    let cellContainerNode = document.getElementById("user-bingo-container")
    let userArr = [];
    for (let cell = 1; cell <= 25; cell++) {
        let ranNum = Math.floor((Math.random() * 76) + 1);

        while(userArr.includes(ranNum)){
            ranNum = Math.floor((Math.random() * 76) + 1);
        }
        let newCell = document.createElement("div");
        newCell.innerText = ranNum
        newCell.classList.add("userCell");
        newCell.id = `user${ranNum}`

        cellContainerNode.appendChild(newCell)
    }
}
