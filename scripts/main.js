let currentColor = 'black';
let currentColorBlock = document.getElementsByClassName("currentColor")[0];

let colorPicker = document.getElementById("colorPicker");

let undoStack = [];
let redoStack = [];

colorPicker.addEventListener("input", () => {
    setCurrentColor(colorPicker.value);
})

function setCurrentColor(color){
    currentColor = color;
    currentColorBlock.style.backgroundColor = currentColor;
}

function changeColor(cell, backgroundColor=currentColor){
    if(!undoStack[undoStack.length-1]){
        undoStack.push([cell, cell.style.backgroundColor, currentColor]);
    }
    else{
        if(undoStack[undoStack.length-1][0] != cell && undoStack[undoStack.length-1][1] != currentColor){
            undoStack.push([cell, cell.style.backgroundColor, currentColor]);
        }
    }
    cell.style.backgroundColor = backgroundColor;
}

function toggleBorders(){
    var cells = document.querySelectorAll(".gridcell");
    if(cells[0].style.border){
        cells.forEach((cell) => {
            cell.style.border = '';
        });
    }
    else{
        cells.forEach((cell) => {
            cell.style.border = '1px solid black';
        });
    }
}

function undo(){
    if(undoStack.length){
        let [cell, backgroundColor, lastColor] = undoStack.pop();
        cell.style.backgroundColor = backgroundColor;
        redoStack.push([cell, backgroundColor, lastColor]);
    }
}

function redo(){
    if(redoStack.length){
        let [cell, backgroundColor, lastColor] = redoStack.pop();
        cell.style.backgroundColor = lastColor;
        undoStack.push([cell, backgroundColor, lastColor]);
    }
}
