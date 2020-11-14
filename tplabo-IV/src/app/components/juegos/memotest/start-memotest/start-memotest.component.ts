import { LoginService } from './../../../../service/loginService/login.service';
import { ScoreService } from './../../../../service/score.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-memotest',
  templateUrl: './start-memotest.component.html',
  styleUrls: ['./start-memotest.component.scss']
})
export class StartMemotestComponent implements OnInit {

  resumen : string;
  memotest : string;

  empezar : string = 'Empezar';
  cuadrado : any[];
  figuras : any = ['A','B','C','D','E','F','G','H','A','B','C','D','E','F','G','H'];
  selectedIndex : number[];
  resultado : any;
  checker : any;
  startGame : boolean = false;
  startScreen : boolean;
  counter: number = 45;
  time:any;

  constructor(private ScoreService : ScoreService, private LoginService : LoginService) { }

  ngOnInit(): void {
    this.resumen = 'animationFadeIn'
    this.startScreen = true;
    this.resultado ='Tenes 45 segundos paga completar el memotest, Suerte...'
  }

  NewGame( ){
    this.resumen = 'animationFadeOut'
    setTimeout(() => {
      this.memotest = 'animationFadeIn';
      this.cuadrado = Array(16).fill(null);
      this.selectedIndex = Array();
      this.shuffleArray(this.figuras);
      this.checkIguales();
      this.SetTime();
      this.resultado = 0;
      this.startGame = true;
      this.startScreen = false;
    }, 700);
  }

  MovePlayer(idx : number){
    if(!this.selectedIndex.includes(idx) && !this.cuadrado[idx] && this.selectedIndex.length != 2){
      this.selectedIndex.push(idx);
      this.cuadrado[idx] =this.figuras[idx];
      this.checkIguales();
    }
  }


  calculateWinner() {
    if(!this.cuadrado.includes(null)){
      this.resultado += this.counter * 200;
      this.counter = 1;
    }
  }

  checkIguales(){
    setTimeout(() => {
      if(this.selectedIndex[0] != null && this.selectedIndex[1] != null){
        if(this.figuras[this.selectedIndex[0]] !== this.figuras[this.selectedIndex[1]]){
          this.cuadrado[this.selectedIndex[0]] = null;
          this.cuadrado[this.selectedIndex[1]] = null;
        }else{
          this.resultado+= 100;
          this.calculateWinner();
        }
        this.selectedIndex = Array();
      }
    }, 1000);
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

  SetTime(){
    this.counter = 30;

    this.time = setInterval(()=>{
      this.counter = this.counter - 1;
      if(this.counter === 0){
        this.memotest = 'animationFadeOut';
        setTimeout(() => {
          this.resumen = 'animationFadeIn';
          this.startGame = false;
          this.empezar = 'reintentar';
          this.UploadScore();
          this.resultado = 'Puntos: '+this.resultado;
        }, 1000);
        //this.resultado = 'Aciertos: '+this.aciertos+' Fallos: '+this.fallo;
        clearInterval(this.time);
        clearInterval(this.checker);
      }
    },1000);
  }

  UploadScore(){
    if(this.resultado != 0){
      let user = this.LoginService.GetSesionActual()
      user = (JSON.parse(user)).correo;
      this.ScoreService.addElement("/MemoTest/",user,this.resultado);
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.time);
    clearInterval(this.checker);
  }
}
