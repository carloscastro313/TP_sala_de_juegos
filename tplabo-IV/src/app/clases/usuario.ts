export class Usuario {
  public correo : string;
  public clave : string;
  public sexo : string;
  public perfil : string;
  public id : number;

  public constructor(correo,clave,perfil,sexo,id=0){
      this.clave = clave;
      this.correo = correo;
      this.perfil = perfil;
      this.sexo = sexo;
      this.id = id;
  }
  public SetId(id){
      this.id = id;
  }
}
