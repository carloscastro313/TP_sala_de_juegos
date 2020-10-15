import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-adivinar',
  templateUrl: './start-adivinar.component.html',
  styleUrls: ['./start-adivinar.component.scss']
})
export class StartAdivinarComponent implements OnInit {

  adivinar : string;
  resumen : string;
  gameOver : boolean;
  btn : string;

  numeroOculto : string;
  numero : string;
  ingreso : string;
  counter : number;
  time : any;
  resultado : string;
  puntos : number;

  constructor() { }

  ngOnInit(): void {
    this.gameOver = true;
    this.btn = 'Empezar';
    this.resultado = 'Adivina el numero de 4 digitos en menos de 45 seg';
    this.resumen = 'animationFadeIn';
  }

  Start(){
    this.resumen = 'animationFadeOut';
    setTimeout(() => {
      this.gameOver = false;
      this.adivinar = 'animationFadeIn';
      this.puntos = 0;
      this.numeroOculto="????";
      this.btn = 'OK'
      this.GetNumeroRand();
      this.Time();
    }, 1000);
  }

  GetNumeroRand(){
    this.numero = Math.floor(Math.random()*(9999 - 1000) + 1000).toString();
  }

  Chequear(){
    for (let index = 0; index < this.numero.length; index++) {
      if(this.ingreso[index] == this.numero[index] && this.numero[index] != this.numeroOculto[index]){
        this.numeroOculto = this.replaceString(index,this.numeroOculto,this.numero[index]);
        this.puntos++;
      }
    }
    if(this.ingreso == this.numero || this.puntos == 4){
      let aux = 45 - this.counter;
      this.resultado = "Has superado la prueba en " + aux + " segundos";
      this.btn = 'Volver a intentarlo';

      this.adivinar = 'animationFadeOut';
      setTimeout(() => {
        this.resumen = 'animationFadeIn';
        this.gameOver = true;
      }, 1000);
    }

    this.ingreso = '';
  }

  Time(){
    this.counter = 45;

    this.time = setInterval(()=>{
      this.counter = this.counter - 1;
      if(this.counter === 0){
        this.adivinar = 'animationFadeOut';
        setTimeout(() => {
          this.resumen = 'animationFadeIn';
          this.gameOver = true;
          this.btn = 'reintentar';
          this.resultado = 'Tiempo fuera!!!';
        }, 1000);
          //this.resultado = 'Aciertos: '+this.aciertos+' Fallos: '+this.fallo;
        clearInterval(this.time);
      }
    },1000);
  }

  replaceString(index : number, word : string, replacement : string){
    return word.substr(0, index) + replacement + word.substr(index + replacement.length);
  }
}
