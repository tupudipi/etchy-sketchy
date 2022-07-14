let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerText = slider.value;

slider.oninput = function () {
  output.innerText = this.value;
};

let container = document.createElement("div");
container.className = "container";

document.getElementsByClassName("playArea")[0].appendChild(container);

let gridSize = 16;

let drawModeForm = document.getElementById("drawModeForm");
let drawModeRadios = drawModeForm.elements["drawMode"];

for (let i = 0; i < drawModeRadios.length; i++) {
  drawModeRadios[i].addEventListener("click", selectDrawMode);
}

let drawMode = "";

function selectDrawMode() {
  drawMode = this.id;
  console.log(drawMode);
  container.innerHTML = "";
  divGrid(slider.value);
}

function draw(e) {
  switch (drawMode) {
    case "black":
      e.target.style.backgroundColor = "black";
      break;
    case "greyScale":
      //gradually change the color of the div to black using rgba transparency
      let currentColor = e.target.style.backgroundColor;
      let currentColorArray = currentColor.split(",");
      let currentColorA = currentColorArray[3].slice(0, -1);
      let newColorA = +currentColorA + 0.1;
      e.target.style.backgroundColor = `rgba(0,0,0,${newColorA})`;
      break;
    case "rainbow":
      e.target.style.backgroundColor =`hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
      break;
  }
}

let divGrid = (gridSize) => {
  container.style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)";
  container.style.gridTemplateRows = "repeat(" + gridSize + ", 1fr)";
  for (let i = 0; i < gridSize; i++)
    for (let j = 0; j < gridSize; j++) {
      let smallDiv = document.createElement("div");
      smallDiv.className = "gridDot";
      smallDiv.style.backgroundColor = "rgba(0, 0, 0, 0)";
      smallDiv.addEventListener("mouseover", draw);
      container.appendChild(smallDiv);
    }
};

let sizeButton = document.getElementById("sizeSelection");
sizeButton.addEventListener("click", clearAndResize);

function clearAndResize() {
  container.innerHTML = "";
  divGrid(slider.value);
}

divGrid(gridSize);
