import { TetrisLogic } from '../logic/tetris-logic';
import { eShape } from './eShape';
import { MonoSprite } from '../MonoSprite/mono-sprite';
import { Monocluster } from './monoCluster/monocluster';

export class IFigura extends Monocluster{
  public nRotacion : number;


  public constructor(x : number,y : number,width : number,height : number){
    super();

    this.nRotacion = 0;

    this.mono[0] = new MonoSprite(x,y,width,height,"cyan");
    this.mono[1] = new MonoSprite(x,y+30,width,height,"cyan");
    this.mono[2] = new MonoSprite(x,y+60,width,height,"cyan");
  }

  public RotacionHitbox(logic : TetrisLogic){
    let flagRight = false;
    let flagLeft = false;
    let flagDown = false;

    this.mono.forEach(element => {
      if(logic.checkHitboxYLeft(element.monoY,element.monoX))
      {
        flagLeft = true;
      }
    });

    this.mono.forEach(element => {
      if(logic.checkHitboxYRight(element.monoY,element.monoX))
      {
        flagRight = true;
      }
    });

    this.mono.forEach(element => {
      if(logic.checkHitboxXDown(element.monoY,element.monoX))
      {
        flagDown = true;
      }
    });

    if(!flagDown){
      if(!flagLeft && !flagRight){
        this.IRotacion();

      }else if(flagLeft && flagRight){
        return flagDown;
      }else
      {
          if(flagLeft){
            this.mono.forEach(element=>{
              element.SetX(30);
            });

          }else if(flagRight){
            this.mono.forEach(element=>{
              element.SetX(-30);
            });

          }
          this.IRotacion();

        }
      }

    return flagDown;
  }

  public IRotacion(){
    switch(this.nRotacion){
      case 0:
        this.nRotacion = 1;
        this.mono[0].RotateMono(30,30);
        this.mono[2].RotateMono(-30,-30);
        break;
      case 1:
        this.nRotacion = 0;
        this.mono[0].RotateMono(-30,-30);
        this.mono[2].RotateMono(30,30);
        break;
    }
  }
}
