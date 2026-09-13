// Farming game by Egisipub (Casey Emery) - 8/6/2026

//hope you enjoy it!

//ahhhh

//








var wateredCount = 0;
var plantedCount = 0;

const numTilesX = 20; 
const numTilesY = 10; 
const tileSize = 72; 

var mouseTileX = 0; 
var mouseTileY = 0;

var onFarm = false; 

var seeds = []; 
let coins = 5.0; 

let formatedCoins = "0.0"; 

var untilled = []; 

var growthTimers = []; 

var numTimesWatered = 0;
var numTimesPlanted = 0;



const carrotSellPrice = 6.25;
const carrotPurchasePrice = 5;
const growthTimeCarrot = 900; //15 sec

const lettuceSellPrice = 20;
const lettucePurchasePrice = 16;
const growthTimeLettuce = 1800; //30 sec

const potatoSellPrice = 61.75;
const potatoPurchasePrice = 51;
const growthTimePotato = 2700; //45 sec

const broccoliSellPrice = 203.75;
const broccoliPurchasePrice = 163;
const growthTimeBroccoli= 3600; //1 min

const marigoldSellPrice = 655;
const marigoldPurchasePrice = 524;
const growthTimeMarigold= 5400; //1.5

const herbSellPrice = 2097.5;
const herbPurchasePrice = 1678;
const growthTimeHerb= 7200; //2 mins

const pumpkinSellPrice = 6711;
const pumpkinPurchasePrice = 5369;
const growthTimePumpkin= 9000; //2.5 mins

const blueberrySellPrice = 21457.5;
const blueberryPurchasePrice = 17166;
const growthTimeBlueberry= 10800; //3 mins

const radishSellPrice = 67664;
const radishPurchasePrice = 54131;
const growthTimeRadish= 18000; //5 mins

const celerySellPrice = 213524;
const celeryPurchasePrice = 170819;
const growthTimeCelery= 18000; //5 mins

const leekSellPrice = 673750;
const leekPurchasePrice = 539000;
const growthTimeLeek= 19100; //5.5 mins

const garlicSellPrice = 2125000;
const garlicPurchasePrice = 1700000;
const growthTimeGarlic = 19100; //5.5 mins

const plettuceSellPrice = 6875000;
const plettucePurchasePrice = 5500000;
const growthTimePlettuce = 20200; //6 mins

const watermelonSellPrice = 22125000;
const watermelonPurchasePrice = 17700000;
const growthTimeWatermelon = 24425; // 6 mins

const turnipSellPrice = 70875000;
const turnipPurchasePrice = 56700000;
const growthTimeTurnip = 28650; // 8 mins

const cabbageSellPrice = 226250000;
const cabbagePurchasePrice = 181000000;
const growthTimeCabbage = 32875; // 9 mins

const onionSellPrice = 725000000;
const onionPurchasePrice = 580000000;
const growthTimeOnion = 37100; // 10 mins

const lavenderSellPrice = 2325000000;
const lavenderPurchasePrice = 1860000000;
const growthTimeLavender = 41325; // 11 mins

const cornSellPrice = 7450000000;
const cornPurchasePrice = 5960000000;
const growthTimeCorn = 45550; // 12.5 mins

const pepperSellPrice = 23875000000;
const pepperPurchasePrice = 19100000000;
const growthTimePepper = 49775; // 13.5 mins

const tomatoSellPrice = 76500000000;
const tomatoPurchasePrice = 61200000000;
const growthTimeTomato = 54000; // 15 mins

const eggplantSellPrice = 245000000000;
const eggplantPurchasePrice = 196000000000;
const growthTimeEggplant = 54000; // 15 mins







var watered = [];
var waterTimers = [];
const waterDuration = 18100; // 5 minutes and a bit








var currentSeed = 1; 

var carrotSprite, lettuceSprite, grassSprite, farmlandSprite, fenceSprite,highlightSprite, rockSprite, customFont, carrotGrown, lettuceGrown, coinIcon, achievementsIcon, itemIcon, seedIcon, backIcon, shopWindow, carrotSeedIcon, lettuceSeedIcon, farmlandWateredSprite, carrotWatered, lettuceWatered; 

var potatoSprite, potatoGrown, potatoSeedIcon;
var broccoliSprite, broccoliGrown, broccoliSeedIcon;
var marigoldSprite, marigoldGrown, marigoldSeedIcon;
var herbSprite, herbGrown, herbSeedIcon;
var pumpkinSprite, pumpkinGrown, pumpkinSeedIcon;
var blueberrySprite, blueberryGrown, blueberrySeedIcon;
var radishSprite, radishGrown, radishSeedIcon;
var celerySprite, celeryGrown, celerySeedIcon;
var leekSprite, leekGrown, leekSeedIcon;
var garlicSprite, garlicGrown, garlicSeedIcon;
var plettuceSprite, plettuceGrown, plettuceSeedIcon;
var watermelonSprite, watermelonGrown, watermelonSeedIcon;
var turnipSprite, turnipGrown, turnipSeedIcon;
var cabbageSprite, cabbageGrown, cabbageSeedIcon;
var onionSprite, onionGrown, onionSeedIcon;
var lavenderSprite, lavenderGrown, lavenderSeedIcon;
var cornSprite, cornGrown, cornSeedIcon;
var pepperSprite, pepperGrown, pepperSeedIcon;
var tomatoSprite, tomatoGrown, tomatoSeedIcon;
var eggplantSprite, eggplantGrown, eggplantSeedIcon;

var coinAchiIcon;
var blankAchiIcon;
var hoeAchiIcon;
var waterAchiIcon

var redFlower;

var blueFlower;

var yellowFlower;

var smallRock;

var popSound, popSound2, tillSound, waterSound, plantSound, bgAudioLoop;





//coin achivements for 100k coins 100m coins 100b coins and 100t coins and 999 T coins, (they all use the same icon:coin achi icon)

var coinAchiMessage1k = "get 1k coins";
var coinAchieved1k = false;

var coinAchiMessage100k = "get 100k coins";
var coinAchieved100k = false;

var coinAchiMessage100m = "get 100M coins";
var coinAchieved100m = false;

var coinAchiMessage100b = "get 100B coins";
var coinAchieved100b = false;

var plantMarigoldAchiMessage = "plant a marigold";
var plantMarigoldAchieved = false;

var plantCeleryAchiMessage = "plant a celery";
var plantCeleryAchieved = false;

var plantTurnipAchiMessage = "plant a turnip";
var plantTurnipAchieved = false;

var plantEggplantAchiMessage = "plant a eggplant";
var plantEggplantAchieved = false;

var variety4PlantsAchiMessage = "have 4 different plants planted";
var variety4PlantsAchieved = false;

var variety10PlantsAchiMessage = "have 10 different plants planted";
var variety10PlantsAchieved = false;

var variety16PlantsAchiMessage = "have 16 different plants planted";
var variety16PlantsAchieved = false;

var variety22PlantsAchiMessage = "have 22 different plants planted";
var variety22PlantsAchieved = false;

var tillAllTilesAchiMessage = "till every single tile";
var tillAllTilesAchieved = false;

var water100CropsAchiMessage = "water 100 crops";
var water100CropsAchieved = false;

var plant100CropsAchiMessage = "plant 100 crops";
var plant100CropsAchieved = false;

var water1000CropsAchiMessage = "water 1000 crops";
var water1000CropsAchieved = false;

var plant1000CropsAchiMessage = "plant 1000 crops";
var plant1000CropsAchieved = false;

var coinAchi999TMessage = "get 999 trillion coins";
var coinAchieved999T = false;




const coinAchi1kBtnX = 140;
const coinAchi1kBtnY = 170;
const coinAchi1kBtnSize = 54;

const coinAchi100kBtnX = 224;
const coinAchi100kBtnY = 170;
const coinAchi100kBtnSize = 54;

