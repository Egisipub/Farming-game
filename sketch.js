//
const numTilesX = 20; 
const numTilesY = 10;
const tileSize = 72;


var mouseTileX = 0;
var mouseTileY = 0;

var onFarm = false;

level = [
  "00000000000000000000",
  "00000000111111111100",
  "00000000000000000000",
  "00000000111111111100",
  "00000000000000000000",
  "00000000111111111100",
  "00000000000000000000",
  "00000000111111111100",
  "00000000000000000000",
  "00000000000000000000"
];

function whatSquare(row, col) {
  if (row >= 0 && row < numTilesY && col >= 0 && col < numTilesX) {
    return level[row].charAt(col);
  }
}
function drawLevel() {
  for (let row = 0; row < numTilesY; row++) {
    for (let col = 0; col < numTilesX; col++) {

     

      let squareType = whatSquare(row, col);

      if (mouseX >= col * tileSize && mouseX < (col + 1) * tileSize &&
          mouseY >= row * tileSize && mouseY < (row + 1) * tileSize && squareType === "1") {
        stroke(255); // outline
        strokeWeight(2);

        onFarm = true;

        mouseTileX = col;
        mouseTileY = row;
      }
      else {
        noStroke();
        onFarm = false;
      }
    
      if (squareType === "0") {
        fill(0, 255, 0); // Grass
        rect(col * tileSize, row * tileSize, tileSize, tileSize);
      } 

      else if (squareType === "1") {
        fill(135, 96, 68); // farmland
        rect(col * tileSize, row * tileSize, tileSize, tileSize);
      }
      noStroke(); // Reset stroke for next square
    }
  }
  
}
function mousePressed() {
  if (mouseTileX >= 0 && mouseTileX < numTilesX && mouseTileY >= 0 && mouseTileY < numTilesY) {
    if (onFarm) {
      
    }
  }
}

async function setup() {
  createCanvas(1440, 720);
  noStroke();
}

function draw() {
  background(220);
  drawLevel();
}