export class Sprite {
  public x : number;
  public y : number;
  private width : number;
  private height : number;
  private sprite : HTMLImageElement;

  //inicializar sprite
  public constructor(x,y,width,height,sprite=null){
    console.log("OK Sprite");
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = sprite;
  }

  drawImg(ctx : CanvasRenderingContext2D){
    console.log("OK draw");
    ctx.drawImage(this.sprite , this.x, this.y, this.width, this.height);
  }
  //dibujar sprite
  draw(ctx : CanvasRenderingContext2D){
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
