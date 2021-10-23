let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerText = slider.value;

slider.oninput = function() {
  output.innerText = this.value;
}

let container = document.createElement("div");
container.className = 'container';

document.getElementsByClassName("playArea")[0].appendChild(container);

let gridSize = 16;

function draw(e){
    e.target.classList.add('drawn');
}

let divGrid = (gridSize) => {
                for(let i = 0; i<gridSize; i++)
                    for(let j = 0; j<gridSize; j++){
                        let smallDiv = document.createElement("div");
                        smallDiv.className = 'gridDot';
                        let size = (720/gridSize);
                        console.log(size);
                        size = size.toString() + "px";
                        smallDiv.style.height = smallDiv.style.width = size;
                        smallDiv.addEventListener('mouseover', draw);
                        container.appendChild(smallDiv);
                    }
                }

let sizeButton = document.getElementById("sizeSelection");
sizeButton.addEventListener('click', clearAndResize);

function clearAndResize(){
    container.innerHTML = "";
    divGrid(slider.value);
}
                
divGrid(gridSize);
                    
