let player = false;
const container = document.getElementById("TicTacToeContainer");

function getRowAndCol(){
    if (this.innerText.length>0){
        window.alert('already Occupied')
        return
    }
    if (!player) {
        this.innerText = 'O'
    }
    else{
        this.innerText='X'
    }
    player = !player
    checkWin()
}

function checkWin(){
    var children = container.children;
}

function createBoard(){
    container.className = "game-board";
    for (let i = 0; i < 9; i++) {
            const buttonElement = document.createElement("button");
            buttonElement.className = "box";
            buttonElement.value = i.toString();
            buttonElement.addEventListener("click",getRowAndCol);
            const node = document.createTextNode("");
            buttonElement.appendChild(node);
            container.appendChild(buttonElement);
    }
}

createBoard();
