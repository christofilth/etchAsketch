const container = document.getElementById("container");

const pageTitle = document.createElement("h1");
pageTitle.textContent = "etch-A-sketch";
container.appendChild(pageTitle);

// Settings bar 

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

const sizeButton = document.createElement("button");
sizeButton.classList.add("sizeButton");
sizeButton.textContent = "Go!";
sizeButton.addEventListener("click", () => {
    let userSize = document.getElementById("sizeInput").value;
    if (userSize > 0 && userSize <= 100) {
    gridContainer.innerHTML="";
    createGrid(userSize);
    } else {
        alert("Please enter a number between 1 and 100");
    }
    console.log(userSize);
});
settingsContainer.appendChild(sizeButton);

// Grid

const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
container.appendChild(gridContainer);

function createGrid(gridSize){
    document.documentElement.style.setProperty("--gridSize", gridSize);
    for (i = 0; i < gridSize * gridSize; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "grey";
        });
        gridContainer.appendChild(cell);
    }
}

createGrid(16);