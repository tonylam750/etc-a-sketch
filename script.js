const container = document.querySelector('.container')
const reset = document.querySelector('.reset')


let gridSize = 40;

function createGrid(size){

    const squareSize = (container.offsetWidth -4)/size;

    for (let index = 0; index < size*size; index++) {
       let div = document.createElement('div');
       div.className = "square";
       div.style.width = `${squareSize}px`;
       div.style.height = `${squareSize}px`;
       div.addEventListener("mouseover", setColor); 
       container.appendChild(div)       
    }
}


function setColor(){
    this.style.backgroundColor = generateColorCode();
}

function generateColorCode(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;

}

createGrid(gridSize);


reset.addEventListener("click" ,() =>{
    container.replaceChildren();
    createGrid(gridSize);
});