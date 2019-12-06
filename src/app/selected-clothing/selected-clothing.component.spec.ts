import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedClothingComponent } from './selected-clothing.component';

describe('SelectedClothingComponent', () => {
  let component: SelectedClothingComponent;
  let fixture: ComponentFixture<SelectedClothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedClothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
