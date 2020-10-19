import { Component, OnInit } from '@angular/core';
import { path } from './pathManos';

@Component({
  selector: 'app-start-ppt',
  templateUrl: './start-ppt.component.html',
  styleUrls: ['./start-ppt.component.scss']
})
export class StartPPTComponent implements OnInit {

  startMenu : string;
  PPT : string;

  start : boolean = false;
  btnStart : string = 'Empezar';
  btnStartDisabled : boolean ;

  mano : Array<string>;
  btnMano : Array<string> =["Piedra","Papel","Tijera"];
  resultado : string =` X = Maquina
  O = Jugador`;
  ronda : number;
  jugador : number;
  maquina : number;
  flag : boolean = true;
  marcador : string;


  constructor() {}

  ngOnInit(): void {
    this.startMenu = 'animationFadeIn';
    this.btnStartDisabled = false;
  }

  startGame(){
    this.startMenu = 'animationFadeOut';
    this.btnStartDisabled = true;
    setTimeout(() => {
      this.PPT = 'animationFadeIn';
      this.start = !this.start;
      this.btnStartDisabled = false;
      this.ronda = 0;
      this.jugador = 0;
      this.maquina = 0;
      this.resultado = '';
      this.marcador = '';
    }, 1000);
  }

  Elegir(i : number){
    if(this.flag){
      this.mano = Array();
      this.Oponente(i);
      this.flag = false;
    }
  }

  Oponente(i : number){
    let audio = new Audio('../../../assets/audio/PPTvoz.mp3');
    audio.play();
    this.ronda++;
    setTimeout(() => {
      let aux = Math.floor(Math.random()*(3));
      this.mano.push(path[3+i]);
      this.mano.push(path[aux]);
      this.GanadorRonda(i+3,aux);
      this.flag = true;
    }, 1500);
  }

  GanadorRonda(n1 : number,n2 : number){
    switch(n1){
      case 3:
        if (n2 == 2) {
          this.resultado = "Ganaste";
          this.jugador++;
          this.marcador += 'O';
        }else if (n2 == 1){
          this.resultado = "Perdiste";
          this.marcador += 'X';
          this.maquina++;
        }else{
          this.resultado = "Empate";
        }
        break;
      case 4:
        if (n2 == 0) {
          this.resultado = "Ganaste";
          this.jugador++;
          this.marcador += 'O';
        }else if (n2 == 2){
          this.resultado = "Perdiste";
          this.maquina++;
          this.marcador += 'X';
        }else{
          this.resultado = "Empate";
        }
        break;
      case 5:
        if (n2 == 1) {
          this.resultado = "Ganaste";
          this.jugador++;
          this.marcador += 'O';
        }else if (n2 == 0){
          this.resultado = "Perdiste";
          this.maquina++;
          this.marcador += 'X';
        }else{
          this.resultado = "Empate";
        }
        break;
      default:
        break;
    }
    this.GanadorPartida()
    setTimeout(() => {
      if(this.start){
        this.resultado = ' ';
      }
    }, 1000);
  }
  GanadorPartida() {

    if(this.jugador == 2){
      this.PPT = 'animationFadeOut';
      setTimeout(() => {
        this.startMenu = 'animationFadeIn';
        this.resultado = 'Usted es el ganador';
        this.btnStart = 'Reintentar';
        this.start = !this.start;
      }, 1000);

    }else if(this.maquina == 2){
      this.PPT = 'animationFadeOut';
      setTimeout(() => {
        this.startMenu = 'animationFadeIn';
        this.resultado = 'La maquina es el ganador';
        this.btnStart = 'Reintentar';
        this.start = !this.start;
      }, 1000);
    }
  }
}
