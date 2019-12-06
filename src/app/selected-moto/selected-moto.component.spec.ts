import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMotoComponent } from './selected-moto.component';

describe('SelectedMotoComponent', () => {
  let component: SelectedMotoComponent;
  let fixture: ComponentFixture<SelectedMotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedMotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
