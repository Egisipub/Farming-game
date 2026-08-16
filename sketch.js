// Farming game by Egisipub (Casey Emery) - 8/6/2026

//hope you enjoy it!

//ahhhhhhhh

const numTilesX = 20; 
const numTilesY = 10; 
const tileSize = 72; 

var mouseTileX = 0; 
var mouseTileY = 0; 

var onFarm = false; 

var seeds = []; 

let coins = 25.0; 

let formatedCoins = "0.0"; 

var untilled = []; 

var growthTimers = []; 


const carrotSellPrice = 6.25;
const carrotPurchasePrice = 5;

const lettuceSellPrice = 20
const lettucePurchasePrice = 16






var watered = [];
var waterTimers = [];
const waterDuration = 18000; // 5 minutes 


const growthTimeCarrot = 3600; //1 min
const growthTimeLettuce = 7200; // 3 mins




var currentSeed = 1; 

var carrotSprite, lettuceSprite, grassSprite, farmlandSprite, fenceSprite, highlightSprite, rockSprite, customFont, carrotGrown, lettuceGrown, shopIcon, coinIcon, achievementsIcon, itemIcon, seedIcon, backIcon, shopWindow, carrotSeedIcon, lettuceSeedIcon, farmlandWateredSprite, carrotWatered, lettuceWatered; 
var bgMusic; 

var audioStarted = false; 

var isShopOpen = false;

const seedBtnX = 550; 
const seedBtnY = 10; 
const seedBtnSize = 96; 

const achiBtnX = 10; 
const achiBtnY = 370; 
const achiBtnSize = 96; 

const shopBtnX = 10; 
const shopBtnY = 490; 
const shopBtnSize = 96; 

const backBtnX = 415; 
const backBtnY = 520; 
const backBtnSize = 56; 


//buttons for getting seeds n stuff

const carrotSeedBtnX = 140;
const carrotSeedBtnY = 150;
const carrotSeedBtnSize = 64;

const lettuceSeedBtnX = 214;
const lettuceSeedBtnY = 150;
const lettuceSeedBtnSize = 64;

