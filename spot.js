class Spot {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.wall = w;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.neighbors = [];

    this.cameFrom = undefined;
  }

  show(c, s) {
    // Argument is width and height of one Spot in grid
    stroke(0);
    strokeWeight(2);
    if (!this.wall) {
      if (c != -1) fill(c);
      else noFill();
    } else fill(0);
    rect(this.x * s, this.y * s, s, s);
  }

  addNeighbors(grid) {
    if (!this.wall) {
      if (this.x != grid.length - 1 && !grid[this.x + 1][this.y].wall)
        this.neighbors.push(grid[this.x + 1][this.y]);
      if (this.x != 0 && !grid[this.x - 1][this.y].wall)
        this.neighbors.push(grid[this.x - 1][this.y]);
      if (this.y != grid[0].length - 1 && !grid[this.x][this.y + 1].wall)
        this.neighbors.push(grid[this.x][this.y + 1]);
      if (this.y != 0 && !grid[this.x][this.y - 1].wall)
        this.neighbors.push(grid[this.x][this.y - 1]);

      if (this.x != 0 && this.y != 0 && !grid[this.x - 1][this.y - 1].wall)
        this.neighbors.push(grid[this.x - 1][this.y - 1]);
      if (
        this.x != grid.length - 1 &&
        this.y != 0 &&
        !grid[this.x + 1][this.y - 1].wall
      )
        this.neighbors.push(grid[this.x + 1][this.y - 1]);
      if (
        this.y != grid[0].length - 1 &&
        this.x != grid.length - 1 &&
        !grid[this.x + 1][this.y + 1].wall
      )
        this.neighbors.push(grid[this.x + 1][this.y + 1]);
      if (
        this.y != grid[0].length - 1 &&
        this.x != 0 &&
        !grid[this.x - 1][this.y + 1].wall
      )
        this.neighbors.push(grid[this.x - 1][this.y + 1]);
    }
  }

  evaluate(g, end) {
    this.g = g;
    this.h = dist(this.x, this.y, end.x, end.y);
    this.f = this.g + this.h;
  }
}
