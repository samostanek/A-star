var grid, start, end, spc;
var openSet, closedSet, current;
var done;

function setup() {
  createCanvas(800, 800);
  //frameRate(1);

  spc = 16;
  grid = gridInit(spc);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = new Spot(i, j, random(1) < 0.5);
    }
  }

  start = grid[0][0];
  end = grid[grid.length - 1][grid[0].length - 1];
  grid[grid.length - 1][grid[0].length - 1].wall = false;
  //end = random(random(grid));

  for (let i of grid) for (let j of i) j.addNeighbors(grid);

  openSet = [start];
  grid[start.x][start.y].evaluate(0, end);
  closedSet = [];

  done = false;
}

function draw() {
  if (openSet.length > 0 && !done) {
    current = openSet[0];
    for (let i of openSet) {
      if (i == end) done = true;
      if (current.f > i.f) current = i;
    }

    closedSet.push(current);
    openSet = removeFromArray(current, openSet);

    // Go through all the neighbors and evaluate each
    for (let neighbor of current.neighbors) {
      // Dont evaluate if neighbor is already in closed set
      if (!closedSet.includes(neighbor)) {
        // Check if neighbor is in open set
        if (openSet.includes(neighbor)) {
          // If yes, compare current and neighbor g
          if (neighbor.g > current.g + 1) {
            // If current g is better, rewrite
            neighbor.evaluate(current.g + 1, end);
            neighbor.cameFrom = current;
            openSet.push(neighbor);
          }
        } else {
          // If not, just evaluate
          neighbor.evaluate(current.g + 1, end);
          neighbor.cameFrom = current;
          openSet.push(neighbor);
        }
      }
    }

    // Draw grid
    for (let i of grid) for (let j of i) j.show(-1, spc - 1);
    for (let i of openSet) i.show(color(0, 255, 0), spc - 1);
    for (let i of closedSet) i.show(color(255, 0, 0), spc - 1);

    // let p = findPath(current);
    // for (let el of p) el.show(color(0, 0, 255), spc - 1);
  } else {
    // Draw grid
    for (let i of grid) for (let j of i) j.show(-1, spc - 1);
    for (let i of openSet) i.show(color(0, 255, 0), spc - 1);
    for (let i of closedSet) i.show(color(255, 0, 0), spc - 1);

    if (openSet.length == 0) console.log("no solution");
    else {
      console.log("DONE!");
      let p = findPath(end);
      console.log(p);
      for (let el of p) el.show(color(0, 0, 255), spc - 1);
    }

    noLoop();
  }
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

function removeFromArray(el, array) {
  for (let i = array.length - 1; i >= 0; i--)
    if (array[i] == el) array.splice(i, 1);
  return array;
}

function findPath(origin) {
  let path = [];
  let temp = origin;
  while (true) {
    path.push(temp);
    if (temp.cameFrom) temp = temp.cameFrom;
    else return path;
  }
}
