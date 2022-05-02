var photos = [];
var img; 

//CCapture
var capturer = new CCapture({
  format:'gif', 
  workersPath: 'js/',
  framerate: 15
});

function preload(){
  for (let i = 1; i < 91; i++){
    photos[i] = loadImage("data/maternalDance-" + i + ".png");
  }  
}



function setup() {
  createCanvas(480, 270);
  frameRate(20);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  // background(175, random(100), random(100), 10);
  if (frameCount==1) capturer.start(); // start the animation capture
  let num = int(random(1, 90));
  tint(random(165, 190), 100, 100, random(100));
  image(photos[num], 0, 0, width, height);
  
  capturer.capture(document.getElementById('defaultCanvas0'));  
<<<<<<< HEAD
  if (frameCount==180){
=======
  if (frameCount==150){
>>>>>>> 508a7bf8596689c92e2c73b75da24c6800048fe7
    save_record();
  }
  print(frameCount);
}

function save_record() {
  capturer.save();
}