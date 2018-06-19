let size = 40;
let cols;
let rows;

let grid = undefined;

function setup() {
    createCanvas(400, 400);
    cols = width / size;
    rows = height / size;

    grid = new Array(cols);
    for (let x = 0; x < cols; x++) {
        grid[x] = new Array(rows);
    }

    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < cols; y++) {
            grid[x][y] = floor(random(2));
        }
    }
}


function draw() {
    background(0);
    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            if (grid[x][y] == 1) {
                stroke(0);
                fill(0);
            } else {
                stroke(0);
                fill(255);
            }
            
            rect(x * size, y * size, size-1, size-1);
        }
    }
}