import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManosComponent } from './manos.component';

describe('ManosComponent', () => {
  let component: ManosComponent;
  let fixture: ComponentFixture<ManosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
