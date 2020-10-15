import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAdivinarComponent } from './start-adivinar.component';

describe('StartAdivinarComponent', () => {
  let component: StartAdivinarComponent;
  let fixture: ComponentFixture<StartAdivinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAdivinarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAdivinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
