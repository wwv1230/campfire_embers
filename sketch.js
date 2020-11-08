let particle;
let yoff = 0.0;

function setup() {

  createCanvas(700, 400);
  particle = new Particle();
}

function draw() {

  background(20,20,70);;

  fill(255,100,0);
  beginShape();

  let xoff = 0;

  for (let x = 200; x <= 500; x += 10) {
    let y = map(noise(xoff, yoff), 0, 1, 500, 100);
    vertex(x, y);
    xoff += 0.1;
  }

  yoff += 0.01;
  vertex(500, height);
  vertex(200, height);
  endShape(CLOSE);


  let gravity = createVector(0, 0.08);

  particle.applyForce(gravity);
  particle.update();
  particle.show();


}

class Particle {

  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(random(-3,3), random(-5,-4));
    this.acc = createVector(0, 0);

  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    noStroke
    fill(255,150,0);
    ellipse(this.pos.x, this.pos.y, 12, 12);
    if (this.pos.y > height) {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(random(-5,5), random(-6,-5));
    this.acc = createVector(0, 0);
    }
  }
}
