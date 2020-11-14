import { Monocluster } from './monoCluster/monocluster';
import { MonoSprite } from '../MonoSprite/mono-sprite';
import { eShape } from './eShape';
import { TetrisLogic } from '../logic/tetris-logic';

export class JFigura extends Monocluster{
  public nRotacion : number;

  public constructor(x : number,y : number,width : number,height : number){
    super();

    this.nRotacion = 0;

    this.mono[0] = new MonoSprite(x,y,width,height,"blue");
    this.mono[1] = new MonoSprite(x,y+30,width,height,"blue");
    this.mono[2] = new MonoSprite(x,y+60,width,height,"blue");
    this.mono[3] = new MonoSprite(x-30,y+60,width,height,"blue");
  }

  public RotacionHitbox(logic : TetrisLogic){
    let flagRight = false;
    let flagLeft = false;
    let flagDown = false;
    this.mono.forEach(element => {
      if(logic.checkHitboxYLeft(element.monoY,element.monoX)){
        flagLeft = true;

      }
    });

    this.mono.forEach(element => {
      if(logic.checkHitboxYRight(element.monoY,element.monoX)){
        flagRight = true;

      }
    });

    this.mono.forEach(element => {
      if(logic.checkHitboxXDown(element.monoY,element.monoX)){
        flagDown = true;

      }
    });

    if(!flagDown){
      if(!flagLeft&&!flagRight){
        this.JRotacion();

      }else if(flagLeft&&flagRight){
        return flagDown;

      }else
      {
        if(this.extHitboxRotationJ(logic) == false){

          if(flagLeft && this.nRotacion == 2){
            this.mono.forEach(element=>{
              element.SetX(30);
            });

          }else if(flagRight && this.nRotacion == 0){
            this.mono.forEach(element=>{
              element.SetX(-30);
            });

          }
          this.JRotacion();
        }
      }
    }
    return flagDown;
  }

  public JRotacion(){
    switch(this.nRotacion){
      case 0:
        this.nRotacion = 1;
        this.mono[0].RotateMono(30,30);
        this.mono[2].RotateMono(-30,-30);
        this.mono[3].RotateMono(0,-60);

        break;
      case 1:
        this.nRotacion = 2;
        this.mono[0].RotateMono(-30,30);
        this.mono[2].RotateMono(30,-30);
        this.mono[3].RotateMono(60,0);
        break;
      case 2:
        this.nRotacion = 3;
        this.mono[0].RotateMono(-30,-30);
        this.mono[2].RotateMono(30,30);
        this.mono[3].RotateMono(0,60);
        break;
      case 3:
        this.nRotacion = 0;
        this.mono[0].RotateMono(30,-30);
        this.mono[2].RotateMono(-30,30);
        this.mono[3].RotateMono(-60,0);
        break;
    }
  }

  public extHitboxRotationJ(logic : TetrisLogic){
    let aux = false;
    let aux1 = false;
    let aux2 = false;
    if(this.nRotacion == 0){
      aux2 = logic.checkHitboxYLeftExt(this.mono[0].monoY, this.mono[0].monoX);
      aux1 = logic.checkHitboxYLeftExt(this.mono[1].monoY, this.mono[1].monoX);
    }else if(this.nRotacion == 2){
      aux2 = logic.checkHitboxYRightExt(this.mono[0].monoY, this.mono[0].monoX);
      aux1 = logic.checkHitboxYRightExt(this.mono[1].monoY, this.mono[1].monoX);
    }
    if(aux1 || aux2){
      aux = true;
    }
    return aux;
  }
}
