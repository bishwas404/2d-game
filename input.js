export default class InputHandler {
  constructor(){
    this.lastkey = '';

    window.addEventListener('keydown',e=>{
      console.log(e.key)
      switch(e.key){
        case "ArrowLeft":
          this.lastkey = "PRESS left";
          break;

        case "ArrowRight":
          this.lastkey = "PRESS right";
          break;

        case "ArrowDown":
          this.lastkey = "PRESS down";
          break;
        case "ArrowUp":
          this.lastkey = "PRESS up";
          break;
        case " ":
          this.lastkey = "PRESS space";
          break;
      }
    });
    window.addEventListener('keyup',e=>{
      switch(e.key){
        case "ArrowLeft":
          this.lastkey = "RELEASED left";
          break;

        case "ArrowRight":
          this.lastkey = "RELEASED right";
          break;
        case "ArrowDown":
          this.lastkey = "RELEASED down";
          break;
        case "ArrowUp":
          this.lastkey = "RELEASED up";
          break;
        case " ":
          this.lastkey = "RELEASED space";
          break;
      }
    });
  }
}