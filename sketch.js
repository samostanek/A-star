var grid;

function setup() {
	createCanvas(400, 400);

	grid = gridInit(50);

	for (var i = 0; i < grid.length; i++) {
		for (var j = 0; j < grid[i].length; j++) {
			grid[i][j] = new Spot();
		}
	}
}

function draw() {

}


function gridInit(space) {
	// Get width and height of grid based on size of cell
	let cols = width/space;
	let rows = height/space;

	// Make x part of grid
	let out = new Array(cols);
	// Add cell for each row in col i
	for (var i = 0; i < out.length; i++) out[i] = new Array(rows);

	return out
}
