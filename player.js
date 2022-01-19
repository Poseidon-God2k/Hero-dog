import {
    StandingLeft, 
    StandingRight, 
    SittingLeft, 
    SittingRight, 
    RunningLeft, 
    RunningRight,
    JumpingLeft,
    JumpingRight,
    RollingDownLeft,
    RollingDownRight
} from "./state.js"


import Bullet from "./bullet.js";


class Player {
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.states = [
            new StandingLeft(this), 
            new StandingRight(this), 
            new SittingLeft(this), 
            new SittingRight(this),
            new RunningLeft(this),
            new RunningRight(this),
            new JumpingLeft(this),
            new JumpingRight(this),
            new RollingDownLeft(this),
            new RollingDownRight(this)
        ];
        this.currentState = this.states[1];
        this.image = document.getElementById("dogImage");
        this.spriteWidth = 200;
        this.spriteHeight = 181.83;
        this.width = 200/2;
        this.height = 181.83/2;
        this.x = this.gameWidth/2 - this.width/2;
        this.y = this.gameHeight - this.height;
        this.vy = 0;
        this.rightView = true;
        this.weight = 0.5;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 4;
        this.speed = 0;
        this.maxSpeed = 10;
        this.actackBullets = []
        this.prevKeyActtack = '';
        this.score = 0;
    }

    draw(context){
        if(this.frameX < this.maxFrame) {
            this.frameX ++;
        }
        else{
            this.frameX = 0;
        }
        context.strokeRect(this.x, this.y, this.width, this.height);

        context.drawImage(this.image, this.spriteWidth * this.frameX, this.spriteHeight * this.frameY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
    
    update(input){
        this.currentState.handleInput(input)
        // xử lí sự kiện tấn công
        this.acttack(input)
        //di chuyển theo chiều ngang
        this.x += this.speed;
        if(this.x <= 0) this.x = 0;
        else if (this.x >= this.gameWidth - this.width) this.x = this.gameWidth - this.width;

        //di chuyển theo chiều dọc
        this.y += this.vy;
        if(!this.onGround()){
            this.vy += this.weight;
        }
        else{
            this.vy = 0;    
        }

        //check có dưới mặt đất thì đưa lên
        if(this.y > this.gameHeight - this.height){
            this.y = this.gameHeight - this.height;
        }
    }   

    setState(state){
        this.currentState = this.states[state];
        this.currentState.enter();
    }

    onGround(){
        return this.y >= this.gameHeight - this.height
    }


    acttack(input){
        if(this.prevKeyActtack === "RELEASE space" && input.activeKey === "PRESS space"){
            this.actackBullets.push( new Bullet(this.gameWidth, this.gameHeight, this))
        }
        this.prevKeyActtack = input.activeKey;
    }

    addScore( score = 1){
        this.score += score;
    }
}

export default Player;