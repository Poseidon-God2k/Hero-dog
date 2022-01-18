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
        this.player.speed = 0;
    }

    handleInput(input){
        if(input === "PRESS right"){
            this.player.setState(state.STANDING_RIGHT)
        }
        else if(input === "PRESS down"){
            this.player.setState(state.SITTING_LEFT)
        }
        else if(input === "PRESS left"){
            this.player.setState(state.RUNNING_LEFT)
        }
        else if(input === "PRESS up"){
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
        this.player.weight = 0.5;
    }

    handleInput(input){
        if(input === "PRESS left"){
            this.player.setState(state.STANDING_LEFT)
        }
        else if(input === "PRESS right"){
            this.player.setState(state.RUNNING_RIGHT)
        }
        else if(input === "PRESS down"){
            this.player.setState(state.SITTING_RIGHT)
        }
        else if(input === "PRESS up"){
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
    }

    handleInput(input){
        if(input === "PRESS right"){
            this.player.setState(state.SITTING_RIGHT)
        }
        else if ( input === "PRESS up"){
            this.player.setState(state.STANDING_LEFT)
        }
        else if ( input === "RELEASE down"){
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
    }

    handleInput(input){
        if(input === "PRESS left"){
            this.player.setState(state.SITTING_LEFT)
        }
        else if ( input === "PRESS up"){
            this.player.setState(state.STANDING_RIGHT)
        }
        else if ( input === "RELEASE down"){
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
    }

    handleInput(input){
        if(input === "PRESS right"){
            this.player.setState(state.RUNNING_RIGHT)
        }
        else if (input === "RELEASE left"){
            this.player.setState(state.STANDING_LEFT)
        }
        else if ( input === "PRESS down"){
            this.player.setState(state.SITTING_LEFT)
        }
        else if ( input === "RELEASE down"){
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
    }

    handleInput(input){
        if(input === "PRESS left"){
            this.player.setState(state.RUNNING_LEFT)
        }
        else if (input === "RELEASE right"){
            this.player.setState(state.STANDING_RIGHT)
        }
        else if ( input === "PRESS down"){
            this.player.setState(state.SITTING_RIGHT)
        }
        else if ( input === "RELEASE down"){
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
            this.player.vy -= 30
        }
        this.player.speed = -this.player.maxSpeed*0.5;
    }
    
    handleInput(input){
        if(input === "PRESS right"){
            this.player.setState(state.JUMPING_RIGHT)
        }
        else if(input === "PRESS down"){
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
            this.player.vy -= 30
        }
        this.player.speed = this.player.maxSpeed*0.5;
    }
    
    handleInput(input){
        if(input === "PRESS left"){
            this.player.setState(state.JUMPING_LEFT)
        }
        else if(input === "PRESS down"){
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
        this.player.weight = 5;
        this.player.speed = 0;
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
        this.player.weight = 5;
        this.player.speed = 0;
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