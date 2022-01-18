const state = {
    STANDING_LEFT: 0,
    STANDING_RIGHT: 1,
    SITTING_LEFT : 2,
    SITTING_RIGHT : 3,
    RUNNING_LEFT: 4,
    RUNNING_RIGHT: 5,
    JUMPING_LEFT: 6,
    JUMPING_RIGHT: 7,
    ROLLING_DOWN_LEFT: 8,
    ROLLING_DOWN_RIGHT: 9,
}


class State{
  constructor(state){
        this.state = state;
    }
}

class StandingLeft extends State {
    constructor(player){
        super("STANDING LEFT");
        this.player = player;
    }

    enter(){
        this.player.frameY = 1;
        this.player.rightView = false;
        this.player.speed = 0;
    }

    handleInput(input){
        if(input.lastKey === "PRESS right"){
            this.player.setState(state.STANDING_RIGHT)
        }
        else if(input.lastKey === "PRESS down"){
            this.player.setState(state.SITTING_LEFT)
        }
        else if(input.lastKey === "PRESS left"){
            this.player.setState(state.RUNNING_LEFT)
        }
        else if(input.lastKey === "PRESS up"){
            this.player.setState(state.JUMPING_LEFT)
        }
    }
}


class StandingRight extends State {
    constructor(player){
        super("STANDING RIGHT");
        this.player = player;
    }

    enter(){
        this.player.frameY = 0;
        this.player.speed = 0;
        this.player.rightView = true;
        this.player.weight = 0.5;
    }

    handleInput(input){
        if(input.lastKey === "PRESS left"){
            this.player.setState(state.STANDING_LEFT)
        }
        else if(input.lastKey === "PRESS right"){
            this.player.setState(state.RUNNING_RIGHT)
        }
        else if(input.lastKey === "PRESS down"){
            this.player.setState(state.SITTING_RIGHT)
        }
        else if(input.lastKey === "PRESS up"){
            this.player.setState(state.JUMPING_RIGHT)
        }
    }
}


class SittingLeft extends State {
    constructor(player){
        super("SITTING LEFT");
        this.player = player;
    }

    enter(){
        this.player.frameY = 9;
        this.player.rightView = false;
    }

    handleInput(input){
        if(input.lastKey === "PRESS right"){
            this.player.setState(state.SITTING_RIGHT)
        }
        else if ( input.lastKey === "PRESS up"){
            this.player.setState(state.STANDING_LEFT)
        }
        else if ( input.lastKey === "RELEASE down"){
            this.player.setState(state.STANDING_LEFT)
        }
    }
}


class SittingRight extends State {
    constructor(player){
        super("SITTING RIGHT");
        this.player = player;
    }

    enter(){
        this.player.frameY = 8;
        this.player.rightView = true;
    }

    handleInput(input){
        if(input.lastKey === "PRESS left"){
            this.player.setState(state.SITTING_LEFT)
        }
        else if ( input.lastKey === "PRESS up"){
            this.player.setState(state.STANDING_RIGHT)
        }
        else if ( input.lastKey === "RELEASE down"){
            this.player.setState(state.STANDING_RIGHT)
        }
    }
}

class RunningLeft extends State {
    constructor(player){
        super("RUNNING LEFT");
        this.player = player;
    }

    enter(){
        this.player.frameY = 7;
        this.player.speed -= this.player.maxSpeed;
        this.player.rightView = false;
    }

    handleInput(input){
        if(input.lastKey === "PRESS right"){
            this.player.setState(state.RUNNING_RIGHT)
        }
        else if (input.lastKey === "RELEASE left"){
            this.player.setState(state.STANDING_LEFT)
        }
        else if ( input.lastKey === "PRESS down"){
            this.player.setState(state.SITTING_LEFT)
        }
        else if ( input.lastKey === "RELEASE down"){
            this.player.setState(state.STANDING_LEFT)
        }
    }
}

class RunningRight extends State {
    constructor(player){
        super("RUNNING RIGHT");
        this.player = player;
    }

    enter(){
        this.player.frameY = 6;
        this.player.speed += this.player.maxSpeed;
        this.player.rightView = true;
    }

    handleInput(input){
        if(input.lastKey === "PRESS left"){
            this.player.setState(state.RUNNING_LEFT)
        }
        else if (input.lastKey === "RELEASE right"){
            this.player.setState(state.STANDING_RIGHT)
        }
        else if ( input.lastKey === "PRESS down"){
            this.player.setState(state.SITTING_RIGHT)
        }
        else if ( input.lastKey === "RELEASE down"){
            this.player.setState(state.STANDING_RIGHT)
        }
    }
}

class JumpingLeft extends State {
    constructor(player){
        super("JUMPING LEFT");
        this.player = player;
    }

    enter(){
        this.player.frameY = 3;
        if(this.player.onGround()){
            this.player.vy -= 10
        }
        this.player.speed = -this.player.maxSpeed*0.5;
        this.player.rightView = false;
    }
    
    handleInput(input){
        if(input.lastKey === "PRESS right"){
            this.player.setState(state.JUMPING_RIGHT)
        }
        else if(input.lastKey === "PRESS down"){
            this.player.setState(state.ROLLING_DOWN_LEFT)
        }
        else if ( this.player.onGround()){
            this.player.setState(state.STANDING_LEFT)
        }
    }
}

class JumpingRight extends State {
    constructor(player){
        super("JUMPING RIGHT");
        this.player = player;
    }
    
    enter(){
        this.player.frameY = 2;
        if(this.player.onGround()){
            this.player.vy -= 10
        }
        this.player.speed = this.player.maxSpeed*0.5;
        this.player.rightView = true;
    }
    
    handleInput(input){
        if(input.lastKey === "PRESS left"){
            this.player.setState(state.JUMPING_LEFT)
        }
        else if(input.lastKey === "PRESS down"){
            this.player.setState(state.ROLLING_DOWN_RIGHT)
        }
        else if ( this.player.onGround()){
            this.player.setState(state.STANDING_RIGHT)
        }
    }
}


class RollingDownLeft extends State{
    constructor(player){
        super("ROLLING DOWN LEFT");
        this.player = player;
    }

    enter(){
        this.player.frameY = 11;
        this.player.weight = 10;
        this.player.speed = 0;
        this.player.rightView = false;
    }

    handleInput(input){
        if ( this.player.onGround()){
            this.player.setState(state.STANDING_RIGHT)
        }
    }
}

class RollingDownRight extends State{
    constructor(player){
        super("ROLLING DOWN RIGHT");
        this.player = player;
    }

    enter(){
        this.player.frameY = 10;
        this.player.weight = 10;
        this.player.speed = 0;
        this.player.rightView = true;
    }

    handleInput(input){
        if ( this.player.onGround()){
            this.player.setState(state.STANDING_RIGHT)
        }
    }
}




export {
    StandingLeft,
    StandingRight,
    SittingLeft,
    SittingRight,
    RunningLeft,
    RunningRight,
    JumpingLeft,
    JumpingRight,
    RollingDownLeft,
    RollingDownRight,
}