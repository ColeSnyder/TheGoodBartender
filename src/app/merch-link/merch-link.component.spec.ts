import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchLinkComponent } from './merch-link.component';

describe('MerchLinkComponent', () => {
  let component: MerchLinkComponent;
  let fixture: ComponentFixture<MerchLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
