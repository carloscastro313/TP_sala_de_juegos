import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadrado-memotest',
  templateUrl: './cuadrado-memotest.component.html',
  styleUrls: ['./cuadrado-memotest.component.scss']
})
export class CuadradoMemotestComponent implements OnInit {

  @Input() value:  'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' ;
  checker : any;
  color = 'transparent';

  constructor() { }

  ngOnInit(): void {
  }

}
