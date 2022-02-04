let player = false;
const mainContainer = document.getElementById("TicTacToeContainer");
let gameContainer;
let displayBoard;
let textDisplay;
let number_of_moves;
let gameRunning = true;
function ResetBoard(){
    gameRunning = true;
    player = false;
    textDisplay.innerText = "Player 1's Turn";
    let children = gameContainer.children;
    for (let i = 0; i < 9; i++) {
        children[i].innerText = "";
    }
    number_of_moves = 9;
}


function initialize(){
    number_of_moves = 9;
    displayBoard = document.createElement("div")
    displayBoard.className = "game-display-board";
    textDisplay = document.createElement("h3")
    textDisplay.innerText = "Player 1's Turn"
    textDisplay.className = "game-display-board-left"
    displayBoard.appendChild(textDisplay)
    let resetButton = document.createElement("button")
    resetButton.innerText = "Reset"
    resetButton.className = "game-display-board-right"
    resetButton.addEventListener("click",ResetBoard)
    displayBoard.appendChild(resetButton);

    let heading = document.createElement("h1")
    heading.innerText = "Tic Tac Toe";
    mainContainer.appendChild(heading)

    gameContainer = document.createElement("div")
    mainContainer.className = "main-container";
    mainContainer.appendChild(displayBoard)
    mainContainer.appendChild(gameContainer)
    createBoard()
}


function onClickBoard(){
    if (!gameRunning) return

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
    if (player) textDisplay.innerText = "Player 2's(X) Turn";
    else textDisplay.innerText = "Player 1's(O) Turn";
    number_of_moves-=1;
    let checkValue = hasWonOrDrawn()
    if (checkValue===1){
        gameRunning = false
        textDisplay.innerText = "Player 1 has Won";
        window.alert("Player 1 has Won!");
    }
    else if (checkValue===2){
        gameRunning = false
        textDisplay.innerText= "Player 2 has Won";
        window.alert("Player 2 has Won");
    }
    else if (checkValue===3){
        gameRunning = false
        textDisplay.innerText = "It is a Draw";
        window.alert("It is a Draw");
    }
}

function getValue(child){
    if (child.innerText.length===0) return -10;

    if (child.innerText==='O'){
        return 0;
    }
    else if (child.innerText==='X'){
        return 1;
    }

}

function hasWonOrDrawn(){
    let children = gameContainer.children;
    //row wise check
    let start =0;
    let rowSum = 0;
    for (let i = 0; i < 3; i++) {
        rowSum = 0;
        for(let j=0;j<3;j++) {
            rowSum+=getValue(children[start + j])
        }
        if (rowSum===0) return 1
        if (rowSum===3) return 2
        start+=3
    }


    //col wise check
    for (let i=0;i<3;i++){
        let colSum = getValue(children[i])+getValue(children[i+3])+getValue(children[i+3*2]);
        if (colSum===0) return 1
        if (colSum===3) return 2
    }

    //diagonal wise check
    let diagonal1 = getValue(children[0])+getValue(children[4])+getValue(children[8])
    if (diagonal1===0 || diagonal1===3){
        window.alert('Player Won By diag!')
        return
    }
    let diagonal2 = getValue(children[6])+getValue(children[4])+getValue(children[2])
    if (diagonal2===0) return 1
    if (diagonal2===3) return 2

    if (number_of_moves<=0) return 3

    return 0
}

function createBoard(){
    gameContainer.className = "game-board";
    for (let i = 0; i < 9; i++) {
            const buttonElement = document.createElement("button");
            buttonElement.className = "box";
            buttonElement.value = i.toString();
            buttonElement.addEventListener("click",onClickBoard);
            const node = document.createTextNode("");
            buttonElement.appendChild(node);
            gameContainer.appendChild(buttonElement);
    }
}

initialize();
