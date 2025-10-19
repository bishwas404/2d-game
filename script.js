import Player from "./player.js";
import InputHandler from "./input.js";
import { drawStatusText } from "./utils.js";
import Layer from "./background.js";

window.addEventListener('load',()=>{
  const loading = document.getElementById('loading');
  loading.style.display = 'none';
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;



  const player = new Player(canvas.width, canvas.height/*,gameSpeed*/);

  let gameSpeed = player.currentState.enter();
  const input = new InputHandler();

  const backgroundLayer1 = new Image();
  backgroundLayer1.src='./layer-1.png';

  const backgroundLayer2 = new Image();
  backgroundLayer2.src= './layer-2.png';

  const backgroundLayer3 = new Image();
  backgroundLayer3.src='./layer-3.png';

  const backgroundLayer4 = new Image();
  backgroundLayer4.src='./layer-4.png';

  const backgroundLayer5 = new Image();
  backgroundLayer5.src='./layer-5.png';

    //background
  const layer1 = new Layer(backgroundLayer1,0.4)
  const layer2 = new Layer(backgroundLayer2,0.6)
  const layer3 = new Layer(backgroundLayer3,0.8)
  const layer4 = new Layer(backgroundLayer4,1)
  const layer5 = new Layer(backgroundLayer5,1.2)

  const gameObjects = [layer1,layer2,layer3,layer4,layer5]

  let lastTime = 0;
  function animate(timeStamp){
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    gameObjects.forEach(object =>{
    object.updateLayer(player.speed);
    object.drawLayer(ctx);
  })
    player.update(input.lastkey);
    player.draw(ctx,deltaTime);
    drawStatusText(ctx,input,player);
    requestAnimationFrame(animate);
  }
  animate(0);
});