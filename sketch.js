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

let coins = 999999999999999.0; 

let formatedCoins = "0.0"; 

var untilled = []; 

var growthTimers = []; 


const carrotSellPrice = 6.25;
const carrotPurchasePrice = 5;
const growthTimeCarrot = 900; //15 sec

const lettuceSellPrice = 20
const lettucePurchasePrice = 16
const growthTimeLettuce = 1800; //30 sec

const potatoSellPrice = 61.75;
const potatoPurchasePrice = 51;
const growthTimePotato = 2700; //45 sec

const broccoliSellPrice = 203.75;
const broccoliPurchasePrice = 163;
const growthTimeBroccoli= 3600; //1 min

const marigoldSellPrice = 655;
const marigoldPurchasePrice = 524;
const growthTimeMarigold= 5400; //1.5 mins

const herbSellPrice = 2097.5;
const herbPurchasePrice = 1678;
const growthTimeHerb= 7200; //2 mins

const pumpkinSellPrice = 6711;
const pumpkinPurchasePrice = 5369;
const growthTimePumpkin= 9000; //2.5 mins

const blueberrySellPrice = 21457.5;
const blueberryPurchasePrice = 17166;
const growthTimeBlueberry= 10800; //3 mins




var watered = [];
var waterTimers = [];
const waterDuration = 18000; // 5 minutes








var currentSeed = 1; 

var carrotSprite, lettuceSprite, grassSprite, farmlandSprite, fenceSprite, highlightSprite, rockSprite, customFont, carrotGrown, lettuceGrown, coinIcon, achievementsIcon, itemIcon, seedIcon, backIcon, shopWindow, carrotSeedIcon, lettuceSeedIcon, farmlandWateredSprite, carrotWatered, lettuceWatered; 

var potatoSprite, potatoGrown, potatoSeedIcon;
var broccoliSprite, broccoliGrown, broccoliSeedIcon;
var marigoldSprite, marigoldGrown, marigoldSeedIcon;
var herbSprite, herbGrown, herbSeedIcon;
var pumpkinSprite, pumpkinGrown, pumpkinSeedIcon;
var blueberrySprite, blueberryGrown, blueberrySeedIcon;




var bgMusic; 

var audioStarted = false; 

var isShopOpen = false;

const seedBtnX = 550; 
const seedBtnY = 10; 
const seedBtnSize = 96; 

const achiBtnX = 460; 
const achiBtnY = 610; 
const achiBtnSize = 96; 

const backBtnX = 415; 
const backBtnY = 520; 
const backBtnSize = 56; 


//buttons for getting seeds n stuff

const carrotSeedBtnX = 140;
const carrotSeedBtnY = 150;
const carrotSeedBtnSize = 64;

const lettuceSeedBtnX = 224;
const lettuceSeedBtnY = 150;
const lettuceSeedBtnSize = 64;

const potatoSeedBtnX = 310;
const potatoSeedBtnY = 150;
const potatoSeedBtnSize = 64;

const broccoliSeedBtnX = 400;
const broccoliSeedBtnY = 150;
const broccoliSeedBtnSize = 64;





//row 2

const marigoldSeedBtnX = 140;
const marigoldSeedBtnY = 230;
const marigoldSeedBtnSize = 64;

const herbSeedBtnX = 224;
const herbSeedBtnY = 230;
const herbSeedBtnSize = 64;

const pumpkinSeedBtnX = 310;
const pumpkinSeedBtnY = 230;
const pumpkinSeedBtnSize = 64;

const blueberrySeedBtnX = 400;
const blueberrySeedBtnY = 230;
const blueberrySeedBtnSize = 64;




