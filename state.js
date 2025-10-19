export const states={
  // STANDING_LEFT:0,
  // STANDING_RIGHT:1,
  SITTING_LEFT:0,
  SITTING_RIGHT:1,
  RUNNING_LEFT:2,
  RUNNING_RIGHT:3,
  JUMPING_LEFT: 4,
  JUMPING_RIGHT:5,
  FALLING_LEFT: 6,
  FALLING_RIGHT:7,
  ROLLING_LEFT:8,
  ROLLING_RIGHT:9
}
class State {
  constructor(state){
    this.state = state;

  }
}
// export class StandingLeft extends State{
//   constructor(player, gameSpeed){
//     super('STANDING LEFT');
//     this.player = player;
//     this.gameSpeed = gameSpeed;

//   }
//   enter(){
//     this.player.frameY= 1;
//     this.player.speed = 0;
//     this.player.maxFrame = 6
//   }
//   handleInput(input){
//     if(input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT,1);
//     else if(input === 'PRESS left') this.player.setState(states.RUNNING_LEFT,-1);
//     else if(input === 'PRESS down') this.player.setState(states.SITTING_LEFT,0);
//     else if(input === 'PRESS up') this.player.setState(states.JUMPING_LEFT,0);
//   }
// }
// export class StandingRight extends State{
//   constructor(player,gameSpeed){
//     super('STANDING RIGHT');
//     this.player = player;
//     this.gameSpeed = gameSpeed;
//   }
//   enter(){
//     this.player.frameY=0;
//     this.player.speed = 0;
//     this.player.maxFrame = 6
//   }
//   handleInput(input){
//     if(input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
//     else if(input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
//     else if(input === 'PRESS down') this.player.setState(states.SITTING_RIGHT);
//     else if(input === 'PRESS up') this.player.setState(states.JUMPING_RIGHT);
//   }
// }
export class SittingLeft extends State{
  constructor(player){
    super('SITTING LEFT');
    this.player = player;
  }
  enter(){
    this.player.frameY=9;
    this.player.speed = 0;
    this.player.maxFrame = 4;

    return this.player.speed
  }
  handleInput(input){
    if(input === 'PRESS right') this.player.setState(states.SITTING_RIGHT);
    else if(input === 'PRESS up') this.player.setState(states.RUNNING_LEFT); //standing changed to running
    else if(input === 'RELEASED down') this.player.setState(states.RUNNING_LEFT); //standing changed to running
    else if(input === 'PRESS space') this.player.setState(states.ROLLING_LEFT);
  }

}
export class SittingRight extends State{
  constructor(player){
    super('SITTING RIGHT');
    this.player = player;
  }
  enter(){
    this.player.frameY=8;
    this.player.speed = 0;
    this.player.maxFrame = 4

    return this.player.speed
  }
  handleInput(input){
    if(input === 'PRESS left') this.player.setState(states.SITTING_LEFT);
    else if(input === 'PRESS up') this.player.setState(states.RUNNING_RIGHT); //standing changed to running
    else if(input === 'RELEASED down') this.player.setState(states.RUNNING_RIGHT);  //standing changed to running
    else if(input === 'PRESS space') this.player.setState(states.ROLLING_RIGHT);
  }
}
export class RunningLeft extends State{
  constructor(player){
    super('RUNNING LEFT');
    this.player = player;
  }
  enter(){
    this.player.frameY=7;
    this.player.speed = -this.player.maxSpeed;
    this.player.maxFrame = 8;

    return this.player.speed
  }
  handleInput(input){
    if(input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
    else if(input === 'RELEASED left') this.player.setState(states.RUNNING_LEFT);  //standing changed to running
    else if(input === 'PRESS down') this.player.setState(states.SITTING_LEFT);
    else if(input === 'PRESS up') this.player.setState(states.JUMPING_LEFT); // added later
    else if(input === 'PRESS space') this.player.setState(states.ROLLING_LEFT);
  }
}
export class RunningRight extends State{
  constructor(player){
    super('RUNNING RIGHT');
    this.player = player;
  }
  enter(){
    this.player.frameY=6;
    this.player.speed = this.player.maxSpeed;
    this.player.maxFrame = 8;

    return this.player.speed

  }
  handleInput(input){
    if(input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    else if(input === 'RELEASED right') this.player.setState(states.RUNNING_RIGHT);  //standing changed to running
    else if(input === 'PRESS down') this.player.setState(states.SITTING_RIGHT);
    else if(input === 'PRESS up') this.player.setState(states.JUMPING_RIGHT); //added later
    else if(input === 'PRESS space') this.player.setState(states.ROLLING_RIGHT);
  }
}
export class JUMPINGLeft extends State{
  constructor(player){
    super('JUMPING LEFT');
    this.player = player;
  }
  enter(){
    this.player.frameY=3;
    if(this.player.onGround()) this.player.vy -= 20;
    this.player.speed = -this.player.maxSpeed ;
    this.player.maxFrame = 6;

    return this.player.speed

  }
  handleInput(input){
    if(input ==='PRESS right') this.player.setState(states.JUMPING_RIGHT);
    else if (this.player.onGround()){
      if(input === 'PRESS space') this.player.setState(states.ROLLING_LEFT);
      else this.player.setState(states.RUNNING_LEFT)
    }
    else if (this.player.vy > 0) this.player.setState(states.FALLING_LEFT);

  }
}
export class JUMPINGRight extends State{
  constructor(player){
    super('JUMPING RIGHT');
    this.player = player;
  }
  enter(){
    this.player.frameY=2;
    if(this.player.onGround()) this.player.vy -= 20;
    this.player.speed = this.player.maxSpeed ;
    this.player.maxFrame = 6

    return this.player.speed

  }
  handleInput(input){
    if(input ==='PRESS left') this.player.setState(states.JUMPING_LEFT);
    else if (this.player.onGround()){
      if(input === 'PRESS space') this.player.setState(states.ROLLING_RIGHT);
      else this.player.setState(states.RUNNING_RIGHT)
    }  //standing changed to running
    else if (this.player.vy > 0) this.player.setState(states.FALLING_RIGHT);

  }
}
export class FALLINGLeft extends State{
  constructor(player){
    super('FALLING LEFT');
    this.player = player;
  }
  enter(){
    this.player.frameY=5;
    this.player.maxFrame = 6
    this.player.speed =-this.player.maxSpeed ;

    return this.player.speed

  }
  handleInput(input){
    if(input ==='PRESS right') this.player.setState(states.FALLING_RIGHT);
    else if (this.player.onGround()) this.player.setState(states.RUNNING_LEFT)  //standing changed to running
  }
}
export class FALLINGRight extends State{
  constructor(player){
    super('FALLING RIGHT');
    this.player = player;
  }
  enter(){
    this.player.frameY= 4;
    this.player.maxFrame = 6
    this.player.speed =this.player.maxSpeed;

    return this.player.speed
  }
  handleInput(input){
    if(input ==='PRESS left') this.player.setState(states.FALLING_LEFT);
    else if (this.player.onGround()) this.player.setState(states.RUNNING_RIGHT)  //standing changed to running
  }

}
export class ROLLINGRight extends State{
  constructor(player){
    super('ROLLING RIGHT');
    this.player = player;
  }
  enter(){
    this.player.frameY= 10;
    this.player.maxFrame = 6
    this.player.speed =this.player.maxSpeed + 10;

    return this.player.speed
  }
   handleInput(input){
    if(input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    else if(input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
    else if(input === 'RELEASED space') this.player.setState(states.RUNNING_RIGHT);  //standing changed to running
    else if(input === 'PRESS down') this.player.setState(states.SITTING_RIGHT);
    else if(input === 'PRESS up') this.player.setState(states.JUMPING_RIGHT); //added later
  }
}
export class ROLLINGLeft extends State{
  constructor(player){
    super('ROLLING LEFT');
    this.player = player;
  }
  enter(){
    this.player.frameY= 11;
    this.player.maxFrame = 6
    this.player.speed =-this.player.maxSpeed -10;

    return this.player.speed
  }
   handleInput(input){
    if(input === 'PRESS left') this.player.setState(states.RUNNING_LEFT);
    else if(input === 'PRESS right') this.player.setState(states.RUNNING_RIGHT);
    else if(input === 'RELEASED space') this.player.setState(states.RUNNING_LEFT);  //standing changed to running
    else if(input === 'PRESS down') this.player.setState(states.SITTING_LEFT);
    else if(input === 'PRESS up') this.player.setState(states.JUMPING_LEFT); //added later
  }
}