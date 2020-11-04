import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { Usuario } from 'src/app/clases/usuario';
import { state } from '@angular/animations';
import { stat } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public usuarios : Usuario[];
  public id : number;
  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    ) {
      this.db.list<Usuario>('Usuarios/').valueChanges().subscribe(u =>{
        this.usuarios = u;
      });
      this.db.object<number>('Id').valueChanges().subscribe(id => {
        this.id = id;
      })
    }

  public AgregarUsuario(correo : string, clave : string, sexo : string, perfil : string){
    let aux = this.afAuth.createUserWithEmailAndPassword(correo,clave);

    return aux;
  }

  public guardarUsuario(user : Usuario){
    let aux : string = user.correo.replace(".","_");

    user.SetId(this.id +1);

    this.db.object('Usuarios/'+aux).set(user);;
    this.db.object('Id').set(user.id);
  }

  public SignIn(correo : string,clave : string){
    return this.afAuth.signInWithEmailAndPassword(correo,clave);
  }

  public SignOut(){
    this.afAuth.signOut()
    .then(()=>this.SignOutSesionActual());
  }

  public TraerTodo(){
    return this.usuarios;
  }
  public TraerUno(correo : string){
    return this.usuarios.find( element => element.correo === correo);;
  }

  public SetSesionActual(correo : string){
    let user = this.TraerUno(correo);
    user.clave="SuperSecretPassword";
    let aux = JSON.stringify(user);

    localStorage.setItem('user', aux);
  }
  public GetSesionActual(){
    return localStorage.getItem('user');
  }

  public SignOutSesionActual(){
    this.afAuth.signOut().then(()=>{
      localStorage.removeItem('user');
    });
  }

  public IsLog() : any{
    return this.afAuth.authState;
  }
}
