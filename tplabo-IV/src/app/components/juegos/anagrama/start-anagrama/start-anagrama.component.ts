import { LoginService } from './../../../../service/loginService/login.service';
import { ScoreService } from './../../../../service/score.service';
import { Component, OnInit } from '@angular/core';
import { DiccionarioService } from 'src/app/service/diccionario.service';
import { AnagramasLogic } from '../clases/anagramas-logic';

@Component({
  selector: 'app-start-anagrama',
  templateUrl: './start-anagrama.component.html',
  styleUrls: ['./start-anagrama.component.scss']
})
export class StartAnagramaComponent implements OnInit {

  endGame : string;
  startAnagrama : string;

  anagrama : string;
  palabra : string = '';
  resultado : string = ' ';
  start : string = 'Empezar';
  counter: number;
  time : any;
  aciertos : number;
  fallo : number;
  gameOver : boolean=true;
  listaPalabra : Array<string>;

  constructor(private	anagramasLogic : AnagramasLogic, private ScoreService : ScoreService, private LoginService : LoginService) { }

  ngOnInit(): void {
    this.resultado = 'Completa con el anagrama que corresponde en menos de 30.'
  }
  StartGame(){
    this.endGame = 'animationFadeOut';

    setTimeout(() => {
      this.startAnagrama = 'animationFadeIn';
      this.gameOver=false;
      this.anagrama = this.anagramasLogic.GetWord();
      this.listaPalabra = Array();
      this.aciertos = 0;
      this.fallo = 0;
      this.resultado = ' ';
      this.SetTime();
    }, 1000);

  }

  Check(){
    this.resultado = ' ';
    if(this.anagramasLogic.CheckWord(this.anagrama.toLowerCase(),this.palabra.toLowerCase())){
      this.resultado = 'Correcto';
      this.aciertos++;
      this.listaPalabra.push(this.anagrama);
    }else{
      this.resultado = 'Incorrecto';
      this.palabra = '';
      this.fallo++;
    }
    setTimeout(() => {
      if(!this.gameOver){
        this.anagrama = this.anagramasLogic.GetWord();
        this.palabra = '';
        this.resultado = ' ';
      }
    }, 500);
  }

  SetTime(){
    this.counter = 30;

    this.time = setInterval(()=>{
      this.counter = this.counter - 1;
      if(this.counter === 0){
        this.startAnagrama = 'animationFadeOut';
        setTimeout(() => {
          this.endGame = 'animationFadeIn';
          this.gameOver = true;
          this.start = 'reintentar';
          this.UploadScore();
          this.resultado = 'Aciertos: '+this.aciertos+'\n Fallos: '+this.fallo+'\nPuntos: '+((this.aciertos * 100) - (this.fallo * 100));
        }, 1000);
        clearInterval(this.time);
      }
    },1000);
  }

  UploadScore(){
    let puntos = (this.aciertos * 100) - (this.fallo * 100);
    if( puntos > 0){
      let user = this.LoginService.GetSesionActual()
      user = (JSON.parse(user)).correo;
      this.ScoreService.addElement("/anagramas/",user,puntos);
    }
  }
}
