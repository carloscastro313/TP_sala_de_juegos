import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTatetiComponent } from './start-tateti.component';

describe('StartTatetiComponent', () => {
  let component: StartTatetiComponent;
  let fixture: ComponentFixture<StartTatetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartTatetiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTatetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
