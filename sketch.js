var grid, start, end, spc;
var openSet, closedSet;

function setup() {
  createCanvas(400, 400);

  spc = 50;
  grid = gridInit(spc);

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
      grid[i][j] = new Spot(i, j);
    }
  }

  start = grid[0][0];
  end = grid[grid.length - 1][grid[0].length - 1];

  openSet = [start];
  closedSet = [];
}

function draw() {
  if (openSet.length > 0) {
  } else {
    console.log("DONE!");
    noLoop();
  }

  // Draw grid
  for (let i of grid) for (let j of i) j.show(-1, spc - 1);
  for (let i of openSet) i.show(color(0, 255, 0), spc - 1);
  for (let i of closedSet) i.show(color(255, 0, 0), spc - 1);
}

function gridInit(space) {
  // Get width and height of grid based on size of cell
  let cols = width / space;
  let rows = height / space;

  // Make x part of grid
  let out = new Array(cols);
  // Add cell for each row in col i
  for (var i = 0; i < out.length; i++) out[i] = new Array(rows);

  return out;
}
