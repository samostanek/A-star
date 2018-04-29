class Spot {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.f = 0;
    this.g = 0;
    this.h = 0;
  }

  show(c, s) {
    // Argument is width and height of one Spot in grid
    stroke(0);
    if (c != -1) fill(c);
    else noFill();
    strokeWeight(2);
    rect(this.x * s, this.y * s, s, s);
  }
}
