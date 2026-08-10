const numTilesX = 20; 
const numTilesY = 10; 
const tileSize = 72; 
var mouseTileX = 0; 
var mouseTileY = 0; 
var onFarm = false; 
var seeds = []; 
let coins = 25000; 
var untilled = []; 
var growthTimers = []; 
var currentSeed = 1; 

var carrotSprite, lettuceSprite, grassSprite, farmlandSprite, highlightSprite, rockSprite, customFont, carrotGrown, lettuceGrown; 

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
  let highlightX = -1; 
  let highlightY = -1; 

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
          highlightX = x; 
          highlightY = y; 
        } 
      } 

      if (squareType === "0") { 
        image(grassSprite, x, y, tileSize, tileSize); 
      } else if (squareType === "1") { 
        image(farmlandSprite, x, y, tileSize, tileSize); 
        
        if (untilled[row][col] === true) { 
          image(rockSprite, x, y, tileSize, tileSize); 
        } 
      } 

      if (seeds[row][col] !== 0) { 
        noStroke(); 
        let imgSize = tileSize * 0.8; 
        let offset = (tileSize - imgSize) / 2; 

        if (growthTimers[row][col] > 0) { 
          if (seeds[row][col] === 1) { 
            image(carrotSprite, x + offset, y + offset, imgSize, imgSize); 
          } else if (seeds[row][col] === 2) { 
            image(lettuceSprite, x + offset, y + offset, imgSize, imgSize); 
          } 
          growthTimers[row][col]--; 
        } else { 
          // Renders your mature assets once the timer hits 0
          if (seeds[row][col] === 1) { 
            image(carrotGrown, x + offset, y + offset, imgSize, imgSize); 
          } else if (seeds[row][col] === 2) { 
            image(lettuceGrown, x + offset, y + offset, imgSize, imgSize); 
          } 
        } 
      } 
      noStroke(); 
    } 
  } 

  if (onFarm && highlightX !== -1 && highlightY !== -1) { 
    image(highlightSprite, highlightX, highlightY, tileSize, tileSize); 
  } 
} 

function plantSeed() { 
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
      if (untilled[mouseTileY][mouseTileX] === true) { 
        if (coins >= 20) { 
          untilled[mouseTileY][mouseTileX] = false; 
          coins -= 20; 
        } 
      } else { 
        if (seeds[mouseTileY][mouseTileX] !== 0) { 
          if (growthTimers[mouseTileY][mouseTileX] <= 0) { 
            if (seeds[mouseTileY][mouseTileX] === 1) { 
              coins += 50; 
            } else if (seeds[mouseTileY][mouseTileX] === 2) { 
              coins += 80; 
            } 
            seeds[mouseTileY][mouseTileX] = 0; 
          } 
        } else { 
          let cost = currentSeed === 1 ? 5 : 30; 
          if (coins >= cost) { 
            plantSeed(); 
            growthTimers[mouseTileY][mouseTileX] = 1200; 
            coins -= cost; 
          } 
        } 
      } 
    } 
  } 
} 

async function setup() { 
  createCanvas(1440, 720); 
  noStroke(); 
  noSmooth(); 

  customFont = await loadFont('assets/font.ttf'); 

  carrotSprite = await loadImage('assets/carrotSeed.png'); 
  lettuceSprite = await loadImage('assets/lettuceSeed.png'); 
  grassSprite = await loadImage('assets/grass.png'); 
  farmlandSprite = await loadImage('assets/farmland.png'); 
  highlightSprite = await loadImage('assets/highlight.png'); 
  rockSprite = await loadImage('assets/rock.png'); 
  
  // Cleaned paths targeting assets/carrot.png and assets/lettuce.png
  carrotGrown = await loadImage('assets/carrot.png'); 
  lettuceGrown = await loadImage('assets/lettuce.png'); 

  for (let row = 0; row < numTilesY; row++) { 
    seeds[row] = []; 
    untilled[row] = []; 
    growthTimers[row] = []; 
    for (let col = 0; col < numTilesX; col++) { 
      seeds[row][col] = 0; 
      growthTimers[row][col] = 0; 
      if (whatSquare(row, col) === "1") { 
        untilled[row][col] = true; 
      } else { 
        untilled[row][col] = false; 
      } 
    } 
  } 
} 
//adf
function draw() { 
  background(220); 
  textFont(customFont); 
  drawLevel(); 

  stroke(255); 
  strokeWeight(4); 

  textSize(24); 
  fill(0); 
  text("Coins: " + coins, 10, height - 30); 

  if (currentSeed === 1) { 
    text("carrot seed (5 coins)", 10, 30); 
  } else if (currentSeed === 2) { 
    text("lettuce seed (30 coins)", 10, 30); 
  } 

  if (onFarm) { 
    let tooltipText = ""; 
    if (untilled[mouseTileY][mouseTileX] === true) { 
      tooltipText = "click to till farmland (20 coins)"; 
    } else if (seeds[mouseTileY][mouseTileX] !== 0 && growthTimers[mouseTileY][mouseTileX] <= 0) { 
      if (seeds[mouseTileY][mouseTileX] === 1) { 
        tooltipText = "harvest carrot (get 50 coins)"; 
      } else if (seeds[mouseTileY][mouseTileX] === 2) { 
        tooltipText = "harvest lettuce (get 80 coins)"; 
      } 
    } 

    if (tooltipText !== "") { 
      textSize(16); 
      textAlign(CENTER, BOTTOM); 
      text(tooltipText, mouseX, mouseY - 15); 
      textAlign(LEFT, BASELINE); 
    } 
  } 
  noStroke();
}
