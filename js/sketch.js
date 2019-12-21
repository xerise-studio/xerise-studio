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
  
  let startx = floor(-width/2/w) * w;
  let starty = floor(-height/2/h) * h;
  for (let x = startx; x < width / 2; x += w)
    for (let y = starty; y < height / 2; y+= h) {
      stroke(255, ((y - starty)/height) * noise(x/w, y/h, noff) * 120);
      line(x, y, x+w, y+h);        
      line(x, y+h, x+w, y);        
    }
  
  noff+=0.012;
}
