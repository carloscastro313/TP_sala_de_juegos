import { Monocluster } from './monoCluster/monocluster';
import { MonoSprite } from '../MonoSprite/mono-sprite';
import { eShape } from './eShape';
import { TetrisLogic } from '../logic/tetris-logic';

export class SFigura extends Monocluster{
  public nRotacion : number;

  public constructor(x : number,y : number,width : number,height : number){
    super();

    this.nRotacion = 0;

    this.mono[0] = new MonoSprite(x,y,width,height,"green");
    this.mono[1] = new MonoSprite(x,y+30,width,height,"green");
    this.mono[2] = new MonoSprite(x+30,y,width,height,"green");
    this.mono[3] = new MonoSprite(x-30,y+30,width,height,"green");
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
        this.SRotacion();

      }else if(flagLeft && flagRight){
        return flagDown;
      }else
      {
          if(flagLeft && this.nRotacion == 1){
            this.mono.forEach(element=>{
              element.SetX(30);
            });

          }else if(flagRight && this.nRotacion == 3){
            this.mono.forEach(element=>{
              element.SetX(-30);
            });

          }
          this.SRotacion();

        }
      }

    return flagDown;
  }

  public SRotacion(){
    switch(this.nRotacion){
      case 0:
        this.nRotacion = 1;
        this.mono[0].RotateMono(30,30);
        this.mono[2].RotateMono(0,60);
        this.mono[3].RotateMono(30,-30);

        break;
      case 1:
        this.nRotacion = 2;
        this.mono[0].RotateMono(-30,30);
        this.mono[2].RotateMono(-60,0);
        this.mono[3].RotateMono(30,30);

        break;
      case 2:
        this.nRotacion = 3;
        this.mono[0].RotateMono(-30,-30);
        this.mono[2].RotateMono(0,-60);
        this.mono[3].RotateMono(-30,30);

        break;
      case 3:
        this.nRotacion = 0;
        this.mono[0].RotateMono(30,-30);
        this.mono[2].RotateMono(60,0);
        this.mono[3].RotateMono(-30,-30);

        break;
    }
  }
}
