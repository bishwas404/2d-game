export default class Layer{
  constructor(image, speedModifier,player){
    this.x = 0;
    this.y = 0;
    this.width= window.innerWidth;
    this.height = window.innerHeight;
    // this.x2 = this.width
    this.image = image
    this.speedModifier = speedModifier
    // this.speed = gameSpeed*this.speedModifier
    this.player = player
  }
  updateLayer(gameSpeed){
    this.speed = gameSpeed* this.speedModifier
    if(this.x <= -this.width){
      this.x = 0
    }
    // if(this.x2 <= -this.width){
    //   this.x2 = this.width + this.x - this.speed
    // }
    this.x = Math.floor(this.x - this.speed)
    // this.x2 = Math.floor(this.x2 - this.speed)
  }
  drawLayer(ctx){
    ctx.drawImage(this.image,this.x,this.y, this.width, this.height)
    ctx.drawImage(this.image,this.x + this.width, this.y,this.width, this.height)
  }
}