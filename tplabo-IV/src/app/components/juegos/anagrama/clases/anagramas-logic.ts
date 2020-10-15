import { palabras } from './palabra';

export class AnagramasLogic {
  private noRepetidos : Array<number>;

  public constructor(){
    this.noRepetidos = [];
  }

  GetWord() {
    let i: number;
    do{
      i = Math.floor(Math.random()*palabras.length);
    }while(this.noRepetidos.includes(i));
    this.noRepetidos.push(i);

    return palabras[i];
  }

  CheckWord(anagrama : string, palabra : string){
    palabra = palabra.trim();
    if(anagrama.length == palabra.length && anagrama !== palabra){
      for (let index = 0; index < palabra.length; index++) {
        if(!anagrama.includes(palabra[index])){
          return false;
        }
      }
    }else{
      return false;
    }

    return true;
  }
}
