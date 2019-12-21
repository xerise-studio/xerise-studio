// Variables
let size = 100;
let angle;

let w, h;
let noff = 0;

function setup() {
  angle = 35;
  canvas = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  canvas.parent('canvas');
  w = size;
  h = size * sin(angle);
  b1 = color(108, 2, 65);
  b2 = color(42, 0, 45);

}

function draw() {
  translate(width/2, height/2);
  
  clear();
  strokeWeight(2);
  
  for (let x = floor(-width/2/w) * w; x < width / 2; x += w)
    for (let y = floor(-height/2/h) * h; y < height / 2; y+= h) {
      stroke(255, noise(x/w, y/h, noff) * 60);
      line(x, y, x+w, y+h);        
      line(x, y+h, x+w, y);        
    }
  
  noff+=0.012;
}
