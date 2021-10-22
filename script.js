let container = document.createElement("div");
container.className = 'container';

document.body.appendChild(container);

let gridSize = 16;

function draw(e){
    e.target.classList.add('drawn');
}

let divGrid = () => {
                for(let i = 0; i<gridSize; i++)
                    for(let j = 0; j<gridSize; j++){
                        let smallDiv = document.createElement("div");
                        smallDiv.className = 'gridDot';
                        smallDiv.addEventListener('mouseover', draw);
                        container.appendChild(smallDiv);
                    }
                }
                
divGrid();
                    
