import Player from "./player.js"
import InputHandler from "./input.js"
import {drawStatusText} from "./utils.js"
import Bullet from "./bullet.js"

window.addEventListener('load', function(){
    const loading = this.document.getElementById("loading");
    loading.style.display = 'none';
    const canvas = this.document.getElementById("canvas-content");
    const ctx = canvas.getContext('2d');
    canvas.width = this.window.innerWidth;
    canvas.height = this.window.innerHeight;

    const player = new Player(canvas.width, canvas.height);
    const input = new InputHandler();
    
    function animate(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        player.update(input);
        player.draw(ctx);
        [...player.actackBullets].forEach(bullet => bullet.update());
        [...player.actackBullets].forEach(bullet => bullet.draw(ctx));
        
        player.actackBullets = player.actackBullets.filter(bullet => bullet.active);


        console.log(player.actackBullets)
        // console.log(player.actackBullets);
        drawStatusText(ctx, input, player);
        requestAnimationFrame(animate)
    }
    animate();

})