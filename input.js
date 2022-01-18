export default class InputHandler{
    constructor(){
        this.lastKey = "";
        this.activeKey = "";
        window.addEventListener('keydown', (e) => {
            switch(e.code){
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
                case "Space":
                    this.activeKey = "Press space";
                    break;
            }
        });
        window.addEventListener('keyup', (e) => {
            switch(e.code){
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
                case "Space":
                    this.activeKey = "RELEASE space";
                    break;
            }
        })
    }
}