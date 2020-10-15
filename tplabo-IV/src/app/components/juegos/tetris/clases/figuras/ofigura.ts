import { TetrisLogic } from '../logic/tetris-logic';
import { eShape } from './eShape';
import { MonoSprite } from '../MonoSprite/mono-sprite';
import { Monocluster } from './monoCluster/monocluster';

export class OFigura extends Monocluster{
  public nRotacion : number;

  public constructor(x : number,y : number,width : number,height : number){
    super();

    this.nRotacion = 0;

    this.mono[0] = new MonoSprite(x,y,width,height,"yellow");
    this.mono[1] = new MonoSprite(x,y+30,width,height,"yellow");
    this.mono[2] = new MonoSprite(x+30,y,width,height,"yellow");
    this.mono[3] = new MonoSprite(x+30,y+30,width,height,"yellow");
  }

  public RotacionHitbox(logic : TetrisLogic){
    let flagDown = false;

    return flagDown;
  }
}
