import { LoginService } from './../../../../service/loginService/login.service';

import { ScoreService } from './../../../../service/score.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { CanvasAnimations } from '../clases/canvas-animations';
import { TetrisLogic } from '../clases/logic/tetris-logic';

@Component({
  selector: 'app-canvas-tetris',
  templateUrl: './canvas-tetris.component.html',
  styleUrls: ['./canvas-tetris.component.scss']
})
export class CanvasTetrisComponent implements OnInit {


  menu : string;
  tetris : string;
  gameOver : boolean;
  btnStart : string;

  private speed : number;
  public nivel : number;
  private flag1 : boolean;
  private flag2 : boolean;
  private flag3 : boolean;
  private ctx : CanvasAnimations;
  public key : string;
  private loop;
  private falling;
  public logic : TetrisLogic;
  public resultado : string;

  constructor(private ScoreService : ScoreService, private LoginService : LoginService) { }

  ngOnInit(): void {
    this.logic = new TetrisLogic();
    this.gameOver = true;
    this.menu = 'animationFadeIn';
    this.resultado = 'Controles: \nA : izquierda\nD : derecha\nS : bajar\nESPACIO : rotar';
    this.btnStart = 'Empezar';
  }

  @HostListener('window:keypress', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.key = event.key;
  }

  onKey(event: any) {
    this.key = event.target.value;
  }

  Start(){
    this.speed = 500;
    this.nivel = 1;
    this.flag1 = true;
    this.flag2 = false;
    this.flag3 = false;
    this.gameOver = false;
    this.tetris = 'animationFadeIn';
    setTimeout(() => {
      this.menu = 'animationFadeOut';
      let aux = <HTMLCanvasElement>document.getElementById('board');
      this.logic = new TetrisLogic();
      this.ctx = new CanvasAnimations(aux.getContext('2d'),300,600,this.logic);
      this.ctx.addMono();
      this.loop = setInterval(()=>{
        this.ctx.GameLoop(this.key?.toLowerCase());
        this.key = null;
      },100);
      this.falling =this.Interval();
    }, 1000);
  }

  SpeedChange(){
    if(this.logic.puntos >=500 && this.flag1){
      this.speed -= 100;
      this.nivel++;
      this.flag1 = false;
      this.flag2 = true;
      clearInterval(this.falling);
      this.falling = this.Interval();
    }else if(this.logic.puntos >= 1000 && this.flag2){
      this.speed -= 100;
      this.nivel++;
      this.flag2 = false;
      this.flag3 = true;
      clearInterval(this.falling);
      this.falling = this.Interval();
    }else if(this.logic.puntos >= 1500 && this.flag3){
      this.speed -= 50;
      this.nivel++;
      this.flag3 = false;
      clearInterval(this.falling);
      this.falling = this.Interval();
    }
  }
  Interval(){
    return setInterval(()=>{
      if(this.ctx.Falling()){
        this.tetris = 'animationFadeOut';
        setTimeout(() => {
          this.resultado = 'Puntos : '+this.logic.puntos;

          if(this.logic.puntos != 0){
            let user = this.LoginService.GetSesionActual()
            user = (JSON.parse(user))?.correo;
            this.ScoreService.addElement("/tetris/",user,this.logic.puntos);
          }

          this.btnStart = 'Empezar';
          this.gameOver = true;
          this.menu = 'animationFadeIn';
        }, 1000);
        clearInterval(this.loop);
        clearInterval(this.falling);
      }
      this.SpeedChange();
    },this.speed);
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.loop);
    clearInterval(this.falling);
  }
}
