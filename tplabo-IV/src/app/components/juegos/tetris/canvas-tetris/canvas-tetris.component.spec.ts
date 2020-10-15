import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasTetrisComponent } from './canvas-tetris.component';

describe('CanvasTetrisComponent', () => {
  let component: CanvasTetrisComponent;
  let fixture: ComponentFixture<CanvasTetrisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasTetrisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasTetrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
