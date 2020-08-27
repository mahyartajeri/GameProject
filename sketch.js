let player;
let acc = 0.5; //acceleration 
let friction = 0.25; 
let t_vel = acc*20; //maximum/terminal velocity

function setup(){
	let canvas = createCanvas(600, 600);
	player = new Player(0, width/2, height/2);
	canvas.position(300, 100);
}

function draw(){
	background(220);
	camera.zoom = 0.5;
	rect(100, 100, 50, 50);
	checkForMovement();
	slowDown();
	player.drawPlayer();
	drawBullets();
	triangle(player.x, player.y , mouseX, mouseY, 50 , 50);
	camera.position.x = player.x;
	camera.position.y = player.y;

	console.log(mouseX , mouseY);

}

function drawBullets(){

	for(let i = 0 ; i < player.bullets.length ; i++){
		
		 player.bullets[i].update();


	}
}

function checkForMovement(){
	if(keyIsDown(87)){ //keycode for w
		if(player.y_vel > -t_vel){
			player.y_vel -= acc;
		}
	}
	if(keyIsDown(83)){ //keycode for s
		if(player.y_vel < t_vel){
			player.y_vel += acc;
		}
	}
	if(keyIsDown(65)){ // keycode for a
		if(player.x_vel > -t_vel){
			player.x_vel -= acc;
		}
	}
	if(keyIsDown(68)){ //keycode for d
		if(player.x_vel < t_vel){
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



function keyPressed(){

	if(keyCode === 32){
		player.shoot();
	}
}