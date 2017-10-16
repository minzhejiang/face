var portraits = [img1, img2, img3, img4, img5, img6,img7,img8,img9,img10,img11];
var hold=false;
var blured=false;
function preload() {
  img1 = loadImage("pic1.jpg");
  img2 = loadImage("pic2.jpg");
  img3 = loadImage("pic3.jpg");
  img4 = loadImage("pic4.jpg");
  img5 = loadImage("pic5.jpg");
  img6 = loadImage("pic6.jpg");
  img7 = loadImage("pic7.jpg");
  img8 = loadImage("pic8.jpg");
  img9 = loadImage("pic9.jpg");
  img10 = loadImage("pic10.jpg");
  img11 = loadImage("pic11.jpg");
  
}
function setup() {
  createCanvas(917, 800);
  img1.loadPixels();
  img2.loadPixels();
  img3.loadPixels();
  img4.loadPixels();
  img5.loadPixels();
  img6.loadPixels();
  img7.loadPixels();
  img8.loadPixels();
  img9.loadPixels();
  img10.loadPixels();
  img11.loadPixels();

  loadPixels();
}

function draw() {
  var r = 1;
  for (var i = 0; i < 20000; i++) {
    var x = int(random(width));
    var y = int(random(height));
    var nimg=int(11*noise(x*.002+cos(frameCount*.0001), y*.002+sin(frameCount*.001), sin(frameCount*.01)));
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
