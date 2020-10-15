import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

@Component({
  selector: 'app-pie-pap-tij',
  templateUrl: './pie-pap-tij.component.html',
  styleUrls: ['./pie-pap-tij.component.scss']
})
export class PiePapTijComponent implements OnInit {

  constructor(
    private router : Router
  ) {
   }

  ngOnInit(): void {

  }

}
