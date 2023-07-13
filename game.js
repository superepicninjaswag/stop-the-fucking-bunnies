const huntingGrounds = document.querySelector('#hunting-grounds');
let GRIDSIZE = 4;

function createRow(){
    let row = document.createElement('div');
    row.classList.add('row');
    return row;
}

function createSquare(row, column, size) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add('rabbit');
    square.classList.add(`row${row}`);
    square.classList.add(`column${column}`);
    square.style.width = `${100/size}%`;
    square.addEventListener('click', cullRabbit);
    square.textContent = '🐇';
    let darkLimit = 80;
    let lightLimit = 230;
    let randomRed = Math.floor(Math.random() * 30).toString(16).padStart(2, '0');
    let randomGreen = Math.floor((Math.random() * (lightLimit-darkLimit)) + darkLimit).toString(16).padStart(2, '0');
    let randomBlue = Math.floor(Math.random() * 30).toString(16).padStart(2, '0');
    square.style.backgroundColor = "#" + randomRed + randomGreen + randomBlue;
    console.log(`#${randomRed}${randomGreen}${randomBlue}`);
    return square;
}

function cullRabbit(e){
    let square = e.target;
    let row;
    let column;
    square.classList.forEach((c) => {
        if (c.startsWith('row')) {
            row = parseInt(c.substring(3));
        } else if (c.startsWith('column')) {
            column = parseInt(c.substring(6));
        }
    });
}

function toggleRabbit(row, column) {
    let rowOfSquares = document.querySelectorAll(`row${row}`);
    let targetSquare;
    rowOfSquares.forEach((square) => {
        if (square.classList.contains(`column${column}`)) {
            targetSquare = square;
        }
    });
    targetSquare.classList.toggle('rabbit');
    if (targetSquare.classList.contains('rabbit')) {
        targetSquare.textContent = '🐇';
    } else {
        targetSquare.textContent = '';
    }
}

for (let i = 0; i < GRIDSIZE; i+= 1) {
    let row = createRow(i);
    for (let j = 0; j < GRIDSIZE; j += 1) {
        let square = createSquare(i, j, GRIDSIZE);
        row.appendChild(square);
    }
    huntingGrounds.appendChild(row);
}