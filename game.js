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
    square.addEventListener('click', toggleRabbit);
    square.textContent = '🐇';
    return square;
}

function toggleRabbit(e) {
    let square = e.target;
    square.classList.toggle('rabbit');
    if (square.classList.contains('rabbit')) {
        square.textContent = '🐇';
    } else {
        square.textContent = '';
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