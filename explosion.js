class Explosion {
    constructor(x, y , size){
        this.image = new Image();
        this.image.src = 'image/boom.png'
        this.spriteWidth = 200 ;
        this.spriteHeight = 179;
        this.size = size;
        this.x = x;
        this.y = y;
        this.frame = 0;
        this.sound = new Audio();
        this.sound.src = "boom.wav";
        this.timeSinceLastFrame = 0;
        this.frameInterval = 200;
        this.maxFrame  = 5;
        this.active = true;
    }

    update(deltaTime){
        if(this.frame === 0){
            this.sound.play();
        }
        this.timeSinceLastFrame += deltaTime;
        if(this.timeSinceLastFrame > this.frameInterval){
            this.frame ++;
            if(this.frame > this.maxFrame){
                this.active = false;
            }
        }
    }

    draw(ctx){
        console.log(this.frame)
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth,
            this.spriteWidth, this.x, this.y, this.size, this.size)
    }

}


export default Explosion