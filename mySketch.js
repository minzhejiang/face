var portret = [];
var img1, img2, img3, img4, img5;
var hold=false;
var blured=false;
function preload() {
  img1 = loadImage("img/pic1.png");
  img2 = loadImage("img/pic2.png");
  img3 = loadImage("img/pic3.png");
  img4 = loadImage("img/pic4.png");
  img5 = loadImage("img/pic5.png");
  
}
function setup() {
  createCanvas(917, 800);
  img1.loadPixels();
  img2.loadPixels();
  img3.loadPixels();
  img4.loadPixels();
  img5.loadPixels();
  portret.push(img1);
  portret.push(img2);
  portret.push(img3);
  portret.push(img4);
  portret.push(img5); 
  loadPixels();
}

function draw() {
  var r = 1;
  for (var i = 0; i < 20000; i++) {
    var x = int(random(width));
    var y = int(random(height));
    var nimg=int(5*noise(x*.002+cos(frameCount*.0001), y*.002+sin(frameCount*.001), sin(frameCount*.01)));
    for (var k = 0; k < 4; k++) {
      var col=pixels[k + 4 * (y * width + x)] ;
      pixels[k + 4 * (y * width + x)] =int(.5*portret[nimg].pixels[k+4* (y * width + x)]+.5*col);
    }
  }
  if(!hold)updatePixels();
  else if (!blured){
    filter(BLUR,1);
    blured=true;
  }
}
function mousePressed() {
  hold=true;
}
function mouseReleased() {
  hold=false;
  blured=false;
}