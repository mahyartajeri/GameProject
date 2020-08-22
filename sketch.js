let player;
let acc = 0.5; //acceleration 
let friction = 0.25; 

function setup(){
	let canvas = createCanvas(600, 600);
	player = new Player(0, width/2, height/2);
	canvas.position(300, 100);
}

function draw(){
	background(220);
	//camera.zoom = 0.5;
	rect(100, 100, 50, 50);
	checkForMovement();
	slowDown();
	player.drawPlayer()
	camera.position.x = player.x;
	camera.position.y = player.y;

}

function checkForMovement(){
	if(keyIsDown(87)){ //keycode for w
		if(player.y_vel > -10){
			player.y_vel -= acc;
		}
	}
	if(keyIsDown(83)){ //keycode for s
		if(player.y_vel < 10){
			player.y_vel += acc;
		}
	}
	if(keyIsDown(65)){ // keycode for a
		if(player.x_vel > -10){
			player.x_vel -= acc;
		}
	}
	if(keyIsDown(68)){ //keycode for d
		if(player.x_vel < 10){
			player.x_vel += acc;
		}
	}
}

function slowDown(){

	if(player.x_vel > 0){
		player.x_vel -= friction;
	}
	else if(player.x_vel < 0){
		player.x_vel += friction;
	}

	if(player.y_vel > 0){
		player.y_vel -= friction;
	}
	else if (player.y_vel < 0){
		player.y_vel += friction;
	}
}
