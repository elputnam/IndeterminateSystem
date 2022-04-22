var photos = [];
var img; 

function preload(){
  for (let i = 1; i < 91; i++){
    photos[i] = loadImage("data/maternalDance-" + i + ".png");
  }  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  // background(175, random(100), random(100), 10);
  let num = int(random(1, 90));
  tint(random(165, 190), 100, 100, random(100));
  image(photos[num], 0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}