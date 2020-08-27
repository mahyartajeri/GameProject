class Bullet{
	
	constructor(x , y , angle , type , velocity){
		this.x = x;
		this.y = y;
		this.angle = angle;
		this.type = type;
		this.velocity = 10;
		this.x_vel = cos(angle)*this.velocity;
		this.y_vel = sin(angle)*this.velocity;
	}


	update(){
		this.x += this.x_vel;
		this.y += this.y_vel;

		ellipse(this.x , this.y , 5 , 5);
		
	}
}