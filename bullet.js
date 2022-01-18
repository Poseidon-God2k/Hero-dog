class Bullet {
    //start init from dog
    constructor(gameWidth, gameHeight, x ,y ){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.x = x;
        this.y = y;
        this.color = "red";
        this.active = true;
        
        this.width = 1;
        this.height = 2;
    }
}