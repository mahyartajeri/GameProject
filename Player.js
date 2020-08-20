class Player{


	constructor(type, x, y){
		this.type = type; //AI or real player
		this.x = x;
		this.y = y;
		this.size = 30;
		this.x_vel = 0;
		this.y_vel = 0;
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



}