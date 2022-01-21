class Enemy {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.sizeModifier = Math.random()*0.6 + 0.4;
        this.spriteWidth = 271;
        this.spriteHeight = 194;
        this.width = this.spriteWidth/2 * this.sizeModifier;
        this.height = this.spriteHeight/2 * this.sizeModifier;

        this.x = gameWidth;
        this.y = Math.random()*(this.gameHeight- this.height);

        this.directionX = Math.random()*5 + 2;
        this.directionY = Math.random()*5 - 2.5;
        this.active = true;
        
        this.speed = 0;
        this.maxSpeed =  10; 

        this.image = new Image();
        this.image.src = "image/raven.png";

        this.frameX = 0;
        this.maxFrame = 4;


        this.timeSinceFlap = 0;
        this.flapInterVal  = Math.random()*100 + 50;
    }

    update(deltaTime){

        this.timeSinceFlap += deltaTime;
        if(this.timeSinceFlap > this.flapInterVal){
            if(this.frameX < this.maxFrame){
                this.frameX ++;
            }
            else{
                this.frameX = 0;
            }
            this.timeSinceFlap = 0;
        }

        if(this.x <=0 ){
            this.active = false;
        }

        this.x -= this.directionX;
        if( this.y <=0 || this.y >= this.gameHeight - this.height){
            this.directionY *= -1;
        }

        this.y += this.directionY;


    }


    draw(ctx){
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage( this.image, this.frameX*this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}


export default Enemy;