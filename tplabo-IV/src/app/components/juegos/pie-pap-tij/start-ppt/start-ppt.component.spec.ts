import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPPTComponent } from './start-ppt.component';

describe('StartPPTComponent', () => {
  let component: StartPPTComponent;
  let fixture: ComponentFixture<StartPPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPPTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
