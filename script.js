import Player from "./player.js"
import InputHandler from "./input.js"
import {drawStatusText} from "./utils.js"
import Enemy from "./enemy.js"
import Explosion from "./explosion.js"

var timeToNextRaven  = 0;
var ravenInterval = 1000;
var lastTime = 0;


const collisionDetected = (bullet, raven) =>{
    return  bullet.x < raven.x + raven.width && 
            bullet.x + bullet.width > raven.x &&
            bullet.y < raven.y + raven.height &&
            bullet.y + bullet.height > raven.y
}
window.addEventListener('load', function(){
    const loading = this.document.getElementById("loading");
    loading.style.display = 'none';
    const canvas = this.document.getElementById("canvas-content");
    const ctx = canvas.getContext('2d');
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;

    const player = new Player(canvas.width, canvas.height);
    const input = new InputHandler();
    let listEnemy = [];
    let Explosions = [];
    
    function animate(timestamp){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        player.update(input);
        player.draw(ctx);
        
        let deltaTime = timestamp - lastTime;
        lastTime = timestamp;
        timeToNextRaven += deltaTime;

        if(timeToNextRaven > ravenInterval){
            listEnemy.push(new Enemy(canvas.width, canvas.height))
            timeToNextRaven = 0;
        }

        [...listEnemy].forEach((raven) => raven.update(deltaTime));
        [...listEnemy].forEach((raven) => raven.draw(ctx));
        
        [...player.actackBullets].forEach(bullet => bullet.update());
        [...player.actackBullets].forEach(bullet => bullet.draw(ctx));

        //check collision
        player.actackBullets.forEach((bullet, indexBullet) => {
            listEnemy.forEach((raven, indexRaven) => {
                //collision === true
                if(collisionDetected(bullet, raven)){
                    player.addScore();
                    //update hide raven and bullet
                    player.actackBullets[indexBullet].active = false;
                    listEnemy[indexRaven].active = false;
                    Explosions.push(new Explosion(raven.x, raven.y, raven.width))
                }
            })
        });

        [...Explosions].forEach((explosion) => explosion.update(deltaTime));
        [...Explosions].forEach((explosion) => explosion.draw(ctx));

        Explosions = Explosions.filter((explosion) => explosion.active);
        listEnemy = listEnemy.filter((raven) => raven.active);
        player.actackBullets = player.actackBullets.filter(bullet => bullet.active);
        // console.log(player.actackBullets);
        drawStatusText(ctx, input, player);
        requestAnimationFrame(animate)
    }
    animate(0);

})