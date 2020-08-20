let player;

function setup(){
	player = new Player(0);
	createCanvas(600, 600);
}

function draw(){
	
}

function drawPlayer(){
	ellipse(0, 0, player.size, player.size);
}