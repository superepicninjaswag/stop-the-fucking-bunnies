const huntingGrounds = document.querySelector('#hunting-grounds');
let GRIDSIZE = 6;

function createRow(){
    let row = document.createElement('div');
    row.classList.add('row');
    return row;
}

function createSquare(size) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${100/size}%`;
    square.style.aspectRatio = `1 / 1`;
    square.textContent = '🐇';
    return square;
}

for (let i = 0; i < GRIDSIZE; i+= 1) {
    let row = createRow();
    for (let j = 0; j < GRIDSIZE; j += 1) {
        let square = createSquare(GRIDSIZE);
        row.appendChild(square);
    }
    huntingGrounds.appendChild(row);
}