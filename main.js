function setup() {
  createCanvas(400, 400);
  seedX = random(400);
  seedY = 0;
  catcherBody = ["brown"];
  let overlap;
}

function draw() {
  addCatcher(mouseX, 350);
  dropSeed();
}

function addCatcher(x, y) {
  push();

  if (seedY >= 350 && seedX >= x - 30 && seedX <= x + 30) {
    catcherBody = "green";
  } else {
    catcherBody = "brown";
  }

  translate(x, y);
  background("lightblue");
  noStroke();
  fill(catcherBody);
  ellipse(25, 35, 25);
  fill("white");
  ellipse(25, 15, 25);
  fill("black");
  ellipse(15, 15, 10);
  ellipse(35, 15, 10);

  fill("orange");
  ellipse(15, 45, 10);
  ellipse(35, 45, 10);

  pop();
}

function dropSeed() {
  if (mouseButton) {
    noStroke;
    seedY = seedY + 5;
    fill("crimson");
    circle(seedX, seedY, 10);
  }
}
