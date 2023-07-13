const huntingGrounds = document.querySelector('#hunting-grounds');
let GRIDSIZE = 4;

function createRow(){
    let row = document.createElement('div');
    row.classList.add('row');
    return row;
}

function generateRandomColour(minRed, maxRed, minGreen, maxGreen, minBlue, maxBlue){
    let randomRed = Math.floor((Math.random() * (maxRed-minRed)) + minRed).toString(16).padStart(2, '0');
    let randomGreen = Math.floor((Math.random() * (maxGreen-minGreen)) + minGreen).toString(16).padStart(2, '0');
    let randomBlue = Math.floor((Math.random() * (maxBlue-minBlue)) + minBlue).toString(16).padStart(2, '0');
    return randomRed + randomGreen + randomBlue;
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
    // Random green background
    square.style.backgroundColor = "#" + generateRandomColour(0, 30, 50, 256, 0, 30);
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
    toggleRabbits(row, column);
}

function toggleRabbits(row, column) {
    const targetCoordinates = [
        [row - 1, column],
        [row, column - 1],
        [row, column],
        [row, column + 1],
        [row + 1, column],
    ];
    for (const target of targetCoordinates) {
        if (!(0 <= target[0] && target[0] < GRIDSIZE && 0 <= target[1] && target[1] < GRIDSIZE)) {
            // invalid coordinate
            continue;
        }
        let targetSquare = document.querySelector(`.row${target[0]}.column${target[1]}`);
        targetSquare.classList.toggle('rabbit');
        if (targetSquare.classList.contains('rabbit')) {
            targetSquare.textContent = '🐇';
            targetSquare.style.backgroundColor = "#" + generateRandomColour(0, 30, 50, 256, 0, 30);
        } else {
            targetSquare.textContent = '';
            targetSquare.style.backgroundColor = "#" + generateRandomColour(150, 256, 0, 50, 0, 50);
        }
    }
}

// Generate grid
for (let i = 0; i < GRIDSIZE; i+= 1) {
    let row = createRow(i);
    for (let j = 0; j < GRIDSIZE; j += 1) {
        let square = createSquare(i, j, GRIDSIZE);
        row.appendChild(square);
    }
    huntingGrounds.appendChild(row);
}