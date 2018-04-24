var grid;

function setup() {
	createCanvas(400, 400);

	grid = gridInit(20);
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
	for (col in out) col = new Array(rows);

	return out
}
