class Bullet {
    //start init from dog
    constructor(gameWidth, gameHeight, player){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.rightView = player.rightView;
        this.x = player.x;
        this.y = player.y;
        this.color = "red";
        this.active = true;
        
        this.width = 20;
        this.radiant = 10;
        this.height = 20;
        this.speed = 0;
        this.maxSpeed = 10;
    }

    update(){
        if(this.rightView){
            this.x += this.maxSpeed;
        }
        else {
            this.x -= this.maxSpeed;
        }

        if(this.x >= this.gameWidth || this.x <= 0){
            this.active = false;
        }
    }

    draw(context){
        context.beginPath();
        context.arc(this.x, this.y, this.radiant, 0, 2*Math.PI)
        context.stroke();
        context.fillStyle = "red";
        context.fill();
    }
}


export default Bullet