const numTilesX = 20; 
const numTilesY = 10; 
const tileSize = 72; 
var mouseTileX = 0; 
var mouseTileY = 0; 
var onFarm = false; 
var seeds = [];

// Track the active seed type: 1 = Orange, 2 = green, 0 = None
var currentSeed = 2; 

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
  onFarm = false; 

  for (let row = 0; row < numTilesY; row++) { 
    for (let col = 0; col < numTilesX; col++) { 
      let squareType = whatSquare(row, col); 
      let x = col * tileSize; 
      let y = row * tileSize; 

      if (mouseX >= x && mouseX < x + tileSize && mouseY >= y && mouseY < y + tileSize) { 
        mouseTileX = col; 
        mouseTileY = row; 
        if (squareType === "1") { 
          onFarm = true; 
          stroke(255); // outline 
          strokeWeight(2); 
        } else { 
          noStroke(); 
        } 
      } else { 
        noStroke(); 
      } 

      if (squareType === "0") { 
        fill(0, 255, 0); // Grass 
        rect(x, y, tileSize, tileSize); 
      } else if (squareType === "1") { 
        fill(135, 96, 68); // farmland 
        rect(x, y, tileSize, tileSize); 
      } 

      // Draw different colored seeds based on the stored ID number
      if (seeds[row][col] !== 0) { 
        noStroke(); 
        
        if (seeds[row][col] === 1) {
          fill(255, 165, 0); // Seed Type 1: Orange
        } else if (seeds[row][col] === 2) {
          fill(0, 150, 0); // Seed Type 2: Green
        }
        
        ellipse(x + tileSize / 2, y + tileSize / 2, tileSize * 0.4); 
      } 

      noStroke(); // Reset stroke for next square 
    } 
  } 
} 

function plantSeed() { 
  // Store the active seed type number into the array
  seeds[mouseTileY][mouseTileX] = currentSeed; 
} 

function keyPressed() {
  if (key === '1') {
    currentSeed = 1;
  } else if (key === '2') {
    currentSeed = 2;
  }
}


function mousePressed() { 
  if (mouseTileX >= 0 && mouseTileX < numTilesX && mouseTileY >= 0 && mouseTileY < numTilesY) { 
    if (onFarm) { 
      plantSeed(); 
    } 
  } 
} 

async function setup() { 
  createCanvas(1440, 720); 
  noStroke(); 

  for (let row = 0; row < numTilesY; row++) { 
    seeds[row] = []; 
    for (let col = 0; col < numTilesX; col++) { 
      seeds[row][col] = 0; // Initialize with 0 (No seed) instead of false
    } 
  } 
} 

function draw() { 
  background(220); 
  drawLevel(); 
}
