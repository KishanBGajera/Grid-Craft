const grid = document.querySelectorAll('.grid')[0];

function generateGrid(){
    let ih = window.innerHeight;
    let iw = window.innerWidth;

    let rows, cols;
    rows = Math.floor(ih/25);
    cols = Math.floor(iw/20); // trial-error values 😢

    for(var i = 0; i < rows; i++){
        let row = document.createElement("tr");
        
        row.id = 'r'+i;
        row.className = "gridrow";
        
        grid.appendChild(row);
        
        for(var j = 0; j < cols; j++){
            const cell = document.createElement("td");
            
            cell.id = 'c'+'-'+i+'-'+j;
            cell.className = "gridcell";
            cell.style.backgroundColor = 'white';
            cell.style.border = "1px solid black";

            cell.addEventListener('click', () => {
                changeColor(cell); // reference in ./main.js
            })

            row.appendChild(cell);
        }
    }
}

window.onload = generateGrid();

window.addEventListener('resize', function(event) {
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    generateGrid(); // to regenerate the grid as the window resizes
});

var colorDivs = document.querySelectorAll('.color');

colorDivs.forEach((div) => {
    var className = div.className;
    
    var colorName = className.split(' ')[1];
    div.style.backgroundColor = colorName; // background-color = class-color-name

    div.addEventListener('click', () => {
        setCurrentColor(div.style.backgroundColor);
    });
});
