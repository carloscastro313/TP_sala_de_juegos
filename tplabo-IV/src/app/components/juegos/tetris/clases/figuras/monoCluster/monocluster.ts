import { TetrisLogic } from '../../logic/tetris-logic';
import { eShape } from '../eShape';
import { MonoSprite } from '../../MonoSprite/mono-sprite';

export class Monocluster{
  public mono : MonoSprite[];


  public constructor(){
    this.mono = Array();
  }

  public DrawCluster(ctx : CanvasRenderingContext2D){
    this.mono.forEach(element => {
      element.draw(ctx);
    });
  }
  public HitboxClusterLeft(logic : TetrisLogic){
    let flag = true
    this.mono.forEach(element => {
      if(logic.checkHitboxYLeft(element.monoY,element.monoX))
      {
        flag = false;
      }
    });

    if(flag){
      this.mono.forEach(element=>{
        element.SetX(-30);
      });
    }
    return flag;
  }

  public HitboxClusterRight(logic : TetrisLogic){
    let flag = true
    this.mono.forEach(element => {
      if(logic.checkHitboxYRight(element.monoY,element.monoX))
      {
        flag = false;
      }
    });

    if(flag){
      this.mono.forEach(element=>{
        element.SetX(30);
      })
    }
    return flag
  }

  public HitboxClusterDown(logic : TetrisLogic){
    let flag = true

    this.mono.forEach(element => {
      if(logic.checkHitboxXDown(element.monoY,element.monoX))
      {
        flag = false;
      }
    });

    if(flag){
      this.mono.forEach(element=>{
        element.SetY(30);
      });
    }
    return flag
  }

  public GetClusterArray():MonoSprite[]{
    return this.mono;
  }

}
