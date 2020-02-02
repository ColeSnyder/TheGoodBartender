import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDrinkComponentComponent } from './single-drink-component.component';

describe('SingleDrinkComponentComponent', () => {
  let component: SingleDrinkComponentComponent;
  let fixture: ComponentFixture<SingleDrinkComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDrinkComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDrinkComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