//row 3

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
      } else if (seeds[row][col] === 3) {
        image(potatoSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 4) {
        image(broccoliSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 5) {
        image(marigoldSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 6) {
        image(herbSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 7) {
        image(pumpkinSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 8) {
        image(blueberrySprite, x + offset, y + offset, imgSize, imgSize);
      }







    } else {

      if (seeds[row][col] === 1) {
        image(carrotGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 2) {
        image(lettuceGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 3) {
        image(potatoGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 4) {
        image(broccoliGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 5) {
        image(marigoldGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 6) {
        image(herbGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 7) {
        image(pumpkinGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 8) {
        image(blueberryGrown, x + offset, y + offset, imgSize, imgSize);
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
      else if (seeds[mouseTileY][mouseTileX] === 3) coins += potatoSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 4) coins += broccoliSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 5) coins += marigoldSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 6) coins += herbSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 7) coins += pumpkinSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 8) coins += blueberrySellPrice


      seeds[mouseTileY][mouseTileX] = 0;
    }
    return;
  }

 
  let cost = currentSeed === 1 ? carrotPurchasePrice :
            currentSeed === 2 ? lettucePurchasePrice :
            currentSeed === 3 ? potatoPurchasePrice :
            currentSeed === 4 ? broccoliPurchasePrice:
            currentSeed === 5 ? marigoldPurchasePrice:
            currentSeed === 6 ? herbPurchasePrice:
            currentSeed === 7 ? pumpkinPurchasePrice:
            blueberryPurchasePrice;






  if (coins >= cost) {
    plantSeed();

    if (currentSeed === 1) growthTimers[mouseTileY][mouseTileX] = growthTimeCarrot;
    else if (currentSeed === 2) growthTimers[mouseTileY][mouseTileX] = growthTimeLettuce;
    else if (currentSeed === 3) growthTimers[mouseTileY][mouseTileX] = growthTimePotato;
    else if (currentSeed === 4) growthTimers[mouseTileY][mouseTileX] = growthTimeBroccoli;
    else if (currentSeed === 5) growthTimers[mouseTileY][mouseTileX] = growthTimeMarigold;
    else if (currentSeed === 6) growthTimers[mouseTileY][mouseTileX] = growthTimeHerb;
    else if (currentSeed === 7) growthTimers[mouseTileY][mouseTileX] = growthTimePumpkin;
    else if (currentSeed === 8) growthTimers[mouseTileY][mouseTileX] = growthTimeBlueberry;



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




  potatoGrown = await loadImage('assets/potato.png');
  potatoSprite = await loadImage('assets/potatoSeed.png');
  potatoSeedIcon = await loadImage('assets/potatoSeedIcon.png');

  broccoliGrown = await loadImage('assets/broccoli.png');
  broccoliSprite = await loadImage('assets/broccoliSeed.png');
  broccoliSeedIcon = await loadImage('assets/broccoliSeedIcon.png');
  
  marigoldGrown = await loadImage('assets/marigold.png');
  marigoldSprite = await loadImage('assets/marigoldSeed.png');
  marigoldSeedIcon = await loadImage('assets/marigoldSeedIcon.png');

  herbGrown = await loadImage('assets/herb.png');
  herbSprite = await loadImage('assets/herbSeed.png');
  herbSeedIcon = await loadImage('assets/herbSeedIcon.png');

  pumpkinGrown = await loadImage('assets/pumpkin.png');
  pumpkinSprite = await loadImage('assets/pumpkinSeed.png');
  pumpkinSeedIcon = await loadImage('assets/pumpkinSeedIcon.png');

  blueberryGrown = await loadImage('assets/blueberry.png');
  blueberrySprite = await loadImage('assets/blueberrySeed.png');
  blueberrySeedIcon = await loadImage('assets/blueberrySeedIcon.png');






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







  image(coinIcon, 10, 610, 420, 96); 
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


    itemSize = potatoSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= potatoSeedBtnX && mouseX <= potatoSeedBtnX + potatoSeedBtnSize && 
        mouseY >= potatoSeedBtnY && mouseY <= potatoSeedBtnY + potatoSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = potatoSeedBtnSize - 8; 
        itemOffset = 4;

        currentSeed = 3;
      } else {
        itemSize = potatoSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(potatoSeedIcon, potatoSeedBtnX + itemOffset, potatoSeedBtnY + itemOffset, itemSize, itemSize);





    itemSize = broccoliSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= broccoliSeedBtnX && mouseX <= broccoliSeedBtnX + broccoliSeedBtnSize && 
        mouseY >= broccoliSeedBtnY && mouseY <= broccoliSeedBtnY + broccoliSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = broccoliSeedBtnSize - 8; 
        itemOffset = 4;

        currentSeed = 4;
      } else {
        itemSize = broccoliSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(broccoliSeedIcon, broccoliSeedBtnX + itemOffset, broccoliSeedBtnY + itemOffset, itemSize, itemSize);



    itemSize = marigoldSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= marigoldSeedBtnX && mouseX <= marigoldSeedBtnX + marigoldSeedBtnSize && 
        mouseY >= marigoldSeedBtnY && mouseY <= marigoldSeedBtnY + marigoldSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = marigoldSeedBtnSize - 8; 
        itemOffset = 4;

        currentSeed = 5;
      } else {
        itemSize = marigoldSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(marigoldSeedIcon, marigoldSeedBtnX + itemOffset, marigoldSeedBtnY + itemOffset, itemSize, itemSize);


    itemSize = herbSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= herbSeedBtnX && mouseX <= herbSeedBtnX + herbSeedBtnSize && 
        mouseY >= herbSeedBtnY && mouseY <= herbSeedBtnY + herbSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = herbSeedBtnSize - 8; 
        itemOffset = 4;

        currentSeed = 6;
      } else {
        itemSize = herbSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(herbSeedIcon, herbSeedBtnX + itemOffset, herbSeedBtnY + itemOffset, itemSize, itemSize);




    itemSize = pumpkinSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= pumpkinSeedBtnX && mouseX <= pumpkinSeedBtnX + pumpkinSeedBtnSize && 
        mouseY >= pumpkinSeedBtnY && mouseY <= pumpkinSeedBtnY + pumpkinSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = pumpkinSeedBtnSize - 8; 
        itemOffset = 4;

        currentSeed = 7;
      } else {
        itemSize = pumpkinSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(pumpkinSeedIcon, pumpkinSeedBtnX + itemOffset, pumpkinSeedBtnY + itemOffset, itemSize, itemSize);



    itemSize = blueberrySeedBtnSize;
    itemOffset = 0;
    if (mouseX >= blueberrySeedBtnX && mouseX <= blueberrySeedBtnX + blueberrySeedBtnSize && 
        mouseY >= blueberrySeedBtnY && mouseY <= blueberrySeedBtnY + blueberrySeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = blueberrySeedBtnSize - 8; 
        itemOffset = 4;

        currentSeed = 8;
      } else {
        itemSize = blueberrySeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(blueberrySeedIcon, blueberrySeedBtnX + itemOffset, blueberrySeedBtnY + itemOffset, itemSize, itemSize);



  }






  textSize(34); 
  fill(173, 148, 139); 
  formatedCoins = formatMoney(coins); 
  
  textAlign(RIGHT, BASELINE); 
  text(formatedCoins + " coins", 335, 670); 
  textAlign(LEFT, BASELINE); 

  


  if (currentSeed === 1) { 
    text("carrot seed (" + carrotPurchasePrice + " coins)", 20, 65); 
  } else if (currentSeed === 2) { 
    text("lettuce seed (" + lettucePurchasePrice +" coins)", 20, 65); 
  } else if (currentSeed === 3) {
    text("potato seed (" + potatoPurchasePrice + " coins)", 20, 65);
  }  else if (currentSeed === 4) {
    text("broccoli seed (" + broccoliPurchasePrice + " coins)", 20, 65);
  } else if (currentSeed === 5) {
    text("marigold seed (" + marigoldPurchasePrice + " coins)", 20, 65);
  } else if (currentSeed === 6) {
    text("herb seed (" + herbPurchasePrice + " coins)", 20, 65);
  } else if (currentSeed === 7) {
    text("pumpkin seed (" + pumpkinPurchasePrice + " coins)", 20, 65);
  } else if (currentSeed === 8) {
    text("blueberry (" + formatMoney(blueberryPurchasePrice) + " coins)", 20, 65);
  } 

  fill(0);

  
  let btnTooltip = "";

  
  
  
if (mouseX >= achiBtnX && mouseX <= achiBtnX + achiBtnSize && mouseY >= achiBtnY && mouseY <= achiBtnY + achiBtnSize) {
    btnTooltip = "achievements";
  }
  
  else if (mouseX >= seedBtnX && mouseX <= seedBtnX + seedBtnSize && mouseY >= seedBtnY && mouseY <= seedBtnY + seedBtnSize) {
    btnTooltip = "buy seeds";
  }
 
  else if (isShopOpen && mouseX >= backBtnX && mouseX <= backBtnX + backBtnSize && mouseY >= backBtnY && mouseY <= backBtnY + backBtnSize) {
    btnTooltip = "go back";
  } else if (isShopOpen && mouseX >= carrotSeedBtnX && mouseX <= carrotSeedBtnX + carrotSeedBtnSize && mouseY >= carrotSeedBtnY && mouseY <= carrotSeedBtnY + carrotSeedBtnSize) {
    btnTooltip = "select carrot";
  } else if (isShopOpen && mouseX >= lettuceSeedBtnX && mouseX <= lettuceSeedBtnX + lettuceSeedBtnSize && mouseY >= lettuceSeedBtnY && mouseY <= lettuceSeedBtnY + lettuceSeedBtnSize) {
    btnTooltip = "select lettuce";
  } else if (isShopOpen && mouseX >= potatoSeedBtnX && mouseX <= potatoSeedBtnX + potatoSeedBtnSize && mouseY >= potatoSeedBtnY && mouseY <= potatoSeedBtnY + potatoSeedBtnSize) {
    btnTooltip = "select potato";
  } else if (isShopOpen && mouseX >= broccoliSeedBtnX && mouseX <= broccoliSeedBtnX + broccoliSeedBtnSize && mouseY >= broccoliSeedBtnY && mouseY <= broccoliSeedBtnY + broccoliSeedBtnSize) {
    btnTooltip = "select broccoli";
  } else if (isShopOpen && mouseX >= marigoldSeedBtnX && mouseX <= marigoldSeedBtnX + marigoldSeedBtnSize && mouseY >= marigoldSeedBtnY && mouseY <= marigoldSeedBtnY + marigoldSeedBtnSize) {
    btnTooltip = "select marigold";
  } else if (isShopOpen && mouseX >= herbSeedBtnX && mouseX <= herbSeedBtnX + herbSeedBtnSize && mouseY >= herbSeedBtnY && mouseY <= herbSeedBtnY + herbSeedBtnSize) {
    btnTooltip = "select herb";
  } else if (isShopOpen && mouseX >= pumpkinSeedBtnX && mouseX <= pumpkinSeedBtnX + pumpkinSeedBtnSize && mouseY >= pumpkinSeedBtnY && mouseY <= pumpkinSeedBtnY + pumpkinSeedBtnSize) {
    btnTooltip = "select pumpkin";
  } else if (isShopOpen && mouseX >= blueberrySeedBtnX && mouseX <= blueberrySeedBtnX + blueberrySeedBtnSize && mouseY >= blueberrySeedBtnY && mouseY <= blueberrySeedBtnY + blueberrySeedBtnSize) {
    btnTooltip = "select blueberries";
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
        tooltipText = "harvest carrot (get " + carrotSellPrice + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 2) {
        tooltipText = "harvest lettuce (get " + lettuceSellPrice + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 3) {
        tooltipText = "harvest potato (get " + potatoSellPrice + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 4) {
        tooltipText = "harvest broccoli (get " + broccoliSellPrice + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 5) {
        tooltipText = "harvest marigold (get " + marigoldSellPrice + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 6) {
        tooltipText = "harvest herb (get " + herbSellPrice + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 7) {
        tooltipText = "harvest pumpkin (get " + pumpkinSellPrice + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 8) {
        tooltipText = "harvest bluberries (get " + formatMoney(blueberrySellPrice) + " coins)";
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



