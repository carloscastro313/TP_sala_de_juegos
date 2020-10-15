import { Component, OnInit } from '@angular/core';
import { dificil, facil, medio } from './calculos';

@Component({
  selector: 'app-start-aritmetica',
  templateUrl: './start-aritmetica.component.html',
  styleUrls: ['./start-aritmetica.component.scss']
})
export class StartAritmeticaComponent implements OnInit {

  btn: string;
  gameOver : boolean;

  cuenta : string;
  cuentaRespuesta : string;
  respuesta : string;
  devolucion : string;
  puntos : any;
  counter: number;
  time: any;
  resumen: string;
  agiArit: string;
  noRepetir : Array<number>;


  constructor() { }

  ngOnInit(): void {
    this.resumen = 'animationFadeIn';
    this.gameOver = true;
    this.puntos  = 'Competa los diez niveles de calculo antes de 45 segundos';
    this.btn = 'Empezar';
  }

  Start(){
    this.resumen = 'animationFadeOut';
    setTimeout(() => {
      this.agiArit = 'animationFadeIn';
      this.noRepetir = Array();
      this.puntos = 1;
      this.GetCalculo();
      this.gameOver = false;
      this.Time();
    }, 1000);
  }

  Aciertos(){
    if( this.respuesta.trim() === this.cuentaRespuesta){
      if(this.puntos != 10){
        this.puntos++;
        this.GetCalculo();
        this.devolucion = 'Correcto';
      }else{
        let aux = 45 - this.counter;
        this.agiArit = 'animationFadeOut';
        setTimeout(() => {
          this.puntos = "Has superado la prueba en " + aux + " segundos";
          this.btn = 'Reintentar';
          this.resumen = 'animationFadeIn';
          this.gameOver = true;
        }, 1000);
        clearInterval(this.time);
      }
    }else{
      this.devolucion = 'Incorrecto';
    }
    this.respuesta = '';
    setTimeout(() => {
      this.devolucion = '';
    }, 700);
  }

  GetCalculo(){

    switch(this.puntos){
      case 1:
      case 2:
      case 3:
        let rand
        do{
          rand = Math.floor(Math.random()*6);
        }while(this.noRepetir.includes(rand));

        this.noRepetir.push(rand);

        this.cuenta = facil[rand].calculo;
        this.cuentaRespuesta = facil[rand].resultado;
        break;
      case 4:
        this.noRepetir = Array();
      case 5:
      case 6:
        let rand1
        do{
          rand1 = Math.floor(Math.random()*6);
        }while(this.noRepetir.includes(rand1));

        this.noRepetir.push(rand1);

        this.cuenta = medio[rand1].calculo;
        this.cuentaRespuesta = medio[rand1].resultado;
        break;
      case 7:
        this.noRepetir = Array();
      case 8:
      case 9:
      case 10:
        let rand2
        do{
          rand2 = Math.floor(Math.random()*6);
        }while(this.noRepetir.includes(rand2));

        this.noRepetir.push(rand2);

        this.cuenta = dificil[rand2].calculo;
        this.cuentaRespuesta = dificil[rand2].resultado;
        break;
      default:
        break;
    }
  }
  Time(){
    this.counter = 45;

    this.time = setInterval(()=>{
      this.counter = this.counter - 1;
      if(this.counter === 0){
        this.agiArit = 'animationFadeOut';
        setTimeout(() => {
          this.resumen = 'animationFadeIn';
          this.gameOver = true;
          this.btn = 'Reintentar';
          this.puntos = 'Tiempo fuera!!!';
        }, 1000);
          //this.resultado = 'Aciertos: '+this.aciertos+' Fallos: '+this.fallo;
        clearInterval(this.time);
      }
    },1000);
  }

}
