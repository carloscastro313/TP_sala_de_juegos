import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/loginService/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error : string = "";
  correo :string = '';
  clave : string = '';
  flag : boolean = false;

  constructor(
    public loginService : LoginService,
    public router : Router) {
     }
  ngOnInit(): void {

  }

  Login(){
    if(this.correo !== ''||this.correo !== ''){
      this.loginService.SignIn(this.correo,this.clave)
      .then(()=>{
        this.loginService.SetSesionActual(this.correo);
        this.router.navigate(['mainPage']);
      }).catch(()=>{
        this.error ='No existe usuario';
      })
    }else{
      this.error ='Campos vacios';
    }
  }

  Register(){
    let aux = document.getElementById('fade');
    aux.className = "animationFadeOut"

    setTimeout(() => {
      this.router.navigate(['register']);
    }, 1000);
  }
}
