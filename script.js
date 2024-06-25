function createGrid(column,row){
    const container = document.getElementById("container");
    document.documentElement.style.setProperty("--column", column);
    for (i = 0; i < column * row; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
}

createGrid(16,16);