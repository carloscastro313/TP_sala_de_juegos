import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/loginService/login.service';

@Component({
  selector: 'app-user-email',
  templateUrl: './user-email.component.html',
  styleUrls: ['./user-email.component.scss']
})
export class UserEmailComponent implements OnInit {

  correo : string;

  constructor(private _LoginService : LoginService) { }

  ngOnInit(): void {
    let aux : any= this._LoginService.GetSesionActual();
    aux = JSON.parse(aux);
    this.correo = aux?.correo;
  }
}
