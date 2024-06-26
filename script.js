const container = document.getElementById("container");

const titleContainer = document.createElement("div");
titleContainer.classList.add("titleContainer");
container.appendChild(titleContainer);

const pageTitle = document.createElement("div");
pageTitle.classList.add("pageTitle");
pageTitle.textContent = "etch-A-sketch";
titleContainer.appendChild(pageTitle);

// Settings bar 

const settingsContainer = document.createElement("div");
settingsContainer.classList.add("settingsContainer");
container.appendChild(settingsContainer);

// Size bar/button

const sizeInput = document.createElement("input");
sizeInput.setAttribute("id", "sizeInput");
sizeInput.addEventListener("click", () => {
    document.getElementById("sizeInput").value = "";
    });
settingsContainer.appendChild(sizeInput);
document.getElementById("sizeInput").value = "Enter a grid size up to 100";

let userSize = 16;

const sizeButton = document.createElement("button");
sizeButton.classList.add("sizeButton");
sizeButton.textContent = "GO";
sizeButton.addEventListener("click", () => {
    userSize = document.getElementById("sizeInput").value;
    if (userSize > 0 && userSize <= 100) {
    gridContainer.innerHTML="";
    createGrid(userSize);
    } else {
        alert("Please enter a number between 1 and 100");
    }
    console.log(userSize);
});
settingsContainer.appendChild(sizeButton);


let colourPressed = false;

const colourButton = document.createElement("button");
colourButton.classList.add("colourButton");
colourButton.textContent = "RANDOM COLOURS";
colourButton.addEventListener("click", () => {
    colourPressed = true;
    gridContainer.innerHTML="";
    createGrid(userSize);
    console.log(colourPressed);
});
settingsContainer.appendChild(colourButton);

let ranRed = Math.floor(Math.random() * 255);
let ranGreen = Math.floor(Math.random() * 255);
let ranBlue = Math.floor(Math.random() * 255);

const gridContainer = document.createElement("div");
gridContainer.classList.add("gridContainer");
container.appendChild(gridContainer);

function createGrid(gridSize){
    document.documentElement.style.setProperty("--gridSize", gridSize);
    if (colourPressed == true) {
        function createNum(){
        let ranNum = Math.floor(Math.random() * 255);
        return ranNum;
        }
        for (i = 0; i < gridSize * gridSize; i++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = `rgb(${createNum()}, ${createNum()}, ${createNum()})`;
            });
            gridContainer.appendChild(cell);
            console.log(ranRed, ranGreen, ranBlue)
        }
    } else {
        for (i = 0; i < gridSize * gridSize; i++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "grey";
            });
            gridContainer.appendChild(cell);
        }
    }


}


createGrid(userSize);