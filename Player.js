class Player{


	constructor(type, x, y){
		this.type = type; //AI or real player
		this.x = x;
		this.y = y;
		this.size = 30;
		this.x_vel = 0;
		this.y_vel = 0;

		this.bullets = [];

	}	

	drawPlayer(){
		this.x = this.x + this.x_vel;
		this.y = this.y + this.y_vel;
		if(this.type == 0){
			push();
			stroke(3);
			fill(255, 0, 0);
			ellipse(this.x, this.y, this.size, this.size);
			pop();
		}
	}

	shoot(){

		let x_mouse = mouseX;
		let y_mouse = mouseY;

		let calculatedAngle = asin((y_mouse - player.y) / dist(player.x , player.y , x_mouse , y_mouse) );

		let startVector = createVector(player.x , player.y);
		let endVector = createVector(x_mouse , y_mouse);
		this.bullets.push(new Bullet(player.x , player.y , calculatedAngle , 0 , 10 ));

		console.log(startVector.angleBetween(endVector)*180/PI);
		console.log("ploopy");

	}



}