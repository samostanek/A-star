class Spot {
  constructor(x, y, w) {
    this.x = x;
    this.y = y;
    this.walls = w;

    this.f = 0;
    this.g = 0;
    this.h = 0;

    this.neighbors = [];

    this.cameFrom = undefined;
  }

  show(c, spc) {
    if (c != -1) {
      fill(c);
      noStroke();
      rect(this.x * spc, this.y * spc, spc, spc);
    } else {
      noFill();
    }

    stroke(0);
    strokeWeight(2);

    let rx = this.x * spc - 1;
    let ry = this.y * spc - 1;
    if (this.walls[0]) line(rx, ry, rx + spc, ry);
    if (this.walls[1]) line(rx + spc, ry, rx + spc, ry + spc);
    if (this.walls[2]) line(rx + spc, ry + spc, rx, ry + spc);
    if (this.walls[3]) line(rx, ry + spc, rx, ry);
  }

  addNeighbors(grid) {
    // Top
    if (this.y != 0 && !this.walls[0]) {
      this.neighbors.push(grid[this.x][this.y - 1]);
    }
    // Right
    if (this.x != grid[0].length - 1 && !this.walls[1]) {
      this.neighbors.push(grid[this.x + 1][this.y]);
    }
    // Bottom
    if (this.y != grid.length - 1 && !this.walls[2]) {
      this.neighbors.push(grid[this.x][this.y + 1]);
    }
    // Left
    if (this.x != 0 && !this.walls[3]) {
      this.neighbors.push(grid[this.x - 1][this.y]);
    }

    // Won't be using diagonals for now
    // if (this.x != 0 && this.y != 0 && !grid[this.x - 1][this.y - 1].wall)
    //   this.neighbors.push(grid[this.x - 1][this.y - 1]);
    // if (
    //   this.x != grid.length - 1 &&]
    //   this.y != 0 &&
    //   !grid[this.x + 1][this.y - 1].wall
    // )
    //   this.neighbors.push(grid[this.x + 1][this.y - 1]);
    // if (
    //   this.y != grid[0].length - 1 &&
    //   this.x != grid.length - 1 &&
    //   !grid[this.x + 1][this.y + 1].wall
    // )
    //   this.neighbors.push(grid[this.x + 1][this.y + 1]);
    // if (
    //   this.y != grid[0].length - 1 &&
    //   this.x != 0 &&
    //   !grid[this.x - 1][this.y + 1].wall
    // )
    //   this.neighbors.push(grid[this.x - 1][this.y + 1]);
  }

  evaluate(g, end) {
    this.g = g / 2;
    this.h = dist(this.x, this.y, end.x, end.y);
    this.f = this.g + this.h;
  }
}
