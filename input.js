export default class InputHandler{
    constructor(){
        this.lastKey = "";
        window.addEventListener('keydown', (e) => {
            switch(e.key){
                case "ArrowLeft":
                case "a":
                    this.lastKey = "PRESS left";
                    break;
                case "ArrowRight":
                case "d":
                    this.lastKey = "PRESS right";
                    break;
                case "ArrowUp":
                case "w":
                    this.lastKey = "PRESS up";
                    break;
                case "ArrowDown":
                case "s":
                    this.lastKey = "PRESS down";
                    break;
            }
        });
        window.addEventListener('keyup', (e) => {
            switch(e.key){
                case "ArrowLeft":
                case "a":
                    this.lastKey = "RELEASE left";
                    break;
                case "ArrowRight":
                case "d":
                    this.lastKey = "RELEASE right";
                    break;
                case "ArrowUp":
                case "w":
                    this.lastKey = "RELEASE up";
                    break;
                case "ArrowDown":
                case "s":
                    this.lastKey = "RELEASE down";
                    break;
            }
        })
    }
}