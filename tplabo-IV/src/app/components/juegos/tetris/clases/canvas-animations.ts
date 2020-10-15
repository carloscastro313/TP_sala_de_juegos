import { IFigura } from './figuras/ifigura';
import { Monocluster } from './figuras/monoCluster/monocluster';
import { element } from 'protractor';
import { eShape } from './figuras/eShape';
import { MonoSprite } from './MonoSprite/mono-sprite';
import { Sprite } from './sprite/sprite';
import { ɵConsole } from '@angular/core';
import { TetrisLogic } from './logic/tetris-logic';
import { from } from 'rxjs';
import { randomBytes } from 'crypto';
import { JFigura } from './figuras/jfigura';
import { LFigura } from './figuras/lfigura';
import { OFigura } from './figuras/ofigura';
import { SFigura } from './figuras/sfigura';
import { ZFigura } from './figuras/zfigura';
import { TFigura } from './figuras/tfigura';

export class CanvasAnimations {
  private ctx: CanvasRenderingContext2D;
  private sprite : MonoSprite[];
  private screenWidth : number;
  private screenHeight : number;
  private monoCluster : any;
  private logic : TetrisLogic;
  //inicializar "engine"
  public constructor(ctx, width, height,logic){
    this.ctx = ctx;
    this.sprite = Array();
    this.ctx.canvas.width= width;
    this.ctx.canvas.height = height;
    this.screenHeight = height;
    this.screenWidth = width;

    this.logic = logic;
  }
  // Funcion loop
  public Falling(){
    this.ctx.clearRect(0,0,this.screenWidth,this.screenHeight);
    this.monoCluster.DrawCluster(this.ctx);
    this.drawSprites();
    this.Down();
    return this.logic.CheckGameOver();
  }
  public GameLoop(key){
    this.ctx.clearRect(0,0,this.screenWidth,this.screenHeight);
    this.Input(key);
    this.monoCluster.DrawCluster(this.ctx);
    this.drawSprites();
  }
  //agregar sprite a array
  public addSprite(x,y,width,height){
    //this.sprite.push(new MonoSprite(x,y,width,height));
  }
  //agregar mono
  public addMono(){
    //let aux : eShape = Math.floor(Math.random()*6);
    this.monoCluster = this.GenerateFigure();
  }
  //dibujar sprites
  public drawSprites(){
    this.sprite.forEach( spr => {
      spr.draw(this.ctx);
    });
  }
  //Chequear input
  Input(key : string){

    switch(key){
      case 'w':
        //this.Up();
        break;
      case 's':
        this.Down();
        break;
      case 'd':
        this.Right();
        break;
      case 'a':
        this.Left();
        break;
      case ' ':
        this.Rotacion();
        break;
      default:
        break;
    }
  }

  Up(){
    /*if(this.monoSprite.y - 30 >= 0){
      this.monoSprite.y = this.monoSprite.y - 30;
      this.monoSprite.monoX--;
    }*/
  }
  Down(){
    //if(this.monoSprite.y + 30 < this.screenHeight){
    if(!this.monoCluster.HitboxClusterDown(this.logic)){
      let aux = this.monoCluster.GetClusterArray();

      aux.forEach(element=>{
        this.logic.setHitbox(element.monoY,element.monoX);
      });
      this.sprite = this.sprite.concat(aux);
      let arrY = this.logic.Line();
      if(arrY.length != 0){
        this.logic.puntos += 100*arrY.length;
        this.logic.MakeLine(arrY);
        this.DropLine(arrY);
      }
      this.addMono();
    }
  }

  Right(){
    //if(this.monoSprite.x + 30 < this.screenWidth){
    this.monoCluster.HitboxClusterRight(this.logic);
  }
  Left(){
    //if(this.monoSprite.x - 30 >= 0){
    this.monoCluster.HitboxClusterLeft(this.logic);
  }
  Rotacion(){
    this.monoCluster.RotacionHitbox(this.logic);
  }

  public GenerateFigure(){
    let aux : eShape = Math.floor(Math.random()*6);
    switch(aux){
      case eShape.I:
        return new IFigura(150,0,30,30);

      case eShape.J:
        return new JFigura(150,0,30,30);

      case eShape.L:
        return new LFigura(150,0,30,30);

      case eShape.O:
        return new OFigura(150,0,30,30);

      case eShape.S:
        return new SFigura(150,0,30,30);

      case eShape.T:
        return new TFigura(150,0,30,30);

      case eShape.Z:
        return new ZFigura(150,0,30,30);
      default:
        return new OFigura(150,0,30,30);
    }
  }

  private DropLine(y : any){

    y.forEach(element => {
      this.sprite = this.sprite.filter(function(item){
        return item.monoX !== element;
      });
      this.sprite.forEach(aux =>{
        if(aux.monoX < element){
          aux.SetY(30);
        }
      });
    });

  }
}




