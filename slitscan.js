var cap;
function setup() {
  createCanvas(400, 400);
  cap = createCapture(VIDEO);
  cap.hide();
  imageMode(CENTER);
}
function draw() {
  background(50);
  image(cap, mouseX, mouseY, 160, 120);
}
