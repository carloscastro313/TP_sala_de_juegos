import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { LoginService } from 'src/app/service/loginService/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error : string = '';
  correo :string = '';
  clave : string = '';
  sexo : string = '';
  perfil : string = '';


  constructor(
    private loginService : LoginService,
    private router: Router,
    ) {
    }
  ngOnInit(): void {
  }

  Cerrar(){
    let aux = document.getElementById('fade');
    aux.className = "animationFadeOut"

    setTimeout(() => {
      this.router.navigate(['']);
    }, 1000);
  }

  btn_registrar(){
    this.error = '';
    let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(this.correo !== '' || this.clave !== '' || this.perfil !== '' || this.sexo !==''){
      if(regex.exec(this.correo))
      {
        this.loginService.AgregarUsuario(this.correo,this.clave,this.sexo,this.perfil)
        .then(()=>{
          let user = new Usuario(this.correo,this.clave,this.perfil,this.sexo);
          this.loginService.guardarUsuario(user);
          console.log("OK!!!");
          this.Cerrar();
        }).catch(()=>{
          console.log("ERROR");
          this.error = 'Ya existe usuario';
        });
      }else{
        this.error = 'correo Invalido';
      }
    }else{
      this.error = 'Falta datos';
    }
  }
}
