import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAnagramaComponent } from './start-anagrama.component';

describe('StartAnagramaComponent', () => {
  let component: StartAnagramaComponent;
  let fixture: ComponentFixture<StartAnagramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAnagramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartAnagramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
