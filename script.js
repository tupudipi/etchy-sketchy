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
      e.target.classList.add("drawn");
      break;
    case "greyScale":
        e.target.classList.add("drawnGrey");
      break;
    case "rainbow":
      e.target.classList.add("drawn");
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