const coinAchi100mBtnX = 310;
const coinAchi100mBtnY = 170;
const coinAchi100mBtnSize = 54;

const coinAchi100bBtnX = 400;
const coinAchi100bBtnY = 170;
const coinAchi100bBtnSize = 54;

const plantMarigoldAchiBtnX = 140;
const plantMarigoldAchiBtnY = 240;
const plantMarigoldAchiBtnSize = 54;

const plantCeleryAchiBtnX = 224;
const plantCeleryAchiBtnY = 240;
const plantCeleryAchiBtnSize = 54;

const plantTurnipAchiBtnX = 310;
const plantTurnipAchiBtnY = 240;
const plantTurnipAchiBtnSize = 54;

const plantEggplantAchiBtnX = 400;
const plantEggplantAchiBtnY = 240;
const plantEggplantAchiBtnSize = 54;

const variety4PlantsAchiBtnX = 140;
const variety4PlantsAchiBtnY = 310;
const variety4PlantsAchiBtnSize = 54;

const variety10PlantsAchiBtnX = 224;
const variety10PlantsAchiBtnY = 310;
const variety10PlantsAchiBtnSize = 54;

const variety16PlantsAchiBtnX = 310;
const variety16PlantsAchiBtnY = 310;
const variety16PlantsAchiBtnSize = 54;

const variety22PlantsAchiBtnX = 400;
const variety22PlantsAchiBtnY = 310;
const variety22PlantsAchiBtnSize = 54;

const tillAllTilesAchiBtnX = 140;
const tillAllTilesAchiBtnY = 380;
const tillAllTilesAchiBtnSize = 54;

const water100CropsAchiBtnX = 224;
const water100CropsAchiBtnY = 380;
const water100CropsAchiBtnSize = 54;

const plant100CropsAchiBtnX = 310;
const plant100CropsAchiBtnY = 380;
const plant100CropsAchiBtnSize = 54;

const water1000CropsAchiBtnX = 400;
const water1000CropsAchiBtnY = 380;
const water1000CropsAchiBtnSize = 54;

const plant1000CropsAchiBtnX = 140;
const plant1000CropsAchiBtnY = 450;
const plant1000CropsAchiBtnSize = 54;

const coinAchi999TBtnX = 224;
const coinAchi999TBtnY = 450;
const coinAchi999TBtnSize = 54;





var bgMusic; 

var audioStarted = false; 

var isShopOpen = false;

var isAchievementsOpen = false;







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
const carrotSeedBtnY = 170;
const carrotSeedBtnSize = 54;

const lettuceSeedBtnX = 224;
const lettuceSeedBtnY = 170;
const lettuceSeedBtnSize = 54;

const potatoSeedBtnX = 310;
const potatoSeedBtnY = 170;
const potatoSeedBtnSize = 54;

const broccoliSeedBtnX = 400;
const broccoliSeedBtnY = 170;
const broccoliSeedBtnSize = 54;





//row 2

const marigoldSeedBtnX = 140;
const marigoldSeedBtnY = 240;
const marigoldSeedBtnSize = 54;

const herbSeedBtnX = 224;
const herbSeedBtnY = 240;
const herbSeedBtnSize = 54;

const pumpkinSeedBtnX = 310;
const pumpkinSeedBtnY = 240;
const pumpkinSeedBtnSize = 54;

const blueberrySeedBtnX = 400;
const blueberrySeedBtnY = 240;
const blueberrySeedBtnSize = 54;




//row 3

const radishSeedBtnX = 140;
const radishSeedBtnY = 310;
const radishSeedBtnSize = 54;

const celerySeedBtnX = 224;
const celerySeedBtnY = 310;
const celerySeedBtnSize = 54;

const leekSeedBtnX = 310;
const leekSeedBtnY = 310;
const leekSeedBtnSize = 54;

const garlicSeedBtnX = 400;
const garlicSeedBtnY = 310;
const garlicSeedBtnSize = 54;


//row 4


const plettuceSeedBtnX = 140;
const plettuceSeedBtnY = 380;
const plettuceSeedBtnSize = 54;

const watermelonSeedBtnX = 224;
const watermelonSeedBtnY = 380;
const watermelonSeedBtnSize = 54;

const turnipSeedBtnX = 310;
const turnipSeedBtnY = 380;
const turnipSeedBtnSize = 54;

const cabbageSeedBtnX = 400;
const cabbageSeedBtnY = 380;
const cabbageSeedBtnSize = 54;


//row 5 

const onionSeedBtnX = 140;
const onionSeedBtnY = 450;
const onionSeedBtnSize = 54;

const lavenderSeedBtnX = 224;
const lavenderSeedBtnY = 450;
const lavenderSeedBtnSize = 54;

const cornSeedBtnX = 310;
const cornSeedBtnY = 450;
const cornSeedBtnSize = 54;

const pepperSeedBtnX = 400;
const pepperSeedBtnY = 450;
const pepperSeedBtnSize = 54;


//row 6 

const tomatoSeedBtnX = 140;
const tomatoSeedBtnY = 520;
const tomatoSeedBtnSize = 54;

const eggplantSeedBtnX = 224;
const eggplantSeedBtnY = 520;
const eggplantSeedBtnSize = 54;















