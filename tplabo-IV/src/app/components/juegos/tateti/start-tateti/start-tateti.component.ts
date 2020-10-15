import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-tateti',
  templateUrl: './start-tateti.component.html',
  styleUrls: ['./start-tateti.component.scss']
})
export class StartTatetiComponent implements OnInit {

  menu : string;
  TTT : string;
  btnStart : string;

  cuadrado : any[];
  xTurno : boolean;
  resultado : string;
  aiPlayerO : any;
  startMenu : boolean;
  constructor() { }

  ngOnInit(): void {
    this.btnStart = 'Empezar';
    this.menu = 'animationFadeIn';
    this.startMenu = true;
    this.resultado = "X = Maquina \n O = Jugador"
  }

  NewGame( ){
    this.menu = 'animationFadeOut';
    setTimeout(() => {
      this.TTT = 'animationFadeIn';
      this.startMenu = false;
      this.cuadrado = Array(9).fill(null);
      this.resultado = null;
      this.xTurno = true;
      this.aiPlayerO = setInterval(()=>{
        if(this.xTurno){
          let idx
          do{
            idx = Math.floor(Math.random()*(9-0)+0);
          }while(this.cuadrado[idx] == 'X'||this.cuadrado[idx] == 'O');
          this.MakeMove(idx);
        }
      },1000);
    }, 1000);
  }

  get player(){
    return this.xTurno ? 'X' : 'O';
  }
  MovePlayer(idx : number){
    if(this.xTurno == false){
      this.MakeMove(idx);
    }
  }

  MakeMove(idx : number){
    if(!this.cuadrado[idx]){
      this.cuadrado.splice(idx,1,this.player);
      this.xTurno = !this.xTurno;
    }

    this.resultado = this.calculateWinner();
  }


  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.cuadrado[a] &&
        this.cuadrado[a] === this.cuadrado[b] &&
        this.cuadrado[a] === this.cuadrado[c]
      ) {
        clearInterval(this.aiPlayerO);
        this.xTurno = null;
        this.animation();
        return "Ganador " + this.cuadrado[a];
      }
    }
    if(this.Empate()){
      clearInterval(this.aiPlayerO);
      this.xTurno = null;
      this.animation();
      return "Empate";
    }
    return null;
  }

  Empate(){
    return !this.cuadrado.includes(null);
  }

  animation(){
    this.TTT = 'animationFadeOut';
    this.btnStart = 'Reintentar';
    setTimeout(() => {
      this.menu = 'animationFadeIn';
      this.startMenu = true;
    }, 1000);

  }
}
