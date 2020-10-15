import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePapTijComponent } from './pie-pap-tij.component';

describe('PiePapTijComponent', () => {
  let component: PiePapTijComponent;
  let fixture: ComponentFixture<PiePapTijComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiePapTijComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiePapTijComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
