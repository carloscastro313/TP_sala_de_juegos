export class MonoSprite {
  public x : number;
  public y : number;
  public monoX : number;
  public monoY : number;
  public width : number;
  public height : number;
  public color : string;

  //inicializar Sprite controlable
  public constructor(x,y,width,height,color){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.monoX = (this.y/30)+ 1;
    this.monoY = (this.x/30) + 1;
    this.color = color;
  }
  //dibujar controlable
  draw(ctx : CanvasRenderingContext2D){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  RotateMono(x,y){
    this.x = this.x + x;
    this.y = this.y + y;
    this.monoX = (this.y/30)+ 1;
    this.monoY = (this.x/30) + 1;
  }

  SetX(x : number){
    this.x = this.x + x;
    this.monoY = (this.x/30) + 1;
  }

  SetY(y : number){
    this.y = this.y + y;
    this.monoX = (this.y/30)+ 1;
  }
}
