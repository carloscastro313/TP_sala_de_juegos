import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadrado-tateti',
  templateUrl: './cuadrado-tateti.component.html',
  styleUrls: ['./cuadrado-tateti.component.scss']
})
export class CuadradoTatetiComponent implements OnInit {

  @Input() value:  'X' | 'O';

  constructor() { }

  ngOnInit(): void {
  }

}