level = [ 
  "22222222222222222222", 
  "00000000000000000300", 
  "03000000111111111110", 
  "00000000000000000004", 
  "00600000111111111110", 
  "00000040000000006000", 
  "00000000111111111110", 
  "00030000000500000000", 
  "00000000111111111110", 
  "00000000004000000005" 
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

        if (watered[row][col] === true) {
          image(farmlandWateredSprite, x, y, tileSize, tileSize);
        }

        
      } else if (squareType === "2") { 
        image(fenceSprite, x, y, tileSize, tileSize); 
      }  else if (squareType === "3") { 
        image(redFlower, x, y, tileSize, tileSize); 
      } else if (squareType === "4") { 
        image(blueFlower, x, y, tileSize, tileSize); 
      } else if (squareType === "5") { 
        image(yellowFlower, x, y, tileSize, tileSize); 
      } else if (squareType === "6") { 
        image(smallRock, x, y, tileSize, tileSize); 
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
      } else if (seeds[row][col] === 9) {
        image(radishSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 10) {
        image(celerySprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 11) {
        image(leekSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 12) {
        image(garlicSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 13) {
        image(plettuceSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 14) {
        image(watermelonSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 15) {
        image(turnipSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 16) {
        image(cabbageSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 17) {
        image(onionSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 18) {
        image(lavenderSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 19) {
        image(cornSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 20) {
        image(pepperSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 21) {
        image(tomatoSprite, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 22) {
        image(eggplantSprite, x + offset, y + offset, imgSize, imgSize);
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
      } else if (seeds[row][col] === 9) {
        image(radishGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 10) {
        image(celeryGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 11) {
        image(leekGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 12) {
        image(garlicGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 13) {
        image(plettuceGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 14) {
        image(watermelonGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 15) {
        image(turnipGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 16) {
        image(cabbageGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 17) {
        image(onionGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 18) {
        image(lavenderGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 19) {
        image(cornGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 20) {
        image(pepperGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 21) {
        image(tomatoGrown, x + offset, y + offset, imgSize, imgSize);
      } else if (seeds[row][col] === 22) {
        image(eggplantGrown, x + offset, y + offset, imgSize, imgSize);
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
  playSound(plantSound);
} 

function playSound(sound) {
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}



function mousePressed() { 
  if (bgMusic && bgAudioLoop && !audioStarted) { 
    bgMusic.volume = 0.125;
    bgAudioLoop.volume = 1;
    bgMusic.play();
    bgAudioLoop.play();
    audioStarted = true; 
  } 
  if (isShopOpen) {
    if (mouseX >= backBtnX && mouseX <= backBtnX + backBtnSize && mouseY >= backBtnY && mouseY <= backBtnY + backBtnSize) {
      isShopOpen = false; 
      playSound(popSound2);
      return; 
    }
  }

  if (isAchievementsOpen &&
      mouseX >= backBtnX && mouseX <= backBtnX + backBtnSize &&
      mouseY >= backBtnY && mouseY <= backBtnY + backBtnSize) {
    isAchievementsOpen = false;
    playSound(popSound2);
    return;
  }

 

if (mouseX >= achiBtnX && mouseX <= achiBtnX + achiBtnSize &&
    mouseY >= achiBtnY && mouseY <= achiBtnY + achiBtnSize) {

    isAchievementsOpen = true;
    isShopOpen = false;  
    playSound(popSound);
    return;
}


  if (mouseX >= seedBtnX && mouseX <= seedBtnX + seedBtnSize && mouseY >= seedBtnY && mouseY <= seedBtnY + seedBtnSize) { 
    isAchievementsOpen = false;
    isShopOpen = true; 
    playSound(popSound);
    return; 
  } 

 

  if (mouseTileX >= 0 && mouseTileX < numTilesX && mouseTileY >= 0 && mouseTileY < numTilesY) { 
    if (onFarm) {


  if (untilled[mouseTileY][mouseTileX] === false) {
    if (watered[mouseTileY][mouseTileX] === false) {
      watered[mouseTileY][mouseTileX] = true;
      waterTimers[mouseTileY][mouseTileX] = waterDuration;
      numTimesWatered++;
      playSound(waterSound);
      return;
    }
  }

 
  if (untilled[mouseTileY][mouseTileX] === true) {
    if (coins >= 10000) {
      untilled[mouseTileY][mouseTileX] = false;
      coins -= 10000;
      playSound(tillSound);
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
      else if (seeds[mouseTileY][mouseTileX] === 9) coins += radishSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 10) coins += celerySellPrice
      else if (seeds[mouseTileY][mouseTileX] === 11) coins += leekSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 12) coins += garlicSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 13) coins += plettuceSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 14) coins += watermelonSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 15) coins += turnipSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 16) coins += cabbageSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 17) coins += onionSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 18) coins += lavenderSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 19) coins += cornSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 20) coins += pepperSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 21) coins += tomatoSellPrice
      else if (seeds[mouseTileY][mouseTileX] === 22) coins += eggplantSellPrice


      seeds[mouseTileY][mouseTileX] = 0;
      playSound(plantSound);
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
            currentSeed === 8 ? blueberryPurchasePrice:
            currentSeed === 9 ? radishPurchasePrice:
            currentSeed === 10 ? celeryPurchasePrice:
            currentSeed === 11 ? leekPurchasePrice:
            currentSeed === 12 ? garlicPurchasePrice:
            currentSeed === 13 ? plettucePurchasePrice:
            currentSeed === 14 ? watermelonPurchasePrice:
            currentSeed === 15 ? turnipPurchasePrice:
            currentSeed === 16 ? cabbagePurchasePrice:
            currentSeed === 17 ? onionPurchasePrice:
            currentSeed === 18 ? lavenderPurchasePrice:
            currentSeed === 19 ? cornPurchasePrice:
            currentSeed === 20 ? pepperPurchasePrice:
            currentSeed === 21 ? tomatoPurchasePrice:
            eggplantPurchasePrice;






  if (coins >= cost) {

    plantSeed();
    numTimesPlanted++;

    if (currentSeed === 1) growthTimers[mouseTileY][mouseTileX] = growthTimeCarrot;
    else if (currentSeed === 2) growthTimers[mouseTileY][mouseTileX] = growthTimeLettuce;
    else if (currentSeed === 3) growthTimers[mouseTileY][mouseTileX] = growthTimePotato;
    else if (currentSeed === 4) growthTimers[mouseTileY][mouseTileX] = growthTimeBroccoli;
    else if (currentSeed === 5) growthTimers[mouseTileY][mouseTileX] = growthTimeMarigold;
    else if (currentSeed === 6) growthTimers[mouseTileY][mouseTileX] = growthTimeHerb;
    else if (currentSeed === 7) growthTimers[mouseTileY][mouseTileX] = growthTimePumpkin;
    else if (currentSeed === 8) growthTimers[mouseTileY][mouseTileX] = growthTimeBlueberry;
    else if (currentSeed === 9) growthTimers[mouseTileY][mouseTileX] = growthTimeRadish;
    else if (currentSeed === 10) growthTimers[mouseTileY][mouseTileX] = growthTimeCelery;
    else if (currentSeed === 11) growthTimers[mouseTileY][mouseTileX] = growthTimeLeek;
    else if (currentSeed === 12) growthTimers[mouseTileY][mouseTileX] = growthTimeGarlic;
    else if (currentSeed === 13) growthTimers[mouseTileY][mouseTileX] = growthTimePlettuce;
    else if (currentSeed === 14) growthTimers[mouseTileY][mouseTileX] = growthTimeWatermelon;
    else if (currentSeed === 15) growthTimers[mouseTileY][mouseTileX] = growthTimeTurnip;
    else if (currentSeed === 16) growthTimers[mouseTileY][mouseTileX] = growthTimeCabbage;
    else if (currentSeed === 17) growthTimers[mouseTileY][mouseTileX] = growthTimeOnion;
    else if (currentSeed === 18) growthTimers[mouseTileY][mouseTileX] = growthTimeLavender;
    else if (currentSeed === 19) growthTimers[mouseTileY][mouseTileX] = growthTimeCorn;
    else if (currentSeed === 20) growthTimers[mouseTileY][mouseTileX] = growthTimePepper;
    else if (currentSeed === 21) growthTimers[mouseTileY][mouseTileX] = growthTimeTomato;
    else if (currentSeed === 22) growthTimers[mouseTileY][mouseTileX] = growthTimeEggplant;





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










function checkAchievements() {

  if (coins >= 1000) coinAchieved1k = true;
  if (coins >= 100000) coinAchieved100k = true;
  if (coins >= 100000000) coinAchieved100m = true;
  if (coins >= 100000000000) coinAchieved100b = true;
  if (coins >= 999000000000000) coinAchieved999T = true;

 
  let plantedTypes = new Set();
  let tilledCount = 0;

  for (let r = 0; r < numTilesY; r++) {
    for (let c = 0; c < numTilesX; c++) {

      if (seeds[r][c] !== 0) {
        plantedTypes.add(seeds[r][c]);
        plantedCount++;
      }

      if (watered[r][c] === true) wateredCount++;

      if (untilled[r][c] === false && whatSquare(r,c) === "1") tilledCount++;
    }
  }

  if (plantedTypes.has(5)) plantMarigoldAchieved = true;
  if (plantedTypes.has(10)) plantCeleryAchieved = true;
  if (plantedTypes.has(15)) plantTurnipAchieved = true;
  if (plantedTypes.has(22)) plantEggplantAchieved = true;

  if (plantedTypes.size >= 4) variety4PlantsAchieved = true;
  if (plantedTypes.size >= 10) variety10PlantsAchieved = true;
  if (plantedTypes.size >= 16) variety16PlantsAchieved = true;
  if (plantedTypes.size >= 22) variety22PlantsAchieved = true;

  let totalFarmTiles = 0;
  for (let r = 0; r < numTilesY; r++) {
    for (let c = 0; c < numTilesX; c++) {
      if (whatSquare(r,c) === "1") totalFarmTiles++;
    }
  }

  if (tilledCount >= totalFarmTiles) tillAllTilesAchieved = true;

  if (numTimesWatered >= 100) water100CropsAchieved = true;
  if (numTimesWatered >= 1000) water1000CropsAchieved = true;

  if (numTimesPlanted >= 100) plant100CropsAchieved = true;
  if (numTimesPlanted >= 1000) plant1000CropsAchieved = true;
}









function saveGame() {
  const data = {
    coins,
    currentSeed,
    numTimesWatered,
    numTimesPlanted,
    seeds,
    growthTimers,
    watered,
    waterTimers,
    untilled,
    coinAchieved1k,
    coinAchieved100k,
    coinAchieved100m,
    coinAchieved100b,
    coinAchieved999T,
    plantMarigoldAchieved,
    plantCeleryAchieved,
    plantTurnipAchieved,
    plantEggplantAchieved,
    variety4PlantsAchieved,
    variety10PlantsAchieved,
    variety16PlantsAchieved,
    variety22PlantsAchieved,
    tillAllTilesAchieved,
    water100CropsAchieved,
    water1000CropsAchieved,
    plant100CropsAchieved,
    plant1000CropsAchieved
  };

  localStorage.setItem("farmSave", JSON.stringify(data));
}


function loadGame() {
  const raw = localStorage.getItem("farmSave");
  if (!raw) return;

  const data = JSON.parse(raw);

  coins = data.coins;
  currentSeed = data.currentSeed;
  numTimesWatered = data.numTimesWatered;
  numTimesPlanted = data.numTimesPlanted;

  seeds = data.seeds;
  growthTimers = data.growthTimers;
  watered = data.watered;
  waterTimers = data.waterTimers;
  untilled = data.untilled;

  coinAchieved1k = data.coinAchieved1k;
  coinAchieved100k = data.coinAchieved100k;
  coinAchieved100m = data.coinAchieved100m;
  coinAchieved100b = data.coinAchieved100b;
  coinAchieved999T = data.coinAchieved999T;

  plantMarigoldAchieved = data.plantMarigoldAchieved;
  plantCeleryAchieved = data.plantCeleryAchieved;
  plantTurnipAchieved = data.plantTurnipAchieved;
  plantEggplantAchieved = data.plantEggplantAchieved;

  variety4PlantsAchieved = data.variety4PlantsAchieved;
  variety10PlantsAchieved = data.variety10PlantsAchieved;
  variety16PlantsAchieved = data.variety16PlantsAchieved;
  variety22PlantsAchieved = data.variety22PlantsAchieved;

  tillAllTilesAchieved = data.tillAllTilesAchieved;
  water100CropsAchieved = data.water100CropsAchieved;
  water1000CropsAchieved = data.water1000CropsAchieved;
  plant100CropsAchieved = data.plant100CropsAchieved;
  plant1000CropsAchieved = data.plant1000CropsAchieved;
}




function wipeSave() {
  const ok = confirm("Type YES to wipe your save.");
  if (ok) {
    const input = prompt("This will delete EVERYTHING. Type YES to confirm.");
    if (input === "YES") {
      localStorage.removeItem("farmSave");
      location.reload();
    }
  }
}





//wipe save stuff idk

let wipeKeys = { w:false, b:false, ctrl:false };

document.addEventListener("keydown", e => {
  if (e.key === "w") wipeKeys.w = true;
  if (e.key === "b") wipeKeys.b = true;
  if (e.ctrlKey) wipeKeys.ctrl = true;

  if (wipeKeys.w && wipeKeys.b && wipeKeys.ctrl) {
    wipeSave();
  }
});

document.addEventListener("keyup", e => {
  if (e.key === "w") wipeKeys.w = false;
  if (e.key === "b") wipeKeys.b = false;
  if (!e.ctrlKey) wipeKeys.ctrl = false;
});





















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
  popSound  = new Audio('assets/pop.mp3');
  popSound2  = new Audio('assets/pop2.mp3');
  tillSound  = new Audio('assets/tillSound.mp3');
  waterSound  = new Audio('assets/waterSound.mp3');
  plantSound  = new Audio('assets/plantSound.mp3');
  bgAudioLoop  = new Audio('assets/bgAudioLoop.mp3');
  

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

  radishGrown = await loadImage('assets/radish.png');
  radishSprite = await loadImage('assets/radishSeed.png');
  radishSeedIcon = await loadImage('assets/radishSeedIcon.png');

  celeryGrown = await loadImage('assets/celery.png');
  celerySprite = await loadImage('assets/celerySeed.png');
  celerySeedIcon = await loadImage('assets/celerySeedIcon.png');

  leekGrown = await loadImage('assets/leek.png');
  leekSprite = await loadImage('assets/leekSeed.png');
  leekSeedIcon = await loadImage('assets/leekSeedIcon.png');

  garlicGrown = await loadImage('assets/garlic.png');
  garlicSprite = await loadImage('assets/garlicSeed.png');
  garlicSeedIcon = await loadImage('assets/garlicSeedIcon.png');


  plettuceGrown = await loadImage('assets/plettuce.png');
  plettuceSprite = await loadImage('assets/plettuceSeed.png');
  plettuceSeedIcon = await loadImage('assets/plettuceSeedIcon.png');

  watermelonGrown = await loadImage('assets/watermelon.png');
  watermelonSprite = await loadImage('assets/watermelonSeed.png');
  watermelonSeedIcon = await loadImage('assets/watermelonSeedIcon.png');

  turnipGrown = await loadImage('assets/turnip.png');
  turnipSprite = await loadImage('assets/turnipSeed.png');
  turnipSeedIcon = await loadImage('assets/turnipSeedIcon.png');

  cabbageGrown = await loadImage('assets/cabbage.png');
  cabbageSprite = await loadImage('assets/cabbageSeed.png');
  cabbageSeedIcon = await loadImage('assets/cabbageSeedIcon.png');

  onionGrown = await loadImage('assets/onion.png');
  onionSprite = await loadImage('assets/onionSeed.png');
  onionSeedIcon = await loadImage('assets/onionSeedIcon.png');

  lavenderGrown = await loadImage('assets/lavender.png');
  lavenderSprite = await loadImage('assets/lavenderSeed.png');
  lavenderSeedIcon = await loadImage('assets/lavenderSeedIcon.png');

  cornGrown = await loadImage('assets/corn.png');
  cornSprite = await loadImage('assets/cornSeed.png');
  cornSeedIcon = await loadImage('assets/cornSeedIcon.png');

  pepperGrown = await loadImage('assets/pepper.png');
  pepperSprite = await loadImage('assets/pepperSeed.png');
  pepperSeedIcon = await loadImage('assets/pepperSeedIcon.png');

  tomatoGrown = await loadImage('assets/tomato.png');
  tomatoSprite = await loadImage('assets/tomatoSeed.png');
  tomatoSeedIcon = await loadImage('assets/tomatoSeedIcon.png');

  eggplantGrown = await loadImage('assets/eggplant.png');
  eggplantSprite = await loadImage('assets/eggplantSeed.png');
  eggplantSeedIcon = await loadImage('assets/eggplantSeedIcon.png');






  coinAchiIcon = await loadImage('assets/coinAchiIcon.png')
  blankAchiIcon = await loadImage('assets/blankAchiIcon.png')
  varietyAchiIcon = await loadImage('assets/varietyAchiIcon.png')
  hoeAchiIcon = await loadImage('assets/hoeAchiIcon.png')
  waterAchiIcon = await loadImage('assets/waterAchiIcon.png')



  redFlower = await loadImage('assets/redFlower.png')

  blueFlower = await loadImage('assets/blueFlower.png')

  yellowFlower = await loadImage('assets/yellowFlower.png')

  smallRock = await loadImage('assets/smallRock.png')





  bgMusic.loop = true; 
  bgMusic.volume = 0.125; 
  bgAudioLoop.loop = true;
  bgAudioLoop.volume = 1;

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




  loadGame();









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



    textSize(34); 
    fill(173, 148, 139);
    text("select seeds", 180, 165);

  }

  if (isAchievementsOpen) {
    if (mouseX >= backBtnX && mouseX <= backBtnX + backBtnSize &&
        mouseY >= backBtnY && mouseY <= backBtnY + backBtnSize) {

      if (mouseIsPressed) {
        backSize = backBtnSize - 8;
        backOffset = 4;
        
        isAchievementsOpen = false;
        

      } else {
        backSize = backBtnSize + 8;
        backOffset = -4;
      }
    }
}







  if (isAchievementsOpen) {
    image(shopWindow, 120, 135, 360, 450);

    // Back button animation (same as shop)
    let backSize = backBtnSize;
    let backOffset = 0;

    if (mouseX >= backBtnX && mouseX <= backBtnX + backBtnSize &&
        mouseY >= backBtnY && mouseY <= backBtnY + backBtnSize) {

        if (mouseIsPressed) {
            backSize = backBtnSize - 8;
            backOffset = 4;
        } else {
            backSize = backBtnSize + 8;
            backOffset = -4;
        }
    }

    image(backIcon, backBtnX + backOffset, backBtnY + backOffset, backSize, backSize);

    // Placeholder text (you can replace later)
    textSize(34); 
    fill(173, 148, 139);
    text("Achievements", 175, 165);
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


    itemSize = radishSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= radishSeedBtnX && mouseX <= radishSeedBtnX + radishSeedBtnSize && 
        mouseY >= radishSeedBtnY && mouseY <= radishSeedBtnY + radishSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = radishSeedBtnSize - 8; 
        itemOffset = 4;

        currentSeed = 9;
      } else {
        itemSize = radishSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(radishSeedIcon, radishSeedBtnX + itemOffset, radishSeedBtnY + itemOffset, itemSize, itemSize);



    itemSize = celerySeedBtnSize;
    itemOffset = 0;
    if (mouseX >= celerySeedBtnX && mouseX <= celerySeedBtnX + celerySeedBtnSize && 
        mouseY >= celerySeedBtnY && mouseY <= celerySeedBtnY + celerySeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = celerySeedBtnSize - 8; 
        itemOffset = 4;

        currentSeed = 10;
      } else {
        itemSize = celerySeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(celerySeedIcon, celerySeedBtnX + itemOffset, celerySeedBtnY + itemOffset, itemSize, itemSize);


    itemSize = leekSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= leekSeedBtnX && mouseX <= leekSeedBtnX + leekSeedBtnSize && 
        mouseY >= leekSeedBtnY && mouseY <= leekSeedBtnY + leekSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = leekSeedBtnSize - 8; 
        itemOffset = 4;

        currentSeed = 11;
      } else {
        itemSize = leekSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(leekSeedIcon, leekSeedBtnX + itemOffset, leekSeedBtnY + itemOffset, itemSize, itemSize);

    itemSize = garlicSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= garlicSeedBtnX && mouseX <= garlicSeedBtnX + garlicSeedBtnSize && 
        mouseY >= garlicSeedBtnY && mouseY <= garlicSeedBtnY + garlicSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = garlicSeedBtnSize - 8; 
        itemOffset = 4;

        currentSeed = 12;
      } else {
        itemSize = garlicSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(garlicSeedIcon, garlicSeedBtnX + itemOffset, garlicSeedBtnY + itemOffset, itemSize, itemSize);



    itemSize = plettuceSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= plettuceSeedBtnX && mouseX <= plettuceSeedBtnX + plettuceSeedBtnSize && 
        mouseY >= plettuceSeedBtnY && mouseY <= plettuceSeedBtnY + plettuceSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = plettuceSeedBtnSize - 8; 
        itemOffset = 4;

        currentSeed = 13;
      } else {
        itemSize = plettuceSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(plettuceSeedIcon, plettuceSeedBtnX + itemOffset, plettuceSeedBtnY + itemOffset, itemSize, itemSize);

    itemSize = watermelonSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= watermelonSeedBtnX && mouseX <= watermelonSeedBtnX + watermelonSeedBtnSize &&
        mouseY >= watermelonSeedBtnY && mouseY <= watermelonSeedBtnY + watermelonSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = watermelonSeedBtnSize - 8;
        itemOffset = 4;
        currentSeed = 14;
      } else {
        itemSize = watermelonSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(watermelonSeedIcon, watermelonSeedBtnX + itemOffset, watermelonSeedBtnY + itemOffset, itemSize, itemSize);

    itemSize = turnipSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= turnipSeedBtnX && mouseX <= turnipSeedBtnX + turnipSeedBtnSize &&
        mouseY >= turnipSeedBtnY && mouseY <= turnipSeedBtnY + turnipSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = turnipSeedBtnSize - 8;
        itemOffset = 4;
        currentSeed = 15;
      } else {
        itemSize = turnipSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(turnipSeedIcon, turnipSeedBtnX + itemOffset, turnipSeedBtnY + itemOffset, itemSize, itemSize);

    itemSize = cabbageSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= cabbageSeedBtnX && mouseX <= cabbageSeedBtnX + cabbageSeedBtnSize &&
        mouseY >= cabbageSeedBtnY && mouseY <= cabbageSeedBtnY + cabbageSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = cabbageSeedBtnSize - 8;
        itemOffset = 4;
        currentSeed = 16;
      } else {
        itemSize = cabbageSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(cabbageSeedIcon, cabbageSeedBtnX + itemOffset, cabbageSeedBtnY + itemOffset, itemSize, itemSize);

    itemSize = onionSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= onionSeedBtnX && mouseX <= onionSeedBtnX + onionSeedBtnSize &&
        mouseY >= onionSeedBtnY && mouseY <= onionSeedBtnY + onionSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = onionSeedBtnSize - 8;
        itemOffset = 4;
        currentSeed = 17;
      } else {
        itemSize = onionSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(onionSeedIcon, onionSeedBtnX + itemOffset, onionSeedBtnY + itemOffset, itemSize, itemSize);

    itemSize = lavenderSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= lavenderSeedBtnX && mouseX <= lavenderSeedBtnX + lavenderSeedBtnSize &&
        mouseY >= lavenderSeedBtnY && mouseY <= lavenderSeedBtnY + lavenderSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = lavenderSeedBtnSize - 8;
        itemOffset = 4;
        currentSeed = 18;
      } else {
        itemSize = lavenderSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(lavenderSeedIcon, lavenderSeedBtnX + itemOffset, lavenderSeedBtnY + itemOffset, itemSize, itemSize);

    itemSize = cornSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= cornSeedBtnX && mouseX <= cornSeedBtnX + cornSeedBtnSize &&
        mouseY >= cornSeedBtnY && mouseY <= cornSeedBtnY + cornSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = cornSeedBtnSize - 8;
        itemOffset = 4;
        currentSeed = 19;
      } else {
        itemSize = cornSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(cornSeedIcon, cornSeedBtnX + itemOffset, cornSeedBtnY + itemOffset, itemSize, itemSize);

    itemSize = pepperSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= pepperSeedBtnX && mouseX <= pepperSeedBtnX + pepperSeedBtnSize &&
        mouseY >= pepperSeedBtnY && mouseY <= pepperSeedBtnY + pepperSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = pepperSeedBtnSize - 8;
        itemOffset = 4;
        currentSeed = 20;
      } else {
        itemSize = pepperSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(pepperSeedIcon, pepperSeedBtnX + itemOffset, pepperSeedBtnY + itemOffset, itemSize, itemSize);

    itemSize = tomatoSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= tomatoSeedBtnX && mouseX <= tomatoSeedBtnX + tomatoSeedBtnSize &&
        mouseY >= tomatoSeedBtnY && mouseY <= tomatoSeedBtnY + tomatoSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = tomatoSeedBtnSize - 8;
        itemOffset = 4;
        currentSeed = 21;
      } else {
        itemSize = tomatoSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(tomatoSeedIcon, tomatoSeedBtnX + itemOffset, tomatoSeedBtnY + itemOffset, itemSize, itemSize);

    itemSize = eggplantSeedBtnSize;
    itemOffset = 0;
    if (mouseX >= eggplantSeedBtnX && mouseX <= eggplantSeedBtnX + eggplantSeedBtnSize &&
        mouseY >= eggplantSeedBtnY && mouseY <= eggplantSeedBtnY + eggplantSeedBtnSize) {
      if (mouseIsPressed) {
        itemSize = eggplantSeedBtnSize - 8;
        itemOffset = 4;
        currentSeed = 22;
      } else {
        itemSize = eggplantSeedBtnSize + 8;
        itemOffset = -4;
      }
    }
    image(eggplantSeedIcon, eggplantSeedBtnX + itemOffset, eggplantSeedBtnY + itemOffset, itemSize, itemSize);

  }


  if (isAchievementsOpen) {

    if (coinAchieved1k) {
      image(coinAchiIcon, coinAchi1kBtnX, coinAchi1kBtnY, coinAchi1kBtnSize, coinAchi1kBtnSize);
    } else {
      image(blankAchiIcon, coinAchi1kBtnX, coinAchi1kBtnY, coinAchi1kBtnSize, coinAchi1kBtnSize);
    }

    if (coinAchieved100k) {
      image(coinAchiIcon, coinAchi100kBtnX, coinAchi100kBtnY, coinAchi100kBtnSize, coinAchi100kBtnSize);
    } else {
      image(blankAchiIcon, coinAchi100kBtnX, coinAchi100kBtnY, coinAchi100kBtnSize, coinAchi100kBtnSize);
    }

    if (coinAchieved100m) {
      image(coinAchiIcon, coinAchi100mBtnX, coinAchi100mBtnY, coinAchi100mBtnSize, coinAchi100mBtnSize);
    } else {
      image(blankAchiIcon, coinAchi100mBtnX, coinAchi100mBtnY, coinAchi100mBtnSize, coinAchi100mBtnSize);
    }

    if (coinAchieved100b) {
      image(coinAchiIcon, coinAchi100bBtnX, coinAchi100bBtnY, coinAchi100bBtnSize, coinAchi100bBtnSize);
    } else {
      image(blankAchiIcon, coinAchi100bBtnX, coinAchi100bBtnY, coinAchi100bBtnSize, coinAchi100bBtnSize);
    }

    if (plantMarigoldAchieved) {
      image(marigoldSeedIcon, plantMarigoldAchiBtnX, plantMarigoldAchiBtnY, plantMarigoldAchiBtnSize, plantMarigoldAchiBtnSize);
    } else {
      image(blankAchiIcon, plantMarigoldAchiBtnX, plantMarigoldAchiBtnY, plantMarigoldAchiBtnSize, plantMarigoldAchiBtnSize);
    }

    if (plantCeleryAchieved) {
      image(celerySeedIcon, plantCeleryAchiBtnX, plantCeleryAchiBtnY, plantCeleryAchiBtnSize, plantCeleryAchiBtnSize);
    } else {
      image(blankAchiIcon, plantCeleryAchiBtnX, plantCeleryAchiBtnY, plantCeleryAchiBtnSize, plantCeleryAchiBtnSize);
    }

    if (plantTurnipAchieved) {
      image(turnipSeedIcon, plantTurnipAchiBtnX, plantTurnipAchiBtnY, plantTurnipAchiBtnSize, plantTurnipAchiBtnSize);
    } else {
      image(blankAchiIcon, plantTurnipAchiBtnX, plantTurnipAchiBtnY, plantTurnipAchiBtnSize, plantTurnipAchiBtnSize);
    }

    if (plantEggplantAchieved) {
      image(eggplantSeedIcon, plantEggplantAchiBtnX, plantEggplantAchiBtnY, plantEggplantAchiBtnSize, plantEggplantAchiBtnSize);
    } else {
      image(blankAchiIcon, plantEggplantAchiBtnX, plantEggplantAchiBtnY, plantEggplantAchiBtnSize, plantEggplantAchiBtnSize);
    }

    if (variety4PlantsAchieved) {
      image(varietyAchiIcon, variety4PlantsAchiBtnX, variety4PlantsAchiBtnY, variety4PlantsAchiBtnSize, variety4PlantsAchiBtnSize);
    } else {
      image(blankAchiIcon, variety4PlantsAchiBtnX, variety4PlantsAchiBtnY, variety4PlantsAchiBtnSize, variety4PlantsAchiBtnSize);
    }

    if (variety10PlantsAchieved) {
      image(varietyAchiIcon, variety10PlantsAchiBtnX, variety10PlantsAchiBtnY, variety10PlantsAchiBtnSize, variety10PlantsAchiBtnSize);
    } else {
      image(blankAchiIcon, variety10PlantsAchiBtnX, variety10PlantsAchiBtnY, variety10PlantsAchiBtnSize, variety10PlantsAchiBtnSize);
    }

    if (variety16PlantsAchieved) {
      image(varietyAchiIcon, variety16PlantsAchiBtnX, variety16PlantsAchiBtnY, variety16PlantsAchiBtnSize, variety16PlantsAchiBtnSize);
    } else {
      image(blankAchiIcon, variety16PlantsAchiBtnX, variety16PlantsAchiBtnY, variety16PlantsAchiBtnSize, variety16PlantsAchiBtnSize);
    }

    if (variety22PlantsAchieved) {
      image(varietyAchiIcon, variety22PlantsAchiBtnX, variety22PlantsAchiBtnY, variety22PlantsAchiBtnSize, variety22PlantsAchiBtnSize);
    } else {
      image(blankAchiIcon, variety22PlantsAchiBtnX, variety22PlantsAchiBtnY, variety22PlantsAchiBtnSize, variety22PlantsAchiBtnSize);
    }

    if (tillAllTilesAchieved) {
      image(hoeAchiIcon, tillAllTilesAchiBtnX, tillAllTilesAchiBtnY, tillAllTilesAchiBtnSize, tillAllTilesAchiBtnSize);
    } else {
      image(blankAchiIcon, tillAllTilesAchiBtnX, tillAllTilesAchiBtnY, tillAllTilesAchiBtnSize, tillAllTilesAchiBtnSize);
    }

    if (water100CropsAchieved) {
      image(waterAchiIcon, water100CropsAchiBtnX, water100CropsAchiBtnY, water100CropsAchiBtnSize, water100CropsAchiBtnSize);
    } else {
      image(blankAchiIcon, water100CropsAchiBtnX, water100CropsAchiBtnY, water100CropsAchiBtnSize, water100CropsAchiBtnSize);
    }

    if (plant100CropsAchieved) {
      image(hoeAchiIcon, plant100CropsAchiBtnX, plant100CropsAchiBtnY, plant100CropsAchiBtnSize, plant100CropsAchiBtnSize);
    } else {
      image(blankAchiIcon, plant100CropsAchiBtnX, plant100CropsAchiBtnY, plant100CropsAchiBtnSize, plant100CropsAchiBtnSize);
    }

    if (water1000CropsAchieved) {
      image(waterAchiIcon, water1000CropsAchiBtnX, water1000CropsAchiBtnY, water1000CropsAchiBtnSize, water1000CropsAchiBtnSize);
    } else {
      image(blankAchiIcon, water1000CropsAchiBtnX, water1000CropsAchiBtnY, water1000CropsAchiBtnSize, water1000CropsAchiBtnSize);
    }

    if (plant1000CropsAchieved) {
      image(hoeAchiIcon, plant1000CropsAchiBtnX, plant1000CropsAchiBtnY, plant1000CropsAchiBtnSize, plant1000CropsAchiBtnSize);
    } else {
      image(blankAchiIcon, plant1000CropsAchiBtnX, plant1000CropsAchiBtnY, plant1000CropsAchiBtnSize, plant1000CropsAchiBtnSize);
    }

    if (coinAchieved999T) {
      image(coinAchiIcon, coinAchi999TBtnX, coinAchi999TBtnY, coinAchi999TBtnSize, coinAchi999TBtnSize);
    } else {
      image(blankAchiIcon, coinAchi999TBtnX, coinAchi999TBtnY, coinAchi999TBtnSize, coinAchi999TBtnSize);
    }

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
  } else if (currentSeed === 9) {
    text("radish (" + formatMoney(radishPurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 10) {
    text("celery (" + formatMoney(celeryPurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 11) {
    text("leek (" + formatMoney(leekPurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 12) {
    text("garlic (" + formatMoney(garlicPurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 13) {
    text("red lettuce (" + formatMoney(plettucePurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 14) {
    text("watermelon (" + formatMoney(watermelonPurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 15) {
    text("turnip (" + formatMoney(turnipPurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 16) {
    text("cabbage (" + formatMoney(cabbagePurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 17) {
    text("onion (" + formatMoney(onionPurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 18) {
    text("lavender (" + formatMoney(lavenderPurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 19) {
    text("corn (" + formatMoney(cornPurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 20) {
    text("pepper (" + formatMoney(pepperPurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 21) {
    text("tomato (" + formatMoney(tomatoPurchasePrice) + " coins)", 20, 65);
  } else if (currentSeed === 22) {
    text("eggplant (" + formatMoney(eggplantPurchasePrice) + " coins)", 20, 65);
  } 







  fill(0);

  
  let btnTooltip = "";

  
  
  
if (mouseX >= achiBtnX && mouseX <= achiBtnX + achiBtnSize && mouseY >= achiBtnY && mouseY <= achiBtnY + achiBtnSize) {
    btnTooltip = "achievements";
  }
  
  else if (mouseX >= seedBtnX && mouseX <= seedBtnX + seedBtnSize && mouseY >= seedBtnY && mouseY <= seedBtnY + seedBtnSize) {
    btnTooltip = "buy seeds";
  }
 
  else if (isShopOpen  && mouseX >= backBtnX && mouseX <= backBtnX + backBtnSize && mouseY >= backBtnY && mouseY <= backBtnY + backBtnSize) {
    btnTooltip = "go back";
  }
  
  else if (isAchievementsOpen  && mouseX >= backBtnX && mouseX <= backBtnX + backBtnSize && mouseY >= backBtnY && mouseY <= backBtnY + backBtnSize) {
    btnTooltip = "go back";
  }
  
  
  else if (isShopOpen && mouseX >= carrotSeedBtnX && mouseX <= carrotSeedBtnX + carrotSeedBtnSize && mouseY >= carrotSeedBtnY && mouseY <= carrotSeedBtnY + carrotSeedBtnSize) {
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
  } else if (isShopOpen && mouseX >= radishSeedBtnX && mouseX <= radishSeedBtnX + radishSeedBtnSize && mouseY >= radishSeedBtnY && mouseY <= radishSeedBtnY + radishSeedBtnSize) {
    btnTooltip = "select radish";
  } else if (isShopOpen && mouseX >= celerySeedBtnX && mouseX <= celerySeedBtnX + celerySeedBtnSize && mouseY >= celerySeedBtnY && mouseY <= celerySeedBtnY + celerySeedBtnSize) {
    btnTooltip = "select celery";
  } else if (isShopOpen && mouseX >= leekSeedBtnX && mouseX <= leekSeedBtnX + leekSeedBtnSize && mouseY >= leekSeedBtnY && mouseY <= leekSeedBtnY + leekSeedBtnSize) {
    btnTooltip = "select leek";
  } else if (isShopOpen && mouseX >= garlicSeedBtnX && mouseX <= garlicSeedBtnX + garlicSeedBtnSize && mouseY >= garlicSeedBtnY && mouseY <= garlicSeedBtnY + garlicSeedBtnSize) {
    btnTooltip = "select garlic";
  } else if (isShopOpen && mouseX >= plettuceSeedBtnX && mouseX <= plettuceSeedBtnX + plettuceSeedBtnSize && mouseY >= plettuceSeedBtnY && mouseY <= plettuceSeedBtnY + plettuceSeedBtnSize) {
    btnTooltip = "select red lettuce";
  } else if (isShopOpen && mouseX >= watermelonSeedBtnX && mouseX <= watermelonSeedBtnX + watermelonSeedBtnSize && mouseY >= watermelonSeedBtnY && mouseY <= watermelonSeedBtnY + watermelonSeedBtnSize) {
    btnTooltip = "select watermelon";
  } else if (isShopOpen && mouseX >= turnipSeedBtnX && mouseX <= turnipSeedBtnX + turnipSeedBtnSize && mouseY >= turnipSeedBtnY && mouseY <= turnipSeedBtnY + turnipSeedBtnSize) {
    btnTooltip = "select turnip";
  } else if (isShopOpen && mouseX >= cabbageSeedBtnX && mouseX <= cabbageSeedBtnX + cabbageSeedBtnSize && mouseY >= cabbageSeedBtnY && mouseY <= cabbageSeedBtnY + cabbageSeedBtnSize) {
    btnTooltip = "select cabbage";
  } else if (isShopOpen && mouseX >= onionSeedBtnX && mouseX <= onionSeedBtnX + onionSeedBtnSize && mouseY >= onionSeedBtnY && mouseY <= onionSeedBtnY + onionSeedBtnSize) {
    btnTooltip = "select onion";
  } else if (isShopOpen && mouseX >= lavenderSeedBtnX && mouseX <= lavenderSeedBtnX + lavenderSeedBtnSize && mouseY >= lavenderSeedBtnY && mouseY <= lavenderSeedBtnY + lavenderSeedBtnSize) {
    btnTooltip = "select lavender";
  } else if (isShopOpen && mouseX >= cornSeedBtnX && mouseX <= cornSeedBtnX + cornSeedBtnSize && mouseY >= cornSeedBtnY && mouseY <= cornSeedBtnY + cornSeedBtnSize) {
    btnTooltip = "select corn";
  } else if (isShopOpen && mouseX >= pepperSeedBtnX && mouseX <= pepperSeedBtnX + pepperSeedBtnSize && mouseY >= pepperSeedBtnY && mouseY <= pepperSeedBtnY + pepperSeedBtnSize) {
    btnTooltip = "select pepper";
  } else if (isShopOpen && mouseX >= tomatoSeedBtnX && mouseX <= tomatoSeedBtnX + tomatoSeedBtnSize && mouseY >= tomatoSeedBtnY && mouseY <= tomatoSeedBtnY + tomatoSeedBtnSize) {
    btnTooltip = "select tomato";
  } else if (isShopOpen && mouseX >= eggplantSeedBtnX && mouseX <= eggplantSeedBtnX + eggplantSeedBtnSize && mouseY >= eggplantSeedBtnY && mouseY <= eggplantSeedBtnY + eggplantSeedBtnSize) {
    btnTooltip = "select eggplant";
  } 



  //achi ccwapp

  else if (isAchievementsOpen && mouseX >= coinAchi1kBtnX && mouseX <= coinAchi1kBtnX + coinAchi1kBtnSize && mouseY >= coinAchi1kBtnY && mouseY <= coinAchi1kBtnY + coinAchi1kBtnSize) {
    btnTooltip = coinAchieved1k ? "get 1k coins" : "???";
  }

  else if (isAchievementsOpen && mouseX >= coinAchi100kBtnX && mouseX <= coinAchi100kBtnX + coinAchi100kBtnSize && mouseY >= coinAchi100kBtnY && mouseY <= coinAchi100kBtnY + coinAchi100kBtnSize) {
    btnTooltip = coinAchieved100k ? "get 100k coins" : "???";
  }

  else if (isAchievementsOpen && mouseX >= coinAchi100mBtnX && mouseX <= coinAchi100mBtnX + coinAchi100mBtnSize && mouseY >= coinAchi100mBtnY && mouseY <= coinAchi100mBtnY + coinAchi100mBtnSize) {
    btnTooltip = coinAchieved100m ? "get 100m coins" : "???";
  }

  else if (isAchievementsOpen && mouseX >= coinAchi100bBtnX && mouseX <= coinAchi100bBtnX + coinAchi100bBtnSize && mouseY >= coinAchi100bBtnY && mouseY <= coinAchi100bBtnY + coinAchi100bBtnSize) {
    btnTooltip = coinAchieved100b ? "get 100b coins" : "???";
  }

  else if (isAchievementsOpen && mouseX >= coinAchi999TBtnX && mouseX <= coinAchi999TBtnX + coinAchi999TBtnSize && mouseY >= coinAchi999TBtnY && mouseY <= coinAchi999TBtnY + coinAchi999TBtnSize) {
    btnTooltip = coinAchieved999T ? "get 999t coins" : "???";
  }

  else if (isAchievementsOpen && mouseX >= plantMarigoldAchiBtnX && mouseX <= plantMarigoldAchiBtnX + plantMarigoldAchiBtnSize && mouseY >= plantMarigoldAchiBtnY && mouseY <= plantMarigoldAchiBtnY + plantMarigoldAchiBtnSize) {
    btnTooltip = plantMarigoldAchieved ? "plant a marigold" : "???";
  }

  else if (isAchievementsOpen && mouseX >= plantCeleryAchiBtnX && mouseX <= plantCeleryAchiBtnX + plantCeleryAchiBtnSize && mouseY >= plantCeleryAchiBtnY && mouseY <= plantCeleryAchiBtnY + plantCeleryAchiBtnSize) {
    btnTooltip = plantCeleryAchieved ? "plant a celery" : "???";
  }

  else if (isAchievementsOpen && mouseX >= plantTurnipAchiBtnX && mouseX <= plantTurnipAchiBtnX + plantTurnipAchiBtnSize && mouseY >= plantTurnipAchiBtnY && mouseY <= plantTurnipAchiBtnY + plantTurnipAchiBtnSize) {
    btnTooltip = plantTurnipAchieved ? "plant a turnip" : "???";
  }

  else if (isAchievementsOpen && mouseX >= plantEggplantAchiBtnX && mouseX <= plantEggplantAchiBtnX + plantEggplantAchiBtnSize && mouseY >= plantEggplantAchiBtnY && mouseY <= plantEggplantAchiBtnY + plantEggplantAchiBtnSize) {
    btnTooltip = plantEggplantAchieved ? "plant an eggplant" : "???";
  }

  else if (isAchievementsOpen && mouseX >= variety4PlantsAchiBtnX && mouseX <= variety4PlantsAchiBtnX + variety4PlantsAchiBtnSize && mouseY >= variety4PlantsAchiBtnY && mouseY <= variety4PlantsAchiBtnY + variety4PlantsAchiBtnSize) {
    btnTooltip = variety4PlantsAchieved ? "have 4 plant types" : "???";
  }

  else if (isAchievementsOpen && mouseX >= variety10PlantsAchiBtnX && mouseX <= variety10PlantsAchiBtnX + variety10PlantsAchiBtnSize && mouseY >= variety10PlantsAchiBtnY && mouseY <= variety10PlantsAchiBtnY + variety10PlantsAchiBtnSize) {
    btnTooltip = variety10PlantsAchieved ? "have 10 plant types" : "???";
  }

  else if (isAchievementsOpen && mouseX >= variety16PlantsAchiBtnX && mouseX <= variety16PlantsAchiBtnX + variety16PlantsAchiBtnSize && mouseY >= variety16PlantsAchiBtnY && mouseY <= variety16PlantsAchiBtnY + variety16PlantsAchiBtnSize) {
    btnTooltip = variety16PlantsAchieved ? "have 16 plant types" : "???";
  }

  else if (isAchievementsOpen && mouseX >= variety22PlantsAchiBtnX && mouseX <= variety22PlantsAchiBtnX + variety22PlantsAchiBtnSize && mouseY >= variety22PlantsAchiBtnY && mouseY <= variety22PlantsAchiBtnY + variety22PlantsAchiBtnSize) {
    btnTooltip = variety22PlantsAchieved ? "have 22 plant types" : "???";
  }

  else if (isAchievementsOpen && mouseX >= tillAllTilesAchiBtnX && mouseX <= tillAllTilesAchiBtnX + tillAllTilesAchiBtnSize && mouseY >= tillAllTilesAchiBtnY && mouseY <= tillAllTilesAchiBtnY + tillAllTilesAchiBtnSize) {
    btnTooltip = tillAllTilesAchieved ? "till every tile" : "???";
  }

  else if (isAchievementsOpen && mouseX >= water100CropsAchiBtnX && mouseX <= water100CropsAchiBtnX + water100CropsAchiBtnSize && mouseY >= water100CropsAchiBtnY && mouseY <= water100CropsAchiBtnY + water100CropsAchiBtnSize) {
    btnTooltip = water100CropsAchieved ? "water 100 crops" : "???";
  }

  else if (isAchievementsOpen && mouseX >= water1000CropsAchiBtnX && mouseX <= water1000CropsAchiBtnX + water1000CropsAchiBtnSize && mouseY >= water1000CropsAchiBtnY && mouseY <= water1000CropsAchiBtnY + water1000CropsAchiBtnSize) {
    btnTooltip = water1000CropsAchieved ? "water 1000 crops" : "???";
  }

  else if (isAchievementsOpen && mouseX >= plant100CropsAchiBtnX && mouseX <= plant100CropsAchiBtnX + plant100CropsAchiBtnSize && mouseY >= plant100CropsAchiBtnY && mouseY <= plant100CropsAchiBtnY + plant100CropsAchiBtnSize) {
    btnTooltip = plant100CropsAchieved ? "plant 100 crops" : "???";
  }

  else if (isAchievementsOpen && mouseX >= plant1000CropsAchiBtnX && mouseX <= plant1000CropsAchiBtnX + plant1000CropsAchiBtnSize && mouseY >= plant1000CropsAchiBtnY && mouseY <= plant1000CropsAchiBtnY + plant1000CropsAchiBtnSize) {
    btnTooltip = plant1000CropsAchieved ? "plant 1000 crops" : "???";
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
        tooltipText = "harvest blueberries (get " + formatMoney(blueberrySellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 9) {
        tooltipText = "harvest radish (get " + formatMoney(radishSellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 10) {
        tooltipText = "harvest celery (get " + formatMoney(celerySellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 11) {
        tooltipText = "harvest leek (get " + formatMoney(leekSellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 12) {
        tooltipText = "harvest garlic (get " + formatMoney(garlicSellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 13) {
        tooltipText = "harvest red lettuce (get " + formatMoney(plettuceSellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 14) {
        tooltipText = "harvest watermelon (get " + formatMoney(watermelonSellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 15) {
        tooltipText = "harvest turnip (get " + formatMoney(turnipSellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 16) {
        tooltipText = "harvest cabbage (get " + formatMoney(cabbageSellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 17) {
        tooltipText = "harvest onion (get " + formatMoney(onionSellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 18) {
        tooltipText = "harvest lavender (get " + formatMoney(lavenderSellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 19) {
        tooltipText = "harvest corn (get " + formatMoney(cornSellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 20) {
        tooltipText = "harvest pepper (get " + formatMoney(pepperSellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 21) {
        tooltipText = "harvest tomato (get " + formatMoney(tomatoSellPrice) + " coins)";
      } else if (seeds[mouseTileY][mouseTileX] === 22) {
        tooltipText = "harvest eggplant (get " + formatMoney(eggplantSellPrice) + " coins)";
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


  textSize(24);

  fps = frameRate()

  fill(0);
  text("FPS: " + fps.toFixed(), 1340, 20);


  checkAchievements()
  
  if(coins > 999990000000000){coins = 999990000000000}
















  if (frameCount % 180 === 0) saveGame(); 
  













}