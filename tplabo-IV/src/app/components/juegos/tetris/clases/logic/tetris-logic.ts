import { noUndefined } from '@angular/compiler/src/util';
import { element } from 'protractor';

export class TetrisLogic {
  public mTetris : boolean[][];
  public puntos : number;
  //inicializar hitbox
  public constructor(){
    this.puntos = 0;
    this.mTetris = [];
    for(let i = 0 ; i< 22; i++){
      this.mTetris[i]= [];
      for(let j = 0 ; j< 12; j++){
        if(i != 21){
          if(j==0 || j==11){
            this.mTetris[i][j] = true;
          }else{
            this.mTetris[i][j] = false;
          }
        }else{
          this.mTetris[i][j] = true;
        }
      }
    }
  }
  //hitbox
  public checkHitboxXDown(y,x){
    return this.mTetris[x+1][y];
  }
  public checkHitboxYRight(y,x){
    return this.mTetris[x][y+1];
  }
  public checkHitboxYLeft(y,x){
    return this.mTetris[x][y-1];
  }
  public checkHitboxYRightExt(y,x){
    let aux = y+2;
    if(y !=9){
      return this.mTetris[x][aux];

    }

    return false;
  }
  public checkHitboxYLeftExt(y,x){
    let aux = y-2;
    if(y !=2){
    return this.mTetris[x][aux];
    }

    return false;
  }

  public setHitbox(y,x){
    this.mTetris[x][y] = true;
  }

  public CheckGameOver(){

    return this.mTetris[1].find((aux,index)=>{
      if(index != 0 && index != 11 && aux){
        return aux;
      }
    });
  }

  public MakeLine(lines : any){
    lines.forEach(element => {
      this.mTetris.splice(element,1);
      this.mTetris.unshift([true,false,false,false,false,false,false,false,false,false,false,true]);
    });

  }

  public Line(){
    let ret = Array();
    this.mTetris.map((aux,index)=>{
      let flag = aux.includes(false);

      if(!flag && index != 21){
        ret.push(index);
      }
    });

    return ret;
  }
}
