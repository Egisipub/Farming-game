const numTilesX = 20; 
const numTilesY = 10; 
const tileSize = 72; 
var mouseTileX = 0; 
var mouseTileY = 0; 
var onFarm = false; 
var seeds = []; 
let coins = 25; 

// 1. Array to track which soil squares have the untilled green overlay 
var untilled = []; 

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
        
        // 3. Draw the untilled green overlay box if the array says it's true 
        if (untilled[row][col] === true) { 
          noStroke(); 
          fill(100, 130, 64); // untilled soil color 
          rect(x, y, tileSize, tileSize); 
        } 
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
      // 4. Check if the tile is still untilled 
      if (untilled[mouseTileY][mouseTileX] === true) { 
        // Only allow tilling if player has 20 or more coins 
        if (coins >= 20) { 
          untilled[mouseTileY][mouseTileX] = false; // Left click tills it (removes the overlay) 
          coins -= 20; // Deduct 20 coins 
        } 
      } else { 
        // Only allow planting if there isn't a seed already, and player has 5 or more coins 
        if (seeds[mouseTileY][mouseTileX] === 0 && coins >= 5) { 
          plantSeed(); // If it's already tilled, you can plant! 
          coins -= 5; // Deduct 5 coins 
        } 
      } 
    } 
  } 
} 

async function setup() { 
  createCanvas(1440, 720); 
  noStroke(); 
  for (let row = 0; row < numTilesY; row++) { 
    seeds[row] = []; 
    untilled[row] = []; // 2. Initialize the rows for the untilled overlay state 
    for (let col = 0; col < numTilesX; col++) { 
      seeds[row][col] = 0; // Initialize with 0 (No seed) instead of false 
      
      // All farmland starts as true (untilled), non-farmland starts as false 
      if (whatSquare(row, col) === "1") { 
        untilled[row][col] = true; 
      } else { 
        untilled[row][col] = false; 
      } 
    } 
  } 
} 

function draw() { 
  background(220); 
  drawLevel(); 
  
  fill(0); 
  textSize(24); 
  text("Coins: " + coins, 10, height - 30); 
  
  if (currentSeed === 1) { 
    text("carrot seed", 10, 30); 
  } else if (currentSeed === 2) { 
    text("lettuce seed", 10, 30); 
  } 
}
