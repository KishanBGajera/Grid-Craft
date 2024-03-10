let currentColor = 'black';
let currentColorBlock = document.getElementsByClassName("currentColor")[0];

let colorPicker = document.getElementById("colorPicker");

colorPicker.addEventListener("input", () => {
    setCurrentColor(colorPicker.value);
})

function setCurrentColor(color){
    currentColor = color;
    currentColorBlock.style.backgroundColor = currentColor;
}

function changeColor(cell){
    cell.style.backgroundColor = currentColor;
}
