import { LoginService } from 'src/app/service/loginService/login.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DiccionarioService } from 'src/app/service/diccionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  providers : [DiccionarioService],
})
export class MainPageComponent implements OnInit {

  userId : string;

  constructor(private LoginService : LoginService,private router : Router) { }

  ngOnInit(): void {
    this.checkLogin();
  }
  events: string[] = [];
  opened: boolean;
  shouldRun : boolean = true;
  checkLogin(){
    let aux : any= this.LoginService.GetSesionActual();
    if(aux != null){
      aux = JSON.parse(aux);
      this.userId = aux.id;
    }else{
      this.router.navigate(['../']);
    }
  }

  LogOut(){
    this.LoginService.SignOutSesionActual();
  }
}
