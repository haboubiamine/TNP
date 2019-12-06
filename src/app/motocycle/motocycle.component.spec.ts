import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotocycleComponent } from './motocycle.component';

describe('MotocycleComponent', () => {
  let component: MotocycleComponent;
  let fixture: ComponentFixture<MotocycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotocycleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotocycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
