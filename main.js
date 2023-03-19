function setup() {
  createCanvas(400, 400);
}

function draw() {
  addCatcher(mouseX, 350);
}

function addCatcher(x, y) {
  push();
  translate(x, y);
  background("lightblue");
  noStroke();
  fill("brown");
  ellipse(25, 35, 25);
  fill("white");
  ellipse(25, 15, 25);
  fill("black");
  ellipse(15, 15, 10);
  ellipse(35, 15, 10);

  if (mouseIsPressed) {
    fill("orange");
    ellipse(15, 5, 10);
    ellipse(35, 5, 10);
  } else {
    fill("orange");
    ellipse(15, 45, 10);
    ellipse(35, 45, 10);
  }
  pop();
}
