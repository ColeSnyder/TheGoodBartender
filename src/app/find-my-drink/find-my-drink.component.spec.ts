import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMyDrinkComponent } from './find-my-drink.component';

describe('FindMyDrinkComponent', () => {
  let component: FindMyDrinkComponent;
  let fixture: ComponentFixture<FindMyDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMyDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMyDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
