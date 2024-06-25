const container = document.getElementById("container");

const settingsContainer = document.createElement("div");
settingsContainer.classList.add("settingsContainer");
container.appendChild(settingsContainer);

const sizeInput = document.createElement("input");
sizeInput.setAttribute("id", "sizeInput");
sizeInput.addEventListener("click", () => {
    document.getElementById("sizeInput").value = "";
    });
settingsContainer.appendChild(sizeInput);
document.getElementById("sizeInput").value = "Enter a grid size up to 100";

const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
container.appendChild(gridContainer);

function createGrid(column,row){
    document.documentElement.style.setProperty("--column", column);
    for (i = 0; i < column * row; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "grey";
        });
        gridContainer.appendChild(cell);
    }
}

createGrid(16,16);