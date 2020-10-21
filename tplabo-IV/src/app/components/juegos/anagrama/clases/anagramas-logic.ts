import { anagramas } from './palabra';

export class AnagramasLogic {
  private noRepetidos : Array<number>;
  private respuesta : Array<string>;
  public constructor(){
    this.noRepetidos = [];
  }

  GetWord() {
    let i: number;
    do{
      i = Math.floor(Math.random()*anagramas.length);
    }while(this.noRepetidos.includes(i));
    this.noRepetidos.push(i);
    this.respuesta = anagramas[i].respuesta;
    return anagramas[i].palabra;
  }

  CheckWord(anagrama : string, palabra : string){
    palabra = palabra.trim();
    if(anagrama.length == palabra.length && anagrama !== palabra){
      if(this.respuesta.includes(palabra)){
        return true;
      }
    }

    return false;
  }
}
