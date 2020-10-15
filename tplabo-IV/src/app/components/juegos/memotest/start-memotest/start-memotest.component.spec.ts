import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMemotestComponent } from './start-memotest.component';

describe('StartMemotestComponent', () => {
  let component: StartMemotestComponent;
  let fixture: ComponentFixture<StartMemotestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartMemotestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartMemotestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
