import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { LoginService } from 'src/app/service/loginService/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error : string = '';
  myForm : FormGroup;

  constructor(
    private loginService : LoginService,
    private router: Router,
    private fb : FormBuilder
    ) {
    }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      correo : ['',[
        Validators.required,
        Validators.email,
      ]],
      clave : ['',[
        Validators.required,
        Validators.minLength(6)
      ]],
      sexo : ['',[
        Validators.required,
      ]],
      perfil : ['',[
        Validators.required
      ]]
    })
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

    if(this.myForm.valid){
      let correo = this.myForm.get('correo').value;
      let clave = this.myForm.get('clave').value;
      let sexo = this.myForm.get('sexo').value;
      let perfil = this.myForm.get('perfil').value;
      this.loginService.AgregarUsuario(correo,clave,sexo,perfil)
        .then(()=>{
          let user = new Usuario(correo,clave,perfil,sexo);
          this.loginService.guardarUsuario(user);
          console.log("OK!!!");
          this.Cerrar();
        }).catch(()=>{
          console.log("ERROR");
          this.error = 'Ya existe usuario';
        });
    }
  }
}
