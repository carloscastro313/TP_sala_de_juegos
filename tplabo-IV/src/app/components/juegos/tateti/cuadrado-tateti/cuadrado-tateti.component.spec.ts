import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadradoTatetiComponent } from './cuadrado-tateti.component';

describe('CuadradoTatetiComponent', () => {
  let component: CuadradoTatetiComponent;
  let fixture: ComponentFixture<CuadradoTatetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadradoTatetiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadradoTatetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
