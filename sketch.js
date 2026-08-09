
const numTilesX = 20; 
const numTilesY = 10;



level = [
  "01010101010101010101",
  "10101010101010101010",
  "01010101010101010101",
  "10101010101010101010",
  "01010101010101010101",
  "10101010101010101010",
  "01010101010101010101",
  "10101010101010101010",
  "01010101010101010101",
  "10101010101010101010"
];

function whatSquare(row, col) {
  if (row >= 0 && row < numTilesY && col >= 0 && col < numTilesX) {
    return level[row].charAt(col);
  }
}
async function setup() {
  createCanvas(1440, 720);
}

function draw() {
  background(220);

}