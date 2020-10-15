import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAritmeticaComponent } from './start-aritmetica.component';

describe('StartAritmeticaComponent', () => {
  let component: StartAritmeticaComponent;
  let fixture: ComponentFixture<StartAritmeticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAritmeticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAritmeticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
