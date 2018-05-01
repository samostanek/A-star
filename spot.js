class Spot {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.neighbors = [];
  }

  show(c, s) {
    // Argument is width and height of one Spot in grid
    stroke(0);
    if (c != -1) fill(c);
    else noFill();
    strokeWeight(2);
    rect(this.x * s, this.y * s, s, s);
  }

  addNeighbors(grid) {
    if (this.x != grid.length - 1)
      this.neighbors.push(grid[this.x + 1][this.y]);
    if (this.x != 0) this.neighbors.push(grid[this.x - 1][this.y]);
    if (this.y != grid[0].length - 1)
      this.neighbors.push(grid[this.x][this.y + 1]);
    if (this.y != 0) this.neighbors.push(grid[this.x][this.y - 1]);
  }
}
