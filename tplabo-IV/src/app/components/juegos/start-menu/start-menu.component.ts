import { LoginService } from './../../../service/loginService/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit {

  correo : string;
  id : string;
  startMenu : string
  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
    this.GetUsuario();
    this.startMenu = 'animationFadeIn';
  }
  GetUsuario(){
    let aux : any= this.loginService.GetSesionActual();

    aux = JSON.parse(aux);

    this.id = aux.id;
    this.correo =aux.correo;
  }
}
