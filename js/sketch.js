var photos = [];
var img; 

//CCapture
var capturer = new CCapture({
  format:'gif', 
  workersPath: 'js/',
  framerate: 20
});

function preload(){
  for (let i = 1; i < 91; i++){
    photos[i] = loadImage("data/maternalDance-" + i + ".png");
  }  
}



function setup() {
  createCanvas(960, 540);
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
  if (frameCount==360){
    save_record();
  }
  print(frameCount);
}

function save_record() {
  capturer.save();
}