import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manos',
  templateUrl: './manos.component.html',
  styleUrls: ['./manos.component.scss']
})
export class ManosComponent implements OnInit {

  @Input() value : string;

  constructor() { }

  ngOnInit(): void {
  }

}
