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

  constructor(private _diccionarioService : DiccionarioService,private	anagramasLogic : AnagramasLogic) { }

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

  async Check(){
    this.resultado = ' ';
    this._diccionarioService.GetPalabra(this.palabra).subscribe((aux)=>{
      console.log(aux);
      let a = JSON.stringify(aux);
      console.log(!a.includes('-1'));
      if(this.anagramasLogic.CheckWord(this.anagrama.toLowerCase(),this.palabra.toLowerCase()) && !a.includes('-1')){
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
    });
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
          this.resultado = 'Aciertos: '+this.aciertos+'\n Fallos: '+this.fallo;
          console.log(this.gameOver);
        }, 1000);
        clearInterval(this.time);
      }
    },1000);
  }
}