level = [ 
  "22222222222222222222", 
  "00000000000000000000", 
  "00000000111111111100", 
  "00000000000000000000", 
  "00000000111111111100", 
  "00000000000000000000", 
  "00000000111111111100", 
  "00000000000000000000", 
  "00000000111111111100", 
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
          if (!isShopOpen) {
            onFarm = true; 
            highlightX = x; 
            highlightY = y; 
          }
        } 
      } 

      if (squareType === "0") { 
        image(grassSprite, x, y, tileSize, tileSize); 
      } else if (squareType === "1") { 
        image(farmlandSprite, x, y, tileSize, tileSize); 
        if (untilled[row][col] === true) { 
          image(rockSprite, x, y, tileSize, tileSize); 
        } 

        if (watered[row][col] === true) {
          image(farmlandWateredSprite, x, y, tileSize, tileSize);
        }

        
      } else if (squareType === "2") { 
        image(fenceSprite, x, y, tileSize, tileSize); 
      } 



      if (waterTimers[row][col] > 0) {
        waterTimers[row][col]--;
        if (waterTimers[row][col] <= 0) {
          watered[row][col] = false;
        }
      }



      if (seeds[row][col] !== 0) {
  noStroke();
  let imgSize = tileSize * 0.8;
  let offset = (tileSize - imgSize) / 2;

  if (growthTimers[row][col] > 0) {

    if (watered[row][col] === true) {
      growthTimers[row][col]--;
    }

  if (seeds[row][col] === 1) {
        image(carrotSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 2) {
        image(lettuceSprite, x + offset, y + offset, imgSize, imgSize);
      }

    } else {

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



function mousePressed() { 
  if (bgMusic && !audioStarted) { 
    bgMusic.play(); 
    audioStarted = true; 
  } 

  if (isShopOpen) {
    if (mouseX >= backBtnX && mouseX <= backBtnX + backBtnSize && mouseY >= backBtnY && mouseY <= backBtnY + backBtnSize) {
      isShopOpen = false; 
     
      return; 
    }
  }

  if (mouseX >= shopBtnX && mouseX <= shopBtnX + shopBtnSize && mouseY >= shopBtnY && mouseY <= shopBtnY + shopBtnSize) { 
    console.log("Shop Button Clicked!"); 
    return; 
  } 

  if (mouseX >= achiBtnX && mouseX <= achiBtnX + achiBtnSize && mouseY >= achiBtnY && mouseY <= achiBtnY + achiBtnSize) { 
    console.log("Achievements Button Clicked!"); 
    return; 
  } 

  if (mouseX >= seedBtnX && mouseX <= seedBtnX + seedBtnSize && mouseY >= seedBtnY && mouseY <= seedBtnY + seedBtnSize) { 
    
    isShopOpen = true; 
    return; 
  } 

  if (isShopOpen) return;

  if (mouseTileX >= 0 && mouseTileX < numTilesX && mouseTileY >= 0 && mouseTileY < numTilesY) { 
    if (onFarm) {


  if (untilled[mouseTileY][mouseTileX] === false) {
    if (watered[mouseTileY][mouseTileX] === false) {
      watered[mouseTileY][mouseTileX] = true;
      waterTimers[mouseTileY][mouseTileX] = waterDuration;
      return;
    }
  }

 
  if (untilled[mouseTileY][mouseTileX] === true) {
    if (coins >= 10000) {
      untilled[mouseTileY][mouseTileX] = false;
      coins -= 10000;
    }
    return;
  }

  
  if (seeds[mouseTileY][mouseTileX] !== 0) {
    if (growthTimers[mouseTileY][mouseTileX] <= 0) {
      if (seeds[mouseTileY][mouseTileX] === 1) coins += carrotSellPrice;
      else if (seeds[mouseTileY][mouseTileX] === 2) coins += lettuceSellPrice;
      seeds[mouseTileY][mouseTileX] = 0;
    }
    return;
  }

 
  let cost = currentSeed === 1 ? carrotPurchasePrice : lettucePurchasePrice;

  if (coins >= cost) {
    plantSeed();
    if (currentSeed === 1) growthTimers[mouseTileY][mouseTileX] = growthTimeCarrot;
    else if (currentSeed === 2) growthTimers[mouseTileY][mouseTileX] = growthTimeLettuce;
    coins -= cost;
  }
}

    } 
  } 


function formatMoney(amount) { 
  if (amount >= 1000000000000) {
    let truncated = Math.floor((amount / 1000000000000) * 100) / 100; 
    return truncated.toFixed(2) + "T"; 
  }
  else if (amount >= 1000000000) { 
    let truncated = Math.floor((amount / 1000000000) * 100) / 100; 
    return truncated.toFixed(2) + "B"; 
  } else if (amount >= 1000000) { 
    let truncated = Math.floor((amount / 1000000) * 100) / 100; 
    return truncated.toFixed(2) + "M"; 
  } else if (amount >= 1000) { 
    let truncated = Math.floor((amount / 1000) * 100) / 100; 
    return truncated.toFixed(2) + "K"; 
  } 
  let truncatedNormal = Math.floor(amount * 100) / 100; 
  return truncatedNormal.toFixed(2); 
} 

async function setup() { 
  createCanvas(1440, 720); 
  noStroke(); 
  noSmooth(); 

  frameRate(60);



  customFont = await loadFont('assets/font.ttf'); 
  carrotSprite = await loadImage('assets/carrotSeed.png'); 
  lettuceSprite = await loadImage('assets/lettuceSeed.png'); 
  grassSprite = await loadImage('assets/grass.png'); 
  farmlandSprite = await loadImage('assets/farmland.png'); 
  highlightSprite = await loadImage('assets/highlight.png'); 
  rockSprite = await loadImage('assets/rock.png'); 
  carrotGrown = await loadImage('assets/carrot.png'); 
  lettuceGrown = await loadImage('assets/lettuce.png'); 
  shopIcon = await loadImage('assets/shopIcon.png'); 
  coinIcon = await loadImage('assets/coinIcon.png'); 
  achievementsIcon = await loadImage('assets/achievementsIcon.png'); 
  itemIcon = await loadImage('assets/itemIcon.png'); 
  fenceSprite = await loadImage('assets/fence.png'); 
  seedIcon = await loadImage('assets/seedIcon.png'); 
  backIcon = await loadImage('assets/backIcon.png'); 
  shopWindow = await loadImage('assets/shopWindow.png'); 
  lettuceSeedIcon = await loadImage('assets/lettuceSeedIcon.png');
  carrotSeedIcon = await loadImage('assets/carrotSeedIcon.png');
  farmlandWateredSprite = await loadImage('assets/farmlandWatered.png');
  bgMusic = new Audio('assets/bgMusic.wav'); 
  bgMusic.loop = true; 
  bgMusic.volume = 0.5; 

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

      if (whatSquare(row, col) === "1") {
        untilled[row][col] = true;
      } else {
        untilled[row][col] = false;
      }

      if (row === numTilesY - 2) {
        untilled[row][col] = false;
      }


    } 
  } 


  for (let row = 0; row < numTilesY; row++) {
    watered[row] = [];
    waterTimers[row] = [];
    for (let col = 0; col < numTilesX; col++) {
      watered[row][col] = false;
      waterTimers[row][col] = 0;
    }
  }














} 

function draw() { 
  background(220); 
  textFont(customFont); 
  drawLevel(); 

  let currentSize, offset; 

  currentSize = shopBtnSize; 
  offset = 0; 
  if (mouseX >= shopBtnX && mouseX <= shopBtnX + shopBtnSize && mouseY >= shopBtnY && mouseY <= shopBtnY + shopBtnSize) { 
    if (mouseIsPressed) { 
      currentSize = shopBtnSize - 12; 
      offset = 6; 
    } else { 
      currentSize = shopBtnSize + 12; 
      offset = -6; 
    } 
  } 
  image(shopIcon, shopBtnX + offset, shopBtnY + offset, currentSize, currentSize); 

  currentSize = achiBtnSize; 
  offset = 0; 
  if (mouseX >= achiBtnX && mouseX <= achiBtnX + achiBtnSize && mouseY >= achiBtnY && mouseY <= achiBtnY + achiBtnSize) { 
    if (mouseIsPressed) { 
      currentSize = achiBtnSize - 12; 
      offset = 6; 
    } else { 
      currentSize = achiBtnSize + 12; 
      offset = -6; 
    } 
  } 
  image(achievementsIcon, achiBtnX + offset, achiBtnY + offset, currentSize, currentSize); 

  currentSize = seedBtnSize; 
  offset = 0; 
  if (mouseX >= seedBtnX && mouseX <= seedBtnX + seedBtnSize && mouseY >= seedBtnY && mouseY <= seedBtnY + seedBtnSize) { 
    if (mouseIsPressed) { 
      currentSize = seedBtnSize - 12; 
      offset = 6; 
    } else { 
      currentSize = seedBtnSize + 12; 
      offset = -6; 
    } 
  } 
  image(seedIcon, seedBtnX + offset, seedBtnY + offset, currentSize, currentSize); 

  image(coinIcon, 10, height - 110, 420, 96); 
  image(itemIcon, 10, 10, 525, 96); 

  if (isShopOpen) {
    image(shopWindow, 120, 135, 360, 450); 
    
    let backSize = backBtnSize;
    let backOffset = 0;
    if (mouseX >= backBtnX && mouseX <= backBtnX + backBtnSize && mouseY >= backBtnY && mouseY <= backBtnY + backBtnSize) {
      if (mouseIsPressed) {
        backSize = backBtnSize - 8;
        backOffset = 4;
      } else {
        backSize = backBtnSize + 8;
        backOffset = -4;
      }
    }
    image(backIcon, backBtnX + backOffset, backBtnY + backOffset, backSize, backSize); 
  }





  if (isShopOpen) {
    let itemSize, itemOffset;

   
    itemSize = carrotSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= carrotSeedBtnX && mouseX <= carrotSeedBtnX + carrotSeedBtnSize && 
        mouseY >= carrotSeedBtnY && mouseY <= carrotSeedBtnY + carrotSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = carrotSeedBtnSize - 8; 
        itemOffset = 4;


        currentSeed = 1;
      } else {
        itemSize = carrotSeedBtnSize + 8; 
        itemOffset = -4;
      }
    }
    image(carrotSeedIcon, carrotSeedBtnX + itemOffset, carrotSeedBtnY + itemOffset, itemSize, itemSize);

    

    itemSize = lettuceSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= lettuceSeedBtnX && mouseX <= lettuceSeedBtnX + lettuceSeedBtnSize && 
        mouseY >= lettuceSeedBtnY && mouseY <= lettuceSeedBtnY + lettuceSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = lettuceSeedBtnSize - 8; 
        itemOffset = 4;

        currentSeed = 2;
      } else {
        itemSize = lettuceSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(lettuceSeedIcon, lettuceSeedBtnX + itemOffset, lettuceSeedBtnY + itemOffset, itemSize, itemSize);
  }






  textSize(34); 
  fill(173, 148, 139); 
  formatedCoins = formatMoney(coins); 
  
  textAlign(RIGHT, BASELINE); 
  text(formatedCoins + " coins", 335, height - 50); 
  textAlign(LEFT, BASELINE); 

  if (currentSeed === 1) { 
    text("carrot seed (5 coins)", 20, 65); 
  } else if (currentSeed === 2) { 
    text("lettuce seed (30 coins)", 20, 65); 
  }

  fill(0);

  
  let btnTooltip = "";

  
  if (mouseX >= shopBtnX && mouseX <= shopBtnX + shopBtnSize && mouseY >= shopBtnY && mouseY <= shopBtnY + shopBtnSize) {
    btnTooltip = "sell all";
  }
  
  else if (mouseX >= achiBtnX && mouseX <= achiBtnX + achiBtnSize && mouseY >= achiBtnY && mouseY <= achiBtnY + achiBtnSize) {
    btnTooltip = "achievements";
  }
  
  else if (mouseX >= seedBtnX && mouseX <= seedBtnX + seedBtnSize && mouseY >= seedBtnY && mouseY <= seedBtnY + seedBtnSize) {
    btnTooltip = "buy seeds";
  }
 
  else if (isShopOpen && mouseX >= backBtnX && mouseX <= backBtnX + backBtnSize && mouseY >= backBtnY && mouseY <= backBtnY + backBtnSize) {
    btnTooltip = "go back";
  }
   else if (isShopOpen && mouseX >= carrotSeedBtnX && mouseX <= carrotSeedBtnX + carrotSeedBtnSize && mouseY >= carrotSeedBtnY && mouseY <= carrotSeedBtnY + carrotSeedBtnSize) {
    btnTooltip = "select carrot";
  } else if (isShopOpen && mouseX >= lettuceSeedBtnX && mouseX <= lettuceSeedBtnX + lettuceSeedBtnSize && mouseY >= lettuceSeedBtnY && mouseY <= lettuceSeedBtnY + lettuceSeedBtnSize) {
    btnTooltip = "select lettuce";
  }


  if (btnTooltip !== "") {
    stroke(255);
    strokeWeight(4);
    textSize(20);
    fill(0);
    textAlign(CENTER, BOTTOM);
    text(btnTooltip, mouseX, mouseY - 15);
    textAlign(LEFT, BASELINE); 
  }


  if (onFarm) {
    let tooltipText = "";

    stroke(255);
    strokeWeight(4);
    textSize(20);
    fill(0);

    if (untilled[mouseTileY][mouseTileX] === true) {
      tooltipText = "Click to till the soil (10k coins)";
    } else if (seeds[mouseTileY][mouseTileX] !== 0 && growthTimers[mouseTileY][mouseTileX] <= 0) {
     
      
      
      if (seeds[mouseTileY][mouseTileX] === 1) {
        tooltipText = "harvest carrot (get" + carrotSellPrice + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 2) {
        tooltipText = "harvest lettuce (get " + carrotSellPrice + " coins)";
      }



    }
    if (tooltipText !== "") {
      textSize(24);
      fill(0);
      textAlign(CENTER, CENTER);
      text(tooltipText, mouseX, mouseY - 20);
      textAlign(LEFT, BASELINE);
    }
  }
  noStroke();
}



